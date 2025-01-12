import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0413() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Hermenegildo, Mártir, a 13 de Abril</Text>
          Fora do Tempo Pascal como na Missa In virtúte tua, excepto a Oração e
          o Evangelho.
          <LinkCard
            href="/missal/comum/4martirnaopontifice1"
            title="Mártir não Pontífice - Missa In virtúte tua"
          />
          Dentro do Tempo Pascal como na Missa Protexísti me, excepto a Oração e
          o Evangelho.
          <LinkCard
            href="/missal/comum/9martir"
            title="Mártir - Missa Protexísti me"
          />
          <Text className="h3">Oração</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui beátum Hermenegíldum Mártyrem tuum cœlésti regno
              terrénum postpónere docuísti: da, quǽsumus, nobis; ejus exémplo
              cadúca despícere atque ætérna sectári. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que ensinastes o S. Hermenegildo, vosso Mártir, a preferir
              o reino celestial ao terrestre, concedei-nos a graça, Vos
              suplicamos, de, seguindo seus exemplos, desprezarmos os bens
              caducos e amarmos os eternos. Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/comum/2martirpontificeforapascal#evangelho"
            title="Mártir Pontífice - Missa Státuit ei Dóminus"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
