import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageLentaecalma() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Lenta e calma sobre a terra</Text>

          <View className="not-content">
            <Text className="text-base">
              Lenta e calma sobre a terra desce a noite, vai-se a luz, Quero
              agora despedir-me, boa noite meu Jesus.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              E vós ó Virgem Maria, dai-nos a bênção também velai por nós esta
              noite, Boa noite minha Mãe.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
