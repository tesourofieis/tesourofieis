import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function PageComminhamaeestarei() {
  return (
    <PageWrapper>
      <Text className="h1">Com minha Mãe estarei</Text>

      <View className="not-content">
        <Text className="text-base">
          Com minha Mãe estarei na santa glória um dia; junto à Virgem Maria, no
          Céu triunfarei.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: No Céu, no Céu, com minha Mãe estarei. (2x)
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Com minha Mãe estarei; mas já que hei ofendido a seu Jesus querido, as
          culpas chorarei.
        </Text>
      </View>
    </PageWrapper>
  );
}
