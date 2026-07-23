import { FaRegCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdOutlineAutoAwesome, MdOutlineSchedule } from "react-icons/md";

export default function AiRecomendation() {
    return (
        <section>
            <div className="flex items-center gap-2 mb-4 px-2">
                <span className="material-symbols-outlined text-primary"><MdOutlineAutoAwesome /></span>
                <h3 className="font-headline-md text-headline-md text-white">Acciones Sugeridas por IA</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    className="glass-card p-6 border-l-4 border-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/20 text-primary">
                            <span className="material-symbols-outlined"><FaRegCheckCircle /></span>
                        </div>
                        <div>
                            <p className="font-bold text-on-surface mb-1">Prioridad Alta</p>
                            <p className="text-on-surface-variant text-sm">✔ Regar el maíz mañana temprano para
                                maximizar absorción.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="glass-card p-6 border-l-4 border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-500">
                            <span className="material-symbols-outlined"><MdOutlineSchedule /></span>
                        </div>
                        <div>
                            <p className="font-bold text-on-surface mb-1">Mantenimiento</p>
                            <p className="text-on-surface-variant text-sm">⚠ Esperar tres días antes de sembrar tomate
                                (Suelo húmedo).</p>
                        </div>
                    </div>
                </div>
                <div
                    className="glass-card p-6 border-l-4 border-error bg-error/5 hover:bg-error/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-error/20 text-error">
                            <span className="material-symbols-outlined"><GiCancel /></span>
                        </div>
                        <div>
                            <p className="font-bold text-on-surface mb-1">Alerta Crítica</p>
                            <p className="text-on-surface-variant text-sm">✖ No fertilizar debido a las lluvias intensas
                                previstas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}