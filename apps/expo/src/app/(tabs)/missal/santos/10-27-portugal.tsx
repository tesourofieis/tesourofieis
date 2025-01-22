import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1027Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gonçalo de Lagos, a 27 de Outubro</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, virtútem, qui beátum Gundisálvum Confessórem tuum ánimi
              demissióne, morum candóre, ac singuláre caritáte mirábilem
              effecísti: concéde, quæsumus; ut ejus exémpla imitántes in terris,
              coronári cum ipso merámur in cælis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus das virtudes, que tornastes admirável na humildade de
              espírito, na candura de Costumes e na singular caridade o B.
              Gonçalo, vosso Confessor, concedei-nos, Vos imploramos, que,
              Imitando seus exemplos na terra, mereçamos com ele ser coroados
              nos céus. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
