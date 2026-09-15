import { z } from "zod";

export const notificationSchema = z.object({
    title: z.string().trim().min(1, "El título no puede estar vacío"),
    message: z.string().trim().min(1, "El mensaje no puede estar vacío"),
    plotId: z.string().nullable().optional(),
});

export const notificationsResponseSchema = z.object({
    notifications: z.array(notificationSchema),
});

export type NotificationSchema = z.infer<typeof notificationSchema>;
export type NotificationsResponseSchema = z.infer<typeof notificationsResponseSchema>;