import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page23Muitasmartiresnaovirgens() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Muitas Mártires não Virgens</Text>

          <View className="aside">
            Como a{" "}
            <Link className="link" href="/missal/comum/22martiresnaovirgens">
              Missa Me exspectavérunt
            </Link>{" "}
            , excepto o seguinte:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Mártyrum tuárum{" "}
              <Text className="text-red-500">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> palmas incessábili
              devotióne venerári: ut, quas digna mente non póssumus celebráre,
              humílibus saltem frequentémus obséquiis. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ó Senhor, nosso Deus, dignai-Vos conceder-nos a graça de
              incessantemente venerarmos com devoção a vitória das vossas santas
              Mártires <Text className="text-red-500">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, a fim de que, já que não
              podemos celebrar dignamente os seus méritos, possamos, ao menos,
              oferecer-lhes as nossas humildes homenagens. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum
              Mártyrum tuárum <Text className="text-red-500">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> festivitáte propósita:
              ut, sicut per hæc beáta mystéria illis glóriam contulísti; ita
              nobis indulgéntiam largiáris. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, dignai-Vos volver os olhares para estas ofertas, que
              depositamos nos vossos altares para comemorar a festa das vossas
              santas Mártires <Text className="text-red-500">N.</Text> e
              <Text className="text-red-500">N.</Text>, a fim de que, assim como
              lhes concedestes a glória, assim também nos concedais o perdão dos
              nossos pecados. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Præsta nobis, quǽsumus, Dómine, intercedéntibus sanctis Martýribus
              tuis <Text className="text-red-500">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text>: ut, quod ore
              contíngimus, pura mente capiámus. Per Dóminum...
            </Text>
            <Text className="text-base">
              Concedei-nos, Senhor, Vos suplicamos, que, por intercessão das
              vossas santas Mártires <Text className="text-red-500">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, guardemos com o coração
              puro o que a nossa boca acaba de receber. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
