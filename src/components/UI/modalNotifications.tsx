"use client";

import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdCheckCircleOutline, MdInfoOutline, MdWarningAmber } from "react-icons/md";

export default function ModalNotifications() {
    const notifications = [
        {
            id: "1",
            title: "Tarea pendiente",
            message: "La fertilización del Sector Norte está pendiente.",
            time: "Hace 10 min",
            type: "warning",
            read: false,
        },
        {
            id: "2",
            title: "Condiciones climáticas",
            message: "Se espera una baja probabilidad de lluvia mañana.",
            time: "Hace 1 hora",
            type: "info",
            read: false,
        },
        {
            id: "3",
            title: "Tarea completada",
            message: "La tarea de riego fue marcada como completada.",
            time: "Hace 3 horas",
            type: "success",
            read: true,
        },
    ];

    return (
        <div className="absolute right-0 top-full mt-3 w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-surface-container/95 backdrop-blur-xl shadow-2xl shadow-black/30">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div>
                    <h3 className="text-body-md font-semibold text-on-surface">
                        Notificaciones
                    </h3>

                    <p className="text-caption text-on-surface-variant mt-0.5">
                        Tienes 2 sin leer
                    </p>
                </div>

                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                    <IoIosNotificationsOutline size={21} />

                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error border-2 border-surface-container" />
                </div>
            </div>

            {/* Notifications */}
            <div className="flex flex-col">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`flex gap-3 px-5 py-4 border-b border-white/5 transition-colors hover:bg-white/5 ${!notification.read ? "bg-white/[0.02]" : ""
                            }`}
                    >
                        {/* Icon */}
                        <div className="pt-0.5 shrink-0">
                            {notification.type === "warning" && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-error/10 text-error">
                                    <MdWarningAmber size={18} />
                                </div>
                            )}

                            {notification.type === "info" && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                    <MdInfoOutline size={18} />
                                </div>
                            )}

                            {notification.type === "success" && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                    <MdCheckCircleOutline size={18} />
                                </div>
                            )}
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
                                {notification.time}
                            </p>
                        </div>
                    </div>
                ))}
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