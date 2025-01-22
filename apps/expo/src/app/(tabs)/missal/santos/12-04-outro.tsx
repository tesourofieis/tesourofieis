import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./../comum/17virgensmartires1";

export default function Page1204Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Bárbara, Virgem e Mártir, a 4 de Dezembro
          </Text>

          <Text className="comment">
            Morta na Ásia Menor em 235, está na lista dos «Quatorze Santos
            Auxiliadores».
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
