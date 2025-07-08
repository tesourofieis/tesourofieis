import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageCoracaosantoreinaras() {
  return (
    <PageWrapper>
      <H1 text="Coração Santo, Tu reinarás" />

      <View className="not-content">
        <Text className="text-pretty">
          Refrão: Coração Santo, Tu reinarás Tu nosso encanto sempre serás
          (Bis).
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Como o soldado vela a seu rei, assim meu sangue por Ti darei (Bis).
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Se o mundo iníquo me combater sempre a Teu lado hei de vencer (Bis).
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Jesus soberano deixa-me ser teu guarda d´honra até morrer (Bis).
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Anjos e arcanjos, santos do céu connosco velam o trono Teu (Bis).
        </Text>
      </View>
    </PageWrapper>
  );
}
