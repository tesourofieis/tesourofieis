import { Typography } from "~/components/typography";
import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageCoracaosantoreinaras() {
  return (
    <PageWrapper>
      <H1 text="Coração Santo, Tu reinarás" />

      <View className="not-content">
        <Typography className="vernacular">
          Refrão: Coração Santo, Tu reinarás Tu nosso encanto sempre serás
          (Bis).
        </Typography>
        <Typography className="vernacular">{"\n"}</Typography>
        <Typography className="vernacular">
          Como o soldado vela a seu rei, assim meu sangue por Ti darei (Bis).
        </Typography>
        <Typography className="vernacular">{"\n"}</Typography>
        <Typography className="vernacular">
          Se o mundo iníquo me combater sempre a Teu lado hei de vencer (Bis).
        </Typography>
        <Typography className="vernacular">{"\n"}</Typography>
        <Typography className="vernacular">
          Jesus soberano deixa-me ser teu guarda d´honra até morrer (Bis).
        </Typography>
        <Typography className="vernacular">{"\n"}</Typography>
        <Typography className="vernacular">
          Anjos e arcanjos, santos do céu connosco velam o trono Teu (Bis).
        </Typography>
      </View>
    </PageWrapper>
  );
}
