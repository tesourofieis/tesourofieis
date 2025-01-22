import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page16Implorarchuva() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">16.ª Para implorar a chuva</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, in quo vívimus, movémur et sumus: plúviam nobis tríbue
              congruéntem; ut, præséntibus subsídiis sufficiénter adjuti,
              sempitérna fiduciálius appetámus. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, em quem nos movemos, vivemos e existimos, concedei-nos a
              chuva necessária, para que, auxiliados suficientemente com os
              subsídios temporais, aspiremos com mais confiança às coisas
              eternas. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Oblátis, quǽsumus, Dómine, placáre munéribus: et opportúnum nobis
              tríbue plúviæ sufficiéntis auxílium. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos imploramos, deixai-Vos aplacar com estas ofertas e
              concedei-nos o auxílio da chuva, segundo as necessidades
              presentes. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Da nobis, quǽsumus, Dómine, plúviam salutárem: et áridam terræ
              fáciem fluéntis cœléstibus dignánter infúnde. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Dai-nos, Senhor, Vos pedimos, a chuva salutar; e espalhai
              misericordiosamente as águas do céu pela superfície seca da terra.
              Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
