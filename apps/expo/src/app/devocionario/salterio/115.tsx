import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page115() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 115</Text>

          <Language>
            <Text className="latin">
              Crédidi, propter quod locútus sum: * ego autem humiliátus sum
              nimis.
            </Text>
            <Text className="vernacular">
              Acreditei, por isso falei: * contudo, fui grandemente humilhado.
            </Text>
            <Text className="latin">
              Ego dixi in excéssu meo: * Omnis homo mendax.
            </Text>
            <Text className="vernacular">
              Disse eu no meu êxtase: * todo o homem é mentiroso.
            </Text>
            <Text className="latin">
              Quid retríbuam Dómino, * pro ómnibus, quæ retríbuit mihi?
            </Text>
            <Text className="vernacular">
              Que darei em retribuição ao Senhor, * por tudo que me deu?
            </Text>
            <Text className="latin">
              Cálicem salutáris accípiam: * et nomen Dómini invocábo.
            </Text>
            <Text className="vernacular">
              Tomarei o cálice da salvação: * e invocarei o nome do Senhor.
            </Text>
            <Text className="latin">
              Vota mea Dómino reddam coram omni pópulo ejus: * pretiósa in
              conspéctu Dómini mors sanctórum ejus:
            </Text>
            <Text className="vernacular">
              Cumprirei os meus votos ao Senhor, ante todo seu povo: * é
              preciosa aos olhos do Senhor a morte dos seus santos:
            </Text>
            <Text className="latin">
              O Dómine, quia ego servus tuus: * ego servus tuus, et fílius
              ancíllæ tuæ.
            </Text>
            <Text className="vernacular">
              Ó Senhor, eu sou vosso servo: * eu sou vosso servo e filho de
              vossa serva.
            </Text>
            <Text className="latin">
              Dirupísti víncula mea: * tibi sacrificábo hóstiam laudis, et nomen
              Dómini invocábo.
            </Text>
            <Text className="vernacular">
              Quebrastes as minhas cadeias: * Vos oferecerei uma hóstia de
              louvor e invocarei o nome do Senhor.
            </Text>
            <Text className="latin">
              Vota mea Dómino reddam in conspéctu omnis pópuli ejus: * in átriis
              domus Dómini, in médio tui, Jerúsalem.
            </Text>
            <Text className="vernacular">
              Cumprirei os meus votos ao Senhor ante todo seu povo: * nos átrios
              da casa do Senhor, no meio de Vós, ó Jerusalém.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
