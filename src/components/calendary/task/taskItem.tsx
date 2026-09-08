"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteTask, toggleTaskCompleted } from "@/actions/task";
import DeleteButton from "@/components/UI/buttonDelete";
import { ButtonUpdate } from "@/components/calendary/buttonUpdate";
import { useAppTask } from "@/context/taskContext";
import { TaskWithPlot } from "@/types/task";
import { IoLocation } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import TaskForm from "../form/taskForm";

interface TaskItemProps {
    task: TaskWithPlot;
}

export default function TaskItem({ task }: TaskItemProps) {

    const { taskEdit } = useAppTask()
    const router = useRouter()
    const [completed, setCompleted] = useState(task.completed)

    async function handleToggle() {
        const next = !completed
        setCompleted(next)
        const res = await toggleTaskCompleted(task.id)
        if (!res.success) {
            setCompleted(!next)
        }
        router.refresh()
    }

    return (
        <div
            className={`group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 relative ${completed ? "opacity-60" : ""}`}>
            <div className="mt-1">
                <button
                    type="button"
                    onClick={handleToggle}
                    aria-label={completed ? "Marcar como pendiente" : "Marcar como completada"}
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors cursor-pointer ${completed
                        ? "bg-[#34D399] border-[#34D399] text-[#0B1210]"
                        : "border-white/30 hover:border-[#34D399] text-transparent hover:text-[#34D399]"}`}
                >
                    <MdCheck className="text-sm" />
                </button>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h4
                            className={`font-body-md text-body-md font-semibold truncate transition-colors ${completed ? "text-on-surface-variant line-through" : "text-on-surface"}`}>
                            {task.title}</h4>
                        <p
                            className="font-caption text-caption text-on-surface-variant mt-1 line-clamp-1">
                            {task.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <DeleteButton id={task.id} deleteAction={deleteTask} title="Borrar tarea" message="Se eliminará la tarea de forma permanente. ¿Estás seguro que deseas borrarla?" />
                        <ButtonUpdate id={task.id} />
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                    <div
                        className="flex items-center gap-1.5 text-primary-container/80 text-caption font-caption">
                        <span className="material-symbols-outlined text-[16px]"><IoLocation /></span>
                        <span>{task.plot.name}</span>
                    </div>
                </div>
            </div>

            <div className={`absolute left-0 top-4 bottom-4 w-[2px] rounded-r opacity-50 ${completed ? "bg-[#34D399]" : "bg-[#34D399]"}`}>
            </div>
            {taskEdit && <TaskForm />}
        </div>
    )
}