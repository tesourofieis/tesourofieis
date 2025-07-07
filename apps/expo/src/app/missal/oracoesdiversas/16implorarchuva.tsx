import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page16Implorarchuva() {
  return (
    <PageWrapper>
      <H1 text="16.ª Para implorar a chuva" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, in quo vívimus, movémur et sumus: plúviam nobis tríbue
          congruéntem; ut, præséntibus subsídiis sufficiénter adjuti, sempitérna
          fiduciálius appetámus. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, em quem nos movemos, vivemos e existimos, concedei-nos a chuva
          necessária, para que, auxiliados suficientemente com os subsídios
          temporais, aspiremos com mais confiança às coisas eternas. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Oblátis, quǽsumus, Dómine, placáre munéribus: et opportúnum nobis
          tríbue plúviæ sufficiéntis auxílium. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos imploramos, deixai-Vos aplacar com estas ofertas e
          concedei-nos o auxílio da chuva, segundo as necessidades presentes.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Da nobis, quǽsumus, Dómine, plúviam salutárem: et áridam terræ fáciem
          fluéntis cœléstibus dignánter infúnde. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Dai-nos, Senhor, Vos pedimos, a chuva salutar; e espalhai
          misericordiosamente as águas do céu pela superfície seca da terra. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
