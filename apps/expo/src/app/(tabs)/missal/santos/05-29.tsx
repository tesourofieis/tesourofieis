import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0529() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Maria Madalena de Pazzi, Virgem, a 29 de Maio
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, vrginitátis amátor, qui beátam Maríam Magdalénam Vírginem,
              tuo amóre succénsam, cœléstibus donis decorásti: da; ut, quam
              festíva celebritáte venerámur, puritáte et caritáte imitémur. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que amais a virgindade e ornastes com dons celestiais a B.
              Maria Madalena, vossa Virgem, cujo coração estava abrasado em amor
              por Vós, concedei-nos que, honrando-a nós com a celebração desta
              festa, a imitemos também na sua pureza e caridade. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
