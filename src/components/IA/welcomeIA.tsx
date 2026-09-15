import NewConversationButton from "./newConversationButton";

export default function WelcomeIA() {
    return (
        <section className="px-8 py-6 flex justify-between items-start shrink-0">
            <div>
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
                    <span className="text-3xl">🤖</span> Asistente IA
                </h2>
                <p className="text-on-surface-variant max-w-2xl mt-1">
                    Haz preguntas sobre tus cultivos y recibe recomendaciones inteligentes.
                </p>
            </div>
            <NewConversationButton />
        </section>
    )
}