export default function TipeCrop() {
    return (
        <section className="glass-card rounded-[32px] p-8 relative overflow-hidden group">
            <div className="relative z-10">
                <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Tipo de cultivo</p>
                        <h3 className="text-headline-md font-headline-md text-on-surface">Maíz</h3>
                        <p className="text-primary/80 text-body-md font-body-md">Híbrido DK-7088</p>
                    </div>
                    <div className="text-right lg:text-left">
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Estado</p>
                        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            <span className="text-secondary text-label-sm font-label-sm font-bold">En
                                crecimiento</span>
                        </div>
                    </div>
                    <div>
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Sembrado</p>
                        <p className="text-body-lg font-body-lg text-on-surface">12 Mar 2024</p>
                    </div>
                    <div className="text-right lg:text-left">
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Cosecha est.</p>
                        <p className="text-body-lg font-body-lg text-on-surface">15 Jun 2024</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-end">
                        <p className="text-body-md font-body-md text-on-surface">Progreso del Ciclo</p>
                        <p className="text-headline-md font-headline-md text-primary">45%</p>
                    </div>
                    <div
                        className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                        <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full transition-all duration-1000"
                            style={{ width: "45%" }}></div>
                    </div>
                    <p className="text-caption font-caption text-on-surface-variant/70 italic">"45% de
                        crecimiento estimado basado en sensores de biomasa"</p>
                </div>
            </div>
        </section>
    )
}