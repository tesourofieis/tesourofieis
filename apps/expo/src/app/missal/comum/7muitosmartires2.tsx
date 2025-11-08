import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page7Muitosmartires2() {
  return (
    <PageWrapper>
      <H1 text="Muitos Mártires" />
      <H3 text="Intróito" />
      <Typography className="em">Ecl. 44, 15 & 14</Typography>
      <Language>
        <Typography className="latin">
          Sapiéntiam Sanctórum narrent pópuli, et laudes eórum núntiet ecclésia:
          nomina autem eórum vivent in sǽculum sǽculi.{" "}
          <Typography className="latin">Ps. 32, 1</Typography> Exsultáte, justi,
          in Dómino: rectos decet collaudátio.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Que os povos publiquem a sabedoria dos santos e que a Igreja celebre
          os seus louvores: o seu nome subsistirá em todos os séculos!{" "}
          <Typography className="vernacular">Sl. 32, 1</Typography> Ó justos,
          rejubilai no Senhor: é àqueles que possuem o coração recto que
          pertence louvar o Senhor.
          <Typography className="versicle"> ℣. </Typography>
          Glória ao Pai...
        </Typography>
      </Language>
      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Deus, qui nos concédis sanctórum Mártyrum tuórum{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography> natalítia cólere:
          da nobis in ætérna beatitúdine de eórum societéte gaudére. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos permitistes a graça de celebrarmos o nascimento no céu
          dos vossos Santos Mártires{" "}
          <Typography className="vernacular">N.</Typography> e{" "}
          <Typography className="text-red-500">N.</Typography>, concedei-nos
          ainda a graça de gozarmos na sua companhia a bem-aventurança eterna.
          Por nosso Senhor...
        </Typography>
      </Language>
      <Typography className="aside">
        Se forem Pontífices, não se diz esta Oração mas a da
        <Link className="link" href="/missal/comum/6muitosmartires1#oração">
          Missa precedente.
        </Link>
      </Typography>
      <H3 text="Epístola" />
      <Typography className="em">Sb. 5, 16-20</Typography>
      <Language>
        <Typography className="latin">Léctio libri Sapiéntiæ.</Typography>
        <Typography className="vernacular">
          Lição do Livro da Sabedoria.
        </Typography>
        <Typography className="latin">
          Justi autem in perpétuum vivent, et apud Dóminum est merces eórum, et
          cogitátio illórum apud Altíssimum. Ideo accípient regnum decóris, et
          diadéma speciéi de manu Dómini: quóniam déxtera sua teget eos, et
          bráchio sancto suo deféndet illos. Accípiet armatúram zelus illíus, et
          armábit creatúram ad ultiónem inimicórum. Induet pro thoráce
          justítiam, et accípiet pro gálea judícium certum. Sumet scutum
          inexpugnábile æquitátem.
        </Typography>
        <Typography className="vernacular">
          Os justos viverão eternamente e alcançarão recompensa junto do Senhor,
          pois o Altíssimo cuidará deles. Eis porque receberão das mãos do
          Senhor um reino de glória e um diadema brilhante! O Senhor
          protegê-los-á com sua dextra, cobrindo-os com seu divino braço, que
          será como um escudo. Seu zelo o levará a tomar a armadura e a armar as
          criaturas para se vingar dos seus inimigos. Envergará a justiça como
          couraça e a integridade do juízo como capacete; e revestir-se-á com a
          equidade como escudo inexpugnável.
        </Typography>
      </Language>
      <H3 text="Gradual" />
      <Typography className="em">Sl. 123,7-8</Typography>
      <Language>
        <Typography className="latin">
          Anima nostra, sicut passer, erépta est de láqueo venántium.
          <Typography className="versicle"> ℣. </Typography>
          Láqueus contrítus est, et nos liberáti sumus: adjutórium nostrum in
          nómine Dómini, qui fecit cœlum et terram.
        </Typography>
        <Typography className="vernacular">
          A nossa alma livrou-se, como um pássaro do laço dos caçadores!
          <Typography className="versicle"> ℣. </Typography>O laço quebrou-se, e
          ficámos livres. O nosso auxílio está no nome do Senhor, que criou o
          céu e a terra.
        </Typography>
        <Typography className="latin">
          Allelúja, alielúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps.67, 4</Typography> Justi epuléntur,
          et exsúltent in conspéctu Dei: et delecténtur in lætítia. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 67, 4</Typography> Que os
          justos se regozijem e exultem de alegria na presença de Deus, como em
          um banquete. Que eles se deliciem em transportes de alegria. Aleluia.
        </Typography>
      </Language>
      <Typography className="aside">
        Após a Septuagésima omite-se o Aleluia e o seguinte e diz-se:
      </Typography>
      <H3 text="Trato" />
      <Typography className="em">Sl. 125, 5-6</Typography>
      <Language>
        <Typography className="latin">
          Qui séminant in lácrimis, in gáudio metent.
          <Typography className="versicle"> ℣. </Typography>Eúntes ibant et
          fiébant, mitténtes sémina sua.
          <Typography className="versicle"> ℣. </Typography>
          Veniéntes autem vénient cum exsultatióne, portántes manípulos suos.
        </Typography>
        <Typography className="vernacular">
          Aqueles que semeiam com lágrimas ceifarão com júbilo.
          <Typography className="versicle"> ℣. </Typography>Iam, caminhavam e
          lançavam a semente à terra, chorando.
          <Typography className="versicle"> ℣. </Typography>
          Porém, quando voltavam, exultavam de alegria, trazendo os seus molhos
          de trigo.
        </Typography>
      </Language>
      <H3 text="Evangelho" />
      <Typography className="em">Lc. 6, 17-23</Typography>
      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Lucam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Lucas.
        </Typography>
        <Typography className="latin">
          In illo témpore: Descéndens Jesus de monte, stetit in loco campéstri,
          et turba discipulórum ejus, et multitúdo copiósa plebis ab omni Judǽa,
          et Jerúsalem, et marítima, et Tyri, et Sidónis, qui vénerant, ut
          audírení eum et sanaréntur a languóribus suis. Et, qui vexabántur a
          spirítibus immúndis, curabántur. Et omnis turba quærébat eum tangere:
          quia virtus de illo exíbat, et sanábat omnes. Et ipse, elevátis óculis
          in discípulos suos, dicebat: Beáti, páuperes: quia vestrum est regnum
          Dei. Beáti, qui nunc esurítis: quia saturabímini. Beáti, qui nunc
          fletis: quia ridébitis. Beáti eritis, cum vos óderint hómines, et cum
          separáverint vos et exprobráveriní, et ejécerint nomen vestrum tamquam
          malum, propter Fílium hóminis. Gaudéte in illa die et exsultáte: ecce
          enim, merces vestra multa est in cœlo.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, descendo Jesus da montanha, parou em uma planície com a
          turba dos seus discípulos e grande multidão de povo de toda a Judeia,
          de Jerusalém, das margens do mar, de Tiro e de Sidónia, que tinha
          vindo para ouvi-l’O e ser curado de suas enfermidades. E os que
          estavam possessos de espíritos imundos ficavam sãos. Toda a multidão
          procurava tocá-l’O, porque saía d’Ele uma virtude que curava a todos.
          Levantando, então, Jesus os olhos para os seus discípulos, disse:
          «Bem-aventurados vós, pobres, porque o reino dos céus é vosso;
          bem-aventurados vós, famintos, porque sereis fartos; bem-aventurados
          vós, que agora chorais, porque depois rireis; bem-aventurados vós,
          quando sois odiados e injuriados e quando os homens se aborrecem e
          rejeitam o vosso nome, como se fora mau, por causa do Filho do homem.
          Alegrai-vos e rejubilai, pois uma grande recompensa vos está reservada
          no céu».
        </Typography>
      </Language>
      <H3 text="Ofertório" />
      <Typography className="em">Sl. 149, 5-6</Typography>
      <Language>
        <Typography className="latin">
          Exsultábunt Sancti in glória, lætabúntur in cubílibus suis:
          exaltatiónes Dei in fáucibus eórum, allelúja.
        </Typography>
        <Typography className="vernacular">
          Os santos exultarão de alegria na sua glória e deliciar-se-ão de
          alegria no lugar do seu repouso. Ressoarão em seus lábios louvores a
          Deus.
        </Typography>
      </Language>
      <H3 text="Secreta" />
      <Language>
        <Typography className="latin">
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum
          tibi grata sint honóre Justórum, et nobis salutária, te miseránte,
          reddántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos, Senhor, estes dons da nossa devoção; e, em atenção aos
          merecimentos dos vossos justos, dignai-Vos aceitá-los, e pela vossa
          misericórdia fazei que nos sejam salutares. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Comúnio" />
      <Typography className="em">Lc. 12, 4</Typography>
      <Language>
        <Typography className="latin">
          Dico autem vobis amícis meis: Ne terreámini ab his, qui vos
          persequúntur.
        </Typography>
        <Typography className="vernacular">
          Digo-vos, pois, a vós, que sois meus amigos: não tenhais medo daqueles
          que vos perseguem.
        </Typography>
      </Language>
      <H3 text="Postcomúnio" />
      <Language>
        <Typography className="latin">
          Præsta nobis, quǽsumus, Dómine: intercedéntibus sanctis Martýribus
          tuis <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography>; ut, quod ore
          contíngimus, pura mente capiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, por intercessão dos vossos santos Mártires{" "}
          <Typography className="vernacular">N.</Typography> e{" "}
          <Typography className="text-red-500">N.</Typography>, dignai-Vos
          conceder-nos a graça de guardarmos com o coração sempre puro o que a
          nossa boca agora recebeu. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
