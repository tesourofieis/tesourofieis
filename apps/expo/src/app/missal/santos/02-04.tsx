import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0204() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. André Corsino, B. e Conf., a 4 de Fevereiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/11confessorespontifices1"
            >
              Missa Státuit ei
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui in Ecclésia tua nova semper instáuras exémpla virtútum:
              da pópulo tuo beáti Andréæ Confessóris tui atque Pontíficis ita
              sequi vestígia; ut assequátur et prǽmia. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que na vossa Igreja apresentais constantemente novos
              exemplos de virtudes, concedei ao vosso povo que de tal modo siga
              os vestígios do B. André, vosso Confessor e Pontífice, que possa
              alcançar o mesmo prémio. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
