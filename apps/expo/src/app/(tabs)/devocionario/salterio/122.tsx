import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page122() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 122</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ad Te levávi óculos meos, * qui hábitas in cælis.
            </Text>
            <Text className="text-base vernacular">
              Levantei os meus olhos para Vós, * que habitais nos céus.
            </Text>
            <Text className="text-base latin">
              Ecce, sicut óculi servórum * in mánibus dominórum suórum,
            </Text>
            <Text className="text-base vernacular">
              Eis que, assim como os olhos dos servos * estão nas mãos dos seus
              senhores,
            </Text>
            <Text className="text-base latin">
              Sicut óculi ancíllæ in mánibus dóminæ suæ: * ita óculi nostri ad
              Dóminum, Deum nostrum, donec misereátur nostri.
            </Text>
            <Text className="text-base vernacular">
              Como os olhos da serva nas mãos de sua senhora: * assim os nossos
              olhos estão no Senhor nosso Deus, até que tenha misericórdia de
              nós.
            </Text>
            <Text className="text-base latin">
              Miserére nostri, Dómine, miserére nostri: * quia multum repléti
              sumus despectióne:
            </Text>
            <Text className="text-base vernacular">
              Tende misericórdia de nós, ó Senhor, tende misericórdia de nós: *
              pois estamos cheios de desprezo.
            </Text>
            <Text className="text-base latin">
              Quia multum repléta est ánima nostra: * oppróbrium abundántibus,
              et despéctio supérbis.
            </Text>
            <Text className="text-base vernacular">
              Pois a nossa alma está cheiíssima: * de ser o objecto de escárnio
              para os ricos e de desprezo para os soberbos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
