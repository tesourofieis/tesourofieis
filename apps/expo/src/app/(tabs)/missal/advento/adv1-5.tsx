import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./adv1-0";

export default function PageAdv15() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Sexta-feira da 1ª semana do Advento</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
