import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageEucaminharei() {
  return (
    <PageWrapper>
      <H1 text="Eu caminharei" />

      <View className="not-content">
        <Text className="text-pretty">
          Eu caminharei em direcção a Deus, que alegra os filhos seus.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Refrão: Glória ao Pai, glória ao Filho Senhor, glória ao Espírito
          Santo amor.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Em ardente prece e humilde confissão, vamos pedir perdão.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          No seu santo templo tem Deus um altar para connosco estar.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Do seu corpo fez o nosso alimento divino sacramento.
        </Text>
      </View>
    </PageWrapper>
  );
}
