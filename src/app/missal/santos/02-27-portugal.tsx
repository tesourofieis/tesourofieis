import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0227Portugal() {
  return (
    <PageWrapper>
      <H1 text="S. Torquato, Bispo e Mártir, a 27 de Fevereiro" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Dignai-Vos ouvir clementemente, Senhor, as preces do vosso povo, a fim de que sejamos
        auxiliados pelos méritos do B. Torquato, vosso Mártir e Pontífice, em cujo martírio nos
        alegramos. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
