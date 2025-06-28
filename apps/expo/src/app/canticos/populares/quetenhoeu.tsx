import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function PageQuetenhoeu() {
  return (
    <PageWrapper>
      <Text className="h1">Que tenho eu, meu Deus</Text>

      <View className="not-content">
        <Text className="text-base">
          Que tenho eu, meu Deus, p'ra pôr sobre a patena Que as mãos do
          sacerdote elevam no altar? A não ser esta imensa, esta infinita pena,
          De nada ter p'ra dar.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Tomai e recebei, as horas do meu dia Alegrias e dores, penas e
          trabalhos. Fora eu rico, Senhor, e muito Vos daria, Mas sei que nada
          valho.
        </Text>
      </View>
    </PageWrapper>
  );
}
