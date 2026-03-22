import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0515Evora() {
  return (
    <PageWrapper>
      <H1 text="S. Mâncio, B. e Mártir, a 15 de Maio, Na Arquidiocese de Évora" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui Máncio, discípulo Unigéniti tui, Mártyr insígne
          tormentórum tolerántiam tribuísti: quǽsumus; ut sicut ejus passiónem venerámur: ita glóriæ
          ipsíus mereámur esse partícipes. Per eúmdem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó omnipotente e eterno Deus, que ao insigne Mártir Mâncio, discípulo do vosso Unigénito
          Filho, concedestes a força para suportar os tormentos, Vos pedimos que, assim como
          veneramos o seu suplício, assim mereçamos ser participantes da sua glória. Pelo mesmo
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard title="Missa S. Tito" href="/missal/santos/02-06#evangelho" />
    </PageWrapper>
  );
}
