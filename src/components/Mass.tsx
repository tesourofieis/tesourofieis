import { addDays, subDays } from "date-fns";

import type { ProperDay } from "../../lib/src/utils";
import { yyyyMMDD } from "../../lib/src/utils";
import { Suspense, useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { Calendar } from "../../lib/src/calendar";

export default function Mass() {
  const [date, setDate] = useState<Date>(new Date());

  const [calendar, setCalendar] = useState<Calendar["serialize"]>();

  const [proper, setProper] = useState<ProperDay>();

  const handlePrevDay = () => {
    setDate(subDays(date, 1));
  };

  const handleNextDay = () => {
    setDate(addDays(date, 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/missa/${yyyyMMDD(date)}.json`);
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
    <div className="flex flex-col gap-5 h-full">
      {proper && (
        <div className="w-full">
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

      {calendar && (
        <div className="flex w-full not-content">
          {Object.entries(calendar).map(
            ([calendarDate, celebrations], index, array) => {
              const isToday = calendarDate === yyyyMMDD(date);
              const isBeforeToday = calendarDate === yyyyMMDD(subDays(date, 1));
              const isAfterToday = calendarDate === yyyyMMDD(addDays(date, 1));

              if (isBeforeToday || isToday || isAfterToday) {
                return (
                  <div
                    key={calendarDate}
                    className="flex w-1/3 flex-col group/item"
                  >
                    {isBeforeToday && (
                      <button
                        type="button"
                        className="cursor-pointer bg-transparent"
                        onClick={handlePrevDay}
                      >
                        <LinkCard
                          title={
                            celebrations.celebration[0]?.title ||
                            celebrations.tempora[0]?.title ||
                            celebrations.commemoration[0]?.title ||
                            "Feria"
                          }
                          description={calendarDate}
                          caption={celebrations.commemoration[0]?.title}
                        />
                      </button>
                    )}
                    {isToday && (
                      <LinkCard
                        title={
                          celebrations.celebration[0]?.title ||
                          celebrations.tempora[0]?.title ||
                          celebrations.commemoration[0]?.title ||
                          "Feria"
                        }
                        description={calendarDate}
                        caption={celebrations.commemoration[0]?.title}
                      />
                    )}
                    {isAfterToday && (
                      <button
                        type="button"
                        className="cursor-pointer bg-transparent"
                        onClick={handleNextDay}
                      >
                        <LinkCard
                          title={
                            celebrations.celebration[0]?.title ||
                            celebrations.tempora[0]?.title ||
                            celebrations.commemoration[0]?.title ||
                            "Feria"
                          }
                          description={calendarDate}
                          caption={celebrations.commemoration[0]?.title}
                        />
                      </button>
                    )}
                  </div>
                );
              }
            },
          )}
        </div>
      )}
    </div>
  );
}
