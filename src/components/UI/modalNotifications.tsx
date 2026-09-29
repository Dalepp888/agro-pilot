"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdCheckCircleOutline } from "react-icons/md";
import { getRecentNotifications } from "@/actions/notifications";

interface NotificationItem {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    plotName: string | null;
}

function timeAgo(date: Date): string {
    const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMinutes < 1) return "Ahora mismo";
    if (diffMinutes < 60) return `Hace ${diffMinutes} min`;

    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `Hace ${hours} hora${hours === 1 ? "" : "s"}`;

    const days = Math.floor(hours / 24);
    return `Hace ${days} día${days === 1 ? "" : "s"}`;
}

export default function ModalNotifications() {
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRecentNotifications(3)
            .then((data) => setNotifications(data))
            .catch(() => setNotifications([]))
            .finally(() => setLoading(false));
    }, []);

    const unread = notifications.filter((notification) => !notification.read).length;

    return (
        <div className="absolute right-0 top-full mt-3 w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-surface-container/95 backdrop-blur-xl shadow-2xl shadow-black/30">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div>
                    <h3 className="text-body-md font-semibold text-on-surface">
                        Notificaciones
                    </h3>

                    <p className="text-caption text-on-surface-variant mt-0.5">
                        {unread > 0 ? `Tienes ${unread} sin leer` : "No tienes notificaciones sin leer"}
                    </p>
                </div>

                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                    <IoIosNotificationsOutline size={21} />

                    {unread > 0 && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error border-2 border-surface-container" />
                    )}
                </div>
            </div>

            {/* Notifications */}
            <div className="flex flex-col">
                {loading ? (
                    <p className="px-5 py-6 text-caption text-on-surface-variant">Cargando notificaciones...</p>
                ) : notifications.length === 0 ? (
                    <p className="px-5 py-6 text-caption text-on-surface-variant">Sin notificaciones por ahora.</p>
                ) : (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex gap-3 px-5 py-4 border-b border-white/5 transition-colors hover:bg-white/5 ${!notification.read ? "bg-white/[0.02]" : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="pt-0.5 shrink-0">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                    <MdCheckCircleOutline size={18} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <h4 className="text-body-sm font-semibold text-on-surface">
                                        {notification.title}
                                    </h4>

                                    {!notification.read && (
                                        <span className="w-1.5 h-1.5 mt-1.5 shrink-0 rounded-full bg-primary" />
                                    )}
                                </div>

                                <p className="text-caption text-on-surface-variant mt-1 leading-relaxed line-clamp-2">
                                    {notification.message}
                                </p>

                                <p className="text-[10px] text-on-surface-variant/60 mt-2">
                                    {notification.plotName ?? "Parcela"} · {timeAgo(new Date(notification.createdAt))}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div className="p-3">
                <Link
                    href="/notifications"
                    className="flex items-center justify-center w-full py-2.5 rounded-xl text-label-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                >
                    Ver todas las notificaciones
                </Link>
            </div>
        </div>
    );
}