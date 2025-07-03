import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page125() {
  return (
    <PageWrapper>
      <H1 text="Salmo 125" />

      <Language>
        <Text className="latin">
          In converténdo Dóminus captivitátem Sion: * facti sumus sicut
          consoláti:
        </Text>
        <Text className="vernacular">
          Quando o Senhor fez volver os cativos de Sião: * nós ficámos cheios de
          consolação:
        </Text>
        <Text className="latin">
          Tunc replétum est gáudio os nostrum: * et lingua nostra exsultatióne.
        </Text>
        <Text className="vernacular">
          Então a nossa boca se encheu de alegria: * e a nossa língua exultou.
        </Text>
        <Text className="latin">
          Tunc dicent inter gentes: * Magnificávit Dóminus fácere cum eis.
        </Text>
        <Text className="vernacular">
          Então dir-se-á entre as gentes: * grandes coisas fez o Senhor para
          eles.
        </Text>
        <Text className="latin">
          Magnificávit Dóminus fácere nobíscum: * facti sumus lætántes.
        </Text>
        <Text className="vernacular">
          Grandes coisas fez o Senhor por nós: * estamos cheios de alegria.
        </Text>
        <Text className="latin">
          Convérte, Dómine, captivitátem nostram, * sicut torrens in Austro.
        </Text>
        <Text className="vernacular">
          Fazei, ó Senhor, volver os nossos cativos, * como as torrentes do sul.
        </Text>
        <Text className="latin">
          Qui séminant in lácrimis, * in exsultatióne metent.
        </Text>
        <Text className="vernacular">
          Os que semeiam em lágrimas, * em exultação ceifarão.
        </Text>
        <Text className="latin">
          Eúntes ibant et flebant, * mitténtes sémina sua.
        </Text>
        <Text className="vernacular">
          Andando iam e choravam, * lançando as suas sementes.
        </Text>
        <Text className="latin">
          Veniéntes autem vénient cum exsultatióne, * portántes manípulos suos.
        </Text>
        <Text className="vernacular">
          Vindo, todavia, virão contentes, * trazendo os seus feixes.
        </Text>
      </Language>
    </PageWrapper>
  );
}
