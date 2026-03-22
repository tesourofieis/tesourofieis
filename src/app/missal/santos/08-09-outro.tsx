import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0809Outro() {
  return (
    <PageWrapper>
      <H1 text="Vigília de S. Lourenço, Mártir, a 9 de Agosto" />

      <H3 text="Intróito" />

      <Typography className="em">Sl. 111, 9</Typography>

      <Language>
        <Typography className="latin">
          Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum sǽculi: cornu ejus exaltábitur
          in glória. <Typography className="latin">Ps. ibid., 1</Typography> Beátus vir, qui timet
          Dóminum: in mandátis ejus cupit nimis.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Distribuiu liberalmente os seus bens pelos pobres: a sua justiça subsistirá em todos os
          séculos dos séculos: e o seu poder será exaltado com glória.{" "}
          <Typography className="vernacular">Sl. ibid., 1</Typography> Bem-aventurado o varão que
          teme o Senhor e que põe todo seu zelo em cumprir os seus Mandamentos.
          <Typography className="versicle"> ℣. </Typography>
          Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Adésto, Dómine, supplicatiónibus nostris: et intercessióne beáti Lauréntii Mártyris tui,
          cujus prǽvénimus festivitátem; perpétuam nobis misericórdiam benígnus impénde. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ouvi as nossas súplicas, Senhor, e, pela intercessão do B. Lourenço, vosso Mártir, cuja
          festa antecipamos, concedei-nos benignamente a vossa perpétua misericórdia. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/17virgensmartires1#epístola"
        title="Virgens Mártires - Missa Loquébar"
      />

      <H3 text="Gradual" />

      <Typography className="em">Sl. 111, 9 & 2</Typography>

      <Language>
        <Typography className="latin">
          Dispersit, dedit paupéribus: justítia ejus manet in sǽculum sǽculi.
          <Typography className="versicle"> ℣. </Typography>Potens in terra erit semen ejus:
          generátio rectórum benedicétur.
        </Typography>
        <Typography className="vernacular">
          Distribuiu liberalmente os seus bens pelos pobres: a sua justiça subsistirá em todos os
          séculos dos séculos.
          <Typography className="versicle"> ℣. </Typography>Sua descendência será poderosa na terra,
          pois a geração dos justos será abençoada.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/3martirpontifice#evangelho"
        title="Mártir Pontífice - Missa Sacerdótes Dei"
      />

      <H3 text="Ofertório" />

      <Typography className="em">Jb. 16, 20</Typography>

      <Language>
        <Typography className="latin">
          Orátio mea munda est: et ídeo peto, ut detur locus voci meæ in cœlo: quia ibi est judex
          meus, et cónscius meus in excélsis: ascéndat ad Dóminum deprecátio mea.
        </Typography>
        <Typography className="vernacular">
          A minha oração é pura: eis porque peço que minha voz seja escutada no céu, pois lá está o
          meu Juiz; é nas alturas dos céus que está Aquele que conhece o íntimo do meu coração. Que
          minha deprecação suba até ao Senhor.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias, Dómine, quas tibi offérimus, propítius súscipe: et, intercedénte beáto Lauréntio
          Mártyre tuo, víncula peccatórum nostrorum absólve. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei propício, Senhor, estas hóstias, que Vos oferecemos; e, pela intercessão do B.
          Lourenço, vosso Mártir, livrai-nos das cadeias dos nossos pecados. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 16, 24</Typography>

      <Language>
        <Typography className="latin">
          Qui vult veníre post me, ábneget semetípsum, et tollat crucem suam, et sequátur me.
        </Typography>
        <Typography className="vernacular">
          Se alguém quer vir após mim, negue-se a si mesmo, tome a sua cruz e siga-me!
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, Dómine, Deus noster: ut, sicut beáti Lauréntii Mártyris tui commemoratióne,
          temporáli gratulámur offício; ita perpétuo lætémur aspéctu. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Senhor, nosso Deus, Vos suplicamos, assim como tivemos a alegria de honrar temporalmente
          com este ofício a memória do B. Lourenço, vosso Mártir, assim também gozemos perpetuamente
          a felicidade da sua presença. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
