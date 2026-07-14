import { IoIosWater } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

export default function HeroWeather() {
    return (
        <div className="glass-card p-stack-md relative overflow-hidden group">
            <div
                className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700">
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-8">
                    <div className="relative">
                        <span
                            className="material-symbols-outlined text-[120px] text-tertiary drop-shadow-[0_0_15px_rgba(123,208,255,0.4)]"
                            style={{ fontVariationSettings: "'FILL' 1" }}><TiWeatherPartlySunny /></span>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-8xl font-bold text-white">24</span>
                            <span className="text-4xl text-white">°C</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span
                                className="px-3 py-1 bg-primary/10 text-sm font-bold rounded-full border border-primary/20 uppercase tracking-wider text-white">Despejado</span>
                            <span className="text-sm text-white">RealFeel 26°C</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1 max-w-md">
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Humedad</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary"><WiHumidity /></span>
                            <span className="text-xl font-bold text-white">62%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Prob.
                            Lluvia</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary-container"><IoIosWater /></span>
                            <span className="text-xl font-bold text-white">8%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Viento</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-on-surface-variant"><MdAir /></span>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">12 km/h</span>
                                <span className="text-[10px] text-white">Dirección: NE</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Lluvia
                            Est.</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary-container"><IoRainyOutline /></span>
                            <span className="text-xl font-bold text-white">0mm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}