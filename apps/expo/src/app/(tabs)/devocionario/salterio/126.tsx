import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page126() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 126</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Nisi Dóminus ædificáverit domum, * in vanum laboravérunt qui
              ædíficant eam.
            </Text>
            <Text className="text-base vernacular">
              Se o Senhor não edificar a casa, * é em vão que trabalham os que a
              edificam.
            </Text>
            <Text className="text-base latin">
              Nisi Dóminus custodíerit civitátem, * frustra vígilat qui custódit
              eam.
            </Text>
            <Text className="text-base vernacular">
              Se o Senhor não guardar a cidade, * inutilmente vigia o que a
              guarda.
            </Text>
            <Text className="text-base latin">
              Vanum est vobis ante lucem súrgere: * súrgite postquam sedéritis,
              qui manducátis panem dolóris.
            </Text>
            <Text className="text-base vernacular">
              Em vão vos levantais antes de amanhecer: * levantai-vos, depois
              que tiverdes repousado, vós que comeis o pão da dor.
            </Text>
            <Text className="text-base latin">
              Cum déderit diléctis suis somnum: * ecce heréditas Dómini fílii:
              merces, fructus ventris.
            </Text>
            <Text className="text-base vernacular">
              Quando Ele der o sono aos seus amados: * eis que a herança do
              Senhor são filhos, o fruto do ventre.
            </Text>
            <Text className="text-base latin">
              Sicut sagíttæ in manu poténtis: * ita fílii excussórum.
            </Text>
            <Text className="text-base vernacular">
              Como setas na mão do valente: * assim são os filhos dos
              atribulados.
            </Text>
            <Text className="text-base latin">
              Beátus vir, qui implévit desidérium suum ex ipsis: * non
              confundétur cum loquétur inimícis suis in porta.
            </Text>
            <Text className="text-base vernacular">
              Ditoso o varão que viu cumprido o seu desejo com eles: * não será
              confundido quando falar com seus inimigos no portão.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
