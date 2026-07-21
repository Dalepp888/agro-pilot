import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationOutline, IoSendSharp } from "react-icons/io5";
import { MdOutlinePsychology } from "react-icons/md";

export default function TextIA() {
    return (
        <>
            <div className="flex justify-center ">
                <div
                    className="glass-card px-4 py-2 rounded-xl flex items-center gap-4 border-primary/20 bg-primary/5 shadow-lg shadow-primary/5">
                    <div className="flex items-center gap-2 text-label-sm font-bold text-primary">
                        <span className="material-symbols-outlined text-[18px]"><IoLocationOutline /></span>
                        Parcela Norte
                    </div>
                    <div className="h-4 w-px bg-outline-variant/30"></div>
                    <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]"><MdOutlinePsychology /></span>
                        Maíz
                    </div>
                    <div className="h-4 w-px bg-outline-variant/30"></div>
                    <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]"><FaCalendarAlt /></span>
                        Día 18
                    </div>
                    <button
                        className="ml-4 text-[10px] uppercase font-bold text-primary tracking-widest hover:underline">Cambiar</button>
                </div>
            </div>

            <div className="relative group">
                <input
                    className="w-full h-16 bg-black/30 border border-outline-variant/30 rounded-2xl px-6 pr-16 text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-on-surface-variant/50 backdrop-blur-md"
                    placeholder="Escribe tu pregunta..." type="text" />
                <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20">
                    <IoSendSharp />
                </button>
            </div>
        </>
    )
}