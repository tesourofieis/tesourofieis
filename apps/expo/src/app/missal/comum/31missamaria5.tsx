import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page31Missamaria5() {
  return (
    <PageWrapper>
      <H1 text="5.ª Missa - Missa Salve, sancta Parens da Virgem Maria, desde o Pentecostes até ao Advento" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/29missamaria3">
          3.ª Missa
        </Link>{" "}
        , excepto o seguinte:
      </Typography>

      <H3 text="Gradual" />

      <Language>
        <Typography className="latin">
          Benedícta et venerábilis es, Virgo María: quæ sine tactu pudóris
          invénia es Mater Salvatóris.<Typography className="versicle"> ℣. </Typography>
          Virgo, Dei Génetrix, quem totus non capit orbis, in tua se clausit
          víscera factus homo.
        </Typography>
        <Typography className="vernacular">
          Bendita e venerável sois, ó Virgem Maria, que fostes Mãe do Salvador,
          sem que a vossa pureza sofresse a mais leve ofensa.
          <Typography className="versicle"> ℣. </Typography>Ó Virgem, Mãe de Deus, Aquele
          que nem todo o universo é capaz de conter, quando se fez homem, esteve
          encerrado no vosso seio.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>Post partum,
          Virgo, invioláta permansísti: Dei Génetrix, intercéde pro nobis.
          Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>Depois de
          haverdes dado à luz, permanecestes Virgem imaculada: Intercedei por
          nós, ó Mãe de Deus. Aleluia.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Lc. 1, 28 & 42</Typography>

      <Language>
        <Typography className="latin">
          Ave, María, grátia plena; Dóminus tecum: benedícta tu in muliéribus,
          et benedíctus fructus ventris tui.
        </Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça: o Senhor é convosco: bendita sois vós
          entre as mulheres, e bendito é o fruto do vosso ventre.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
