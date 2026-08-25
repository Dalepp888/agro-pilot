import { Plot, Task } from "@/generated/prisma/client";
import { TaskSchema } from "@/lib/validations/task.schema"; 

export interface TaskForm {
    title: string;

    description: string;

    dueDate: string;

    plotId: string;
}

export interface TaskContextType {
    task: TaskForm;
    setTask: React.Dispatch<React.SetStateAction<TaskForm>>;

    errors: TaskErrors;
    setErrors: React.Dispatch<React.SetStateAction<TaskErrors>>;

    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

    taskEdit: boolean;
    setTaskEdit: React.Dispatch<React.SetStateAction<boolean>>;

    taskId: TaskForm;
    setTaskId: React.Dispatch<React.SetStateAction<TaskForm>>;

    idT: string;
    setIdT: React.Dispatch<React.SetStateAction<string>>;

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export type TaskWithPlot = Task & {
    plot: Plot;
};

export type TaskErrors = Partial<
    Record<keyof TaskSchema, string[]>
>;