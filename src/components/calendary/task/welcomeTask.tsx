"use client"
import { useAppTask } from "@/context/taskContext";
import { IoMdAdd } from "react-icons/io";
import TaskForm from "../form/taskForm";

export default function WelcomeTask() {

    const { open, setOpen } = useAppTask()

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2
                    className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                    Tareas</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Organiza y consulta las
                    actividades programadas para tus parcelas.</p>
            </div>
            <button
                onClick={() => setOpen(true)}
                className="bg-[#34D399] text-[#0B1210] px-6 py-3 rounded-full font-label-sm flex items-center gap-2 hover:bg-[#6bff8f] transition-colors whitespace-nowrap self-start md:self-auto shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <span className="text-[20px]"><IoMdAdd /></span>
                Nueva tarea
            </button>

            {open && (
                <div className="fixed inset-0 z-50">
                    {/* Fondo oscuro */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setOpen(false)}
                    />

                    {/* Contenido */}
                    <div className="relative z-10 w-full h-full overflow-auto p-10">
                        <TaskForm />
                    </div>
                </div>
            )}
        </div>
    )
}