"use client";

import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

interface DeleteButtonProps {
    id: string;
    deleteAction: (id: string) => Promise<{ success: boolean }>;
}

export default function DeleteButton({
    id,
    deleteAction,
}: DeleteButtonProps) {

    const router = useRouter();

    async function handleDelete() {
        const result = await deleteAction(id);

        if (result.success) {
            router.refresh();
        }
    }

    return (
        <div className="flex items-center gap-3 shrink-0">
            <button
                onClick={ handleDelete }
                className="px-2 py-1 rounded-md bg-surface-container-high border border-error/20 font-label-sm text-label-sm text-error flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]"><MdDelete /></span> Borrar
            </button>
        </div>
    );
}