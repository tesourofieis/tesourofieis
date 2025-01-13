import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page1116() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gertrudes, Virgem, a 16 de Novembro</Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui in corde beátæ Gertrudis Vírginis jucúndam tibi
              mansionem præparásti: ipsíus méritis et intercessióne; cordis
              nostri máculas cleménter abstérge, et ejúsdem tríbue gaudére
              consórtio. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que para Vós preparastes uma morada agradável no coração
              da B. Virgem Gertrudes, atendendo aos seus méritos e intercessão,
              apagai misericordiosamente as máculas do nosso coração e
              concedei-nos o gozo da sua companhia. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
