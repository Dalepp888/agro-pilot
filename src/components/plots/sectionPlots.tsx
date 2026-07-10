import { MdOutlineEventRepeat, MdOutlineWbSunny } from "react-icons/md";
import { plots } from "@/constants/plots/plots";
import { IoMdMore } from "react-icons/io";

export default function SectionPlots() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {plots.map( plot => (
                <div className="glass-card rounded-xxl p-6 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-on-surface">{plot.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="glow-dot text-primary bg-primary"></span>
                                <span className="text-xs font-medium text-primary uppercase">{plot.state}</span>
                            </div>
                        </div>
                        <button className="text-on-surface-variant hover:text-on-surface">
                            <span className="material-symbols-outlined"><IoMdMore /></span>
                        </button>
                    </div>
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-on-surface-variant">Cultivo</span>
                            <span className="font-bold text-white">{plot.cultivo}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-on-surface-variant">Fecha de siembra</span>
                            <span className="font-bold text-white">{plot.Fecha}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-on-surface-variant">Días transcurridos</span>
                            <span className="px-2 py-0.5 bg-white/10 rounded-md font-mono font-bold text-white">{plot.DíasTranscurridos}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-on-surface-variant">Clima</span>
                            <span className="flex items-center gap-1 font-bold">
                                <span className="material-symbols-outlined text-sm text-yellow-500"><MdOutlineWbSunny /></span>
                                <span className="text-white">{plot.clima}</span>
                            </span>
                        </div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 mb-6">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-primary text-sm"><MdOutlineEventRepeat /></span>
                            <span className="text-[10px] font-bold uppercase text-primary tracking-wider">Próxima
                                Tarea</span>
                        </div>
                        <p className="text-sm font-semibold text-on-surface">{plot.tarea}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                        <div className="text-center">
                            <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Temp</p>
                            <p className="text-lg font-bold text-on-surface">{plot.temp}</p>
                        </div>
                        <div className="text-center border-x border-white/10">
                            <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Hum</p>
                            <p className="text-lg font-bold text-on-surface">{plot.hum}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Lluvia</p>
                            <p className="text-lg font-bold text-on-surface">{plot.lluvia}</p>
                        </div>
                    </div>

                    <div
                        className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                    </div>
                </div>
            ))}
        </div>
    )
}