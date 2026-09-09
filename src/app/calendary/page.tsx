import { getTask } from "@/actions/task";
import Calendar from "@/components/calendary/calendar";
import TaskSection from "@/components/calendary/taskSection";
import WelcomeCalendary from "@/components/calendary/welcomeCalendary";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";
import type { DayTask } from "@/components/calendary/dayTasksModal";

export default async function Calendary() {
    const tasks = await getTask()

    const taskDates = Array.from(new Set(tasks.map((task) => {
        const d = new Date(task.dueDate);
        return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    }))).map((timestamp) => new Date(timestamp));

    const tasksByDate: Record<string, DayTask[]> = {};
    for (const task of tasks) {
        const d = new Date(task.dueDate);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        if (!tasksByDate[key]) tasksByDate[key] = [];
        tasksByDate[key].push({
            id: task.id,
            title: task.title,
            plotName: task.plot.name,
            time: d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
            completed: task.completed,
            orderMs: task.dueDate.getTime(),
        });
    }

    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 p-8 pb-10 flex flex-col gap-6 overflow-y-auto">
                        <WelcomeCalendary />
                        <Calendar taskDates={taskDates} tasksByDate={tasksByDate} />
                    </div>
                    <TaskSection tasks={tasks} />
                </div>
            </main>
        </>
    )
}