import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0506() {
  return (
    <PageWrapper>
      <H1 text="S. João (diante da porta latina), a 6 de Maio" />

      <Typography className="comment">
        Jesus prometera a Tiago e a João, filhos de Zebedeu, que beberiam o
        cálice de sua paixão a fim de poderem participar do triunfo da sua
        ressurreição. O Imperador Domiciano chamou João a Roma, condenando-o a
        ser mergulhado numa caldeira de azeite fervendo. S. João, por um milagre
        extraordinário, saiu ileso e ainda mais vigoroso. Construíram naquele
        lugar um santuário junto à Porta Latina, o qual foi consagrado ao Santo
        Apóstolo. Aí se faz a Estação do Sábado da Paixão.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui cónspicis, quia nos úndique mala nostra pertúrbant: præsta,
          quǽsumus; ut beáti Joánnis Apóstoli tui et Evangelístæ intercéssio
          gloriósa nos prótegat. Per Dominum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que tão bem conheceis como estamos perturbados pelos males que
          nos cercam, concedei-nos, Vos suplicamos, que nos proteja a gloriosa
          intercessão do B. João, Vosso Apóstolo e Evangelista. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps 91:13</Typography> Justus ut palma florébit:
          sicut cedrus Líbani multiplicábitur. Allelúja
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 91:13</Typography> O justo florescerá, como
          a palmeira, e crescerá, como o cedro do Líbano. Aleluia.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Ps 14:6</Typography>
          <Typography className="versicle"> ℣. </Typography>Justus germinábit sicut lílium:
          et florébit in ætérnum ante Dóminum. Allelúja.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sl. 14:6</Typography>
          <Typography className="versicle"> ℣. </Typography>O justo despontará, como o
          lírio, e florescerá eternamente na presença do Senhor. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 20, 20-23</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho
          segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In llo témpore: Accessit ad Jesum mater filiórum Zebedǽi cum fíliis
          suis, adórans et petens áliquid ab eo. Qui dixit ei: Quid vis? Ait
          illi: Dic, ut sédeant hi duo fílii mei, unus ad déxteram tuam et unus
          ad sinístram in regno tuo. Respóndens autem Jesus, dixit: Néscitis,
          quid petátis. Potéstis bíbere cálicem, quem ego bibitúrus sum? Dicunt
          ei: Póssumus. Ait illis: Cálicem quidem meum bibétis: sédere autem ad
          déxteram meam vel sinístram, non est meum dare vobis, sed quibus
          parátum est a Patre meo.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, a mãe dos filhos de Zebedeu aproximou-se de Jesus com
          seus dois filhos, adorando-O e querendo pedir-Lhe alguma coisa. Jesus
          disse-lhe: «Que quereis?». Ela respondeu: «Ordenai que estes meus dois
          filhos se assentem, um à vossa direita e o outro à vossa esquerda, no
          vosso reino». Jesus respondeu-lhe: «Não sabeis o que pedis. Podeis
          beber o cálice que Eu devo beber?». Eles responderam: «Podemos». E
          Jesus disse-lhes: «Bebereis, com efeito, o meu cálice; porém não
          depende de mim conceder-vos um lugar à minha direita ou à minha
          esquerda, pois isso é para aqueles para quem meu Pai o preparou».
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Refécti, Dómine, pane cœlésti: ad vitam, quǽsumus, nutriámur ætérnam.
          Per Dominum...
        </Typography>
        <Typography className="vernacular">
          Havendo sido alimentados com o pão celestial, Vos rogamos, Senhor,
          fazei que com ele sejamos nutridos para a vida eterna. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
