import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0828Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Hermes, Mártir, a 28 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui beátum Hermétem Mártyrem tuum virtúte constántiæ in
              passióne roborásti: ex ejus nobis imitatióne tríbue; pro amóre tuo
              próspera mundi despícere, et nulla ejus advérsa formidáre. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que fortalecestes o B. Hermes, vosso Mártir, com a virtude
              da constância no seu suplício, concedei-nos, pelo vosso amor, que,
              seguindo seu exemplo, desprezemos as prosperidades deste mundo e
              nunca temamos as adversidades. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Sacrifícium tibi, Dómine, laudis offérimus in tuórum
              commemoratióne Sanctórum: da, quǽsumus; ut, quod illis cóntulit
              glóriam, nobis prosit ad salútem. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Vos oferecemos, Senhor, em memória dos vossos Santos, este
              sacrifício de louvor; e, Vos imploramos, fazei que aquilo que lhe
              alcançou a glória sirva de proveito à nossa salvação. Por n...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Repleti, Dómine, benedictióne cœlésti, quǽsumus cleméntiam tuam:
              ut, intercedénte beáto Herméte Mártyre tuo, quæ humíliter gérimus,
              salúbriter sentiámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Saciados, Senhor, com a celestial bênção, invocamos a vossa
              clemência, a fim de que pela intercessão do B. Hermes, vosso
              Mártir, alcancemos os salutares efeitos do sacrifício, que
              humildemente celebramos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
