import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ControlNavigation() {
    return (
        <div className="flex items-center justify-between glass-card p-4 rounded-xl">
            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/5 rounded-full transition-all group">
                    <span
                        className="material-symbols-outlined text-on-surface-variant group-hover:text-primary"><IoIosArrowBack /></span>
                </button>
                <span className="font-bold text-headline-md px-4 min-w-[160px] text-center text-white">Julio 2026</span>
                <button className="p-2 hover:bg-white/5 rounded-full transition-all group">
                    <span
                        className="material-symbols-outlined text-on-surface-variant group-hover:text-primary"><IoIosArrowForward /></span>
                </button>
            </div>
            <div className="flex gap-2">
                <button
                    className="bg-white/10 text-on-surface px-4 py-1.5 rounded-full text-label-sm font-semibold hover:bg-white/20 transition-all border border-white/5">Todos</button>
                <button
                    className="hover:bg-white/5 text-on-surface-variant px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-transparent hover:border-white/10">🌱
                    Siembra</button>
                <button
                    className="hover:bg-white/5 text-on-surface-variant px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-transparent hover:border-white/10">💧
                    Riego</button>
                <button
                    className="hover:bg-white/5 text-on-surface-variant px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-transparent hover:border-white/10">🌾
                    Fertilización</button>
                <button
                    className="hover:bg-white/5 text-on-surface-variant px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-transparent hover:border-white/10">🚜
                    Mantenimiento</button>
                <button
                    className="hover:bg-white/5 text-on-surface-variant px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-transparent hover:border-white/10">🌽
                    Cosecha</button>
                <button
                    className="text-primary bg-primary/10 px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all border border-primary/20">🤖
                    IA</button>
            </div>
        </div>
    )
}