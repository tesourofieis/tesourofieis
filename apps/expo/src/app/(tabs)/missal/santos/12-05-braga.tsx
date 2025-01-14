import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1205Braga() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Geraldo, Bispo e Conf., a 5 de Dezembro, Na Arquidiocese de Braga
          </Text>
          <Text className="h3">Intróito</Text>
          <View className="side-by-side">
            <Text className="text-base latin">℣. Gloria Patri...</Text>
            <Text className="text-base vernacular">
              Um ínclito Confessor de Deus, lustre muito esplendoroso ante o
              Senhor, pérola e modelo dos Prelados, hoje coroado, com o qual as
              celestiais coortes rejubilam, entra nos céus, onde sem fim reina
              com Cristo. Ó justos, exultai no Senhor: àqueles que têm o coração
              recto fica bem a glória. ℣. Glória ao Pai...
            </Text>
          </View>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Ó Senhor, Vos suplicamos, que os preciosos méritos do B. Geraldo,
            vosso Confessor e Pontífice, nos defendam; e que por suas preces
            seja bem dirigida a Igreja. Por nosso Senhor...
          </Text>
          <Text className="h3">Epístola</Text>
          <LinkCard
            href="/missal/comum/10martires#epístola"
            title="Mártires - Missa Sancti tui"
          />
          <Text className="h3">Gradual</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Veneremos devotadamente, do íntimo do coração e da alma, a
              veneranda festividade de hoje, em que o B. Geraldo, Confessor de
              Cristo, passou alegre deste mundo para os céus. Por isso o B.
              Geraldo, acabado o tempo da sua vida, é alistado nos exércitos
              celestiais.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. Geraldo foi esse servo do Senhor que, lutando à
              hora da sua morte com o demónio, o venceu. Aleluia.
            </Text>
          </View>
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
            title="Confessores não Pontífices - Missa Os justi"
          />
          <Text className="h3">Ofertório</Text>
          <Text className="text-base">
            Alegra-te, cidade de Braga, com tão excelso Padroeiro, o qual
            permitiu Deus que fosse sepultado dentro dos teus muros. Por seu
            intermédio obtiveste de Deus milagres inumeráveis.
          </Text>
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Seja aceite na vossa presença, ó Senhor, a oblação do vosso fiel
            povo e permiti que lhe seja salutar, por intercessão do B. Geraldo,
            vosso Confessor e Pontífice, em cuja solenidade ela Vos é oferecida.
            Por nosso Senhor...
          </Text>
          <Text className="h3">Comúnio</Text>
          <Text className="text-base">
            Ó quão glorioso é este Confessor de Deus, com o qual no céu exultam
            os exércitos dos Santos!
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Ó Deus, remunerador das almas fiéis, concedei-nos a graça de
            alcançarmos o perdão por intermédio das preces do B. Geraldo, vosso
            Confessor e Pontífice, cuja veneranda festividade hoje celebramos.
            Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
