import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0603() {
  return (
    <PageWrapper>
      <H1 text="S. Ovídio, B. e Mártir, a 3 de Junho, Na Arquidiocese de Braga e noutras Dioceses" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me,
        </Link>{" "}
        excepto: Fora do Tempo Pascal como na
        <Link className="link" href="/missal/comum/12confessorespontifices2">
          Missa Sacerdótes tui,
        </Link>{" "}
        excepto:
      </Typography>
      <H3 text="Oração" />Ó Deus, que maravilhosamente ilustrastes a vossa Igreja com a pregação
      apostólica do B. Ovídio, vosso Mártir e Pontífice, concedei-nos propício que intercedam por
      nós os sufrágios daquele de quem recebemos o incremento da religião. Por nosso Senhor...
    </PageWrapper>
  );
}
