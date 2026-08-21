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

}

export type TaskErrors = Partial<
    Record<keyof TaskSchema, string[]>
>;