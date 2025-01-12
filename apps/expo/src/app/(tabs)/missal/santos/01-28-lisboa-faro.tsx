import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0128LisboaFaro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Sétimo dia dentro da Oitava de S. Vicente, Mártir, a 28 de Janeiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/01-22-lisboa-faro">
              Missa de Festa
            </Link>{" "}
            , e comemoração de Santa Inês:
          </View>

          <Text className="h3">Oração Comemoração Santa Inês</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui nos ánnua beátæ Agnetis Vírginis et Martyris tuæ
              sollemnitáte lætíficas: da, quǽsumus; ut, quam venerámur officio,
              étiam piæ conversatiónis sequámur exémplo. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que nos alegrais com a solenidade anual da B. Inês, vossa
              Virgem e Mártir, concedei-nos a graça, Vos suplicamos, de imitar
              os exemplos daquela cuja festa celebramos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta Comemoração Santa Inês</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Super has, quǽsumus, Dómine, hóstias benedíctio copiósa descéndat:
              quæ et sanctificatiónem nobis cleménter operétur, et de Mártyrum
              nos sollemnitáte lætíficet. Per Dóminum...
            </Text>
            <Text className="text-base">
              Que estas hóstias, Senhor, que Vos oferecemos façam descer sobre
              nós uma bênção abundante, a qual produza em nós por vossa
              clemência nossa santificação e nos alegre com a solenidade dos
              vossos Mártires. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio Comemoração Santa Inês</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Súmpsimus, Dómine, celebritátis ánnuæ votiva sacraménta: præsta,
              quǽsumus; ut et temporális vitæ nobis remédia prǽbeant et ætérnæ.
              Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, havendo recebido os sacramentos que Vos são oferecidos
              nesta festa anual, concedei-nos, Vos suplicamos, que eles nos
              alcancem os remédios para a vida presente e para a eterna. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
