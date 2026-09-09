import { getPlots } from "@/actions/plot";
import { getTask } from "@/actions/task";
import { getWeatherCache } from "@/actions/weather";
import { updateWeatherForPlots } from "@/lib/weatherCache";
import type { OpenMeteoWeather } from "@/types/weather";
import CardPlot from "./cardPlot";

export default async function SectionPlots() {

    const plot = await getPlots()
    const task = await getTask()

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

    const nextTaskByPlot: Record<string, { title: string; dueDate: Date } | null> = {};

    for (const p of plot) {
        const pending = task
            .filter((t) => t.plotId === p.id && !t.completed)
            .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

        nextTaskByPlot[p.id] = pending.length > 0
            ? { title: pending[0].title, dueDate: pending[0].dueDate }
            : null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <CardPlot plot={plot} weatherByPlot={weatherByPlot} nextTaskByPlot={nextTaskByPlot} />
        </div>
    )
}