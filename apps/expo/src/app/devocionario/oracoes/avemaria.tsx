import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAvemaria() {
  return (
    <PageWrapper>
      <H1 text="Ave Maria" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Ave, María, grátia
          plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus
          fructus ventris tui, Jesus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ave, Maria, Cheia de
          graça, o Senhor é convosco; bendita sois Vós entre as mulheres, e
          bendito é o fruto do Vosso ventre, Jesus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sancta María, Mater
          Dei, ora pro nobis peccatóribus, nunc, et in hora mortis nostræ.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Santa Maria, Mãe de
          Deus, rogai por nós, pecadores, agora e na hora da nossa morte.
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
