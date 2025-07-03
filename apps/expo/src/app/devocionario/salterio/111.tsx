import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page111() {
  return (
    <PageWrapper>
      <H1 text="Salmo 111" />

      <Language>
        <Text className="latin">
          Beátus vir, qui timet Dóminum: * in mandátis ejus volet nimis.
        </Text>
        <Text className="vernacular">
          Bem-aventurado o varão que teme o Senhor: * muito se deliciará nos
          seus mandamentos.
        </Text>
        <Text className="latin">
          Potens in terra erit semen ejus: * generátio rectórum benedicétur.
        </Text>
        <Text className="vernacular">
          Poderosa será a sua semente sobre a terra: * bendita será a geração
          dos justos.
        </Text>
        <Text className="latin">
          Glória, et spanítiæ in domo ejus: * et justítia ejus manet in sǽculum
          sǽculi.
        </Text>
        <Text className="vernacular">
          Haverá glória e riqueza na sua casa: * e a sua justiça permanece por
          todos os séculos.
        </Text>
        <Text className="latin">
          Exórtum est in ténebris lumen rectis: * miséricors, et miserátor, et
          justus.
        </Text>
        <Text className="vernacular">
          Nas trevas surgiu uma luz para os rectos: * ele é misericordioso,
          compassivo e justo.
        </Text>
        <Text className="latin">
          Jucúndus homo qui miserétur et cómmodat, dispónet sermónes suos in
          judício: * quia in ætérnum non commovébitur.
        </Text>
        <Text className="vernacular">
          Ditoso o homem que se compadece e empresta, ele disporá os seus
          discursos com juízo: * pois nunca será abalado.
        </Text>
        <Text className="latin">
          In memória ætérna erit justus: * ab auditióne mala non timébit.
        </Text>
        <Text className="vernacular">
          A memória do justo será eterna: * não temerá ouvir notícias funestas.
        </Text>
        <Text className="latin">
          Parátum cor ejus speráre in Dómino, confirmátum est cor ejus: * non
          commovébitur donec despíciat inimícos suos.
        </Text>
        <Text className="vernacular">
          Seu coração está disposto a esperar no Senhor, fortalecido está o seu
          coração: * não será abalado até que observe os seus inimigos.
        </Text>
        <Text className="latin">
          Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum sǽculi, *
          cornu ejus exaltábitur in glória.
        </Text>
        <Text className="vernacular">
          Distribuiu, deu aos pobres: a sua justiça permanece por todos os
          séculos, * o seu poder será exaltado em glória.
        </Text>
        <Text className="latin">
          Peccátor vidébit, et irascétur, déntibus suis fremet et tabéscet: *
          desidérium peccatórum períbit.
        </Text>
        <Text className="vernacular">
          Vê-lo-á o pecador e indignar-se-á, rangerá os dentes e dissipar-se-á:
          * o desejo dos pecadores perecerá.
        </Text>
      </Language>
    </PageWrapper>
  );
}
