import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0728Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Vítor, Papa e Mártir, a 28 de Julho</Text>

          <Text className="comment">
            Victor I, nascido na África, sucedeu a Santo Eleutério, no trono
            pontifical. Tornou uniforme a fixação da festa da Páscoa, segundo as
            regras ainda hoje em vigor; decidiu que, em caso de necessidade, se
            podia baptizar com a água natural. Morreu mártir sob Septímio Severo
            em 197.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
