import { CiCloudOn } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { MdNightsStay, MdOutlineBedtime, MdOutlineSchedule } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";

export default function ForecastHour() {
    return (
        <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-lg text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined"><MdOutlineSchedule /></span>
                    Pronóstico por Hora
                </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
                
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">14:00</span>
                    <span className="material-symbols-outlined text-primary-container"><WiDayCloudy /></span>
                    <span className="font-bold text-white">24°</span>
                    <span className="text-[10px] text-white">8%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-primary/10 border-primary/20 p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">15:00</span>
                    <span className="material-symbols-outlined text-primary-container"><IoSunnyOutline /></span>
                    <span className="font-bold text-white">25°</span>
                    <span className="text-[10px] text-white">2%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">16:00</span>
                    <span className="material-symbols-outlined text-primary-container"><IoSunnyOutline /></span>
                    <span className="font-bold text-white">25°</span>
                    <span className="text-[10px] text-white">0%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">17:00</span>
                    <span className="material-symbols-outlined text-primary-container"><WiDayCloudy /></span>
                    <span className="font-bold text-white">24°</span>
                    <span className="text-[10px] text-white">5%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">18:00</span>
                    <span className="material-symbols-outlined text-primary-container"><CiCloudOn /></span>
                    <span className="font-bold text-white">22°</span>
                    <span className="text-[10px] text-white">12%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">19:00</span>
                    <span className="material-symbols-outlined text-tertiary"><MdNightsStay /></span>
                    <span className="font-bold text-white">20°</span>
                    <span className="text-[10px] text-white">10%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">20:00</span>
                    <span className="material-symbols-outlined text-tertiary"><MdOutlineBedtime /></span>
                    <span className="font-bold text-white">18°</span>
                    <span className="text-[10px] text-white">15%</span>
                </div>
                <div
                    className="min-w-[80px] glass-card bg-white/5 border-none p-4 flex flex-col items-center gap-2">
                    <span className="text-xs text-white">21:00</span>
                    <span className="material-symbols-outlined text-tertiary"><MdOutlineBedtime /></span>
                    <span className="font-bold text-white">17°</span>
                    <span className="text-[10px] text-white">18%</span>
                </div>
            </div>
        </div>
    )
}