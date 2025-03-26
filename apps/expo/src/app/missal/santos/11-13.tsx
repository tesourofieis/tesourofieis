import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";

export default function Page1113() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Diogo, Conf., a 13 de Novembro</Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Omnípotens sempitérne Deus, qui dispositióne mirábili infírma
              mundi éligis, ut fórtia quæque confúndas: concéde propítius
              humilitáti nostræ; ut, piis beáti Dídaci Confessóris tui précibus,
              ad perénnem in cœlis glóriam sublimári mereámur. Per Dóminum
              nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente e sempiterno, que com admirável providência
              escolheis o que há de mais fraco no mundo para confundir os
              fortes, concedei propício à nossa humildade que, pelas piedosas
              preces do B. Diogo, vosso Confessor, mereçamos ser elevados à
              glória eterna nos céus. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
