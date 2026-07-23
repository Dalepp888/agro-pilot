import { IoRainyOutline } from "react-icons/io5";
import { MdAir, MdOutlineWbSunny } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

export default function SectionWeather() {
    return (
        <section className="glass-card p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">Clima en tiempo real</h3>
                    <p className="text-on-surface-variant/60 text-caption font-caption">Sensores Locales •
                        Activo</p>
                </div>
                <div className="text-right">
                    <p className="text-[40px] font-bold text-on-surface leading-tight">24°C</p>
                    <p className="text-primary text-label-sm font-label-sm font-bold">Soleado</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined"><WiHumidity /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Humedad</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">62%</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><IoRainyOutline /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Lluvia</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">8%</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined"><MdAir /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Viento</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">12km/h</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-on-tertiary-fixed-variant/20 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined"><MdOutlineWbSunny /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Mañana</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">26°C</p>
                    </div>
                </div>
            </div>
        </section>
    )
}