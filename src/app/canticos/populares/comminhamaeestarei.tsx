import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageComminhamaeestarei() {
  return (
    <PageWrapper>
      <H1 text="Com minha Mãe estarei" />

      <View className="not-content">
        <Typography className="vernacular">
          Com minha Mãe estarei na santa glória um dia; junto à Virgem Maria, no Céu triunfarei.
        </Typography>
        <Typography className="vernacular">
          Refrão: No Céu, no Céu, com minha Mãe estarei. (2x)
        </Typography>
        <Typography className="vernacular">
          Com minha Mãe estarei; mas já que hei ofendido a seu Jesus querido, as culpas chorarei.
        </Typography>
      </View>
    </PageWrapper>
  );
}
