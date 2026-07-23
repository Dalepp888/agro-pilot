export default function HomeworkPending() {
    return (
        <section className="glass-card p-8">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Tareas Pendientes</h3>
            <div className="space-y-3">
                <label
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                    <input
                        className="w-5 h-5 rounded bg-transparent border-white/20 text-primary focus:ring-primary focus:ring-offset-0"
                        type="checkbox" />
                    <div className="flex-1">
                        <p
                            className="text-body-md font-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                            Riego programado</p>
                        <p className="text-caption font-caption text-on-surface-variant/60">Mañana, 06:00 AM</p>
                    </div>
                </label>
                <label
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                    <input
                        className="w-5 h-5 rounded bg-transparent border-white/20 text-primary focus:ring-primary focus:ring-offset-0"
                        type="checkbox" />
                    <div className="flex-1">
                        <p
                            className="text-body-md font-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                            Inspección de plagas</p>
                        <p className="text-caption font-caption text-on-surface-variant/60">28 de Marzo, Todo el
                            día</p>
                    </div>
                </label>
                <label
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                    <input
                        className="w-5 h-5 rounded bg-transparent border-white/20 text-primary focus:ring-primary focus:ring-offset-0"
                        type="checkbox" />
                    <div className="flex-1">
                        <p
                            className="text-body-md font-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                            Aplicación de nutrientes</p>
                        <p className="text-caption font-caption text-on-surface-variant/60">02 de Abril, 10:00
                            AM</p>
                    </div>
                </label>
            </div>
            <button
                className="w-full mt-6 py-3 text-center text-primary text-label-sm font-label-sm font-bold border border-primary/20 rounded-xl hover:bg-primary/10 transition-all">
                + Añadir tarea personalizada
            </button>
        </section>
    )
}