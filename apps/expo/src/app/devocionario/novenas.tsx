import { Calendar } from "@tesourofieis/cal/calendar";
import { getNovenas } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { getYear } from "date-fns";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

function getAllNovenasForYear(year: number) {
  const calendar = new Calendar(year);
  const allDays = calendar.getAllDays();
  const novenaObservances = [];

  for (const day of allDays) {
    const novenas = day.mass.filter((mass) => mass.novena);
    novenaObservances.push(...novenas);
  }

  return novenaObservances;
}

export default function PaginaNovenas() {
  const [allNovenas, setAllNovenas] = useState<Mass[]>([]);
  const year = getYear(new Date());

  const novena = getNovenas(yyyyMMDD(new Date()));

  useEffect(() => {
    const novenas = getAllNovenasForYear(year);
    setAllNovenas(novenas);
  }, [year]);

  return (
    <PageWrapper>
      <H1 text="Novenas" />

      <View className="flex px-2">
        {novena.map((novena) => (
          // @ts-ignore
          <Link key={novena.id} href={`/${novena.link}`}>
            <Typography className="text-pretty font-bold underline mb-2">
              {novena.name}
            </Typography>
          </Link>
        ))}
      </View>

      <Typography className="text-pretty mb-2">
        Não existem novenas oficiais estabelecidas pela Igreja, permitindo que
        cada fiel as adapte às suas necessidades espirituais.
      </Typography>
      <Typography className="text-pretty mb-2">
        Se não tiver uma novena específica para rezar, pode considerar a
        seguinte estrutura:
      </Typography>
      <View className="list-decimal list-inside mb-2">
        <Typography className="li text-justify">
          Reze a oração da missa da novena.
        </Typography>
        <Typography className="li text-justify">
          Adicione intenções pessoais.
        </Typography>
        <Typography className="li text-justify">
          Termine com a Salve Regina, ou outra oração.
        </Typography>
      </View>

      <H3 text="Todas as Novenas agendadas" />
      <View className="list-disc list-inside">
        {allNovenas.map((novena) => {
          const buidDate = `${year}-${novena.month}-${novena.day}`;

          return (
            <Typography className="li" key={novena.id}>
              <Typography className="font-bold">{novena.name}</Typography> - Dia{" "}
              {novena.date ? novena.date : buidDate}
            </Typography>
          );
        })}
      </View>
    </PageWrapper>
  );
}
