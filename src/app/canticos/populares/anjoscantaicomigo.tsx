import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAnjoscantaicomigo() {
  return (
    <PageWrapper>
      <H1 text="Ó anjos cantai comigo" />

      <View className="not-content">
        <Typography className="vernacular">
          Ó anjos cantai comigo, ó anjos louvai sem fim, dar graças eu não consigo, ó anjos dai-as
          por mim.
        </Typography>
        <Typography className="vernacular">
          Canta serena minha alma bela jóia em Ti reluz. Já colheste a rica palma, já nasceu em mim
          Jesus.
        </Typography>
        <Typography className="vernacular">
          Ó Jesus que amor tão terno Ó Jesus que amor o Teu, deixas o trono supremo vens fazer da
          terra o céu.
        </Typography>
      </View>
    </PageWrapper>
  );
}
