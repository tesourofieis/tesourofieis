import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0308() {
  return (
    <PageWrapper>
      <H1 text="S. João de Deus, Confessor, a 8 de Março" />

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
          Deus, qui beátum Joánnem, tuo amóre succénsum, inter flammas innóxium
          incédere fecísti, et per eum Ecclésiam tuam nova prole fœcundásti:
          præsta, ipsíus suffragántibus méritis; ut igne caritátis tuæ vitia
          nostra curéntur, et remédia nobis ætérna provéniant. Per Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que, depois de abrasardes a alma do B. João no vosso amor, o
          fizestes passar incólume por entre as chamas, e que por meio dele
          enriquecestes a Igreja com uma nova prole, concedei-nos pelos seus
          méritos que com o fogo da vossa caridade sejamos curados de nossos
          vícios e providos dos remédios eternos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/pentecostes/pent17-0#evangelho"
        title="Décimo Sétimo Domingo depois de Pentecostes"
      />
    </PageWrapper>
  );
}
