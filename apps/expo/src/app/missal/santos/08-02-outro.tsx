import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0802Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Estêvão I, Papa e Mártir, a 2 de Agosto</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
