import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1005() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Plácido e Comps. Mártires, a 5 de Outubro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto
            <Link className="link" href="/missal/comum/7muitosmartires2#oração">
              Oração
            </Link>{" "}
            ,
            <Link
              className="link"
              href="/missal/comum/7muitosmartires2#secreta"
            >
              Secreta
            </Link>{" "}
            e
            <Link
              className="link"
              href="/missal/comum/7muitosmartires2#postcomúnio"
            >
              Postcomúnio
            </Link>{" "}
            da [Missa Sapiéntiam sanctórum](/missal/comum/7muitosmartires2).
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
