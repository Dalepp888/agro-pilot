import { IoMdAdd } from "react-icons/io";

export default function WelcomeCalendary() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
                <h2 className="font-display-lg text-headline-md font-bold mb-1 text-on-surface-variant">📅 Calendario de Actividades</h2>
                <p className="text-on-surface-variant max-w-2xl text-body-md opacity-80">Consulta y organiza las
                    actividades de tus cultivos. También encontrarás las tareas sugeridas automáticamente por la
                    IA.</p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-label-sm flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
                    <span className="material-symbols-outlined text-[18px]"><IoMdAdd /></span>
                    Nueva actividad
                </button>
            </div>
        </div>
    )
}