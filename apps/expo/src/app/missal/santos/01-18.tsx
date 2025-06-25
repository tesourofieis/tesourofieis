import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../santos/02-22";

export default function Page0118() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Missa Votiva da Cadeira de S. Pedro em Roma, a 18 de Janeiro
          </Text>

          <Text className="comment">
            A manifestação da divindade de Jesus, que caracteriza o Tempo depois
            da Epifania, leva-nos ao reconhecimento de sua realeza sobre as
            nossas almas. Cristo é o chefe da Igreja. Devendo, porém, um dia,
            tornar a subir ao céu, comunica os seus poderes divinos a um homem,
            pois, desde a Encarnação, é pelo intermédio do homem que Deus quer,
            normalmente, estabelecer as suas relações connosco. Esse homem,
            constituído por Jesus «Príncipe» das almas (Intr.) e, «sobre o qual
            ele edificou a sua Igreja» (Ev.) é S. Pedro. Vigário de Cristo,
            sentar-se-á na cátedra infalível que ocupava Jesus, e terá nas mãos
            as chaves, símbolo da autoridade suprema (Or., Ev.). Lemos na
            Epístola, o exordio da primeira carta de S. Pedro. Todas as
            epístolas do Apóstolo manifestam o carácter de sua primazia. Roma
            será, neste mundo, a capital, do reino dos céus. A Roma virá Pedro;
            sobre o abençoado solo de Roma há-de verter o seu sangue, será bispo
            de Roma. Esta festa é um testemunho litúrgico da primazia de honra e
            jurisdição dada à cátedra de Roma, conservada no abside da basílica
            de S. Pedro. Durante a sua permanência em Coríntio, no ano 58, S.
            Paulo escreveu uma Epístola aos Romanos. Cerca do ano 62, foi levado
            preso para Roma e ali ficou dois anos. Novamente encarcerado, no ano
            67, foi martirizado com S. Pedro, na cidade, de ora em diante,
            eterna. A liturgia une, por uma segunda oração, o glorioso nome do
            Apóstolo ao do primeiro bispo de Roma. Rezemos hoje pelo Papa,
            sucessor de S. Pedro, suplicando que el possa exercer os poderes
            divinos que lhe foram comunicados por Jesus, Filho de Deus.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
