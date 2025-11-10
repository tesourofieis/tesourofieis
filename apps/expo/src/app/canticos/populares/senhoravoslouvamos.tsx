import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSenhoravoslouvamos() {
  return (
    <PageWrapper>
      <H1 text="Senhora, nós Vos louvamos" />

      <View className="not-content">
        <Typography className="vernacular">
          Senhora, nós Vos louvamos, Em dor e amor, noite e dia, Senhora, nós
          Vos louvamos.
        </Typography>
        <Typography className="vernacular">
          Refrão: Hosana, Hosana, Rainha de Portugal Hosana, Hosana, Virgem
          Maria.
        </Typography>
        <Typography className="vernacular">
          Senhora, nós Vos rezamos, Quem Vos reza, em Vós confia, Senhora, nós
          Vos rezamos!
        </Typography>
        <Typography className="vernacular">
          Senhora, nós Vos cantamos, Causa da nossa alegria, Senhora, nós Vos
          cantamos!
        </Typography>
        <Typography className="vernacular">
          Senhora, nós Vos aclamamos, No altar da Cova da Iria, Senhora, nós Vos
          aclamamos!
        </Typography>
      </View>
    </PageWrapper>
  );
}
