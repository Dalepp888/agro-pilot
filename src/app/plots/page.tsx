import SectionPlots from "@/components/plots/sectionPlots";
import WelcomePlots from "@/components/plots/welcomePlots";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";

export default function Plots() {
    return (
        <>
            <SideNavBar />
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen relative">
                <TopBar />
                <div className="relative pt-24 px-8 pb-12">
                    <WelcomePlots />
                    <SectionPlots />
                </div>
            </main>
        </>
    )
}