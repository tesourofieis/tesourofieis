import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageCruzsaobento() {
  return (
    <PageWrapper>
      <H1 text="Cruz São Bento" />

      <Language>
        <Text className="latin">C.S.P.B.: Crux Sancti Patris Benedicti.</Text>
        <Text className="vernacular">
          C.S.P.B.: Cruz do Santo Patriarca Bento.
        </Text>
        <Text className="latin">C.S.S.M.L.: Crux Sancta Sit Mihi Lux.</Text>
        <Text className="vernacular">
          C.S.S.M.L.: A Cruz Santa seja a minha Luz.
        </Text>
        <Text className="latin">N.D.S.M.D.: Non Draco Sit Mihi Dux.</Text>
        <Text className="vernacular">
          N.D.S.M.D.: Que o Dragão não seja meu Senhor.
        </Text>
        <Text className="latin">V.R.S.: Vade Retro Satana!</Text>
        <Text className="vernacular">V.R.S.: Retira-te, Satanás!</Text>
        <Text className="latin">N.S.M.V. Numquam Suades Mihi Vana!</Text>
        <Text className="vernacular">N.S.M.V. Não me aconselhes loucuras!</Text>
        <Text className="latin">S.M.Q.L.: Sunt Mala Quæ Libas.</Text>
        <Text className="vernacular">
          S.M.Q.L.: São maldades o que me apresentas.
        </Text>
        <Text className="latin">I.V.B.: Ipse Venena Bibas.</Text>
        <Text className="vernacular">I.V.B.: Tu mesmo bebe esses venenos.</Text>
        <Text className="latin">Amen.</Text>
        <Text className="vernacular">Amen.</Text>
      </Language>
    </PageWrapper>
  );
}
