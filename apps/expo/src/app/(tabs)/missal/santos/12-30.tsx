import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1230() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Sexto dia da Oitava do Natal, a 30 de Dezembro
          </Text>

          <Text className="aside">
            Intróito, Oração, Gradual, Ofertório, Comúnio e Postcomúnio como na
            <Link className="link" href="/missal/santos/12-25-2">
              Terceira Missa do Natal
            </Link>{" "}
            . Epístola e Evangelho como na{" "}
            <Link className="link" href="/missal/santos/12-25-1">
              Segunda Missa do Natal
            </Link>{" "}
            .
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
