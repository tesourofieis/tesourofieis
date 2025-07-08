import { Link } from "expo-router";
import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import AspergesMe from "../missal/aspergesme";

export default function PageViatico() {
  return (
    <PageWrapper>
      <H1 text="Viático, Extrema-unção" />
      <Text className="aside">
        O Sacerdote, entrando em casa do enfermo, diz:
      </Text>
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Pax huic dómui.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>A paz esteja nesta casa.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et ómnibus habitántibus in ea.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E em todos seus habitantes.
        </Text>
      </Language>
      <AspergesMe />
      <Text className="aside">
        O Acólito diz o Confiteor Deo...
        <Link className="link" href="/devocionario/oracoes/confesso">
          (como na página confiteor);
        </Link>{" "}
        e o Sacerdote, tendo dado as Absolvições, continua:
      </Text>
      <H1 text="Recepção da Comunhão" />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Ecce Agnus Dei, ecce qui tollit
          peccáta mundi.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Eis o Cordeiro de Deus, eis
          Aquele que tira os pecados do mundo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Dómine, non sum dignus, ut
          intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Senhor, eu não sou digno de que
          entreis na minha morada, mas dizei uma só palavra e a minha alma será
          salva.
        </Text>
        <Text className="latin">
          Accípe frater (soror), Viaticum Córporis Dómini nostri Jesu Christi,
          qui te custódiat ab hoste malígno, et perdúcate in vitam ætérnam.
        </Text>
        <Text className="vernacular">
          Recebei, meu irmão (ou minha irmã), o Viático do Corpo de Nosso Senhor
          Jesus Cristo, a fim de que vos guie até à vida eterna.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dominus vobíscum.
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
      </Language>
      <Language>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Dómine sancte, Páter omnípotens, ætérne Deus, te fidéliter deprecámur,
          ut accipiénti fratri nostro (soróri nostræ) sacrosánctum Corpus Dómini
          nostri Jesu Christi Fílii tui, tam córpori, quam ánimæ prosit ad
          remédium sempitérnum: Qui tecum vivit et regnat in unitáte Spíritus
          Sancti Deus, per ómnia sǽcula sæculórum.
        </Text>
        <Text className="vernacular">
          Senhor santo, Pai omnipotente, Deus eterno, Vos rogamos com confiança
          que o Corpo Santíssimo de nosso Senhor, que o nosso irmão (ou irmã)
          acaba de receber, lhe seja remédio eficaz, tanto para a sua alma como
          para o seu corpo, a fim de que lhe sirva para a eternidade: Ele, que,
          sendo Deus, convosco vive e reina por todos os séculos dos séculos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
