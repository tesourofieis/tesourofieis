import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0417() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Aniceto, Papa e Mártir, a 17 de Abril</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
