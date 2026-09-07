import { PlotSchema } from "@/lib/validations/plot.schema";

export interface PlotForm {
    name: string;

    cropName: string;
    variety: string;

    area: number | null;

    latitude: number | null;
    longitude: number | null;

    plantingDate: string;

    notes: string;
}

export interface PlotContextType {
    plot: PlotForm;
    setPlot: React.Dispatch<React.SetStateAction<PlotForm>>;

    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;

    errors: PlotErrors;
    setErrors: React.Dispatch<React.SetStateAction<PlotErrors>>;

    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

    plotEdit: boolean;
    setPlotEdit: React.Dispatch<React.SetStateAction<boolean>>;

    plotId: PlotForm;
    setPlotId: React.Dispatch<React.SetStateAction<PlotForm>>;

    idP: string;
    setIdP: React.Dispatch<React.SetStateAction<string>>;

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

}

export type PlotErrors = Partial<
    Record<keyof PlotSchema, string[]>
>;