import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAutoAwesome } from "react-icons/md";

interface NotificationWithPlot {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: Date;
    plot: { name: string } | null;
}

interface AiRecomendationProps {
    notifications: NotificationWithPlot[];
}

export default function AiRecomendation({ notifications }: AiRecomendationProps) {
    const recent = notifications.slice(0, 3);

    return (
        <section>
            <div className="flex items-center gap-2 mb-4 px-2">
                <span className="material-symbols-outlined text-primary"><MdOutlineAutoAwesome /></span>
                <h3 className="font-headline-md text-headline-md text-white">Acciones Sugeridas por IA</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recent.length === 0 ? (
                    <div className="glass-card p-6">
                        <p className="text-on-surface-variant text-sm">Sin notificaciones por ahora.</p>
                    </div>
                ) : recent.map((notification) => (
                    <div key={notification.id}
                        className="glass-card p-6 border-l-4 border-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                <span className="material-symbols-outlined"><IoIosNotificationsOutline /></span>
                            </div>
                            <div>
                                <p className="font-bold text-on-surface mb-1 flex items-center gap-2">
                                    {notification.title}
                                    {!notification.read && <span className="w-2 h-2 shrink-0 rounded-full bg-primary" />}
                                </p>
                                <p className="text-on-surface-variant text-sm line-clamp-3">{notification.message}</p>
                                <p className="text-[10px] text-on-surface-variant/60 mt-2">
                                    {notification.plot?.name ?? "Parcela"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}