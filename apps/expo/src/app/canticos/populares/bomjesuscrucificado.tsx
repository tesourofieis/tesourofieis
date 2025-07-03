import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function PageBomjesuscrucificado() {
  return (
    <PageWrapper>
      <Text className="h1">Senhor meu Bom Jesus Crucificado</Text>

      <View className="not-content">
        <Text className="text-base">
          Senhor meu Bom Jesus Crucificado, Na Cruz que meu pecado preparou! Mas
          quem não há-de amar, Jesus amado A quem tão sem media nos amou.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Ó bom Jesus amantíssimo, Nós não queremos mais pecar, Senhor
          Doce Jesus misericordiosíssimo, Nós Vos juramos todo o nosso amor.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Ó bom Jesus que nos amastes tanto Até morrerdes numa cruz por nós,
          Dai-nos a vossa graça e temos santo Que a nossa vida seja sempre em
          nós.
        </Text>
      </View>
    </PageWrapper>
  );
}
