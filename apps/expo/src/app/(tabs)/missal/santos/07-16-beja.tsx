import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0716Beja() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Sisenando, Mártir, a 16 de Julho, Na Diocese de Beja
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/4martirnaopontifice1">
              Missa In virtúte tua
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>Ó omnipotente Deus, que ao B. Levita
          Sisenando destes coragem para abraçar e vencer o próprio martírio,
          concedei-nos, Vos pedimos, que virilmente abracemos o estreito caminho
          da salvação. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
