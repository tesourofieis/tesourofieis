import { useEffect, useRef } from "react";
import type { Calendar } from "../lib/calendar";

import { Icon } from "@iconify-icon/react";
import { yyyyMMDD } from "../lib/utils";

export const SideCalendar = ({
  calendar,
  isSidebarCollapsed,
  toggleSidebar,
  date,
  setDate,
}: {
  calendar: Calendar["serialize"];
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  date: string;
  setDate: (date: string) => void;
}) => {
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

  function getColor(color: string) {
    switch (color) {
      case "w":
        return "bg-gray-500";
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

  return (
    <>
      {calendar && (
        <>
          {Object.entries(calendar).map(([calendarDate, celebrations]) => (
            <>
              {calendarDate === date && (
                <div
                  className={`not-content ml-${isSidebarCollapsed ? "0" : "48"}`}
                >
                  <h1 className="text-center">
                    {celebrations.celebration[0]?.title ||
                      celebrations.tempora[0]?.title ||
                      celebrations.commemoration[0]?.title ||
                      "Feria"}
                  </h1>
                  <p>{celebrations.commemoration[0]?.title}</p>
                </div>
              )}
            </>
          ))}
          <div
            ref={calendarRef}
            className={`${isSidebarCollapsed ? "w-0" : "w-48"} border-4 border-sepia-200 dark:border-sepia-700 text-sm h-full divide-y divide-sepia-200 dark:divide-sepia-700 fixed left-0 top-10 overflow-y-auto not-content`}
          >
            <button
              type="button"
              className={`fixed flex bg-sepia-300 dark:bg-sepia-600 items-center justify-center h-16 w-8 ${isSidebarCollapsed ? "left-0" : "left-48"} top-1/2 translate-y-9`}
              onClick={toggleSidebar}
            >
              {isSidebarCollapsed ? (
                <Icon icon="heroicons:chevron-right" className="text-xl" />
              ) : (
                <Icon icon="heroicons:chevron-left" className="text-xl" />
              )}
            </button>
            {Object.entries(calendar).map(([calendarDate, celebrations]) => (
              <button
                className={`flex flex-col w-full cursor-pointer bg-sepia-100 dark:bg-sepia-800 ${calendarDate === date && "bg-sepia-300 dark:bg-sepia-400"} ${calendarDate === today && "bg-sepia-200 dark:bg-sepia-500"}`}
                type="button"
                onClick={() => setDate(calendarDate)}
                data-date={calendarDate}
              >
                <p className="font-display text-left">
                  {celebrations.celebration[0]?.title ||
                    celebrations.tempora[0]?.title ||
                    celebrations.commemoration[0]?.title ||
                    "Feria"}
                </p>
                <em className="text-xs text-left">
                  {celebrations.commemoration[0]?.title}
                </em>
                <div className="flex items-center gap-2 font-sm justify-end">
                  <div
                    className={`h-2 w-2 rounded-full ${getColor(
                      celebrations.celebration[0]?.colors[0] ||
                        celebrations.commemoration[0]?.colors[0] ||
                        celebrations.tempora[0]?.colors[0],
                    )} text-left`}
                  />
                  {calendarDate}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};
