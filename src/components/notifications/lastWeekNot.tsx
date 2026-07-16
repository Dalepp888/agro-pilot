import { MdCloudySnowing, MdDelete } from "react-icons/md";
import { PiPottedPlantBold } from "react-icons/pi";

export default function LastWeekNot() {
    return (
        <section>
            <div className="flex items-center gap-4 mb-stack-sm">
                <h3
                    className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                    Esta semana</h3>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="space-y-4">

                <div className="glass-card opacity-70 p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-on-tertiary-fixed-variant/20 flex items-center justify-center shrink-0 border border-white/5">
                        <span
                            className="material-symbols-outlined text-on-tertiary-fixed-variant text-[28px]"><PiPottedPlantBold /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-headline-md text-[18px] text-on-surface font-medium">Ciclo de
                                Fertilización</h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Martes,
                                9:00 AM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-2">Esta semana es un buen
                            momento para fertilizar el tomate según la etapa de crecimiento actual.</p>
                        <div
                            className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]"><MdDelete /></span></button>
                        </div>
                    </div>
                </div>

                <div className="glass-card opacity-70 p-6 rounded-xl flex gap-4 group">
                    <div
                        className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 border border-white/5">
                        <span
                            className="material-symbols-outlined text-on-surface-variant text-[28px]"><MdCloudySnowing /></span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-headline-md text-[18px] text-on-surface font-medium">Pronóstico
                                Extendido</h4>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Lunes,
                                2:15 PM</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-2">Se pronostican lluvias
                            intensas para los próximos dos días. Planifique sus labores en consecuencia.</p>
                        <div
                            className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><span
                                className="material-symbols-outlined text-[20px]"><MdDelete /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}