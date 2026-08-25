"use client"
import { deleteTask } from "@/actions/task";
import DeleteButton from "@/components/UI/buttonDelete";
import { ButtonUpdate } from "@/components/UI/buttonUpdate";
import { useAppTask } from "@/context/taskContext";
import { TaskWithPlot } from "@/types/task";
import { IoLocation } from "react-icons/io5";
import TaskForm from "../form/taskForm";

interface TaskItemProps {
    task: TaskWithPlot;
}

export default function TaskItem({ task }: TaskItemProps) {

    const { taskEdit } = useAppTask()

    return (
        <div
            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 relative">
            <div className="mt-1">
                <input className="" type="checkbox" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h4
                            className="font-body-md text-body-md text-on-surface font-semibold truncate">
                            {task.title}</h4>
                        <p
                            className="font-caption text-caption text-on-surface-variant mt-1 line-clamp-1">
                            {task.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <DeleteButton id={task.id} deleteAction={deleteTask} />
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

            <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#34D399] rounded-r opacity-50">
            </div>
            {taskEdit && <TaskForm />}
        </div>
    )
}