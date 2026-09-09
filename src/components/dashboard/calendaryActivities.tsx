import { IoIosWater } from "react-icons/io";
import { MdOutlineScience, MdOutlineSensors } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";

interface TaskWithPlot {
    id: string;
    title: string;
    description: string | null;
    dueDate: Date;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    plot: { name: string } | null;
}

interface CalendaryActivitiesProps {
    tasks: TaskWithPlot[];
}

function getDateLabel(date: Date): { label: string; day: number } {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diff = Math.round((target.getTime() - today.getTime()) / 86400000);

    if (diff === 0) return { label: "Hoy", day: date.getDate() };
    if (diff === 1) return { label: "Mañana", day: date.getDate() };

    return {
        label: date.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", ""),
        day: date.getDate(),
    };
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function timeAgo(date: Date): string {
    const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMinutes < 1) return "Ahora mismo";
    if (diffMinutes < 60) return `Hace ${diffMinutes} min`;

    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `Hace ${hours} hora${hours === 1 ? "" : "s"}`;

    const days = Math.floor(hours / 24);
    return `Hace ${days} día${days === 1 ? "" : "s"}`;
}

export default function CalendaryActivities({ tasks }: CalendaryActivitiesProps) {
    const pendientes = tasks
        .filter((task) => !task.completed)
        .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
        .slice(0, 5);

    const recientes = tasks
        .filter((task) => task.completed)
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        .slice(0, 4);

    const recentIcons = [
        { icon: <IoIosWater />, className: "bg-primary/20 text-primary" },
        { icon: <MdOutlineScience />, className: "bg-secondary-container/20 text-secondary" },
        { icon: <MdOutlineSensors />, className: "bg-tertiary-container/20 text-tertiary" },
    ];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="font-headline-md text-headline-md text-white">Calendario de Actividades</h3>
                    <button
                        className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"><VscDiffAdded /></button>
                </div>
                <div className="glass-card p-2">
                    {pendientes.length === 0 ? (
                        <p className="p-4 text-sm text-on-surface-variant">No hay tareas pendientes.</p>
                    ) : (
                        <ul className="divide-y divide-white/5">
                            {pendientes.map((task) => {
                                const { label, day } = getDateLabel(task.dueDate);
                                return (
                                    <li key={task.id} className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors rounded-xl">
                                        <div className="text-center min-w-[48px]">
                                            <p className="text-xs text-on-surface-variant uppercase">{label}</p>
                                            <p className="text-lg font-bold text-white">{day}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-on-surface">{task.title}</p>
                                            <p className="text-xs text-on-surface-variant">{task.plot?.name ?? "Parcela"} · {formatTime(task.dueDate)}</p>
                                        </div>
                                        <span
                                            className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Pendiente</span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="font-headline-md text-headline-md text-white">Actividad Reciente</h3>
                    <span className="text-xs text-on-surface-variant">Últimas 24h</span>
                </div>
                <div className="glass-card p-6 relative overflow-hidden h-[332px] overflow-y-auto">
                    <div className="space-y-6 relative z-10">
                        {recientes.length === 0 ? (
                            <p className="text-sm text-on-surface-variant">Sin actividad reciente.</p>
                        ) : (
                            recientes.map((task, index) => {
                                const item = recentIcons[index % recentIcons.length];
                                return (
                                    <div key={task.id} className="flex gap-4 items-start">
                                        <div className="relative flex flex-col items-center">
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${item.className}`}>
                                                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                            </div>
                                            {index < recientes.length - 1 && <div className="w-px h-12 bg-outline-variant/30 mt-2"></div>}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-on-surface">{task.title}</p>
                                            <p className="text-xs text-on-surface-variant">{timeAgo(task.updatedAt)} · {task.plot?.name ?? "Parcela"}</p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}