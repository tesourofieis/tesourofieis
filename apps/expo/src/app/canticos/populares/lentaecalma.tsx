import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageLentaecalma() {
  return (
    <PageWrapper>
      <H1 text="Lenta e calma sobre a terra" />

      <View className="not-content">
        <Typography className="vernacular">
          Lenta e calma sobre a terra desce a noite, vai-se a luz, Quero agora
          despedir-me, boa noite meu Jesus.
        </Typography>
        <Typography className="vernacular">
          E vós ó Virgem Maria, dai-nos a bênção também velai por nós esta
          noite, Boa noite minha Mãe.
        </Typography>
      </View>
    </PageWrapper>
  );
}
