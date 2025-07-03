import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageSenhoravoslouvamos() {
  return (
    <PageWrapper>
      <H1 text="Senhora, nós Vos louvamos" />

      <View className="not-content">
        <Text className="text-base">
          Senhora, nós Vos louvamos, Em dor e amor, noite e dia, Senhora, nós
          Vos louvamos.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Hosana, Hosana, Rainha de Portugal Hosana, Hosana, Virgem
          Maria.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Senhora, nós Vos rezamos, Quem Vos reza, em Vós confia, Senhora, nós
          Vos rezamos!
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Senhora, nós Vos cantamos, Causa da nossa alegria, Senhora, nós Vos
          cantamos!
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Senhora, nós Vos aclamamos, No altar da Cova da Iria, Senhora, nós Vos
          aclamamos!
        </Text>
      </View>
    </PageWrapper>
  );
}
