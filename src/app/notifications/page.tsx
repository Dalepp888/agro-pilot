import LastWeekNot from "@/components/notifications/lastWeekNot";
import NotifiBefore from "@/components/notifications/notifiBefore";
import NotifiToday from "@/components/notifications/notifiToday";
import WelcomeNotifi from "@/components/notifications/welcomeNotifications";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";

export default function Notofications() {
    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] p-5 h-screen overflow-y-auto relative">
                <TopBar />
                <WelcomeNotifi />
                <div className="space-y-stack-lg py-4">
                    <NotifiToday />
                    <NotifiBefore />
                    <LastWeekNot />
                </div>
            </main >
        </>
    )
}