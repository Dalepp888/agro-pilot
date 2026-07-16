import { MdAgriculture } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { MdOutlinePsychology } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";

export default function SideNavBar() {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-low/30 backdrop-blur-3xl border-r border-outline-variant/10 flex flex-col py-gutter z-50">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            <MdAgriculture />
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary leading-tight">AgroPilot</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Organic
              Precision</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <a className="flex items-center gap-3 px-6 py-3 text-primary bg-primary/10 border-l-4 border-primary transition-all duration-300 scale-[0.99]"
          href="/">
          <MdDashboard />
          <span className="font-body-md text-body-md">Dashboard</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="#">
          <MdAgriculture />
          <span className="font-body-md text-body-md">My Farm</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="/plots">
          <CiMap />
          <span className="font-body-md text-body-md">Plots</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="#">
          <MdOutlinePsychology />
          <span className="font-body-md text-body-md">Crops</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="/calendary">
          <FaCalendar />
          <span className="font-body-md text-body-md">Calendar</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="#">
          <FaHistory />
          <span className="font-body-md text-body-md">History</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="#">
          <RiRobot2Fill />
          <span className="font-body-md text-body-md">AI Assistant</span>
        </a>
        <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
          href="/weather">
          <TiWeatherCloudy />
          <span className="font-body-md text-body-md">Weather</span>
        </a>
      </nav>
    </aside>
  )
}