import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";

import Calendar from "~/components/Calendar";
import LinkCard from "~/components/LinkCard";
import Office from "~/components/Office";
import { COLORS } from "~/constants/Colors";
import { useNotifications } from "~/hooks/useNotifications";

export default function Render() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { colorScheme } = useColorScheme();

  const {
    angelusEnabled,
    dailyMassEnabled,
    angelusLoading,
    dailyMassLoading,
    toggleAngelus,
    toggleDailyMass,
  } = useNotifications();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute (60000 milliseconds)

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(currentDate);

  return (
    <ScrollView>
      <View className="flex flex-col items-center mt-11 justify-center gap-5">
        {/* @ts-ignore */}
        <FontAwesome6 name="book-bible" size={150} color="#e53935" />
        <Text className="h1 text-5xl m-3">Tesouro dos Fiéis</Text>
        <Text className="text-xs text-center mx-8 font-body text-sepia-800 dark:text-sepia-200">
          Espaço dedicado à oração, exposição e preservação das santas tradições
          da Igreja.
        </Text>
      </View>

      <View className="flex flex-row justify-center my-5 mx-5 gap-5">
        <Text className="border-sepia-400 bg-sepia-300 text-sepia-800 dark:border-sepia-600 dark:bg-sepia-700 dark:text-sepia-300 m-2 rounded-lg border px-4 py-2 text-center">
          <Link
            href={{
              pathname: "/modal",
              params: { url: "devocionario/rosario" },
            }}
          >
            Rosário{" "}
            <FontAwesome6
              name="arrow-right"
              color={colorScheme === "light" ? COLORS["700"] : COLORS["300"]}
            />
          </Link>
        </Text>

        <Text className="border-sepia-400 text-sepia-800 dark:border-sepia-600 dark:text-sepia-300 m-2 rounded-lg border px-4 py-2 text-center">
          <Link
            href={{
              pathname: "/modal",
              params: { url: "devocionario/oracoes/coroasaomiguel" },
            }}
          >
            Coroa de São Miguel{" "}
            <FontAwesome6
              name="arrow-right"
              color={colorScheme === "light" ? COLORS["700"] : COLORS["300"]}
            />
          </Link>
        </Text>
      </View>

      <View className="border-t border-sepia-300 dark:border-sepia-700 mb-2" />

      <View className="px-5">
        <View className="flex-1 items-center justify-center p-2">
          <Text className="dark:text-sepia-200 p-3 text-center text-lg">
            Hoje <FontAwesome6 name="calendar" />
          </Text>

          <Text className="text-sepia-600 dark:text-sepia-400 text-xs font-bold">
            {format(currentDate, "EEEE, dd MMMM", {
              locale: pt,
            }).toUpperCase()}
          </Text>
        </View>

        <Calendar />

        <View className="flex-1 items-center justify-center p-2">
          <Text className="text-sepia-600 dark:text-sepia-400 text-xs font-bold">
            {format(currentDate, "HH:mm", {
              locale: pt,
            }).toUpperCase()}
          </Text>
        </View>

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
            description="Orações do dia"
          />
        )}

        {currentPrayer.isNight && (
          <LinkCard
            href="/devocionario/dia/oracaonoite"
            title="Oração da Noite"
            description="Orações do dia"
          />
        )}

        <Office />
      </View>

      <View className="border-t border-sepia-300 dark:border-sepia-700 mt-3" />

      <View className="bg-sepia-200 dark:bg-sepia-800 p-3">
        <Text className="dark:text-sepia-200 p-3 text-center text-lg">
          Notificações <FontAwesome6 name="bell" />
        </Text>
        <View className="my-1 flex flex-row items-center justify-between px-3">
          <Text className="text-sepia-800 dark:text-sepia-200">Angelus</Text>
          {angelusLoading ? (
            <ActivityIndicator color={COLORS["400"]} />
          ) : (
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={angelusEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAngelus}
              value={angelusEnabled}
              disabled={angelusLoading}
              accessibilityLabel="Toggle angelus notifications"
            />
          )}
        </View>

        <View className="border-t border-sepia-300" />

        <View className="my-1 flex flex-row items-center justify-between px-3">
          <Text className="text-sepia-800 dark:text-sepia-200">
            Missa do Dia
          </Text>
          {dailyMassLoading ? (
            <ActivityIndicator color={COLORS["400"]} />
          ) : (
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={dailyMassEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyMass}
              value={dailyMassEnabled}
              disabled={dailyMassLoading}
              accessibilityLabel="Toggle daily notifications"
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}
