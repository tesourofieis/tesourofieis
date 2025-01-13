import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0919() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Januário e Outros, Mártires, a 19 de Setembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/8muitosmartires3#evangelho2"
            title="Muitos Mártires - Missa Salus autem"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
