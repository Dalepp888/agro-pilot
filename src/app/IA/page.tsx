import { redirect } from "next/navigation";
import { getConversations, getOrCreateConversation } from "@/actions/conversation";
import { prisma } from "@/lib/prisma";
import ChatLayout from "@/components/IA/chatLayout";
import MessagesIa from "@/components/IA/messagesIA";
import TypingIndicator from "@/components/IA/typingIndicator";
import TextIA from "@/components/IA/textIA";
import WelcomeIA from "@/components/IA/welcomeIA";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import { MessageProvider } from "@/context/messageContext";

interface IAProps {
    searchParams: Promise<{ c?: string }>;
}

export default async function IA({ searchParams }: IAProps) {

    const { c } = await searchParams;

    const conversation = c
        ? await prisma.conversation.findUnique({
            where: {
                id: c,
            },
        })
        : null;

    if (!conversation) {
        const { data: newConversation } = await getOrCreateConversation();

        redirect(`/IA?c=${newConversation.id}`);
    }

    const conversationId = conversation.id;

    const conversations = await getConversations();

    return (
        <>
            <SideNavBar />
            <ChatLayout conversations={conversations} activeId={conversationId}>
                <main className="relative">
                    <TopBar />

                    <MessageProvider conversationId={conversationId}>
                        <div className="flex flex-col h-[calc(100vh-64px)] p-5">
                            <WelcomeIA />

                            <div className="flex-1 overflow-y-auto px-8 pb-48 flex flex-col gap-6">
                                <MessagesIa conversationId={conversationId} />
                                <TypingIndicator />
                            </div>

                            <TextIA />
                        </div>
                    </MessageProvider>
                </main>
            </ChatLayout>
        </>
    )
}