import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0529() {
  return (
    <PageWrapper>
      <H1 text="S. Maria Madalena de Pazzi, Virgem, a 29 de Maio" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, vrginitátis amátor, qui beátam Maríam Magdalénam Vírginem, tuo
          amóre succénsam, cœléstibus donis decorásti: da; ut, quam festíva
          celebritáte venerámur, puritáte et caritáte imitémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que amais a virgindade e ornastes com dons celestiais a B.
          Maria Madalena, vossa Virgem, cujo coração estava abrasado em amor por
          Vós, concedei-nos que, honrando-a nós com a celebração desta festa, a
          imitemos também na sua pureza e caridade. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
