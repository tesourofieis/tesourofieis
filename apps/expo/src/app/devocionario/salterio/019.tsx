import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page019() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 19</Text>

          <Language>
            <Text className="latin">
              Exáudiat te Dóminus in die tribulatiónis: * prótegat te nomen Dei
              Jacob.
            </Text>
            <Text className="vernacular">
              O Senhor te ouça no dia da tribulação: * o nome de Deus de Jacob
              te proteja.
            </Text>
            <Text className="latin">
              Mittat tibi auxílium de sancto: * et de Sion tueátur te.
            </Text>
            <Text className="vernacular">
              Envie-te auxílio do seu santuário: * e de Sião te proteja.
            </Text>
            <Text className="latin">
              Memor sit omnis sacrifícii tui: * et holocáustum tuum pingue fiat.
            </Text>
            <Text className="vernacular">
              Tenha presentes todos teus sacrifícios: * e o teu holocausto Lhe
              seja agradável.
            </Text>
            <Text className="latin">
              Tríbuat tibi secúndum cor tuum: * et omne consílium tuum
              confírmet.
            </Text>
            <Text className="vernacular">
              Ele te dê segundo o teu coração: * e cumpra todos teus planos.
            </Text>
            <Text className="latin">
              Lætábimur in salutári tuo: * et in nómine Dei nostri
              magnificábimur.
            </Text>
            <Text className="vernacular">
              Alegrar-nos-emos na tua salvação: * e em nome do nosso Deus
              seremos engrandecidos.
            </Text>
            <Text className="latin">
              Impleat Dóminus omnes petitiónes tuas: * nunc cognóvi quóniam
              salvum fecit Dóminus Christum suum.
            </Text>
            <Text className="vernacular">
              Ouça o Senhor todas as tuas petições: * pois sei agora que o
              Senhor salvou o seu Ungido.
            </Text>
            <Text className="latin">
              Exáudiet illum de cælo sancto suo: * in potentátibus salus déxteræ
              ejus.
            </Text>
            <Text className="vernacular">
              Ele ouvi-lo-á do céu, sua santa morada: * em sua poderosa direita
              está a salvação.
            </Text>
            <Text className="latin">
              Hi in cúrribus, et hi in equis: * nos autem in nómine Dómini, Dei
              nostri invocábimus.
            </Text>
            <Text className="vernacular">
              Uns confiam nos carros, outros nos cavalos: * nós, porém,
              invocaremos o nome do Senhor nosso Deus.
            </Text>
            <Text className="latin">
              Ipsi obligáti sunt, et cecidérunt: * nos autem surréximus et
              erécti sumus.
            </Text>
            <Text className="vernacular">
              Eles ficaram atados e caíram: * mas nós nos levantámos e ficámos
              de pé.
            </Text>
            <Text className="latin">
              Dómine, salvum fac regem: * et exáudi nos in die, qua
              invocavérimus te.
            </Text>
            <Text className="vernacular">
              Ó Senhor, salvai o rei: * e ouvi-nos no dia em que Vos invocarmos.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
