import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page133() {
  return (
    <PageWrapper>
      <H1 text="Salmo 133" />

      <Language>
        <Text className="latin">
          Ecce nunc benedícite Dóminum, * omnes servi Dómini:
        </Text>
        <Text className="vernacular">
          Agora, pois, bendizei o Senhor, * todos os servos do Senhor:
        </Text>
        <Text className="latin">
          Qui statis in domo Dómini, * in átriis domus Dei nostri.
        </Text>
        <Text className="vernacular">
          Vós que estais na casa do Senhor, * nos átrios da casa do nosso Deus.
        </Text>
        <Text className="latin">
          In nóctibus extóllite manus vestras in sancta, * et benedícite
          Dóminum.
        </Text>
        <Text className="vernacular">
          De noite levantai as vossas mãos para o santuário, * e bendizei o
          Senhor.
        </Text>
        <Text className="latin">
          Benedícat te Dóminus ex Sion, * qui fecit cælum et terram.
        </Text>
        <Text className="vernacular">
          Te abençoe de Sião o Senhor, * que fez o céu e a terra.
        </Text>
      </Language>
    </PageWrapper>
  );
}
