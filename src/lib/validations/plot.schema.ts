import { z } from "zod";

export const plotSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(80, "El nombre es demasiado largo"),

    cropName: z
        .string()
        .trim()
        .min(2, "Debes indicar el cultivo")
        .max(50),

    variety: z
        .string()
        .trim()
        .max(80)
        .optional(),

    area: z
        .number()
        .positive("La superficie debe ser mayor que 0")
        .nullable(),

    latitude: z
        .number()
        .min(-90)
        .max(90),

    longitude: z
        .number()
        .min(-180)
        .max(180),

    plantingDate: z
        .string()
        .min(1, "Selecciona una fecha"),

    notes: z
        .string()
        .trim()
        .max(1000)
        .optional(),
});

export type PlotSchema = z.infer<typeof plotSchema>;
