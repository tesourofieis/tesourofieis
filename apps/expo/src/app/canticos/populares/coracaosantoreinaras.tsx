import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageCoracaosantoreinaras() {
  return (
    <PageWrapper>
      <H1 text="Coração Santo, Tu reinarás" />

      <View className="not-content">
        <Text className="text-base">
          Refrão: Coração Santo, Tu reinarás Tu nosso encanto sempre serás
          (Bis).
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Como o soldado vela a seu rei, assim meu sangue por Ti darei (Bis).
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Se o mundo iníquo me combater sempre a Teu lado hei de vencer (Bis).
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Jesus soberano deixa-me ser teu guarda d´honra até morrer (Bis).
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Anjos e arcanjos, santos do céu connosco velam o trono Teu (Bis).
        </Text>
      </View>
    </PageWrapper>
  );
}
