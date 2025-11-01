import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageLentaecalma() {
  return (
    <PageWrapper>
      <H1 text="Lenta e calma sobre a terra" />

      <View className="not-content">
        <Text className="vernacular">
          Lenta e calma sobre a terra desce a noite, vai-se a luz, Quero agora
          despedir-me, boa noite meu Jesus.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          E vós ó Virgem Maria, dai-nos a bênção também velai por nós esta
          noite, Boa noite minha Mãe.
        </Text>
      </View>
    </PageWrapper>
  );
}
