import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageMagnificat() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Magnificat</Text>

          <Language>
            <Text className="latin">
              Magníficat ánima mea Dóminum. Et exsultávit spíritus meus: * in
              Deo, salutári meo.
            </Text>
            <Text className="vernacular">
              A minha alma glorifica o Senhor. E o meu espírito exultou: * em
              Deus, meu salvador.
            </Text>
            <Text className="latin">
              Quia respéxit humilitátem ancíllæ suæ: * ecce enim ex hoc beátam
              me dicent omnes generatiónes.
            </Text>
            <Text className="vernacular">
              Visto que Ele olhou para a humildade da sua serva: * desde agora
              todas as gerações me chamarão bem-aventurada.
            </Text>
            <Text className="latin">
              Quia fecit mihi magna, qui potens est: * et sanctum nomen ejus.
            </Text>
            <Text className="vernacular">
              Pois o Omnipotente operou em mim grandes maravilhas: * e seu Nome
              é Santo.
            </Text>
            <Text className="latin">
              Et misericórdia ejus, a progénie in progénies: * timéntibus eum.
            </Text>
            <Text className="vernacular">
              Sua misericórdia espalha-se de geração em geração sobre os: * que
              O temem.
            </Text>
            <Text className="latin">
              Fecit poténtiam in brácchio suo: * dispérsit supérbos mente cordis
              sui.
            </Text>
            <Text className="vernacular">
              Manifestou-se o poder doseu braço: * dispersou os soberbos, cujo
              coração é cheio de orgulho.
            </Text>
            <Text className="latin">
              Depósuit poténtes de sede: * et exaltávit húmiles.
            </Text>
            <Text className="vernacular">
              Depôs os poderosos dos seus tronos: * e ergueu os humildes.
            </Text>
            <Text className="latin">
              Esuriéntes implévit bonis: * et dívites dimísit inánes.
            </Text>
            <Text className="vernacular">
              Saciou de bens os que tinham fome: * e deixou as mãos vazias aos
              ricos.
            </Text>
            <Text className="latin">
              Suscépit Israël púerum suum: * recordátus misericórdiæ suæ.
            </Text>
            <Text className="vernacular">
              Recebeu Israel como seu servo: * lembrando-se da sua misericórdia.
            </Text>
            <Text className="latin">
              Sicut locútus est ad patres nostros: * Ábraham, et sémini ejus in
              sǽcula.
            </Text>
            <Text className="vernacular">
              Tal como anunciara a nossos pais: * a Abraão e à sua descendência
              para sempre.
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
