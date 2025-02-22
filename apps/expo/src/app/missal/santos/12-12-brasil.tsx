import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1212Brasil() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Nossa Senhora de Guadalupe, a 12 de Dezembro
          </Text>
          <Text className="aside">
            Como na
            <Link href="/missal/comum/29missamaria3">
              Missa Salve, sancta Parens da Virgem Maria,
            </Link>
            excepto:
          </Text>
          :<Text className="h3">Oração</Text>
          <View className="side-by-side">
            <Text className="latin">
              Deus, qui sub beatíssimæ Vírginis Maríæ singulári patrocínio
              constitútos, perpétuis benefíciis nos cumulári voluísti: præsta
              supplícibus tuis; ut cujus hódie commemoratióne lætámur in terris,
              ejus conspéctu perfruámur in cœlis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos colocastes sob a protecção particular da
              Santíssima Virgem Maria, e nos quisestes cumular com perpétuos
              benefícios, concedei aos que Vos suplicam, que desfrutemos no céu
              a visão daquela cuja comemoração hoje na terra festejamos. Por
              nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Epístola</Text>
          <LinkCard
            href="/missal/santos/07-16#epístola"
            title="B. Virgem Maria do Monte Carmelo"
          />
          <Text className="h3">Gradual</Text>
          <Text className="em">Ct. 6, 9</Text>
          <View className="side-by-side">
            <Text className="latin">
              Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra ut
              luna, elécta ut sol? Quasi arcus refúlgens inter nebulas glóriæ,
              et quasi flos rosárum in diébus vernis.
            </Text>
            <Text className="vernacular">
              Quem é esta que aparece como a aurora quando desponta, formosa
              como a lua, eleita, como o sol? É como o arco-íris, que
              resplandece entre as nuvens transparentes e como a rosa
              florescente no tempo da primavera.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Cant. 2, 12</Text> Flores apparuérunt in
              terra nostra, tempus putatiónis advénit. Allelúia.
            </Text>
            <Text className="vernacular">
              Aleluta, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Ct. 2, 12</Text> As flores apareceram
              em nossa terra; chegou o tempo da poda. Aleluía.
            </Text>
          </View>
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/santos/07-02#evangelho"
            title="Visitação da B. Virgem Maria"
          />
          <Text className="h3">Ofertório</Text>
          <Text className="em">2 Cr. 7, 16</Text>
          <View className="side-by-side">
            <Text className="latin">
              Elégi et sanctificávi locum istum, ut sit ibi nomen meum, et
              permáneant óculi mei, et cor meum ibi cunctis diébus.
            </Text>
            <Text className="vernacular">
              Escolhi e santifiquei este lugar, a fim de aí estar o meu nome, e
              estarem fixos nele os meus olhos e o meu coração, em todo o tempo.
            </Text>
          </View>
          <Text className="h3">Secreta</Text>
          <View className="side-by-side">
            <Text className="latin">
              Tua Dómine, propitiatióne, et beátæ Maríæ semper Vírginis
              intercessióne, ad perpétuam atque præséntem hæc oblátio nobis
              profíciat prosperitátem et pacem. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Aproveite-nos, Senhor, esta oblação para nossa perpétua e presente
              paz e prosperidade por vossa misericórdia e pela íntercessão da B.
              sempre Virgem Maria. Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Comúnio</Text>
          <Text className="em">Sl. 147, 20</Text>
          <View className="side-by-side">
            <Text className="latin">
              Non fecit táliter omni natióni: et judícia sua non manifestávit
              eis.
            </Text>
            <Text className="vernacular">
              Não fez assim a todas as nações, nem lhes manifestou os seus
              desígnios.
            </Text>
          </View>
          <Text className="h3">Postcomúnio</Text>
          <View className="side-by-side">
            <Text className="latin">
              Sumptis, Dómine, salútis nostræ subsídiis: da, quǽsumus, beátæ
              Maríæ semper Vírginis patrocíniis nos ubíque prótegi: in cujus
              veneration hæc tuæ obtúlimus majestáti. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Recebidos, Senhor, os auxílios de nossa salvação, concedei que em
              todo o lugar, nos proteja o patrocínio da B. sempre Virgem Maria,
              em cuja honra oferecemos êstes santos Místérios à vossa divina
              Majestade. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
