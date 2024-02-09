import type { ProperDay } from "../lib/utils";
import { yyyyMMDD } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "../lib/calendar";
import { VISIBLE_SECTIONS } from "../lib/constants";
import Loading from "./Loading";
import { Icon } from "@iconify-icon/react";

export default function Mass() {
  const today = yyyyMMDD(new Date());
  const [date, setDate] = useState<string>(yyyyMMDD(new Date()));
  const [error, setError] = useState<boolean>(false);
  const calendarRef = useRef(null);

  const [calendar, setCalendar] = useState<Calendar["serialize"]>();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

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
        setError(true);
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

  if (error)
    return (
      <div>
        <p>Ocorreu um erro ao gerar os próprios, procure no Missal</p>
        <a href="/missal">Ir para o Missal</a>
      </div>
    );

  if (!calendar)
    return (
      <div className="mt-2 flex flex-col justify-center items-center">
        <p> A gerar...</p>
        <Loading />
      </div>
    );

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
      {proper && (
        <div
          className={`not-content mr-${isSidebarCollapsed ? "0" : "48"} transition-all duration-300`}
        >
          {proper.sections
            .filter(({ id }) => VISIBLE_SECTIONS.includes(id))
            .map((section) => (
              <div key={section?.id}>
                <h2
                  className="text-center text-sepia-500"
                  id={section?.id.toLowerCase()}
                >
                  {section?.id}
                </h2>
                <div className="grid grid-cols-2 gap-5">
                  <span className="">
                    {section?.body?.latin?.map((text, i) => (
                      <p
                        key={`latin-${section.id}-${i}`}
                        className="text-justify my-2"
                      >
                        {text}
                      </p>
                    ))}
                  </span>
                  <span className="">
                    {section?.body?.vernacular?.map((text, i) => (
                      <p
                        key={`vernacular-${section.id}-${i}`}
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
    </>
  );
}
