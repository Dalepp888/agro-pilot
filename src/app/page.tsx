import AiRecomendation from "@/components/dashboard/aiRecomendation";
import ButtonAdd from "@/components/dashboard/buttonAdd";
import CalendaryActivities from "@/components/dashboard/calendaryActivities";
import SectionWelcome from "@/components/dashboard/sectionWelcome";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";
import Week from "@/components/dashboard/week";

export default function Home() {
  return (
    <>
      <SideNavBar />
      <main className="flex-1 ml-[280px] min-h-screen relative overflow-hidden">
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
          <TopBar />
          <SectionWelcome />
          <Week />
          <AiRecomendation />
          <CalendaryActivities />
        </div>
        <ButtonAdd />
      </main>
    </>
  );
}
