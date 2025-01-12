import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page001() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 1</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Beátus vir, qui non ábiit in consílio impiórum, et in via
              peccatórum non stetit, * et in cáthedra pestiléntiæ non sedit:
            </Text>
            <Text className="text-base">
              Bem-aventurado o varão que não foi no conselho dos ímpios, nem
              ficou no caminho dos pecadores, * e na cadeira pestilencial se não
              sentou:
            </Text>
            <Text className="text-base">
              Sed in lege Dómini volúntas ejus, * et in lege ejus meditábitur
              die ac nocte.
            </Text>
            <Text className="text-base">
              Mas sua vontade está na lei do Senhor, * e dia e noite meditará na
              sua lei.
            </Text>
            <Text className="text-base">
              Et erit tamquam lignum, quod plantátum est secus decúrsus aquárum,
              * quod fructum suum dabit in témpore suo:
            </Text>
            <Text className="text-base">
              Ele será como a árvore, que está plantada junto ao curso das
              águas, * que a seu tempo dará seu fruto:
            </Text>
            <Text className="text-base">
              Et fólium ejus non défluet: * et ómnia quæcúmque fáciet,
              prosperabúntur.
            </Text>
            <Text className="text-base">
              Cuja folha não murchará: * e prosperará tudo quanto fizer.
            </Text>
            <Text className="text-base">
              Non sic ímpii, non sic: * sed tamquam pulvis, quem proícit ventus
              a fácie terræ.
            </Text>
            <Text className="text-base">
              Não assim os ímpios, não assim: * mas serão como o pó que o vento
              dispersa da face da terra.
            </Text>
            <Text className="text-base">
              Ideo non resúrgent ímpii in judício: * neque peccatóres in
              concílio justórum.
            </Text>
            <Text className="text-base">
              Por isso os ímpios não ressuscitarão no juízo: * nem os pecadores
              no concílio dos justos.
            </Text>
            <Text className="text-base">
              Quóniam novit Dóminus viam justórum: * et iter impiórum períbit.
            </Text>
            <Text className="text-base">
              Porque o Senhor conhece o caminho dos justos: * e o caminho dos
              ímpios perecerá.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
