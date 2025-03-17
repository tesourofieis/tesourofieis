import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page132() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 132</Text>

          <Language>
            <Text className="latin">
              Ecce quam bonum et quam jucúndum, * habitáre fratres in unum:
            </Text>
            <Text className="vernacular">
              O quão bom e quão jucundo é, * viverem os irmãos em união:
            </Text>
            <Text className="latin">
              Sicut unguéntum in cápite, * quod descéndit in barbam, barbam
              Aaron,
            </Text>
            <Text className="vernacular">
              Como unção na cabeça, * que desce sobre a barba de Arão,
            </Text>
            <Text className="latin">
              Quod descéndit in oram vestiménti ejus: * sicut ros Hermon, qui
              descéndit in montem Sion.
            </Text>
            <Text className="vernacular">
              Que desce até à orla do seu manto: * como o orvalho do Hermon, que
              desce sobre o monte Sião.
            </Text>
            <Text className="latin">
              Quóniam illic mandávit Dóminus benedictiónem, * et vitam usque in
              sǽculum.
            </Text>
            <Text className="vernacular">
              Porque o Senhor derramou ali a sua bênção, * e vida para sempre.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
