"use client"
import { useAppPlot } from "@/context/plotContext";
import { MdEdit } from "react-icons/md";

interface ButtonUpdateProps {
    id: string;
}

export function ButtonUpdate({ id }: ButtonUpdateProps) {

    const { setPlotEdit, setIdP } = useAppPlot()

    return (
        <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                setPlotEdit(true)
                setIdP(id)
            }}
            className="w-10 h-10 flex items-center justify-center
                   rounded-lg border border-white/10
                   text-on-surface-variant
                   hover:bg-white/5 hover:text-primary
                   transition-colors"
            title="Editar parcela"
        >
            <MdEdit />
        </button>
    )
}
