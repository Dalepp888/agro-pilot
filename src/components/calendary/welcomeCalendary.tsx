"use client"
import { useAppTask } from "@/context/taskContext";
import { IoMdAdd } from "react-icons/io";
import TaskForm from "./form/taskForm";

export default function WelcomeCalendary() {

    const { open, setOpen } = useAppTask()

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
                <h2 className="font-display-lg text-headline-md font-bold mb-1 text-on-surface-variant">📅 Calendario de Actividades</h2>
                <p className="text-on-surface-variant max-w-2xl text-body-md opacity-80">Consulta y organiza las
                    actividades de tus cultivos. También encontrarás las tareas sugeridas automáticamente por la
                    IA.</p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-label-sm flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
                    onClick={() => setOpen(true)}
                >
                    <span className="material-symbols-outlined text-[18px]"><IoMdAdd /></span>
                    Nueva actividad
                </button>
            </div>
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