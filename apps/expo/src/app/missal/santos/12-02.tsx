import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page1202() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Bibiana, Virgem e Mártir, a 2 de Dezembro
          </Text>

          <Text className="comment">
            Santa Bibiana, nascida em Roma, de família nobre e cristã, uniu, diz
            a Oração, à palma do martírio a flor da virgindade. Virgem sábia e
            prudente (Grad.) receou menos a confiscação de todos os bens e as
            angústias da prisão do que a perda desse tesouro escondido ou pérola
            de preço de que fala o Evangelho. Acariciada e adulada pela
            carcereira Rufina que procurou pervertê-la, invocou o Senhor e
            livrou-se da perdição (Ep.). Rufina, então, recorreu à violência,
            mas sem sucesso; à vista do que, o governador de Roma, irado, mandou
            atar Bibiana a uma coluna e açoitá-la até à morte com chicotes
            guarnecidos de chumbo. Sobre o seu túmulo foi construída a basilica
            de Santa Maria-Maior.
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/18virgensmartires2">
              Missa Me exspectavérunt
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, ómnium largítor bonórum, qui in fámula tua Bibiána cum
              virginitátis flore martýrii palmam conjunxísti: mentes nostras
              ejus intercessióne tibi caritáte conjúnge; ut, amótis perículis,
              prǽmia consequámur ætérna. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, dispensador de todos os bens, que unistes a flor da
              virgindade à palma do martírio na pessoa de vossa serva Bibiana,
              dignai-Vos por sua intercessão unir pela caridade as nossas almas
              convosco, a fim de que, afastados todos os perigos, alcancemos os
              prémios eternos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
