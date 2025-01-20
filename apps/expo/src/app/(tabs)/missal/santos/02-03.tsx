import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/3martirpontifice";

export default function Page0203() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Brás, B. e Márt., a 3 de Fevereiro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
