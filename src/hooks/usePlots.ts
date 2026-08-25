import { createPlot } from "@/actions/plot";
import { PlotErrors, PlotForm } from "@/types/plots";
import { useState } from "react";

export function usePlots() {

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

    const [errors, setErrors] = useState<PlotErrors>({});

    const [location, setLocation] = useState("");

    const [open, setOpen] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = await createPlot(plot);

        if (!result.success) {
            setErrors(result.errors ?? {})
            return;
        }

        console.log("Guardado correctamente");
    }

    return {
        plot,
        setPlot,
        location,
        setLocation,
        errors,
        setErrors,
        open,
        setOpen,
        handleSubmit
    }
}