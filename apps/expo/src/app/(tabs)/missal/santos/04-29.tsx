import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0429() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Pedro de Verona, Mártir, a 29 de Abril</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Præsta, quǽsumus, omnípotens Deus: ut beáti Petri Martyris tui
              fidem cóngrua devotióne sectémur; qui, pro ejúsdem fídei
              dilatatióne, martýrii palmam méruit obtinére. Per Dóminum...
            </Text>
            <Text className="text-base">
              Vos suplicamos, ó Deus, omnipotente, permiti que imitemos com
              conveniente devoção a fé do B. Pedro, vosso Mártir, que pela
              manifestação desta mesma fé mereceu alcançar a palma do martírio.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/5martirnaopontifice2#epístola"
            title="Mártir não Pontífice - Missa Lætábitur justus"
          />

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Preces, quas tibi, Dómine, offérimus, intercedénte beáto Petro
              Mártyre tuo, cleménter inténde: et propugnatóres fídei sub tua
              protectióne custódi. Per Dóminum...
            </Text>
            <Text className="text-base">
              Dignai-Vos, Senhor, pela intercessão do B. Pedro, vosso Mártir,
              ouvir clementemente as preces que Vos dirigimos, e acolhei sob a
              vossa protecção os defensores da fé. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Fidéles tuos, Dómine, custódiant sacraménta, quæ súmpsimus: et,
              intercedénte beáto Petro Mártyre tuo, contra omnes advérsos
              tueántur incúrsus. Per Dóminum...
            </Text>
            <Text className="text-base">
              Que os vossos fiéis, Senhor, sejam amparados com os sacramentos
              que recebemos, e que pela intercessão do B. Pedro, vosso Mártir,
              sejam protegidos contra todos os ataques do inimigo. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
