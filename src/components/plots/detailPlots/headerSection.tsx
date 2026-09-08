import { findUniquePlot } from "@/actions/plot";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface HeaderSectionProps {
    plot: NonNullable<Awaited<ReturnType<typeof findUniquePlot>>>;
}

export default function HeaderSection({ plot }: HeaderSectionProps) {
    return (
        <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in fade-in slide-in-from-top duration-700">
            <div className="space-y-1">
                <Link className="flex items-center gap-1 text-primary hover:gap-2 transition-all text-label-sm font-label-sm mb-2 group"
                    href="/plots">
                    <span className="material-symbols-outlined text-[18px]"><FaArrowLeft /></span>
                    Parcelas
                </Link>
                <h2 className="text-5xl font-bold text-on-surface">{plot.name}</h2>
                <div className="flex items-center gap-3 mt-2">
                    <span
                        className="px-2 py-0.5 bg-primary/20 text-primary text-[11px] font-bold rounded uppercase tracking-wider">Maíz</span>
                    <span className="text-on-surface-variant/60 text-body-md font-body-md">• {plot.plantingDate
                        ? plot.plantingDate.toLocaleDateString("es-ES")
                        : "No especificada"
                    } •</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="px-6 py-2.5 rounded-xl border border-white/20 text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-all">Editar
                    parcela</button>
                <button
                    className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">Registrar
                    actividad</button>
            </div>
        </div>
    )
}