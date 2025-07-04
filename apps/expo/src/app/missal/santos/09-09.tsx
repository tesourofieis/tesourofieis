import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0909() {
  return (
    <PageWrapper>
      <H1 text="S. Gorgónio, Mártir, a 9 de Setembro" />

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
          Sanctus tuus, Dómine, Gorgónius sua nos intercessióne lætíficet: et
          pia fáciat sollemnitáte gaudére. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Alegre-nos, Senhor, o vosso Santo Gorgónio com sua intercessão; e nos
          faça sentir o gozo desta pia solenidade. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Grata tibi sit, Dómine, nostræ servitútis oblátio: pro qua sanctus
          Gorgónius Martyr intervéntor exsístat. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que Vos seja agradável, Senhor, a oferta da nossa servidão, a qual
          Vo-la apresentamos pela intervenção do Santo Mártir Gorgónio. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Famíliam tuam, Deus, suávitas ætérna contíngat et végetet: quæ in
          Mártyre tuo Gorgónio Christi, Fílii tui, bono júgiter odóre pascátur:
          Qui tecum...
        </Text>
        <Text className="vernacular">
          Que a vossa família, ó Deus, seja alimentada e fortalecida com as
          delícias eternas; e que pelo vosso S. Mártir Gorgónio ela se alimente
          incessantemente com o bom odor de vosso Filho Jesus Cristo: Que
          convosco...
        </Text>
      </Language>
    </PageWrapper>
  );
}
