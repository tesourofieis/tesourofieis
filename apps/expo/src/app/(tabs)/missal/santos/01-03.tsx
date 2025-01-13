import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0103() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Oitava de S. João, Apóstolo e Evangelista, a 3 de Janeiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/12-27">
              Missa S. João, Apóstolo e Evangelista
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
