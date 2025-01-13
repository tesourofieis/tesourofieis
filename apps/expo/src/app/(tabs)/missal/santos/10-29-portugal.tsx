import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1029Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasl. de Santa Isabel, Rainha, a 29 de Outubro
          </Text>

          <View className="aside">
            Como na [Missa da Santa Isabel, Rainha de
            Portugal](/missal/santos/07-04), excepto:
          </View>

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
