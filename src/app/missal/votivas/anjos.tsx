import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAnjos() {
  return (
    <PageWrapper>
      <H1 text="Missa dos Anjos" />
      <Typography className="aside">Para a Terça-feira</Typography>
      <H3 text="Intróito" />
      <LinkCard
        href="/missal/santos/03-24#intróito"
        title="S. Gabriel, Arcanjo"
      />
      <H3 text="Oração" />
      <LinkCard
        href="/missal/santos/05-08#oração"
        title="Aparição de Arcanjo S. Miguel"
      />
      <H3 text="Epístola" />
      <Typography className="em">Ap. 5, 11-14</Typography>
      <Language>
        <Typography className="latin">
          Léctio libri Apocalýpsis beáti Joánnis Apóstoli.
        </Typography>
        <Typography className="vernacular">
          Lição do Apocalipse do B. Ap.º João.
        </Typography>
        <Typography className="latin">
          In diébus illis: Audívi vocem Angelórum multórum in circúitu throni,
          et animálium, et seniórum: et erat númerus eórum mília mílium,
          dicéntium voce magna: Dignus est Agnus, qui occísus est, accípere
          virtútem, et divinitátem, et sapiéntiam, et fortitúdinem, et honórem,
          et glóriam, et benedictiónem. Et omnem creatúram, quæ in cœlo est, et
          super terram, et sub terra, et quæ sunt in mari, et quæ in eo: omnes
          audívi dicéntes: Sedénti in throno, et Agno: benedíctio, et honor, et
          glória, et potéstas in sǽcula sæculórum. Et quátuor animália dicébant:
          Amen. Et vigínti quátuor senióres cecidérunt in fácies suas: et
          adoravérunt vivéntem in sǽcula sæculórum.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, ouvi em tomo do trono a voz de muitos Anjos e de
          anciãos. Havia milhares e milhares deles, os quais diziam com voz
          forte: «O Cordeiro, que foi morto, é digno de receber o poder, a
          divindade, a sabedoria, a força, a honra, a glória e as bênçãos!» E
          ouvi todas as criaturas, que estão no céu, na terra, debaixo da terra,
          no mar e em toda sua extensão que diziam: «Àquele que está assentado
          no trono e ao Cordeiro bênçãos, honra, glória em todos os séculos dos
          séculos!» E ouvi os quatro animais que diziam: «Amen!» E os vinte e
          quatro anciãos prostraram a face em terra e adoraram Aquele que vive
          em todos os séculos dos séculos!
        </Typography>
      </Language>
      <H3 text="Gradual" />
      <Typography className="em">Sl. 148,1-2</Typography>
      <Language>
        <Typography className="latin">
          Laudáte Dóminum de cœlis: laudáte eum in excélsis.
          <Typography className="versicle"> ℣. </Typography>Laudáte eum, omnes
          Angeli ejus: laudáte eum, omnes virtútes ejus.
        </Typography>
        <Typography className="vernacular">
          Louvai o Senhor nos céus! Louvai-O nas alturas celestiais.
          <Typography className="versicle"> ℣. </Typography>
          Louvai-O vós, Anjos; louvai-O vós, que constituís o seu exército.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 137, 1-2</Typography> In conspéctu
          Angelórum psallam tibi: adorábo ad templum sanctum tuum, et confitébor
          nómini tuo. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 137, 1-2</Typography> Cantarei
          louvores em vossa honra diante dos Anjos; adorar-Vos-ei no vosso santo
          templo: e glorificarei o vosso nome. Aleluia.
        </Typography>
      </Language>
      Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
      diz-se:
      <H3 text="Trato" />
      <Typography className="em">Sl. 102, 20</Typography>
      <Language>
        <Typography className="latin">
          Benedícite Dóminum, omnes Angeli ejus: potentes virtúte, qui fácitis
          verbum ejus.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 21-22</Typography> Benedícite
          Dómino, omnes virtútes ejus: minístri ejus, qui fácitis voluntátem
          ejus.
          <Typography className="versicle"> ℣. </Typography>Benedicite Dómino,
          ómnia ópera ejus: in omni loco dominatiónis ejus, bénedic, ánima mea,
          Dómino.
        </Typography>
        <Typography className="vernacular">
          Bendizei o Senhor, ó vós, todos os Anjos, heróis poderosos, executores
          das suas ordens e sempre fiéis aos seus chamamentos.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 21-22</Typography> Bendizei
          o Senhor, vós todos, que formais o seu exército; sois os seus
          ministros e cumpris a sua vontade! Bendizei o Senhor, ó obras todas do
          mesmo Senhor! Bendizei o Senhor em todos os lugares do seu domínio, ó
          minha alma.
        </Typography>
      </Language>
      <Typography className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
      </Typography>
      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 137, 1-2</Typography> In conspéctu
          Angelórum psallam tibi: adorábo ad templum sanctum tuum, et confitébor
          nómini tuo Allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Matth. 28, 2</Typography> Angelus Dómini
          descéndit de cœlo, et accédens revólvit lápidem, et sedébat super eum.
          Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 137, 1-2</Typography> Cantarei
          louvores em vossa honra diante dos Anjos; adorar-Vos-ei no vosso santo
          templo; e glorificarei o vosso nome. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Mt. 28, 2</Typography> Um Anjo do Senhor,
          havendo descido do céu, afastou a pedra e assentou-se sobre ela.
          Aleluia.
        </Typography>
      </Language>
      <H3 text="Evangelho" />
      <Typography className="em">Jo. 1, 47-51</Typography>
      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Vidit Jesus Nathánaël veniéntem ad se, et dicit de
          eo: Ecce vere Israëlíta, in quo dolus non est. Dicit ei Nathánaël:
          Unde me nosti? Respóndit Jesus et dixit ei: Priúsquam te Philíppus
          vocáret, cum esses sub ficu, vidi te. Respóndit ei Nathánaël et ait:
          Rabbi, tu es Fílius Dei, tu es Rex Israël. Respóndit Jesus et dixit
          ei: Quia dixi tibi: Vidi te sub ficu, credis: majus his vidébis. Et
          dicit ei: Amen, amen, dico vobis, vidébitis cœlum apértum, et Angelos
          Dei ascendéntes, et descendéntes supra Fílium hóminis.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, Jesus viu Natánael que vinha para Ele, e disse a seu
          respeito: «Eis aí um verdadeiro Israelita no qual não há dolo». E
          Natánael disse-Lhe: «Donde me conheceis?». Jesus respondeu-lhe,
          dizendo: «Antes que Filipe te chamasse, vi-te Eu quando tu estavas
          debaixo da figueira». Respondeu então Natánael: «Rabi (Mestre) sois o
          filho de Deus; sois o Rei de Israel?». E Jesus disse-lhe: «Porque te
          disse: vi-te debaixo da figueira, acreditaste; pois ainda verás coisas
          maiores». Depois acrescentou: «Em verdade, em verdade te digo: verás o
          céu aberto e os Anjos de Deus, subindo e descendo sobre o Filho do
          homem».
        </Typography>
      </Language>
      <H3 text="Ofertório" />
      <LinkCard
        href="/missal/santos/05-08#ofertório"
        title="Aparição de Arcanjo S. Miguel"
      />
      <H3 text="Secreta" />
      <LinkCard
        href="/missal/santos/05-08#secreta"
        title="Aparição de Arcanjo S. Miguel"
      />
      <H3 text="Comúnio" />
      <Language>
        <Typography className="latin">
          Angeli, Archángeli, Throni et Dominatiónes, Principátus et Potestátes,
          Virtútes cœlórum, Chérubim atque Séraphim, Dóminum benedícite in
          ætérnum. (T. P. Allelúja.)
        </Typography>
        <Typography className="vernacular">
          Bendizei o Senhor em todos os séculos, ó Anjos, Arcanjos, Tronos e
          Dominações, Principados, Potestades, Virtudes do céu, Querubins e
          Serafins. (T. P. Aleluia.)
        </Typography>
      </Language>
      <H3 text="Postcomúnio" />
      <Language>
        <Typography className="latin">
          Repléti, Dómine, benedictióne cœlésti, supplíciter implorámus: ut,
          quod fragili celebrámus offício, sanctórum Angelórum atque
          Archangelórum nobis prodésse sentiámus auxílio. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, estando nós, agora, repletos com a bênção celestial, permiti
          Vos suplicamos, que este sacrifício, que celebramos apesar da nossa
          fragilidade, nos seja útil com o auxílio dos vossos Santos Anjos e
          Arcanjos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
