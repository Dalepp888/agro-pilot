import { getTask } from "@/actions/task";
import { MdOutlineExpandMore } from "react-icons/md";
import TaskItem from "./taskItem";

function startOfDay(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function sameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function formatDayHeader(date: Date): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const month = date.toLocaleDateString("es-ES", { month: "short" });
    const day = date.toLocaleDateString("es-ES", { day: "numeric" });
    const weekday = date.toLocaleDateString("es-ES", { weekday: "long" });

    if (sameDay(date, today)) return `Hoy · ${day} ${month}`;
    if (sameDay(date, tomorrow)) return `Mañana · ${day} ${month}`;
    if (sameDay(date, yesterday)) return `Ayer · ${day} ${month}`;

    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} · ${day} ${month}`;
}

export default async function ListTask() {

    const task = await getTask()

    const sorted = [...task].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

    const groups = new Map<number, typeof task>();
    for (const t of sorted) {
        const dayKey = startOfDay(t.dueDate);
        const group = groups.get(dayKey);
        if (group) {
            group.push(t);
        } else {
            groups.set(dayKey, [t]);
        }
    }

    return (
        <>
            <div className="glass-card p-6 md:p-8 flex flex-col h-full">
                <div
                    className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8 pb-6 border-b border-white/10">

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                        <div
                            className="flex bg-black/30 rounded-full p-1 border border-white/5 overflow-x-auto">
                            <button
                                className="px-4 py-1.5 rounded-full bg-white/10 text-on-surface font-label-sm whitespace-nowrap">Todas</button>
                            <button
                                className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm whitespace-nowrap transition-colors">Pendientes</button>
                            <button
                                className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm whitespace-nowrap transition-colors">Completadas</button>
                            <button
                                className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm whitespace-nowrap transition-colors flex items-center gap-1">
                                Vencidas <span className="w-1.5 h-1.5 rounded-full bg-error ml-1"></span>
                            </button>
                        </div>

                        <div className="relative">
                            <select
                                className="appearance-none py-2.5 pl-4 pr-10 text-body-md text-on-surface-variant focus:text-on-surface bg-transparent cursor-pointer min-w-[160px]">
                                <option className="bg-surface-container" value="">Parcela (Todas)</option>
                                <option className="bg-surface-container" value="alpha1">Sector Norte - Alpha 1</option>
                                <option className="bg-surface-container" value="beta2">Sector Sur - Beta 2</option>
                            </select>
                            <span
                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"><MdOutlineExpandMore /></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {Array.from(groups.entries()).map(([dayKey, dayTasks]) => (
                        <div key={dayKey}>
                            <h3
                                className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase mb-4 flex items-center gap-3">
                                {formatDayHeader(new Date(dayKey))}
                                <div className="h-px bg-white/10 flex-1"></div>
                            </h3>
                            <div className="flex flex-col gap-2">
                                {dayTasks.map((task) => (
                                    <TaskItem
                                        key={task.id}
                                        task={task}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}