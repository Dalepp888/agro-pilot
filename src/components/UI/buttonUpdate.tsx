"use client"
import { useAppTask } from "@/context/taskContext";
import { MdEdit } from "react-icons/md";

interface ButtonUpdateProps {
    id: string;
}

export function ButtonUpdate({ id }: ButtonUpdateProps) {

    const { setTaskEdit, setIdT } = useAppTask()

    return (
        <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                setTaskEdit(true)
                setIdT(id)
            }}
            className="w-10 h-10 flex items-center justify-center
                   rounded-lg border border-white/10
                   text-on-surface-variant
                   hover:bg-white/5 hover:text-primary
                   transition-colors"
            title="Editar tarea"
        >
            <MdEdit />
        </button>
    )
}