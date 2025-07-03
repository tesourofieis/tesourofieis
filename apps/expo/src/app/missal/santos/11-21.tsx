import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page1121() {
  return (
    <PageWrapper>
      <H1 text="Apresentação da B. Virgem Maria, a 21 de Novembro" />

      <Text className="aside">
        Como na
        <Link href="/missal/comum/29missamaria3">
          Missa Salve, sancta Parens da Virgem Maria,
        </Link>
        excepto:
      </Text>

      <LinkCard
        href="/missal/comum/26festasmaria1"
        title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
      />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátam Maríam semper Vírginem, Spíritus Sancti habitáculum,
          hodiérna die in templo præsentári voluísti: præsta, quǽsumus; ut, ejus
          intercessióne, in templo glóriæ tuæ præsentári mereámur. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que quisestes que a B. Virgem Maria, em quem habitava o
          Espírito Santo, fosse neste dia apresentada no templo, permiti pela
          sua intercessão que mereçamos ser apresentados no templo da vossa
          glória. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
