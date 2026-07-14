export default function HistoryActivities() {
    return (
        <section className="glass-card rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-headline-md font-headline-md text-on-surface">Historial de Actividad</h3>
                <button className="text-primary text-label-sm font-label-sm hover:underline">Ver todo</button>
            </div>
            <div className="space-y-8 relative">
                
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>
                
                <div className="flex gap-6 relative group">
                    <div
                        className="w-6 h-6 rounded-full bg-primary border-4 border-[#0b1210] z-10 mt-1 transition-transform group-hover:scale-125">
                    </div>
                    <div className="flex-1 pb-2 border-b border-white/5">
                        <div className="flex justify-between items-start">
                            <h4 className="text-body-lg font-body-lg text-on-surface font-semibold">Limpieza de
                                maleza sector sur</h4>
                            <span className="text-caption font-caption text-on-surface-variant/50">25 Mar,
                                16:00</span>
                        </div>
                        <p className="text-body-md font-body-md text-on-surface-variant mt-1">Se completó la
                            remoción manual de brotes invasivos en el cuadrante S-4.</p>
                    </div>
                </div>
                <div className="flex gap-6 relative group">
                    <div
                        className="w-6 h-6 rounded-full bg-white/20 border-4 border-[#0b1210] z-10 mt-1 transition-transform group-hover:scale-125">
                    </div>
                    <div className="flex-1 pb-2 border-b border-white/5">
                        <div className="flex justify-between items-start">
                            <h4 className="text-body-lg font-body-lg text-on-surface font-semibold">Aplicación
                                de fertilizante NPK</h4>
                            <span className="text-caption font-caption text-on-surface-variant/50">18 Mar,
                                10:30</span>
                        </div>
                        <p className="text-body-md font-body-md text-on-surface-variant mt-1">Refuerzo de
                            nitrógeno aplicado vía goteo de precisión.</p>
                    </div>
                </div>
                <div className="flex gap-6 relative group">
                    <div
                        className="w-6 h-6 rounded-full bg-white/20 border-4 border-[#0b1210] z-10 mt-1 transition-transform group-hover:scale-125">
                    </div>
                    <div className="flex-1 pb-2 border-b border-white/5">
                        <div className="flex justify-between items-start">
                            <h4 className="text-body-lg font-body-lg text-on-surface font-semibold">Primer riego
                                automatizado</h4>
                            <span className="text-caption font-caption text-on-surface-variant/50">13 Mar,
                                06:00</span>
                        </div>
                        <p className="text-body-md font-body-md text-on-surface-variant mt-1">Humedad de suelo
                            ajustada a 65%. Duración: 45min.</p>
                    </div>
                </div>
                <div className="flex gap-6 relative group">
                    <div
                        className="w-6 h-6 rounded-full bg-white/20 border-4 border-[#0b1210] z-10 mt-1 transition-transform group-hover:scale-125">
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="text-body-lg font-body-lg text-on-surface font-semibold">Se sembró el
                                cultivo</h4>
                            <span className="text-caption font-caption text-on-surface-variant/50">12 Mar,
                                08:00</span>
                        </div>
                        <p className="text-body-md font-body-md text-on-surface-variant mt-1">Lanzamiento
                            inicial de semillas híbridas DK-7088.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}