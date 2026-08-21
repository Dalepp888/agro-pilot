"use client"

import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { addMonths, subMonths, format } from "date-fns";

export default function Calendar() {

    const [month, setMonth] = useState(new Date());

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
            />

        </div>
    );
}