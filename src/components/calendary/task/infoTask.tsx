export default function InfoTask() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-[#34D399]"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Pendientes</p>
                    <p className="font-headline-md text-headline-md text-on-surface">12</p>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Para hoy</p>
                    <p className="font-headline-md text-headline-md text-on-surface">5</p>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-surface-variant border border-white/20"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Completadas</p>
                    <p className="font-headline-md text-headline-md text-on-surface">34</p>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-16 h-16 bg-error/10 blur-xl rounded-full"></div>
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-error"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Vencidas</p>
                    <p className="font-headline-md text-headline-md text-error">2</p>
                </div>
            </div>
        </div>
    )
}