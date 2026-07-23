"use client";

import { usePathname } from "next/navigation";
import { MdAgriculture } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";

const navItems = [
  { icon: MdDashboard, label: "Dashboard", href: "/" },
  { icon: CiMap, label: "Plots", href: "/plots" },
  { icon: FaCalendar, label: "Calendar", href: "/calendary" },
  { icon: RiRobot2Fill, label: "AI Assistant", href: "/IA" },
  { icon: TiWeatherCloudy, label: "Weather", href: "/weather" },
];

export default function SideNavBar() {
  const pathname = usePathname();

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
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.href}
              className={`flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                isActive
                  ? "text-primary bg-primary/10 border-l-4 border-primary scale-[0.99]"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20"
              }`}
              href={item.href}
            >
              <item.icon />
              <span className="font-body-md text-body-md">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  )
}