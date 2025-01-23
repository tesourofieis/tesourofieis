import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0505() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Pio V, Papa e Conf., a 5 de Maio</Text>

          <Text className="comment">
            Pio, nasceu em Bosco (Lombardia). Aos quatorze anos entrou para a
            Ordem dos Dominicanos. Bispo, Cardeal e Papa fez valer os talentos
            de Deus recebidos. Seu Pontificado, embora curto, foi um dos mais
            gloriosos do século XVI. O protestantismo proclamara a reforma e o
            islamismo ameaçava o Ocidente. Para remediar aos males que faziam
            gemer a cristandade, Pio V, fez a aplicação dos decretos do Concílio
            de Trento, publicou uma nova edição do missal e do breviário, e
            obteve pelas suas orações, a gloriosa vitória dos exércitos cristãos
            em Lepanto, em 1571. Instituiu, nessa ocasião, a festa de Nossa
            Senhora das Victórias, que mais tarde se tornou a do Santíssimo
            Rosário. Morreu a 5 de Maio de 1572, recitando o hino do Tempo
            Pascal.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui, ad conteréndos Ecclésiæ tuæ hostes et ad divínum cultum
              reparándum, beátum Pium Pontíficem Máximum elígere dignátus es:
              fac nos ipsíus deféndi præsídiis et ita tuis inhærére obséquiis;
              ut, ómnium hóstium superátis insídiis, perpétua pace lætémur. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que para esmagar os inimigos da vossa Igreja e reformar o
              culto divino Vos dignastes escolher o B. Pio para Sumo Pontífice,
              permiti que sejamos munidos com o socorro da sua protecção; e de
              tal modo nos liguemos ao vosso serviço que, depois de havermos
              triunfado das insídias de todos os inimigos, gozemos a alegria da
              eterna paz. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
