import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0714() {
  return (
    <PageWrapper>
      <H1 text="S. Boaventura, B. Confessor e Doutor, a 14 de Julho" />

      <Text className="comment">
        S. Boaventura nasceu na Toscana, em 1221. Entrou para a Ordem franciscan
        após uma cura milagrosa, devida à intercessão de São Francisco de Assis.
        Teve por mestre Alexandre de Hales o qual gostava de dizer, referindo-se
        ao seu discípulo virginal, que parecia ter sido preservado do pecado
        original. Aos trinta anos tornou-se doutor (Or.) e foi professor na
        Universidade de Paris ao mesmo tempo que Santo Tomás Aquino, a quem era
        muito unido. Deram-lhe o título de Doutor seráfico. Nomeado Geral da
        Ordem, depois Cardeal da Igreja (Com., Ale.), morreu em 1274 por ocasião
        do Concílio geral de Lião, em que Gregos e Latinos lhe admiravam
        imensamente o ardor e clareza que dele fazia um astro de fé.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Gradual" />

      <Text className="em">Sl. 36, 30-31</Text>

      <Language>
        <Text className="latin">
          Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
          <Text className="versicle"> ℣. </Text>Lex Dei ejus in corde ipsíus: et
          non supplantabúntur gressus ejus.
        </Text>
        <Text className="vernacular">
          A boca do justo falará com sabedoria e a sua língua proclamará a
          justiça.<Text className="versicle"> ℣. </Text>A lei do seu Deus está
          no seu coração e os seus pés não tropeçarão.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 109, 4</Text> Jurávit Dóminus, et non
          pœnitébit eum: Tu es sacérdos in ætérnum, secúndum órdinem
          Melchísedech. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Ps. 109, 4</Text> O Senhor jurou, e não
          se arrependerá: tu és sacerdote para sempre segundo a ordem de
          Melquisedeque. Aleluia.
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 88, 25</Text>

      <Language>
        <Text className="latin">
          Veritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </Text>
        <Text className="vernacular">
          A minha fidelidade e a minha misericórdia estarão com ele: e o seu
          poder exaltar-se-á pelo meu nome.
        </Text>
      </Language>

      <H3 text="Secreta e Postcomúnio" />

      <LinkCard
        href="/missal/comum/12confessorespontifices2"
        title="Confessores Pontífices - Missa Sacerdótes tui"
      />
    </PageWrapper>
  );
}
