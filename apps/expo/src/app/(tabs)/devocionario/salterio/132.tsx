import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page132() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 132</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce quam bonum et quam jucúndum, * habitáre fratres in unum:
            </Text>
            <Text className="text-base vernacular">
              O quão bom e quão jucundo é, * viverem os irmãos em união:
            </Text>
            <Text className="text-base latin">
              Sicut unguéntum in cápite, * quod descéndit in barbam, barbam
              Aaron,
            </Text>
            <Text className="text-base vernacular">
              Como unção na cabeça, * que desce sobre a barba de Arão,
            </Text>
            <Text className="text-base latin">
              Quod descéndit in oram vestiménti ejus: * sicut ros Hermon, qui
              descéndit in montem Sion.
            </Text>
            <Text className="text-base vernacular">
              Que desce até à orla do seu manto: * como o orvalho do Hermon, que
              desce sobre o monte Sião.
            </Text>
            <Text className="text-base latin">
              Quóniam illic mandávit Dóminus benedictiónem, * et vitam usque in
              sǽculum.
            </Text>
            <Text className="text-base vernacular">
              Porque o Senhor derramou ali a sua bênção, * e vida para sempre.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
