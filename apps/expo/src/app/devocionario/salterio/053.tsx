import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page053() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 53</Text>

          <Language>
            <Text className="latin">
              Deus, in nómine tuo salvum me fac: * et in virtúte tua júdica me.
            </Text>
            <Text className="vernacular">
              Salvai-me, ó Deus, por vosso nome: * e com vosso poder julgai-me.
            </Text>
            <Text className="latin">
              Deus, exáudi oratiónem meam: * áuribus pércipe verba oris mei.
            </Text>
            <Text className="vernacular">
              Ouvi, ó Deus, a minha oração: * atendei às palavras da minha boca.
            </Text>
            <Text className="latin">
              Quóniam aliéni insurrexérunt advérsum me, et fortes quæsiérunt
              ánimam meam: * et non proposuérunt Deum ante conspéctum suum.
            </Text>
            <Text className="vernacular">
              Porque os estranhos se levantaram contra mim e os fortes buscaram
              a minha vida: * e a Deus não puseram ante si.
            </Text>
            <Text className="latin">
              Ecce enim, Deus ádjuvat me: * et Dóminus suscéptor est ánimæ meæ.
            </Text>
            <Text className="vernacular">
              Eis que Deus vem em meu auxílio: * e o Senhor é o protector da
              minha vida.
            </Text>
            <Text className="latin">
              Avérte mala inimícis meis: * et in veritáte tua dispérde illos.
            </Text>
            <Text className="vernacular">
              Fazei recair os males sobre os meus inimigos: * e exterminai-os na
              vossa verdade.
            </Text>
            <Text className="latin">
              Voluntárie sacrificábo tibi, * et confitébor nómini tuo, Dómine:
              quóniam bonum est:
            </Text>
            <Text className="vernacular">
              Sacrificar-me-ei voluntariamente a Vós, * e o vosso nome louvarei,
              ó Senhor, porque é bom:
            </Text>
            <Text className="latin">
              Quóniam ex omni tribulatióne eripuísti me: * et super inimícos
              meos despéxit óculus meus.
            </Text>
            <Text className="vernacular">
              Porquanto me tendes livrado de toda a tribulação: * e com desdém
              olhei os meus inimigos.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
