import MessagesIa from "@/components/IA/messagesIA";
import TypingIndicator from "@/components/IA/typingIndicator";
import TextIA from "@/components/IA/textIA";
import WelcomeIA from "@/components/IA/welcomeIA";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import { MessageProvider } from "@/context/messageContext";

export default function IA() {
    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <MessageProvider>
                    <div className="flex flex-col h-[calc(100vh-64px)] p-5">
                        <WelcomeIA />

                        <div className="flex-1 overflow-y-auto px-8 pb-48 flex flex-col gap-6">
                            <MessagesIa />
                            <TypingIndicator />
                        </div>

                        <TextIA />
                    </div>
                </MessageProvider>
            </main>
        </>
    )
}