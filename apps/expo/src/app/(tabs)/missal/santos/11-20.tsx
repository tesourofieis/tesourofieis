import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page1120() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Félix de Valois, Conf., a 20 de Novembro
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Felicem Confessórem tuum ex eremo ad munus
              rediméndi captívos cœlitus vocáre dignátus es: præsta, quǽsumus;
              ut per grátiam tuam ex peccatórum nostrórum captivitáte, ejus
              intercessióne, liberáti, ad cœléstem pátriam perducámur. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que, de um modo celestial, ao B. Félix, vosso Confessor,
              Vos dignastes chamar da solidão do deserto para a missão de remir
              os cativos, concedei-nos, Vos rogamos, que, sendo nós pela sua
              intercessão e pela vossa graça, livres do cativeiro dos nosso
              pecados, alcancemos a pátria celestial. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
