import SideNavBar from "@/components/sideNavBar";
import TopBar from "@/components/topBar";
import DayForecast from "@/components/weather/dayForecast";
import ForecastHour from "@/components/weather/forecastHour";
import HeroWeather from "@/components/weather/heroWeather";
import WelcomeWeather from "@/components/weather/welcomeWeather";

export default function Weather() {
    return (
        <>
            <SideNavBar />
            <main className="flex-1 ml-[280px] p-5 h-screen overflow-y-auto relative">
                <TopBar />
                <WelcomeWeather />
                <div className="grid gap-y-10 gap-x-2 p-4">
                    <div className="col-span-12 w-[70vw] m-auto lg:col-span-7 py-4">
                        <HeroWeather />
                        <ForecastHour />
                        <DayForecast />
                    </div>
                </div>
        </main >
        </>
    )
}