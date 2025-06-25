import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page31Inimigos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">31.ª Pelos inimigos</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, pacis caritatísque amátor et custos: da ómnibus inimícis
              nostris pacem caritatémque veram; et cunctórum eis remissiónem
              tríbue peccatórum, nosque ab eórum insídiis poténter éripe. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que amais e conservais a paz, concedei aos nossos inimigos
              a paz e a verdadeira caridade, bem como a remissão dos seus
              pecados; e a nós, Senhor, livrai-nos com vosso poder das suas
              insídias. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Oblátis, quǽsumus, Dómine, placáre munéribus: et nos ab inimícis
              nostris cleménter éripe, eisque indulgéntiam tríbue delictórum.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, deixai-Vos aplacar com estes dons, que Vos
              oferecemos; e, pela vossa clemência, livrai-nos das mãos dos
              nossos inimigos, concedendo-lhes ao mesmo tempo o perdão dos
              pecados. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Hæc nos commúnio, Dómine, éruat a delíctis: et ab inimicórum
              deféndat insídiis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que esta comunhão, Senhor, nos livre de todos os delitos e nos
              defenda das insídias dos nossos inimigos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
