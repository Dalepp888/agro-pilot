"use client";

import { useRouter } from "next/navigation";
import { MdChatBubble, MdClose } from "react-icons/md";
import { deleteConversation } from "@/actions/conversation";
import DeleteButton from "@/components/UI/buttonDelete";
import { useChatSidebar } from "@/context/chatSidebarContext";
import { ConversationListItem } from "@/types/conversation";

interface ChatSidebarProps {
    conversations: ConversationListItem[];
    activeId: string | null;
}

function timeAgo(date: Date): string {
    const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMinutes < 1) return "ahora";
    if (diffMinutes < 60) return `hace ${diffMinutes} min`;

    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `hace ${hours} h`;

    const days = Math.floor(hours / 24);
    if (days === 1) return "ayer";
    if (days < 7) return `hace ${days} días`;

    return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

export default function ChatSidebar({ conversations, activeId }: ChatSidebarProps) {
    const { open, setOpen } = useChatSidebar();
    const router = useRouter();

    return (
        <>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
                />
            )}

            <aside
                className={`fixed left-0 lg:left-[280px] top-0 h-full w-full sm:w-[320px] z-40 bg-surface-container-low/30 backdrop-blur-3xl border-r border-outline-variant/10 flex flex-col py-6 transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="px-6 mb-8 flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md font-bold text-primary leading-tight">
                        Conversaciones
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        title="Cerrar conversaciones"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
                    >
                        <MdClose />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto space-y-1">
                    {conversations.length === 0 ? (
                        <div className="px-6">
                            <div className="glass-card p-6 rounded-xl">
                                <p className="font-body-md text-body-md text-on-surface">
                                    Sin conversaciones guardadas
                                </p>
                                <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">
                                    Acá van a aparecer tus conversaciones con la IA.
                                </p>
                            </div>
                        </div>
                    ) : conversations.map((conversation) => {
                        const isActive = conversation.id === activeId;

                        return (
                            <div
                                key={conversation.id}
                                className={`flex items-center gap-1 pr-5 transition-all duration-300 ${
                                    isActive
                                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20"
                                }`}
                            >
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        router.replace(`/IA?c=${conversation.id}`);
                                    }}
                                    className="flex items-start gap-3 px-5 py-3 flex-1 min-w-0 text-left"
                                >
                                    <MdChatBubble className="mt-1 shrink-0" />

                                    <div className="min-w-0">
                                        <p className="font-body-md text-body-md truncate">
                                            {conversation.title ?? "Nueva conversación"}
                                        </p>
                                        <p className="font-label-sm text-label-sm opacity-70">
                                            {timeAgo(conversation.updatedAt)}
                                        </p>
                                    </div>
                                </button>

                                <DeleteButton
                                    id={conversation.id}
                                    deleteAction={deleteConversation}
                                    title="Borrar conversación"
                                    message="Se eliminará la conversación con todos sus mensajes de forma permanente. ¿Estás seguro que deseas borrarla?"
                                    navigateTo={isActive ? "/IA" : undefined}
                                />
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </>
    )
}