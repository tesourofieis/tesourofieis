import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0215Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. António de Lisboa, a 15 de Fevereiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/06-13">
              Missa de Santo António de Lisboa
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Sancti Confessórisóris tui Antónii tribue nos, Dómine,
              intercessióne adjuvári: ut cujus Translatiónem ánnua celebitáte
              recólimus; ejus apud te précibus et méritis, post hujus vitæ
              exsílium, ad consórtium transférri merámur Beatórum. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, Senhor, que sejamos auxiliados pela intercessão do
              vosso Santo Confessor António, a fim de que, celebrando anualmente
              a sua Trasladação, por suas preces e méritos junto de Vós,
              mereçamos ser levados, após o exílio desta vida, ao consórcio dos
              bem-aventurados. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
