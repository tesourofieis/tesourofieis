import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0801() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Comemoração dos S. S. Macabeus, Mártires, a 1 de Agosto
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Fratérna nos, Dómine, Mártyrum tuórum coróna lætíficet: quæ et
              fídei nostræ prǽbeat increménta virtútum; et multíplici nos
              suffrágio consolétur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Fazei, Senhor, que a vitória destes irmãos Mártires nos alegre,
              proporcionando à nossa fé aumento de vigor; e que nos sirva de
              consolação pela sua múltipla intercessão. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Mystéria tua, Dómine, pro sanctórum Martyrum tuórum honóre, devóta
              mente tractémus: quibus et præsídium nobis crescat et gáudium. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Que nós possamos, Senhor, celebrar com devoção os vossos sagrados
              mystérios em honra dos vossos Mártires, a fim de que sintamos
              aumentar o vosso auxílio e a nossa alegria. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Præsta, quǽsumus, omnípotens Deus: ut, quorum memóriam sacraménti
              participatióne recólimus, fidem quoque proficiéndo sectémur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, ó Deus omnipotente, que imitemos em nossos
              progressos na fé aquele cuja memória honrámos, participando deste
              sacramento. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
