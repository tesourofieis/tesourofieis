import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0114Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Félix, Presb. e Márt., a 14 de Janeiro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Concéde, quǽsumus, quaténus, quorum sollémnia ágimus, étiam actus
              imitémur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, ó omnipotente Deus, que os exemplos dos vossos
              Santos nos incitem a uma vida melhor, de que modo que imitemos
              também as acções daquele cuja solenidade celebramos. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hóstias tibi, Dómine, beáti Félicis Mártyris tui dicátas méritis,
              benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aceitai benignamente, Senhor, as hóstias que Vos oferecemos em
              honra dos méritos do B. Félix, vosso Mártir, e permiti que nos
              alcancem o vosso perpétuo auxílio. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, Dómine, salutáribus repléti mystériis: ut, beáti Félicis
              Mártyris tui, cujus sollémnia celebrámus, oratiónibus adjuvémur.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Havendo sido saciados com os salutares dons, dignai-Vos
              conceder-nos, Senhor, que sejamos auxiliados pelas orações do
              vosso B. Mártir Félix, cuja solenidade celebrámos. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
