import { prisma } from "@/lib/prisma";

export async function upsertWeather(
    plotId: string,
    data: object
) {
    return await prisma.weatherCache.upsert({
        where: {
            plotId,
        },
        create: {
            plotId,
            data,
        },
        update: {
            data,
        },
    });
}

export async function getWeatherCache(plotId: string) {
    return await prisma.weatherCache.findUnique({
        where: {
            plotId,
        },
    });
}