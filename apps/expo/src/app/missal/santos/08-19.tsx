import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0819() {
  return (
    <PageWrapper>
      <H1 text="S. João Eudes, Conf., a 19 de Agosto" />

      <Typography className="comment">
        Ordenado sacerdote em 1625, fundou em 1643 a Congregação das religiosas
        de Jesus e de Maria, chamadas Eudistas, e, cerca de 1644, a Congregação
        das Filhas de Nossa Senhora da Caridade. Celebre como pregador e como
        escritor ascético, foi o promotor do culto público dos Sagrado Corações
        de Jesus e de Maria (Or.). Faleceu em Caen a 19 de Agosto de 1680. Sua
        santidade o Papa Pio XI o incluiu no número dos santos no dia de
        Pentecostes do ano santo e estendeu o ofício e a missa à toda a Igreja.
      </Typography>

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
          Deus, qui beátum Joánnem, Confessórem tuum, ad cultum sacrórum Córdium
          Jesu et Maríæ rite promovéndum, mirabíliter inflammásti, et per eum
          novas in Ecclésia tua famílias congregáre voluísti: præsta, quǽsumus;
          ut, cujus pia mérita venerámur, virtútum quoque instruámur exémplis.
          Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que, para promover o culto em honra dos Sagrados Corações de
          Jesus e de Maria, inflamastes com zelo admirável o B. João, vosso
          Confessor, e por ele Vos dignastes criar novas famílias na vossa
          Igreja, concedei-nos, Vos pedimos, que sejamos edificados com os
          exemplos das virtudes daquele cujos piedosos méritos veneramos. Por
          nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
