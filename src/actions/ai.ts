"use server";

import { askGemini } from "@/lib/ai/gemini";
import { agroPilotSystemPrompt } from "@/lib/ai/prompts";
import { getPlotsForAI } from "./plot";
import { createConversationContext } from "@/lib/ai/context";
import { prisma } from "@/lib/prisma";
import { messageSchema } from "@/lib/validations/message.schema";
import { MessageRole } from "@/generated/prisma/enums";

const MAX_HISTORY = 20;
const TITLE_LENGTH = 60;

export async function askAI(message: string, conversationId: string) {

    const plots = await getPlotsForAI()

    const plot = await createConversationContext(plots)

    const history = await prisma.message.findMany({
        where: {
            conversationId,
        },
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

    const result = messageSchema.safeParse(data);

    if (!result.success) {

        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { conversationId, role, content } = result.data;

    const conversation = await prisma.conversation.findUnique({
        where: {
            id: conversationId,
        },
    });

    if (!conversation) {

        return {
            success: false,
            errors: {
                conversationId: ["La conversación no existe"],
            },
        };
    }

    const message = await prisma.message.create({
        data: {
            conversationId,
            role,
            content,
        },
    });

    await prisma.conversation.update({
        where: {
            id: conversationId,
        },
        data: {
            updatedAt: new Date(),
            title: conversation.title ?? (role === MessageRole.USUARIO ? content.slice(0, TITLE_LENGTH) : null),
        },
    });

    return {
        success: true,
        data: message,
    };
}

export async function getMessages(conversationId: string) {
    if (!conversationId) {
        return [];
    }

    return await prisma.message.findMany({
        where: {
            conversationId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}