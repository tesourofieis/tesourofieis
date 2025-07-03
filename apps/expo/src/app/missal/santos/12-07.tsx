import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1207() {
  return (
    <PageWrapper>
      <Text className="h1">S. Ambrósio. B. Conf. e Dr., a 7 de Dezembro</Text>

      <Text className="comment">
        Santo Ambrósio, nascido em Tréveris, pelo ano de 335, é um dos quatro
        grandes Doutores da Igreja Latina. Quando ainda no berço, um enxame de
        abelhas entrou na boca do Santo, para aí trabalhar o seu mel: presságio
        de sua grande eloquência. Governador de Milão, Ambrósio foi
        providencialmente designado como bispo, pela voz de uma criança e
        tornou-se pregador incansável de que falam a Epístola e o Evangelho.
        Combateu os hereges, conseguiu que o imperador Teodósio se humilhasse e
        deu à Igreja S. Agostinho, cuja conversão vale a de reinos inteiros.
        Enriqueceu o Ofício Divino com hinos sagrados, mandou cantar os salmos
        por todo o povo dividido em coros. Esse grande bispo morreu em 397, na
        noite do Sábado Santo, depois de ter recebido o adorável Corpo de Jesus,
        que o levou para a sua bem-aventurada eternidade. À semelhança de
        Ambrósio, saibamos sempre manter com doce firmeza os direitos de Deus.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Gradual</Text>

      <Text className="em">Ecl. 44, 16</Text>

      <Language>
        <Text className="latin">
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo.
          <Text className="versicle"> ℣. </Text>
          <Text className="latin">ibid., 20</Text> Non est inventus símilis
          illi, qui conserváret legem Excélsi.
        </Text>
        <Text className="vernacular">
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus.
          <Text className="versicle"> ℣. </Text>
          <Text className="vernacular">ibid., 20</Text> Ninguém o igualou na
          observância das leis do Altíssimo.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 109, 4</Text> Jurávit Dóminus, et non
          pænitébit eum: Tu es sacérdos in ætérnum, secúndum órdinem
          Melchísedech. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 109, 4</Text> O Senhor jurou e nunca
          se arrependerá: Tu és sacerdote para sempre, segundo a ordem de
          Melquisedeque. Aleluia.
        </Text>
      </Language>

      <Text className="h3">Ofertório</Text>

      <Text className="em">Sl. 88, 25</Text>

      <Language>
        <Text className="latin">
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </Text>
        <Text className="vernacular">
          A minha verdade e a minha misericórdia estarão com ele: e o seu poder
          elevar-se-á pelo meu nome.
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
          intercessiónem beáti Ambrósii Confessóris tui atque Pontíficis, ad
          perpétuam nobis fac proveníre salútem. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Omnipotente e eterno Deus, permiti que os dons oferecidos à vossa
          majestade contribuam por intercessão do B. Ambrósio, vosso Confessor e
          Pontífice, para a nossa salvação eterna. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Comúnio</Text>

      <LinkCard
        href="/missal/santos/12-06#comúnio"
        title="S. Nicolau, B. e Conf."
      />

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens
          Deus: ut beáti Ambrósii Confessóris tui atque Pontíficis nos ubíque
          orátio ádjuvet; in cujus veneratióne hæc tuæ obtúlimus majestáti. Per
          Dóminum nostram...
        </Text>
        <Text className="vernacular">
          Havendo recebido os Sacramentos da nossa salvação, concedei-nos, ó
          Deus omnipotente, que sejamos sempre auxiliados pela oração do B.
          Ambrósio, vosso Confessor e Pontífice, em cuja honra oferecemos este
          sacrifício à vossa majestade. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
