import { askAI, createChatAI } from "@/actions/ai";
import { MessageRole } from "@/generated/prisma/enums";
import { MessageErrors, MessageForm } from "@/types/message";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useMessage(conversationId: string) {

    const router = useRouter();

    const [message, setMessage] = useState<MessageForm>({
        role: MessageRole.USUARIO,

        content: "",
    });

    const [errors, setErrors] = useState<MessageErrors>({});

    const [loading, setLoading] = useState(false)

    async function handleSubmit() {
        if (!message.content.trim() || loading) return;

        if (!conversationId) {
            console.error("No se puede enviar el mensaje: la conversación aún no está lista.");
            return;
        }

        setLoading(true);

        try {
            const saved = await createChatAI({
                conversationId,
                content: message.content,
                role: MessageRole.USUARIO,
            });

            if (!saved.success) {
                console.error("No se pudo guardar el mensaje:", saved.errors);
                return;
            }

            const response = await askAI(message.content, conversationId);

            if (response?.trim()) {
                const savedAI = await createChatAI({
                    conversationId,
                    content: response,
                    role: MessageRole.ASSISTENTE,
                });

                if (!savedAI.success) {
                    console.error("No se pudo guardar la respuesta de la IA:", savedAI.errors);
                }
            }

            setMessage({
                role: MessageRole.USUARIO,
                content: "",
            });

            router.refresh();

        } finally {
            setLoading(false);
        }
    }

    return {
        message,
        setMessage,
        errors,
        setErrors,
        loading,
        setLoading,
        handleSubmit
    }
}