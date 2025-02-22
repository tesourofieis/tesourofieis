import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0606() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Norberto, B e Conf., a 6 de Junho</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/11confessorespontifices1"
            >
              Missa Státuit ei
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui beátum Norbértum Confessórem tuum atque Pontíficem verbi
              tui præcónem exímium effecísti, et per eum Ecclésiam tuam nova
              prole fœcundásti: præsta, quǽsumus; ut, ejúsdem suffragántibus
              méritis, quod ore simul et ópere dócuit, te adjuvánte, exercére
              valeámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que dispusestes que o B. Norberto, vosso Confessor e
              Pontífice, fosse exímio pregador da vossa palavra, e que por ele
              destes à vossa Igreja uma nova família, concedei-nos, Vos
              imploramos, que, auxiliados com seus méritos, possamos com vossa
              assistência pôr em prática tudo quanto ensinou com suas palavras e
              acções. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
