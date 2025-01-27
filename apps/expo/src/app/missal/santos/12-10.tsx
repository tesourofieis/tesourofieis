import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page1210() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Melquíades, Papa e Mártir, a 10 de Dezembro
          </Text>

          <Text className="comment">
            «Em Roma, morte de S. Melquíades, Papa, que, depois de haver sofrido
            muito na perseguição de Maximiano, viu a paz restituída à Igreja e
            morreu tranquilamente em 314.»
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
