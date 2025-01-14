import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page0818Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Roque, Confessor, a 18 de Agosto</Text>
          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Senhor, Vos rogamos, o vosso povo com incessante bondade; e, pelos
            sufrágios e méritos do B. Roque, livrai-o de todo o contágio na alma
            e no corpo. Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
