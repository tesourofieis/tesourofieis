import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Calendar } from "@tesourofieis/cal/calendar";
import { getNovenas } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { getYear } from "date-fns";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";

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
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Novenas</Text>

          {novena.map((novena) => (
            <Link key={novena.id} href={`/${novena.link}`}>
              {novena.name}
            </Link>
          ))}

          <Text className="text-base mb-2">
            Não existem novenas oficiais estabelecidas pela Igreja, permitindo
            que cada fiel as adapte às suas necessidades espirituais.
          </Text>
          <Text className="text-base mb-2">
            Se não tiver uma novena específica para rezar, pode considerar a
            seguinte estrutura:
          </Text>
          <View className="list-decimal list-inside mb-2">
            <Text className="li text-justify">
              Reze a oração da missa da novena
            </Text>
            <Text className="li text-justify">Adicione intenções pessoais</Text>
            <Text className="li text-justify">
              Termine com a Salve Regina, ou outra oração
            </Text>
          </View>

          <Text className="h3 font-semibold mt-4 mb-2">
            Todas as Novenas agendadas
          </Text>
          <View className="list-disc list-inside">
            {allNovenas.map((novena) => {
              const buidDate = `${year}-${novena.month}-${novena.day}`;

              return (
                <Text className="li" key={novena.id}>
                  <Text className="font-bold">{novena.name}</Text> - Dia{" "}
                  {novena.date ? novena.date : buidDate}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
