import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page119() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 119</Text>

          <View className="side-by-side">
            <Text className="latin">
              Ad Dóminum cum tribulárer clamávi: * et exaudívit me.
            </Text>
            <Text className="vernacular">
              Na minha tribulação, clamei ao Senhor: * e ouviu-me.
            </Text>
            <Text className="latin">
              Dómine, líbera ánimam meam a lábiis iníquis, * et a lingua dolósa.
            </Text>
            <Text className="vernacular">
              Ó Senhor, livrai a minha alma dos lábios iníquos, * e da língua
              dolosa.
            </Text>
            <Text className="latin">
              Quid detur tibi, aut quid apponátur tibi * ad linguam dolósam?
            </Text>
            <Text className="vernacular">
              Que te será dado, ou que te será acrescentado, * ó língua dolosa?
            </Text>
            <Text className="latin">
              Sagíttæ poténtis acútæ, * cum carbónibus desolatóriis.
            </Text>
            <Text className="vernacular">
              Setas agudas do poderoso, * com brasas devoradoras.
            </Text>
            <Text className="latin">
              Heu mihi, quia incolátus meus prolongátus est: habitávi cum
              habitántibus Cedar: * multum íncola fuit ánima mea.
            </Text>
            <Text className="vernacular">
              Ai de mim, o meu desterro prolongou-se, habitei com os moradores
              de Cedar: * muito andou peregrinando a minha alma.
            </Text>
            <Text className="latin">
              Cum his, qui odérunt pacem, eram pacíficus: * cum loquébar illis,
              impugnábant me gratis.
            </Text>
            <Text className="vernacular">
              Com os que odiavam a paz eu era pacífico: * quando lhes falava, me
              contradiziam sem motivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
