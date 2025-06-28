import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import Adorote from "./../canticos/sacros/adorote";
import Aveverum from "./../canticos/sacros/aveverum";
import Eccepanisangelorum from "./../canticos/sacros/eccepanisangelorum";
import Parcedomine from "./../canticos/sacros/parcedomine";
import Salutaris from "./../canticos/sacros/salutaris";
import Tantumergo from "./../canticos/sacros/tantumergo";

export default function PageAdoracao() {
  return (
    <PageWrapper>
      <Text className="h1">Adoração</Text>
      <Text className="h2">O Salutáris Hóstia</Text>
      <Salutaris />
      <Text className="h1">Acto de Adoração</Text>
      <Text className="text-base">
        Meu Senhor e meu Deus, creio que estais verdadeiramente, realmente e
        substancialmente nessa Hóstia Consagrada, como estais no céu! Creio-o,
        Senhor, porque Vós o disseste! Humildemente prostrado no abysmo do meu
        nada e da minha miséria, profundamente Vos adoro e reconheço como meu
        Deus, Criador, Senhor, Redentor e Juiz. Não só Vos Adoro nessa Divina
        Hóstia, mas também em todos os Sacrários do mundo, principalmente onde
        sois menos adorado, manifestando-Vos o meu maior amor e reconhecimento
        pela vossa existência na Hóstia Consagrada. Tende misericórdia de mim,
        Senhor, e suportai-me na vossa presença! Senhor, pesa-me do íntimo do
        coração de Vos haver ofendido tantas vezes e tão vilmente! Arrependo-me
        sinceramente de Vos haver ultrajado! Quem me dera, Senhor, antes ter
        morrido, do que Vos haver ofendido! Mas... aqui me tendes a vossos pés,
        humilhado e contrito. Proponho, auxiliado com vossa graça, nunca, nunca
        mais pecar! Senhor, sois bom e misericordioso, perdoai-me! E agora,
        Senhor, vinde a mim. Já que não posso receber-Vos sacramentalmente, ao
        menos desejo receber-Vos espiritualmente. Vinde, Senhor, e Vos não
        afasteis nunca mais. Ah! Como é bom viver unido a Vós! Senhor, eu Vos
        amo; eu Vos adoro!
      </Text>
      <Text className="h1">Hinos em Honra do Santíssimo Sacramento</Text>
      <Text className="h2">Adoro Te Devote</Text>
      <Adorote />
      <Text className="h2">Ave Verum Corpus</Text>
      <Aveverum />
      <Text className="h2">Ecce Panis Angelorum</Text>
      <Eccepanisangelorum />
      <Text className="h2">Parce Domine</Text>
      <Parcedomine />
      <Text className="h2">Cor jesu sacratissimum</Text>
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Cor Jesu sacratissimum:
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Coração sacratíssimo de Jesus:
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Miserere nobis.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Tende misericórdia de nós.
        </Text>
      </Language>
      <Text className="h1">Hino para antes da Bênção</Text>
      <Text className="h2">Tantum Ergo</Text>
      <Tantumergo />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Panem de cælo præstitísti eis.
          (T. P. Aleluia)
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Vós lhes destes, Senhor, o pão
          do céu. (T. P. Aleluia)
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Omne delectaméntum in se
          habéntem. (T. P. Aleluia)
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> O qual encerra em si toda a
          doçura. (T. P. Aleluia)
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Deus, quid nobis sub Sacraménto mirábili passiónis tuæ memóriam
          reliquísti: tríbue, quǽsumus, ita nos Córporis et Sánguinis tui sacra
          mystéria venerári; ut redemptiónis tuæ fructum in nobis júgiter
          sentiámus: Qui vivis et régnas in sæcula sæculórum.
        </Text>
        <Text className="vernacular">
          Ó Deus, que neste admirável Sacramento nos deixastes um memorial da
          vossa paixão, concedei-nos a graça, Vos suplicamos, de honrarmos por
          tal modo os sagrados mystérios do vosso Corpo e Sangue que sintamos
          sempre os frutos da vossa Redenção: Vós, que viveis e reinais em todos
          os séculos dos séculos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
      <Text className="h1">Louvores Dívinos</Text>
      <Language>
        <Text className="latin">
          Benedíctus Deus. Benedíctum Nomen sanctum ejus.
        </Text>
        <Text className="vernacular">
          Bendito seja Deus. Bendito o seu Santo Nome.
        </Text>
        <Text className="latin">
          Benedíctus Jesus Christus, verus Deus et verus homo.
        </Text>
        <Text className="vernacular">
          Bendito Jesus Cristo, verdadeiro Deus e verdadeiro homem.
        </Text>
        <Text className="latin">Benedíctum Nomen Jesu.</Text>
        <Text className="vernacular">Bendito o nome de Jesus.</Text>
        <Text className="latin">Benedíctum Cor ejus sacratíssimum.</Text>
        <Text className="vernacular">Bendito o seu Sacratíssimo Coração.</Text>
        <Text className="latin">Benedíctus Sanguis ejus pretiosíssimus.</Text>
        <Text className="vernacular">Bendito o seu Preciosíssimo sangue.</Text>
        <Text className="latin">
          Benedíctus Jesus in sanctíssimo altáris Sacraménto.
        </Text>
        <Text className="vernacular">
          Bendito Jesus Cristo no Santíssimo Sacramento do altar.
        </Text>
        <Text className="latin">Benedíctus Spíritus Sanctus, Paráclitus.</Text>
        <Text className="vernacular">Bendito o Espírito Santo Paráclito.</Text>
        <Text className="latin">
          Benedícta magna Mater Dei, María sanctíssima.
        </Text>
        <Text className="vernacular">
          Bendita Excelsa Mãe de Deus, Maria Santíssima.
        </Text>
        <Text className="latin">
          Benedicta sancta ejus et immaculáta concéptio.
        </Text>
        <Text className="vernacular">
          Bendita a sua Santa e Imaculada Conceição.
        </Text>
        <Text className="latin">Benedícta ejus gloriósa assúmptio.</Text>
        <Text className="vernacular">Bendita a sua Gloriosa Assun-ção.</Text>
        <Text className="latin">
          Benedíctum nomen Maríæ, Vírginis e Matris.
        </Text>
        <Text className="vernacular">
          Bendito o nome de Maria, Virgem e Mãe.
        </Text>
        <Text className="latin">
          Benedíctus sanctus Joseph, ejus castíssimus Sponsus.
        </Text>
        <Text className="vernacular">
          Bendito São José, seu Castíssimo Esposo.
        </Text>
        <Text className="latin">
          Benedíctus Deus em Ángelis ejus, et in Sanctis suis.
        </Text>
        <Text className="vernacular">
          Bendito Deus nos seus Anjos e nos seus Santos.
        </Text>
      </Language>
      <Text className="h1">Hinos para depois da Bênção</Text>
      <Text className="h2">Cristus Vincit</Text>
      <Language>
        <Text className="latin">Christus Vincit!</Text>
        <Text className="vernacular">Cristo Vence!</Text>
        <Text className="latin">Christus Regnat!</Text>
        <Text className="vernacular">Cristo Reina!</Text>
        <Text className="latin">Christus, Cristus Imperat!</Text>
        <Text className="vernacular">Cristo, Cristo Impera!</Text>
      </Language>
      <Text className="h2">Graças e Louvores</Text>
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Adoremus in aeternum
          sanctissimum Sacramentum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Graças e louvores se dêem a todo
          o momento.
        </Text>
      </Language>
      <Text className="text-base">
        <Text className="em">Sl. 116</Text> Que todas as nações louvem o Senhor;
        que todos os povos O aclamem. Porquanto grandiosa é para connosco a sua
        misericórdia, e a fidelidade do Senhor permanecerá eternamente.
      </Text>
      <Text className="text-base">
        Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no
        princípio, agora e sempre, e por todos os séculos dos séculos.
      </Text>
    </PageWrapper>
  );
}
