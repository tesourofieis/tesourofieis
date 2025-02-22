import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0405() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Vicente Ferrer, Conf., a 5 de Abril</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui Ecclésiam tuam beáti Vincéntii Confessóris tui méritis
              et prædicatióne illustráre dignátus es: concéde nobis fámulis
              tuis; ut et ipsíus instruámur exémplis et ab ómnibus ejus
              patrocínio liberémur advérsis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que Vos dignastes ilustrar a vossa Igreja com os méritos e
              a pregação do B. Vicente, vosso Confessor, concedei a estes vossos
              servos a graça de serem instruídos com seus exemplos e livres de
              todas as adversidades pela sua protecção. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
