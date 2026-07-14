import HeaderSection from "@/components/detailPlots/headerSection";
import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";
import HistoryActivities from "@/components/detailPlots/historyActivities";
import SectionWeather from "@/components/detailPlots/sectionWeather";
import TipeCrop from "@/components/detailPlots/tipeCrop";
import HomeworkPending from "@/components/detailPlots/homeworkPending";
import ButtonIA from "@/components/buttonIA";

export default function Plots() {
    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] h-screen overflow-y-auto relative">
                <TopBar />
                <div className="pt-24 px-8 pb-12 max-w-7xl mx-auto space-y-stack-md">
                    <HeaderSection />
                    <div className="grid grid-cols-12 gap-y-10 gap-x-2">
                        <div className="col-span-12 lg:col-span-7 py-4">
                            <TipeCrop />
                            <HistoryActivities />
                        </div>
                        <div className="col-span-12 lg:col-span-5 py-4">
                            <SectionWeather />
                            <HomeworkPending />
                        </div>
                    </div>
                </div>
                <ButtonIA />
            </main>
        </>
    )
}