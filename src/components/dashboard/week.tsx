import { CiCircleInfo, CiCloudOn, CiCloudSun } from "react-icons/ci";
import { GiHeavyRain } from "react-icons/gi";
import { IoIosSunny, IoIosWater } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";

export default function Week() {
    return (
        <section>
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-headline-md text-headline-md flex items-center gap-2 text-white">
                    Pronóstico Semanal
                    <span className="material-symbols-outlined text-primary-container text-sm"><CiCircleInfo /></span>
                </h3>
                <button className="text-primary text-sm font-semibold hover:underline">Detalles meteorológicos</button>
            </div>
            <div className="glass-card p-6 overflow-x-auto">
                <div className="flex justify-between min-w-[800px] gap-4">
                    
                    <div className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Lun</span>
                        <span className="material-symbols-outlined text-primary mb-2"><IoIosSunny /></span>
                        <span className="text-lg font-bold text-white">28°/16°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">0%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <span className="text-xs text-primary font-bold uppercase mb-3">Mar</span>
                        <span className="material-symbols-outlined text-primary mb-2"><CiCloudSun /></span>
                        <span className="text-lg font-bold text-white">25°/14°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">8%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Mié</span>
                        <span className="material-symbols-outlined text-on-surface-variant mb-2"><CiCloudOn /></span>
                        <span className="text-lg font-bold text-white">22°/12°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">15%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Jue</span>
                        <span className="material-symbols-outlined text-on-surface-variant mb-2"><IoRainyOutline /></span>
                        <span className="text-lg font-bold text-white">19°/11°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">80%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Vie</span>
                        <span className="material-symbols-outlined text-on-surface-variant mb-2"><GiHeavyRain /></span>
                        <span className="text-lg font-bold text-white">18°/10°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">95%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Sáb</span>
                        <span
                            className="material-symbols-outlined text-on-surface-variant mb-2"><CiCloudSun /></span>
                        <span className="text-lg font-bold text-white">21°/12°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">12%</span>
                        </div>
                    </div>

                    <div
                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <span className="text-xs text-on-surface-variant uppercase mb-3">Dom</span>
                        <span className="material-symbols-outlined text-on-surface-variant mb-2"><CiCloudOn /></span>
                        <span className="text-lg font-bold text-white">26°/15°</span>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[10px] text-blue-400"><IoIosWater /></span>
                            <span className="text-[10px] text-on-surface-variant">2%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}