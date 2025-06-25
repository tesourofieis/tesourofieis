import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0807() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Caetano, Conf., a 7 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui beáto Cajetáno Confessóri tuo apostólicam vivéndi formam
              imitári tribuísti: da nobis, ejus intercessióne et exémplo, in te
              semper confidére et sola cœléstia desideráre. Per Dóminum
              nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que concedestes ao B. Caetano, vosso Confessor, a graça de
              imitar o modo de vida dos Apóstolos, permiti-nos, pela sua
              intercessão e exemplo, que sempre depositemos em Vós a nossa
              confiança e somente aspiremos aos bens celestiais. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Oração Comemoração S. Donato</Text>

          <Language>
            <Text className="latin">
              Deus, tuórum glória sacerdótum: præsta, quǽsumus, ut sancti
              Martyris tui et Epíscopi Donáti, cujus festa gérimus, sentiámus
              auxílium. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que sois a glória dos vossos sacerdotes, permiti, Vos
              suplicamos, que experimentemos o auxílio do vosso Santo Mártir e
              Bispo Donato, cuja festa celebramos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/pentecostes/pent14-0#evangelho"
            title="Décimo Quarto Domingo depois de Pentecostes"
          />

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis
              oblátio, et pro tuórum tibi grata sit honóre Sanctórum, et nos
              córpore páriter et mente puríficet. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente, Vos suplicamos, fazei que esta oblata da nossa
              humildade em honra dos vossos Santos Vos seja agradável e nos
              purifique ao mesmo tempo o corpo e a alma. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta Comemoração S. Donato</Text>

          <Language>
            <Text className="latin">
              Præsta, quǽsumus, Dómine: ut sancti Martyris tu iet Episcopi
              Donati intercessióne, quem ad laudem nóminis tui dicátis munéribus
              honorámus, piæ nobis fructus devotiónis accréscat. Per Dóminum
              nostrum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, fazei que pela intercessão do vosso Santo
              Mártir e Bispo Donato, a quem honramos oferecendo estes dons em
              louvor do vosso nome, sintamos aumentar em nós os frutos de uma
              devoção piedosa. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
              intercedénte beáto Cajetáno Confessóre tuo, per hæc contra ómnia
              advérsa muniámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Havendo recebido o alimento celestial, ó Deus omnipotente, Vos
              suplicamos, fazei que pela intercessão do B. Caetano, vosso
              Confessor, sejamos fortalecidos contra todas as adversidades. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio Comemoração S. Donato</Text>

          <Language>
            <Text className="latin">
              Omnípotens et miséricors Deus, qui nos sacramentórum tuórum et
              partícipes éfficis et minístros: præsta, quǽsumus; ut,
              intercedénte beáto Donáto Mártyre tuo atque Pontífice, ejúsdem
              proficiámus et fídei consórtio et digno servítio. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Omnipotente e misericordioso Deus, que nos tornastes participantes
              e ministros dos vossos sacramentos, concedei-nos, Vos imploramos,
              que pela intercessão do B. Donato, vosso Mártir e Pontífice, não
              só gozemos a comparticipação da sua fé, mas como ele Vos sirvamos
              dignamente. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
