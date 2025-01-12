import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0123() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Raimundo de Penhafort, a 23 de Janeiro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui beátum Raymúndum pœniténtiæ sacraménti insígnem
              minístrum elegísti, et per maris undas mirabíliter traduxísti:
              concéde; ut ejus intercessióne dignos pœniténtiæ fructus fácere,
              et ad ætérnæ salútis portum perveníre valeámus. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que Vos dignastes escolher o B. Raimundo para o tornar em
              um insigne ministro do sacramento da penitência e que
              milagrosamente o fizestes atravessar as águas do mar, concedei-nos
              que por sua intercessão «façamos frutos dignos de penitência» e
              possamos chegar ao porto da salvação eterna. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
