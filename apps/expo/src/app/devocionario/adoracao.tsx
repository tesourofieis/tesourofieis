import { Typography } from "~/components/typography";
import { H1, H2 } from "~/components/Headings";
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
      <H1 text="Adoração" />

      <Salutaris />
      <H1 text="Acto de Adoração" />
      <Typography className="vernacular">
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
      </Typography>
      <H1 text="Hinos em Honra do Santíssimo Sacramento" />

      <Adorote />

      <Aveverum />

      <Eccepanisangelorum />

      <Parcedomine />

      <H2 text="Cor jesu sacratissimum" />
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Cor Jesu
          sacratissimum:
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Coração sacratíssimo
          de Jesus:
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Miserere nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Tende misericórdia
          de nós.
        </Typography>
      </Language>
      <H1 text="Hino para antes da Bênção" />

      <Tantumergo />
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Panem de cælo
          præstitísti eis. (T. P. Aleluia)
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Vós lhes destes,
          Senhor, o pão do céu. (T. P. Aleluia)
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Omne delectaméntum
          in se habéntem. (T. P. Aleluia)
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> O qual encerra em
          si toda a doçura. (T. P. Aleluia)
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus, quid nobis sub Sacraménto mirábili passiónis tuæ memóriam
          reliquísti: tríbue, quǽsumus, ita nos Córporis et Sánguinis tui sacra
          mystéria venerári; ut redemptiónis tuæ fructum in nobis júgiter
          sentiámus: Qui vivis et régnas in sæcula sæculórum.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que neste admirável Sacramento nos deixastes um memorial da
          vossa paixão, concedei-nos a graça, Vos suplicamos, de honrarmos por
          tal modo os sagrados mystérios do vosso Corpo e Sangue que sintamos
          sempre os frutos da vossa Redenção: Vós, que viveis e reinais em todos
          os séculos dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
      <H1 text="Louvores Dívinos" />
      <Language>
        <Typography className="latin">
          Benedíctus Deus. Benedíctum Nomen sanctum ejus.
        </Typography>
        <Typography className="vernacular">
          Bendito seja Deus. Bendito o seu Santo Nome.
        </Typography>
        <Typography className="latin">
          Benedíctus Jesus Christus, verus Deus et verus homo.
        </Typography>
        <Typography className="vernacular">
          Bendito Jesus Cristo, verdadeiro Deus e verdadeiro homem.
        </Typography>
        <Typography className="latin">Benedíctum Nomen Jesu.</Typography>
        <Typography className="vernacular">Bendito o nome de Jesus.</Typography>
        <Typography className="latin">
          Benedíctum Cor ejus sacratíssimum.
        </Typography>
        <Typography className="vernacular">
          Bendito o seu Sacratíssimo Coração.
        </Typography>
        <Typography className="latin">
          Benedíctus Sanguis ejus pretiosíssimus.
        </Typography>
        <Typography className="vernacular">
          Bendito o seu Preciosíssimo sangue.
        </Typography>
        <Typography className="latin">
          Benedíctus Jesus in sanctíssimo altáris Sacraménto.
        </Typography>
        <Typography className="vernacular">
          Bendito Jesus Cristo no Santíssimo Sacramento do altar.
        </Typography>
        <Typography className="latin">
          Benedíctus Spíritus Sanctus, Paráclitus.
        </Typography>
        <Typography className="vernacular">
          Bendito o Espírito Santo Paráclito.
        </Typography>
        <Typography className="latin">
          Benedícta magna Mater Dei, María sanctíssima.
        </Typography>
        <Typography className="vernacular">
          Bendita Excelsa Mãe de Deus, Maria Santíssima.
        </Typography>
        <Typography className="latin">
          Benedicta sancta ejus et immaculáta concéptio.
        </Typography>
        <Typography className="vernacular">
          Bendita a sua Santa e Imaculada Conceição.
        </Typography>
        <Typography className="latin">
          Benedícta ejus gloriósa assúmptio.
        </Typography>
        <Typography className="vernacular">
          Bendita a sua Gloriosa Assun-ção.
        </Typography>
        <Typography className="latin">
          Benedíctum nomen Maríæ, Vírginis e Matris.
        </Typography>
        <Typography className="vernacular">
          Bendito o nome de Maria, Virgem e Mãe.
        </Typography>
        <Typography className="latin">
          Benedíctus sanctus Joseph, ejus castíssimus Sponsus.
        </Typography>
        <Typography className="vernacular">
          Bendito São José, seu Castíssimo Esposo.
        </Typography>
        <Typography className="latin">
          Benedíctus Deus em Ángelis ejus, et in Sanctis suis.
        </Typography>
        <Typography className="vernacular">
          Bendito Deus nos seus Anjos e nos seus Santos.
        </Typography>
      </Language>
      <H1 text="Hinos para depois da Bênção" />

      <H2 text="Cristus Vincit" />
      <Language>
        <Typography className="latin">Christus Vincit!</Typography>
        <Typography className="vernacular">Cristo Vence!</Typography>
        <Typography className="latin">Christus Regnat!</Typography>
        <Typography className="vernacular">Cristo Reina!</Typography>
        <Typography className="latin">Christus, Cristus Imperat!</Typography>
        <Typography className="vernacular">Cristo, Cristo Impera!</Typography>
      </Language>
      <H2 text="Graças e Louvores" />
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Adoremus in aeternum
          sanctissimum Sacramentum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Graças e louvores se
          dêem a todo o momento.
        </Typography>
      </Language>
      <Typography className="vernacular">
        <Typography className="em">Sl. 116</Typography> Que todas as nações
        louvem o Senhor; que todos os povos O aclamem. Porquanto grandiosa é
        para connosco a sua misericórdia, e a fidelidade do Senhor permanecerá
        eternamente.
      </Typography>
      <Typography className="vernacular">
        Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no
        princípio, agora e sempre, e por todos os séculos dos séculos.
      </Typography>
    </PageWrapper>
  );
}
