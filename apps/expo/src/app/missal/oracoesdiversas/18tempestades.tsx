import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page18Tempestades() {
  return (
    <PageWrapper>
      <H1 text="18.ª Para que terminem as tempestades" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          A domo tua, quǽsumus Dómine, spiritáles nequítiæ repellántur: et
          aëriárum discédat malígnitas tempestátum. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos imploramos, dignai-Vos afastar da vossa família os males
          das tempestades e repelir os flagelos das tormentas dos ares. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Offérimus tibi, Dómine, laudes et múnera, pro concéssis benefíciis
          grátias referéntes, et pro concedéndis semper supplíciter deprecántes.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos oferecemos os nossos louvores e dons, dando-Vos graças
          pelos benefícios que nos concedestes e suplicando-Vos humildemente que
          não cesseis de nos dispensar outras graças. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui nos et castigándo sanas et ignoscéndo
          consérvas: præsta supplícibus tuis; ut et tranquillitátibus hujus
          optátæ consolatiónis lætémur, et dono tuæ pietátis semper utámur. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente e sempiterno, que nos curais, quando nos castigais,
          e nos conservais, quando nos perdoais, concedei-nos a graça,
          humildemente Vos pedimos, de vivermos felizes na tranquilidade da
          consolação, tão desejada, e de possuirmos sempre o dom da vossa
          piedade. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
