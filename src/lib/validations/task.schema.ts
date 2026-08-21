import { z } from "zod";

export const taskSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "El título debe tener al menos 3 caracteres")
        .max(100, "El título no puede superar los 100 caracteres"),

    description: z
        .string()
        .trim()
        .max(1000, "La descripción es demasiado larga")
        .optional(),

    dueDate: z
        .string()
        .min(1, "Selecciona una fecha"),

    plotId: z
        .string()
        .min(1, "Debes seleccionar una parcela"),
});

export type TaskSchema = z.infer<typeof taskSchema>;