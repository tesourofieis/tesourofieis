import { ActivityIndicator, Text } from "react-native";

import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import { COLORS } from "~/constants/Colors";
import LinkCard from "./LinkCard";

export function getColor(color?: string) {
  switch (color) {
    case "w":
      return "white";
    case "r":
      return "red";
    case "g":
      return "green";
    case "v":
      return "violet";
    case "b":
      return "black";
    default:
      return "gray";
  }
}

export default function Calendar() {
  const day = getCalendarDay(yyyyMMDD(new Date()));

  if (!day) return <ActivityIndicator color={COLORS["500"]} />;

  return (
    <Text>
      {day.celebration.length ? (
        day.celebration.map((celebration) => (
          <LinkCard
            key={celebration.link}
            href={celebration.link}
            caption={"Celebração"}
            description="Missa"
            title={celebration.title}
            color={getColor(celebration.colors[0])}
          />
        ))
      ) : (
        <>
          {day.tempora.map((tempora) => (
            <LinkCard
              key={tempora.link}
              href={tempora.link}
              description="Missa"
              caption={"Tempora"}
              title={tempora.title || "Feria"}
              color={getColor(tempora.colors[0])}
            />
          ))}
        </>
      )}
      {day.commemoration.map((commemoration) => (
        <LinkCard
          key={commemoration.link}
          href={commemoration.link}
          caption="Comemoração"
          description="Missa"
          title={commemoration.title}
          color={getColor(commemoration.colors[0])}
        />
      ))}
      {day.local.map((local) => (
        <LinkCard
          key={local.link}
          href={local.link}
          caption={`Local: ${local.local
            ?.toLocaleUpperCase()
            .split("-")
            .join(", ")}`}
          title={local.title}
          description="Missa"
          color={getColor(local.colors[0])}
        />
      ))}
      {day.outro.map((outro) => (
        <LinkCard
          key={outro.link}
          href={outro.link}
          caption="No mesmo dia"
          description="Missa"
          title={outro.title}
          color={getColor(outro.colors[0])}
        />
      ))}
    </Text>
  );
}
