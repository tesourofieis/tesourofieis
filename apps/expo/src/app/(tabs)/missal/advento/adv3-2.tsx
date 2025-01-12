import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./adv3-0";

export default function PageAdv32() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Terça-feira da 3ª semana do Advento</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
