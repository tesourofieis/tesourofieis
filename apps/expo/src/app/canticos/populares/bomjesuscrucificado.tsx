import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageBomjesuscrucificado() {
  return (
    <PageWrapper>
      <H1 text="Senhor meu Bom Jesus Crucificado" />

      <View className="not-content">
        <Typography className="vernacular">
          Senhor meu Bom Jesus Crucificado, Na Cruz que meu pecado preparou! Mas
          quem não há-de amar, Jesus amado A quem tão sem media nos amou.
        </Typography>
        <Typography className="vernacular">
          Refrão: Ó bom Jesus amantíssimo, Nós não queremos mais pecar, Senhor
          Doce Jesus misericordiosíssimo, Nós Vos juramos todo o nosso amor.
        </Typography>
        <Typography className="vernacular">
          Ó bom Jesus que nos amastes tanto Até morrerdes numa cruz por nós,
          Dai-nos a vossa graça e temos santo Que a nossa vida seja sempre em
          nós.
        </Typography>
      </View>
    </PageWrapper>
  );
}
