import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./../pentecostes/pent3-0";

export default function PageCoracaojesus() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa do Santíssimo Coração de Jesus</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
