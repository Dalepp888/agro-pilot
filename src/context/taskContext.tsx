"use client"

import { createContext, useContext, ReactNode } from "react"
import { TaskContextType } from "@/types/task";
import { useTasks } from "@/hooks/useTask";

const TaskContext = createContext<TaskContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<AppProviderProps> = ({ children }) => {

    const {
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
    } = useTasks()

    return (
        <TaskContext.Provider value={{
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
        }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useAppTask = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};