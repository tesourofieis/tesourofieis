import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/14confessoresnaopontifices1";

export default function Page0817() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Jacinto, Conf., a 17 de Agosto</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
