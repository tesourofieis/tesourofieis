import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageSenhoracarmo() {
  return (
    <PageWrapper>
      <H1 text="Nossa Senhora do Carmo" />

      <View className="not-content">
        <Text className="text-pretty">
          Nome de Maria Tão bonito é! Salvai a minha alma Que ela vossa é.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Senhora do Carmo Mandou-me um recado Que reze três vêzes Bendito e
          louvado.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Bendito e louvado Eu hei-de rezar Senhora do Carmo Me há-de ajudar.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          No Céu três mesuras Ao peso da Cruz; reza-se três vêzes Salvai-me
          Jesus!... Salvai-me Jesus!... Salvai-me Jesus!...
        </Text>
      </View>
    </PageWrapper>
  );
}
