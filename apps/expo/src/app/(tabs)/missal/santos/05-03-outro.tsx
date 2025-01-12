import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0503Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Alexandre, Papa e Mártir, a 3 de Maio</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
