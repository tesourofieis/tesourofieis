import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0607() {
  return (
    <PageWrapper>
      <H1 text="S. João Nepomuceno, Mártir, a 7 de Junho" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Ó Deus, que pelo sigílio sacramental, inviolávelmente mantido pelo B.
        João, coroastes a vossa Igreja com a glória de um novo martírio,
        concedei-nos pela sua intercessão e exemplo que vigiemos cuidadosamente
        a nossa língua, de modo que antes queiramos sofrer todos os males neste
        mundo do que perder a nossa alma. Por nosso Senhor...
      </Text>
      <H3 text="Secreta" />
      <Text className="text-base">
        Possamos nós, Senhor, pela virtude destes sacrossantos mystérios, ser
        abrasados no fogo da caridade, no qual ardia o ínclito Mártir João,
        quando os celebrava. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-base">
        Que esta mesa celestial nos comunique, Senhor, o Espírito de fortaleza,
        que constantemente amparou e guiou até à vitória o B. João, vosso
        Mártir, cuja firmeza ao vosso sacramento foi violentamente
        experimentada. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
