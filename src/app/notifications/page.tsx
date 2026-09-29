import { getNotifications } from "@/actions/notifications";
import LastWeekNot from "@/components/notifications/lastWeekNot";
import NotifiBefore from "@/components/notifications/notifiBefore";
import NotifiToday from "@/components/notifications/notifiToday";
import WelcomeNotifi from "@/components/notifications/welcomeNotifications";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";

function dayDiff(date: Date): number {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return Math.round((today.getTime() - target.getTime()) / 86400000);
}

export default async function Notifications() {
    const notifications = await getNotifications();

    const today = notifications.filter((notification) => dayDiff(notification.createdAt) === 0);
    const yesterday = notifications.filter((notification) => dayDiff(notification.createdAt) === 1);
    const week = notifications.filter((notification) => {
        const diff = dayDiff(notification.createdAt);
        return diff >= 2 && diff <= 7;
    });

    const total = notifications.length;
    const unread = notifications.filter((notification) => !notification.read).length;

    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] p-5 h-screen overflow-y-auto relative">
                <TopBar />
                <WelcomeNotifi total={total} unread={unread} />
                <div className="space-y-stack-lg py-4">
                    <NotifiToday notifications={today} />
                    <NotifiBefore notifications={yesterday} />
                    <LastWeekNot notifications={week} />
                </div>
            </main >
        </>
    )
}