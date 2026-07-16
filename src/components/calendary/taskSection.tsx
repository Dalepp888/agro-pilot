import { IoLocationOutline } from "react-icons/io5";
import { MdEco, MdOutlinePriorityHigh, MdOutlineSchedule, MdOutlineWaterDrop } from "react-icons/md";

export default function TaskSection() {
    return (
        <aside className="w-[400px] glass-drawer p-8 overflow-y-auto flex flex-col gap-6">
            <div>
                <h3 className="font-headline-md text-headline-md font-bold text-primary mb-1">Actividades del día</h3>
                <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Jueves, 9 de Julio</p>
            </div>

            <div className="flex flex-col gap-4">
                
                <div
                    className="glass-card p-4 rounded-xl border-l-4 border-l-secondary relative group cursor-pointer hover:translate-x-1 transition-transform">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary"><MdOutlineWaterDrop /></span>
                            <h4 className="font-bold text-body-lg text-white">Regar</h4>
                        </div>
                        <span
                            className="text-label-sm bg-secondary/20 text-secondary px-2 py-0.5 rounded">Pendiente</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-caption opacity-80">
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><IoLocationOutline /></span>
                            Parcela Norte
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><MdOutlineSchedule /></span>
                            08:00 AM
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><MdOutlinePriorityHigh /></span>
                            Prioridad Media
                        </div>
                    </div>
                </div>

                <div
                    className="glass-card p-4 rounded-xl border-l-4 border-l-yellow-400 relative group cursor-pointer hover:translate-x-1 transition-transform">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-yellow-400"><MdEco /></span>
                            <h4 className="font-bold text-body-lg text-white">Fertilizar</h4>
                        </div>
                        <span
                            className="text-label-sm bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded">Pendiente</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-caption opacity-80">
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><IoLocationOutline /></span>
                            Sector Sur
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><MdOutlineSchedule /></span>
                            10:30 AM
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><MdOutlinePriorityHigh /></span>
                            Prioridad Alta
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}