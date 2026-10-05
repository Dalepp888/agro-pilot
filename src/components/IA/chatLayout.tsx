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
                className={`min-h-screen transition-all duration-300 ${open ? "ml-[600px]" : "ml-[280px]"}`}>
                {children}
            </div>
        </ChatSidebarContext.Provider>
    )
}