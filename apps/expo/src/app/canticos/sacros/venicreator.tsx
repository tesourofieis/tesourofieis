import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Language from "~/components/Language";

export default function PageVeniCreator() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Veni Creator Spiritus</Text>
          <Language>
            <Text className="latin">
              Veni, Creator Spiritus,{"\n"}
              mentes tuorum visita,{"\n"}
              imple superna gratia{"\n"}
              quae tu creasti pectora.
            </Text>
            <Text className="vernacular">
              Vinde, Espírito Criador,{"\n"}
              visitai as almas dos Vossos,{"\n"}
              enchei de graça celestial,{"\n"}
              os corações que criastes.
            </Text>
            <Text className="latin">
              Qui diceris Paraclitus,{"\n"}
              altissima donum Dei,{"\n"}
              fons vivus, ignis, caritas,{"\n"}
              et spiritalis unctio.
            </Text>
            <Text className="vernacular">
              Sois o Divino Consolador,{"\n"}o dom do Deus Altíssimo,{"\n"}
              fonte viva, o fogo, a caridade,{"\n"}a unção espiritual.
            </Text>
            <Text className="latin">
              Tu, septiformis munere,{"\n"}
              digitus paternae dexterae,{"\n"}
              Tu rite promissum Patris,{"\n"}
              sermone ditans guttura.
            </Text>
            <Text className="vernacular">
              Com os Vossos sete dons,{"\n"}
              sois o dedo da direita de Deus,{"\n"}
              Solene promessa do Pai,{"\n"}
              Inspirando nossas palavras.
            </Text>
            <Text className="latin">
              Accende lumen sensibus:{"\n"}
              infunde amorem cordibus:{"\n"}
              infirma nostri corporis{"\n"}
              virtute firmans perpeti.
            </Text>
            <Text className="vernacular">
              Acendei a luz nos sentidos;{"\n"}
              insuflai o amor nos corações,{"\n"}
              amparai na constante virtude{"\n"}a nossa carne enfraquecida.
            </Text>
            <Text className="latin">
              Hostem repellas longius,{"\n"}
              pacemque dones protinus:{"\n"}
              ductore sic te praevio{"\n"}
              vitemus omne noxium.
            </Text>
            <Text className="vernacular">
              Afastai para longe o inimigo,{"\n"}
              Trazei-nos prontamente a paz;{"\n"}
              Assim guiados por Vós{"\n"}
              Evitaremos todo o mal.
            </Text>
            <Text className="latin">
              Per te sciamus da Patrem,{"\n"}
              noscamus atque Filium;{"\n"}
              Teque utriusque Spiritum{"\n"}
              credamus omni tempore.
            </Text>
            <Text className="vernacular">
              Por Vós explicar-se-á o Pai,{"\n"}E conheceremos o Filho;{"\n"}
              Dai-nos crer sempre em Vós{"\n"}
              Espírito do Pai e do Filho.
            </Text>
            <Text className="latin">
              Deo Patri sit gloria,{"\n"}
              et Filio, qui a mortuis{"\n"}
              surrexit, ac Paraclito,{"\n"}
              in saeculorum saecula. Amen.
            </Text>
            <Text className="vernacular">
              Glória ao Pai, Senhor,{"\n"}
              Ao Filho que ressuscitou{"\n"}
              Assim como ao Consolador.{"\n"}
              Por todos os séculos. Amém.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
