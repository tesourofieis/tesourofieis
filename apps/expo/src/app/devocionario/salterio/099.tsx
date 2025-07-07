import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page099() {
  return (
    <PageWrapper>
      <H1 text="Salmo 99" />

      <Language>
        <Text className="latin">
          Jubiláte Deo, omnis terra: * servíte Dómino in lætítia.
        </Text>
        <Text className="vernacular">
          Aclamai a Deus, toda a terra: * servi o Senhor com alegria.
        </Text>
        <Text className="latin">
          Introíte in conspéctu ejus, * in exsultatióne.
        </Text>
        <Text className="vernacular">
          Vinde à sua presença * em grande exaltação.
        </Text>
        <Text className="latin">
          Scitóte quóniam Dóminus ipse est Deus: * ipse fecit nos, et non ipsi
          nos.
        </Text>
        <Text className="vernacular">
          Sabei que o Senhor é Deus: * nos fez Ele e não nós a nós mesmos.
        </Text>
        <Text className="latin">
          Pópulus ejus, et oves páscuæ ejus: * introíte portas ejus in
          confessióne, átria ejus in hymnis: confitémini illi.
        </Text>
        <Text className="vernacular">
          O seu povo e as ovelhas do seu pasto: * entrai nos seus portões com
          louvor, nos seus átrios com hinos: glorificai-O.
        </Text>
        <Text className="latin">
          Laudáte nomen ejus: quóniam suávis est Dóminus, in ætérnum
          misericórdia ejus, * et usque in generatiónem et generatiónem véritas
          ejus.
        </Text>
        <Text className="vernacular">
          Louvai o seu nome: porque o Senhor é suave, a sua misericórdia é
          eterna: * e a sua verdade permanece de geração em geração.
        </Text>
      </Language>
    </PageWrapper>
  );
}
