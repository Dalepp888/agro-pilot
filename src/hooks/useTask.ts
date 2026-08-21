import { useEffect, useState } from "react";
import { TaskForm, TaskErrors } from "@/types/task";

export function useTasks() {
    const [task, setTask] = useState<TaskForm>({
        title: "",

        description: "",

        dueDate: "",

        plotId: "",
    });

    const [open, setOpen] = useState(false);

    const [errors, setErrors] = useState<TaskErrors>({});

    useEffect(() => {
        console.log(task)
    },[task])

    return {
        task,
        setTask,
        errors,
        setErrors,
        open,
        setOpen
    };
}