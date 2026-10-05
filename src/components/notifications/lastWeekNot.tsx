import NotificationCard from "@/components/notifications/notificationCard";

interface NotificationWithPlot {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: Date;
    plotId: string | null;
    plot: { name: string } | null;
}

interface LastWeekNotProps {
    notifications: NotificationWithPlot[];
}

export default function LastWeekNot({ notifications }: LastWeekNotProps) {
    return (
        <section>
            <div className="flex items-center gap-4 mb-stack-sm">
                <h3
                    className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                    Esta semana</h3>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="space-y-4">
                {notifications.length === 0 ? (
                    <div className="glass-card opacity-70 p-6 rounded-xl">
                        <p className="font-body-md text-body-md text-on-surface-variant">Sin notificaciones recientes.</p>
                    </div>
                ) : notifications.map((notification) => (
                    <NotificationCard
                        key={notification.id}
                        variant="week"
                        notification={{
                            ...notification,
                            createdAt: notification.createdAt.toISOString(),
                        }}
                    />
                ))}
            </div>
        </section>
    )
}