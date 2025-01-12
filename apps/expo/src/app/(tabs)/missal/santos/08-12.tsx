import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/20virgemnaomartir1";

export default function Page0812() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Clara, Virgem, a 12 de Agosto</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
