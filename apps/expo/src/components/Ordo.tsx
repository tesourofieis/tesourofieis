import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { View } from "react-native";
import LinkCard from "./LinkCard";
import Loading from "./Loading";

export default function Ordo({ section }: { section: string }) {
  const calendar = getCalendarDay(yyyyMMDD(new Date()));

  if (!calendar)
    return (
      <div className="mt-2 flex flex-col justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <View className="p-8 flex gap-5">
      👉
      <LinkCard
        mass={{
          ...calendar.mass[0],
          link: `/${calendar.mass[0].link}#${section}`,
        }}
        description={section.toUpperCase()}
      />
    </View>
  );
}
