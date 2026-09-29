import { IoIosNotificationsOutline } from "react-icons/io";

interface NotificationWithPlot {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: Date;
    plot: { name: string } | null;
}

interface NotifiTodayProps {
    notifications: NotificationWithPlot[];
}

function timeAgo(date: Date): string {
    const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMinutes < 1) return "hace un momento";
    if (diffMinutes < 60) return `hace ${diffMinutes} min`;

    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `hace ${hours} hora${hours === 1 ? "" : "s"}`;

    const days = Math.floor(hours / 24);
    return `hace ${days} día${days === 1 ? "" : "s"}`;
}

export default function NotifiToday({ notifications }: NotifiTodayProps) {
    return (
        <section>
            <div className="flex items-center gap-4 mb-stack-sm">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Hoy
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="space-y-4">
                {notifications.length === 0 ? (
                    <div className="glass-card p-6 rounded-xl">
                        <p className="font-body-md text-body-md text-on-surface-variant">Sin notificaciones hoy.</p>
                    </div>
                ) : notifications.map((notification) => (
                    <div key={notification.id}
                        className={`glass-card p-6 rounded-xl flex gap-4 group ${!notification.read ? "bg-white/[0.02]" : ""}`}>
                        <div
                            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-[28px]"><IoIosNotificationsOutline /></span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4
                                    className="font-headline-md text-[18px] text-on-surface font-semibold flex items-center gap-2">
                                    {notification.title}
                                    {!notification.read && <span className="w-2 h-2 rounded-full bg-primary" />}
                                </h4>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant">{notification.message}</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant/70 mt-2">
                                {notification.plot?.name ?? "Parcela"} · {timeAgo(notification.createdAt)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}