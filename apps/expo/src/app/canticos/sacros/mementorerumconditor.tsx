import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageMementorerumconditor() {
  return (
    <PageWrapper>
      <H1 text="Memento rerum conditor" />

      <Language>
        <Text className="latin">
          Memento rerum conditor, Nostri quod olim corporis Sacrata ab alvo
          Virginis, Nascendo formam sumpseris.
        </Text>
        <Text className="vernacular">
          Ó Vós, que o mundo fizestes, lembrai-Vos, que quando nasceste do
          ventre sagrado da Virgem, tomastes a humana figura.
        </Text>
        <Text className="latin">
          Maria Mater gratiæ, dulcis Parens clementiæ, tu nos ab hoste protege,
          et mortis hora suscipe.
        </Text>
        <Text className="vernacular">
          Maria Mãe cheia de graça, doce Mãe de misericóridia, defende-nos do
          inimigo, e na última agonia tomai-nos.
        </Text>
        <Text className="latin">
          Jesu, tibi sit gloria, qui natus es de Virgine, cum Patre, et almo
          Spiritu, in sempiterna sæcula. Amen.
        </Text>
        <Text className="vernacular">
          Jesus seja glorificado, da virgem nascido, e o eterno Pai também, com
          o Espírito Santo, por todos os séculos. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
