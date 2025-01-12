import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0129() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Francisco de Sales, B. C. e Doutor, a 29 de Janeiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui ad animárum salútem beátum Francíscum Confessórem tuum
              atque Pontíficem ómnibus ómnium factum esse voluísti: concéde
              propítius; ut, caritátis tuæ dulcédine perfúsi, ejus dirigéntibus
              mónitis ac suffragántibus méritis, ætérna gáudia consequámur. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ó Deus, que para a salvação das almas quisestes que o B.
              Francisco, vosso Confessor e Pontífice, se fizesse tudo para
              todos, concedei-nos benigno que, cheios da doçura do vosso amor,
              guiados pelos seus conselhos e protegidos pelos seus merecimentos,
              alcancemos as alegrias eternas. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
