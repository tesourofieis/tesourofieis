import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0620() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Silvério, Papa e Mártir, a 20 de Junho</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
