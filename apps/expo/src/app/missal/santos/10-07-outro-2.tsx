import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page1007Outro2() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Sérgio, Baco e Outros, Mártires, a 7 de Outubro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Sanctórum Martyrum tuórum nos, Dómine, Sérgii, Bacchi, Marcélli et
              Apuléji beáta mérita prosequántur: et tuo semper fáciant amóre
              fervéntes. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Fazei, Senhor, que os méritos dos vossos Santos Mártires Sérgio,
              Baco, Marcelo e Apúlio nos acompanhem e nos comuniquem
              incessantemente o fervor do vosso amor. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Majestátem tuam nobis, Dómine, quǽsumus, hæc hóstia reddat
              immolánda placátam, tuórum digna postulatióne Sanctórum. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Que esta hóstia, que vai ser imolada em vosso louvor, Vos rogamos,
              Senhor, possa pelas dignas preces dos vossos Santos aplacar a
              vossa majestade. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sacraméntis, Dómine, muniámur accéptis: et sanctórum Mártyrum
              tuórum Sérgii, Bacchi, Marcélli et Apuléji intercessióne, contra
              omnes nequítias irruéntes, annis cœléstibus protegámur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Que os sacramentos que recebemos, Senhor, nos confortem; e que
              pela intercessão dos vossos Santos Sérgio, Baco, Marcelo e Apúlio
              sejamos fortalecidos com as armas celestiais e defendidos contra
              todos os ataques dos espíritos malignos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
