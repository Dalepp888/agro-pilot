"use client"

import { ReactNode, useState } from "react"
import ChatSidebar from "@/components/IA/chatSidebar"
import { ChatSidebarContext } from "@/context/chatSidebarContext"
import { ConversationListItem } from "@/types/conversation"

interface ChatLayoutProps {
    children: ReactNode
    conversations: ConversationListItem[]
    activeId: string | null
}

export default function ChatLayout({ children, conversations, activeId }: ChatLayoutProps) {

    const [open, setOpen] = useState(false)

    return (
        <ChatSidebarContext.Provider value={{ open, setOpen }}>
            <ChatSidebar conversations={conversations} activeId={activeId} />

            <div
                className={`min-h-screen min-w-0 transition-all duration-300 ${open
                        ? "lg:ml-[600px] lg:w-[calc(100%-600px)]"
                        : "lg:ml-[280px] lg:w-[calc(100%-280px)]"
                    }`}
            >
                {children}
            </div>
        </ChatSidebarContext.Provider>
    )
}