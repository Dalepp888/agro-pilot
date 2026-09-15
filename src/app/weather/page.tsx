import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import DayForecast from "@/components/weather/dayForecast";
import ForecastHour from "@/components/weather/forecastHour";
import HeroWeather from "@/components/weather/heroWeather";
import WelcomeWeather from "@/components/weather/welcomeWeather";
import { findUniquePlot } from "@/actions/plot";
import { getWeatherCache, upsertWeather } from "@/actions/weather";
import { getWeather } from "@/lib/weather";
import type { OpenMeteoWeather } from "@/types/weather";

const WEATHER_CACHE_TIME = 60 * 60 * 1000; // 1 hora

interface WeatherPageProps {
    searchParams: Promise<{ plotId?: string }>;
}

export default async function Weather({ searchParams }: WeatherPageProps) {

    const { plotId } = await searchParams;

    let plotName: string | undefined;
    let weather: OpenMeteoWeather | null = null;

    if (plotId) {
        try {
            const plot = await findUniquePlot(plotId);

            if (plot) {
                plotName = plot.name;

                const cache = await getWeatherCache(plotId);

                const needsUpdate =
                    !cache ||
                    Date.now() - cache.updatedAt.getTime() > WEATHER_CACHE_TIME ||
                    !(cache.data as OpenMeteoWeather | null)?.hourly;

                if (needsUpdate) {
                    const fresh = await getWeather(
                        plot.latitude,
                        plot.longitude
                    );
                    await upsertWeather(plotId, fresh);
                    weather = fresh;
                } else if (cache?.data) {
                    weather = cache.data as unknown as OpenMeteoWeather;
                }

                console.log("[weather] Parcela:", plot.name, plotId);
                console.log("[weather] Datos extraídos:", weather);
            } else {
                console.log("[weather] No se encontró la parcela:", plotId);
            }
        } catch (error) {
            console.error("[weather] Error obteniendo el clima de la parcela:", error);
        }
    }

    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] p-5 h-screen overflow-y-auto relative">
                <TopBar />
                <WelcomeWeather plotName={plotName} />
                <div className="grid gap-y-10 gap-x-2 p-4">
                    <div className="col-span-12 w-[70vw] m-auto lg:col-span-7 py-4">
                        <HeroWeather weather={weather ?? undefined} />
                        <ForecastHour weather={weather ?? undefined} />
                        <DayForecast weather={weather ?? undefined} />
                    </div>
                </div>
        </main >
        </>
    )
}