import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Dimensions, Button, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "~/components/Calendar";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import Office from "~/components/Office";
import LinkCard from "~/components/LinkCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "~/constants/Colors";
import { Link } from "expo-router";
import { useNotifications } from "~/hooks/useNotifications";
const win = Dimensions.get('window');


export default function Render() {
 const [currentDate, setCurrentDate] = useState(new Date());

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
        <View className="flex gap-5 flex-col items-center justify-center">
          <Image
            alt="Logo"
            source={require("~/images/icon.png")}
            style={{
              width: win.width,
              height: win.height/5
            }}
          />
          <Text className="text-4xl h1">Tesouro dos Fiéis</Text>
        </View>


          <View className="flex items-center">
            <Text className="border shadow rounded text-center px-4 m-2 py-2 bg-sepia-700 dark:bg-sepia-300 text-sepia-300 dark:text-sepia-700 border-sepia-900 dark:border-sepia-100">
              <Link href={{
                pathname: "/modal",
                params: { url: "" },
              }}>
                Avançar <FontAwesome name="rocket" color={COLORS["500"]} />
              </Link>
            </Text>
          </View>

        <View className="border border-sepia-50 dark:border-sepia-900 bg-sepia-300 dark:bg-sepia-700 rounded-lg m-5 p-3 shadow">
            <View className="flex-1 items-center justify-center p-2">
              <Text className="font-bold text-xs text-sepia-600 dark:text-sepia-400">
                {format(currentDate, "EEEE, dd MMMM", {
                  locale: pt,
                }).toUpperCase()}
              </Text>
            </View>

            <View>
              <Calendar />
            </View>

            <View className="flex-1 items-center justify-center p-2">

              <Text className="font-bold text-xs text-sepia-600 dark:text-sepia-400">
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

        <View className="border border-sepia-50 dark:border-sepia-900 bg-sepia-300 dark:bg-sepia-700 rounded-lg m-5 p-3 shadow">
          <Text className="text-lg text-center p-3 dark:text-sepia-200">Notificações 🔔</Text>
          <View className={`flex flex-row my-1 bg-sepia-200 dark:bg-sepia-800 justify-between items-center text-sepia-600 dark:text-sepia-300 border rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-900 border-sepia-100 dark:border-sepia-900 no-underline px-3 shadow`}>
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

          <View className={`flex flex-row my-1 bg-sepia-200 dark:bg-sepia-800 justify-between items-center text-sepia-600 dark:text-sepia-300 border rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-900 border-sepia-300 dark:border-sepia-700 no-underline px-3`}>
            <Text className="text-sepia-800 dark:text-sepia-200">Missa do Dia</Text>
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={dailyMassEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyMass}
              value={dailyMassEnabled}
              accessibilityLabel={`Toggle daily notifications`}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
