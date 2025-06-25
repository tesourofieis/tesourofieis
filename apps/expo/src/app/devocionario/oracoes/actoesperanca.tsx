import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageActoesperanca() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Acto de Esperança</Text>

          <Language>
            <Text className="latin">
              Dómine Deus, spero per grátiam tuam remissiónem ómnium peccatórum,
              et post hanc vitam ætérnam felicitátem me esse consecutúrum: quia
              tu promisísti, qui es infiníte potens, fidélis, benígnus, et
              miséricors. In hac spe vívere et mori státuo. Amen.
            </Text>
            <Text className="vernacular">
              Espero, Senhor Deus, que, pela vossa graça, hei de conseguir a
              remissão de todos os pecados e depois desta vida a felicidade
              eterna, porque Vós prometestes, Vós que sois infinitamente
              poderoso, fiel e misericordioso. Nesta esperança, é minha
              determinação viver e morrer. Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
