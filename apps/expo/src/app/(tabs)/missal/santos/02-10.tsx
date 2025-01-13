import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0210() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Escolástica, Virgem, a 10 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui ánimam beátæ Vírginis tuæ Scholásticæ ad ostendéndam
              innocéntiæ viam in colúmbæ spécie cœlum penetráre fecísti: da
              nobis ejus méritis et précibus ita innocénter vívere; ut ad ætérna
              mereámur gáudia perveníre. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que para mostrar a vida inocente da vossa B. Virgem
              Escolástica fizestes entrar no céu a sua alma sob a figura de uma
              pomba, concedei-nos pelos seus méritos e preces que vivamos com
              tanta inocência que mereçamos alcançar os gozos eternos. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
