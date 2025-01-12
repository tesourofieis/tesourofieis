import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0215() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Faustino e Jovita, Mártires, a 15 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Secreta e Postcomúnio</Text>

          <LinkCard
            href="/missal/comum/6muitosmartires1#secreta"
            title="Muitos Mártires - Missa Intret in"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
