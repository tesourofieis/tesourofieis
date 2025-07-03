import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageAnjoscantaicomigo() {
  return (
    <PageWrapper>
      <H1 text="Ó anjos cantai comigo" />

      <View className="not-content">
        <Text className="text-base">
          Ó anjos cantai comigo, ó anjos louvai sem fim, dar graças eu não
          consigo, ó anjos dai-as por mim.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Canta serena minha alma bela jóia em Ti reluz. Já colheste a rica
          palma, já nasceu em mim Jesus.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Ó Jesus que amor tão terno Ó Jesus que amor o Teu, deixas o trono
          supremo vens fazer da terra o céu.
        </Text>
      </View>
    </PageWrapper>
  );
}
