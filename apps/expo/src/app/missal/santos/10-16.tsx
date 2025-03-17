import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page1016() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santa Hedviges, Viúva, a 16 de Outubro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
              Missa Cognóvi, Dómine
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui beátam Hedwígem a sǽculi pompa ad húmilem tuæ Crucis
              sequélam toto corde transíre docuísti: concéde; ut ejus méritis et
              exémplo discámus peritúras mundi calcáre delícias, et in ampléxu
              tuæ Crucis ómnia nobis adversántia superáre: Qui vivis...
            </Text>
            <Text className="vernacular">
              Ó Deus, que inspirastes a B. Hedviges a deixar as pompas do mundo
              para abraçar com fervor a humildade da vossa Cruz, concedei-nos
              pelos seus méritos e exemplos que aprendamos a esmagar as delícias
              caducas deste mundo e, abraçando a vossa Cruz, a vencer todas as
              adversidades. Ó Vós, que viveis e reinais...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
