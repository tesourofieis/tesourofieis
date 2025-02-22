import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1108() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Os Quatro S. S. Mártires Coroados, a 8 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Mártyres
              fortes in sua confessióne cognóvimus, pios apud te in nostra
              intercessióne sentiámus. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Reconhecendo nós, ó Deus omnipotente, a fortaleza dos vossos
              gloriosos Mártires na confissão da fé, fazei, Vos suplicamos, que
              sintamos junto de Vós a sua pia intercessão em nosso favor. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Benedíctio tua. Dómine, larga descéndat: quæ et múnera nostra,
              deprecántibus sanctis Martýribus tuis, tibi reddat accépta, et
              nobis sacraméntum redemptiónis effíciat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que a vossa bênção, Senhor, desça magnanimamente sobre nós; e que
              pelas preces dos vossos Santos Mártires Vos sejam agradáveis as
              nossas ofertas, mudando-as em nosso favor em sacramento de
              redenção. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Cœléstibus refécti sacraméntis et gáudiis: súpplices te, Dómine,
              deprecámur; ut, quorum gloriámur triúmphis, protegámur auxíliis.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Alentados com os sacramentos e as delícias celestiais, Vos
              suplicamos humildemente, Senhor, que sejamos protegidos com os
              auxílios daqueles de cujo triunfo nos gloriamos. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
