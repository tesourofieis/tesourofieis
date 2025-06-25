import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageAccaogracas() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Acção de Graças</Text>

          <Text className="aside">
            Como alguma das
            <Link href="/missal/votivas/santissimatrindade">
              Missas Votivas da Santíssima Trindade,
            </Link>
            ou do
            <Link href="/missal/votivas/espiritosanto">Espírito Santo,</Link>
            ou da
            <Link href="/missal/comum/27missamaria1">Santíssima Virgem,</Link>
            excepto o seguinte:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, cujus misericórdiæ non est númerus et bonitátis infinítus
              est thesáurus: piíssimæ majestáti tuæ pro collátis donis grátias
              ágimus, tuam semper cleméntiam exorántes; ut, qui peténtibus
              postuláta concédis, eósdem non déserens, ad prǽmia futúra
              dispónas. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, cuja misericórdia é ilimitada e cuja bondade é um tesouro
              infinito, dignai-Vos aceitar as graças que rendemos à vossa
              clemência pelos benefícios que nos concedestes; e, Vos pedimos,
              atendendo benignamente às orações dos vossos suplicantes, permiti
              que estes não fiquem abandonados, e assim possam alcançar as
              recompensas futuras. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Odórem, Dómine, sacrifícii hujus cum gratiárum actiónibus súscipe,
              et præsta: ut, quos exaudíre et incólumes serváre dignátus es, ab
              omni in pósterum adversitáte custódias; et in tuo servítio et
              amóre concréscant. Per Dóminum nostrum Jesum Christum, Fílium
              tuum...
            </Text>
            <Text className="vernacular">
              Aceitai, Senhor, o perfume deste sacrifício juntamente com as
              nossas acções de graças; e permiti que aqueles que Vos dignastes
              atender e conservar sãos e salvos, sejam preservados para o futuro
              de todas as adversidades e neles aumente o fervor e o amor pelo
              vosso santo serviço. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Deus, qui néminem, in te sperántem, nímium afflígi permíttis, sed
              pium précibus præstas audítum: pro postulatiónibus nostris
              votísque suscéptis grátias ágimus, te piíssime deprecántes; ut per
              hæc, quæ súmpsimus, a cunctis éripi mereámur advérsis. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que não consentis que nenhum daqueles que esperam em Vós
              seja provado mais do que suas forças o permitem, e que inclinais
              propício os vossos ouvidos às suas súplicas, nós Vos damos graças
              por haverdes acolhido as nossas orações e votos, e, Vos rogamos,
              por virtude destes mystérios, que recebemos, afastai de nós todas
              as adversidades. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
