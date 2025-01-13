import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0818() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Agapito, Mártir, a 18 de Agosto</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Lætétur Ecclésia tua, Deus, beáti Agápiti Mártyris tui confísa
              suffrágiis: atque, ejus précibus gloriósis, et devóta permáneat et
              secúra consístat. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a vossa Igreja, ó Deus, rejubile com a confiança que lhe dão
              os sufrágios do B. Agapito, vosso Mártir, e que pelas suas
              gloriosas preces persevere na piedade e se conserve na paz. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 12, 24-26</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Lucam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. João.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Dixit Jesus discípulis suis: Amen, amen dico
              vobis, nisi granum fruménti, cadens in terram, mórtuum fúerit,
              ipsum solum manet: si autem mórtuum fúerit, multum fructum affert.
              Qui amat ánimam suam, perdet earn: et qui odit ánimam suam in hoc
              mundo, in vitam ætérnam custódit earn. Si quis mihi minístrat, me
              sequátur: et ubi sum ego, illic et minister meus erit. Si quis
              mihi ministráverit, honorificábit eum Pater meus.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, disse Jesus aos seus discípulos: «Se o grão de
              trigo, caindo na terra, não morrer, permanece estéril; mas, se
              morrer, dará muito fruto. Aquele que ama a sua vida perdê-la-á;
              mas aquele que aborrece a sua vida neste mundo conservá-la-á para
              a vida eterna. Se alguém me serve, siga-me; e, onde Eu estiver, lá
              estará também o meu servo. Se alguém me servir, meu Pai o honrará.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súscipe, Dómine, múnera, quæ in ejus tibi sollemnitáte deférimus:
              cujus nos confídimus patrocínio liberári. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebei, Senhor, as ofertas que Vos apresentamos na festa daquele
              por cuja protecção esperamos ser livres. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus,
              semper interventióne nos réfove, cujus sollémnia celebrámus. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Saciastes, Senhor, a vossa família com os sacrossantos dons; e,
              Vos suplicamos, fortalecei-a sempre pela intercessão daquele cuja
              festa celebramos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
