import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1204() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Pedro Crisólogo, B. Conf. e Doutor, a 4 de Dezembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Petrum Chrysólogum Doctorem egrégium, divínitus
              præmonstrátum, ad regéndam et instruéndam Ecclésiam tuam éligi
              voluísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in
              terris, intercessórem habére mereámur in cœlis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que para governar e instruir a vossa Igreja Vos dignastes
              escolher o B. Pedro Crisólogo, egrégio Doutor, o qual nos foi
              indicado por uma forma divina, concedei-nos, Vos imploramos, que
              assim como o tivemos como Doutor na terra, assim também mereçamos
              alcançar a sua intercessão nos céus. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
              <Text className="text-base latin">ibid., 20</Text> Non est
              invéntus símilis illi, qui conservaret legem Excélsi.
            </Text>
            <Text className="text-base vernacular">
              Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
              <Text className="text-base vernacular">ibid., 20</Text> Ninguém o
              igualou na observância das leis do Altíssimo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 109, 4</Text> Tu es sacérdos
              in ætérnum, secúndum órdinem Melchísedech. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 109, 4</Text> Tu és
              sacerdote para sempre, segundo a ordem de Melquisedeque. Aleluia.
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 25, 20 & 21</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dómine, quinque talénta tradidísti mihi: ecce, ália quinque
              superlucrátus sum. Euge, serve bone et fidélis, quia in pauca
              fuísti fidélis, supra multa te constítuam, intra in gáudium Dómini
              tui.
            </Text>
            <Text className="text-base vernacular">
              Senhor, entregastes-me cinco talentos; eis aqui outros cinco que
              lucrei. «Está bem, servo bom e fiel; visto que foste fiel em pouca
              coisa, Eu te colocarei sobre muitas; entra na glória do teu
              Senhor».
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
