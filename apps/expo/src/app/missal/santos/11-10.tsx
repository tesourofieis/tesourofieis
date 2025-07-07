import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1110() {
  return (
    <PageWrapper>
      <H1 text="S. André Avelino, Conf., a 10 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1"
        title="Confessores não Pontífices - Missa Os justi"
      />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui in corde beáti Andréæ Confessóris tui, per árduum cotídie in
          virtútibus proficiéndi votum, admirábiles ad te ascensiónes
          disposuísti: concéde nobis, ipsíus méritis et intercessióne, ita
          ejúsdem grátiæ partícipes fieri; ut, perfectióra semper exsequéntes,
          ad glóriæ tuæ fastígium felíciter perducámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que, inspirando ao B. André, vosso Confessor, o voto heróico
          de progredir quotidianamente na virtude, dispusestes a sua alma em
          admiráveis ascensões na perfeição, concedei-nos pelos seus méritos e
          intercessão que compartilhemos desta graça, de sorte que, aspirando
          sempre ao que é mais perfeito, cheguemos com alegria ao cume da vossa
          glória. Por nosso Senhor...
        </Text>
      </Language>

      <H2 text="Comemoração dos S. S. Mártires Trifão, Respício e Ninfa" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Fac nos, quǽsumus, Dómine, sanctórum Mártyrum tuórum Tryphónis,
          Respícii et Nymphæ semper festa sectári: quorum suffrágiis,
          protectiónis tuæ dona sentiámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Permiti, Senhor, Vos suplicamos, que celebremos sempre a solenidade
          dos vossos Santos Mártires Trifão, Respício e Ninfa, a fim de que,
          mercê dos seus auxílios, alcancemos os benefícios da vossa protecção.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum
          tibi grata sint honóre justórum, et nobis salutária, te miseránte,
          reddántur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Vos oferecemos, Senhor, estes dons da nossa devoção; e, em atenção aos
          merecimentos dos vossos justos, dignai-Vos aceitá-los; e pela vossa
          misericórdia fazei que nos sejam salutares. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Præsta nobis, quǽsumus, Dómine: intercedéntibus sanctis Martýribus
          tuis Tryphóne, Respício et Nympha; ut, quod ore contíngimus, pura
          mente capiámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, por intercessão dos vossos Santos Mártires Trifão, Respício e
          Ninfa dignai-Vos conceder-nos a graça de guardarmos com o coração
          sempre puro o que a nossa boca agora recebeu. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
