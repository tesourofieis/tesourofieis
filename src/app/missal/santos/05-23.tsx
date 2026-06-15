import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0523() {
  return (
    <PageWrapper>
      <H1 text="S. Basileu, B. e Mártir, a 23 de Maio, Na Diocese do Porto" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Dignai-Vos acolher em vossa clemência, Senhor, Vos suplicamos, as preces do vosso povo, a
        fim de que sejamos auxiliados pelos méritos do B. Basileu, vosso Mártir e Pontífice, que nos
        conforta com a recordação dos seus sofrimentos. Por nosso Senhor...
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Recebei, Senhor, os dons que devidamente Vos oferecemos; e, tendo Vós em atenção os méritos
        do B. Basileu, vosso Mártir e Pontífice, permiti que nos sirvam de auxílio para alcançarmos
        a salvação. Por nosso Senhor...
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Havendo Vós, Senhor, saciado a vossa família com os sacrossantos dons, confortai-nos
        constantemente, Vos suplicamos, com a intercessão daquele cuja solenidade celebramos. Por
        nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
