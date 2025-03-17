import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0719() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Vicente de Paulo, Conf., a 19 de Julho</Text>

          <Text className="comment">
            A Providência, sempre maternal em sua solicitude para com os homens,
            suscitou no século XVII a S. Vicente de Paulo, a quem cumulou com o
            Espírito que fortificára os Apóstolos. Vicente contribuiu muito para
            a evangelização dos pobres e o desenvolvimento das virtudes
            sacerdotais, a glória do clero (Or.). Nasceu perto de Dax (Landes).
            Era ainda jovem sacerdote, quando caiu nas mãos de piratas turcos
            que o conduziram à África. De volta à França, foi sucessivamente
            cura e capelão-mor das galés. S. Francisco de Sales lhe confiou,
            mais tarde, a direcção espiritual das Visitandinas. Pregando,
            mormente para os habitantes dos campos, ligou essa obra apostólica,
            por votos especial, os membros da Congregação por ele instituida,
            com o nome de Padres da Missão ou Lazaristas. Ensinando-lhes a tudo
            deixar para seguir a Cristo (Com.), enviou-os a trabalhar na vinha
            de Deus (Ev.) e estabelecer em toda a parte seminários, a fim de dar
            ao povo bons sacerdotes. Para socorrer os abandonados, as jovens,
            cuja virtude se achava exposta, os loucos, os inválidos e os
            doentes, fundou com o concurso de Luiza de Marillac (canonizada em
            Maio de 1935) a Congregação das Filhas da Caridade, actualmente a
            mais numerosa e a mais espalhada no mundo inteiro. Após uma vida que
            lembra o apostolado de S. Paulo (Ep.) e o fez proclamar, por Leão
            XIII, Padroeiro especial de todas as obras de caridade, São Vicente
            morreu em 1660, na casa de Lázaro, a casa mãe da sua Congregação.
            Peçamos a Deus, que, a exemplo de S. Vicente cujos piedosos méritos
            (Or.) hoje veneramos, os nossos corações sejam abrasados, como o
            seu, na divina caridade.
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui, ad evangelizándum paupéribus et ecclesiástici órdinis
              decórem promovéndum, beátum Vincéntium apostólica virtúte
              roborásti: præsta, quǽsumus; ut, cujus pia mérita venerámur,
              virtútum quoque instruámur exémplis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que ornastes o B. Vicente com a coragem e as virtudes
              apostólicas para a evangelização dos pobres e para promover o
              decoro da ordem eclesiástica, permiti, Vos imploramos, que,
              honrando os seus piedosos méritos, sejamos instruídos com o
              exemplo de suas virtudes. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/02-06#evangelho"
            title="S. Tito, B. e Conf."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
