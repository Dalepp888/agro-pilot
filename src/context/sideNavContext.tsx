"use client"

import { createContext, useContext, ReactNode, useState } from "react"

interface SideNavContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

const SideNavContext = createContext<SideNavContextType | null>(null)

interface SideNavProviderProps {
    children: ReactNode
}

export const SideNavProvider: React.FC<SideNavProviderProps> = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <SideNavContext.Provider value={{ open, setOpen }}>
            {children}
        </SideNavContext.Provider>
    )
}

export const useSideNav = (): SideNavContextType => {
    const context = useContext(SideNavContext)

    if (!context) {
        throw new Error("useSideNav debe usarse dentro de SideNavProvider")
    }

    return context
}