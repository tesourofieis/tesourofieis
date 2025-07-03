import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageEspiritosanto() {
  return (
    <PageWrapper>
      <H1 text="Missa do Espírito Santo" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/pascoa/pasc7-0">
          Missa do Domingo de Pentecostes
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Epístola" />

      <Text className="em">Act. 8, 14-17</Text>

      <Language>
        <Text className="latin">Léctio Actuum Apostólorum.</Text>
        <Text className="vernacular">Lição dos Actos dos Apóstolos.</Text>
        <Text className="latin">
          In diébus illis: Cum audíssent Apóstoli, qui erant Jerosólymis, quod
          recepísset Samaría verbum Dei, misérunt ad eos Petrum et Joánnem. Qui
          cum veníssent, oravérunt pro ipsis, ut accíperent Spíritum Sanctum:
          nondum enim in quemquam illórum vénerat, sed baptizáti tantum erant in
          nómine Dómini Jesu. Tunc imponébant manus super illos, et accipiébant
          Spíritum Sanctum.
        </Text>
        <Text className="vernacular">
          Naqueles dias, quando os Apóstolos, que estavam em Jerusalém, souberam
          que a Samaria recebera a palavra de Deus, enviaram lá Pedro e João, os
          quais, apenas lá chegaram, oraram por aqueles, para que recebessem o
          Espírito Santo que não havia descido sobre nenhum deles; porquanto
          haviam sido baptizados somente em nome do Senhor Jesus. Então
          impuseram-lhes as mãos e eles receberam o Espírito Santo.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 32, 12 & 6</Text>

      <Language>
        <Text className="latin">
          Beáta gens, cujus est Dóminus Deus eórum: pópulus, quem elégit Dóminus
          in hereditátem sibi.<Text className="versicle"> ℣. </Text>
          Verbo Dómini cœli firmáti sunt: et Spíritu oris ejus omnis virtus
          eórum.
        </Text>
        <Text className="vernacular">
          Bem-aventurado o povo cujo Deus é o Senhor! Bem-aventurado o povo que,
          escolheu o Senhor para sua herança. A palavra do Senhor criou os céus;
          e o sopro dos seus lábios criou toda a milícia celestial.
        </Text>
        <Text className="latin">
          Allelúja, allelúja. <Text className="em">(hic genuflectitur)</Text>
          <Text className="versicle"> ℣. </Text>
          Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris in
          eis ignem accénde. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia. <Text className="em">(Genuflecte-se)</Text> Vinde,
          Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o
          fogo do vosso amor. Aleluia.
        </Text>
      </Language>

      <Text className="aside">
        Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
        diz-se o:
      </Text>

      <H3 text="Trato" />

      <Text className="em">Sl. 103, 30</Text>

      <Language>
        <Text className="latin">
          Emítte Spíritum tuum, et creabúntur: et renovábis fáciem terræ.
          <Text className="versicle"> ℣. </Text>O quam bonus et suávis est,
          Dómine, Spíritus tuus in nobis!{" "}
          <Text className="em">(hic genuflectitur)</Text>
          <Text className="versicle"> ℣. </Text>
          Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris in
          eis ignem accénde.
        </Text>
        <Text className="vernacular">
          Enviai o vosso Espírito e eles serão criados: e renovarão a face da
          terra.<Text className="versicle"> ℣. </Text>Ó Senhor, como é bom e
          suave o vosso Espírito dentro de nós!{" "}
          <Text className="em">(Genuflecte-se)</Text>
          <Text className="versicle"> ℣. </Text>
          Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei
          neles o fogo do vosso amor.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 103, 30</Text> Emítte Spíritum tuum, et
          creabúntur: et renovábis fáciem terræ. Allelúja.{" "}
          <Text className="em">(hic genuflectitur)</Text>
          <Text className="versicle"> ℣. </Text>Veni, Sancte Spíritus, reple
          tuórum corda fidélium: et tui amóris in eis ignem accénde. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 103, 30</Text> Enviai o vosso
          Espírito e eles serão criados: e renovarão a face da terra. Aleluia.{" "}
          <Text className="em">(Genuflecte-se)</Text>
          <Text className="versicle"> ℣. </Text>Vinde, Espírito Santo, enchei os
          corações dos vossos fiéis e acendei neles o fogo do vosso amor.
          Aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
