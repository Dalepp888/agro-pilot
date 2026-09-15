let scheduled = false;

export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.VERCEL) return;

  if (scheduled) return;
  scheduled = true;

  const { registerNotificationCron } = await import(
    "./lib/cron/notifications"
  );

  registerNotificationCron();
}