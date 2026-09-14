"use client"
import { useAppMessage } from "@/context/messageContext";

export default function TypingIndicator() {

    const { loading } = useAppMessage()

    if (!loading) return null;

    return (
        <div className="self-start flex flex-col gap-1">
            <div className="flex items-center gap-3 text-on-surface-variant font-label-sm px-2">
                <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full delay-300"></span>
                </div>
                La IA está analizando la información...
            </div>
        </div>
    )
}