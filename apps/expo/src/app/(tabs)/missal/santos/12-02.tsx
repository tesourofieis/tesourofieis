import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1202() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Bibiana, Virgem e Mártir, a 2 de Dezembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/18virgensmartires2">
              Missa Me exspectavérunt
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, ómnium largítor bonórum, qui in fámula tua Bibiána cum
              virginitátis flore martýrii palmam conjunxísti: mentes nostras
              ejus intercessióne tibi caritáte conjúnge; ut, amótis perículis,
              prǽmia consequámur ætérna. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, dispensador de todos os bens, que unistes a flor da
              virgindade à palma do martírio na pessoa de vossa serva Bibiana,
              dignai-Vos por sua intercessão unir pela caridade as nossas almas
              convosco, a fim de que, afastados todos os perigos, alcancemos os
              prémios eternos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
