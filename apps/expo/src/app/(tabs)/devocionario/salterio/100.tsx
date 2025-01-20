import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page100() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 100</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Misericórdiam et judícium * cantábo tibi, Dómine:
            </Text>
            <Text className="text-base vernacular">
              Misericórdia e justiça * Vos cantarei, ó Senhor:
            </Text>
            <Text className="text-base latin">
              Psallam, et intéllegam in via immaculáta, * quando vénies ad me.
            </Text>
            <Text className="text-base vernacular">
              Cantarei e procurarei conhecer o caminho da perfeição, * quando
              vierdes a mim.
            </Text>
            <Text className="text-base latin">
              Perambulábam in innocéntia cordis mei, * in médio domus meæ.
            </Text>
            <Text className="text-base vernacular">
              Caminhava na inocência do meu coração, * no meio da minha casa.
            </Text>
            <Text className="text-base latin">
              Non proponébam ante óculos meos rem injústam: * faciéntes
              prævaricatiónes odívi.
            </Text>
            <Text className="text-base vernacular">
              Não punha ante meus olhos coisa injusta: * aborrecia os que
              cometiam transgressões.
            </Text>
            <Text className="text-base latin">
              Non adhǽsit mihi cor pravum: * declinántem a me malígnum non
              cognoscébam.
            </Text>
            <Text className="text-base vernacular">
              Não se unia a mim coração depravado: * o mau afastava-se de mim e
              eu o não conhecia.
            </Text>
            <Text className="text-base latin">
              Detrahéntem secréto próximo suo, * hunc persequébar.
            </Text>
            <Text className="text-base vernacular">
              Ao que secretamente detraia o seu próximo, * eu o perseguia.
            </Text>
            <Text className="text-base latin">
              Supérbo óculo, et insatiábili corde, * cum hoc non edébam.
            </Text>
            <Text className="text-base vernacular">
              Com homem de olhos soberbos e de coração insaciável, * com esse
              não comia.
            </Text>
            <Text className="text-base latin">
              Óculi mei ad fidéles terræ ut sédeant mecum: * ámbulans in via
              immaculáta, hic mihi ministrábat.
            </Text>
            <Text className="text-base vernacular">
              Meus olhos buscavam os fiéis da terra para que se sentassem
              comigo: * andava por caminho inocente, esse me servia.
            </Text>
            <Text className="text-base latin">
              Non habitábit in médio domus meæ qui facit supérbiam: * qui
              lóquitur iníqua, non diréxit in conspéctu oculórum meórum.
            </Text>
            <Text className="text-base vernacular">
              Não habitará na minha casa o que com soberba procede: * o que diz
              iníquidade não pôde tornar-se agradável aos meus olhos.
            </Text>
            <Text className="text-base latin">
              In matutíno interficiébam omnes peccatóres terræ: * ut dispérderem
              de civitáte Dómini omnes operántes iniquitátem.
            </Text>
            <Text className="text-base vernacular">
              Pela manhã exterminava todos os pecadores da terra: * a fim de
              suprimir da cidade do Senhor todos os que cometem a iniquidade.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
