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

export interface AppContextType {
    plot: PlotForm;
    setPlot: React.Dispatch<React.SetStateAction<PlotForm>>;

    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;

}