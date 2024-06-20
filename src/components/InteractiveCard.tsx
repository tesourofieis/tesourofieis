import { getCalendarDay } from "../lib/getCalendar";
import { yyyyMMDD } from "../lib/utils";

import {
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import LinkCard from "./LinkCard";
import Loading from "./Loading";
import Office from "./Office";

export default function InteractiveCard() {
  const [date, setDate] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(date.getHours());
  const calendar = getCalendarDay(yyyyMMDD(new Date()));
  const currentPrayer = getPrayer(new Date());

  requestPermission();

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        const newDate = new Date();
        setDate(newDate);

        const newHour = newDate.getHours();
        if (newHour !== currentHour) {
          setCurrentHour(newHour);
        }
      },
      1000 * 60 * 60,
    );

    return () => clearInterval(intervalId);
  }, [currentHour]);

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;
    return { isMorning, isNight, isAngelus };
  }

  if (currentPrayer.isAngelus) {
    sendNotification({
      title: "Tesouro dos Fiéis",
      body: "Hora do Angelus",
      icon: "favicon72.png",
    });
  }

  if (!calendar) {
    return (
      <div className="shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 gap-5 grid min-h-[140px] w-full place-items-center overflow-x-scroll p-6 lg:overflow-visible">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 no-underline p-4 gap-5">
      <div className="flex justify-between not-content">
        <h2>Dia e Hora</h2>
      </div>
      <span className="font-bold">
        {new Date().toLocaleTimeString("pt", {
          month: "long",
          weekday: "long",
          day: "2-digit",
          hour: "numeric",
        })}
      </span>
      {calendar.celebration.map((i) => (
        <LinkCard
          key={i.id}
          link={i.link}
          description={calendar.tempora[0]?.title}
          caption="Celebração"
          title={i.title}
        />
      ))}
      {calendar.commemoration.map((i) => (
        <LinkCard
          key={i.id}
          link={i.link}
          title={i.title}
          caption="Comemoração"
        />
      ))}
      <Office />
      {currentPrayer.isAngelus && (
        <LinkCard
          link="/devocionario/dia/angelus"
          title="Angelus"
          description="Hora do Angelus"
        />
      )}
      {currentPrayer.isMorning && (
        <LinkCard
          link="/devocionario/dia/oracaomanha"
          title="Oração da Manhã"
        />
      )}
      {currentPrayer.isNight && (
        <LinkCard
          link="/devocionario/dia/oracaonoite"
          title="Oração da Noite"
        />
      )}

      <h3>Calendário</h3>
      <Calendar />
    </div>
  );
}
