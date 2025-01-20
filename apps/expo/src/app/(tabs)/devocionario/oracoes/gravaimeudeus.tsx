import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageGravaimeudeus() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Gravai, ó meu Deus</Text>
          <Text className="text-base">
            Gravai, ó meu Deus, a vossa lei no fundo do meu coração, fazei-me
            conhecer os vossos santos mandamentos, e dai-me a graça de os amar e
            a força de os praticar.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
