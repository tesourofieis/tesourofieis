import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0515Evora() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Mâncio, B. e Mártir, a 15 de Maio, Na Arquidiocese de Évora
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens sempitérne Deus, qui Máncio, discípulo Unigéniti tui,
              Mártyr insígne tormentórum tolerántiam tribuísti: quǽsumus; ut
              sicut ejus passiónem venerámur: ita glóriæ ipsíus mereámur esse
              partícipes. Per eúmdem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó omnipotente e eterno Deus, que ao insigne Mártir Mâncio,
              discípulo do vosso Unigénito Filho, concedestes a força para
              suportar os tormentos, Vos pedimos que, assim como veneramos o seu
              suplício, assim mereçamos ser participantes da sua glória. Pelo
              mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            title="Missa S. Tito"
            href="/missal/santos/02-06#evangelho"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
