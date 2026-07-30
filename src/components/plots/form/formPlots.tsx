"use client"
import { FaSearch } from "react-icons/fa";
import { PiPottedPlantDuotone } from "react-icons/pi";
import PageMap from "@/components/map/mapClient"
import { useApp } from "@/context/appContext";
import { createPlot } from "@/actions/plot";

export default function FormPlots() {

    const { location, setLocation, plot, setPlot, errors, setErrors, setOpen } = useApp()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = await createPlot(plot);

        if (!result.success) {
            setErrors(result.errors ?? {})
            return;
        }

        console.log("Guardado correctamente");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">

                <section className="lg:col-span-5 space-y-6 h-full">
                    <div className="glass-card p-6 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            <h3 className="font-headline-md text-label-sm text-primary uppercase tracking-widest">Información de
                                cultivo</h3>
                        </div>
                        <div className="space-y-5 flex-1">
                            <div className="space-y-1.5">
                                <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Nombre de la
                                    parcela</label>
                                <div className="relative">
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"><PiPottedPlantDuotone /></span>
                                    <input
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.name
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="Ej: Sector Norte A1"
                                        type="text"
                                        value={plot.name}
                                        onChange={(e) =>
                                            setPlot(prev => ({
                                                ...prev,
                                                name: e.target.value,
                                            }))
                                        }
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-sm text-red-400">
                                        {errors.name[0]}
                                    </p>
                                )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Tipo de
                                        cultivo</label>
                                    <input
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.cropName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="Ej: Frijol"
                                        type="text"
                                        value={plot.cropName}
                                        onChange={(e) =>
                                            setPlot(prev => ({
                                                ...prev,
                                                cropName: e.target.value,
                                            }))
                                        }
                                    />
                                    {errors.cropName && (
                                        <p className="text-sm text-red-400">
                                            {errors.cropName[0]}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Variedad <span
                                        className="opacity-50">(Opcional)</span></label>
                                    <input
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.variety
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="Ej: Híbrido K4"
                                        type="text"
                                        value={plot.variety}
                                        onChange={(e) =>
                                            setPlot(prev => ({
                                                ...prev,
                                                variety: e.target.value,
                                            }))
                                        }
                                    />
                                    {errors.variety && (
                                        <p className="text-sm text-red-400">
                                            {errors.variety[0]}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Superficie (Ha)
                                        <span className="opacity-50">(Opcional)</span></label>
                                    <input
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.area
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="0.00"
                                        type="number"
                                        value={plot.area ?? ""}
                                        onChange={(e) =>
                                            setPlot(prev => ({
                                                ...prev,
                                                area: e.target.value === "" ? null : Number(e.target.value),
                                            }))
                                        }
                                    />
                                    {errors.area && (
                                        <p className="text-sm text-red-400">
                                            {errors.area[0]}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Fecha de
                                        siembra</label>
                                    <input
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.plantingDate
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        type="date"
                                        value={plot.plantingDate}
                                        onChange={(e) =>
                                            setPlot(prev => ({
                                                ...prev,
                                                plantingDate: e.target.value,
                                            }))
                                        }
                                    />
                                    {errors.plantingDate && (
                                        <p className="text-sm text-red-400">
                                            {errors.plantingDate[0]}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label
                                    className="font-label-sm text-label-sm text-on-surface-variant px-1">Observaciones</label>
                                <textarea
                                    className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.notes
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-outline-variant/30 focus:border-primary/50"
                                        }`}
                                    placeholder="Detalles adicionales sobre el suelo, clima previo o historial..."
                                    rows={4}
                                    value={plot.notes}
                                    onChange={(e) =>
                                        setPlot(prev => ({
                                            ...prev,
                                            notes: e.target.value,
                                        }))
                                    }
                                ></textarea>
                                {errors.notes && (
                                    <p className="text-sm text-red-400">
                                        {errors.notes[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/5">
                            <button
                                className="flex-1 py-4 rounded-2xl font-bold transition-transform active:scale-95 border border-white/10 text-on-surface hover:bg-white/5"
                                onClick={() => setOpen(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-primary text-on-primary flex-[2] py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
                                type="submit"
                            >
                                Guardar parcela</button>
                        </div>
                    </div>
                </section>

                <section className="lg:col-span-7 h-full flex flex-col">
                    <div className="glass-card h-full flex flex-col overflow-hidden relative">

                        <div className="p-6 pb-2 z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Ubicación de la
                                        parcela</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Busca tu finca o
                                        selecciona directamente un punto en el mapa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pb-6 pt-2 z-10">
                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"><FaSearch /></span>
                                    <input
                                        className="bg-black/30 border border-outline-variant/30 backdrop-blur-md text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all w-full pl-12 pr-4 py-3 rounded-2xl font-body-md"
                                        placeholder="Buscar ciudad, pueblo o dirección..."
                                        type="text"
                                        value={location}
                                        onChange={(e) => {
                                            setLocation(e.target.value)
                                            console.log(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 relative m-4 rounded-[1.5rem] overflow-hidden">
                            <PageMap />
                            {(errors.latitude || errors.longitude) && (
                                <p className="text-red-400 text-sm mt-2">
                                    Debes seleccionar una parcela en el mapa.
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </form>
    )
}