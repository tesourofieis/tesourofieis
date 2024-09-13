import { ActivityIndicator } from "react-native";

import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import { COLORS } from "~/constants/Colors";
import LinkCard from "./LinkCard";

export default function Calendar() {
  const day = getCalendarDay(yyyyMMDD(new Date()));

  if (!day) return <ActivityIndicator color={COLORS["500"]} />;

  return (
    <>
      {day?.mass?.map((item) => (
        <LinkCard key={item.id} mass={item} />
      ))}
    </>
  );
}
