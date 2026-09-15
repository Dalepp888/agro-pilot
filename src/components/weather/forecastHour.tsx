import { CiCloudOn } from "react-icons/ci";
import { IoRainyOutline, IoSunnyOutline } from "react-icons/io5";
import { MdAcUnit, MdNightsStay, MdOutlineSchedule, MdThunderstorm } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import type { OpenMeteoWeather } from "@/types/weather";

const HOURS = 8;

interface ForecastHourProps {
    weather?: OpenMeteoWeather;
}

function getHour(time: string): number {
    return new Date(time).getHours();
}

function weatherIcon(code: number | undefined, hour: number) {
    if (code === undefined || code <= 1) {
        return hour >= 6 && hour <= 20 ? <IoSunnyOutline /> : <MdNightsStay />;
    }
    if (code === 2) return <WiDayCloudy />;
    if (code === 3 || code === 45 || code === 48) return <CiCloudOn />;
    if (code >= 51 && code <= 67) return <IoRainyOutline />;
    if (code >= 71 && code <= 77) return <MdAcUnit />;
    if (code >= 80 && code <= 82) return <IoRainyOutline />;
    if (code >= 95) return <MdThunderstorm />;
    return <WiDayCloudy />;
}

export default function ForecastHour({ weather }: ForecastHourProps) {
    const hourly = weather?.hourly;

    if (!hourly?.time?.length) {
        return (
            <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-headline-md text-lg text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined"><MdOutlineSchedule /></span>
                        Pronóstico por Hora
                    </h3>
                </div>
                <p className="text-sm text-on-surface-variant">Aún no hay datos de pronóstico por hora para esta parcela.</p>
            </div>
        )
    }

    const start = hourly.time.findIndex((time) => getHour(time) >= 8);
    const from = start === -1 ? 0 : start;

    const hours = hourly.time.slice(from, from + HOURS).map((time, index) => ({
        time,
        temp: Math.round(hourly.temperature_2m?.[index] ?? 0),
        precip: Math.round(hourly.precipitation_probability?.[index] ?? 0),
        code: hourly.weather_code?.[index],
    }));

    return (
        <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-lg text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined"><MdOutlineSchedule /></span>
                    Pronóstico por Hora
                </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">

                {hours.map((h, index) => {
                    const hour = getHour(h.time);
                    const night = hour < 6 || hour > 20;
                    const label = new Date(h.time).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });

                    return (
                        <div key={h.time}
                            className={`min-w-[80px] glass-card p-4 flex flex-col items-center gap-2 ${index === 0 ? "bg-primary/10 border-primary/20" : "bg-white/5 border-none"}`}>
                            <span className="text-xs text-white">{label}</span>
                            <span className={`material-symbols-outlined ${night ? "text-tertiary" : "text-primary-container"}`}>
                                {weatherIcon(h.code, hour)}
                            </span>
                            <span className="font-bold text-white">{h.temp}°</span>
                            <span className="text-[10px] text-white">{h.precip}%</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}