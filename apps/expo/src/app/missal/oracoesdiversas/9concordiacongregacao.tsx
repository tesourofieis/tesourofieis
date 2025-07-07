import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page9Concordiacongregacao() {
  return (
    <PageWrapper>
      <H1 text="9.ª Pela concórdia na Congregação" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, lárgiter pacis et amátor cantátis: da fámulis tuis veram cum tua
          voluntáte concórdiam; ut ab ómnibus, quæ nos pulsant, tentatiónibus
          liberémur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que dais a paz e amais a caridade, concedei aos vossos servos
          a verdadeira união com vossa vontade a fim de que sejamos livres de
          todas as tentações que nos perseguem. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          His sacrifíciis, Dómine, quǽsumus, concéde placátus: ut, qui própriis
          orámus absólvi delíctis, non gravémur extérnis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Aplacado com este sacrifício, Senhor, concedei-nos, Vos pedimos, que
          nós, querendo ser absolvidos dos nossos próprios pecados, não sejamos
          sobrecarregados com os alheios. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Spíritum nobis, Dómine, tuæ cantátis infúnde: ut, quos uno pane
          cœlésti satiásti, tua fácias pietáte concórdes. Per Dóminum... in
          unitáte ejusdem.
        </Text>
        <Text className="vernacular">
          Infundi em nós, Senhor, o espírito da vossa caridade, para que
          misericordiosamente torneis unidos de coração aqueles a quem saciastes
          com o mesmo Pão celestial. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
