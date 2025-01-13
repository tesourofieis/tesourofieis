import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1013() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Eduardo, Conf., a 13 de Outubro</Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis
              glória coronásti: fac nos, quǽsumus; ita eum venerári in terris,
              ut cum eo regnáre póssimus in cœlis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que coroastes com a glória eterna o B. Rei Eduardo, vosso
              Confessor, fazei, Vos suplicamos, que o veneremos de tal modo na
              terra que com ele possamos reinar no céu. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
