"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { usePlots } from "@/hooks/usePlots";
import { PlotContextType } from "@/types/plots";

const PlotsContext = createContext<PlotContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const PlotsProvider: React.FC<AppProviderProps> = ({ children }) => {

    const {
        plot,
        setPlot,
        location,
        setLocation,
        errors,
        setErrors,
        open,
        setOpen
    } = usePlots()

    return (
        <PlotsContext.Provider value={{
            plot,
            setPlot,
            location,
            setLocation,
            errors,
            setErrors,
            open,
            setOpen
        }}>
            {children}
        </PlotsContext.Provider>
    );
};

export const useApp = (): PlotContextType => {
    const context = useContext(PlotsContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};