import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0306() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Perpétua e Felicidade, Mártires, a 6 de Março
          </Text>

          <View className="aside">
            Como na [Missa Me
            exspectavérunt](/missal/comum/19muitasvirgensmartires), excepto:
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Mýsticis, Dómine, repléti sumus votis et gáudiis: præsta,
              quǽsumus; ut intercessiónibus sanctárum Mártyrum tuárum Perpétuæ
              et Felicitátis, quæ temporáliter ágimus, spirituáliter
              consequámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
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
