import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page001() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 1</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beátus vir, qui non ábiit in consílio impiórum, et in via
              peccatórum non stetit, * et in cáthedra pestiléntiæ non sedit:
            </Text>
            <Text className="text-base vernacular">
              Bem-aventurado o varão que não foi no conselho dos ímpios, nem
              ficou no caminho dos pecadores, * e na cadeira pestilencial se não
              sentou:
            </Text>
            <Text className="text-base latin">
              Sed in lege Dómini volúntas ejus, * et in lege ejus meditábitur
              die ac nocte.
            </Text>
            <Text className="text-base vernacular">
              Mas sua vontade está na lei do Senhor, * e dia e noite meditará na
              sua lei.
            </Text>
            <Text className="text-base latin">
              Et erit tamquam lignum, quod plantátum est secus decúrsus aquárum,
              * quod fructum suum dabit in témpore suo:
            </Text>
            <Text className="text-base vernacular">
              Ele será como a árvore, que está plantada junto ao curso das
              águas, * que a seu tempo dará seu fruto:
            </Text>
            <Text className="text-base latin">
              Et fólium ejus non défluet: * et ómnia quæcúmque fáciet,
              prosperabúntur.
            </Text>
            <Text className="text-base vernacular">
              Cuja folha não murchará: * e prosperará tudo quanto fizer.
            </Text>
            <Text className="text-base latin">
              Non sic ímpii, non sic: * sed tamquam pulvis, quem proícit ventus
              a fácie terræ.
            </Text>
            <Text className="text-base vernacular">
              Não assim os ímpios, não assim: * mas serão como o pó que o vento
              dispersa da face da terra.
            </Text>
            <Text className="text-base latin">
              Ideo non resúrgent ímpii in judício: * neque peccatóres in
              concílio justórum.
            </Text>
            <Text className="text-base vernacular">
              Por isso os ímpios não ressuscitarão no juízo: * nem os pecadores
              no concílio dos justos.
            </Text>
            <Text className="text-base latin">
              Quóniam novit Dóminus viam justórum: * et iter impiórum períbit.
            </Text>
            <Text className="text-base vernacular">
              Porque o Senhor conhece o caminho dos justos: * e o caminho dos
              ímpios perecerá.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
