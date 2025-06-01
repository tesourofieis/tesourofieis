import { format } from "date-fns";
import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import LinkCard from "~/components/LinkCard";
import Calendar from "./Calendar";
import Novenas from "./Novenas";
import Office from "./Office";

export default function InteractiveCard() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update date state immediately
    setDate(new Date());
    // Calculate time until next hour
    const now = new Date();
    const msUntilNextHour =
      (60 - now.getMinutes()) * 60 * 1000 -
      now.getSeconds() * 1000 -
      now.getMilliseconds();

    // Timeout to set the interval at the start of the next hour
    const timeoutId = setTimeout(() => {
      setDate(new Date());
      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000 * 60 * 60);

      return () => clearInterval(intervalId);
    }, msUntilNextHour);

    return () => clearTimeout(timeoutId);
  }, []);

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;
    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  return (
    <div className="flex flex-col gap-5 rounded border border-sepia-500 p-4 no-underline shadow-sm hover:border-sepia-800 dark:border-sepia-700 dark:hover:border-sepia-600">
      <h2 className="flex items-center mt-2 gap-2">
        <Icon icon="mdi:calendar" />
        Hoje
      </h2>

      <Calendar />

      <span className="text-sepia-600 text-center dark:text-sepia-400 text-sm font-bold">
        {format(new Date(), "HH:mm").toUpperCase()}
      </span>
      <Office />
      <Novenas />
      {currentPrayer.isAngelus && (
        <LinkCard
          href="/devocionario/dia/angelus"
          title="Angelus"
          description="Hora do Angelus"
        />
      )}
      {currentPrayer.isMorning && (
        <LinkCard
          href="/devocionario/dia/oracaomanha"
          title="Oração da Manhã"
        />
      )}
      {currentPrayer.isNight && (
        <LinkCard
          href="/devocionario/dia/oracaonoite"
          title="Oração da Noite"
        />
      )}
    </div>
  );
}
