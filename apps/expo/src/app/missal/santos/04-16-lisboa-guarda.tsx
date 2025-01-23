import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0416LisboaGuarda() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Engrácia, Virgem e Mártir, a 16 de Abril
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Loquébar
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>Ó Deus omnipotente e sempiterno, que
          escolheis os fracos do mundo para com eles confundirdes os poderosos,
          a nós, que celebramos esta solenidade em honra da B. Engrácia, vossa
          Virgem e Mártir, concedei propício que junto de Vós sintamos o seu
          patrocínio. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
