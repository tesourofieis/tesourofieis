import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0413() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Hermenegildo, Mártir, a 13 de Abril</Text>
          <Text className="aside">
            Fora do Tempo Pascal como na Missa{" "}
            <Link className="link" href="/missal/comum/4martirnaopontifice1">
              In virtúte tua
            </Link>
            , excepto a Oração e o Evangelho. Dentro do Tempo Pascal como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>
            , excepto a Oração e o Evangelho.
          </Text>

          <Text className="h3">Oração</Text>
          <Language>
            <Text className="latin">
              Deus, qui beátum Hermenegíldum Mártyrem tuum cœlésti regno
              terrénum postpónere docuísti: da, quǽsumus, nobis; ejus exémplo
              cadúca despícere atque ætérna sectári. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que ensinastes o S. Hermenegildo, vosso Mártir, a preferir
              o reino celestial ao terrestre, concedei-nos a graça, Vos
              suplicamos, de, seguindo seus exemplos, desprezarmos os bens
              caducos e amarmos os eternos. Por nosso Senhor...
            </Text>
          </Language>
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
