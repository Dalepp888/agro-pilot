"use server";

import { askGemini } from "@/lib/ai/gemini";
import { agroPilotSystemPrompt } from "@/lib/ai/prompts";
import { getPlotsForAI } from "./plot";
import { createConversationContext } from "@/lib/ai/context";
import { prisma } from "@/lib/prisma";
import { messageSchema } from "@/lib/validations/message.schema";

export async function askAI(message: string) {

    const plots = await getPlotsForAI()

    const plot = await createConversationContext(plots)

    const prompt = `
        ${agroPilotSystemPrompt}

        Informacion de las parcelas: 
        ${JSON.stringify(plot)}

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