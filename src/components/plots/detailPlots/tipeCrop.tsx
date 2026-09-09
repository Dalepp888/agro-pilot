import { findUniquePlot } from "@/actions/plot";

interface HeaderSectionProps {
    plot: NonNullable<Awaited<ReturnType<typeof findUniquePlot>>>;
}

export default function TipeCrop({ plot }: HeaderSectionProps) {
    return (
        <section className="glass-card p-8 relative overflow-hidden group">
            <div className="relative z-10">
                <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Tipo de cultivo</p>
                        <h3 className="text-headline-md font-headline-md text-on-surface">{plot.cropName}</h3>
                        <p className="text-primary/80 text-body-md font-body-md">{plot.variety
                            ? plot.variety
                            : "No especificada"
                        }</p>
                    </div>
                    <div className="text-right lg:text-left">
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Estado</p>
                        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            <span className="text-secondary text-label-sm font-label-sm font-bold">{plot.status}</span>
                        </div>
                    </div>
                    <div>
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">Superficie</p>
                        <p className="text-body-lg font-body-lg text-on-surface">{plot.area
                            ? plot.area
                            : "No especificada"}</p>
                    </div>
                    <div className="text-right lg:text-left">
                        <p
                            className="text-on-surface-variant/50 text-label-sm font-label-sm uppercase tracking-wider mb-1">
                            Coordenadas</p>
                        <p className="text-body-lg font-body-lg text-on-surface">
                            Ln: {plot.longitude.toFixed(5)}
                        </p>

                        <p className="text-body-lg font-body-lg text-on-surface">
                            Lat: {plot.latitude.toFixed(5)}
                        </p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="text-body-md font-body-md text-on-surface">Observaciones</p>
                    </div>
                    <p className="text-caption font-caption text-on-surface-variant/70 italic">{plot.notes
                        ? plot.notes
                        : "No especificada"
                    }</p>
                </div>
            </div>
        </section>
    )
}