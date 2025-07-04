import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1129() {
  return (
    <PageWrapper>
      <H1 text="S. Saturnino, Mártir, a 29 de Novembro" />

      <Text className="comment">
        Primeiro Bispo de Tolosa, morreu mártir sob Maximiano no ano 300.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui nos beáti Saturníni Martyris tui concédis natalítia pérfrui:
          ejus nos tríbue méritis adjuvári. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que nos permitistes a alegria de celebrarmos o aniversário do
          nascimento do vosso B. Mártir Saturnino, concedei-nos ainda que
          sejamos auxiliados pelos seus méritos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera, Dómine, tibi dicáta sanctífica: et, intercedénte beáto
          Saturníno Mártyre tuo, per hæc eádem nos placátus inténde. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Santificai, Senhor, estas ofertas, que Vos dedicamos, e por
          intercessão do B. Saturnino, vosso Mártir, olhai aplacado para nós.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sanctíflcet nos, quǽsumus, Dómine, tui percéptio sacraménti: et
          intercessióne Sanctórum tuórum tibi reddat accéptos. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, permiti que a recepção do vosso sacramento nos
          santifique e que por intercessão dos vossos santos nos alcance a graça
          de Vos agradarmos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
