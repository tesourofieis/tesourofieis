import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0208() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João da Mata, Conf., a 8 de Fevereiro</Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui per sanctum Joánnem órdinem sanctíssimæ Trinitatis, ad
              rediméndum de potestáte Saracenórum captívos, cœlitus institúere
              dignátus es: præsta, quǽsumus; ut, ejus suffragántibus méritis, a
              captivitáte córporis et ánimæ, te adjuvánte, liberémur. Per
              Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que por S. João Vos dignastes estabelecer miraculosamente
              a Ordem da Santíssima Trindade para remir os cativos detidos pelos
              Sarracenos fazei, Vos suplicamos, que, pelo sufrágio dos seus
              méritos, sejamos livres do cativeiro corporal e espiritual. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
