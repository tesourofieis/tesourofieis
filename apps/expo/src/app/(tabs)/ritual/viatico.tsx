import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import AspergesMe from "../missal/aspergesme";

export default function PageViatico() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Viático, Extrema-unção</Text>
          <View className="aside">
            O Sacerdote, entrando em casa do enfermo, diz:
          </View>
          <View className="side-by-side">
            <Text className="text-base">℣. Pax huic dómui.</Text>
            <Text className="text-base">℣. A paz esteja nesta casa.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et ómnibus habitántibus
              in ea.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E em todos seus
              habitantes.
            </Text>
          </View>
          <Text className="h1">Asperges Me</Text>
          <AspergesMe />O Acólito diz o Confiteor Deo...
          <Link className="link" href="/devocionario/oracoes/confesso">
            (como na página confiteor);
          </Link>{" "}
          e o Sacerdote, tendo dado as Absolvições, continua:
          <Text className="h1">Recepção da Comunhão</Text>
          <View className="side-by-side">
            <Text className="text-base">
              ℣. Ecce Agnus Dei, ecce qui tollit peccáta mundi.
            </Text>
            <Text className="text-base">
              ℣. Eis o Cordeiro de Deus, eis Aquele que tira os pecados do
              mundo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Dómine, non sum dignus,
              ut intres sub tectum meum: sed tantum dic verbo, et sanábitur
              ánima mea.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Senhor, eu não sou digno
              de que entreis na minha morada, mas dizei uma só palavra e a minha
              alma será salva.
            </Text>
            <Text className="text-base">
              Accípe frater (soror), Viaticum Córporis Dómini nostri Jesu
              Christi, qui te custódiat ab hoste malígno, et perdúcate in vitam
              ætérnam.
            </Text>
            <Text className="text-base">
              Recebei, meu irmão (ou minha irmã), o Viático do Corpo de Nosso
              Senhor Jesus Cristo, a fim de que vos guie até à vida eterna.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">℣. Dominus vobíscum.</Text>
            <Text className="text-base">℣. O Senhor seja convosco.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E com vosso espírito.
            </Text>
          </View>
          <View className="side-by-side">
            <Text className="text-base">
              <Text className="text-red-500 text-center">Orémus.</Text>
            </Text>
            <Text className="text-base">
              <Text className="text-red-500 text-center">Oremos.</Text>
            </Text>
            <Text className="text-base">
              Dómine sancte, Páter omnípotens, ætérne Deus, te fidéliter
              deprecámur, ut accipiénti fratri nostro (soróri nostræ)
              sacrosánctum Corpus Dómini nostri Jesu Christi Fílii tui, tam
              córpori, quam ánimæ prosit ad remédium sempitérnum: Qui tecum
              vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula
              sæculórum.
            </Text>
            <Text className="text-base">
              Senhor santo, Pai omnipotente, Deus eterno, Vos rogamos com
              confiança que o Corpo Santíssimo de nosso Senhor, que o nosso
              irmão (ou irmã) acaba de receber, lhe seja remédio eficaz, tanto
              para a sua alma como para o seu corpo, a fim de que lhe sirva para
              a eternidade: Ele, que, sendo Deus, convosco vive e reina por
              todos os séculos dos séculos.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
