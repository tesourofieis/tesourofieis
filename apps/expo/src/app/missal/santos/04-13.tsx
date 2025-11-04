import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0413() {
  return (
    <PageWrapper>
      <H1 text="S. Hermenegildo, Mártir, a 13 de Abril" />
      <Typography className="aside">
        Fora do Tempo Pascal como na Missa{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          In virtúte tua
        </Link>
        , excepto a Oração e o Evangelho. Dentro do Tempo Pascal como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>
        , excepto a Oração e o Evangelho.
      </Typography>

      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Deus, qui beátum Hermenegíldum Mártyrem tuum cœlésti regno terrénum
          postpónere docuísti: da, quǽsumus, nobis; ejus exémplo cadúca
          despícere atque ætérna sectári. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que ensinastes o S. Hermenegildo, vosso Mártir, a preferir o
          reino celestial ao terrestre, concedei-nos a graça, Vos suplicamos,
          de, seguindo seus exemplos, desprezarmos os bens caducos e amarmos os
          eternos. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/comum/2martirpontificeforapascal#evangelho"
        title="Mártir Pontífice - Missa Státuit ei Dóminus"
      />
    </PageWrapper>
  );
}
