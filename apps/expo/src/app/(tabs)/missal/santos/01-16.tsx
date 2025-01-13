import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0116() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Marcelo, Papa e Mártir, a 16 de Janeiro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut beáti
              Marcélli Mártyris tui atque Pontíficis méritis adjuvémur, cujus
              passióne lætámur. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, dignai-Vos ouvir clementemente as preces do vosso povo, a
              fim de que sejamos auxiliados pelos méritos do B. Marcelo, vosso
              Pontífice e Mártir, cujo martírio festejamos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
