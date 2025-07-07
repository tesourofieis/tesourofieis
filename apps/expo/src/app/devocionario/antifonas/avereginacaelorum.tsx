import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAvereginacaelorum() {
  return (
    <PageWrapper>
      <H1 text="Ave, Regína cælórum" />

      <Language>
        <Text className="latin">
          Ave, Regína cælórum, Ave, Dómina Angelórum: Salve radix, salve porta,
          Ex qua mundo lux est orta: Gaude, Virgo gloriósa, Super omnes
          speciósa, Vale, o valde decóra, Et pro nobis Christum exóra.
        </Text>
        <Text className="vernacular">
          Ave, ó Rainha dos Céus, Ave ó Senhora dos Anjos. Salve, ó rebento de
          Jessé, salve ó porta por onde veio ao mundo a luz salvadora. Exultai,
          ó Virgem gloriosa, de beleza sem igual. Eu Vos saúdo, ó formosura
          soberana, rogai a Cristo por nós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dignaré me laudáre te, Virgo
          sacráta.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Dignai-Vos aceitar, Senhora, os
          meus louvores.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Da mihi virtútem contra hostes
          tuos.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E dai-me coragem para combater
          os vossos inimigos.
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Concéde, miséricors Deus, fragilitáti nostræ præsídium; ut, qui sanctæ
          Dei Genetrícis memóriam ágimus; intercessiónis eíus auxílio, a nostris
          iniquitátibus resurgámus. Per eúmdem Christum Dóminum nóstrum.
        </Text>
        <Text className="vernacular">
          Concedei, misericordioso Deus, proteção à nossa fragilidade; para, ao
          honrarmos a memória da Santa Mãe de Deus, com o auxílio de sua
          intercessão, ressurjamos de nossas iniquidades. Pelo mesmo Cristo,
          Senhor nosso.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
