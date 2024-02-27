import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify-icon/react";
import { yyyyMMDD } from "../lib/utils";
import { getYear } from "date-fns";
import { getCalendar } from "../lib/getCalendar";

export function getColor(color: string) {
  switch (color) {
    case "w":
      return "bg-white";
    case "r":
      return "bg-red-500";
    case "g":
      return "bg-green-500";
    case "v":
      return "bg-violet-500";
    case "b":
      return "bg-black";
    default:
      return "bg-gray-500";
  }
}

export const SideCalendar = ({
  isSidebarCollapsed,
  toggleSidebar,
  date,
  setDate,
}: {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  date: string;
  setDate: (date: string) => void;
}) => {
  const calendar = getCalendar(getYear(new Date()));

  const calendarRef = useRef(null);

  const today = yyyyMMDD(new Date());

  useEffect(() => {
    // Scroll to the selected date when it changes
    if (date && calendarRef.current) {
      const selectedButton = calendarRef.current.querySelector(
        `[data-date="${date}"]`,
      );
      if (selectedButton && !isSidebarCollapsed) {
        selectedButton.scrollIntoView({ block: "center" });
      }
    }
  }, [date, isSidebarCollapsed]);

  return (
    <>
      {calendar && (
        <div
          ref={calendarRef}
          className={`${isSidebarCollapsed ? "w-0" : "w-48"} text-sm h-full divide-y divide-sepia-200 dark:divide-sepia-700 fixed left-0 top-10 overflow-y-auto not-content`}
        >
          <button
            type="button"
            className={`fixed cursor-pointer flex bg-sepia-300 dark:bg-sepia-600 items-center justify-center h-16 w-8 ${isSidebarCollapsed ? "left-0" : "left-48"} top-1/2 translate-y-9`}
            onClick={toggleSidebar}
          >
            {isSidebarCollapsed ? (
              <Icon
                icon="heroicons:chevron-right"
                className="text-xl hover:text-2xl"
              />
            ) : (
              <Icon
                icon="heroicons:chevron-left"
                className="text-xl hover:text-2xl"
              />
            )}
          </button>
          {Object.entries(calendar.serialize()).map(([calendarDate, day]) => (
            <button
              key={calendarDate}
              className={`flex flex-col w-full hover:bg-sepia-200 dark:hover:bg-sepia-900
              cursor-pointer bg-sepia-100 dark:bg-sepia-800
              ${calendarDate === date && "bg-sepia-300 dark:bg-sepia-500"}
              ${calendarDate === today && "bg-sepia-200 dark:bg-sepia-400"}
            `}
              type="button"
              onClick={() => setDate(calendarDate)}
              data-date={calendarDate}
            >
              <p className="font-display text-left">
                {(day.celebration && day.celebration[0]?.title) ||
                  (day.tempora && day.tempora[0]?.title) ||
                  (day.commemoration && day.commemoration[0]?.title) ||
                  "Feria"}
              </p>
              <p className="text-xs text-left">
                {day.commemoration && day.commemoration[0]?.title}
              </p>
              <div className="flex items-center gap-2 font-sm justify-end">
                <div
                  className={`h-2 w-2 rounded-full ${getColor(
                    (day.celebration && day.celebration[0]?.colors[0]) ||
                      (day.commemoration && day.commemoration[0]?.colors[0]) ||
                      (day.tempora && day.tempora[0]?.colors[0]),
                  )} text-left`}
                />
                {calendarDate}
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};
