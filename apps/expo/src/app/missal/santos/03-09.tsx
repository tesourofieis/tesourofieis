import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0309() {
  return (
    <PageWrapper>
      <H1 text="Santa Francisca Romana, Viúva, a 9 de Março" />

      <Text className="comment">
        Comemoração S. Francisca Romana, Viúva. Santa Francisca, nobre matrona
        Romana, foi a mulher forte da qual fala a Epístola. Unida desde a idade
        de 11 anos pelos laços matrimoniais a Lourenço de Ponziani, foi, durante
        quarenta anos, o tipo perfeito da esposa cristã. Evitando as festas,
        vestindo-se com a máxima modéstia, dando à oração e ao serviço dos
        pobres todo o tempo que lhe restava depois do cumprimento de seus
        deveres domésticos, fundou, em Roma, a casa das Oblatas da Congregação
        do Monte Olivete, sob a Regra de S. Bento (1433). Para onde, depois da
        morte do marido, retirou-se a fim de comprar, ao preço de todos os seus
        bens, a pérola preciosa da vida eterna. Tendo se tornado «esposa de
        Cristo» hauriu na constante contemplação da paixão de Jesus, a divina
        energia que lhe permitiu subjugar completamente o corpo. Para
        sustentá-la, nas terriveis lutas que teve com o demónio, foi por Deus
        favorecida com a presença visível de seu Anjo da Guarda, com o qual
        conversava familiarmente. Morreu em 1440. Neste sagrado tempo de
        penitência, imitemos, como a Santa Francisca, a vida de sacrifícios do
        Salvador.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátam Francíscam fámulam tuam, inter cétera grátiæ tuæ
          dona, familiári Angeli consuetúdine decorásti: concéde, quǽsumus; ut,
          intercessiónis ejus auxílio, Angelórum consórtium cónsequi mereámur.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que concedestes à B. Francisca, vossa serva, entre outros
          dons, a graça da presença familiar de um Anjo, permiti-nos, Vos
          rogamos, que com o auxílio da sua intercessão mereçamos alcançar a
          companhia dos Anjos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
