import InfoTask from "@/components/calendary/task/infoTask";
import ListTask from "@/components/calendary/task/listTask";
import WelcomeTask from "@/components/calendary/task/welcomeTask";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";

export default function Task() {
    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 p-8 pb-10 flex flex-col gap-6 overflow-y-auto">
                        <WelcomeTask />
                        <InfoTask />
                        <ListTask />
                    </div>
                </div>
            </main>
        </>
    )
}