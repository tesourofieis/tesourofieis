import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageBenedictusdeus() {
  return (
    <PageWrapper>
      <H1 text="Benedictus Deus" />

      <Language>
        <Typography className="latin">
          Benedíctus Deus, et Pater Dómini nostri Jesu Christi, Pater
          misericordiárum, et Deus totíus consolationis, qui consolátur nos in
          omni tribulatióne nostra.
        </Typography>
        <Typography className="vernacular">
          Bendito seja Deus, e Pai de nosso Senhor Jesus Cristo, Pai de
          misericórdias e Deus de todas as consolações, O qual nos consola em
          toda nossa tribulação.
        </Typography>
        <Typography className="latin">Deo grátias.</Typography>
        <Typography className="vernacular">Graças a Deus.</Typography>
      </Language>
    </PageWrapper>
  );
}
