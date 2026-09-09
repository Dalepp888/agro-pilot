"use client"
import { useMemo, useState } from "react";
import { getTask } from "@/actions/task";
import { MdOutlineExpandMore } from "react-icons/md";
import TaskItem from "./taskItem";

type Filter = "todas" | "pendientes" | "completadas";

interface ListTaskProps {
    tasks: Awaited<ReturnType<typeof getTask>>;
}

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

const filters: { key: Filter; label: string }[] = [
    { key: "todas", label: "Todas" },
    { key: "pendientes", label: "Pendientes" },
    { key: "completadas", label: "Completadas" },
];

export default function ListTask({ tasks }: ListTaskProps) {

    const [filter, setFilter] = useState<Filter>("todas");
    const [plotFilter, setPlotFilter] = useState<string>("");

    const plots = useMemo(() => {
        const map = new Map<string, string>();
        for (const t of tasks) {
            if (!map.has(t.plot.id)) {
                map.set(t.plot.id, t.plot.name);
            }
        }
        return Array.from(map.entries());
    }, [tasks]);

    const filtered = useMemo(() => {
        let base = tasks;

        if (plotFilter !== "") {
            base = base.filter((t) => t.plotId === plotFilter);
        }

        if (filter === "pendientes") {
            base = base.filter((t) => !t.completed);
        } else if (filter === "completadas") {
            base = base.filter((t) => t.completed);
        }

        const sorted = [...base].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

        const groups = new Map<number, typeof base>();
        for (const t of sorted) {
            const dayKey = startOfDay(t.dueDate);
            const group = groups.get(dayKey);
            if (group) {
                group.push(t);
            } else {
                groups.set(dayKey, [t]);
            }
        }

        return Array.from(groups.entries());
    }, [tasks, filter, plotFilter]);

    return (
        <>
            <div className="glass-card p-6 md:p-8 flex flex-col h-full">
                <div
                    className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8 pb-6 border-b border-white/10">

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                        <div
                            className="flex bg-black/30 rounded-full p-1 border border-white/5 overflow-x-auto">
                            {filters.map((f) => (
                                <button
                                    key={f.key}
                                    onClick={() => setFilter(f.key)}
                                    className={`px-4 py-1.5 rounded-full font-label-sm whitespace-nowrap transition-colors ${filter === f.key
                                        ? "bg-white/10 text-on-surface"
                                        : "text-on-surface-variant hover:text-on-surface"}`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            <select
                                value={plotFilter}
                                onChange={(e) => setPlotFilter(e.target.value)}
                                className="appearance-none py-2.5 pl-4 pr-10 text-body-md text-on-surface-variant focus:text-on-surface bg-transparent cursor-pointer min-w-[160px]">
                                <option className="bg-surface-container" value="">Parcela (Todas)</option>
                                {plots.map(([plotId, plotName]) => (
                                    <option key={plotId} className="bg-surface-container" value={plotId}>{plotName}</option>
                                ))}
                            </select>
                            <span
                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"><MdOutlineExpandMore /></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {filtered.map(([dayKey, dayTasks]) => (
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