import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page066() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 66</Text>

          <Language>
            <Text className="latin">
              Deus misereátur nostri, et benedícat nobis: * illúminet vultum
              suum super nos, et misereátur nostri.
            </Text>
            <Text className="vernacular">
              Deus tenha piedade de nós e nos abençoe: * faça resplandecer a sua
              face sobre nós e tenha de nós piedade.
            </Text>
            <Text className="latin">
              Ut cognoscámus in terra viam tuam, * in ómnibus géntibus salutáre
              tuum.
            </Text>
            <Text className="vernacular">
              Para que conheçamos na terra o vosso caminho, * e entre todas as
              gentes a vossa salvação.
            </Text>
            <Text className="latin">
              Confiteántur tibi pópuli, Deus: * confiteántur tibi pópuli omnes.
            </Text>
            <Text className="vernacular">
              Que os povos Vos glorifiquem, ó Deus: * que todos os povos Vos
              glorifiquem.
            </Text>
            <Text className="latin">
              Læténtur et exsúltent gentes: * quóniam júdicas pópulos in
              æquitáte, et gentes in terra dírigis.
            </Text>
            <Text className="vernacular">
              Alegrem-se as gentes e regozijem-se: * porquanto julgais os povos
              com equidade e dirigis as gentes sobre a terra.
            </Text>
            <Text className="latin">
              Confiteántur tibi pópuli, Deus, confiteántur tibi pópuli omnes: *
              terra dedit fructum suum.
            </Text>
            <Text className="vernacular">
              Que os povos Vos glorifiquem, ó Deus, que os povos todos Vos
              glorifiquem: * a terra deu o seu fruto.
            </Text>
            <Text className="latin">
              Benedícat nos Deus, Deus noster, benedícat nos Deus: * et métuant
              eum omnes fines terræ.
            </Text>
            <Text className="vernacular">
              Abençoe-nos Deus, o nosso Deus, abençoe-nos Deus: * e temam-n’O
              todos os confins da terra.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
