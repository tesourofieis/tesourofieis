import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0117() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. António, Abade, a 17 de Janeiro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
            title="Confessores não Pontífices - Missa Os justi"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
