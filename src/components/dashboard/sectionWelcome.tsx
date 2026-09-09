import { RiRobot2Fill } from "react-icons/ri";
import { MdAssignment, MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { PiPottedPlantDuotone } from "react-icons/pi";

interface SectionWelcomeProps {
    plots: { id: string }[];
    tasks: { id: string; completed: boolean }[];
}

export default function SectionWelcome({ plots, tasks }: SectionWelcomeProps) {
    const cultivosActivos = plots.length;
    const tareasPendientes = tasks.filter((task) => !task.completed).length;

    return (
        <>
            <section className="grid grid-cols-1 gap-6">
                <div className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
                    <div className="flex-1 space-y-4 z-10">
                        <div>
                            <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Buenos días 🌿</h2>
                        </div>
                        <div className="glass-card bg-primary/5 border-primary/20 p-4 flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: "'FILL' 1" }}><RiRobot2Fill /></span>
                            <div>
                                <p className="font-label-sm text-label-sm text-primary uppercase mb-1">IA Recomendación</p>
                                <p className="font-body-md text-body-md text-on-surface">Las recomendaciones inteligentes estarán disponibles próximamente.</p>
                            </div>
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
                        <p className="text-3xl font-bold text-white">{cultivosActivos}</p>
                        <p className="text-sm text-on-surface-variant">Cultivos activos</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-2xl bg-secondary-container/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined"><MdAssignment /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">{tareasPendientes}</p>
                        <p className="text-sm text-on-surface-variant">Tareas pendientes</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-2xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined"><MdOutlineTipsAndUpdates /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">0</p>
                        <p className="text-sm text-on-surface-variant">Recomendaciones</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error">
                        <span className="material-symbols-outlined"><CiWarning /></span>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">0</p>
                        <p className="text-sm text-on-surface-variant">Alertas climáticas</p>
                    </div>
                </div>
            </section>
        </>
    )
}