"use client";

import { IoMdAddCircleOutline } from "react-icons/io";
import { startNewConversation } from "@/actions/conversation";
import { useFormStatus } from "react-dom";

function SubmitButton() {

    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:hover:scale-100">
            <span className="material-symbols-outlined text-[20px]"><IoMdAddCircleOutline /></span>
            {pending ? "Creando..." : "Nueva conversación"}
        </button>
    )
}

export default function NewConversationButton() {

    return (
        <form action={startNewConversation}>
            <SubmitButton />
        </form>
    )
}