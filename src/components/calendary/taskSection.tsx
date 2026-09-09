import Link from "next/link";
import { getTask } from "@/actions/task";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";

interface TaskSectionProps {
    tasks: Awaited<ReturnType<typeof getTask>>;
}

function sameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function formatToday(date: Date): string {
    const formatted = date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export default function TaskSection({ tasks }: TaskSectionProps) {
    const today = new Date();

    const todaysTasks = tasks
        .filter((task) => !task.completed && sameDay(task.dueDate, today))
        .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
        .slice(0, 3);

    return (
        <aside className="w-[400px] glass-card p-8 overflow-y-auto flex flex-col gap-6">
            <div>
                <h3 className="font-headline-md text-headline-md font-bold text-primary mb-1">Actividades del día</h3>
                <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">{formatToday(today)}</p>
            </div>

            {todaysTasks.length === 0 ? (
                <p className="text-on-surface-variant font-body-md">No hay tareas programadas para hoy</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {todaysTasks.map((task) => (
                        <div
                            key={task.id}
                            className="glass-card p-4 rounded-xl border-l-4 border-l-secondary relative group cursor-pointer hover:translate-x-1 transition-transform">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-body-lg text-white">{task.title}</h4>
                                <span
                                    className="text-label-sm bg-secondary/20 text-secondary px-2 py-0.5 rounded">Pendiente</span>
                            </div>
                            <div className="grid grid-cols-2 gap-y-2 text-caption opacity-80">
                                <div className="flex items-center gap-1 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><IoLocationOutline /></span>
                                    {task.plot.name}
                                </div>
                                <div className="flex items-center gap-1 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><MdOutlineSchedule /></span>
                                    {task.dueDate.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Link
                href="/calendary/task"
                className="text-headline-md text-primary mb-1"
            >Ver Todas Las Tareas</Link>
        </aside>
    )
}