import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0118Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Prisca, a 18 de Janeiro" />

      <Text className="comment">
        Santa Prisca, na idade de treze anos, padeceu, sob o imperador Cláudio
        (Séc. I) cruéis tormentos. Queriam forçá-la a adorar os ídolos mas a sua
        grande fé (Or.) encheu-a da força divina de Jesus e ela entrou no céu,
        cingida com a dupla coroa da virgindade e do martírio.
      </Text>

      <Text className="aside">
        Como a{" "}
        <Link className="link" href="/missal/comum/18virgensmartires2">
          Missa Me exspectavérunt
        </Link>{" "}
        , excepto o seguinte:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Da, quǽsumus, omnípotens Deus: ut, qui beátæ Priscæ Vírginis et
          Mártyris tuæ natalítia cólimus; et ánnua sollemnitáte lætémur, et
          tantae fídei proficiámus exémplo. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos rogamos, que, celebrando o
          nascimento da B. Prisca, vossa Virgem e Mártir, nos alegremos nesta
          solenidade anual e aproveitemos com os exemplos da sua tão grande fé.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Hæc hóstia, quǽsumus, Dómine, quam Sanctórum tuórum natalítia
          recenséntes offérimus, et víncula nostræ pravitátis absólvat, et tuæ
          nobis misericórdiæ dona concíliet. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta hóstia, Senhor, que Vos oferecemos em honra do nascimento dos
          vossos Santos, nos livre dos vínculos dos nossos pecados e nos obtenha
          os dons da vossa misericórdia...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Quǽsumus, Dómine, salutáribus repléti mystériis: ut, cujus sollémnia
          celebrámus, ejus oratiónibus adjuvémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Saciados com os dons salutares, Vos imploramos, Senhor, sejamos
          socorridos pelas preces daquela cuja festa celebrámos. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
