import { getTask } from "@/actions/task";
import { MdOutlineExpandMore } from "react-icons/md";
import TaskItem from "./taskItem";

export default async function ListTask() {

    const task = await getTask()

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

                    <div>
                        <h3
                            className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase mb-4 flex items-center gap-3">
                            Hoy · 20 Ago
                            <div className="h-px bg-white/10 flex-1"></div>
                        </h3>
                        <div className="flex flex-col gap-2">
                            {task.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}