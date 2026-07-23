import ControlNavigation from "@/components/calendary/controlNavigation";
import Month from "@/components/calendary/month";
import TaskSection from "@/components/calendary/taskSection";
import WelcomeCalendary from "@/components/calendary/welcomeCalendary";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";

export default function Calendary() {
    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 p-8 pb-10 flex flex-col gap-6 overflow-y-auto">
                        <WelcomeCalendary />
                        <ControlNavigation />
                        <Month />
                    </div>
                    <TaskSection />
                </div>
            </main>
        </>
    )
}