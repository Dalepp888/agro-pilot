console.log("[instrumentation] ARCHIVO CARGADO");

export async function register() {
  console.log("[instrumentation] REGISTER EJECUTADO");

  console.log(
    "[instrumentation] runtime:",
    process.env.NEXT_RUNTIME
  );

  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const { registerNotificationCron } = await import(
    "./lib/cron/notifications"
  );

  registerNotificationCron();

  const { registerNotificationCleanupCron } = await import(
    "./lib/cron/cleanupNotifications"
  );

  registerNotificationCleanupCron();
}