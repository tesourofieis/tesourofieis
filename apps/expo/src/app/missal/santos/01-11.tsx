import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0111() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Higino, Papa e Mártir, a 11 de Janeiro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
