import { z } from "zod";

export const messageSchema = z.object({
    role: z.enum(["USER", "ASSISTANT"]),

    content: z
        .string()
        .trim()
        .min(1, "El mensaje no puede estar vacío")
        .max(10000, "El mensaje es demasiado largo"),
});

export type MessageSchema = z.infer<typeof messageSchema>;