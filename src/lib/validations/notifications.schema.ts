import { z } from "zod";

export const notificationSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "El título debe tener al menos 3 caracteres")
        .max(100, "El título es demasiado largo"),

    message: z
        .string()
        .trim()
        .min(5, "El mensaje debe tener al menos 5 caracteres")
        .max(1000, "El mensaje es demasiado largo"),

    read: z
        .boolean()
        .default(false),

    plotId: z
        .string()
        .optional(),
});

export type NotificationSchema = z.infer<typeof notificationSchema>;