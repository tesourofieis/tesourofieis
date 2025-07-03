import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page0306() {
  return (
    <PageWrapper>
      <H1 text="S. S. Perpétua e Felicidade, Mártires, a 6 de Março" />

      <Text className="aside">
        Como na
        <Link href="/missal/comum/19muitasvirgensmartires">
          Missa Me exspectavérunt,
        </Link>
        excepto:
      </Text>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Mýsticis, Dómine, repléti sumus votis et gáudiis: præsta, quǽsumus; ut
          intercessiónibus sanctárum Mártyrum tuárum Perpétuæ et Felicitátis,
          quæ temporáliter ágimus, spirituáliter consequámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Saciados com as alegrias místicas, que são objecto dos nossos desejos,
          concedei-nos, Vos suplicamos, Senhor, que por intercessão das vossas
          Santas Mártires Perpétua e Felicidade alcancemos os eternos efeitos do
          que praticámos neste mundo. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
