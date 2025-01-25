import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0117() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. António, Abade, a 17 de Janeiro</Text>

          <Text className="comment">
            Depois de S. Paulo, pai dos Anacoretas, o ciclo de Natal nos faz
            honrar S. Antão, pai dos Cenobitas. Retirando-se para o deserto do
            Egipto aos dezoito anos de idade, ali viveu primeiramente a vida
            eremítica. O demônio, para amedrontá-lo e fazê-lo deixar a solidão,
            aparecia-lhe sob as formas mais horrendas, «mas, o Senhor o tornou
            temível aos inimigos; a uma palavra de sua boca tudo se dissipava»
            (Ep.). A sua santidade atraiu-lhe em breve as almas desejosas de
            verem em si mais perfeitamente firmada a realeza divina de Cristo.
            Novo Legislador, ele lhes deu «a doutrina e a regra de vida
            recebidas de Deus na oração» (Ep.). A Santo Antão o primeiro dos
            Abades, deve-se a instituição da vida monástica em comum, na qual se
            formam as almas de escol, sempre prontas, como seu pai em Deus, a
            receber o Senhor quando Ele vier retirá-las deste mundo (Ev.). A
            Missa de hoje é do Comum dos Abades. S. Antão sustentou também uma
            luta das mais renhidas contra o Arianismo e, com S. Atanásio, que o
            honrava com sua amizade, defendeu brilhantemente o dogma da
            divindade de Cristo. Morreu em 356, na idade de 105 anos. Pela
            perfeição de nossa vida, tornemos patente que participamos da
            divindade de Jesus.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
            title="Confessores não Pontífices - Missa Os justi"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
