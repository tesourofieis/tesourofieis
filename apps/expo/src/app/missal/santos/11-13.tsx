import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1113() {
  return (
    <PageWrapper>
      <H1 text="S. Diogo, Conf., a 13 de Novembro" />

      <Text className="comment">
        Nascido na Espanha, pelo ano de 1400, São Diogo abandonou tudo oque
        possuía (Ev., Comm.) e entrou em Arrizafa no convento dos Irmãos
        Menores, na qualidade de irmão leigo. Entregou-se com grande fervor à
        contemplação e recebeu de Deus luzes tão vivas que falava do céu de modo
        todo divino. Nas ilhas Canárias, o seu ardente desejo do martírio foi,
        em parte, satisfeito por toda sorte de tribulações (Ev.). De volta à
        Roma, no ano do jubileu sob o pontificado de Nicolau V, cuidou dos
        doentes, no convento de Ara Cæli, cumprindo esse dever com tanta
        caridade que, embora a fome desolasse a cidade, aos que foram confiados
        a seus cuidados jamais faltou o necessário. A paixão de Jesus era o
        assunto ordinário de suas meditações e orações. Sentindo aproximar-se o
        seu fim e tendo sobre si apenas uma velha túnica, toda rasgada, os olhos
        fitos na Cruz, pronunciou as palavras do hino sagrado: Madeiro e pregos
        dulcíssimos vós trazeis o mais suave dos fardos. Como é grande a vossa
        glória, pois fostes julgados dignos de carregar o Rei dos céus, e
        entregou piedosamente a alma a Deus. Era em Alcala de Henarez, no ano de
        1463.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui dispositióne mirábili infírma mundi
          éligis, ut fórtia quæque confúndas: concéde propítius humilitáti
          nostræ; ut, piis beáti Dídaci Confessóris tui précibus, ad perénnem in
          cœlis glóriam sublimári mereámur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente e sempiterno, que com admirável providência
          escolheis o que há de mais fraco no mundo para confundir os fortes,
          concedei propício à nossa humildade que, pelas piedosas preces do B.
          Diogo, vosso Confessor, mereçamos ser elevados à glória eterna nos
          céus. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
