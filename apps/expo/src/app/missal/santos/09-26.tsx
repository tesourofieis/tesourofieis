import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0926() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Cipriano e Justina, Mártires, a 26 de Setembro
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Beatórum Mártyrum Cypriáni et Justínæ nos, Dómine, fóveant continuáta
          pæsídia: quia non désinis propítius intuéri, quos tálibus auxíliis
          concésseris adjuvári. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Fazei, Senhor, que incessantemente nos alegremos com a protecção dos
          vossos B. B. Mártires Cipriano e Justina, visto que não podeis deixar
          de acolher benignamente aqueles a quem concedeis a assistência de tais
          auxílios. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta e Postcomúnio</Text>

      <LinkCard
        href="/missal/comum/7muitosmartires2#secreta"
        title="Muitos Mártires - Missa Sapiéntiam sanctórum"
      />
    </PageWrapper>
  );
}
