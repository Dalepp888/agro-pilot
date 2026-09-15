import cron from "node-cron";
import { generateNotifications } from "@/actions/notifications";

export function registerNotificationCron() {
    cron.schedule(
        "20 9 * * *",
        async () => {
            console.log("[cron] Generando notificaciones...");

            const result = await generateNotifications();

            console.log(
                "[cron] Notificaciones generadas:",
                result.notifications.length,
                result.success
            );
        },
        {
            timezone: "America/Argentina/Buenos_Aires",
        }
    );
}