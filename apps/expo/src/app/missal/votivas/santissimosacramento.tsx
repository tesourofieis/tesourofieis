import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSantissimosacramento() {
  return (
    <PageWrapper>
      <H1 text="Missa do Santíssimo Sacramento" />

      <Text className="aside">
        Como na
        <Link href="/missal/pentecostes/pent1-4">
          Missa do Santíssimo Corpo de Cristo,
        </Link>
        excepto: Depois da Septuagésima omite-se o Aleluia o Verso que se segue,
        e diz-se o:
      </Text>

      <H3 text="Trato" />

      <Text className="em">Ml. 1, 11</Text>

      <Language>
        <Text className="latin">
          Ab ortu solis usque ad occásum, magnum est nomen meum in géntibus.
          <Text className="versicle"> ℣. </Text>Et in omni loco sacrificátur, et
          offértur nómini meo oblátio munda: quia magnum est nomen meum in
          géntibus.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Prov. 9, 5</Text> Veníte, comédite panem meum:
          et bíbite vinum, quod míscui vobis.
        </Text>
        <Text className="vernacular">
          Desde o nascente até ao poente o meu nome é grande entre as nações.
          <Text className="versicle"> ℣. </Text>Em todos os lugares fazem-se
          sacrifícios e oferece-se em honra do meu nome uma vítima pura; pois o
          meu nome é grande entre as nações.
          <Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Pr. 9, 5</Text> Vinde, comei o meu pão e
          bebei o vinho, que vos preparei.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se O Gradual e o Trato, e diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Luc. 24, 35</Text> Cognovérunt discípuli
          Dóminum Jesum in fractióne panis. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Joann. 6, 56-57</Text> Caro mea vere est cibus,
          et sanguis meus vere est potus: qui mánducat meam carnem, et bibit
          meum sánguinem, in me manet, et ego in eo. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Lc. 24, 35</Text> Os discípulos
          reconheceram o Senhor pela fracção do pão. Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Jo. 6, 56-57</Text> Minha Carne é verdadeira
          comida e o meu Sangue verdadeira bebida. Aquele que come a minha Carne
          e bebe o meu Sangue, permanece em mim e Eu nele. Aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
