import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1119() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santa Isabel, Viúva, a 19 de Novembro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
              Missa Cognóvi, Dómine
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Tuórum corda fidélium, Deus miserátor, illústra: et, beátæ
              Elisabeth précibus gloriósis; fac nos próspera mundi despícere, et
              cœlésti semper consolatióne gaudére. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus de misericórdia, esclarecei os corações dos vossos fiéis;
              e, pelas gloriosas preces da B. Isabel, concedei-nos a graça de
              desprezarmos as prosperidades deste mundo e de gozarmos
              perpetuamente a consolação celestial. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
