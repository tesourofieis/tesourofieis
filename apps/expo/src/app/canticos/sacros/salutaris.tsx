import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageSalutaris() {
  return (
    <PageWrapper>
      <H1 text="Salutaris" />

      <Language>
        <Text className="latin">
          O salutaris Hostia, Quæ cæli pandis ostium: Bella premunt hostilia, Da
          robur, fer auxilium. Uni trinoque Domino Sit sempiterna gloria, Qui
          vitam sine termino Nobis donet in patria. Amen.
        </Text>
        <Text className="vernacular">
          Ó Hóstia salutar, porta do céu, divino Sacramento, o inimigo ameaça os
          nossos dias! Concedei-nos, Senhor, fortaleza e socorro. A Vós, Senhor,
          glória imortal! E que por Vós a alma fiel goze a vida e a felicidade
          na pátria sempiterna. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
