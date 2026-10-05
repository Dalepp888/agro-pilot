import HeaderSection from "@/components/plots/detailPlots/headerSection";
import PlotMapClient from "@/components/map/plotMapClient";
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
            <main className="flex-1 ml-0 lg:ml-[280px] min-h-screen relative overflow-hidden">
                <div className="p-4 sm:p-6 max-w-7xl mx-auto">
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
                                <section className="glass-card p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-headline-md font-headline-md text-on-surface">Ubicación de la parcela</h3>
                                    </div>
                                    <PlotMapClient
                                        latitude={plotData.latitude}
                                        longitude={plotData.longitude}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
                    <ButtonIA plotId={plotData.id} />
                </div>
            </main>
        </>
    )
}