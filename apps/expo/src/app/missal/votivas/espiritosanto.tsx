import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageEspiritosanto() {
  return (
    <PageWrapper>
      <H1 text="Missa do Espírito Santo" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/pascoa/pasc7-0">
          Missa do Domingo de Pentecostes
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">Act. 8, 14-17</Typography>

      <Language>
        <Typography className="latin">Léctio Actuum Apostólorum.</Typography>
        <Typography className="vernacular">
          Lição dos Actos dos Apóstolos.
        </Typography>
        <Typography className="latin">
          In diébus illis: Cum audíssent Apóstoli, qui erant Jerosólymis, quod
          recepísset Samaría verbum Dei, misérunt ad eos Petrum et Joánnem. Qui
          cum veníssent, oravérunt pro ipsis, ut accíperent Spíritum Sanctum:
          nondum enim in quemquam illórum vénerat, sed baptizáti tantum erant in
          nómine Dómini Jesu. Tunc imponébant manus super illos, et accipiébant
          Spíritum Sanctum.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, quando os Apóstolos, que estavam em Jerusalém, souberam
          que a Samaria recebera a palavra de Deus, enviaram lá Pedro e João, os
          quais, apenas lá chegaram, oraram por aqueles, para que recebessem o
          Espírito Santo que não havia descido sobre nenhum deles; porquanto
          haviam sido baptizados somente em nome do Senhor Jesus. Então
          impuseram-lhes as mãos e eles receberam o Espírito Santo.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 32, 12 & 6</Typography>

      <Language>
        <Typography className="latin">
          Beáta gens, cujus est Dóminus Deus eórum: pópulus, quem elégit Dóminus
          in hereditátem sibi.<Typography className="versicle"> ℣. </Typography>
          Verbo Dómini cœli firmáti sunt: et Spíritu oris ejus omnis virtus
          eórum.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurado o povo cujo Deus é o Senhor! Bem-aventurado o povo que,
          escolheu o Senhor para sua herança. A palavra do Senhor criou os céus;
          e o sopro dos seus lábios criou toda a milícia celestial.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.{" "}
          <Typography className="em">(hic genuflectitur)</Typography>
          <Typography className="versicle"> ℣. </Typography>
          Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris in
          eis ignem accénde. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.{" "}
          <Typography className="em">(Genuflecte-se)</Typography> Vinde,
          Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o
          fogo do vosso amor. Aleluia.
        </Typography>
      </Language>

      <Typography className="aside">
        Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
        diz-se o:
      </Typography>

      <H3 text="Trato" />

      <Typography className="em">Sl. 103, 30</Typography>

      <Language>
        <Typography className="latin">
          Emítte Spíritum tuum, et creabúntur: et renovábis fáciem terræ.
          <Typography className="versicle"> ℣. </Typography>O quam bonus et
          suávis est, Dómine, Spíritus tuus in nobis!{" "}
          <Typography className="em">(hic genuflectitur)</Typography>
          <Typography className="versicle"> ℣. </Typography>
          Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris in
          eis ignem accénde.
        </Typography>
        <Typography className="vernacular">
          Enviai o vosso Espírito e eles serão criados: e renovarão a face da
          terra.<Typography className="versicle"> ℣. </Typography>Ó Senhor, como
          é bom e suave o vosso Espírito dentro de nós!{" "}
          <Typography className="em">(Genuflecte-se)</Typography>
          <Typography className="versicle"> ℣. </Typography>
          Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei
          neles o fogo do vosso amor.
        </Typography>
      </Language>

      <Typography className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 103, 30</Typography> Emítte Spíritum
          tuum, et creabúntur: et renovábis fáciem terræ. Allelúja.{" "}
          <Typography className="em">(hic genuflectitur)</Typography>
          <Typography className="versicle"> ℣. </Typography>Veni, Sancte
          Spíritus, reple tuórum corda fidélium: et tui amóris in eis ignem
          accénde. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 103, 30</Typography> Enviai o
          vosso Espírito e eles serão criados: e renovarão a face da terra.
          Aleluia. <Typography className="em">(Genuflecte-se)</Typography>
          <Typography className="versicle"> ℣. </Typography>Vinde, Espírito
          Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do
          vosso amor. Aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
