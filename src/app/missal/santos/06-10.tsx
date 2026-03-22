import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0610() {
  return (
    <PageWrapper>
      <H1 text="S. Margarida, Rainha, Viúva, a 10 de Junho" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátam Margarítam regínam exímia in páuperes caritáte inirábilem effecísti: da;
          ut, ejus intercessióne et exémplo, tua in córdibus nostris cáritas júgiter augeátur. Per
          Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que tornastes admirável a B. Margarida, rainha, concedendo-lhe uma caridade
          extraordinária para com os pobres, permiti que, pelo seu exemplo e intercessão, a vossa
          caridade cresça continuamente nos nossos corações. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
