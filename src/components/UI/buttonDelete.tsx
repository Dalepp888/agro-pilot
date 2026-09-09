"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import ConfirmModal from "./confirmModal";

interface DeleteButtonProps {
    id: string;
    deleteAction: (id: string) => Promise<{ success: boolean }>;
    title?: string;
    message?: string;
    className?: string;
    navigateTo?: string;
}

export default function DeleteButton({
    id,
    deleteAction,
    title = "Borrar",
    message = "Estás seguro que deseas borrar este elemento?",
    className = "",
    navigateTo,
}: DeleteButtonProps) {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [pending, setPending] = useState(false);

    async function handleConfirm() {
        setPending(true);
        const result = await deleteAction(id);

        if (result.success) {
            setOpen(false);
            if (navigateTo) {
                router.push(navigateTo);
            } else {
                router.refresh();
            }
        } else {
            setPending(false);
        }
    }

    return (
        <div className="flex items-center gap-3 shrink-0">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(true);
                }}
                className={`px-2 py-1 rounded-md bg-surface-container-high border border-error/20 font-label-sm text-label-sm text-error flex items-center gap-1 ${className}`}>
                <span className="material-symbols-outlined text-[14px]"><MdDelete /></span> Borrar
            </button>

            <ConfirmModal
                open={open}
                title={title}
                message={message}
                confirmLabel={pending ? "Borrando..." : "Borrar"}
                onCancel={() => setOpen(false)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}