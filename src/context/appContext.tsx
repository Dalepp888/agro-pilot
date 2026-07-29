"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { usePlots } from "@/hooks/usePlots";
import { AppContextType } from "@/types/plots";

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const { plot, setPlot, location, setLocation } = usePlots()

    return (
        <AppContext.Provider value={{ plot, setPlot, location, setLocation }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};