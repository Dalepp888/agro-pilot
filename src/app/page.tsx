import { getNotifications } from "@/actions/notifications";
import { getPlots } from "@/actions/plot";
import { getTask } from "@/actions/task";
import AiRecomendation from "@/components/dashboard/aiRecomendation";
import ButtonAdd from "@/components/dashboard/buttonAdd";
import CalendaryActivities from "@/components/dashboard/calendaryActivities";
import SectionWelcome from "@/components/dashboard/sectionWelcome";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";

export default async function Home() {
  const plots = await getPlots();
  const tasks = await getTask();
  const notifications = await getNotifications();

  return (
    <>
      <SideNavBar />
      <main className="flex-1 ml-0 lg:ml-[280px] min-h-screen relative overflow-hidden">
        <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto">
          <TopBar />
          <SectionWelcome plots={plots} tasks={tasks} notifications={notifications} />
          <AiRecomendation notifications={notifications} />
          <CalendaryActivities tasks={tasks} />
        </div>
        <ButtonAdd />
      </main>
    </>
  );
}
