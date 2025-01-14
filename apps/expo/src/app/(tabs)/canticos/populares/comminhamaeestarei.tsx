import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageComminhamaeestarei() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Com minha Mãe estarei</Text>

          <View className="not-content">
            <Text className="text-base">
              Com minha Mãe estarei na santa glória um dia; junto à Virgem
              Maria, no Céu triunfarei.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Refrão: No Céu, no Céu, com minha Mãe estarei. (2x)
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Com minha Mãe estarei; mas já que hei ofendido a seu Jesus
              querido, as culpas chorarei.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
