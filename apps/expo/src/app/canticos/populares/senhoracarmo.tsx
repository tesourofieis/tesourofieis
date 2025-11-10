import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSenhoracarmo() {
  return (
    <PageWrapper>
      <H1 text="Nossa Senhora do Carmo" />

      <View className="not-content">
        <Typography className="vernacular">
          Nome de Maria Tão bonito é! Salvai a minha alma Que ela vossa é.
        </Typography>
        <Typography className="vernacular">
          Senhora do Carmo Mandou-me um recado Que reze três vêzes Bendito e
          louvado.
        </Typography>
        <Typography className="vernacular">
          Bendito e louvado Eu hei-de rezar Senhora do Carmo Me há-de ajudar.
        </Typography>
        <Typography className="vernacular">
          No Céu três mesuras Ao peso da Cruz; reza-se três vêzes Salvai-me
          Jesus!... Salvai-me Jesus!... Salvai-me Jesus!...
        </Typography>
      </View>
    </PageWrapper>
  );
}
