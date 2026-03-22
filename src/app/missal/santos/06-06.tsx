import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0606() {
  return (
    <PageWrapper>
      <H1 text="S. Norberto, B e Conf., a 6 de Junho" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Norbértum Confessórem tuum atque Pontíficem verbi tui præcónem exímium
          effecísti, et per eum Ecclésiam tuam nova prole fœcundásti: præsta, quǽsumus; ut, ejúsdem
          suffragántibus méritis, quod ore simul et ópere dócuit, te adjuvánte, exercére valeámus.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que dispusestes que o B. Norberto, vosso Confessor e Pontífice, fosse exímio
          pregador da vossa palavra, e que por ele destes à vossa Igreja uma nova família,
          concedei-nos, Vos imploramos, que, auxiliados com seus méritos, possamos com vossa
          assistência pôr em prática tudo quanto ensinou com suas palavras e acções. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
