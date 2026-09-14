"use client"
import { useAppMessage } from "@/context/messageContext";
import { IoSendSharp } from "react-icons/io5";

export default function TextIA() {

    const {
        message,
        setMessage,
        handleSubmit,
        loading
    } = useAppMessage()

    return (
        <>
            <div className="relative group">
                <input
                    value={message.content}
                    onChange={(e) => setMessage({
                        ...message,
                        content: e.target.value
                    })}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    className="w-full h-16 bg-black/30 border border-outline-variant/30 rounded-2xl px-6 pr-16 text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-on-surface-variant/50 backdrop-blur-md"
                    placeholder="Escribe tu pregunta..."
                    type="text"
                />
                <button
                    onClick={handleSubmit}
                    disabled={loading || !message.content.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20">
                    <IoSendSharp />
                </button>
            </div>
        </>
    )
}