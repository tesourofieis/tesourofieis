import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageEucaminharei() {
  return (
    <PageWrapper>
      <H1 text="Eu caminharei" />

      <View className="not-content">
        <Text className="text-base">
          Eu caminharei em direcção a Deus, que alegra os filhos seus.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Glória ao Pai, glória ao Filho Senhor, glória ao Espírito
          Santo amor.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Em ardente prece e humilde confissão, vamos pedir perdão.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          No seu santo templo tem Deus um altar para connosco estar.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Do seu corpo fez o nosso alimento divino sacramento.
        </Text>
      </View>
    </PageWrapper>
  );
}
