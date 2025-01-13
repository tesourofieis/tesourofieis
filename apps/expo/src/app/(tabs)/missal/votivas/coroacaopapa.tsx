import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageCoroacaopapa() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            No dia da Coroação do Sumo Pontífice e Aniversário da Coroação
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/02-22">
              Missa da Cadeira de S. Pedro em Roma
            </Link>{" "}
            , excepto: Oração, Secreta e Postcomúnio como na
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me.
            </Link>{" "}
            No Tempo Pascal, em vez do Gradual e do Trato, diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 106, 8</Text> Confitébitur
              Dómino misericórdiæ ejus, et mirabília ejus fíliis hóminum.
              Allelúja. ℣. <Text className="em">Matth. 16, 18</Text> Tu es
              Petrus, et super hanc petram ædificábo Ecclésiam meam. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 106, 8</Text> Seja o
              Senhor glorificado por causa da misericórdia e das maravilhas que
              praticou em favor dos homens. Aleluia. ℣.{" "}
              <Text className="em">Mt. 16, 18</Text> Tu és Pedro, e sobre esta
              pedra edificarei a minha Igreja.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
