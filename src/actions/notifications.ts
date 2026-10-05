"use server";

import { getPlotsForAI } from "@/actions/plot";
import { askGeminiJSON } from "@/lib/ai/gemini";
import { agroPilotNotificationPrompt } from "@/lib/ai/prompts";
import { prisma } from "@/lib/prisma";
import {
    notificationSchema,
    notificationsResponseSchema,
} from "@/lib/validations/notifications.schema";

const NOTIFICATION_SCHEMA = {
    type: "object",
    properties: {
        notifications: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    title: { type: "string" },
                    message: { type: "string" },
                    plotId: { type: "string" },
                },
                required: ["title", "message"],
            },
        },
    },
    required: ["notifications"],
};

export async function generateNotifications() {
    const plots = await getPlotsForAI();

    const context = plots.map((plot) => ({
        id: plot.id,
        nombre: plot.name,
        cultivo: plot.cropName,
        variedad: plot.variety,
        fechaSiembra: plot.plantingDate,
        ubicacion: {
            latitud: plot.latitude,
            longitud: plot.longitude,
        },
        clima: plot.weatherCache,
        tareasPendientes: plot.tasks
            .filter((task) => !task.completed)
            .map((task) => ({
                titulo: task.title,
                descripcion: task.description,
                fecha: task.dueDate,
            })),
    }));

    const prompt = agroPilotNotificationPrompt.replace(
        "{{CONTEXT}}",
        JSON.stringify(context)
    );

    const raw = await askGeminiJSON(prompt, NOTIFICATION_SCHEMA);

    if (!raw) {
        console.error("Gemini no devolvió respuesta para las notificaciones.");

        return { success: false, notifications: [] };
    }

    let parsed;

    try {
        const cleanRaw = raw
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/\s*```$/i, "")
            .trim();

        parsed = notificationsResponseSchema.safeParse(
            JSON.parse(cleanRaw)
        );
    } catch (error) {
        console.error("No se pudo parsear el JSON de notificaciones:", error);

        return { success: false, notifications: [] };
    }

    if (!parsed.success) {
        console.error("Respuesta de notificaciones inválida:", parsed.error.flatten());

        return { success: false, notifications: [] };
    }

    const plotIds = new Set(plots.map((plot) => plot.id));

    let savedCount = 0;

    for (const notification of parsed.data.notifications) {
        if (notification.plotId && !plotIds.has(notification.plotId)) continue;

        const result = await createNotification(notification);

        if (result.success) savedCount++;
    }

    console.log(`[notifications] Guardadas: ${savedCount} de ${parsed.data.notifications.length}`);

    return { success: true, notifications: parsed.data.notifications };
}

export async function deleteExpiredNotifications(days = 7) {

    try {
        const cutoff = new Date();

        cutoff.setDate(cutoff.getDate() - days);

        const { count } = await prisma.notification.deleteMany({
            where: {
                createdAt: {
                    lt: cutoff,
                },
            },
        });

        return {
            success: true,
            count,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            count: 0,
            error: "No se pudieron eliminar las notificaciones vencidas.",
        };
    }
}

export async function getNotifications() {
    return await prisma.notification.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: {
            plot: true,
        },
    });
}

export async function deleteNotification(id: string) {
    try {
        await prisma.notification.delete({
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
            error: "No se pudo eliminar la notificación.",
        };
    }
}

export async function getRecentNotifications(take = 5) {
    const notifications = await prisma.notification.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take,
        include: {
            plot: {
                select: { name: true },
            },
        },
    });

    return notifications.map((notification) => ({
        id: notification.id,
        title: notification.title,
        message: notification.message,
        read: notification.read,
        createdAt: notification.createdAt.toISOString(),
        plotName: notification.plot?.name ?? null,
    }));
}

export async function createNotification(data: unknown) {
    const result = notificationSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const notification = await prisma.notification.create({
        data: {
            ...result.data,
        },
    });

    return {
        success: true,
        data: notification,
    };
}