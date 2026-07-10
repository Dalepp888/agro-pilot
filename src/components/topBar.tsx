import { IoIosNotificationsOutline } from "react-icons/io";

export default function TopBar() {
    return (
        <header
            className="h-16 p-5 flex justify-between items-center px-gutter bg-transparent backdrop-blur-md border-b border-outline-variant/10 sticky top-0 z-40">
            <div className="flex items-center gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">Sector
                    B-4</span>
                <span
                    className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(90,240,179,0.8)]"></span>
            </div>
            <div className="flex items-center gap-6">
                <button className="text-on-surface-variant hover:bg-white/5 rounded-full p-2 transition-colors relative">
                    <span className="material-symbols-outlined"><IoIosNotificationsOutline /></span>
                    <span
                        className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
                    <div className="text-right">
                        <p className="font-body-md text-body-md font-semibold text-on-surface">David Ortega</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Premium Plan</p>
                    </div>
                    <img className="w-10 h-10 rounded-full border border-primary/30 object-cover"
                        data-alt="A high-quality, professional headshot of a modern farmer in his 40s, with subtle digital elements like a transparent data overlay reflecting in his glasses. The lighting is soft and natural, with a background showing a blurred, high-tech organic greenhouse environment in deep greens and dark tones, matching the AgroPilot brand identity."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQRlAfaZfz1Ry0wdRq_F3JHhjOJHbHysWHmZV4XOMJ1RhbuPovqcAQ7N2e_dUTRmGXkJgKRgC7onwKzFUheeeY3ywI7yVZ5oAPKsfWiqmtfQfJwwFW0D_Dt_L57i6YIDfWNIF_6JCVqIKaDKagRTsHyzty8uuIWpwO-Wk_5yo0Q1KLsyJpF6_BU1ztYhpLBB7yxvxhGYBcbT3Z-WuC3iD2XyLCflvMbGa5Dsd7IYvfJKOMxWcDwasF" />
                </div>
            </div>
        </header>
    )
}