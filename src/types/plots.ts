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

}

export type PlotErrors = Partial<
    Record<keyof PlotSchema, string[]>
>;