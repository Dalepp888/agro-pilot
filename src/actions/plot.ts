"use server";

import { prisma } from "@/lib/prisma";

type CreatePlotData = {
    name: string;
    cropName: string;
    variety?: string;
    area?: number;
    latitude: number;
    longitude: number;
    plantingDate?: Date;
    notes?: string;
};

export async function createPlot(data: CreatePlotData) {
    try {
        const plot = await prisma.plot.create({
            data,
        });

        return {
            success: true,
            data: plot,
        };
    } catch (error) {
        console.error("Error al crear la parcela:", error);

        return {
            success: false,
            error: "No se pudo crear la parcela.",
        };
    }
}