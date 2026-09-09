"use client"

import "react-day-picker/style.css";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import { es } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { addMonths, subMonths, format } from "date-fns";
import DayTasksModal, { type DayTask } from "./dayTasksModal";

interface CalendarProps {
    taskDates?: Date[];
    tasksByDate?: Record<string, DayTask[]>;
}

function DayButton({ day, modifiers, ...buttonProps }: DayButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (modifiers.focused) {
            ref.current?.focus();
        }
    }, [modifiers.focused]);

    return (
        <button
            ref={ref}
            {...buttonProps}
            className={`${buttonProps.className ?? ""} relative`}
        >
            {buttonProps.children}
            {modifiers.hasTask && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none"></span>
            )}
        </button>
    );
}

export default function Calendar({ taskDates = [], tasksByDate = {} }: CalendarProps) {

    const [month, setMonth] = useState(new Date());
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const [modalDate, setModalDate] = useState<Date | null>(null);
    const [modalAnchor, setModalAnchor] = useState<{ top: number; left: number } | null>(null);

    function handleSelect(date: Date | undefined, _triggerDate: Date, _modifiers: unknown, e: React.MouseEvent | React.KeyboardEvent) {
        if (!date || !e.currentTarget) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const popoverHalf = 144;
        const left = Math.min(
            Math.max(rect.left + rect.width / 2, popoverHalf + 8),
            window.innerWidth - popoverHalf - 8
        );
        const top = Math.min(rect.bottom + 8, window.innerHeight - 240);

        setSelected(date);
        setModalDate(date);
        setModalAnchor({ top, left });
    }

    function closeModal() {
        setModalDate(null);
        setModalAnchor(null);
    }

    return (
        <div className="calendar-agropilot">

            <div className="calendar-header">

                <button
                    type="button"
                    onClick={() => setMonth(subMonths(month, 1))}
                    className="calendar-nav-button"
                >
                    <MdChevronLeft />
                </button>

                <h2>
                    {format(month, "MMMM yyyy", { locale: es })}
                </h2>

                <button
                    type="button"
                    onClick={() => setMonth(addMonths(month, 1))}
                    className="calendar-nav-button"
                >
                    <MdChevronRight />
                </button>

            </div>

            <DayPicker
                mode="single"
                month={month}
                onMonthChange={setMonth}
                locale={es}
                weekStartsOn={1}
                showOutsideDays
                hideNavigation
                className="agropilot-daypicker"
                selected={selected}
                onSelect={handleSelect}
                modifiers={{ hasTask: taskDates }}
                components={{ DayButton }}
            />

            {modalDate && modalAnchor && (
                <DayTasksModal
                    open
                    date={modalDate}
                    anchor={modalAnchor}
                    tasks={tasksByDate[`${modalDate.getFullYear()}-${String(modalDate.getMonth() + 1).padStart(2, "0")}-${String(modalDate.getDate()).padStart(2, "0")}`] ?? []}
                    onClose={closeModal}
                />
            )}

        </div>
    );
}