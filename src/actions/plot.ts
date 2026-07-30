"use server";

import { prisma } from "@/lib/prisma";
import { plotSchema } from "@/lib/validations/plot.schema";

export async function createPlot(data: unknown) {
    console.log(data)

    const result = plotSchema.safeParse(data);

    if (!result.success) {

        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const plot = await prisma.plot.create({

        data: {
            ...result.data,
            plantingDate: new Date(result.data.plantingDate),
        },
    });

    return {
        success: true,
        data: plot,
    };
}

export async function getPlots() {
    return await prisma.plot.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function deletePlot(id: string) {
    try {
        await prisma.plot.delete({
            where: {
                id,
            },
        });

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            error: "No se pudo eliminar la parcela.",
        };
    }
}