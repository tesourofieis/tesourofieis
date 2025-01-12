import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAngelus() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Angelus</Text>

          <View className="aside">
            Desde a Santíssima Trindade até à Páscoa. No tempo Pascal
            substitui-se o Angelus pela{" "}
            <Link className="link" href="/devocionario/antifonas/reginacaeli">
              Regina Caeli
            </Link>{" "}
            .
          </View>

          <View className="side-by-side">
            <Text className="text-base">Angelus Dómini nuntiávit Maríæ.</Text>
            <Text className="text-base">
              O Anjo do Senhor anunciou a Maria.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et concépit de Spíritu
              Sancto.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E Ela concebeu do
              Espírito Santo.
            </Text>
            <Text className="text-base">
              ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
              muliéribus, et benedíctus fructus ventris tui, Jesus.
            </Text>
            <Text className="text-base">
              ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois
              Vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="text-base">℣. Ecce ancílla Dómini.</Text>
            <Text className="text-base">℣. Eis a escrava do Senhor.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Fiat mihi secúndum verbum
              tuum.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Faça-se em mim segundo a
              vossa Palavra.
            </Text>
            <Text className="text-base">
              ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
              muliéribus, et benedíctus fructus ventris tui, Jesus.
            </Text>
            <Text className="text-base">
              ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois
              Vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="text-base">℣. Et Verbum caro factum est.</Text>
            <Text className="text-base">℣. E o Verbo divino encarnou.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et habitávit in nobis.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E habitou no meio de nós.
            </Text>
            <Text className="text-base">
              ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
              muliéribus, et benedíctus fructus ventris tui, Jesus.
            </Text>
            <Text className="text-base">
              ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois
              Vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="text-base">
              ℣. Ora pro nobis, sancta Dei Génetríx.
            </Text>
            <Text className="text-base">
              ℣. Rogai por nós Santa Mãe de Deus.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Ut digni efficiámur
              promissionibus Christi.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Para que sejamos dignos
              das promessas de Cristo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500 text-center">Orémus.</Text>
            </Text>
            <Text className="text-base">
              <Text className="text-red-500 text-center">Oremos.</Text>
            </Text>
            <Text className="text-base">
              Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui,
              Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per
              passiónem ejus et crucem ad resurrectiónis glóriam perducámur. Per
              eumdem Christum, Dóminum nostrum.{" "}
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              Infundi, Senhor, Vos suplicamos, a vossa graça em nossas almas,
              para que nós, que pela anunciação do Anjo conhecemos a Incarnação
              do vosso Filho, sejamos conduzidos à glória da ressurreição pela
              sua Paixão e Cruz. Pelo mesmo Jesus Cristo Senhor Nosso.{" "}
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
