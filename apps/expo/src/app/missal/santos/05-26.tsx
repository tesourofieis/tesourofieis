import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0526() {
  return (
    <PageWrapper>
      <H1 text="S. Filipe de Néri, a 26 de Maio" />

      <Typography className="comment">
        S. Filipe nasceu na Florença no século XVI; tudo deixou para servir ao
        divino Mestre (Evangelho) e fundou a Congregação do Oratório. O Espírito
        Santo o inflamára com tanto amor de Deus (Intróito, Aleluia, Secreta),
        que as palpitações do coração lhe quebraram duas costelas (Comúnio).
        Passava as noites inteiras na contemplação das coisas celestes e o
        «Espírito de verdade» lhe ensinava a verdadeira sabedoria (Epístola).
        Suas conferências com Jesus o cumulavam de tal alegria que exclamava:
        «Basta, Senhor, basta». Amava os jovens: «Diverti-vos, lhes dizia, mas
        não ofendendo a Deus». Morreu em 1595, na festa do Santíssimo
        Sacramento. Semelhante a S. Filipe, corramos, com o coração dilatado de
        santa e amorosa alegria, na senda dos mandamentos de Deus (Oração).
      </Typography>

      <H3 text="Intróito" />

      <Typography className="em">Rm. 5, 5</Typography>

      <Language>
        <Typography className="latin">
          Cáritas Dei diffúsa est in córdibus nostris per inhabitántem Spíritum
          ejus in nobis. (T.P. Allelúja, allelúja.){" "}
          <Typography className="latin">Ps. 102, 1</Typography> Benedic, ánima
          mea, Dómino: et ómnia, quæ intra me sunt, nómini sancto ejus.
          <Typography className="versicle"> ℣. </Typography>
          Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          O amor de Deus difundiu-se nos nossos corações pelo seu Espírito que
          habita em nós. (T.P. Aleluia, aleluia.){" "}
          <Typography className="vernacular">Sl. 102, 1</Typography> Bendizei, ó
          minha alma, o Senhor: que tudo quanto me pertence bendiga o seu santo
          nome.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Philippum Confessórem tuum Sanctórum tuórum glória
          sublimásti: concéde propítius; ut, cujus sollemnitáte lætámur, ejus
          virtútum proficiámus exémplo. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que elevastes o B. Filipe, vosso Confessor, à sublime glória
          dos vossos Santos, concedei-nos propício que, celebrando com alegria
          esta festa, alcancemos proveito com o exemplo das suas virtudes. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        title="Epístola S. Tomás Aquino"
        href="/missal/santos/03-07#epístola"
      />

      <H3 text="Gradual" />

      <Typography className="em">Sl. 33, 12 & 6</Typography>

      <Language>
        <Typography className="latin">
          Veníte, fílii, audíte me: timórem Dómini docébo vos.
          <Typography className="versicle"> ℣. </Typography>Accédite ad eum, et
          illuminámini: et fácies vestræ non confundéntur.
        </Typography>
        <Typography className="vernacular">
          Vinde, meus filhos, e escutai-me: Ensinar-vos-ei a temer o Senhor.
          <Typography className="versicle"> ℣. </Typography>Aproximai-Vos d’Ele
          e ficareis iluminados: então a vossa face não ficará envergonhada.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Thren. 1, 13</Typography> De excélso
          misit ignem in óssibus meis, et erudívit me. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Lm. 1, 13</Typography> Do alto dos
          céus enviou e fogo sobre os meus ossos e instruiu-me. Aleluia.
        </Typography>
      </Language>

      <Typography className="aside">
        Durante o Tempo Pascal omite-se o Gradual e diz-se a seguinte Aleluia:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Thren. 1, 13</Typography> De excélso
          misit ignem in óssibus meis, et erudívit me. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Ps. 38, 4</Typography> Concáluit cor meum
          intra me: et in meditatióne mea exardéscet ignis. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Lm. 1, 13</Typography> Do alto dos
          céus enviou e fogo sobre os meus ossos e instruiu-me. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Sl. 38, 4</Typography> Meu coração
          inflamou-se no meu peito. Enquanto eu meditava, o fogo abrasou-me.
          Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        title="Evangelho Confessores não Pontífices"
        href="/missal/comum/14confessoresnaopontifices1#evangelho"
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 18, 32</Typography>

      <Language>
        <Typography className="latin">
          Viam mandatórum tuórum cucúrri, cum dilatásti cor meum. (T.P.
          Allelúja.)
        </Typography>
        <Typography className="vernacular">
          Eu corri pelo caminho dos vossos mandamentos, porquanto dilatastes o
          meu coração. (T.P. Aleluia.)
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrifíciis præséntibus, quǽsumus, Dómine, inténde placatus: et
          præsta; ut illo nos igne Spíritus Sanctus inflámmet, quo beáti
          Phílippi cor mirabíliter penetrávit. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Olhai aplacado para o presente sacrifício, Senhor, Vos suplicamos, e
          fazei que o Espírito Santo nos inflame naquele fogo que penetrou
          maravilhosamente no coração do B. Filipe. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 83, 3</Typography>

      <Language>
        <Typography className="latin">
          Cor meum et caro mea exsultavérunt in Deum vivum. (T.P. Allelúja.)
        </Typography>
        <Typography className="vernacular">
          O meu coração e a minha carne exultaram em Deus vivo. (T.P. Aleluia.)
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Cœléstibus, Dómine, pasti delíciis: quǽsumus; ut beáti Philippi
          Confessóris tui méritis et imitatióne, semper eadem, per quæ veráciter
          vívimus, appetámus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Alimentados com as celestiais delícias, Senhor, Vos pedimos que, pelos
          méritos do B. Filipe, vosso Confessor, e imitando os seus exemplos,
          aspiremos sempre a este alimento, que nos dará a verdadeira vida. Por
          nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
