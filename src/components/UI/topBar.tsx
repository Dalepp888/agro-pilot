"use client";

import { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import ModalNotifications from "@/components/UI/modalNotifications";
import { getRecentNotifications } from "@/actions/notifications";
import { useSideNav } from "@/context/sideNavContext";

export default function TopBar() {
    const [openNotifications, setOpenNotifications] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);
    const { open: openSideNav, setOpen: setOpenSideNav } = useSideNav();

    useEffect(() => {
        getRecentNotifications(1)
            .then((data) => setHasUnread(data.some((notification) => !notification.read)))
            .catch(() => setHasUnread(false));
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement;

            if (!target.closest("#notifications-container")) {
                setOpenNotifications(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header
            className="h-16 p-5 sm:px-gutter flex justify-between items-center bg-transparent backdrop-blur-md border-b border-outline-variant/10 sticky top-0 z-40"
        >
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setOpenSideNav(!openSideNav)}
                    aria-label={openSideNav ? "Cerrar menú" : "Abrir menú"}
                    title={openSideNav ? "Cerrar menú" : "Abrir menú"}
                    className="lg:hidden w-10 h-10 -ml-2 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-all duration-300"
                >
                    {openSideNav ? <MdClose size={22} /> : <MdMenu size={22} />}
                </button>

                <span className="hidden sm:block text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">
                    Sector B-4
                </span>

                <span
                    className="hidden sm:block w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(90,240,179,0.8)]"
                />
            </div>

            <div className="flex items-center gap-3 sm:gap-6">

                {/* Campanita + modal */}
                <div id="notifications-container" className="relative">
                    <button
                        onClick={() => setOpenNotifications((prev) => !prev)}
                        className="text-on-surface-variant hover:bg-white/5 rounded-full p-2 transition-colors relative"
                    >
                        <IoIosNotificationsOutline size={24} />

                        {hasUnread && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-background" />}
                    </button>

                    {openNotifications && <ModalNotifications />}
                </div>

                <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-outline-variant/20">
                    <div className="text-right">
                        <p className="font-body-md text-body-md font-semibold text-on-surface">
                            David Ortega
                        </p>

                        <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">
                            Premium Plan
                        </p>
                    </div>

                    <img
                        className="w-10 h-10 rounded-full border border-primary/30 object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQRlAfaZfz1Ry0wdRq_F3JHhjOJHbHysWHmZV4XOMJ1RhbuPovqcAQ7N2e_dUTRmGXkJgKRgC7onwKzFUheeeY3ywI7yVZ5oAPKsfWiqmtfQfJwwFW0D_Dt_L57i6YIDfWNIF_6JCVqIKaDKagRTsHyzty8uuIWpwO-Wk_5yo0Q1KLsyJpF6_BU1ztYhpLBB7yxvxhGYBcbT3Z-WuC3iD2XyLCflvMbGa5Dsd7IYvfJKOMxWcDwasF"
                    />
                </div>
            </div>
        </header>
    );
}