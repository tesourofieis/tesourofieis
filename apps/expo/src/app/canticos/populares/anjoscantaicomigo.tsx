import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageAnjoscantaicomigo() {
  return (
    <PageWrapper>
      <H1 text="Ó anjos cantai comigo" />

      <View className="not-content">
        <Text className="text-pretty">
          Ó anjos cantai comigo, ó anjos louvai sem fim, dar graças eu não
          consigo, ó anjos dai-as por mim.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Canta serena minha alma bela jóia em Ti reluz. Já colheste a rica
          palma, já nasceu em mim Jesus.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Ó Jesus que amor tão terno Ó Jesus que amor o Teu, deixas o trono
          supremo vens fazer da terra o céu.
        </Text>
      </View>
    </PageWrapper>
  );
}
