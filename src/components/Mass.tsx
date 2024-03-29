import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useEffect, useState } from "react";
import React from "react";
import { type ProperDay, yyyyMMDD } from "../lib/utils";
import Loading from "./Loading";
import { SideCalendar, getColor } from "./SideCalendar";

export default function Mass() {
  const [date, setDate] = useState<string>(yyyyMMDD(new Date()));
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
  }, [proper, activeTab]);

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

      {proper && (
        <div
          className={`not-content mr-${
            isSidebarCollapsed ? "0" : "48"
          } transition-all duration-300`}
        >
          {proper.length > 1 && (
            <div className="flex mb-4 justify-center">
              {proper.map((sections, index) => (
                <button
                  type="button"
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className={`text-sepia-900 bg-sepia-300 m-2  ${
                    index === activeTab ? "border-b-4 border-red-500" : ""
                  }`}
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
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={`${index === activeTab ? "" : "hidden"}`}
              >
                {sections.sections.map((section, sectionIndex) => (
                  <>
                    {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
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
                                <p className="text-justify my-2" />
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      {section.subSections?.map(
                        (subsection, subSectionIndex) => (
                          <div
                            key={`subsection-${section.id}-${subSectionIndex}`}
                          >
                            {/* Render subsection title as h4 */}
                            <h4>{subsection.id}</h4>
                            {/* Render subsection content */}

                            <div className="side-by-side not-content">
                              {subsection.body.latin?.map((latinText, i) => (
                                <React.Fragment
                                  key={`latin-${section.id}-${i}`}
                                >
                                  <span>
                                    <p className="text-justify my-2">
                                      {latinText}
                                    </p>
                                  </span>
                                  {/* Check if there's a corresponding vernacular text */}
                                  {subsection.body.vernacular[i] ? (
                                    <span>
                                      <p className="text-justify my-2">
                                        {subsection.body.vernacular[i]}
                                      </p>
                                    </span>
                                  ) : (
                                    <span>
                                      <p className="text-justify my-2" />
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
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
