import { IoMdAddCircleOutline } from "react-icons/io";

export default function WelcomeIA() {
    return (
        <section className="px-container-padding py-stack-md flex justify-between items-start shrink-0">
            <div>
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
                    <span className="text-3xl">🤖</span> Asistente IA
                </h2>
                <p className="text-on-surface-variant max-w-2xl mt-1">
                    Haz preguntas sobre tus cultivos y recibe recomendaciones inteligentes basadas en el clima, tus
                    parcelas y el historial agrícola.
                </p>
            </div>
            <button
                className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]"><IoMdAddCircleOutline /></span>
                Nueva conversación
            </button>
        </section>
    )
}