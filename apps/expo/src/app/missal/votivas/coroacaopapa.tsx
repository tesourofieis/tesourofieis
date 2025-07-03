import { Link } from "expo-router";
import { H1 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageCoroacaopapa() {
  return (
    <PageWrapper>
      <H1 text="No dia da Coroação do Sumo Pontífice e Aniversário da Coroação" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/02-22">
          Missa da Cadeira de S. Pedro em Roma
        </Link>{" "}
        , excepto: Oração, Secreta e Postcomúnio como na
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me.
        </Link>{" "}
        No Tempo Pascal, em vez do Gradual e do Trato, diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 106, 8</Text> Confitébitur Dómino
          misericórdiæ ejus, et mirabília ejus fíliis hóminum. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Matth. 16, 18</Text> Tu es Petrus, et super hanc
          petram ædificábo Ecclésiam meam. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 106, 8</Text> Seja o Senhor
          glorificado por causa da misericórdia e das maravilhas que praticou em
          favor dos homens. Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Mt. 16, 18</Text> Tu és Pedro, e sobre esta pedra
          edificarei a minha Igreja.
        </Text>
      </Language>
    </PageWrapper>
  );
}
