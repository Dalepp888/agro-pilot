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

    return { plot, setPlot, location, setLocation, errors, setErrors, open, setOpen }
}