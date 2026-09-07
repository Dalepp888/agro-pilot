"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdMore } from "react-icons/io";
import DeleteButton from "@/components/UI/buttonDelete";
import { ButtonUpdate } from "./buttonUpdate";

interface PlotActionsProps {
    id: string;
    deleteAction: (id: string) => Promise<{ success: boolean }>;
}

export default function PlotActions({
    id,
    deleteAction,
}: PlotActionsProps) {

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cerrar al hacer clic fuera
    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    return (
        <div
            ref={menuRef}
            className="relative"
        >

            <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full p-2 transition-colors"
            >
                <IoMdMore size={22} />
            </button>

            {open && (
                <div
                    className="
                        absolute right-0 top-full mt-2
                        w-44
                        overflow-hidden
                        rounded-xl
                        border border-white/10
                        bg-surface-container/95
                        backdrop-blur-xl
                        shadow-2xl shadow-black/30
                        z-50
                    "
                >

                    <DeleteButton
                        id={id}
                        deleteAction={async (id) => {
                            const result = await deleteAction(id);

                            if (result.success) {
                                setOpen(false);
                            }

                            return result;
                        }}
                    />
                    <div onClick={() => setOpen(false)}>
                        <ButtonUpdate id={id} />
                    </div>
                </div>
            )}

        </div>
    );
}