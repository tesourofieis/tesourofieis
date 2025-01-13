import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/18virgensmartires2";

export default function Page0720Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Margarida, Virgem e Mártir, a 20 de Julho
          </Text>

          <Text className="aside">
            Instruida, pela ama, na religião cristã, Margarida pereceu pela
            espada durante a última perseguição geral, em Antioquia da Pisídia,
            cerca de 255 a 275. Seu culto passou do Oriente ao Ocidente no tempo
            das Cruzadas. É sobretudo invocada pelas senhoras prestes a serem
            mães, e está na lista dos Quatorze Santos Auxiliares.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
