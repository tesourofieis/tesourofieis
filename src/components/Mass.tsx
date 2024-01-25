import { addDays, subDays } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { getCalendar } from "../../lib/getCalendar";
import { format_propers, yyyyMMDD } from "../../lib/src/utils";
import { Suspense, useEffect, useState } from "react";
import LinkCard from "./LinkCard";

export default function Mass() {
  const [date, setDate] = useState<Date>(new Date());

  const calendar = getCalendar(date.getFullYear());
  const day = calendar.get(yyyyMMDD(date));
  const proper = day?.getProper(calendar);

  const format = format_propers(proper);

  const handlePrevDay = () => {
    setDate(subDays(date, 1));
  };

  const handleNextDay = () => {
    setDate(addDays(date, 1));
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col gap-5 h-full">
        {format && (
          <div className="w-full">
            {format.sections
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
            {Object.entries(calendar.serialize()).map(
              ([calendarDate, celebrations], index, array) => {
                const isToday = calendarDate === yyyyMMDD(date);
                const isBeforeToday =
                  calendarDate === yyyyMMDD(subDays(date, 1));
                const isAfterToday =
                  calendarDate === yyyyMMDD(addDays(date, 1));

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
    </Suspense>
  );
}
