import { getTask } from "@/actions/task";

function sameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export default async function InfoTask() {

    const task = await getTask()

    const today = new Date()

    const pendientes = task.filter((t) => !t.completed).length
    const paraHoy = task.filter((t) => !t.completed && sameDay(t.dueDate, today)).length
    const completadas = task.filter((t) => t.completed).length

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-[#34D399]"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Pendientes</p>
                    <p className="font-headline-md text-headline-md text-on-surface">{pendientes}</p>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Para hoy</p>
                    <p className="font-headline-md text-headline-md text-on-surface">{paraHoy}</p>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="w-3 h-3 rounded-full bg-surface-variant border border-white/20"></span>
                </div>
                <div>
                    <p className="font-caption text-caption text-on-surface-variant">Completadas</p>
                    <p className="font-headline-md text-headline-md text-on-surface">{completadas}</p>
                </div>
            </div>
        </div>
    )
}