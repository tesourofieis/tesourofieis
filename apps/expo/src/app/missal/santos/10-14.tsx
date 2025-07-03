import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1014() {
  return (
    <PageWrapper>
      <H1 text="S. Calisto I, Papa e Mártir, a 14 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui nos cónspicis ex nostra infirmitáte defícere: ad amórem tuum
          nos misericórditer per Sanctórum tuórum exémpla restáura. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que nos vedes desfalecer por causa da nossa fraqueza,
          dignai-Vos pela vossa misericórdia restaurar-nos no vosso amor,
          segundo os exemplos dos vossos Santos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Mýstica nobis, Dómine, prosit oblátio: quæ nos et a reátibus nostris
          expédiat, et perpétua salvatióne confírmet. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta mística oblação nos aproveite, Senhor; e que nos livre das
          nossas faltas e nos assegure a salvação eterna. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Quǽsumus, omnípotens Deus: ut reátus nostros múnera sacráta
          puríficent, et recte vivéndi nobis operéntur efféctum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos permitir, ó Deus omnipotente, que estes dons nos purifiquem
          das nossas faltas e que, produzindo em nós os seus efeitos, nos façam
          viver santamente. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
