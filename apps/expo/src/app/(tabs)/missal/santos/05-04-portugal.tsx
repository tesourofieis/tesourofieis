import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0504Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasl. das Relíquias de S. Vicente, a 4 de Maio, Nalguns lugares
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>
          Que a fé da ressurreição, Senhor, cresça em nós em virtude das
          maravilhas que operais pelas Relíquias do vosso Santo Mártir Vicente;
          e fazei que alcancemos a glória imortal, de que estas cinzas, que
          veneramos, nos servem de penhor. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
