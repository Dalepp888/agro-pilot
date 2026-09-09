import HeaderSection from "@/components/plots/detailPlots/headerSection";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import HistoryActivities from "@/components/plots/detailPlots/tasksPlot";
import SectionWeather from "@/components/plots/detailPlots/sectionWeather";
import TipeCrop from "@/components/plots/detailPlots/tipeCrop";
import ButtonIA from "@/components/UI/buttonIA";
import { findUniquePlot } from "@/actions/plot";
import { getWeatherCache, upsertWeather } from "@/actions/weather";
import { getWeather } from "@/lib/weather";
import { notFound } from "next/navigation";
import type { OpenMeteoWeather } from "@/types/weather";

const WEATHER_CACHE_TIME = 60 * 60 * 1000; // 1 hora

interface PlotDetailPageProps {
    params: Promise<{ plot: string }>;
}

export default async function Plots({ params }: PlotDetailPageProps) {

    const { plot: plotId } = await params;

    const plotData = await findUniquePlot(plotId);

    if (!plotData) {
        notFound();
    }

    let weather: OpenMeteoWeather | null = null;

    try {
        const cache = await getWeatherCache(plotId);

        const needsUpdate =
            !cache ||
            Date.now() - cache.updatedAt.getTime() > WEATHER_CACHE_TIME;

        if (needsUpdate) {
            const fresh = await getWeather(
                plotData.latitude,
                plotData.longitude
            );
            await upsertWeather(plotId, fresh);
            weather = fresh;
        } else if (cache?.data) {
            weather = cache.data as unknown as OpenMeteoWeather;
        }
    } catch (error) {
        console.error("Error obteniendo el clima de la parcela:", error);
    }

    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] h-screen overflow-y-auto relative">
                <TopBar />
                <div className="pt-24 px-8 pb-12 max-w-7xl mx-auto space-y-6">
                    <HeaderSection plot={plotData} />
                    <div className="grid grid-cols-12 gap-y-10 gap-x-2">
                        <div className="col-span-12 lg:col-span-7 py-4 space-y-6">
                            <TipeCrop plot={plotData} />
                            <HistoryActivities plotId={plotData.id} />
                        </div>
                        <div className="col-span-12 lg:col-span-5 py-4 space-y-6">
                            <SectionWeather weather={weather} />
                        </div>
                    </div>
                </div>
                <ButtonIA />
            </main>
        </>
    )
}