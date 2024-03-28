import { getCalendarDay } from "../lib/getCalendar";
import { yyyyMMDD } from "../lib/utils";

import {
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import { getHours } from "date-fns";
import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import Loading from "./Loading";
import Office from "./Office";

export default function InteractiveCard() {
  const [date, setDate] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(getHours(date));
  const calendar = getCalendarDay(yyyyMMDD(new Date()));
  const currentPrayer = getPrayer(new Date());

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        const newDate = new Date();
        setDate(newDate);

        const newHour = getHours(newDate);
        if (newHour !== currentHour) {
          setCurrentHour(newHour);
        }
      },
      1000 * 60 * 60,
    );

    return () => clearInterval(intervalId);
  }, [currentHour]);

  function getPrayer(date: Date) {
    const hour = getHours(date);
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    return { isMorning, isNight };
  }

  async function getAngelus(date: Date) {
    const hour = getHours(date);
    if (hour === 6 || hour === 12 || hour === 18) {
      requestPermission();

      sendNotification({
        title: "Tesouro dos Fiéis",
        body: `Hora do Angelus ${hour}`,
        icon: "favicon72.png",
      });
      return true;
    }
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
      <span className="italic">
        Muda a Missa, o Ofício, o Angelus e as orações do dia consoante o dia e
        a hora
      </span>
      <span className="font-bold">
        {new Date().toLocaleTimeString("pt", {
          month: "long",
          weekday: "long",
          day: "2-digit",
          hour: "numeric",
        })}
      </span>
      <LinkCard
        link="/missal/dia"
        title={
          calendar.celebration[0]?.title ||
          calendar.tempora[0]?.title ||
          calendar.commemoration[0]?.title ||
          "Feria"
        }
        caption={calendar.commemoration[0]?.title}
        description={"Missa do dia"}
      />
      <Office />
      {getAngelus(new Date()) && (
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
    </div>
  );
}
