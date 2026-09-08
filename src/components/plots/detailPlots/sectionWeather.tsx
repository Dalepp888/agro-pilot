import { IoRainyOutline } from "react-icons/io5";
import { MdAcUnit, MdAir, MdFoggy, MdOutlineCloud, MdOutlineThunderstorm, MdOutlineWaterDrop, MdOutlineWbSunny } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { getWeatherDescription, getWeatherKind, type WeatherKind } from "@/lib/weatherInfo";
import type { OpenMeteoWeather } from "@/types/weather";

interface SectionWeatherProps {
    weather: OpenMeteoWeather | null;
}

function WeatherIcon({ kind }: { kind: WeatherKind }) {
    if (kind === "clear") return <MdOutlineWbSunny />;
    if (kind === "cloudy") return <MdOutlineCloud />;
    if (kind === "fog") return <MdFoggy />;
    if (kind === "rain") return <MdOutlineWaterDrop />;
    if (kind === "snow") return <MdAcUnit />;
    return <MdOutlineThunderstorm />;
}

export default function SectionWeather({ weather }: SectionWeatherProps) {
    const temp = weather ? Math.round(weather.current?.temperature_2m ?? 0) : null;
    const humidity = weather?.current?.relative_humidity_2m ?? null;
    const rain = weather?.daily?.precipitation_probability_max?.[0] ?? null;
    const wind = weather?.current?.wind_speed_10m ?? null;
    const tomorrowMax = weather?.daily?.temperature_2m_max?.[1] ?? null;
    const weatherCode = weather?.current?.weather_code ?? 0;
    const description = weather ? getWeatherDescription(weatherCode) : "";
    const kind: WeatherKind = weather ? getWeatherKind(weatherCode) : "clear";

    return (
        <section className="glass-card p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">Clima en tiempo real</h3>
                </div>
                <div className="text-right">
                    <p className="text-[40px] font-bold text-on-surface leading-tight">{temp !== null ? `${temp}°C` : "—"}</p>
                    <p className="text-primary text-label-sm font-label-sm font-bold">{description || "—"}</p>
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
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">{humidity !== null ? `${humidity}%` : "—"}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><IoRainyOutline /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Lluvia</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">{rain !== null ? `${rain}%` : "—"}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined"><MdAir /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Viento</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">{wind !== null ? `${Math.round(wind)}km/h` : "—"}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div
                        className="w-10 h-10 rounded-lg bg-on-tertiary-fixed-variant/20 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined"><WeatherIcon kind={kind} /></span>
                    </div>
                    <div>
                        <p className="text-[10px] text-on-surface-variant/50 uppercase font-bold">Mañana</p>
                        <p className="text-body-lg font-body-lg font-bold text-on-surface">{tomorrowMax !== null ? `${Math.round(tomorrowMax)}°C` : "—"}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}