import { getPlots } from "@/actions/plot";
import { getWeatherCache } from "@/actions/weather";
import { updateWeatherForPlots } from "@/lib/weatherCache";
import type { OpenMeteoWeather } from "@/types/weather";
import CardPlot from "./cardPlot";

export default async function SectionPlots() {

    const plot = await getPlots()

    const weatherByPlot: Record<string, OpenMeteoWeather> = {};

    try {
        await updateWeatherForPlots();

        for (const p of plot) {
            const cache = await getWeatherCache(p.id);
            if (cache?.data) {
                weatherByPlot[p.id] = cache.data as unknown as OpenMeteoWeather;
            }
        }
    } catch (error) {
        console.error("Error obteniendo el clima de las parcelas:", error);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <CardPlot plot={plot} weatherByPlot={weatherByPlot} />
        </div>
    )
}