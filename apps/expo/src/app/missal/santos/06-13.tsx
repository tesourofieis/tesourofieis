import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0613() {
  return (
    <PageWrapper>
      <Text className="h1">Santo António de Lisboa, a 13 de Junho</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Ecclésiam tuam, Deus, beáti Antónii Confessóris tui atque Doctóris
          solémnitas votiva lætíficet: ut spirituálibus semper muniátur auxíliis
          et gáudiis pérfrui mereátur ætérnis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que a festa anual do B. António, vosso Confessor e Doutor, alegre a
          vossa Igreja, Senhor, a fim de que, fortalecida sempre com os auxílios
          espirituais, mereça desfrutar os gozos eternos. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Præsens oblátio fiat, Dómine, pópulo tuo salutáris: pro quo dignátus
          es Patri tuo te vivéntem hóstiam immoláre: Qui cum eódem Deo Patre et
          Spíritu Sancto vivis et regnas...
        </Text>
        <Text className="vernacular">
          Fazei, Senhor, que a presente oblação seja salutar ao vosso povo, pelo
          qual Vos dignastes imolar-Vos ao vosso Pai, como hóstia viva. Ó Vós,
          que, sendo Deus...
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Divínis, Dómine, munéribus satiáti: quǽsumus; ut, beáti Antónii
          Confessóris tui atque Doctóris méritis et intercessióne, salutáris
          sacrifícii sentiámus efféctum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Saciados com os divinos dons, Vos suplicamos, Senhor, que pela
          intercessão e méritos do B. António, vosso Confessor e Doutor,
          sintamos o efeito deste salutar sacrifício. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
