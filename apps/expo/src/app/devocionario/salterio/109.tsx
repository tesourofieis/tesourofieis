import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page109() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 109</Text>

          <Language>
            <Text className="latin">
              Dixit Dóminus Dómino meo: * Sede a dextris meis:
            </Text>
            <Text className="vernacular">
              Disse o Senhor ao meu senhor: * senta-te à minha direita:
            </Text>
            <Text className="latin">
              Donec ponam inimícos tuos, * scabéllum pedum tuórum.
            </Text>
            <Text className="vernacular">
              Até que ponha os teus inimigos, * por escabelo de teus pés.
            </Text>
            <Text className="latin">
              Virgam virtútis tuæ emíttet Dóminus ex Sion: * domináre in médio
              inimicórum tuórum.
            </Text>
            <Text className="vernacular">
              O Senhor fará sair de Sião o ceptro de teu poder: * domina tu no
              meio de teus inimigos.
            </Text>
            <Text className="latin">
              Tecum princípium in die virtútis tuæ in splendóribus sanctórum: *
              ex útero ante lucíferum génui te.
            </Text>
            <Text className="vernacular">
              Contigo está o principado no dia de tua força, entre os
              resplendores dos santos: * das minhas entranhas te gerei antes da
              aurora.
            </Text>
            <Text className="latin">
              Jurávit Dóminus, et non pœnitébit eum: * Tu es sacérdos in ætérnum
              secúndum órdinem Melchísedech.
            </Text>
            <Text className="vernacular">
              Jurou o Senhor e se não arrependerá: * tu és sacerdote
              eternamente, segundo a ordem de Melquisedech.
            </Text>
            <Text className="latin">
              Dóminus a dextris tuis, * confrégit in die iræ suæ reges.
            </Text>
            <Text className="vernacular">
              O Senhor está à tua direita, * Ele despedaçou os reis no dia da
              sua ira.
            </Text>
            <Text className="latin">
              Judicábit in natiónibus, implébit ruínas: * conquassábit cápita in
              terra multórum.
            </Text>
            <Text className="vernacular">
              Ajuizará no meio das nações, encherá tudo de ruínas: * esmagará as
              cabeças de muitos na terra.
            </Text>
            <Text className="latin">
              De torrénte in via bibet: * proptérea exaltábit caput.
            </Text>
            <Text className="vernacular">
              Beberá da torrente no caminho: * por isso erguerá a sua cabeça.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
