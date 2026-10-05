import InfoTask from "@/components/calendary/task/infoTask";
import ListTask from "@/components/calendary/task/listTask";
import WelcomeTask from "@/components/calendary/task/welcomeTask";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import { getTask } from "@/actions/task";

export default async function Task() {

    const task = await getTask()

    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-0 lg:ml-[280px] min-h-screen relative overflow-hidden">
                <div className="p-4 sm:p-6 space-y-4 max-w-7xl mx-auto">
                    <TopBar />
                    <div className="flex flex-1 overflow-hidden">
                        <div className="flex-1 p-8 pb-10 flex flex-col gap-6 overflow-y-auto">
                            <WelcomeTask />
                            <InfoTask />
                            <ListTask tasks={task} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}