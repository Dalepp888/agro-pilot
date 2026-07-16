import { FaRobot } from "react-icons/fa";
import { MdDelete, MdOutlineWaterDrop } from "react-icons/md";

export default function NotifiBefore() {
    return (
        <section>
            <div className="flex items-center gap-4 mb-stack-sm">
                <h3
                    className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                    Ayer</h3>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="space-y-4">

                <div className="glass-card opacity-80 p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center shrink-0 border border-tertiary/20">
                        <span className="material-symbols-outlined text-tertiary text-[28px]"><MdOutlineWaterDrop /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-headline-md text-[18px] text-on-surface font-medium">Suspensión de
                                Riego</h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Ayer,
                                4:30 PM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-2">No riegues hoy. Se
                            esperan lluvias durante la tarde.</p>
                        <div
                            className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]">mark_chat_unread</span></button>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]"><MdDelete /></span></button>
                        </div>
                    </div>
                </div>

                <div className="glass-card opacity-80 p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(90,240,179,0.1)]">
                        <span className="material-symbols-outlined text-primary text-[28px]"><FaRobot /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-headline-md text-[18px] text-on-surface font-medium">Análisis de IA
                                Completado</h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Ayer,
                                11:20 AM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-2">La IA ha generado una
                            nueva recomendación para la Parcela Norte tras analizar los datos del sensor de
                            humedad.</p>
                        <div
                            className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]">mark_chat_unread</span></button>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]"><MdDelete /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}