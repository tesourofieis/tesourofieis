import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page112() {
  return (
    <PageWrapper>
      <H1 text="Salmo 112" />

      <Language>
        <Text className="latin">
          Laudáte, púeri, Dóminum: * laudáte nomen Dómini.
        </Text>
        <Text className="vernacular">
          Louvai o Senhor, ó meninos: * louvai o nome do Senhor.
        </Text>
        <Text className="latin">
          <Text className="latin">fit reverentia</Text> Sit nomen Dómini
          benedíctum, * ex hoc nunc, et usque in sǽculum.
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">inclinar a cabeça</Text> Seja bendito o
          nome do Senhor, * desde agora e para sempre.
        </Text>
        <Text className="latin">
          A solis ortu usque ad occásum, * laudábile nomen Dómini.
        </Text>
        <Text className="vernacular">
          Desde o nascer ao pôr do sol, * é digno de louvor o nome do Senhor.
        </Text>
        <Text className="latin">
          Excélsus super omnes gentes Dóminus, * et super cælos glória ejus.
        </Text>
        <Text className="vernacular">
          Excelso é o Senhor sobre todas as gentes, * e a sua glória sobre os
          céus.
        </Text>
        <Text className="latin">
          Quis sicut Dóminus, Deus noster, qui in altis hábitat, * et humília
          réspicit in cælo et in terra?
        </Text>
        <Text className="vernacular">
          Quem há como o Senhor nosso Deus, que habita nas alturas: * e atende
          os humildes no céu e na terra?
        </Text>
        <Text className="latin">
          Súscitans a terra ínopem, * et de stércore érigens páuperem:
        </Text>
        <Text className="vernacular">
          Levantando da terra o desvalido, * e tirando da imundície o pobre:
        </Text>
        <Text className="latin">
          Ut cóllocet eum cum princípibus, * cum princípibus pópuli sui.
        </Text>
        <Text className="vernacular">
          Para o colocar com os príncipes, * com os príncipes do seu povo.
        </Text>
        <Text className="latin">
          Qui habitáre facit stérilem in domo, * matrem filiórum lætántem.
        </Text>
        <Text className="vernacular">
          Que faz a mulher estéril viver em sua casa, * alegre mãe de filhos.
        </Text>
      </Language>
    </PageWrapper>
  );
}
