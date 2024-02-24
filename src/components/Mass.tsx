import { yyyyMMDD, type ProperDay } from "../lib/utils";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { SideCalendar, getColor } from "./SideCalendar";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";

export default function Mass() {
  const [date, setDate] = useState<string>("2024-02-02");
  const [error, setError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);

  const [info, setInfo] = useState<ProperDay["info"]>();

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
        setProper(result.proper);
        setInfo(result.proper[0].info);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [date]);

  useEffect(() => {
    if (proper) {
      setInfo(proper[activeTab].info);
    }
  }, [activeTab]);

  if (error)
    return (
      <div>
        <p>Ocorreu um erro ao gerar os próprios, procure no Missal</p>
        <a href="/missal">Ir para o Missal</a>
      </div>
    );

  if (!proper)
    return (
      <div className="mt-2 flex flex-col justify-center items-center">
        <p> A gerar...</p>
        <Loading />
      </div>
    );

  return (
    <>
      <SideCalendar
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        date={date}
        setDate={setDate}
      />

      {JSON.stringify(proper, null, 2)}
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

          {info?.day && (
            <div>
              {info.day.celebration.length || info.day.tempora.length ? (
                <h1 className="text-center">{info.title}</h1>
              ) : (
                <h1 className="text-center">Feria</h1>
              )}

              <h6 className="text-center">
                {info.day.commemoration[0]?.title}
              </h6>
              <div className="flex items-center gap-2 font-sm justify-center">
                {info.tempora && info.tempora}
                <Icon icon="mdi:calendar" /> {info.date}
                <Icon icon="mdi:clothes-hanger" />
                <div
                  className={`h-3 w-3 rounded-full ${getColor(info.colors[0])}`}
                />
                Classe {info.rank}
              </div>
            </div>
          )}

          <div>
            {proper.map((sections, index) => (
              <div
                key={index}
                className={`${index === activeTab ? "" : "hidden"}`}
              >
                <div className="flex items-center justify-center mb-2"></div>
                {sections.sections.map((section, sectionIndex) => (
                  <>
                    <div key={sectionIndex}>
                      <h2
                        className="text-center text-sepia-500"
                        id={section.id.toLowerCase()}
                      >
                        {section.id}
                      </h2>
                      <div className="side-by-side not-content">
                        {section.body.latin?.map((latinText, i) => (
                          <React.Fragment key={`latin-${section.id}-${i}`}>
                            <span>
                              <p className="text-justify my-2">{latinText}</p>
                            </span>
                            {/* Check if there's a corresponding vernacular text */}
                            {section.body.vernacular[i] ? (
                              <span>
                                <p className="text-justify my-2">
                                  {section.body.vernacular[i]}
                                </p>
                              </span>
                            ) : (
                              <span>
                                <p className="text-justify my-2"></p>
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
