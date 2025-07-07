import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PagePasc05() {
  return (
    <PageWrapper>
      <H1 text="Sexta-feira Pascal" />

      <H3 text="Intróito" />

      <Text className="em">Sl. 77, 53</Text>

      <Language>
        <Text className="latin">
          Edúxit eos Dóminus in spe, allelúja: et inimícos eórum opéruit mare,
          allelúja, allelúja, allelúja.{" "}
          <Text className="latin">Ps. ibid., 1</Text> Attendite, pópule meus,
          legem meam: inclináte aurem vestram in verba oris mei.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          O Senhor conduziu-os cheios de esperança, aleluia: enquanto que aos
          seus inimigos submergiu-os no mar, aleluia, aleluia, aleluia.{" "}
          <Text className="vernacular">Sl. ibid., 1</Text> Atende à minha lei, ó
          meu povo: escuta as palavras da minha boca.
          <Text className="versicle"> ℣. </Text>
          Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui paschále sacraméntum in
          reconciliatiónis humánæ fǿdere contulísti: da méntibus nostris; ut,
          quod professióne celebrámus, imitémur efféctu. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Deus omnipotente e eterno, que por meio do sacramento pascal
          estabelecestes uma aliança de reconciliação com a humanidade, concedei
          às nossas almas a graça de imitarem em suas acções o que confessam
          durante esta festa. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">1 Pe. 3, 18-22</Text>

      <Language>
        <Text className="latin">Léctio Epístolæ beáti Petri Apóstoli.</Text>
        <Text className="vernacular">Lição da Ep.ª do B. Ap.º Pedro.</Text>
        <Text className="latin">
          Caríssimi: Christus semel pro peccátis nostris mórtuus est, justus pro
          injústis, ut nos offérret Deo, mortificátus quidem carne, vivificátus
          autem spíritu. In quo et his, qui in cárcere erant, spirítibus véniens
          prædicávit: qui incréduli fúerant aliquándo, quando exspectábant Dei
          patiéntiam in diébus Noë, cum fabricarétur arca, in qua pauci, id est
          octo ánimæ salvæ factæ sunt per aquam. Quod et vos nunc símilis formæ
          salvos facit baptísma: non carnis deposítio sórdium, sed consciéntiæ
          bonæ interrogátio in Deum per resurrectiónem Jesu Christi, Dómini
          nostri, qui est in dextera Dei.
        </Text>
        <Text className="vernacular">
          Caríssimos: Cristo morreu uma só vez pelos nossos pecados: Ele, o
          justo, pelos injustos, a fim de nos oferecer a Deus, depois de haver
          sido morto na carne, mas voltou à vida pelo Espírito, Foi também com
          este espírito que pregou aos espíritos, que estavam na prisão, e que
          outrora haviam sido incrédulos, quando nos dias de Noé esperavam a
          paciência de Deus, enquanto se construía a arca, na qual poucas
          pessoas, isto é, somente oito, foram salvas das águas. Isto era a
          figura do Baptismo, pelo qual deveis ser salvos. Este Baptismo não
          consiste na purificação das manchas da carne, mas na promessa que
          fazeis quando vos perguntam se quereis guardar em Deus a vossa
          consciência pura a qual salvação vos é dada pela ressurreição de nosso
          Senhor Jesus Cristo, que está à dextra de Deus.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 117, 24 & 26-27</Text>

      <Language>
        <Text className="latin">
          Hæc dies, quam fecit Dóminus: exsultémus et lætémur in ea.
          <Text className="versicle"> ℣. </Text>
          Benedíctus, qui venit in nómine Dómini: Deus Dóminus, et illúxit
          nobis.
        </Text>
        <Text className="vernacular">
          Eis o dia que o Senhor fez: exultemos e alegremo-nos nele. Bendito
          seja Aquele que vem em nome do Senhor: o Senhor e Deus fez
          resplandecer sobre nós a sua luz.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 95, 10</Text> Dícite in géntibus: quia
          Dóminus regnávit a ligno.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 95, 10</Text> Dizei aos povos: o
          Senhor reinou pelo madeiro.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Mt. 28, 16-20</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Undecim discípuli abiérunt in Galilǽam, in montem,
          ubi constitúerat illis Jesus. Et vidéntes eum adoravérunt: quidam
          autem dubitavérunt. Et accédens Jesus locútus est eis, dicens: Data
          est mihi omnis potéstas in cœlo et in terra. Eúntes ergo, docéte omnes
          gentes, baptizántes eos in nómine Patris, et Fílii, et Spíritus
          Sancti: docentes eos serváre ómnia, quæcúmque mandávi vobis. Et ecce,
          ego vobíscum sum ómnibus diébus usque ad consummatiónem sǽculi.
        </Text>
        <Text className="vernacular">
          Naquele tempo, partiram os Onze discípulos para a Galileia,
          dirigindo-se ao monte onde o Senhor os havia mandado ir. E, vendo eles
          Jesus, logo O adoraram; ficando, contudo, alguns deles na dúvida.
          Entretanto, Jesus foi-se aproximando e falou-lhes, dizendo: «Todo o
          poder me foi dado no céu e na terra. Ide, pois, ensinai todos os povos
          e baptizai-os em nome do Pai, e do Filho, e do Espírito Santo,
          ensinando-os a observar tudo o que vos ordenei. Eu permanecerei
          convosco todos os dias até à consumação dos séculos».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Ex. 12, 14</Text>

      <Language>
        <Text className="latin">
          Erit vobis hæc dies memoriális, allelúja: et diem festum celebrábitis
          sollémnem Dómino in progénies vestras: legítimum sempitérnum diem,
          allelúja, allelúja, allelúja.
        </Text>
        <Text className="vernacular">
          Este dia ficar-vos-á memorável, aleluia: celebrá-lo-eis de geração em
          geração com uma festa solene em honra do Senhor: e ficará uma
          instituição perpétua, aleluia, aleluia, aleluia.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Hóstias, quǽsumus, Dómine, placátus assúme: quas et pro renatórum
          expiatióne peccáti deférimus, et pro acceleratióne cœléstis auxílii.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, Senhor, recebei benigno as hóstias, que Vos
          oferecemos; e que elas sirvam de expiação dos pecados dos
          recém-nascidos e para alcançarmos o socorro celestial. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 28, 18-19</Text>

      <Language>
        <Text className="latin">
          Data est mihi omnis potéstas in cœlo et in terra, allelúja: eúntes,
          docéte omnes gentes, baptizántes eos in nómine Patris, et Fílii, et
          Spíritus Sancti, allelúja, allelúja.
        </Text>
        <Text className="vernacular">
          Todo o poder me foi dado no céu e na terra, aleluia: ide, pois,
          ensinai todos os povos e baptizai-os em nome do Pai, e do Filho, e do
          Espírito Santo, aleluia, aleluia.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Réspice, quǽsumus, Dómine, pópulum tuum: et, quem ætérnis dignátus es
          renováre mystériis, a temporálibus culpis dignánter absólve. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Olhai para o vosso povo, Senhor; e, assim como Vos dignastes renová-lo
          com os mystérios eternos, assim também Vos digneis absolvê-lo das
          ofensas cometidas neste mundo. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
