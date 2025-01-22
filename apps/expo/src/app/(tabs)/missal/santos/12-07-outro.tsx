import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1207() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Vigilia Imaculada Conceição da SS. Virgem</Text>

          <Text className="comment">
            Uma novena de preces prepara ordinariamente as almas à grande festa
            de amanhã, cuja vigilia Leão XIII, em 1879, estendeu a toda a
            Igreja. Peçamos neste dia à Imaculada que se digne purificar mais os
            nossos corações, para a solenidade de amanhã (Or.).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
