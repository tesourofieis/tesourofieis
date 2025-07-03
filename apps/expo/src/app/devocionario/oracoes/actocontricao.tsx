import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageActocontricao() {
  return (
    <PageWrapper>
      <H1 text="Acto de Contrição" />

      <Language>
        <Text className="latin">
          Deus meus, ex toto corde pǽnitet me ómnium meórum peccatórum, éaque
          detéstor, quia peccándo, non solum pœnas a te juste statútas
          proméritus sum, sed præsértim quia offéndi te, summum bonum, ac dignum
          qui super ómnia diligáris. Ídeo fírmiter propóno, adjuvánte grátia
          tua, de cétero me non peccatúrum peccandíque occasiónes próximas
          fugitúrum. Amen.
        </Text>
        <Text className="vernacular">
          Meu Deus, eu me arrependo, de todo coração de todos meus pecados e os
          detesto, porque pecando não só mereci as penas que justamente
          estabelecestes, mas principalmente porque Vos ofendi a Vós, sumo bem e
          digno de ser amado sobre todas as coisas. Por isso, proponho
          firmemente, com a ajuda da vossa graça, não mais pecar e fugir das
          ocasiões próximas de pecar. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
