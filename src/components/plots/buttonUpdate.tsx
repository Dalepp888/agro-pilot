"use client"
import { useAppPlot } from "@/context/plotContext";
import { MdEdit } from "react-icons/md";

interface ButtonUpdateProps {
    id: string;
    label?: string;
    className?: string;
}

export function ButtonUpdate({ id, label, className }: ButtonUpdateProps) {

    const { setPlotEdit, setIdP } = useAppPlot()

    if (label) {
        return (
            <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    setPlotEdit(true)
                    setIdP(id)
                }}
                className={`px-6 py-2.5 rounded-xl border border-white/20 text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-all flex items-center gap-2 ${className ?? ""}`}
                title="Editar parcela"
            >
                <MdEdit />
                {label}
            </button>
        )
    }

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