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
        selectedButton.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [date, calendar]);

  function getColor(color: string) {
    switch (color) {
      case "w":
        return "text-gray-500";
      case "r":
        return "text-red-500";
      case "g":
        return "text-green-500";
      case "v":
        return "text-violet-500";
      case "b":
        return "text-black";
      default:
        return "text-gray-500";
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
              className={`${isSidebarCollapsed ? "w-0" : "w-48"} text-sm h-full fixed left-0 top-10 overflow-y-auto transition-all duration-300 not-content`}
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
                  className={`flex flex-col bg-zinc-100 dark:bg-zinc-900 my-1 ${calendarDate === date && "border-zinc-100 dark:border-zinc-900 border-l-red-500 border-8"} w-full cursor-pointer ${getColor(
                    celebrations.celebration[0]?.colors[0] ||
                      celebrations.commemoration[0]?.colors[0] ||
                      celebrations.tempora[0]?.colors[0],
                  )}`}
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
                  <em className="text-xs font-sans text-left">
                    {celebrations.commemoration[0]?.title}
                  </em>
                  <caption className="font-sm font-sans">
                    {calendarDate}
                  </caption>
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
