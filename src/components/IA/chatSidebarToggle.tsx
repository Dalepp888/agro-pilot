"use client";

import { MdOutlineMenuOpen } from "react-icons/md";
import { useChatSidebar } from "@/context/chatSidebarContext";

export default function ChatSidebarToggle() {
    const { open, setOpen } = useChatSidebar();

    return (
        <button
            onClick={() => setOpen(!open)}
            title="Ver conversaciones"
            aria-label="Ver conversaciones"
            className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
        >
            <MdOutlineMenuOpen className="text-[24px]" />
        </button>
    )
}