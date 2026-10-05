"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosNotificationsOutline, IoMdAdd } from "react-icons/io";
import { createTask } from "@/actions/task";
import { deleteNotification } from "@/actions/notifications";
import ConfirmModal from "@/components/UI/confirmModal";
import DeleteButton from "@/components/UI/buttonDelete";

type Variant = "today" | "before" | "week";

interface NotificationCardProps {
    notification: {
        id: string;
        title: string;
        message: string;
        read: boolean;
        createdAt: string;
        plotId: string | null;
        plot: { name: string } | null;
    };
    variant: Variant;
}

const variants: Record<Variant, { card: string; chip: string; icon: string; title: string; info: string }> = {
    today: {
        card: "",
        chip: "bg-primary/10 border-primary/20",
        icon: "text-primary",
        title: "font-semibold",
        info: "text-on-surface-variant/70",
    },
    before: {
        card: "opacity-80",
        chip: "bg-tertiary/10 border-tertiary/20",
        icon: "text-tertiary",
        title: "font-medium",
        info: "text-on-surface-variant/60",
    },
    week: {
        card: "opacity-70",
        chip: "bg-on-tertiary-fixed-variant/20 border-white/5",
        icon: "text-on-tertiary-fixed-variant",
        title: "font-medium",
        info: "text-on-surface-variant/60",
    },
};

function timeAgo(date: Date): string {
    const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMinutes < 1) return "hace un momento";
    if (diffMinutes < 60) return `hace ${diffMinutes} min`;

    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `hace ${hours} hora${hours === 1 ? "" : "s"}`;

    const days = Math.floor(hours / 24);
    return `hace ${days} día${days === 1 ? "" : "s"}`;
}

function tomorrowDate(): { value: string; label: string } {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    const value = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
    ].join("-");

    const label = date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return { value, label };
}

export default function NotificationCard({ notification, variant }: NotificationCardProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [pending, setPending] = useState(false);

    const styles = variants[variant];
    const plotId = notification.plotId;
    const plotName = notification.plot?.name ?? "la parcela";
    const dueDate = tomorrowDate();

    async function handleConfirm() {
        setPending(true);

        const result = await createTask({
            title: notification.title,
            description: notification.message,
            dueDate: dueDate.value,
            plotId,
        });

        if (result.success) {
            setOpen(false);
            router.refresh();
        } else {
            console.error("No se pudo crear la tarea desde la notificación:", result);
            setPending(false);
        }
    }

    return (
        <>
            <div className={`glass-card p-6 rounded-xl flex gap-4 group ${styles.card} ${!notification.read ? "bg-white/[0.02]" : ""}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border ${styles.chip}`}>
                    <span className={`material-symbols-outlined text-[28px] ${styles.icon}`}><IoIosNotificationsOutline /></span>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className={`font-headline-md text-[18px] text-on-surface ${styles.title} flex items-center gap-2`}>
                            {notification.title}
                            {!notification.read && <span className="w-2 h-2 rounded-full bg-primary" />}
                        </h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-2">{notification.message}</p>
                    <p className={`font-label-sm text-label-sm ${styles.info} mb-3`}>
                        {plotName} · {timeAgo(new Date(notification.createdAt))}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => setOpen(true)}
                            disabled={!plotId}
                            title={plotId ? "Añadir como tarea" : "La notificación no tiene parcela asignada"}
                            className="px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary font-label-sm text-label-sm flex items-center gap-2 hover:bg-primary/25 transition-colors disabled:opacity-40 disabled:hover:bg-primary/15 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined text-[16px]"><IoMdAdd /></span>
                            Añadir a la tarea
                        </button>

                        <DeleteButton
                            id={notification.id}
                            deleteAction={deleteNotification}
                            title="Borrar notificación"
                            message="Se eliminará la notificación de forma permanente. ¿Estás seguro que deseas borrarla?"
                        />
                    </div>
                </div>
            </div>

            <ConfirmModal
                open={open}
                title="Añadir a la tarea"
                message={`Se creará la tarea "${notification.title}" para ${plotName} con fecha ${dueDate.label}. ¿Confirmás?`}
                confirmLabel={pending ? "Añadiendo..." : "Añadir"}
                cancelLabel="Cancelar"
                onCancel={() => setOpen(false)}
                onConfirm={handleConfirm}
            />
        </>
    )
}