import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1207() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Ambrósio. B. Conf. e Dr., a 7 de Dezembro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
              <Text className="text-base latin">ibid., 20</Text> Non est
              inventus símilis illi, qui conserváret legem Excélsi.
            </Text>
            <Text className="text-base vernacular">
              Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
              <Text className="text-base vernacular">ibid., 20</Text> Ninguém o
              igualou na observância das leis do Altíssimo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 109, 4</Text> Jurávit
              Dóminus, et non pænitébit eum: Tu es sacérdos in ætérnum, secúndum
              órdinem Melchísedech. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 109, 4</Text> O Senhor
              jurou e nunca se arrependerá: Tu és sacerdote para sempre, segundo
              a ordem de Melquisedeque. Aleluia.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 88, 25</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Véritas mea et misericórdia mea cum ipso: et in nómine meo
              exaltábitur cornu ejus.
            </Text>
            <Text className="text-base vernacular">
              A minha verdade e a minha misericórdia estarão com ele: e o seu
              poder elevar-se-á pelo meu nome.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
              intercessiónem beáti Ambrósii Confessóris tui atque Pontíficis, ad
              perpétuam nobis fac proveníre salútem. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Omnipotente e eterno Deus, permiti que os dons oferecidos à vossa
              majestade contribuam por intercessão do B. Ambrósio, vosso
              Confessor e Pontífice, para a nossa salvação eterna. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <LinkCard
            href="/missal/santos/12-06#comúnio"
            title="S. Nicolau, B. e Conf."
          />

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus,
              omnípotens Deus: ut beáti Ambrósii Confessóris tui atque
              Pontíficis nos ubíque orátio ádjuvet; in cujus veneratióne hæc tuæ
              obtúlimus majestáti. Per Dóminum nostram...
            </Text>
            <Text className="text-base vernacular">
              Havendo recebido os Sacramentos da nossa salvação, concedei-nos, ó
              Deus omnipotente, que sejamos sempre auxiliados pela oração do B.
              Ambrósio, vosso Confessor e Pontífice, em cuja honra oferecemos
              este sacrifício à vossa majestade. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
