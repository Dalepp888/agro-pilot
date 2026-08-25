import { useEffect, useState } from "react";
import { TaskForm, TaskErrors } from "@/types/task";
import { createTask, findUniqueTask, updateTask } from "@/actions/task";

export function useTasks() {

    const [task, setTask] = useState<TaskForm>({
        title: "",

        description: "",

        dueDate: "",

        plotId: "",
    });

    const [taskId, setTaskId] = useState<TaskForm>({
        title: "",

        description: "",

        dueDate: "",

        plotId: "",
    });

    const [idT, setIdT] = useState<string>("")

    const [open, setOpen] = useState(false);

    const [errors, setErrors] = useState<TaskErrors>({});

    const [taskEdit, setTaskEdit] = useState(false)

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = taskEdit
            ? await updateTask(idT, task)
            : await createTask(task);

        if (!result.success) {
            setErrors(result.errors ?? {});
            return;
        }

        setOpen(false);
        setTaskEdit(false);
    }

    useEffect(() => {
        if (!taskEdit) return;

        async function loadTask() {
            try {
                setLoading(true);

                const data = await findUniqueTask(idT);

                if (!data) return;

                setTaskId({
                    title: data.title,
                    description: data.description ?? "",
                    dueDate: data.dueDate.toISOString().split("T")[0],
                    plotId: data.plotId,
                });
            } finally {
                setLoading(false);
            }
        }

        loadTask();
    }, [taskEdit, idT]);

    useEffect(() => {
        console.log(taskId)
    }, [taskId])

    useEffect(() => {
        if (!taskEdit) {
            setTask({
                title: "",
                description: "",
                dueDate: "",
                plotId: "",
            });

            setErrors({});
        }
    }, [taskEdit]);

    return {
        task,
        setTask,
        errors,
        setErrors,
        open,
        setOpen,
        taskEdit,
        setTaskEdit,
        taskId,
        setTaskId,
        idT,
        setIdT,
        handleSubmit
    };
}