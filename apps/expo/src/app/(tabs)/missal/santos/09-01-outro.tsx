import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0901Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Doze Irmãos, Mártires, a 1 de Setembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/03-10">
              Missa de Os Quarenta Mártires
            </Link>{" "}
            , a 10 de Março, com a Oração, Secreta e Postcomúnio da [Comemoração
            dos S. S. Macabeus, Mártires](/missal/santos/08-01), a 1 de Agosto.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
