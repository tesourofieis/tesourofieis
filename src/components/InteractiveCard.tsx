import { getCalendarDay } from "../lib/getCalendar.ts";
import { yyyyMMDD } from "../lib/utils.ts";

import { useState, useEffect } from "react";
import { getHours } from "date-fns";
import Office from "./Office";
import LinkCard from "./LinkCard.tsx";

export default function InteractiveCard() {
  const [date, setDate] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(getHours(date));
  const calendar = getCalendarDay(
    new Date(date).getFullYear(),
    yyyyMMDD(new Date()),
  );
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

  function getAngelus(date: Date) {
    const hour = getHours(date);
    return hour === 6 || hour === 12 || hour === 18;
  }

  return (
    <div className="border border-gray-300 rounded p-3 gap-3">
      <h3>Dia e Hora</h3>
      <h6>
        {new Date().toLocaleTimeString("pt", {
          month: "long",
          weekday: "long",
          day: "2-digit",
          hour: "numeric",
        })}
      </h6>
      <em>
        Muda a Missa, o Ofício, o Angelus e as orações do dia consoante o dia e
        a hora
      </em>
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
