import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageBendizemosoteunome() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Bendizemos o Teu Nome</Text>

          <View className="not-content">
            <Text className="text-base">
              Bendizemos o Teu nome, Mãe do céu, Virgem Maria, Bendizemos à
              porfia O Teu Filho Salvador.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Refrão: Aqui vimos, Mãe Querida, Consagra-Te o nosso Amor. (bis)
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Esmagaste, ó Virgem Santa, Toda bela e Imaculada, A cabeça
              envenenada, Do dragão enganador.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Todo o mundo, ó Mãe bendita, Cheio está das Tuas glórias, De
              perpétuas memórias, De Teu nome e Teu louvor.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Advogada poderosa, O universo em Ti confia, Porque és Tu refúgio e
              guia, Para o justo e pecador.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              És conforto dos aflitos, És das graças dispenseira, És da paz a
              mensageira, Nossa esp’rança e nosso amor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
