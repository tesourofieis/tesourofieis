import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1019() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro de Alcântara, Conf., a 19 de Outubro" />

      <Typography className="comment">
        Nascido em Alcântara, na Espanha, de pais nobres, Pedro distribuiu seus bens em esmolas
        (Ev.) e, aos dezesseis annos, entrou na Ordem Seráfica de São Francisco. Rigoroso observador
        da regra primitiva do instituto franciscano, levou uma vida muito austera. Da sua grande
        devoção à paixão de Jesus, nasceu-lhe extraordinário amor à penitência. Morreu em 1562 e,
        aparecendo a Santa Teresa, disse-lhe Bendita penitência que me valeu tão grande glória.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Petrum Confessórem tuum admirábilis pœniténtiæ et altíssimæ
          contemplatiónis múnere illustráre dignátus es: da nobis, quǽsumus; ut, ejus suffragántibus
          méritis, carne mortificáti, facílius cœléstia capiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que Vos dignastes ilustrar o B. Pedro, Confessor, com os dons de uma penitência e
          de uma contemplação sublimes, permiti, Vos suplicamos, que, auxiliados com seus méritos e
          intercessão e mortificando o nosso corpo, obtenhamos mais facilmente os bens celestiais.
          Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard href="/missal/santos/01-15-1#epístola" title="S. Paulo, 1.º Eremita, Conf." />
    </PageWrapper>
  );
}
