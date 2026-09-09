"use server";

import { askGemini } from "@/lib/ai/gemini";
import { agroPilotSystemPrompt } from "@/lib/ai/prompts";
import { getPlotsForAI } from "./plot";
import { createConversationContext } from "@/lib/ai/context";

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