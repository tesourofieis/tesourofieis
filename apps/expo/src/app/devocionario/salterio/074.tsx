import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page074() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 74</Text>

          <Language>
            <Text className="latin">
              Confitébimur tibi, Deus: * confitébimur, et invocábimus nomen
              tuum.
            </Text>
            <Text className="vernacular">
              Nós Vos louvaremos, ó Deus: * nós Vos louvaremos e invocaremos o
              vosso nome.
            </Text>
            <Text className="latin">
              Narrábimus mirabília tua: * cum accépero tempus, ego justítias
              judicábo.
            </Text>
            <Text className="vernacular">
              Narraremos as vossas maravilhas: * quando decidir que é tempo,
              julgarei com justiça.
            </Text>
            <Text className="latin">
              Liquefácta est terra, et omnes qui hábitant in ea: * ego
              confirmávi colúmnas ejus.
            </Text>
            <Text className="vernacular">
              A terra dissolveu-se e todos os que a habitam: * eu fortaleci as
              suas colunas.
            </Text>
            <Text className="latin">
              Dixi iníquis: nolíte iníque ágere: * et delinquéntibus: nolíte
              exaltáre cornu:
            </Text>
            <Text className="vernacular">
              Disse aos iníquos: não pratiqueis iniquidade: * e aos pecadores:
              não ergueis a cabeça:
            </Text>
            <Text className="latin">
              Nolíte extóllere in altum cornu vestrum: * nolíte loqui advérsus
              Deum iniquitátem.
            </Text>
            <Text className="vernacular">
              Não levanteis com insolência as vossas cabeças: * não faleis
              iniquamente contra Deus.
            </Text>
            <Text className="latin">
              Quia neque ab Oriénte, neque ab Occidénte, neque a desértis
              móntibus: * quóniam Deus judex est.
            </Text>
            <Text className="vernacular">
              Pois nem do oriente, nem do ocidente, nem pelos montes desertos: *
              porque o juiz é Deus.
            </Text>
            <Text className="latin">
              Hunc humíliat, et hunc exáltat: * quia calix in manu Dómini vini
              meri plenus misto.
            </Text>
            <Text className="vernacular">
              Humilha a este e exalta àquele: * pois na mão do Senhor há um
              cálice de vinho puro, cheio de mistura.
            </Text>
            <Text className="latin">
              Et inclinávit ex hoc in hoc: verúmtamen fæx ejus non est
              exinaníta: * bibent omnes peccatóres terræ.
            </Text>
            <Text className="vernacular">
              Inclina dum lado para o outro, e, todavia, suas fezes se não
              esgotaram: * delas beberão todos os pecadores da terra.
            </Text>
            <Text className="latin">
              Ego autem annuntiábo in sǽculum: * cantábo Deo Jacob.
            </Text>
            <Text className="vernacular">
              Eu, porém, anunciarei estas coisas sempre: * cantarei ao Deus de
              Jacob.
            </Text>
            <Text className="latin">
              Et ómnia córnua peccatórum confríngam: * et exaltabúntur córnua
              justi.
            </Text>
            <Text className="vernacular">
              Quebrarei todas as forças dos pecadores: * e será exaltada a
              cabeça do justo.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
