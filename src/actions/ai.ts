"use server";

import { askGemini } from "@/lib/ai/gemini";
import { agroPilotSystemPrompt } from "@/lib/ai/prompts";
import { getPlotsForAI } from "./plot";
import { createConversationContext } from "@/lib/ai/context";
import { prisma } from "@/lib/prisma";
import { messageSchema } from "@/lib/validations/message.schema";
import { MessageRole } from "@/generated/prisma/enums";

const MAX_HISTORY = 20;

export async function askAI(message: string) {

    const plots = await getPlotsForAI()

    const plot = await createConversationContext(plots)

    const history = await prisma.message.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: MAX_HISTORY,
    });

    history.reverse();

    if (history.length > 0 && history[history.length - 1].role === MessageRole.USUARIO) {
        history.pop();
    }

    const conversation = history.map((msg) =>
        `${msg.role === MessageRole.USUARIO ? "Agricultor" : "Asistente"}: ${msg.content}`
    ).join("\n\n");

    const prompt = `
        ${agroPilotSystemPrompt}

        Informacion de las parcelas: 
        ${JSON.stringify(plot)}

        Conversacion previa:
        ${conversation || "(No hay conversacion previa)"}

        Pregunta del agricultor:
        ${message}
    `;

    const result = await askGemini(prompt);

    return result;
}

export async function createChatAI(data: unknown) {
    console.log(data)

    const result = messageSchema.safeParse(data);

    if (!result.success) {

        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const message = await prisma.message.create({

        data: {
            ...result.data,
        },
    });

    return {
        success: true,
        data: message,
    };
}

export async function getMessages() {
    return await prisma.message.findMany({
        orderBy: {
            createdAt: "asc",
        },
    });
}

export async function deleteMessages() {
    await prisma.message.deleteMany();

    return { success: true };
}