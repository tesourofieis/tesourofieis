import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0412() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Vítor, Mártir, a 12 de Abril, Na Arquidiocese de Braga e noutros
            lugares
          </Text>
          <Text className="h3">Oração</Text>Ó Deus, que pela pompa do martírio
          triunfal fizestes entrar glorioso na pátria celestial o B. Vítor,
          concedei-nos propício que, pugnando nós à sua imitação contra os
          nossos vícios, consigamos alcançar aquelas vitórias que Vítor nos
          ensinou. Por nosso Senhor...
          <Text className="h3">Secreta</Text>
          Santificai, Senhor, os dons que Vos apresentamos, e pela intercessão
          do B. Vítor, vosso Mártir, permiti que em virtude deles olheis
          aplacado para nós. Por nosso Senhor...
          <Text className="h3">Postcomúnio</Text>
          Que o sacramento, que acabámos de receber, nos santifique, Senhor; e
          pela intercessão dos vossos Santos fazei que sejamos participantes do
          remédio celestial. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
