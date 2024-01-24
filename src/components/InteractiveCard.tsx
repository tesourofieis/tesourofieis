import { getCalendarDay } from "../../lib/getCalendar.ts";
import { yyyyMMDD } from "../../lib/src/utils.ts";

import { getHours } from "date-fns";

import Office from "./Office";

export default function InteractiveCard() {
  const date = new Date();

  const calendar = getCalendarDay(
    new Date(date).getFullYear(),
    yyyyMMDD(new Date()),
  );

  function getPrayer(date: Date) {
    const hour = getHours(date);
    // Morning is considered between 6:30 AM and 9:30 AM
    const isMorning = hour >= 5 && hour < 10;
    if (isMorning) {
      return { isMorning: true, isNight: false };
    }
    // Night is considered between 8:00 PM and 3:00 AM
    const isNight = hour >= 20 && hour <= 3;
    if (isNight) {
      return { isNight: true, isMorning: false };
    }

    return { isNight: false, isMorning: false };
  }

  function getAngelus(date: Date) {
    const hour = getHours(date);
    // Angelus is traditionally prayed at 6:00 AM, 12:00 PM (noon), and 6:00 PM
    const isAngelus = hour === 6 || hour === 12 || hour === 18;
    if (isAngelus) {
      return true;
    }
  }

  return (
    <div className="border border-red-500 rounded p-3">
      <caption>{new Date().toLocaleString()}</caption>
      <img className="rounded" src="/1.gif" alt="missal" />
      <a href={`/missal/dia#${yyyyMMDD(date)}`}>
        <p>
          {calendar.celebration[0]?.title ||
            calendar.tempora[0]?.title ||
            calendar.commemoration[0]?.title ||
            "Feria"}
        </p>
        <caption>{calendar.commemoration[0]?.title}</caption>
      </a>
      <Office />
      {getAngelus(new Date()) && (
        <div>
          <a href="/devocionario/dia/angelus">"Angelus"</a>
        </div>
      )}
      {getPrayer(new Date()).isMorning && (
        <div>
          <a href="/devocionario/dia/oracaomanha">"Oração da Manhã"</a>
        </div>
      )}
      {getPrayer(new Date()).isNight && (
        <div>
          <a href="/devocionario/dia/oracaonoite">"Oração da Noite"</a>
        </div>
      )}
    </div>
  );
}
