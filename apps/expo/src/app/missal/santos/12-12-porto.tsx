import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page1212Porto() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. Pantaleão, a 12 de Dezembro, Na cidade do Porto e subúrbios" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />Ó Deus, que quiseste que o corpo do vosso glorioso
      Mártir Pantaleão fosse trasladado até nós e que esta cidade seja defendida
      com seu patrocínio, concedei-nos benigno, Vos suplicamos, que pelas suas
      preces e méritos sejamos trasladados após esta vida à bem-aventurança
      eterna. Por nosso Senhor...
    </PageWrapper>
  );
}
