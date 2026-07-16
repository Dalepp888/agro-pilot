import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete, MdEco, MdWarningAmber } from "react-icons/md";

export default function NotifiToday() {
    return (
        <section>
            <div className="flex items-center gap-4 mb-stack-sm">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Hoy
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="space-y-4">

                <div className="glass-card unread-indicator p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[28px]"><MdEco /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4
                                className="font-headline-md text-[18px] text-on-surface font-semibold flex items-center gap-2">
                                Recomendación de siembra
                                <span className="status-dot"></span>
                            </h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">10:45
                                AM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4">Mañana será un buen
                            día para sembrar maíz. Las condiciones del suelo son óptimas.</p>
                        <div className="flex gap-4 items-center">
                            <button className="text-primary font-label-sm text-label-sm hover:underline">Ver
                                detalles</button>
                            <div
                                className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    title="Marcar como leído">
                                    <span className="material-symbols-outlined text-[20px]"><FaRegCheckCircle /></span>
                                </button>
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    title="Eliminar">
                                    <span className="material-symbols-outlined text-[20px]"><MdDelete /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card unread-indicator p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-error-container/20 flex items-center justify-center shrink-0 border border-error/20">
                        <span className="material-symbols-outlined text-error text-[28px]"><MdWarningAmber /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4
                                className="font-headline-md text-[18px] text-on-surface font-semibold flex items-center gap-2">
                                Alerta de Viento
                                <span className="status-dot"></span>
                            </h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">8:12
                                AM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4">Existe riesgo de
                            fuertes vientos durante la noche. Asegure los invernaderos del sector sur.</p>
                        <div className="flex gap-4 items-center">
                            <button
                                className="px-3 py-1 rounded bg-error-container/40 text-on-error-container text-label-sm font-label-sm">Protocolo
                                de seguridad</button>
                            <div
                                className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                    className="material-symbols-outlined text-[20px]"><FaRegCheckCircle /></span></button>
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                    className="material-symbols-outlined text-[20px]"><MdDelete /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}