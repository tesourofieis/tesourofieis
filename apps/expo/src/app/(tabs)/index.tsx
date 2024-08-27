import FontAwesome from "@expo/vector-icons/FontAwesome";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Calendar from "~/components/Calendar";
import LinkCard from "~/components/LinkCard";
import Office from "~/components/Office";
import { COLORS } from "~/constants/Colors";
import { useNotifications } from "~/hooks/useNotifications";

const win = Dimensions.get("window");

export default function Render() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { colorScheme } = useColorScheme();

  const { angelusEnabled, dailyMassEnabled, toggleAngelus, toggleDailyMass } =
    useNotifications();

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
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-col items-center justify-center gap-5">
          <Image
            alt="Logo"
            source={require("~/images/icon.png")}
            style={{
              width: win.width,
              height: win.height / 5,
            }}
          />
          <Text className="h1 text-5xl px-3">Tesouro dos Fiéis</Text>

          <Text className="text-xs text-center m-8 font-body text-sepia-800 dark:text-sepia-200">
            Espaço dedicado à oração, exposição e preservação das santas
            tradições da Igreja.
          </Text>
        </View>

        <View className="flex flex-row justify-center gap-5">
          <Text className="border-sepia-400 bg-sepia-300 text-sepia-800 dark:border-sepia-600 dark:bg-sepia-700 dark:text-sepia-300 m-2 rounded-lg border px-4 py-2 text-center">
            <Link
              href={{
                pathname: "/modal",
                params: { url: "devocionario/rosario" },
              }}
            >
              Rosário{" "}
              <FontAwesome
                name="circle"
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
              Coroa{" "}
              <FontAwesome
                name="rocket"
                color={colorScheme === "light" ? COLORS["700"] : COLORS["300"]}
              />
            </Link>
          </Text>
        </View>

        <View className="border-sepia-400 bg-sepia-200 dark:border-sepia-600 dark:bg-sepia-800 m-5 rounded-lg border p-3">
          <View className="flex-1 items-center justify-center p-2">
            <Text className="dark:text-sepia-200 p-3 text-center text-lg">
              Hoje <FontAwesome name="calendar" />
            </Text>

            <Text className="text-sepia-600 dark:text-sepia-400 text-xs font-bold">
              {format(currentDate, "EEEE, dd MMMM", {
                locale: pt,
              }).toUpperCase()}
            </Text>
          </View>

          <View>
            <Calendar />
          </View>

          <View className="flex-1 items-center justify-center p-2">
            <Text className="text-sepia-600 dark:text-sepia-400 text-xs font-bold">
              {format(currentDate, "HH:mm", {
                locale: pt,
              }).toUpperCase()}
            </Text>
          </View>

          <View className="flex flex-col">
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
        </View>

        <View className="border-sepia-400 bg-sepia-200 dark:border-sepia-600 dark:bg-sepia-800 m-5 rounded-lg border p-3 shadow">
          <Text className="dark:text-sepia-200 p-3 text-center text-lg">
            Notificações <FontAwesome name="bell" />
          </Text>
          <View
            className={
              "border-sepia-400 bg-sepia-200 text-sepia-600 hover:bg-sepia-200 dark:border-sepia-600 dark:bg-sepia-800 dark:text-sepia-300 dark:hover:bg-sepia-900 my-1 flex flex-row items-center justify-between rounded-lg border px-3 no-underline shadow"
            }
          >
            <Text className="text-sepia-800 dark:text-sepia-200">Angelus</Text>
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={angelusEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAngelus}
              value={angelusEnabled}
              accessibilityLabel="Toggle angelus notifications"
            />
          </View>

          <View
            className={
              "border-sepia-400 bg-sepia-200 text-sepia-600 hover:bg-sepia-200 dark:border-sepia-600 dark:bg-sepia-800 dark:text-sepia-300 dark:hover:bg-sepia-900 my-1 flex flex-row items-center justify-between rounded-lg border px-3 no-underline"
            }
          >
            <Text className="text-sepia-800 dark:text-sepia-200">
              Missa do Dia
            </Text>
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={dailyMassEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyMass}
              value={dailyMassEnabled}
              accessibilityLabel={"Toggle daily notifications"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
