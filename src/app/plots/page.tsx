import SectionPlots from "@/components/plots/sectionPlots";
import WelcomePlots from "@/components/plots/welcomePlots";
import SideNavBar from "@/components/UI/sideNavBar";
import TopBar from "@/components/UI/topBar";

export default function Plots() {
    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-0 lg:ml-[280px] min-h-screen relative overflow-hidden">
                <div className="p-4 sm:p-6 max-w-7xl mx-auto">
                    <TopBar />
                    <div className="relative pt-24 px-8 pb-12">
                        <WelcomePlots />
                        <SectionPlots />
                    </div>
                </div>
            </main>
        </>
    )
}