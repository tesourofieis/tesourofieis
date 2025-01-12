import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/16abades";

export default function Page1205() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Sabas, Abade, a 5 de Dezembro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
