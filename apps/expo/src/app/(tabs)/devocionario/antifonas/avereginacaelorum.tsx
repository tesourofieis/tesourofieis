import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAvereginacaelorum() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ave, Regína cælórum</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ave, Regína cælórum, Ave, Dómina Angelórum: Salve radix, salve
              porta, Ex qua mundo lux est orta: Gaude, Virgo gloriósa, Super
              omnes speciósa, Vale, o valde decóra, Et pro nobis Christum exóra.
            </Text>
            <Text className="text-base vernacular">
              Ave, ó Rainha dos Céus, Ave ó Senhora dos Anjos. Salve, ó rebento
              de Jessé, salve ó porta por onde veio ao mundo a luz salvadora.
              Exultai, ó Virgem gloriosa, de beleza sem igual. Eu Vos saúdo, ó
              formosura soberana, rogai a Cristo por nós.
            </Text>
            <Text className="text-base latin">
              ℣. Dignaré me laudáre te, Virgo sacráta.
            </Text>
            <Text className="text-base vernacular">
              ℣. Dignai-Vos aceitar, Senhora, os meus louvores.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Da mihi virtútem contra
              hostes tuos.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> E dai-me coragem para
              combater os vossos inimigos.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Concéde, miséricors Deus, fragilitáti nostræ præsídium; ut, qui
              sanctæ Dei Genetrícis memóriam ágimus; intercessiónis eíus
              auxílio, a nostris iniquitátibus resurgámus. Per eúmdem Christum
              Dóminum nóstrum.
            </Text>
            <Text className="text-base vernacular">
              Concedei, misericordioso Deus, proteção à nossa fragilidade; para,
              ao honrarmos a memória da Santa Mãe de Deus, com o auxílio de sua
              intercessão, ressurjamos de nossas iniquidades. Pelo mesmo Cristo,
              Senhor nosso.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
