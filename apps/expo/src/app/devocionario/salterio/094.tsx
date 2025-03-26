import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page094() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 94</Text>

          <Language>
            <Text className="latin">
              Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
            </Text>
            <Text className="vernacular">
              Vinde, exultemos o Senhor: * cantemos alegres a de Deus nosso
              salvador:
            </Text>
            <Text className="latin">
              Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus
              ei.
            </Text>
            <Text className="vernacular">
              Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O
              com salmos.
            </Text>
            <Text className="latin">
              Quóniam Deus magnus Dóminus: * et Rex magnus super omnes deos.
            </Text>
            <Text className="vernacular">
              Porque o Senhor é o grande Deus: * e o Rei grande sobre todos os
              deuses.
            </Text>
            <Text className="latin">
              Quia in manu ejus sunt omnes fines terræ: * et altitúdines móntium
              ipsíus sunt.
            </Text>
            <Text className="vernacular">
              Pois na sua mão estão todos os confins da terra: * e são suas as
              alturas dos montes.
            </Text>
            <Text className="latin">
              Quóniam ipsíus est mare, et ipse fecit illud: * et siccam manus
              ejus formavérunt.
            </Text>
            <Text className="vernacular">
              Seu é o mar e Ele o fez: * e as suas mãos formaram a terra árida.
            </Text>
            <Text className="latin">
              Veníte, adorémus, et procidámus, * et plorémus ante Dóminum qui
              fecit nos.
            </Text>
            <Text className="vernacular">
              Vinde, adoremos e prostremo-nos, * e choremos diante do Senhor que
              nos criou.
            </Text>
            <Text className="latin">
              Quia ipse est Dóminus Deus noster, * et nos pópulus páscuæ ejus,
              et oves manus ejus.
            </Text>
            <Text className="vernacular">
              Pois Ele é o Senhor nosso Deus, * e nós somos o povo do seu pasto
              e as ovelhas da sua manada.
            </Text>
            <Text className="latin">
              Hódie si vocem ejus audiéritis, * nolíte obduráre corda vestra:
            </Text>
            <Text className="vernacular">
              Se hoje ouvirdes a sua voz, * não endureceis os vossos corações:
            </Text>
            <Text className="latin">
              Sicut in irritatióne secúndum diem tentatiónis in desérto: * ubi
              tentavérunt me patres vestri, probavérunt me, et vidérunt ópera
              mea.
            </Text>
            <Text className="vernacular">
              Como quando me provocaram à ira, no dia da tentação no deserto: *
              onde vossos pais me tentaram, me testaram e viram as minhas obras.
            </Text>
            <Text className="latin">
              Quadragínta annis offénsus fui generatióni illi, * et dixi: semper
              hi errant corde.
            </Text>
            <Text className="vernacular">
              Quarenta anos estive irritado contra esta geração, * e disse: é um
              povo de coração errante.
            </Text>
            <Text className="latin">
              Et isti non cognovérunt vias meas, ut jurávi in ira mea: * Si
              introíbunt in réquiem meam.
            </Text>
            <Text className="vernacular">
              Eles não conheceram os meus caminhos, pelo que jurei na minha ira:
              * no meu repouso não entrarão.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
