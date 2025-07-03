import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1007Outro2() {
  return (
    <PageWrapper>
      <H1 text="S. S. Sérgio, Baco e Outros, Mártires, a 7 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Sanctórum Martyrum tuórum nos, Dómine, Sérgii, Bacchi, Marcélli et
          Apuléji beáta mérita prosequántur: et tuo semper fáciant amóre
          fervéntes. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Fazei, Senhor, que os méritos dos vossos Santos Mártires Sérgio, Baco,
          Marcelo e Apúlio nos acompanhem e nos comuniquem incessantemente o
          fervor do vosso amor. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Majestátem tuam nobis, Dómine, quǽsumus, hæc hóstia reddat immolánda
          placátam, tuórum digna postulatióne Sanctórum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta hóstia, que vai ser imolada em vosso louvor, Vos rogamos,
          Senhor, possa pelas dignas preces dos vossos Santos aplacar a vossa
          majestade. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sacraméntis, Dómine, muniámur accéptis: et sanctórum Mártyrum tuórum
          Sérgii, Bacchi, Marcélli et Apuléji intercessióne, contra omnes
          nequítias irruéntes, annis cœléstibus protegámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que os sacramentos que recebemos, Senhor, nos confortem; e que pela
          intercessão dos vossos Santos Sérgio, Baco, Marcelo e Apúlio sejamos
          fortalecidos com as armas celestiais e defendidos contra todos os
          ataques dos espíritos malignos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
