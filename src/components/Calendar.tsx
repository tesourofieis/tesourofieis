import { useEffect, useState } from "react";
import { Calendar as CalendarType } from "../../lib/src/calendar";
import { yyyyMMDD } from "../../lib/src/utils";

import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getYear,
} from "date-fns";

interface Celebration {
  title: string;
  // Add other properties as needed
}

interface Celebrations {
  celebration: Celebration[];
  tempora: Celebration[];
  commemoration: Celebration[];
  // Add other properties as needed
}

interface CalendarType {
  [date: string]: Celebrations;
}

interface LinkCardProps {
  title: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description }) => (
  <div className="p-4 mb-4">
    <p className="text-xs font-bold mb-2">{title}</p>
    <p className="text-xs">{description}</p>
  </div>
);

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState<CalendarType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/missal/calendario/${getYear(currentDate)}.json`,
        );
        const result = await response.json();
        setCalendar(result.calendar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentDate]);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="text-center not-content">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          className="border hover:border-red-500 cursor-pointer rounded p-1"
          onClick={prevMonth}
        >
          Mês Anterior
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("pt", { year: "numeric", month: "long" })}
        </h2>
        <button
          type="button"
          className="border hover:border-red-500 cursor-pointer rounded p-1"
          onClick={nextMonth}
        >
          Próximo Mês
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 w-full">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => (
          <div key={day} className="text-gray-500">
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day.getTime()}
            className="cursor-pointer flex items-center justify-center"
            style={{
              minHeight: "100px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }} // Adjust styles as needed
          >
            {calendar &&
              calendar[format(day, "yyyy-MM-dd")] &&
              (calendar[format(day, "yyyy-MM-dd")].celebration.length > 0 ? (
                calendar[format(day, "yyyy-MM-dd")].celebration.map(
                  (celebration, index) => (
                    <LinkCard
                      key={index}
                      title={
                        celebration.title ||
                        calendar[format(day, "yyyy-MM-dd")].tempora[index]
                          ?.title ||
                        calendar[format(day, "yyyy-MM-dd")].commemoration[index]
                          ?.title ||
                        "Feria"
                      }
                      description={
                        calendar[format(day, "yyyy-MM-dd")].commemoration[index]
                          ?.title
                      }
                    />
                  ),
                )
              ) : (
                <LinkCard key="default" title="Feria" description="" />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
