import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageParcedomine() {
  return (
    <PageWrapper>
      <H1 text="Parce domine" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Parce, Domine, parce
          populo tuo:
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Perdoai, Senhor,
          perdoai ao vosso povo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ne in aeternum
          irascaris nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Não fiqueis sempre
          irritado contra nós.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
