import { getTaskByPlot } from "@/actions/task";
import Link from "next/link";
import { TbCalendarOff } from "react-icons/tb";

interface TasksPlotProps {
    plotId: string;
}

function formatTaskDate(date: Date): string {
    return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default async function HistoryActivities({ plotId }: TasksPlotProps) {

    const tasks = (await getTaskByPlot(plotId)).slice(0, 4)

    return (
        <section className="glass-card p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-headline-md font-headline-md text-on-surface">Tareas</h3>
                <Link href="/calendary/task" className="text-primary text-label-sm font-label-sm hover:underline">Ver todo</Link>
            </div>
            {tasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant/50 mb-4">
                        <span className="material-symbols-outlined text-2xl"><TbCalendarOff /></span>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant">No hay tareas asignadas</p>
                    <p className="text-caption font-caption text-on-surface-variant/50 mt-1">Cuando agregues tareas a esta parcela aparecerán aquí.</p>
                </div>
            ) : (
                <div className="space-y-8 relative">
                    <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>

                    {tasks.map((task) => (
                        <div key={task.id} className="flex gap-6 relative group">
                            <div
                                className={`w-6 h-6 rounded-full border-4 border-[#0b1210] z-10 mt-1 transition-transform group-hover:scale-125 ${task.completed ? "bg-primary" : "bg-white/20"}`}>
                            </div>
                            <div className="flex-1 pb-2 border-b border-white/5">
                                <div className="flex justify-between items-start">
                                    <h4 className={`text-body-lg font-body-lg font-semibold ${task.completed ? "text-on-surface-variant line-through" : "text-on-surface"}`}>
                                        {task.title}
                                    </h4>
                                    <span className="text-caption font-caption text-on-surface-variant/50 whitespace-nowrap ml-4">{formatTaskDate(task.dueDate)}</span>
                                </div>
                                {task.description && (
                                    <p className="text-body-md font-body-md text-on-surface-variant mt-1">{task.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}