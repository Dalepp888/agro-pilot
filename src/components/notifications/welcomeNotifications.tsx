import { IoMdDoneAll } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";

interface WelcomeNotifiProps {
    total: number;
    unread: number;
}

export default function WelcomeNotifi({ total, unread }: WelcomeNotifiProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg">
            <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Consulta las últimas recomendaciones y alertas generadas por AgroPilot.
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {total > 0
                        ? `Tienes ${total} notificaciones${unread > 0 ? `, ${unread} sin leer` : ""}.`
                        : "Aún no hay notificaciones."}
                </p>
            </div>
            <div className="flex gap-2 shrink-0">
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright transition-all border border-white/10 active:scale-95">
                    <span className="material-symbols-outlined text-[20px] text-white"><IoMdDoneAll /></span>
                    <span className="font-label-sm text-label-sm whitespace-nowrap text-white">Marcar todas como leídas</span>
                </button>
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error-container/20 text-error hover:bg-error-container/40 transition-all border border-error/20 active:scale-95">
                    <span className="material-symbols-outlined text-[20px]"><MdDeleteSweep /></span>
                    <span className="font-label-sm text-label-sm whitespace-nowrap">Eliminar leídas</span>
                </button>
            </div>
        </div>
    )
}