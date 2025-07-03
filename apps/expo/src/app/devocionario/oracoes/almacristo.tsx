import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAlmacristo() {
  return (
    <PageWrapper>
      <Text className="h1">Alma de Cristo</Text>

      <Language>
        <Text className="latin">
          Anima Christi, sanctífica me. Corpus Christi, salve me.
        </Text>
        <Text className="vernacular">
          Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me.
        </Text>
        <Text className="latin">Sanguis Christi, inébria me.</Text>
        <Text className="vernacular">Sangue de Cristo, inebriai-me.</Text>
        <Text className="latin">Aqua láteris Christi, lava me.</Text>
        <Text className="vernacular">Água do lado de Cristo, lavai-me.</Text>
        <Text className="latin">Pássio Christi, conforta me.</Text>
        <Text className="vernacular">Paixão de Cristo, confortai-me.</Text>
        <Text className="latin">O bone Jesu, exáudi me.</Text>
        <Text className="vernacular">Ó bom Jesus, ouvi-me.</Text>
        <Text className="latin">Intra tua vúlnera abscónde me.</Text>
        <Text className="vernacular">
          Dentro das vossas Chagas, escondei-me.
        </Text>
        <Text className="latin">Ne permittas me separári a te.</Text>
        <Text className="vernacular">Não permitais que de Vós me separe.</Text>
        <Text className="latin">Ab hoste maligno defénde me.</Text>
        <Text className="vernacular">Do espírito maligno, defendei-me.</Text>
        <Text className="latin">In hora mortis meæ voca me.</Text>
        <Text className="vernacular">Na hora da minha morte, chamai-me.</Text>
        <Text className="latin">
          Et jube me venire ad te, ut cum Sanctis tuis laudem te in sǽcula
          sæculórum.
        </Text>
        <Text className="vernacular">
          E mandai-me ir para Vós, para que Vos louve com vossos Santos, por
          todos os séculos.
        </Text>
        <Text className="latin">Amen.</Text>
        <Text className="vernacular">Amen.</Text>
      </Language>
    </PageWrapper>
  );
}
