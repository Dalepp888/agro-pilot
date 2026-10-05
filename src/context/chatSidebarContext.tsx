"use client"

import { createContext, useContext } from "react"

interface ChatSidebarContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

export const ChatSidebarContext = createContext<ChatSidebarContextType | null>(null)

export const useChatSidebar = (): ChatSidebarContextType => {
    const context = useContext(ChatSidebarContext)

    if (!context) {
        throw new Error("useChatSidebar debe usarse dentro de ChatSidebarContext")
    }

    return context
}