import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1023() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. António Maria Claret, B. e Conf., a 23 de Outubro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/12confessorespontifices2"
            >
              Missa Sacerdótes tui
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Antónium Maríam Confessórem tuum atque
              Pontíficem, apostólicis virtútibus sublimásti, et per eum novas in
              Ecclésia clericórum ac vírginum famílias collegísti: concéde,
              quǽsumus; ut, eius dirigéntibus mónitis ac suffragántibus méritis,
              animárum salútem quǽrere iúgiter studeámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que embelezastes o B. António Maria, vosso Confessor e
              Pontífice, com as virtudes apostólicas, e por ele fundastes na
              vossa Igreja novas congregações de clérigos e de virgens,
              concedei-nos, Vos suplicamos, que, esclarecidos com seus salutares
              conselhos e confortados com seus exemplos, consigamos com
              felicidade unirmo-nos convosco. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
