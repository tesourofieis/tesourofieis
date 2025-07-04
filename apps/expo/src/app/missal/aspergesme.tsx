import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAspergesme() {
  return (
    <PageWrapper>
      <H1 text="Asperges me" />

      <Language>
        <Text className="latin">
          Asperges me, Dómine, hyssópo et mundabor: lávabis me, et super nivem
          dealbábor.
        </Text>
        <Text className="vernacular">
          Aspergir-me-eis, Senhor, com o hissope e ficarei puro; lavar-me-eis e
          ficarei alvo, como a neve.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Osténde nobis, Dómine,
          misericórdiam tuam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Mostrai, Senhor, a vossa
          misericórdia.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et salutáre tuum da nobis.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E dai-nos a salvação.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te véniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E que meu clamor chegue até
          Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et cum spíritu tuo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E com vosso espírito.
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Exáudi nos, Dómine sancte, Pater omnípotens, ætérne, Deus, et míttere
          dignéris Sanctum Angelum tuum de cælis, qui custódiat, fóveat,
          prótegat, vísitet atque deféndat omnes habitantes in hoc habitáculo.
          Per Christum Dóminum nostrum. Amen.
        </Text>
        <Text className="vernacular">
          Ouvi-nos, Senhor santo, Pai omnipotente, Deus eterno, e dignai-Vos
          enviar do céu o vosso Santo Anjo, para que ele guarde, conserve,
          proteja, visite e defenda todos aqueles que se encontram neste templo.
          Por Cristo, nosso Senhor. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
