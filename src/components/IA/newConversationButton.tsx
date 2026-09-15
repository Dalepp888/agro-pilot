"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ConfirmModal from "@/components/UI/confirmModal";
import { deleteMessages } from "@/actions/ai";
import { useAppMessage } from "@/context/messageContext";
import { MessageRole } from "@/generated/prisma/enums";

export default function NewConversationButton() {

    const router = useRouter();
    const { setMessage } = useAppMessage();
    const [open, setOpen] = useState(false);
    const [pending, setPending] = useState(false);

    async function handleConfirm() {
        setPending(true);

        const result = await deleteMessages();

        if (result.success) {
            setMessage({
                role: MessageRole.USUARIO,
                content: "",
            });
            setOpen(false);
            router.refresh();
        } else {
            setPending(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]"><IoMdAddCircleOutline /></span>
                Nueva conversación
            </button>

            <ConfirmModal
                open={open}
                title="Nueva conversación"
                message="Se borrará todo el historial del chat y empezarás desde cero. ¿Estás seguro?"
                confirmLabel={pending ? "Borrando..." : "Borrar historial"}
                onCancel={() => setOpen(false)}
                onConfirm={handleConfirm}
            />
        </>
    )
}