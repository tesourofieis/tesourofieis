import type { ProperDay } from "../lib/utils";
import { yyyyMMDD } from "../lib/utils";
import { useEffect, useState } from "react";
import { Calendar } from "../lib/calendar";
import { VISIBLE_SECTIONS } from "../lib/constants";
import Loading from "./Loading";
import { SideCalendar, getColor } from "./SideCalendar";

export default function Mass() {
  const [date, setDate] = useState<string>(yyyyMMDD(new Date()));
  const [error, setError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);

  const [calendar, setCalendar] = useState<Calendar["serialize"]>();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const [proper, setProper] = useState<ProperDay[]>();

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
        <SideCalendar
          calendar={calendar}
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          date={date}
          setDate={setDate}
        />
      )}
      {proper && (
        <div
          className={`not-content mr-${isSidebarCollapsed ? "0" : "48"} transition-all duration-300`}
        >
          {proper.length > 1 && (
            <div className="flex mb-4 justify-center">
              {proper.map((sections, index) => (
                <button
                  key={index}
                  className={`text-sepia-900 bg-sepia-300 m-2  ${index === activeTab ? "border-b-4 border-red-500" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {sections.info.title}
                </button>
              ))}
            </div>
          )}

          <div>
            {proper.map((sections, index) => (
              <div
                key={index}
                className={`${index === activeTab ? "" : "hidden"}`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div
                    className={`h-16 w-2 mr-5 rounded-full ${getColor(
                      sections.info.colors[0],
                    )} text-left`}
                  />
                  <h1 className="text-center">
                    {sections.info?.title || sections.info.tempora || "Feria"}
                  </h1>
                </div>
                {sections.sections
                  .filter(({ id }) => VISIBLE_SECTIONS.includes(id))
                  .map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h2
                        className="text-center text-sepia-500"
                        id={section.id.toLowerCase()}
                      >
                        {section.id}
                      </h2>
                      <div className="side-by-side not-content">
                        <span className="">
                          {section.body.latin.map((text, i) => (
                            <p
                              key={`latin-${section.id}-${i}`}
                              className="text-justify my-2"
                            >
                              {text}
                            </p>
                          ))}
                        </span>
                        <span className="">
                          {section.body.vernacular.map((text, i) => (
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}
