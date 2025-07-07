import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1120() {
  return (
    <PageWrapper>
      <H1 text="S. Félix de Valois, Conf., a 20 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Felicem Confessórem tuum ex eremo ad munus rediméndi
          captívos cœlitus vocáre dignátus es: præsta, quǽsumus; ut per grátiam
          tuam ex peccatórum nostrórum captivitáte, ejus intercessióne,
          liberáti, ad cœléstem pátriam perducámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que, de um modo celestial, ao B. Félix, vosso Confessor, Vos
          dignastes chamar da solidão do deserto para a missão de remir os
          cativos, concedei-nos, Vos rogamos, que, sendo nós pela sua
          intercessão e pela vossa graça, livres do cativeiro dos nosso pecados,
          alcancemos a pátria celestial. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
