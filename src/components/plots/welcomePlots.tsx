"use client"
import { IoMdAdd } from "react-icons/io";
import FormPlots from "./form/formPlots";
import { useAppPlot } from "@/context/plotContext";

export default function WelcomePlots() {

    const { open, setOpen, plotEdit, setPlotEdit } = useAppPlot()

    return (
        <>
            <div className="flex flex-col gap-6 mb-10 md:flex-row md:justify-between md:items-end">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🌾</span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface">
                            Parcelas
                        </h2>
                    </div>

                    <p className="font-body-lg text-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl">
                        Administra todas las parcelas de tu finca y consulta rápidamente el estado de cada una.
                    </p>
                </div>

                <button
                    className="w-full md:w-auto bg-primary hover:bg-primary-container text-on-primary-container px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                    onClick={() => setOpen(true)}
                >
                    <IoMdAdd />
                    Nueva Parcela
                </button>
            </div>

            {(open || plotEdit) && (
                <div className="fixed inset-0 z-50">
                    {/* Fondo oscuro */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => {
                            setOpen(false)
                            setPlotEdit(false)
                        }}
                    />

                    {/* Contenido */}
                    <div className="relative z-10 w-full h-full overflow-auto p-10">
                        <FormPlots />
                    </div>
                </div>
            )}
        </>
    )
}