import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0530() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Félix, Papa e Mártir, a 30 de Maio</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
