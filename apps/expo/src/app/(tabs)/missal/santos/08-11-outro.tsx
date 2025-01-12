import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./../comum/17virgensmartires1";

export default function Page0811Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Filomena, Virgem e Mártir, a 11 de Agosto
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
