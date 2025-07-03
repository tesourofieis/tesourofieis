import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page124() {
  return (
    <PageWrapper>
      <H1 text="Salmo 124" />

      <Language>
        <Text className="latin">
          Qui confídunt in Dómino, sicut mons Sion: * non commovébitur in
          ætérnum, qui hábitat in Jerúsalem.
        </Text>
        <Text className="vernacular">
          Os que confiam no Senhor serão como o monte Sião: * nunca será abalado
          o que habita em Jerusalém.
        </Text>
        <Text className="latin">
          Montes in circúitu ejus: * et Dóminus in circúitu pópuli sui, ex hoc
          nunc et usque in sǽculum.
        </Text>
        <Text className="vernacular">
          Ela está cercada de montes: * e o Senhor está ao redor do seu povo,
          desde agora e para sempre.
        </Text>
        <Text className="latin">
          Quia non relínquet Dóminus virgam peccatórum super sortem justórum: *
          ut non exténdant justi ad iniquitátem manus suas.
        </Text>
        <Text className="vernacular">
          Pois o Senhor não deixará a vara dos pecadores sobre a herança dos
          justos: * para que os justos não estendam as suas mãos para a
          iniquidade.
        </Text>
        <Text className="latin">
          Bénefac, Dómine, bonis, * et rectis corde.
        </Text>
        <Text className="vernacular">
          Senhor, fazei bem aos bons * e aos rectos de coração.
        </Text>
        <Text className="latin">
          Declinántes autem in obligatiónes addúcet Dóminus cum operántibus
          iniquitátem: * pax super Israël.
        </Text>
        <Text className="vernacular">
          Aos que se desviam para caminhos tortuosos, levá-los-á o Senhor com os
          que praticam a iniquidade: * a paz seja sobre Israel.
        </Text>
      </Language>
    </PageWrapper>
  );
}
