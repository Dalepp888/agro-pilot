import SectionWelcome from "@/components/SectionWelcome";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <SideNavBar />
      <main className="flex-1 ml-[280px] min-h-screen relative overflow-hidden">
        <div className="p-container-padding space-y-stack-lg max-w-7xl mx-auto">
          <TopBar />
          <SectionWelcome />
        </div>
      </main>
    </>
  );
}
