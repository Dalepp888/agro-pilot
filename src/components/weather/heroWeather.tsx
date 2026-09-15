import { IoIosWater } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import type { OpenMeteoWeather } from "@/types/weather";

interface HeroWeatherProps {
    weather?: OpenMeteoWeather;
}

function conditionLabel(code: number | undefined): string {
    switch (code) {
        case 0: return "Despejado";
        case 1: return "Mayormente despejado";
        case 2: return "Parcialmente nublado";
        case 3: return "Nublado";
        case 45: return "Niebla";
        case 48: return "Niebla con escarcha";
        case 51:
        case 53:
        case 55: return "Llovizna";
        case 56:
        case 57: return "Llovizna helada";
        case 61:
        case 63:
        case 65: return "Lluvia";
        case 66:
        case 67: return "Lluvia helada";
        case 71:
        case 73:
        case 75: return "Nieve";
        case 77: return "Nieve granulada";
        case 80:
        case 81:
        case 82: return "Chubascos";
        case 85:
        case 86: return "Chubascos de nieve";
        case 95: return "Tormenta";
        case 96:
        case 99: return "Tormenta con granizo";
        default: return "Condiciones actuales";
    }
}

function windDirection(deg: number | undefined): string | null {
    if (deg === undefined) return null;
    const dirs = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
    return dirs[Math.round(deg / 45) % 8];
}

export default function HeroWeather({ weather }: HeroWeatherProps) {
    const current = weather?.current;

    if (!current) {
        return (
            <div className="glass-card p-6 relative overflow-hidden">
                <p className="text-on-surface-variant">Aún no hay datos del clima actual para esta parcela.</p>
            </div>
        )
    }

    const temperature = Math.round(current.temperature_2m);
    const feel = current.apparent_temperature !== undefined
        ? Math.round(current.apparent_temperature)
        : null;
    const humidity = Math.round(current.relative_humidity_2m);
    const rainProb = weather?.daily?.precipitation_probability_max?.[0];
    const wind = Math.round(current.wind_speed_10m);
    const dir = windDirection(current.wind_direction_10m);
    const rainMm = typeof current.precipitation === "number"
        ? Math.round(current.precipitation * 10) / 10
        : null;

    return (
        <div className="glass-card p-6 relative overflow-hidden group">
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
                            <span className="text-8xl font-bold text-white">{temperature}</span>
                            <span className="text-4xl text-white">°C</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span
                                className="px-3 py-1 bg-primary/10 text-sm font-bold rounded-full border border-primary/20 uppercase tracking-wider text-white">{conditionLabel(current.weather_code)}</span>
                            {feel !== null && <span className="text-sm text-white">RealFeel {feel}°C</span>}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1 max-w-md">
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Humedad</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary"><WiHumidity /></span>
                            <span className="text-xl font-bold text-white">{humidity}%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Prob.
                            Lluvia</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary-container"><IoIosWater /></span>
                            <span className="text-xl font-bold text-white">{rainProb !== undefined ? `${Math.round(rainProb)}%` : "—"}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Viento</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-on-surface-variant"><MdAir /></span>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">{wind} km/h</span>
                                {dir && <span className="text-[10px] text-white">Dirección: {dir}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-caption uppercase tracking-widest text-[10px] text-white">Lluvia
                            Est.</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary-container"><IoRainyOutline /></span>
                            <span className="text-xl font-bold text-white">{rainMm !== null ? `${rainMm}mm` : "—"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}