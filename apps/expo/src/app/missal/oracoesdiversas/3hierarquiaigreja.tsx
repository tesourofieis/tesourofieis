import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page3Hierarquiaigreja() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">3.ª Por toda a Hierarquia da Igreja</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Omnípotens sempitérne Deus, cujus spíritu totum corpus Ecclésiæ
              sanctificátur et régitur: exáudi nos pro univérsis ordínibus
              supplicántes; ut, grátiæ tuæ múnere, ab ómnibus tibi grádibus
              fidéliter serviátur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente e sempiterno, cujo espírito santifica e governa
              todo o corpo da Igreja, ouvi as súplicas que Vos dirigimos em
              favor de todas as Ordens Sagradas, a fim de que pelo dom da vossa
              graça os vossos Ministros de todos os graus Vos sirvam fielmente.
              Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Da fámulis tuis, Dómine, indulgéntiam peccatórum, consolatiónem
              vitæ, gubernatiónem perpétuam: ut, tibi serviéntes, ad tuam
              júgiter misericórdiam perveníre mereántur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei, Senhor, aos vossos servos a remissão dos seus pecados, a
              consolação e a assistência contínua durante esta vida, a fim de
              que, servindo-Vos com fidelidade, lhes dispenseis continuamente a
              vossa misericórdia. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Líbera, quǽsumus, Dómine, a peccátis et hóstibus fámulos tuos,
              tibi supplicántes: ut, in sancta conversatióne vivéntes, nullis
              afficiántur advérsis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos imploramos, livrai dos seus pecados e dos seus
              inimigos os vossos servos, que Vos dirigem estas súplicas, a fim
              de que, tendo sempre boa conduta, não sejam oprimidos com nenhuma
              adversidade. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
