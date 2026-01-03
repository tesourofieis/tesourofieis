import { useCalendar } from "~/providers/calendar";
import { useMemo } from "react";
import { getTodaysIndulgences } from "~/lib/indulgences";

export function useTodaysIndulgences() {
  const { calendar, date } = useCalendar();

  return useMemo(() => {
    return getTodaysIndulgences(calendar, date);
  }, [calendar, date]);
}
