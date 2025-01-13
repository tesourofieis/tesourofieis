import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0228() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de
            Fevereiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/08-28">
              Missa na festa
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h2">Oração</Text>

          <Text className="h2">Secreta</Text>

          <Text className="h2">Postcomúnio</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
