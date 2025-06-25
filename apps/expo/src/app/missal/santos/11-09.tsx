import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page1109() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Dedicação da Basílica do Salvador, a 9 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/25dedicacaoigreja">
              Missa Terríbilis est
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui nos beáti Theodóri Mártyris tui confessióne gloriósa
              circúmdas et prótegis: præsta nobis ex ejus imitatióne profícere
              et oratióne fulcíri. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos guardais e protegeis pela gloriosa confissão do B.
              Teodoro, vosso Mártir, concedei-nos a graça de aproveitarmos com
              seus exemplos e de sermos auxiliados com suas orações. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Suscipe, Dómine, fidélium preces cum oblatiónibus hostiárum: et,
              intercedénte beáto Theodóro Mártyre tuo, per hæc piæ devotiónis
              offícia ad cœléstem glóriam transeámus. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Recebei, Senhor, as preces dos fiéis juntamente com a oblata
              destas hóstias, a fim de que, pela intercessão do B. Teodoro,
              vosso Mártir, obtenhamos, em virtude destes mystérios de pia
              devoção, a graça de sermos conduzidos até à glória celestial. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Præsta nobis, quǽsumus, Dómine: intercedénte beáto Theodóro
              Mártyre tuo; ut, quod ore contíngimus, pura mente capiámus. Per
              Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Permiti, Senhor, pela intercessão do B. Teodoro, vosso Mártir, que
              conservemos com o coração puro o sacramento que a nossa boca
              recebeu. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
