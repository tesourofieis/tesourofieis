import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0717() {
  return (
    <PageWrapper>
      <H1 text="S. Aleixo, Conf., a 17 de Julho" />

      <Typography className="comment">
        Santo Aleixo, nasceu em Roma, de familia rica, no ano de 350 mais ou
        menos, sendo seu pai o senador Eufemiano. Guiado pelo Espírito Santo
        renunciou a todo o seu património, e visitou em piedosa peregrinação so
        santuários do Oriente. Morreu no século V, sob o pontificado de
        Inocêncio I. Seu corpo foi depositado em Roma, no Monte Aventino, na
        igreja de seu nome, onde é venerado com S. Bonifácio, a quem foi
        primitivamente consagrada.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">1 Tm. 6, 6-12</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo a Timóteo.
        </Typography>
        <Typography className="latin">
          Caríssime: Est quæstus magnus píetas cum sufficiéntia. Nihil enim
          intúlimus in hunc mundum: haud dúbium, quod nec auférre quid póssumus.
          Habéntes autem aliménta, et quibus tegámur, his conténti simus. Nam
          qui volunt dívites fíeri, incídunt in tentatiónem et in láqueum
          diáboli, et desidéria multa inutília et nocíva: quæ mergunt hómines in
          intéritum et perditiónem. Radix enim ómnium malórum est cupíditas:
          quam quidam appeténtes, erravérunt a fide, et inseruérunt se dolóribus
          multis. Tu autem, o homo Dei, hæc fuge: sectáre vero justítiam,
          pietátem, fidem, caritátem, patiéntiam, mansuetúdinem. Certa bonum
          certámen fídei, apprehénde vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          Caríssimo: É uma grande riqueza possuir a piedade e contentar-se com o
          suficiente. Na verdade, não trouxemos nada a este mundo e sem dúvida
          nada poderemos levar dele. Se, portanto, temos de comer e de vestir,
          estejamos contentes, pois aqueles que querem ser ricos caem nas
          tentações e nas ciladas do demónio e em muitos outros desejos inúteis
          e perniciosos, que arrastam o homem para a ruína e perdição. A raiz de
          todos os males é, na verdade, a cobiça; e, assim, alguns, guiando-se
          por ela, afastaram-se da fé e enredaram-se em muitas aflições. Porém
          tu, ó homem de Deus, foge destas coisas e procura a justiça, a
          piedade, a fé, a caridade, a paciência e a mansidão. Pugna com valor
          no bom combate da fé e alcança a vida eterna.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 19, 27-29</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Petrus ad Jesum: Ecce, nos relíquimus ómnia, et
          secúti sumus te: quid ergo erit nobis? Jesus autem dixit illis: Amen,
          dico vobis, quod vos, qui secúti estis me, in regeneratióne, cum
          séderit Fílius hóminis in sede majestátis suæ, sedébitis et vos super
          sedes duódecim, judicántes duódecim tribus Israël. Et omnis, qui
          relíquerit domum, vel fratres, aut soróres, aut patrem, aut matrem,
          aut uxórem, aut fílios, aut agros, propter nomen meum, céntuplum
          accípiet, et vitam ætérnam possidebit.
        </Typography>
        <Typography className="vernacular">
          Naquele Naquele tempo, disse Pedro a Jesus: «Eis que deixámos tudo e
          Vos seguimos. Que recompensa teremos por isso?». Jesus respondeu-lhe:
          «Em verdade vos digo: vós, que me seguistes, quando, no tempo da
          regeneração, o Filho do homem se assentar no trono da sua glória,
          também vos assentareis sobre doze tronos, para julgar as doze tribos
          de Israel. Todo aquele que deixar a sua casa, ou os seus irmãos, ou os
          seus campos, ou o seu pai, ou a sua mãe, ou a sua mulher por causa do
          meu nome receberá o cêntuplo e possuirá a vida eterna».
        </Typography>
      </Language>
    </PageWrapper>
  );
}
