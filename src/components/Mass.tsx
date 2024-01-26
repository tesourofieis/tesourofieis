import { addDays, format, subDays } from "date-fns";

import type { ProperDay } from "../lib/utils";
import { yyyyMMDD } from "../lib/utils";
import { Suspense, useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { Calendar } from "../lib/calendar";

export default function Mass() {
  const [date, setDate] = useState<string>(yyyyMMDD(new Date()));

  const [calendar, setCalendar] = useState<Calendar["serialize"]>();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const [proper, setProper] = useState<ProperDay>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/missal/dia/${date}.json`);
        const result = await response.json();
        setCalendar(result.calendar);
        setProper(result.proper);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [date]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        {calendar && (
          <div
            className={`${isSidebarCollapsed ? "w-0" : "w-48"} h-full fixed left-0 top-16 overflow-y-auto transition-all duration-300 not-content`}
          >
            <button
              type="button"
              className={`fixed ${isSidebarCollapsed ? "left-0" : "left-48"} top-1/2 transition-all duration-300`}
              onClick={toggleSidebar}
            >
              {isSidebarCollapsed ? "»" : "«"}
            </button>
            {Object.entries(calendar).map(([calendarDate, celebrations]) => (
              <button
                className="flex flex-col w-full border-b my-1 cursor-pointer"
                type="button"
                onClick={() => setDate(calendarDate)}
              >
                <p className="font-display text-left">
                  {celebrations.celebration[0]?.title ||
                    celebrations.tempora[0]?.title ||
                    celebrations.commemoration[0]?.title ||
                    "Feria"}
                </p>
                <em className="text-xs text-gray-500 text-left">
                  {celebrations.commemoration[0]?.title}
                </em>
                <caption className="font-sm font-mono">{calendarDate}</caption>
              </button>
            ))}
          </div>
        )}
        {proper && (
          <div className="relative left-48">
            {proper.sections
              .filter((_, idx) => idx > 2)
              .map((section) => (
                <div key={section.id}>
                  <h2 id={section.id.toLowerCase()}>{section.id}</h2>
                  <div className="grid grid-cols-2 gap-5">
                    <span className="prose">
                      {section.body.latin.map((text) => (
                        <p key={`latin-${section.id}`} className="text-justify">
                          {text}
                        </p>
                      ))}
                    </span>
                    <span className="prose">
                      {section.body.vernacular.map((text) => (
                        <p
                          key={`vernacular-${section.id}`}
                          className="text-justify"
                        >
                          {text}
                        </p>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}
