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

export async function findUniquePlot(id: string) {
    return await prisma.plot.findUnique({
        where: {
            id,
        }
    })
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

export async function updatePlot(id: string, data: unknown) {
    const result = plotSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    try {
        const plot = await prisma.plot.update({
            where: {
                id,
            },
            data: {
                name: result.data.name,
                cropName: result.data.cropName,
                variety: result.data.variety,
                area: result.data.area,
                latitude: result.data.latitude,
                longitude: result.data.longitude,
                plantingDate: result.data.plantingDate
                    ? new Date(result.data.plantingDate)
                    : null,
                notes: result.data.notes,
            },
        });

        return {
            success: true,
            data: plot,
        };
    } catch (error) {
        console.error("Error actualizando tarea:", error);

        return {
            success: false,
            error: "No se pudo actualizar la tarea",
        };
    }
}