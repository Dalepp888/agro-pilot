import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPlot, findUniquePlot, updatePlot } from "@/actions/plot";
import { PlotErrors, PlotForm } from "@/types/plots";

export function usePlots() {

    const router = useRouter();

    const [plot, setPlot] = useState<PlotForm>({
        name: "",

        cropName: "",
        variety: "",

        area: null,

        latitude: null,
        longitude: null,

        plantingDate: "",

        notes: "",
    });

    const [plotId, setPlotId] = useState<PlotForm>({
        name: "",
        cropName: "",
        variety: "",
        area: null,
        latitude: null,
        longitude: null,
        plantingDate: "",
        notes: "",
    });

    const [idP, setIdP] = useState<string>("")

    const [errors, setErrors] = useState<PlotErrors>({});

    const [location, setLocation] = useState("");

    const [open, setOpen] = useState(false);

    const [plotEdit, setPlotEdit] = useState(false)

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = plotEdit
            ? await updatePlot(idP, plot)
            : await createPlot(plot);

        if (!result.success) {
            setErrors(result.errors ?? {})
            return;
        }

        setOpen(false);
        setPlotEdit(false);
        router.refresh();
    }

    useEffect(() => {
        if (!plotEdit) return;

        async function loadPlot() {
            try {
                setLoading(true);

                const data = await findUniquePlot(idP);

                if (!data) return;

                setPlotId({
                    name: data.name,
                    cropName: data.cropName,
                    variety: data.variety ?? "",
                    area: data.area,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    plantingDate: data.plantingDate
                        ? data.plantingDate.toISOString().split("T")[0]
                        : "",
                    notes: data.notes ?? "",
                });
            } finally {
                setLoading(false);
            }
        }

        loadPlot();
    }, [plotEdit, idP]);

    useEffect(() => {
        if (!plotEdit) {
            setPlot({
                name: "",
                cropName: "",
                variety: "",
                area: null,
                latitude: null,
                longitude: null,
                plantingDate: "",
                notes: "",
            });

            setErrors({});
        }
    }, [plotEdit]);

    return {
        plot,
        setPlot,
        location,
        setLocation,
        errors,
        setErrors,
        open,
        setOpen,
        plotEdit,
        setPlotEdit,
        plotId,
        setPlotId,
        idP,
        setIdP,
        handleSubmit
    }
}
