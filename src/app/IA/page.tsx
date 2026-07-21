import MessagesIa from "@/components/IA/messagesIA";
import TextIA from "@/components/IA/textIA";
import WelcomeIA from "@/components/IA/welcomeIA";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";

export default function IA() {
    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <div className="flex flex-col h-[calc(100vh-64px)] p-5">
                    <WelcomeIA />

                    <div className="flex-1 overflow-y-auto">
                        <MessagesIa />
                    </div>

                    <TextIA />
                </div>
            </main>
        </>
    )
}