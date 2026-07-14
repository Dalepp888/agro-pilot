import { IoMdRefresh } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function WelcomeWeather() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-md">
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-3xl text-white">🌤</span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Centro Meteorológico</h2>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-2xl">Consulta las condiciones climáticas actuales y
                    el pronóstico para planificar mejor las actividades agrícolas.</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-4 text-caption text-on-surface-variant">
                    <span className="flex items-center gap-1"><span
                        className="material-symbols-outlined text-[16px]"><IoLocationOutline /></span> Valley North, Field
                        B2</span>
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-surface-container-high hover:bg-surface-bright text-primary text-sm font-semibold rounded-full transition-all active:scale-95 border border-white/10">
                    <span className="material-symbols-outlined text-[18px]"><IoMdRefresh /></span>
                    Actualizar datos
                </button>
            </div>
        </div>
    )
}