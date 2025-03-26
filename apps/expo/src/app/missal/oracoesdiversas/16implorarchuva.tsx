import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page16Implorarchuva() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">16.ª Para implorar a chuva</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, in quo vívimus, movémur et sumus: plúviam nobis tríbue
              congruéntem; ut, præséntibus subsídiis sufficiénter adjuti,
              sempitérna fiduciálius appetámus. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, em quem nos movemos, vivemos e existimos, concedei-nos a
              chuva necessária, para que, auxiliados suficientemente com os
              subsídios temporais, aspiremos com mais confiança às coisas
              eternas. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Oblátis, quǽsumus, Dómine, placáre munéribus: et opportúnum nobis
              tríbue plúviæ sufficiéntis auxílium. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos imploramos, deixai-Vos aplacar com estas ofertas e
              concedei-nos o auxílio da chuva, segundo as necessidades
              presentes. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Da nobis, quǽsumus, Dómine, plúviam salutárem: et áridam terræ
              fáciem fluéntis cœléstibus dignánter infúnde. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Dai-nos, Senhor, Vos pedimos, a chuva salutar; e espalhai
              misericordiosamente as águas do céu pela superfície seca da terra.
              Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
