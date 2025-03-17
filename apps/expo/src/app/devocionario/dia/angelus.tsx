import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "expo-image";

import React from "react";
import Language from "~/components/Language";

export default function PageAngelus() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Angelus</Text>

          <Image
            source={require("../../../../assets/images/angelus.jpg")}
            contentFit="contain"
            style={{ height: 400 }}
          />

          <Text className="aside">
            Desde a Santíssima Trindade até à Páscoa. No tempo Pascal
            substitui-se o Angelus pela{" "}
            <Link className="link" href="/devocionario/antifonas/reginacaeli">
              Regina Caeli
            </Link>{" "}
            .
          </Text>

          <Language>
            <Text className="latin">Angelus Dómini nuntiávit Maríæ.</Text>
            <Text className="vernacular">
              O Anjo do Senhor anunciou a Maria.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et concépit de Spíritu
              Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E Ela concebeu do Espírito
              Santo.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ave, María, grátia plena,
              Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus
              ventris tui, Jesus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ave, Maria, Cheia de graça,
              o Senhor é convosco; bendita sois Vós entre as mulheres, e bendito
              é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Ecce ancílla Dómini.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Eis a escrava do Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Fiat mihi secúndum verbum
              tuum.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Faça-se em mim segundo a
              vossa Palavra.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ave, María, grátia plena,
              Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus
              ventris tui, Jesus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ave, Maria, Cheia de graça,
              o Senhor é convosco; bendita sois Vós entre as mulheres, e bendito
              é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Et Verbum caro factum est.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E o Verbo divino encarnou.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et habitávit in nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E habitou no meio de nós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ave, María, grátia plena,
              Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus
              ventris tui, Jesus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ave, Maria, Cheia de graça,
              o Senhor é convosco; bendita sois Vós entre as mulheres, e bendito
              é o fruto do vosso ventre, Jesus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ora pro nobis, sancta Dei
              Génetríx.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Rogai por nós Santa Mãe de
              Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut digni efficiámur
              promissionibus Christi.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Para que sejamos dignos das
              promessas de Cristo.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui,
              Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per
              passiónem ejus et crucem ad resurrectiónis glóriam perducámur. Per
              eumdem Christum, Dóminum nostrum.{" "}
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              Infundi, Senhor, Vos suplicamos, a vossa graça em nossas almas,
              para que nós, que pela anunciação do Anjo conhecemos a Incarnação
              do vosso Filho, sejamos conduzidos à glória da ressurreição pela
              sua Paixão e Cruz. Pelo mesmo Jesus Cristo Senhor Nosso.{" "}
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
