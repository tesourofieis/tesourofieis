import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageQuetenhoeu() {
  return (
    <PageWrapper>
      <H1 text="Que tenho eu, meu Deus" />

      <View className="not-content">
        <Typography className="vernacular">
          Que tenho eu, meu Deus, p'ra pôr sobre a patena Que as mãos do sacerdote elevam no altar?
          A não ser esta imensa, esta infinita pena, De nada ter p'ra dar.
        </Typography>
        <Typography className="vernacular">
          Refrão: Tomai e recebei, as horas do meu dia Alegrias e dores, penas e trabalhos. Fora eu
          rico, Senhor, e muito Vos daria, Mas sei que nada valho.
        </Typography>
      </View>
    </PageWrapper>
  );
}
