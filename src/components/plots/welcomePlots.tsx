import { IoMdAdd } from "react-icons/io";

export default function WelcomePlots() {
    return (
        <div className="flex justify-between items-end mb-10">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🌾</span>
                    <h2 className="text-5xl font-bold text-on-surface">Parcelas</h2>
                </div>
                <p className="font-body-lg text-body-lg text-xl text-on-surface-variant max-w-2xl">Administra todas las parcelas
                    de tu finca y consulta rápidamente el estado de cada una.</p>
            </div>
            <button
                className="bg-primary hover:bg-primary-container text-on-primary-container px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-primary/20">
                <IoMdAdd />
                Nueva Parcela
            </button>
        </div>
    )
}