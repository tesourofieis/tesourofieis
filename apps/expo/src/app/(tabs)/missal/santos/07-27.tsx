import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0727() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Pantaleão, Mártir, a 27 de Julho</Text>
          <View className="aside">
            Em Nicomédia, traz o Martirológio romano, o martírio de São
            Pantaleão, médico, o qual preso pela fé, por ordem do imperador
            Maximiano, foi atormentado no cavalete e queimado com tochas
            ardentes. Nos seus tormentos, Nosso Senhor o consolou,
            aparecendo-lhe; a espada pôs termo aos seus gloriosos combates.
            Sofreu martírio sob Diocleciano cerca do ano 303. São Pantaleão é
            colocado pelos Gregos no número dos grandes Mártires. Os médicos o
            honram, depois de S. Lucas, como principal padroeiro. É um dos «14
            santos auxiliares».
          </View>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>
          <View className="aside">Na Diocese do Porto</View>Ó Deus, que
          permitistes que o B. Pantaleão, vosso Mártir, sofresse vários
          tormentos e orasse pelos seus perseguidores, concedei-nos propício
          que, implorando o seu auxílio, sintamos o efeito da vossa
          misericórdia. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
