import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page1219Braga() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. Geraldo, a 19 de Dezembro, Na Arquidiocese de
            Braga
          </Text>
          <Text className="aside">
            Como na
            <Link href="/missal/comum/11confessorespontifices1">
              Missa Státuit ei Dóminus,
            </Link>
            excepto:
          </Text>
          <Text className="h3">Oração</Text>Ó Deus, que enriquecestes a Igreja
          Bracarense com o preciosíssimo corpo do B. Geraldo, concedei-nos
          propício que imitemos fielmente os exemplos das virtudes daquele cujas
          relíquias honramos com filial devoção. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
