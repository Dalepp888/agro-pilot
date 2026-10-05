"use client"

import { createContext, useContext, ReactNode } from "react"
import { MessageContextType } from "@/types/message";
import { useMessage } from "@/hooks/useMessage";

const MessageContext = createContext<MessageContextType | null>(null);

interface MessageProviderProps {
    children: ReactNode;
    conversationId: string;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children, conversationId }) => {

    const {
        message,
        setMessage,
        errors,
        setErrors,
        loading,
        handleSubmit
    } = useMessage(conversationId)

    return (
        <MessageContext.Provider value={{
            conversationId,
            message,
            setMessage,
            errors,
            setErrors,
            loading,
            handleSubmit
        }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useAppMessage = (): MessageContextType => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};