"use client"
import { deletePlot, getPlots } from "@/actions/plot";
import PlotActions from "./plotAction";
import Link from "next/link";
import { MdAcUnit, MdFoggy, MdOutlineCloud, MdOutlineEventRepeat, MdOutlineThunderstorm, MdOutlineWaterDrop, MdOutlineWbSunny } from "react-icons/md";
import { getWeatherDescription, getWeatherKind, type WeatherKind } from "@/lib/weatherInfo";
import type { OpenMeteoWeather } from "@/types/weather";

interface CardPlotProps {
    plot: Awaited<ReturnType<typeof getPlots>>;
    weatherByPlot?: Record<string, OpenMeteoWeather>;
    nextTaskByPlot?: Record<string, { title: string; dueDate: Date } | null>;
}

export default function CardPlot({ plot, weatherByPlot = {}, nextTaskByPlot = {} }: CardPlotProps) {

    return (
        <>
            {
                plot.map((plot) => {
                    const weather = weatherByPlot[plot.id];
                    const temp = weather ? Math.round(weather.current?.temperature_2m ?? 0) : null;
                    const humidity = weather?.current?.relative_humidity_2m ?? null;
                    const rain = weather?.daily?.precipitation_probability_max?.[0] ?? null;
                    const weatherCode = weather?.current?.weather_code ?? 0;
                    const description = weather ? getWeatherDescription(weatherCode) : "";
                    const kind: WeatherKind = weather ? getWeatherKind(weatherCode) : "clear";
                    const iconColor = kind === "clear" ? "text-yellow-500"
                        : kind === "rain" ? "text-primary"
                            : "text-on-surface-variant";

                    return (
                        <Link
                            key={plot.id}
                            href={`/plots/${plot.id}`}
                            className="glass-card p-6 relative overflow-hidden group block"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-on-surface">{plot.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="status-glow text-primary bg-primary"></span>
                                        <span className="text-xs font-medium text-primary uppercase">Saludable</span>
                                    </div>
                                </div>
                                <PlotActions id={plot.id} deleteAction={deletePlot} />
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant">Cultivo</span>
                                    <span className="font-bold text-white">{plot.cropName}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant">Fecha de siembra</span>
                                    <span className="font-bold text-white">{plot.plantingDate
                                        ? plot.plantingDate.toLocaleDateString("es-ES")
                                        : "No especificada"}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant">Días transcurridos</span>
                                    <span className="px-2 py-0.5 bg-white/10 rounded-md font-mono font-bold text-white">{plot.plantingDate
                                        ? Math.floor(
                                            (new Date().getTime() - plot.plantingDate.getTime()) /
                                            (1000 * 60 * 60 * 24)
                                        )
                                        : "—"}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant">Clima</span>
                                    <span className="flex items-center gap-1 font-bold">
                                        <span className={`text-sm ${iconColor}`}>
                                            {kind === "clear" && <MdOutlineWbSunny />}
                                            {kind === "cloudy" && <MdOutlineCloud />}
                                            {kind === "fog" && <MdFoggy />}
                                            {kind === "rain" && <MdOutlineWaterDrop />}
                                            {kind === "snow" && <MdAcUnit />}
                                            {kind === "storm" && <MdOutlineThunderstorm />}
                                        </span>
                                        <span className="text-white">{weather ? `${description} ${temp}°C` : "—"}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 mb-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-primary text-sm"><MdOutlineEventRepeat /></span>
                                    <span className="text-[10px] font-bold uppercase text-primary tracking-wider">Próxima
                                        Tarea</span>
                                </div>
                                {nextTaskByPlot[plot.id] ? (
                                    <>
                                        <p className="text-sm font-semibold text-on-surface">{nextTaskByPlot[plot.id]!.title}</p>
                                        <p className="text-xs text-on-surface-variant mt-0.5">{nextTaskByPlot[plot.id]!.dueDate.toLocaleDateString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</p>
                                    </>
                                ) : (
                                    <p className="text-sm font-semibold text-on-surface-variant">Sin tareas programadas</p>
                                )}
                            </div>
                            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Temp</p>
                                    <p className="text-lg font-bold text-on-surface">{temp !== null ? `${temp}°` : "—"}</p>
                                </div>
                                <div className="text-center border-x border-white/10">
                                    <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Hum</p>
                                    <p className="text-lg font-bold text-on-surface">{humidity !== null ? `${humidity}%` : "—"}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] uppercase text-on-surface-variant mb-1 font-bold">Lluvia</p>
                                    <p className="text-lg font-bold text-on-surface">{rain !== null ? `${rain}%` : "—"}</p>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}