import AiRecomendation from "@/components/aiRecomendation";
import ButtonAdd from "@/components/buttonAdd";
import CalendaryActivities from "@/components/calendaryActivities";
import SectionWelcome from "@/components/sectionWelcome";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";
import Week from "@/components/week";

export default function Home() {
  return (
    <>
      <SideNavBar />
      <main className="flex-1 ml-[280px] min-h-screen relative overflow-hidden">
        <div className="p-container-padding space-y-stack-lg max-w-7xl mx-auto">
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
