import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1019() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Pedro de Alcântara, Conf., a 19 de Outubro
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Petrum Confessórem tuum admirábilis pœniténtiæ et
              altíssimæ contemplatiónis múnere illustráre dignátus es: da nobis,
              quǽsumus; ut, ejus suffragántibus méritis, carne mortificáti,
              facílius cœléstia capiámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que Vos dignastes ilustrar o B. Pedro, Confessor, com os
              dons de uma penitência e de uma contemplação sublimes, permiti,
              Vos suplicamos, que, auxiliados com seus méritos e intercessão e
              mortificando o nosso corpo, obtenhamos mais facilmente os bens
              celestiais. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/01-15-1#epístola"
            title="S. Paulo, 1.º Eremita, Conf."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
