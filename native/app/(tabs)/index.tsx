import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/components/Calendar";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import Office from "@/components/Office";
import LinkCard from "@/components/LinkCard";
import NotificationBadge from "@/components/NotificationBadge";

export default function Render() {
  const [date] = useState(new Date());

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  return (
    <SafeAreaView>
      <ScrollView>
        <NotificationBadge />
        <View className="flex-1 p-3 gap-5 flex-col items-center justify-center">
          <Image
            alt="Logo"
            source={require("@/assets/images/icon.png")}
            className="flex w-12 h-12"
          />
          <Text className="text-4xl h1">Tesouro dos Fiéis</Text>
        </View>

        <View className="flex-1 items-center justify-center p-2">
          <Text className="font-bold text-xs text-sepia-600 dark:text-sepia-400">
            {format(date, "EEEE, dd MMMM", {
              locale: pt,
            }).toUpperCase()}
          </Text>
        </View>

        <View>
          <Calendar />
        </View>

        <View className="flex-1 items-center justify-center p-2">
          <Text className="font-bold text-xs text-sepia-600 dark:text-sepia-400">
            {format(date, "HH:mm", {
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
            />
          )}

          {currentPrayer.isNight && (
            <LinkCard
              href="/devocionario/dia/oracaonoite"
              title="Oração da Noite"
            />
          )}

          <Office />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
