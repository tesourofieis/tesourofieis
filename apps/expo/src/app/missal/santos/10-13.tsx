import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1013() {
  return (
    <PageWrapper>
      <H1 text="S. Eduardo, Conf., a 13 de Outubro" />

      <Typography className="comment">
        Eduardo, cognominado o Confessor, era neto de Santo Eduardo, rei e
        martyr. Elevado ao trono da Inglaterra mostrou, diz um historiador, o
        que pode um rei verdadeiramente pai de seus súbditos. Todos os que se
        lhe aproximavam queriam imitar, na conduta própria, a vida do rei. Na
        sua côrte não se conhecia ambição, amor às riquezas, nem as paixões
        desgraçadamente tão comuns entre os cortesãos. Era por todos chamado o
        pai dos orfãos e dos indigentes, e a sua maior alegria era poder dar
        esmolas (Ep.). Concedia tudo o que se pedia em nome de S. João
        Evangelista. Morreu em 1066.
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
          Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis glória
          coronásti: fac nos, quǽsumus; ita eum venerári in terris, ut cum eo
          regnáre póssimus in cœlis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que coroastes com a glória eterna o B. Rei Eduardo, vosso
          Confessor, fazei, Vos suplicamos, que o veneremos de tal modo na terra
          que com ele possamos reinar no céu. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
