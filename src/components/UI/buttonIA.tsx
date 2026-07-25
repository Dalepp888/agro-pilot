import { FaRobot } from "react-icons/fa";

export default function ButtonIA() {
    return (
        <button
            className="fixed bottom-10 right-10 flex items-center gap-3 bg-primary text-on-primary px-6 py-4 rounded-full font-bold text-body-md hover:scale-105 active:scale-95 transition-all z-50 group">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}><FaRobot /></span>
            <span>Preguntar a la IA</span>
        </button>
    )
}