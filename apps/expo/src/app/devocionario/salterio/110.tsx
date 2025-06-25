import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page110() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 110</Text>

          <Language>
            <Text className="latin">
              Confitébor tibi, Dómine, in toto corde meo: * in consílio
              justórum, et congregatióne.
            </Text>
            <Text className="vernacular">
              Louvar-Vos-ei, ó Senhor, com todo meu coração: * no conselho e na
              congregação dos justos.
            </Text>
            <Text className="latin">
              Magna ópera Dómini: * exquisíta in omnes voluntátes ejus.
            </Text>
            <Text className="vernacular">
              Grandes são as obras do Senhor: * apropriadas a todas suas
              vontades.
            </Text>
            <Text className="latin">
              Conféssio et magnificéntia opus ejus: * et justítia ejus manet in
              sǽculum sǽculi.
            </Text>
            <Text className="vernacular">
              Sua obra é glória e magnificência: * e a sua justiça permanece
              pelos séculos dos séculos.
            </Text>
            <Text className="latin">
              Memóriam fecit mirabílium suórum, miséricors et miserátor Dóminus:
              * escam dedit timéntibus se.
            </Text>
            <Text className="vernacular">
              Instituiu um memorial das suas maravilhas, o Senhor que é
              misericordioso e compassivo: * deu alimento aos que O temem.
            </Text>
            <Text className="latin">
              Memor erit in sǽculum testaménti sui: * virtútem óperum suórum
              annuntiábit pópulo suo:
            </Text>
            <Text className="vernacular">
              Lembrar-se-á eternamente da sua aliança: * anunciará ao seu povo o
              poder das suas obras:
            </Text>
            <Text className="latin">
              Ut det illis hereditátem géntium: * ópera mánuum ejus véritas, et
              judícium.
            </Text>
            <Text className="vernacular">
              Dando-lhe a herança das gentes: * as obras das suas mãos são
              verdade e justiça.
            </Text>
            <Text className="latin">
              Fidélia ómnia mandáta ejus: confirmáta in sǽculum sǽculi, * facta
              in veritáte et æquitáte.
            </Text>
            <Text className="vernacular">
              Fiéis são todos seus mandamentos, confirmados em todos os séculos,
              * feitos em verdade e equidade.
            </Text>
            <Text className="latin">
              Redemptiónem misit pópulo suo: * mandávit in ætérnum testaméntum
              suum.
            </Text>
            <Text className="vernacular">
              Enviou a redenção ao seu povo: * estabeleceu para sempre a sua
              aliança.
            </Text>
            <Text className="latin">
              <Text className="latin">fit reverentia</Text> Sanctum, et
              terríbile nomen ejus: * inítium sapiéntiæ timor Dómini.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">inclinar a cabeça</Text> Santo e
              terrível é o seu nome: * o temor do Senhor é o princípio da
              sabedoria.
            </Text>
            <Text className="latin">
              Intelléctus bonus ómnibus faciéntibus eum: * laudátio ejus manet
              in sǽculum sǽculi.
            </Text>
            <Text className="vernacular">
              São sábios todos os que o praticam: * seu louvor permanece para
              sempre.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
