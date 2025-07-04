import { Text } from "react-native";
import { H1 } from "~/components/Headings";

import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page127() {
  return (
    <PageWrapper>
      <H1 text="Salmo 127" />

      <Language>
        <Text className="latin">
          Beáti omnes, qui timent Dóminum, * qui ámbulant in viis ejus.
        </Text>
        <Text className="vernacular">
          Bem-aventurados todos os que temem o Senhor, * e que andam nos seus
          caminhos.
        </Text>
        <Text className="latin">
          Labóres mánuum tuárum quia manducábis: * beátus es, et bene tibi erit.
        </Text>
        <Text className="vernacular">
          Pois comerás dos labores de tuas mãos: * bem-aventurado és e ficarás
          bem.
        </Text>
        <Text className="latin">
          Uxor tua sicut vitis abúndans, * in latéribus domus tuæ.
        </Text>
        <Text className="vernacular">
          Tua esposa será como uma videira fecunda, * no interior de tua casa.
        </Text>
        <Text className="latin">
          Fílii tui sicut novéllæ olivárum, * in circúitu mensæ tuæ.
        </Text>
        <Text className="vernacular">
          Teus filhos, como pimpolhos de oliveiras, * ao redor de tua mesa.
        </Text>
        <Text className="latin">
          Ecce, sic benedicétur homo, * qui timet Dóminum.
        </Text>
        <Text className="vernacular">
          Eis como será abençoado o homem, * que teme o Senhor.
        </Text>
        <Text className="latin">
          Benedícat tibi Dóminus ex Sion: * et vídeas bona Jerúsalem ómnibus
          diébus vitæ tuæ.
        </Text>
        <Text className="vernacular">
          Te abençoe o Senhor desde Sião: * e vejas os bens de Jerusalém todos
          os dias de tua vida.
        </Text>
        <Text className="latin">
          Et vídeas fílios filiórum tuórum, * pacem super Israël.
        </Text>
        <Text className="vernacular">
          Vejas os filhos de teus filhos, * e a paz sobre Israel.
        </Text>
      </Language>
    </PageWrapper>
  );
}
