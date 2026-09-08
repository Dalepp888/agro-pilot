"use client";

import { createPortal } from "react-dom";
import { MdWarning } from "react-icons/md";

interface ConfirmModalProps {
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmModal({
    open,
    title,
    message,
    confirmLabel = "Borrar",
    cancelLabel = "Cancelar",
    onConfirm,
    onCancel,
}: ConfirmModalProps) {

    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100]">
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onCancel}
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                <div className="glass-card p-6 md:p-8 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center text-error shrink-0">
                            <span className="material-symbols-outlined"><MdWarning /></span>
                        </div>
                        <h3 className="text-xl font-bold text-on-surface">{title}</h3>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-8">
                        {message}
                    </p>
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onCancel}
                            className="px-6 py-2.5 rounded-xl border border-white/20 text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-all">
                            {cancelLabel}
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-6 py-2.5 rounded-xl bg-error text-on-primary font-label-sm text-label-sm font-bold shadow-lg hover:opacity-90 active:scale-[0.98] transition-all">
                            {confirmLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}