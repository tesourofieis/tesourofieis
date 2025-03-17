import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function PageVexillaregis() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Vexílla Regis</Text>

          <Language>
            <Text className="latin">
              Vexílla Regis pródeunt: Fúlget Crucis mystérium, Qua vita mortem
              pértulit, Et morte vitam prótulit.
            </Text>
            <Text className="vernacular">
              Ó nobre estandarte do Rei dos reis, ó misteriosa Cruz, aparece
              agora, pois a vida sofreu a morte, e pela sua morte nos deu a
              vida!
            </Text>
            <Text className="latin">
              Quæ, vulneráta lánceæ Mucróne diro, críminum Ut nos laváret
              sórdibus, Manávit unda et sánguine.
            </Text>
            <Text className="vernacular">
              Do seu lado, ferido pela cruel lança, correm a água e o sangue,
              destinados a lavrar a nódoa dos nossos crimes.
            </Text>
            <Text className="latin">
              Impléta sunt quæ cóncinit David fidéli cármine, Dicéndo natiónibus
              : Regnávit a ligno Deus.
            </Text>
            <Text className="vernacular">
              Cumpriu-se o oráculo de David, que nos seus cânticos inspirados
              havia anunciado às nações: «Deus reinará pelo madeiro».
            </Text>
            <Text className="latin">
              Arbor decóra et fúlgida, Ornáta Regis púrpura, Elécta digno
              stípite Tam sancta membra tángere.
            </Text>
            <Text className="vernacular">
              Sois bela e brilhante de gloória, ó árvore enaltecida com a
              púrpura do Rei: tronco escolhido e julgado digno de tocar nos
              membros dos santos.
            </Text>
            <Text className="latin">
              Beáta, cuius bráchiis Prétium pepéndit sǽculi, Statéra facta
              córporis, Tulítque prædam tártari.
            </Text>
            <Text className="vernacular">
              Ó feliz Cruz, de cujos braços pendeu o penhor do mundo! Fostes a
              balança que pesou o Corpo, cujo peso arrancou ao inferno a sua
              presa!
            </Text>
            <Text className="latin">
              O Crux, ave, spes única, Hoc Passiónis témpore Piis adáuge
              grátiam, Reísque dele crímina.
            </Text>
            <Text className="vernacular">
              Salve, ó Cruz, nossa única esperança, nestes dias consagrados a
              honrar a Paixão do Salvador concedei aos justos aumento da graça e
              aos pecadores apagai seus crimes.
            </Text>
            <Text className="latin">
              Te, fons salútis, Trínitas, Colláudet omnis spíritus : Quibus
              Crucis victóriam Largíris, adde prǽmium. Amen.
            </Text>
            <Text className="vernacular">
              Que todos os espíritos cantem vossos louvores, ó Trindade, fonte
              da nossa salvação. Vós, que nos dais a vitória pela Cruz,
              dignai-Vos aumentá-la com a recompensa. Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
