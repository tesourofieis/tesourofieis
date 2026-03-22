import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1010() {
  return (
    <PageWrapper>
      <H1 text="S. Francisco de Bórgia, a 10 de Outubro" />

      <Typography className="comment">
        Depois de ter-se ocupado da instalação de seus filhos, S. Francisco entrou para a Companhia
        de Jesus, onde, desprezando as honras, vedou-se, por votos, em espirito de humildade (Or.) o
        accesso às dignidades. Todavia, em obediência, teve de aceitar o cargo de geral da
        Companhia. Morreu em 1572.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Dómine Jesu Christe, veræ humilitátis et exémplar et prǽmium: quǽsumus; ut, sicut beátum
          Francíscum in terréni honóris contémptu imitatórem tui gloriósum effecísti, ita nos
          ejúsdem imitatiónis et glóriæ tríbuas esse consórtes: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Senhor Jesus Cristo, prémio e modelo da verdadeira humildade, concedei-nos, Vos rogamos,
          que, assim como permitistes que o B. Francisco se tornasse vosso glorioso imitador no
          desprezo das honras terrenas, assim também nos façais imitar as suas virtudes e
          compartilhar da sua glória. Ó Vós, que, sendo...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
