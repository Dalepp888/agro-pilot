"use client"
import { createTask } from "@/actions/task";
import { useAppTask } from "@/context/taskContext";
import { usePlotsList } from "@/hooks/usePlotsList";
import { FaCalendar, FaMap } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdExpandMore, MdModeEdit, MdNotes } from "react-icons/md";

export default function TaskForm() {

    const { setOpen, task, setTask, errors, setErrors } = useAppTask()
    const { plots } = usePlotsList();

    const selectedPlot = plots.find(
        (plot) => plot.id === task.plotId
    );

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = await createTask(task);

        if (!result.success) {
            setErrors(result.errors ?? {});
            return;
        }

        console.log("Tarea creada correctamente");

        setOpen(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/40 backdrop-blur-xl">
                <div className="glass-modal w-full max-w-5xl rounded-24 overflow-hidden top-light-glow flex flex-col max-h-[921px]">
                    <div className="p-8 custom-scrollbar overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className="flex flex-col space-y-6">
                                <header>
                                    <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Nueva Tarea</h1>
                                    <p className="text-on-surface-variant font-body-md mt-1">Configure los parámetros de la
                                        operación agrícola.</p>
                                </header>

                                <div className="space-y-2">
                                    <label
                                        className="text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]"><MdModeEdit /></span> Nombre de la tarea
                                    </label>
                                    <input
                                        value={task.title}
                                        onChange={(e) =>
                                            setTask({
                                                ...task,
                                                title: e.target.value
                                            })
                                        }
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.title
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="Ej: Fertilización Sector Norte" type="text" />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]"><MdNotes /></span> Descripción
                                    </label>
                                    <textarea
                                        value={task.description}
                                        onChange={(e) =>
                                            setTask({
                                                ...task,
                                                description: e.target.value
                                            })
                                        }
                                        className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.description
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-outline-variant/30 focus:border-primary/50"
                                            }`}
                                        placeholder="Detalles específicos de la misión..." rows={3}></textarea>
                                    <div className="space-y-2">
                                        <label
                                            className="text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]"><FaCalendar /></span> Fecha
                                        </label>
                                        <input
                                            value={task.dueDate}
                                            onChange={(e) =>
                                                setTask({
                                                    ...task,
                                                    dueDate: e.target.value
                                                })
                                            }
                                            className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.dueDate
                                                    ? "border-red-500 focus:border-red-500"
                                                    : "border-outline-variant/30 focus:border-primary/50"
                                                }`}
                                            type="date" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-6">
                                <div className="space-y-2">
                                    <label
                                        className="text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]"><FaMap /></span> Parcela Destino
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={task.plotId}
                                            onChange={(e) =>
                                                setTask({
                                                    ...task,
                                                    plotId: e.target.value,
                                                })
                                            }
                                            className={`bg-black/30 border backdrop-blur-md text-on-surface w-full pl-12 pr-4 py-3.5 rounded-2xl
                                          ${errors.plotId
                                                    ? "border-red-500 focus:border-red-500"
                                                    : "border-outline-variant/30 focus:border-primary/50"
                                                }`}
                                        >
                                            <option value="">
                                                Selecciona una parcela
                                            </option>

                                            {plots.map((plot) => (
                                                <option key={plot.id} value={plot.id}>
                                                    {plot.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <span className="material-symbols-outlined"><MdExpandMore /></span>
                                        </div>
                                    </div>
                                </div>

                                {selectedPlot && (
                                    <div
                                        key={selectedPlot.id}
                                        className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5 flex flex-col space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10">
                                                    <div className="w-full h-full bg-cover bg-center"
                                                        data-alt="A macro close-up of healthy vibrant green corn leaves in a precision-farmed field. The lighting is crisp and detailed, showing the texture and dew on the foliage. The image style is professional agricultural photography with a modern tech-integrated feel, using soft emerald and deep greens to align with the AgroPilot brand identity."
                                                        style={{
                                                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJhuiJFSGnibiqIzP0XO8xaY4406c_ZqrMxK0dpum2I_DXHiw5IvJklTenu72IsdkFC_HcmFWpLwsfceleOl06EHusWyRGfT-m-xJ_HP0QwHflTL6-ATCL__Xa0Ch9ee78E8iau1DNqUWsHLteQuBe18fmrG7c1BTerv2SDU-Clh3L936diN4Y-ymmY1SWsPfiM4Qf7VcvtsiD3uwAUXPQR4mIVXa2SnEyzQBtdkeAXOAzR_Ix95SL")`,
                                                        }}>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-headline-md text-[18px] text-on-surface leading-tight">
                                                        {selectedPlot.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-primary/50"><IoLocationOutline /></span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-y-3 pt-2 border-t border-white/5">
                                            <div>
                                                <p className="text-label-sm text-on-surface-variant uppercase">Cultivo</p>
                                                <p className="text-body-md text-on-surface">
                                                    {selectedPlot.cropName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-label-sm text-on-surface-variant uppercase">Variedad</p>
                                                <p className="text-body-md text-on-surface">
                                                    {selectedPlot.variety || "No especificada"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <footer className="p-8 pt-4 border-t border-white/5 flex items-center justify-end gap-4">
                        <button
                            className="px-6 py-3 rounded-xl text-on-surface hover:bg-white/5 transition-all duration-200 font-medium active:scale-95"
                            onClick={() => setOpen(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-primary-container text-on-primary-container font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center gap-2">
                            Guardar tarea
                        </button>
                    </footer>
                </div>
            </div>
        </form>
    )
}