import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0512Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">B. Joana, Princesa, a 12 de Maio</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui inter regáles delicias, et mundi illécebras beátam
              Joánnam Vírginem tuam virtúte constántiæ roborásti: quæsumus; ut,
              ejus intercessióne fidéles tui terréna despiciant, et ad cæléstia
              semper aspirent. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que, no meio das delícias da corte e dos atractivos do
              mundo, fortalecestes com a virtude da constância a vossa B. Joana,
              permiti, Vos suplicamos, que pela sua intercessão os vossos fiéis
              desprezem os bens terrenos e aspirem sempre aos celestiais. Por
              nosso Senhor Jesus Cristo...
            </Text>
          </View>

          <Text className="h3">Oração Comemoração S. S. Mártires</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Semper nos, Dómine, Mártyrum tuórum Nérei, Achillei, Domitíllæ
              atque Pancrátii fóveat, quǽsumus, beáta sollémnitas: et tuo dignos
              reddat obséquio. Per Dóminium nostrum...
            </Text>
            <Text className="text-base vernacular">
              Fazei, Senhor, Vos suplicamos, que a feliz solenidade dos vossos
              Mártires Néreo, Aquiles, Domitila e Pancrácio nos reanime e nos
              torne dignos de Vos servirmos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta Comemoração S. S. Mártires</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctórum Martyrum tuórum, quǽsumus. Dómine, Nérei, Achíllei,
              Domitíllæ atque Pancrátii sit tibi grata conféssio: quæ et múnera
              nostra comméndet, et tuam nobis indulgéntiam semper implóret. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Dignai-Vos receber, Senhor, com ânimo agradável a confissão dos
              vossos Santos Mártires Néreo, Aquiles, Domitila e Pancrácio; e que
              ela Vos disponha a aceitardes as nossas ofertas e elas nos tornem
              sempre merecedores da vossa indulgência. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio Comemoração S. S. Mártires</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, Dómine: ut beatórum Mártyrum tuórum Nérei, Achíllei,
              Domitíllæ atque Pancrátii deprecatiónibus, sacraménta sancta, quæ
              súmpsimus, ad tuæ nobis profíciant placatiónis augméntum. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Vos pedimos, Senhor, fazei que pelas preces dos vossos Mártires
              Néreo, Aquiles, Domitila e Pancrácio os sagrados mystérios, que
              recebemos, Vos tornem cada vez mais propício para connosco. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
