import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0228() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/08-28">
          Missa na festa
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <H2 text="Secreta" />

      <H2 text="Postcomúnio" />
    </PageWrapper>
  );
}
