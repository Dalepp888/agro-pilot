"use client";

import { createPortal } from "react-dom";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdClose, MdOutlineSchedule } from "react-icons/md";

export interface DayTask {
    id: string;
    title: string;
    plotName: string;
    time: string;
    completed: boolean;
    orderMs: number;
}

interface DayTasksModalProps {
    open: boolean;
    date: Date;
    anchor: { top: number; left: number };
    tasks: DayTask[];
    onClose: () => void;
}

function TaskCard({ task }: { task: DayTask }) {
    return (
        <div className="glass-card p-4 rounded-xl border-l-4 border-l-primary flex flex-col gap-2">
            <div className="flex justify-between items-start gap-3">
                <h4 className="font-bold text-body-lg text-white">{task.title}</h4>
                <span
                    className={`text-label-sm px-2 py-0.5 rounded shrink-0 ${task.completed ? "bg-white/10 text-on-surface-variant" : "bg-primary/20 text-primary"}`}>
                    {task.completed ? "Completada" : "Pendiente"}
                </span>
            </div>
            <div className="flex gap-4 text-caption text-on-surface-variant">
                <span className="flex items-center gap-1"><IoLocationOutline />{task.plotName}</span>
                <span className="flex items-center gap-1"><MdOutlineSchedule />{task.time}</span>
            </div>
        </div>
    )
}

export default function DayTasksModal({ open, date, anchor, tasks, onClose }: DayTasksModalProps) {

    const [showAll, setShowAll] = useState(false);

    if (!open) return null;

    const sorted = [...tasks].sort((a, b) => a.orderMs - b.orderMs);
    const first = sorted[0];
    const rest = sorted.slice(1);

    const dateLabel = date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return createPortal(
        <>
            <div
                className="fixed inset-0 z-[100] bg-transparent"
                onClick={onClose}
            />
            <div
                className="fixed z-[101] w-72 max-h-[50vh] overflow-y-auto glass-card p-5"
                style={{ top: anchor.top, left: anchor.left, transform: "translateX(-50%)" }}
            >
                <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-base font-bold text-on-surface">{dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1)}</h3>
                    <button
                        onClick={onClose}
                        className="text-on-surface-variant hover:text-on-surface transition-colors text-xl shrink-0"
                        aria-label="Cerrar"
                    >
                        <MdClose />
                    </button>
                </div>

                {sorted.length === 0 ? (
                    <p className="text-body-md font-body-md text-on-surface-variant">No hay tareas para esta fecha</p>
                ) : (
                    <>
                        <div className="flex flex-col gap-4">
                            <TaskCard task={first} />
                            {showAll && rest.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </div>
                        {rest.length > 0 && (
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="mt-5 w-full py-2 rounded-xl border border-white/20 text-primary font-label-sm text-label-sm hover:bg-white/5 transition-all"
                            >
                                {showAll ? "Ver menos" : `Ver las demás tareas del día (${rest.length})`}
                            </button>
                        )}
                    </>
                )}
            </div>
        </>,
        document.body
    )
}