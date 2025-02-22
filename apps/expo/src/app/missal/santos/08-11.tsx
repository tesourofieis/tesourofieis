import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0811() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Tibúrcio e Susana, Mártires, a 11 de Agosto
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Sanctórum Martyrum tuórum Tiburtii et Susánnæ nos, Dómine, fóveant
              continuáta præsídia: quia non désinis propítius intuéri; quos
              tálibus auxíliis concésseris adjuvári. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Permiti, Senhor, que nos favoreça o contínuo auxílio dos vossos
              Santos Mártires Tibúrcio e Susana, pois não podeis deixar de
              acolher propiciamente aqueles a quem concedeis o socorro de tal
              protecção. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/01-10#epístola"
            title="S. S. Fabião e Sebastião, Márts"
          />

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Adésto, Dómine, précibus pópuli tui, adésto munéribus: ut, quæ
              sacris sunt obláta mystériis, tuórum tibi pláceant intercessióne
              Sanctórum. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Atendei, Senhor, às preces do vosso povo e recebei as suas
              ofertas, a fim de que, pela intercessão dos vossos Santos
              Mártires, a oblação destes mystérios Vos seja agradável. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Súmpsimus, Dómine, pignus redemptiónis ætérnæ: quod sit nobis,
              quǽsumus, interveniéntibus sanctis Martýribus tuis, vitæ præséntis
              auxílium páriter et futúræ. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Recebemos, Senhor, o penhor da eterna redenção; e permiti, pela
              intercessão dos vossos Santos Mártires, que nos sirva de auxílio,
              tanto na vida presente, como na futura. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
