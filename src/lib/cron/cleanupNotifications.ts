import cron from "node-cron";
import { deleteExpiredNotifications } from "@/actions/notifications";

export function registerNotificationCleanupCron() {
    cron.schedule(
        "10 9 * * *",
        async () => {
            console.log("[cron] Limpiando notificaciones vencidas...");

            const result = await deleteExpiredNotifications();

            if (result.success) {
                console.log("[cron] Notificaciones eliminadas:", result.count);
            }
        },
        {
            timezone: "America/Havana",
        }
    );
}