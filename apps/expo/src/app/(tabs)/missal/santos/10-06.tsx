import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1006() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Bruno, Conf., a 6 de Outubro</Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sancti Brunónis Confessóris tui, quǽsumus, Dómine,
              intercessiónibus adjuvémur: ut, qui majestátem tuam gráviter
              delinquéndo offéndimus, ejus méritis et précibus, nostrórum
              delictórum véniam consequámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a intercessão do vosso Santo Confessor Bruno nos auxilie,
              Senhor, Vos rogamos, a fim de que, havendo ofendido gravemente a
              vossa majestade, obtenhamos o perdão dos nossos pecados pelos
              méritos e preces do mesmo santo. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, omnípotens Deus: ut, qui cœlestia aliménta percépimus,
              intercedénte beáto Brunóne Confessóre tuo, per hæc contra ómnia
              advérsa muniámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, Vos imploramos, havendo nós recebido o
              alimento celestial, fazei que, por intercessão do B. Confessor
              Bruno, sejamos fortificados contra todas as adversidades. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
