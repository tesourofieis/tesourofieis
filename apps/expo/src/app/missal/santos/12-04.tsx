import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1204() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro Crisólogo, B. Conf. e Doutor, a 4 de Dezembro" />

      <Text className="comment">
        A grande eloquência de S. Pedro valeu-lhe o nome de Crisólogo, que
        significa: palavra de oiro. Como recorda a Oração, a sua promoção ao
        episcopado de Ravena (433) devido a uma aparição de Apóstolo S. Pedro ao
        Papa Xisto III, foi milagrosa: «Vós sois o sal da terra... e a luz do
        mundo», diz o Evangelho. «Pregai a palavra, insisti a tempo e fora de
        tempo, repreendei, exortai, censurai... realizai a obra de pregador da
        verdade», acrescenta a Epístola. Assim fez S. Crisólogo: compôs mais de
        160 homílias cuja profunda doutrina lhe mereceu o título de Doutor da
        Igreja. Escreveu a máxima tão conhecida: «Quem se diverte com Satanás
        deve renunciar a regozijar-se com o Cristo». Morreu em Imola no ano de
        450. Escutemos com a amor a palavra de Deus.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Petrum Chrysólogum Doctorem egrégium, divínitus
          præmonstrátum, ad regéndam et instruéndam Ecclésiam tuam éligi
          voluísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris,
          intercessórem habére mereámur in cœlis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para governar e instruir a vossa Igreja Vos dignastes
          escolher o B. Pedro Crisólogo, egrégio Doutor, o qual nos foi indicado
          por uma forma divina, concedei-nos, Vos imploramos, que assim como o
          tivemos como Doutor na terra, assim também mereçamos alcançar a sua
          intercessão nos céus. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Ecl. 44, 16</Text>

      <Language>
        <Text className="latin">
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo.
          <Text className="versicle"> ℣. </Text>
          <Text className="latin">ibid., 20</Text> Non est invéntus símilis
          illi, qui conservaret legem Excélsi.
        </Text>
        <Text className="vernacular">
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus.
          <Text className="versicle"> ℣. </Text>
          <Text className="vernacular">ibid., 20</Text> Ninguém o igualou na
          observância das leis do Altíssimo.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 109, 4</Text> Tu es sacérdos in ætérnum,
          secúndum órdinem Melchísedech. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 109, 4</Text> Tu és sacerdote para
          sempre, segundo a ordem de Melquisedeque. Aleluia.
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 25, 20 & 21</Text>

      <Language>
        <Text className="latin">
          Dómine, quinque talénta tradidísti mihi: ecce, ália quinque
          superlucrátus sum. Euge, serve bone et fidélis, quia in pauca fuísti
          fidélis, supra multa te constítuam, intra in gáudium Dómini tui.
        </Text>
        <Text className="vernacular">
          Senhor, entregastes-me cinco talentos; eis aqui outros cinco que
          lucrei. «Está bem, servo bom e fiel; visto que foste fiel em pouca
          coisa, Eu te colocarei sobre muitas; entra na glória do teu Senhor».
        </Text>
      </Language>
    </PageWrapper>
  );
}
