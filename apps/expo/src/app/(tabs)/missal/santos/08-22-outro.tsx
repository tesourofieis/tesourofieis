import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0822Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Timóteo e Outros, Mártires, a 22 de Agosto
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Aixílium tuum nobis, Dómine, quǽsumus, placátus impende: et,
              intercedéntibus beátis Martýribus tuis Timótheo, Hippolýto et
              Symphoriáno, déxteram super nos tuæ propitiatiónis exténde. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Deixai-Vos aplacar, Senhor, e concedei-nos o vosso auxílio; e pela
              intercessão dos vossos B. B. Mártires Timóteo, Hipólito e
              Sinforiano dignai-Vos amparar-nos com vossa mão propícia. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre
              Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit
              auxílium. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Aceitai, Senhor, esta oferta, que o vosso povo escolhido oferece
              em honra dos vossos Santos, por cujos méritos reconhece ter
              alcançado auxílio na tribulação. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Divíni muneris largitate satiáti, quǽsumus, Dómine, Deus noster:
              ut, intercedéntibus sanctis Martýribus tuis Timótheo, Hippolýto et
              Symphoriáno, in ejus semper participatióne vivámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Saciados abundantemente com o dom divino, ó Senhor, nosso Deus,
              Vos suplicamos, fazei, pela intercessão dos vossos Santos Mártires
              Timóteo, Hipólito e Sinforiano, que participemos sempre dele
              durante toda nossa vida. Por nosso...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
