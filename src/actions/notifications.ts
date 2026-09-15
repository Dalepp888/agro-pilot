"use server";

import { getPlotsForAI } from "@/actions/plot";
import { askGeminiJSON } from "@/lib/ai/gemini";
import { agroPilotNotificationPrompt } from "@/lib/ai/prompts";
import { notificationsResponseSchema } from "@/lib/validations/notifications.schema";

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
        parsed = notificationsResponseSchema.safeParse(JSON.parse(raw));
    } catch (error) {
        console.error("No se pudo parsear el JSON de notificaciones:", error);

        return { success: false, notifications: [] };
    }

    if (!parsed.success) {
        console.error("Respuesta de notificaciones inválida:", parsed.error.flatten());

        return { success: false, notifications: [] };
    }

    return { success: true, notifications: parsed.data.notifications };
}