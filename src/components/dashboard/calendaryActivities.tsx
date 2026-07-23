import { IoIosWater } from "react-icons/io";
import { MdOutlineScience, MdOutlineSensors } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";

export default function CalendaryActivities() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="font-headline-md text-headline-md text-white">Calendario de Actividades</h3>
                    <button
                        className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"><VscDiffAdded /></button>
                </div>
                <div className="glass-card p-2">
                    <ul className="divide-y divide-white/5">
                        <li className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors rounded-xl">
                            <div className="text-center min-w-[48px]">
                                <p className="text-xs text-on-surface-variant uppercase">Hoy</p>
                                <p className="text-lg font-bold text-white">24</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-on-surface">Inspección de Plagas</p>
                                <p className="text-xs text-on-surface-variant">Sector Oeste · 14:00 PM</p>
                            </div>
                            <span
                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider">En
                                curso</span>
                        </li>
                        <li className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors rounded-xl">
                            <div className="text-center min-w-[48px]">
                                <p className="text-xs text-on-surface-variant uppercase">Mañana</p>
                                <p className="text-lg font-bold text-white">25</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-on-surface">Riego Programado</p>
                                <p className="text-xs text-on-surface-variant">Parcela Norte · 06:00 AM</p>
                            </div>
                            <span
                                className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Pendiente</span>
                        </li>
                        <li className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors rounded-xl">
                            <div className="text-center min-w-[48px]">
                                <p className="text-xs text-on-surface-variant uppercase">Mié</p>
                                <p className="text-lg font-bold text-white">26</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-on-surface">Cosecha de Lechuga</p>
                                <p className="text-xs text-on-surface-variant">Hidropónico 2 · Todo el día</p>
                            </div>
                            <span
                                className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Planificado</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="font-headline-md text-headline-md text-white">Actividad Reciente</h3>
                    <span className="text-xs text-on-surface-variant">Últimas 24h</span>
                </div>
                <div className="glass-card p-6 relative overflow-hidden h-[332px] overflow-y-auto">
                    <div className="space-y-6 relative z-10">
                        
                        <div className="flex gap-4 items-start">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10">
                                    <span className="material-symbols-outlined text-sm"><IoIosWater /></span>
                                </div>
                                <div className="w-px h-12 bg-outline-variant/30 mt-2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-on-surface">Se regó la Parcela Norte</p>
                                <p className="text-xs text-on-surface-variant">Hace 2 horas · Automatización IA</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary z-10">
                                    <span className="material-symbols-outlined text-sm"><MdOutlineScience /></span>
                                </div>
                                <div className="w-px h-12 bg-outline-variant/30 mt-2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-on-surface">Se fertilizó el tomate</p>
                                <p className="text-xs text-on-surface-variant">Hace 5 horas · David Ortega</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary z-10">
                                    <span className="material-symbols-outlined text-sm"><MdOutlineSensors    /></span>
                                </div>
                                <div className="w-px h-12 bg-outline-variant/30 mt-2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-on-surface">Sensor Humedad Calibrado</p>
                                <p className="text-xs text-on-surface-variant">Hace 8 horas · Sistema</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-on-surface-variant z-10">
                                    <span className="material-symbols-outlined text-sm">inventory_2</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-on-surface">Nuevo stock de Semillas</p>
                                <p className="text-xs text-on-surface-variant">Ayer · Almacén Central</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}