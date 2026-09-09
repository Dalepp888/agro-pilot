"use client"
import { useAppPlot } from "@/context/plotContext";
import { ButtonUpdate } from "@/components/plots/buttonUpdate";
import DeleteButton from "@/components/UI/buttonDelete";
import FormPlots from "@/components/plots/form/formPlots";
import { deletePlot } from "@/actions/plot";

interface HeaderActionsProps {
    plotId: string;
}

export default function HeaderActions({ plotId }: HeaderActionsProps) {

    const { plotEdit, setPlotEdit } = useAppPlot()

    return (
        <>
            <div className="flex items-center gap-4">
                <ButtonUpdate id={plotId} label="Editar" />
                <DeleteButton
                    id={plotId}
                    deleteAction={deletePlot}
                    title="Borrar parcela"
                    message="Se eliminará la parcela y todos los datos asociados a ella (tareas y clima guardado). ¿Estás seguro que deseas borrarla?"
                    navigateTo="/plots"
                    className="px-6 py-2.5 rounded-xl border border-error/30 hover:bg-error/10 transition-all"
                />
            </div>

            {plotEdit && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setPlotEdit(false)}
                    />
                    <div className="relative z-10 w-full h-full overflow-auto p-10">
                        <FormPlots />
                    </div>
                </div>
            )}
        </>
    )
}