import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page19Muitasvirgensmartires() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Muitas Virgens Mártires</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/18virgensmartires2">
              Missa Me exspectavérunt
            </Link>{" "}
            , excepto o seguinte:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Vírginum et
              Mártyrum tuárum <Text className="latin">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> palmas incessábili
              devotióne venerári: ut, quas digna mente non póssumus celebráre,
              humílibus saltem frequentémus obséquiis. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Senhor, nosso Deus, dignai-Vos conceder-nos a graça de
              incessantemente venerarmos com devoção a vitória das vossas santas
              Virgens e Mártires <Text className="vernacular">N.</Text>e{" "}
              <Text className="text-red-500">N.</Text>, a fim de que, já que não
              podemos celebrar dignamente os seus méritos, ao menos possamos
              oferecer-lhes as nossas humildes homenagens. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            title="Epístola Virgens Mártires"
            href="/missal/comum/21virgemnaomartir2#epístola"
          />

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum
              Vírginum et Mártyrum tuárum <Text className="latin">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> festivitáte propósita:
              ut, sicut per hæc beáta mystéria illis glóriam contulísti; ita
              nobis indulgéntiam largiáris. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, dignai-Vos volver os vossos olhares para estas ofertas que
              depositamos nos vossos altares para celebrar a festa das vossas
              santas Virgens e Mártires <Text className="vernacular">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, a fim de que, assim como
              lhes concedestes a glória, assim também nos concedais o perdão dos
              nossos pecados. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Præsta nobis, quǽsumus, Dómine, intercedéntibus sanctis Virgínibus
              et Martýribus tuis <Text className="latin">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text>: ut, quod ore
              contíngimus, pura mente capiámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, Senhor, Vos suplicamos, que, por intercessão das
              vossas santas Virgens e Mártires{" "}
              <Text className="vernacular">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, guardemos com o coração
              puro o que nossa boca acaba de receber. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
