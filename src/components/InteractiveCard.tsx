import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import LinkCard from "./LinkCard";
import Notification from "./Notifications";
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
      const intervalId = setInterval(
        () => {
          setDate(new Date());
        },
        1000 * 60 * 60,
      ); // Update every hour

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
    <div className="flex flex-col shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 no-underline p-4 gap-5">
      {window && <Notification />}
      <div className="flex justify-between not-content">
        <h2>Dia e Hora</h2>
      </div>
      <span className="font-bold">
        {format(new Date(), "EEEE, MMMM dd", {
          locale: pt,
        })}
      </span>
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

      <h6>Calendário Litúrgico</h6>
      <Calendar />
    </div>
  );
}
