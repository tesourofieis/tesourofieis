import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page126() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 126</Text>

          <Language>
            <Text className="latin">
              Nisi Dóminus ædificáverit domum, * in vanum laboravérunt qui
              ædíficant eam.
            </Text>
            <Text className="vernacular">
              Se o Senhor não edificar a casa, * é em vão que trabalham os que a
              edificam.
            </Text>
            <Text className="latin">
              Nisi Dóminus custodíerit civitátem, * frustra vígilat qui custódit
              eam.
            </Text>
            <Text className="vernacular">
              Se o Senhor não guardar a cidade, * inutilmente vigia o que a
              guarda.
            </Text>
            <Text className="latin">
              Vanum est vobis ante lucem súrgere: * súrgite postquam sedéritis,
              qui manducátis panem dolóris.
            </Text>
            <Text className="vernacular">
              Em vão vos levantais antes de amanhecer: * levantai-vos, depois
              que tiverdes repousado, vós que comeis o pão da dor.
            </Text>
            <Text className="latin">
              Cum déderit diléctis suis somnum: * ecce heréditas Dómini fílii:
              merces, fructus ventris.
            </Text>
            <Text className="vernacular">
              Quando Ele der o sono aos seus amados: * eis que a herança do
              Senhor são filhos, o fruto do ventre.
            </Text>
            <Text className="latin">
              Sicut sagíttæ in manu poténtis: * ita fílii excussórum.
            </Text>
            <Text className="vernacular">
              Como setas na mão do valente: * assim são os filhos dos
              atribulados.
            </Text>
            <Text className="latin">
              Beátus vir, qui implévit desidérium suum ex ipsis: * non
              confundétur cum loquétur inimícis suis in porta.
            </Text>
            <Text className="vernacular">
              Ditoso o varão que viu cumprido o seu desejo com eles: * não será
              confundido quando falar com seus inimigos no portão.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
