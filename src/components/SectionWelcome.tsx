import { RiRobot2Fill } from "react-icons/ri";
import { MdAssignment, MdOutlineTipsAndUpdates, MdThermostat } from "react-icons/md";
import { CiCloudOn, CiWarning } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";
import { PiPottedPlantDuotone } from "react-icons/pi";

export default function SectionWelcome() {
    return (
        <>
            <section className="grid grid-cols-1 gap-6">
                <div className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
                    <div className="flex-1 space-y-4 z-10">
                        <div>
                            <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Buenos días, David 🌿</h2>
                            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">El sistema está
                                optimizado. Hoy es un gran día para monitorear el crecimiento del sector norte.</p>
                        </div>
                        <div className="glass-card bg-primary/5 border-primary/20 p-4 flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: "'FILL' 1" }}><RiRobot2Fill /></span>
                            <div>
                                <p className="font-label-sm text-label-sm text-primary uppercase mb-1">IA Recomendación</p>
                                <p className="font-body-md text-body-md text-on-surface">Mañana será un excelente día para
                                    regar el maíz debido a que la probabilidad de lluvia será inferior al 10%.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto min-w-[320px]">
                        <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
                            <span
                                className="material-symbols-outlined text-primary-container mb-2 text-3xl"><MdThermostat /></span>
                            <p className="text-2xl font-bold">24°C</p>
                            <p className="text-xs text-on-surface-variant">Temp. Actual</p>
                        </div>
                        <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
                            <span className="material-symbols-outlined text-primary-container mb-2 text-3xl"><CiCloudOn /></span>
                            <p className="text-2xl font-bold">Despejado</p>
                            <p className="text-xs text-on-surface-variant">Estado</p>
                        </div>
                        <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
                            <span
                                className="material-symbols-outlined text-primary-container mb-2 text-3xl"><WiHumidity /></span>
                            <p className="text-2xl font-bold">62%</p>
                            <p className="text-xs text-on-surface-variant">Humedad</p>
                        </div>
                        <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
                            <span className="material-symbols-outlined text-primary-container mb-2 text-3xl"><IoRainyOutline /></span>
                            <p className="text-2xl font-bold">8%</p>
                            <p className="text-xs text-on-surface-variant">Prob. Lluvia</p>
                        </div>
                    </div>

                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><PiPottedPlantDuotone /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">12</p>
                        <p className="text-sm text-on-surface-variant">Cultivos activos</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-2xl bg-secondary-container/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined"><MdAssignment /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">5</p>
                        <p className="text-sm text-on-surface-variant">Tareas pendientes</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-2xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined"><MdOutlineTipsAndUpdates /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">3</p>
                        <p className="text-sm text-on-surface-variant">Recomendaciones</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error">
                        <span className="material-symbols-outlined"><CiWarning /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">0</p>
                        <p className="text-sm text-on-surface-variant">Alertas climáticas</p>
                    </div>
                </div>
            </section>
        </>
    )
}