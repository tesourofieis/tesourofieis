import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./adv4-0";

export default function PageAdv43() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Quarta-feira da 4ª semana do Advento</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
