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
            const target = event.target as HTMLElement;

            // No cerrar el menú si el click ocurre dentro de un modal (portal)
            if (target.closest(".fixed.inset-0")) {
                return;
            }

            if (
                menuRef.current &&
                !menuRef.current.contains(target)
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
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setOpen((prev) => !prev);
                }}
                className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full p-2 transition-colors"
            >
                <IoMdMore size={22} />
            </button>

            {open && (
                <div
                    onClick={(e) => e.stopPropagation()}
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
                        title="Borrar parcela"
                        message="Se eliminará la parcela y todos los datos asociados a ella (tareas y clima guardado). ¿Estás seguro que deseas borrarla?"
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