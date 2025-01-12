import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0122LisboaFaro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Vicente, Mártir, a 22 de Janeiro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/4martirnaopontifice1">
              Missa In virtúte tua
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte
              nostra reos nos esse cognóscimus, beáti Vincéntii Martyris tui
              intercessióne liberémur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que,
              reconhecendo-nos réus diante de Vós pelas nossas iniquidades,
              sejamos livres delas por intercessão do vosso B. Mártir Vicente.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 12, 24-26</Text>

          <View className="side-by-side">
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Sequéntia sancti
              Evangélii secúndum Joánnem.
            </Text>
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Continuação do santo
              Evangelho segundo S. João.
            </Text>
            <Text className="text-base">
              In illo témpore: Dixit Jesus discípulis suis: Amen, amen, dico
              vobis, nisi granum fruménti cadens in terram, mórtuum fúerit,
              ipsum solum manet: si autem mórtuum fúerit, multum fructum affert.
              Qui amat ánimam suam, perdet eam: et qui odit ánimam suam in hoc
              mundo, in vitam ætérnam custódit eam. Si quis mihi mínistrat, me
              sequátur: et ubi sum ego, illic et miníster meus erit. Si quis
              mihi ministráverit, honorificábit eum Pater meus.
            </Text>
            <Text className="text-base">
              Naquele tempo, disse Jesus aos seus discípulos: «Se o grão de
              trigo, caindo na terra, não morrer, permanece estéril; mas, se
              morrer, dará muito fruto. Aquele que ama a sua vida perdê-la-á;
              mas aquele que aborrece a sua vida neste mundo conservá-la-á para
              a vida eterna. Se alguém me serve, siga-me; e onde eu estiver lá
              estará também o meu servo. Se alguém me servir, meu Pai o
              honrará».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 95, 6</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Conféssio et pulchritúdo in conspéctu ejus: sánctitas, et
              magnificéntia in sanctificatióne ejus.
            </Text>
            <Text className="text-base">
              Rodeiam-no a glória e a majestade: e no seu santuário reluzem a
              santidade e a magnificência.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro
              tuórum tibi grata sint honóre Justórum, et nobis salutária, te
              miseránte, reddántur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, Vos oferecemos estes dons da nossa devoção; e que em
              consideração dos vossos Santos eles Vos sejam agradáveis, e pela
              vossa misericórdia nos sejam salutares. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
              intercedéntibus beáto Vincéntio Martýre tuo, per hæc contra ómnia
              advérsa muniámur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós
              recebido os alimentos celestiais, sejamos fortalecidos contra
              todas as adversidades por intercessão do vosso B. Mártir Vicente.
              Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
