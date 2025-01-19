import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0519() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Pedro Celestino, Papa e Conf., a 19 de Maio
          </Text>

          <Text className="comment">
            Entre todos os Pastores, a quem Jesus Ressuscitado, confiou o
            encargo da sua Igreja, em Pedro Celestino manifesta-se mais
            especialmente a virtude de humildade, colocada por São Bento, seu
            Pai em Deus, como a base de toda santidade. Nasceu em 1221 e, apenas
            adolescente, retirou-se para o deserto (Evangelho) onde, em breve,
            suas virtudes lhe atribuíram discípulos. Foi a origem do ramo da
            Ordem Benedictina, conhecida com o nome de Celestinos, nome que
            tomou S. Pedro quando subiu à Sé Pontífica. Arrancado da sua solidão
            com a idade de 72 anos, recebeu a plenitude do Sacerdócio (Intróito,
            Epístola) ocupando a cátedra de S. Pedro, vaga havia 27 meses.
            Elevado a esta eminente dignidade, julgou-se incapaz de desempenhar
            tal tarefa e, «colocando a humildade acima dessa dignidade»(Oração),
            desceu voluntariamente do trono pontifical, terminando seus dias na
            contemplação, sem a qual a sua alma não mais podia passar, e morreu
            a 19 de Maio de 1296. À imitação de S. Pedro Celestino, desprezemos
            as honras deste mundo, a fim de chegarmos à posse das recompensas
            prometidas aos humildes (Oração).
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Petrum Cœlestínum ad summi pontificátus ápicem
              sublimásti, quique illum humilitáti postpónere docuísti: concéde
              propítius; ut ejus exémplo cuncta mundi despícere, et ad promíssa
              humílibus prǽmia perveníre felíciter mereámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que elevastes o B. Pedro Celestino à eminente dignidade de
              sumo pontífice, ensinando-o ao mesmo tempo a preferir a humildade,
              concedei-nos propício que, imitando o seu exemplo, aprendamos a
              desprezar todos os bens deste mundo, para que com felicidade
              mereçamos alcançar os prémios que prometestes aos humildes. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h2">Comemoração de Santa Pudenciana</Text>

          <Text className="h3">Oração, Secreta e Postcomúnio</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
