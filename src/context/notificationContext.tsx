"use client"

import { createContext, useContext, ReactNode } from "react"
import { NotificationContextType } from "@/types/notification";
import { useNotification } from "@/hooks/useNotification";

const NotificationsContext = createContext<NotificationContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<AppProviderProps> = ({ children }) => {

    const {
        notification,
        setNotification,
        errors,
        setErrors,
        open,
        setOpen,
    } = useNotification()

    return (
        <NotificationsContext.Provider value={{
            notification,
            setNotification,
            errors,
            setErrors,
            open,
            setOpen
        }}>
            {children}
        </NotificationsContext.Provider>
    );
};

export const useAppPlot = (): NotificationContextType => {
    const context = useContext(NotificationsContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};