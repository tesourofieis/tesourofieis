import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageEspiritosanto() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa do Espírito Santo</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/pentecostes/pent7-0">
              Missa do Domingo de Pentecostes
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 8, 14-17</Text>

          <View className="side-by-side">
            <Text className="text-base latin">Léctio Actuum Apostólorum.</Text>
            <Text className="text-base vernacular">
              Lição dos Actos dos Apóstolos.
            </Text>
            <Text className="text-base latin">
              In diébus illis: Cum audíssent Apóstoli, qui erant Jerosólymis,
              quod recepísset Samaría verbum Dei, misérunt ad eos Petrum et
              Joánnem. Qui cum veníssent, oravérunt pro ipsis, ut accíperent
              Spíritum Sanctum: nondum enim in quemquam illórum vénerat, sed
              baptizáti tantum erant in nómine Dómini Jesu. Tunc imponébant
              manus super illos, et accipiébant Spíritum Sanctum.
            </Text>
            <Text className="text-base vernacular">
              Naqueles dias, quando os Apóstolos, que estavam em Jerusalém,
              souberam que a Samaria recebera a palavra de Deus, enviaram lá
              Pedro e João, os quais, apenas lá chegaram, oraram por aqueles,
              para que recebessem o Espírito Santo que não havia descido sobre
              nenhum deles; porquanto haviam sido baptizados somente em nome do
              Senhor Jesus. Então impuseram-lhes as mãos e eles receberam o
              Espírito Santo.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 32, 12 & 6</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beáta gens, cujus est Dóminus Deus eórum: pópulus, quem elégit
              Dóminus in hereditátem sibi. ℣. Verbo Dómini cœli firmáti sunt: et
              Spíritu oris ejus omnis virtus eórum.
            </Text>
            <Text className="text-base vernacular">
              Bem-aventurado o povo cujo Deus é o Senhor! Bem-aventurado o povo
              que, escolheu o Senhor para sua herança. A palavra do Senhor criou
              os céus; e o sopro dos seus lábios criou toda a milícia celestial.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja.{" "}
              <Text className="text-base latin">hic genuflectitur</Text> ℣.
              Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris
              in eis ignem accénde. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia.{" "}
              <Text className="text-base vernacular">Genuflecte-se</Text> Vinde,
              Espírito Santo, enchei os corações dos vossos fiéis e acendei
              neles o fogo do vosso amor. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
            diz-se o:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 103, 30</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Emítte Spíritum tuum, et creabúntur: et renovábis fáciem terræ. ℣.
              O quam bonus et suávis est, Dómine, Spíritus tuus in nobis!{" "}
              <Text className="text-base latin">hic genuflectitur</Text> ℣.
              Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris
              in eis ignem accénde.
            </Text>
            <Text className="text-base vernacular">
              Enviai o vosso Espírito e eles serão criados: e renovarão a face
              da terra. ℣. Ó Senhor, como é bom e suave o vosso Espírito dentro
              de nós!{" "}
              <Text className="text-base vernacular">Genuflecte-se</Text> ℣.
              Vinde, Espírito Santo, enchei os corações dos vossos fiéis e
              acendei neles o fogo do vosso amor.
            </Text>
          </View>

          <Text className="aside">
            No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 103, 30</Text> Emítte
              Spíritum tuum, et creabúntur: et renovábis fáciem terræ. Allelúja.{" "}
              <Text className="em">hic genuflectitur</Text> ℣. Veni, Sancte
              Spíritus, reple tuórum corda fidélium: et tui amóris in eis ignem
              accénde. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 103, 30</Text> Enviai o
              vosso Espírito e eles serão criados: e renovarão a face da terra.
              Aleluia. <Text className="em">Genuflecte-se</Text> ℣. Vinde,
              Espírito Santo, enchei os corações dos vossos fiéis e acendei
              neles o fogo do vosso amor. Aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
