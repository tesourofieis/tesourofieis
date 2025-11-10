import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0522Braga() {
  return (
    <PageWrapper>
      <H1 text="B. B. João B. Machado e Outros, Ms., a 22 de Maio, Na Arquidiocese de Braga e noutros lugares" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/10martires">
          Missa Sancti tui
        </Link>{" "}
        , excepto: Fora do Tempo Pascal como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Deixai-Vos aplacar, Senhor, Vos pedimos, e concedei-nos o vosso auxílio;
        e pela intercessão dos vossos B. B. Mártires João Baptista e seus
        Companheiros estendei sobre nós a vossa mão misericordiosa. Por nosso
        Senhor...
      </Typography>
    </PageWrapper>
  );
}
