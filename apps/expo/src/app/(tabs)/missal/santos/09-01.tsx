import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0901() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Egídio (ou Gil), Abade, a 1 de Setembro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            . A Comemoração dos S. S. Doze Irmãos como na [Missa Comemoração dos
            S. S. Macabeus, Mártires](/missal/santos/08-01).
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
