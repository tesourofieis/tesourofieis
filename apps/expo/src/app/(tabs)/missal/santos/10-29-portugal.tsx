import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page1029Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasl. de Santa Isabel, Rainha, a 29 de Outubro
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/santos/07-04">
              Missa da Santa Isabel, Rainha de Portugal,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui largitor ómnium bonórum, qui hunc diem beátæ Elisabeth
              veneránda Translatióne illustrásti: quæsumus; ut ejus précibus et
              intercessióne, nos de terrénis ad consórtia tránsferas Beatórum.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, dispensador de todos os dons, que Vos dignastes ilustrar
              este dia com a veneranda Trasladação da B. Isabel, fazei, Vos
              suplicamos, que pelas suas preces e intercessão transitemos das
              coisas terrenas para a companhia dos bem-aventurados. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
