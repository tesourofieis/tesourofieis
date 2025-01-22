import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0411() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Leão I, Papa, Conf. e Doutor, a 11 de Abril
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
