import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0818Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Roque, Confessor, a 18 de Agosto</Text>
          <View className="aside">
            Como na [Missa Justus ut
            palma](/missal/comum/15confessoresnaopontifices2), excepto:
          </View>
          <Text className="h3">Oração</Text>
          Senhor, Vos rogamos, o vosso povo com incessante bondade; e, pelos
          sufrágios e méritos do B. Roque, livrai-o de todo o contágio na alma e
          no corpo. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
