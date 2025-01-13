import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1212Porto() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. Pantaleão, a 12 de Dezembro, Na cidade do Porto e
            subúrbios
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>Ó Deus, que quiseste que o corpo do
          vosso glorioso Mártir Pantaleão fosse trasladado até nós e que esta
          cidade seja defendida com seu patrocínio, concedei-nos benigno, Vos
          suplicamos, que pelas suas preces e méritos sejamos trasladados após
          esta vida à bem-aventurança eterna. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
