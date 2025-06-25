import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageNuncdimittis() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Nunc Dimíttis</Text>

          <Language>
            <Text className="latin">
              Nunc dimíttis, servum tuum, Dómine, * secúndum verbum tuum in
              pace:
            </Text>
            <Text className="vernacular">
              Agora, Senhor, deixareis ir em paz o vosso servo, * segundo a
              vossa palavra:
            </Text>
            <Text className="latin">
              Quia vidérunt óculi mei * salutáre tuum,
            </Text>
            <Text className="vernacular">
              Pois os meus olhos já viram * a vossa salvação,
            </Text>
            <Text className="latin">
              Quod parásti * ante fáciem ómnium populórum,
            </Text>
            <Text className="vernacular">
              E que preparastes * ante a face de todos os povos,
            </Text>
            <Text className="latin">
              Lumen ad revelatiónem Géntium, * et glóriam plebis tuæ Israël.
            </Text>
            <Text className="vernacular">
              Luz para se revelar às nações, * e glória de Israel, vosso povo.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spíritui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
