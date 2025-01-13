import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0809() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João Maria Vianney, a 8 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens et miséricors Deus, qui sanctum Joánnem Maríam
              pastoráli stúdio et jugi oratiónis ac pœniténtiæ ardóre mirábilem
              effecísti: da, quǽsumus; ut, ejus exémplo et intercessióne, ánimas
              fratrum lucrári Christo, et cum eis ætérnam glóriam cónsequi
              valeámus. Per eúndem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Omnipotente e misericordioso Deus, que, pelo seu zelo pastoral e
              pelo seu ardor na oração e na penitência, tornastes admirável o B.
              João Maria, concedei-nos, Vos suplicamos, que, seguindo o seu
              exemplo e pela sua intercessão, possamos conquistar para Cristo as
              almas dos nossos irmãos e com eles alcançar a glória eterna. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
