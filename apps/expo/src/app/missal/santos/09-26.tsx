import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0926() {
  return (
    <PageWrapper>
      <H1 text="S. S. Cipriano e Justina, Mártires, a 26 de Setembro" />

      <Text className="comment">
        Em Nicomedia, diz o Martyrologio Romano, nascimento para o cão dos
        Santos Mártires Cypriano e Justina. Essa virgem, depois de haver sofrido
        muitos tormentos sob o imperador Diocleciano e o presidente Eutholmo,
        converteu ao Cristo o magico Cypriano que se esforçava por seduzi-la com
        os seus artifícios. Ambos foram martirizados em 304. Seus corpos,
        expostos aos animais selvagens, foram retirados durante a noite, por
        alguns marinheiros cristãos que os transportaram para Roma. Mais tarde
        foram inumados na basilica Constantiniana (S. João de Latrão), proximo
        ao baptistério.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

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

      <H3 text="Secreta e Postcomúnio" />

      <LinkCard
        href="/missal/comum/7muitosmartires2#secreta"
        title="Muitos Mártires - Missa Sapiéntiam sanctórum"
      />
    </PageWrapper>
  );
}
