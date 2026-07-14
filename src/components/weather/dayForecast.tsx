import { CiCloudOn, CiCloudSun } from "react-icons/ci";
import { IoIosWater } from "react-icons/io";
import { IoRainyOutline, IoSunnyOutline } from "react-icons/io5";

export default function DayForecast() {
    return (
        <div className="glass-card p-stack-md">
            <div className="flex justify-between mb-6">
                <h3 className="font-headline-md text-lg text-on-surface">Pronóstico 7 Días</h3>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Next Week</span>
            </div>
            <div className="space-y-2">
                
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Hoy</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><CiCloudSun /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary font-bold">8%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">24°</span>
                        <span className="text-xs text-on-surface-variant ml-2">16°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Mar</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><IoSunnyOutline /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary">2%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">26°</span>
                        <span className="text-xs text-on-surface-variant ml-2">15°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Mie</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-tertiary-container"><IoRainyOutline /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary font-bold">85%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">20°</span>
                        <span className="text-xs text-on-surface-variant ml-2">14°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Jue</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><CiCloudOn /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary">30%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">22°</span>
                        <span className="text-xs text-on-surface-variant ml-2">15°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Vie</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><IoSunnyOutline /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary">0%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">27°</span>
                        <span className="text-xs text-on-surface-variant ml-2">17°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Sab</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><IoSunnyOutline /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary">0%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold">28°</span>
                        <span className="text-xs text-on-surface-variant ml-2">18°</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="w-10 text-sm font-medium text-on-surface-variant">Dom</span>
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined text-primary-container"><CiCloudSun /></span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                            <span className="text-xs text-tertiary">10%</span>
                        </div>
                    </div>
                    <div className="w-20 text-right">
                        <span className="text-sm font-bold text-on-surface-variant">25°</span>
                        <span className="text-xs text-on-surface-variant ml-2">17°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}