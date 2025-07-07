import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageOgloriosavirginum() {
  return (
    <PageWrapper>
      <H1 text="O gloriosa virginum" />

      <Language>
        <Text className="latin">
          O gloriósa vírginum, sublímis inter sídera, Qui te creávit párvulum
          lacténte nutris úbere.
        </Text>
        <Text className="vernacular">
          Virgem Virgem mais esclarecida, sobre os astros superior, que a vosso
          próprio criador a vossos peitos dais vida.
        </Text>
        <Text className="latin">
          Quod Eva tristis ábstulit, tu reddis almo gérmine, Intrent ut astra
          flébiles, caeli reclúdis cárdines.
        </Text>
        <Text className="vernacular">
          O que por Eva perdemos com vosso fruto restituístes; as portas do céu
          abristes, para que os tristes entremos.
        </Text>
        <Text className="latin">
          Tu Regis alti jánua et aula lucis fúlgida, Vitam datam per Vírginem,
          gentes redémptae pláudite.
        </Text>
        <Text className="vernacular">
          Vós sois porta do alto Rei, de luz aula esclarecida: aplaudi, gentes,
          a vida que a virgem nos concedeu
        </Text>
        <Text className="latin">
          Jesu Tibi sit glória, Qui natus es de Vírgine, Cum Patre et Almo
          Spíritu, in sempitérna saécula. Amen.
        </Text>
        <Text className="vernacular">
          Jesus seja engrandecido, da virgem pura nascido, e o eterno Pai
          também, com o Espírito Santo. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
