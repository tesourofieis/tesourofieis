import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page119() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 119</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ad Dóminum cum tribulárer clamávi: * et exaudívit me.
            </Text>
            <Text className="text-base vernacular">
              Na minha tribulação, clamei ao Senhor: * e ouviu-me.
            </Text>
            <Text className="text-base latin">
              Dómine, líbera ánimam meam a lábiis iníquis, * et a lingua dolósa.
            </Text>
            <Text className="text-base vernacular">
              Ó Senhor, livrai a minha alma dos lábios iníquos, * e da língua
              dolosa.
            </Text>
            <Text className="text-base latin">
              Quid detur tibi, aut quid apponátur tibi * ad linguam dolósam?
            </Text>
            <Text className="text-base vernacular">
              Que te será dado, ou que te será acrescentado, * ó língua dolosa?
            </Text>
            <Text className="text-base latin">
              Sagíttæ poténtis acútæ, * cum carbónibus desolatóriis.
            </Text>
            <Text className="text-base vernacular">
              Setas agudas do poderoso, * com brasas devoradoras.
            </Text>
            <Text className="text-base latin">
              Heu mihi, quia incolátus meus prolongátus est: habitávi cum
              habitántibus Cedar: * multum íncola fuit ánima mea.
            </Text>
            <Text className="text-base vernacular">
              Ai de mim, o meu desterro prolongou-se, habitei com os moradores
              de Cedar: * muito andou peregrinando a minha alma.
            </Text>
            <Text className="text-base latin">
              Cum his, qui odérunt pacem, eram pacíficus: * cum loquébar illis,
              impugnábant me gratis.
            </Text>
            <Text className="text-base vernacular">
              Com os que odiavam a paz eu era pacífico: * quando lhes falava, me
              contradiziam sem motivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
