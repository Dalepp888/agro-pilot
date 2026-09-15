import { CiCloudOn } from "react-icons/ci";
import { IoIosWater } from "react-icons/io";
import { IoRainyOutline, IoSunnyOutline } from "react-icons/io5";
import { MdAcUnit, MdThunderstorm } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import type { OpenMeteoWeather } from "@/types/weather";

interface DayForecastProps {
    weather?: OpenMeteoWeather;
}

function weatherIcon(code: number | undefined) {
    if (code === undefined || code <= 1) return <IoSunnyOutline />;
    if (code === 2) return <WiDayCloudy />;
    if (code === 3 || code === 45 || code === 48) return <CiCloudOn />;
    if (code >= 51 && code <= 67) return <IoRainyOutline />;
    if (code >= 71 && code <= 77) return <MdAcUnit />;
    if (code >= 80 && code <= 82) return <IoRainyOutline />;
    if (code >= 95) return <MdThunderstorm />;
    return <WiDayCloudy />;
}

function dayLabel(dateStr: string, index: number): string {
    if (index === 0) return "Hoy";
    return new Date(dateStr + "T00:00:00").toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
}

export default function DayForecast({ weather }: DayForecastProps) {
    const daily = weather?.daily;

    if (!daily?.time?.length) {
        return (
            <div className="glass-card p-6">
                <div className="flex justify-between mb-6">
                    <h3 className="font-headline-md text-lg text-on-surface">Pronóstico 7 Días</h3>
                </div>
                <p className="text-sm text-on-surface-variant">Aún no hay datos de pronóstico diario para esta parcela.</p>
            </div>
        )
    }

    const days = daily.time.map((time, index) => ({
        time,
        max: Math.round(daily.temperature_2m_max?.[index] ?? 0),
        min: Math.round(daily.temperature_2m_min?.[index] ?? 0),
        precip: Math.round(daily.precipitation_probability_max?.[index] ?? 0),
        code: daily.weather_code?.[index],
    }));

    return (
        <div className="glass-card p-6">
            <div className="flex justify-between mb-6">
                <h3 className="font-headline-md text-lg text-on-surface">Pronóstico 7 Días</h3>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Next Week</span>
            </div>
            <div className="space-y-2">

                {days.map((d, index) => (
                    <div key={d.time}
                        className={`flex items-center justify-between p-3 rounded-xl transition-colors ${index === 0 ? "bg-primary/10" : "hover:bg-white/5"}`}>
                        <span className="w-10 text-sm font-medium text-on-surface-variant">{dayLabel(d.time, index)}</span>
                        <div className="flex-1 flex items-center justify-center gap-4">
                            <span className="material-symbols-outlined text-primary-container">
                                {weatherIcon(d.code)}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px] text-tertiary"><IoIosWater /></span>
                                <span className="text-xs text-tertiary">{d.precip}%</span>
                            </div>
                        </div>
                        <div className="w-20 text-right">
                            <span className="text-sm font-bold text-white">{d.max}°</span>
                            <span className="text-xs text-on-surface-variant ml-2">{d.min}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}