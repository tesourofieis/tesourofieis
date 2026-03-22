import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0304() {
  return (
    <PageWrapper>
      <H1 text="S. Casimiro, Conf., a 4 de Março" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui inter regáles delicias et mundi illécebras sanctum Casimírum virtúte constantiæ
          roborásti: quǽsumus; ut ejus intercessióne fidéles tui terréna despíciant, et ad cœléstia
          semper aspírent. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que no meio das delícias régias e dos atractivos do mundo fortalecestes S.
          Casimiro com a virtude da constância, fazei, Vos rogamos, que por sua intercessão os fiéis
          desprezem os bens terrenos e aspirem sempre aos celestiais. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
