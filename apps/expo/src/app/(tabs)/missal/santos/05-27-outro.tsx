import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0527Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João, Papa e Mártir, a 27 de Maio</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
