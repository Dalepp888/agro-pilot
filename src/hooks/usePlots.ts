import { PlotForm } from "@/types/plots";
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

    const [location, setLocation] = useState("");

    return { plot, setPlot, location, setLocation }
}