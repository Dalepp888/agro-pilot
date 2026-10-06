import ChatSidebarToggle from "./chatSidebarToggle";
import NewConversationButton from "./newConversationButton";

export default function WelcomeIA() {
    return (
        <section className="px-4 sm:px-8 py-6 flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-start shrink-0 min-w-0">
            <div className="min-w-0">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
                    <span className="text-3xl shrink-0">🤖</span>
                    Asistente IA
                </h2>

                <p className="text-on-surface-variant max-w-2xl mt-1">
                    Haz preguntas sobre tus cultivos y recibe recomendaciones inteligentes.
                </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <ChatSidebarToggle />
                <NewConversationButton />
            </div>
        </section>
    )
}