import { getMessages } from "@/actions/ai";
import { MessageRole } from "@/generated/prisma/enums";
import ReactMarkdown from "react-markdown";

function formatTime(date: Date): string {
    return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

export default async function MessagesIa() {
    const messages = await getMessages();

    if (messages.length === 0) {
        return (
            <div className="max-w-[80%] self-start flex flex-col gap-1">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-on-surface">
                    <p>¡Hola! Soy tu asistente de AgroPilot. ¿En qué puedo ayudarte con tus cultivos hoy?</p>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">{formatTime(new Date())}</span>
            </div>
        )
    }

    return (
        <>
            {messages.map((message) =>
                message.role === MessageRole.USUARIO ? (
                    <div key={message.id} className="max-w-[70%] self-end flex flex-col items-end gap-1">
                        <div className="bg-primary/15 border border-primary/20 p-4 rounded-2xl text-on-surface shadow-md">
                            <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                        <span className="text-[11px] text-on-surface-variant px-2">{formatTime(message.createdAt)}</span>
                    </div>
                ) : (
                    <div key={message.id} className="max-w-[80%] self-start flex flex-col gap-1">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-on-surface">
                            <div className="whitespace-pre-wrap">
                                <ReactMarkdown>
                                    {message.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <span className="text-[11px] text-on-surface-variant px-2">{formatTime(message.createdAt)}</span>
                    </div>
                )
            )}
        </>
    )
}