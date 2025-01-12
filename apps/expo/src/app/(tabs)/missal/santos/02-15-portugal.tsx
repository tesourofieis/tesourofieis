import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0215Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. António de Lisboa, a 15 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/06-13">
              Missa de Santo António de Lisboa
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Sancti Confessórisóris tui Antónii tribue nos, Dómine,
              intercessióne adjuvári: ut cujus Translatiónem ánnua celebitáte
              recólimus; ejus apud te précibus et méritis, post hujus vitæ
              exsílium, ad consórtium transférri merámur Beatórum. Per
              Dóminum...
            </Text>
            <Text className="text-base">
              Concedei-nos, Senhor, que sejamos auxiliados pela intercessão do
              vosso Santo Confessor António, a fim de que, celebrando anualmente
              a sua Trasladação, por suas preces e méritos junto de Vós,
              mereçamos ser levados, após o exílio desta vida, ao consórcio dos
              bem-aventurados. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
