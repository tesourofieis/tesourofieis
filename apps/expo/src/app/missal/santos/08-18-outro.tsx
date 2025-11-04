import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0818Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Roque, Confessor, a 18 de Agosto" />
      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Senhor, Vos rogamos, o vosso povo com incessante bondade; e, pelos
        sufrágios e méritos do B. Roque, livrai-o de todo o contágio na alma e
        no corpo. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
