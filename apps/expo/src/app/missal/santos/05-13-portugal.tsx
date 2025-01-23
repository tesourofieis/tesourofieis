import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../santos/08-22";

export default function Page0513Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Missa Votiva do Imaculado Coração da B. Virgem Maria, a 13 de Maio
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
