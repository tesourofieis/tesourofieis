import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page31Missamaria5() {
  return (
    <PageWrapper>
      <H1 text="5.ª Missa - Missa Salve, sancta Parens da Virgem Maria, desde o Pentecostes até ao Advento" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/29missamaria3">
          3.ª Missa
        </Link>{" "}
        , excepto o seguinte:
      </Text>

      <H3 text="Gradual" />

      <Language>
        <Text className="latin">
          Benedícta et venerábilis es, Virgo María: quæ sine tactu pudóris
          invénia es Mater Salvatóris.<Text className="versicle"> ℣. </Text>
          Virgo, Dei Génetrix, quem totus non capit orbis, in tua se clausit
          víscera factus homo.
        </Text>
        <Text className="vernacular">
          Bendita e venerável sois, ó Virgem Maria, que fostes Mãe do Salvador,
          sem que a vossa pureza sofresse a mais leve ofensa.
          <Text className="versicle"> ℣. </Text>Ó Virgem, Mãe de Deus, Aquele
          que nem todo o universo é capaz de conter, quando se fez homem, esteve
          encerrado no vosso seio.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Post partum,
          Virgo, invioláta permansísti: Dei Génetrix, intercéde pro nobis.
          Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Depois de
          haverdes dado à luz, permanecestes Virgem imaculada: Intercedei por
          nós, ó Mãe de Deus. Aleluia.
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Lc. 1, 28 & 42</Text>

      <Language>
        <Text className="latin">
          Ave, María, grátia plena; Dóminus tecum: benedícta tu in muliéribus,
          et benedíctus fructus ventris tui.
        </Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça: o Senhor é convosco: bendita sois vós
          entre as mulheres, e bendito é o fruto do vosso ventre.
        </Text>
      </Language>
    </PageWrapper>
  );
}
