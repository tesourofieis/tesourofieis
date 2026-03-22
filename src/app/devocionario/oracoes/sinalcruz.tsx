import { H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSinalCruz() {
  return (
    <PageWrapper>
      <H2 text="Sinal da Cruz" />
      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> In nómine Patris, et Fílii, et Spíritus
          Sancti.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Em nome do Pai e do Filho e do Espírito
          Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
