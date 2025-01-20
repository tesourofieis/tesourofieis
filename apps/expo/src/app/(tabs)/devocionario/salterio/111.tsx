import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page111() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 111</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beátus vir, qui timet Dóminum: * in mandátis ejus volet nimis.
            </Text>
            <Text className="text-base vernacular">
              Bem-aventurado o varão que teme o Senhor: * muito se deliciará nos
              seus mandamentos.
            </Text>
            <Text className="text-base latin">
              Potens in terra erit semen ejus: * generátio rectórum benedicétur.
            </Text>
            <Text className="text-base vernacular">
              Poderosa será a sua semente sobre a terra: * bendita será a
              geração dos justos.
            </Text>
            <Text className="text-base latin">
              Glória, et spanítiæ in domo ejus: * et justítia ejus manet in
              sǽculum sǽculi.
            </Text>
            <Text className="text-base vernacular">
              Haverá glória e riqueza na sua casa: * e a sua justiça permanece
              por todos os séculos.
            </Text>
            <Text className="text-base latin">
              Exórtum est in ténebris lumen rectis: * miséricors, et miserátor,
              et justus.
            </Text>
            <Text className="text-base vernacular">
              Nas trevas surgiu uma luz para os rectos: * ele é misericordioso,
              compassivo e justo.
            </Text>
            <Text className="text-base latin">
              Jucúndus homo qui miserétur et cómmodat, dispónet sermónes suos in
              judício: * quia in ætérnum non commovébitur.
            </Text>
            <Text className="text-base vernacular">
              Ditoso o homem que se compadece e empresta, ele disporá os seus
              discursos com juízo: * pois nunca será abalado.
            </Text>
            <Text className="text-base latin">
              In memória ætérna erit justus: * ab auditióne mala non timébit.
            </Text>
            <Text className="text-base vernacular">
              A memória do justo será eterna: * não temerá ouvir notícias
              funestas.
            </Text>
            <Text className="text-base latin">
              Parátum cor ejus speráre in Dómino, confirmátum est cor ejus: *
              non commovébitur donec despíciat inimícos suos.
            </Text>
            <Text className="text-base vernacular">
              Seu coração está disposto a esperar no Senhor, fortalecido está o
              seu coração: * não será abalado até que observe os seus inimigos.
            </Text>
            <Text className="text-base latin">
              Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum
              sǽculi, * cornu ejus exaltábitur in glória.
            </Text>
            <Text className="text-base vernacular">
              Distribuiu, deu aos pobres: a sua justiça permanece por todos os
              séculos, * o seu poder será exaltado em glória.
            </Text>
            <Text className="text-base latin">
              Peccátor vidébit, et irascétur, déntibus suis fremet et tabéscet:
              * desidérium peccatórum períbit.
            </Text>
            <Text className="text-base vernacular">
              Vê-lo-á o pecador e indignar-se-á, rangerá os dentes e
              dissipar-se-á: * o desejo dos pecadores perecerá.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
