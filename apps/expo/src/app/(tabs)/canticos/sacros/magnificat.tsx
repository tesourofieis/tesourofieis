import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageMagnificat() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Magnificat</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Magníficat ánima mea Dóminum. Et exsultávit spíritus meus: * in
              Deo, salutári meo.
            </Text>
            <Text className="text-base">
              A minha alma glorifica o Senhor. E o meu espírito exultou: * em
              Deus, meu salvador.
            </Text>
            <Text className="text-base">
              Quia respéxit humilitátem ancíllæ suæ: * ecce enim ex hoc beátam
              me dicent omnes generatiónes.
            </Text>
            <Text className="text-base">
              Visto que Ele olhou para a humildade da sua serva: * desde agora
              todas as gerações me chamarão bem-aventurada.
            </Text>
            <Text className="text-base">
              Quia fecit mihi magna, qui potens est: * et sanctum nomen ejus.
            </Text>
            <Text className="text-base">
              Pois o Omnipotente operou em mim grandes maravilhas: * e seu Nome
              é Santo.
            </Text>
            <Text className="text-base">
              Et misericórdia ejus, a progénie in progénies: * timéntibus eum.
            </Text>
            <Text className="text-base">
              Sua misericórdia espalha-se de geração em geração sobre os: * que
              O temem.
            </Text>
            <Text className="text-base">
              Fecit poténtiam in brácchio suo: * dispérsit supérbos mente cordis
              sui.
            </Text>
            <Text className="text-base">
              Manifestou-se o poder doseu braço: * dispersou os soberbos, cujo
              coração é cheio de orgulho.
            </Text>
            <Text className="text-base">
              Depósuit poténtes de sede: * et exaltávit húmiles.
            </Text>
            <Text className="text-base">
              Depôs os poderosos dos seus tronos: * e ergueu os humildes.
            </Text>
            <Text className="text-base">
              Esuriéntes implévit bonis: * et dívites dimísit inánes.
            </Text>
            <Text className="text-base">
              Saciou de bens os que tinham fome: * e deixou as mãos vazias aos
              ricos.
            </Text>
            <Text className="text-base">
              Suscépit Israël púerum suum: * recordátus misericórdiæ suæ.
            </Text>
            <Text className="text-base">
              Recebeu Israel como seu servo: * lembrando-se da sua misericórdia.
            </Text>
            <Text className="text-base">
              Sicut locútus est ad patres nostros: * Ábraham, et sémini ejus in
              sǽcula.
            </Text>
            <Text className="text-base">
              Tal como anunciara a nossos pais: * a Abraão e à sua descendência
              para sempre.
            </Text>
            <Text className="text-base">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
