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

interface NotifiTodayProps {
    notifications: NotificationWithPlot[];
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
                    <NotificationCard
                        key={notification.id}
                        variant="today"
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