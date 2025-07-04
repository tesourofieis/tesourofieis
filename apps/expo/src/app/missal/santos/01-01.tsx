import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0101() {
  return (
    <PageWrapper>
      <H1 text="Circuncisão do Senhor e Oitava do Natal" />

      <H3 text="Intróito" />

      <Text className="em">Is. 9, 6</Text>

      <Language>
        <Text className="latin">
          Puer natus est nobis, et fílius datus est nobis: cujus impénum super
          húmerum ejus: et vocábitur nomen ejus magni consílii Angelus.{" "}
          <Text className="latin">Ps. 97, 1</Text> Cantáte Dómino cánticum
          novum: quia mirabília fecit.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Nasceu para nós um Menino e foi-nos dado um Filho que traz sobre os
          ombros o manto da realeza, o qual será chamado «Anjo do admirável
          conselho». <Text className="vernacular">Sl. 97, 1</Text> Cantai ao
          Senhor um hino novo, pois Ele operou maravilhas.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui salútis ætérnæ, beátæ Maríæ virginitáte fecúnda, humáno
          géneri prǽmia præstitísti: tríbue, quǽsumus; ut ipsam pro nobis
          intercédere sentiámus, per quam merúimus auctórem vitæ suscípere,
          Dóminum nostrum Jesum Christum, Fílium tuum: Qui tecum vivit...
        </Text>
        <Text className="vernacular">
          Ó Deus, que pela virgindade fecunda da Bem-aventurada Virgem Maria
          concedestes ao género humano o prémio da salvação eterna, permiti, Vos
          imploramos, que gozemos a intercessão daquela pela qual fomos julgados
          dignos de receber o autor da vida, nosso Senhor Jesus Cristo, vosso
          Filho: Que, sendo Deus, convosco vive e reina...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Tt. 2, 11-15</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beati Pauli Apóstoli ad Titum.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo a Tito.
        </Text>
        <Text className="latin">
          Caríssime: Appáruit grátia Dei Salvatóris nostri ómnibus homínibus,
          erúdiens nos, ut, abnegántes impietátem et sæculária desidéria, sóbrie
          et juste et pie vivámus in hoc sǽculo, exspectántes beátam spem et
          advéntum glóriæ magni Dei et Salvatóris nostri Jesu Christi: qui dedit
          semetípsum pro nobis: ut nos redímeret ab omni iniquitáte, et mundáret
          sibi pópulum acceptábilem, sectatórem bonórum óperum. Hæc lóquere et
          exhortáre: in Christo Jesu, Dómino nostro.
        </Text>
        <Text className="vernacular">
          Caríssimo: A graça de Deus, nosso Salvador, manifestou-se a todos os
          homens, ensinando-nos, a fim de que, repudiando a impiedade e os
          apetites terrenos, vivamos neste mundo com temperança, justiça e
          piedade, pensando na esperança, na bem-aventurança eterna e na vinda
          da glória do nosso grande Deus e Salvador, Jesus Cristo: que se
          ofereceu espontaneamente por nós, para nos resgatar de toda a
          iniquidade e tornar-nos numa raça purificada, escolhida e zelosa em
          suas boas obras. Ensina e prega estas coisas, em Jesus Cristo, nosso
          Senhor!
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 97, 3 & 2</Text>

      <Language>
        <Text className="latin">
          Vidérunt omnes fines terræ salutare Dei nostri: jubiláte Deo, omnis
          terra.<Text className="versicle"> ℣. </Text>Notum fecit Dominus
          salutare suum: ante conspéctum géntium revelávit justitiam suam.
        </Text>
        <Text className="vernacular">
          Toda a terra viu o Salvador que o nosso Deus enviou: aclamai, pois, o
          Senhor, ó povos de toda a terra!
          <Text className="versicle"> ℣. </Text>O Senhor manifestou o Salvador
          que havia prometido: e manifestou a sua justiça aos olhos dos povos.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Hebr. 1, 1-2</Text> Multifárie olim Deus
          loquens pátribus in Prophétis, novíssime diébus istis locútus est
          nobis in Fílio. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Heb. 1, 1-2</Text> Deus, que outrora
          falou de diversas maneiras pelos Profetas, dignou-se falar-nos nos
          últimos tempos pelo seu Filho. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Lc. 2, 21</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Lucas.
        </Text>
        <Text className="latin">
          In illo témpore: Postquam consummáti sunt dies octo, ut
          circumciderétur Puer: vocátum est nomen ejus Jesus, quod vocátum est
          ab Angelo, priúsquam in útero conciperétur.
        </Text>
        <Text className="vernacular">
          Naquele tempo, passados que foram oito dias depois dos quais o Menino
          devia ser circuncidado, foi-Lhe dado o nome de Jesus, que foi aquele
          que o Anjo Lhe havia dado, antes de ser concebido no seio de sua Mãe.
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 88, 12 & 15</Text>

      <Language>
        <Text className="latin">
          Tui sunt cœli et tua est terra: orbem terrárum et plenitúdinem ejus tu
          fundásti: justítia et judícium præparátio sedis tuæ.
        </Text>
        <Text className="vernacular">
          A Vós, Senhor, pertencem os céus e a terra, pois criastes o universo e
          tudo o que ele encerra. A justiça e a equidade são a base do vosso
          trono.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et
          cœléstibus nos munda mystériis, et cleménter exáudi. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Havendo Vós, Senhor, recebido benignamente os nossos dons e orações,
          dignai-Vos ainda, Vos suplicamos, purificar-nos pela virtude dos
          vossos celestiais mystérios e ouvir-nos misericordiosamente. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Sl. 97, 3</Text>

      <Language>
        <Text className="latin">
          Vidérunt omnes fines terræ salutáre Dei nostri.
        </Text>
        <Text className="vernacular">
          Toda a terra viu o Salvador que o nosso Deus enviou.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáta
          Vírgine Dei Genetríce María, cœléstis remédii fáciat esse consórtes.
          Per eúndem Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta comunhão, Senhor, nos purifique de nossos crimes e que por
          intercessão da B. Virgem Maria, Mãe de Deus, nos torne participantes
          do remédio celestial. Pelo mesmo nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
