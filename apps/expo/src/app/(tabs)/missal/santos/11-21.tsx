import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1121() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Apresentação da B. Virgem Maria, a 21 de Novembro
          </Text>

          <View className="aside">
            Como na [Missa Salve, sancta Parens da Virgem
            Maria](/missal/comum/29missamaria3), excepto:
          </View>

          <LinkCard
            href="/missal/comum/26festasmaria1"
            title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui beátam Maríam semper Vírginem, Spíritus Sancti
              habitáculum, hodiérna die in templo præsentári voluísti: præsta,
              quǽsumus; ut, ejus intercessióne, in templo glóriæ tuæ præsentári
              mereámur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que quisestes que a B. Virgem Maria, em quem habitava o
              Espírito Santo, fosse neste dia apresentada no templo, permiti
              pela sua intercessão que mereçamos ser apresentados no templo da
              vossa glória. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
