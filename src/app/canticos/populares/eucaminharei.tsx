import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageEucaminharei() {
  return (
    <PageWrapper>
      <H1 text="Eu caminharei" />

      <View className="not-content">
        <Typography className="vernacular">
          Eu caminharei em direcção a Deus, que alegra os filhos seus.
        </Typography>
        <Typography className="vernacular">
          Refrão: Glória ao Pai, glória ao Filho Senhor, glória ao Espírito Santo amor.
        </Typography>
        <Typography className="vernacular">
          Em ardente prece e humilde confissão, vamos pedir perdão.
        </Typography>
        <Typography className="vernacular">
          No seu santo templo tem Deus um altar para connosco estar.
        </Typography>
        <Typography className="vernacular">
          Do seu corpo fez o nosso alimento divino sacramento.
        </Typography>
      </View>
    </PageWrapper>
  );
}
