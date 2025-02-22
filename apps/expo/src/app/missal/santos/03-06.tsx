import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page0306() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Perpétua e Felicidade, Mártires, a 6 de Março
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/19muitasvirgensmartires">
              Missa Me exspectavérunt,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Mýsticis, Dómine, repléti sumus votis et gáudiis: præsta,
              quǽsumus; ut intercessiónibus sanctárum Mártyrum tuárum Perpétuæ
              et Felicitátis, quæ temporáliter ágimus, spirituáliter
              consequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Saciados com as alegrias místicas, que são objecto dos nossos
              desejos, concedei-nos, Vos suplicamos, Senhor, que por intercessão
              das vossas Santas Mártires Perpétua e Felicidade alcancemos os
              eternos efeitos do que praticámos neste mundo. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
