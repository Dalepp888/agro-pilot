"use server";

import { askGemini } from "@/lib/ai/gemini";
import { agroPilotSystemPrompt } from "@/lib/ai/prompts";

export async function askAI(message: string) {

    const prompt = `
        ${agroPilotSystemPrompt}

        Pregunta del agricultor:
        ${message}
    `;

    const result = await askGemini(prompt);

    return result;
}