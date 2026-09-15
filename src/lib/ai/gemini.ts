import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(prompt: string) {
    const response  = await ai.interactions.create({
        model: "gemini-2.5-flash",
        input: prompt,
    });

    return response .output_text;
}

export async function askGeminiJSON(
    prompt: string,
    schema: Record<string, unknown>
) {
    const response = await ai.interactions.create({
        model: "gemini-2.5-flash",
        input: prompt,
        response_format: {
            type: "text",
            mime_type: "application/json",
            schema,
        },
    });

    return response.output_text;
}