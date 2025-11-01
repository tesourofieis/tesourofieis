import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageCoracaosantoreinaras() {
  return (
    <PageWrapper>
      <H1 text="Coração Santo, Tu reinarás" />

      <View className="not-content">
        <Text className="vernacular">
          Refrão: Coração Santo, Tu reinarás Tu nosso encanto sempre serás
          (Bis).
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Como o soldado vela a seu rei, assim meu sangue por Ti darei (Bis).
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Se o mundo iníquo me combater sempre a Teu lado hei de vencer (Bis).
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Jesus soberano deixa-me ser teu guarda d´honra até morrer (Bis).
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Anjos e arcanjos, santos do céu connosco velam o trono Teu (Bis).
        </Text>
      </View>
    </PageWrapper>
  );
}
