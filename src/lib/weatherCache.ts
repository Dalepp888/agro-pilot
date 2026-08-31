import { getPlots } from "@/actions/plot";
import { getWeatherCache, upsertWeather } from "@/actions/weather";
import { getWeather } from "@/lib/weather";

const WEATHER_CACHE_TIME = 60 * 60 * 1000; // 1 hora

export async function updateWeatherForPlots() {
    const plots = await getPlots();

    for (const plot of plots) {
        const cache = await getWeatherCache(plot.id);

        const needsUpdate =
            !cache ||
            Date.now() - cache.updatedAt.getTime() > WEATHER_CACHE_TIME;

        if (!needsUpdate) {
            continue;
        }

        const weather = await getWeather(
            plot.latitude,
            plot.longitude
        );

        await upsertWeather(
            plot.id,
            weather
        );
    }
}