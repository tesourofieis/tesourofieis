import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/16abades";

export default function Page0115Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Amaro, Abade, a 15 de Janeiro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
