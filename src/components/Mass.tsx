import type { ProperDay } from "../lib/utils";
import { yyyyMMDD } from "../lib/utils";
import { Suspense, useEffect, useRef, useState } from "react";
import { Calendar } from "../lib/calendar";

export default function Mass() {
  const [date, setDate] = useState<string>(yyyyMMDD(new Date()));
  const calendarRef = useRef(null);

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

  useEffect(() => {
    // Scroll to the selected date when it changes
    if (date && calendarRef.current) {
      const selectedButton = calendarRef.current.querySelector(
        `[data-date="${date}"]`,
      );
      if (selectedButton) {
        selectedButton.scrollIntoView();
        setIsSidebarCollapsed(true);
      }
    }
  }, [date, calendar]);

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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        {calendar && (
          <>
            {Object.entries(calendar).map(([calendarDate, celebrations]) => (
              <>
                {calendarDate === date && (
                  <div
                    className={`not-content ml-${isSidebarCollapsed ? "0" : "48"} transition-all duration-300`}
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
              className={`${isSidebarCollapsed ? "w-0" : "w-48"} bg-zinc-100 dark:bg-zinc-900 text-sm h-full divide-y fixed left-0 top-10 overflow-y-auto transition-all duration-300 not-content`}
            >
              <button
                type="button"
                className={`fixed h-11 w-5 ${isSidebarCollapsed ? "left-0" : "left-48"} top-1/2 transition-all duration-300`}
                onClick={toggleSidebar}
              >
                {isSidebarCollapsed ? "»" : "«"}
              </button>
              {Object.entries(calendar).map(([calendarDate, celebrations]) => (
                <button
                  className={`flex flex-col w-full cursor-pointer bg-zinc-100 dark:bg-zinc-900 ${calendarDate === date && "bg-zinc-200 dark:bg-zinc-800"}`}
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
                  <caption className="flex items-center gap-2 font-sm">
                    <div
                      className={`h-2 w-2 rounded-full ${getColor(
                        celebrations.celebration[0]?.colors[0] ||
                          celebrations.commemoration[0]?.colors[0] ||
                          celebrations.tempora[0]?.colors[0],
                      )}`}
                    />
                    {calendarDate}
                  </caption>
                  <div className="divide-y-2 h-full divide-green-500" />
                </button>
              ))}
            </div>
          </>
        )}
        {proper && (
          <div
            className={`not-content ml-${isSidebarCollapsed ? "0" : "48"} transition-all duration-300`}
          >
            {proper.sections
              .filter((_, idx) => idx > 2)
              .map((section) => (
                <div key={section.id}>
                  <h2
                    className="text-center text-red-500"
                    id={section.id.toLowerCase()}
                  >
                    {section.id}
                  </h2>
                  <div className="grid grid-cols-2 gap-5">
                    <span className="">
                      {section.body.latin.map((text) => (
                        <p
                          key={`latin-${section.id}`}
                          className="text-justify my-2"
                        >
                          {text}
                        </p>
                      ))}
                    </span>
                    <span className="">
                      {section.body.vernacular.map((text) => (
                        <p
                          key={`vernacular-${section.id}`}
                          className="text-justify my-2"
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
