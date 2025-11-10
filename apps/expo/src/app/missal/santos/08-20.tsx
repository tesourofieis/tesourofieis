import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0820() {
  return (
    <PageWrapper>
      <H1 text="S. Bernardo, Confessor e Doutor, a 20 de Agosto" />

      <Typography className="comment">
        Apraz à Igreja celebrar no curso da Oitava da Assunção, São Bernardo, o
        Doutor das palavras de mel, Doctor mellifluus, cujo principal título de
        glória, foi o de ter cantado, com indizível ternura e ardente piedade,
        nas suas orações, obras e sermões, as grandezas de Maria. Nascido em
        1091, na Borgonha, de família nobre, soube, desde a idade de vinte e
        dois annos, ganhar a Jesus Christo, trinta fidalgos que abraçaram com
        ele a vida monástica, em Gister. A Ordem Cisterciense, ramo oriundo do
        velho tronco beneditino, aí adquiriu um novo vigor, permitindo-lhe
        cobrir com os seus rebentos a Europa inteira. O Justo, diz o Ofertório,
        florescerá como a palma e multiplicar-se-á como o cedro do Líbano, No
        celebre mosteiro, fundado pouco depois por Bernardo no vale de Absintho
        à margem esquerda do Alba e do qual foi o primeiro Abade (Comm.),
        diariamente derramava, sobre uma comunidade de 700 monges, os tesouros
        de doutrina e sabedoria que Deus lhe confiara e lhe tornaram o nome para
        sempre imortal (Intr., Ep., Grad.). Monge austero, grande orador,
        cristão e sábio doutor, foi o archote de que faz menção o Evangelho,
        iluminando o mundo no século XII e imprimindo-lhe o caracter cristão que
        o distingue. O Papa Eugénio III, que fora por ele formado na vida
        monástica, solicita e recebe os seus conselhos; no Concílio de Etampes,
        põe fim a um cisma que, opondo Anacleto a Inocêncio II, perturbava o
        clero e o povo de Roma. É consultado por Guilherme de Aquitânia, pela
        duquesa de Lorena; pela condessa da Bretanha; por Henrique, filho do rei
        de França; Pedro, filho do rei de Portugal; Luiz VI; Luiz VII; Conrado;
        Lothario e o Abade de Saint-Denis. Vence, no Concílio de Laon, o célebre
        doutor Abelardo e desmascara, com sua poderosa lógica, os erros de
        Arnaldo de Brescia e de Pedro de Bruys (Ev.). Ataca, enfim, o Islamismo
        e, pregando a segunda cruzada em Vezelay, levanta, com sua cativante
        eloquência, toda a velha Europa. São Bernardo morreu em Claraval, a 20
        de Agosto de 1153, e seu corpo foi depositado aos pés do altar da Virgem
        Maria. Deixava após si cento e sessenta mosteiros por ele fundados na
        Europa e na Ásia. Seus escritos, cheios de doutrina inspirada pela
        sabedoria divina, fizeram-no colocar entre os Doutores da Igreja, por
        Pio VIII. Recorramos à intercessão, no céu, de quem, na terra, nos
        ensinou o caminho para a vida (Or.); peçamos-lhe o seu amor à SSm
        Virgem, Mãe de Deus, e digamos com piedade a antífona do Tempo: Salve
        Regina, cujos últimos três brados: Ó clemente, ó piedosa, ó doce Virgem
        Maria, lhe são atribuídos.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">Ecl. 39, 6-14</Typography>

      <Language>
        <Typography className="latin">Léctio libri Sapiéntiæ.</Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
        </Typography>
        <Typography className="latin">
          Justus cor suum tradet ad vigilándum dilúculo ad Dóminum, qui fecit
          illum, et in conspéctu Altíssimi deprecábitur. Apériet os suum in
          oratióne, et pro delíctis suis deprecábitur. Si enim Dóminus magnus
          volúerit, spíritu intellegéntiæ replébit illum: et ipse tamquam imbres
          mittet elóquia sapiéntiæ suæ, et in oratióne confitébitur Dómino: et
          ipse díriget consílium ejus et disciplínam, et in abscónditis suis
          consiliábitur. Ipse palam fáciet disciplínam doctrínæ suæ, et in lege
          testaménti Dómini gloriábitur. Collaudábunt multi sapiéntiam ejus, et
          usque in sǽculum non delébitur. Non recédet memória ejus, et nomen
          ejus requirétur a generatióne in generatiónem. Sapiéntiam ejus
          enarrábunt gentes, et laudem ejus enuntiábit ecclésia.
        </Typography>
        <Typography className="vernacular">
          O justo aplicará o seu coração e vigiará desde o romper do dia para se
          unir ao Senhor, que o criou, e oferecer as suas preces ao Altíssimo.
          Abrirá a sua boca para orar e implorar o perdão dos seus pecados;
          pois, se o soberano Senhor quiser, enchê-lo-á com o espírito da
          inteligência. Então ele espalhará, como chuva, as palavras da sua
          sabedoria e abençoará o Senhor na sua oração. O Senhor inspirará os
          seus conselhos e instruções; e ele compreenderá os mystérios divinos.
          Publicará a doutrina, que tiver aprendido, e a sua glória será
          manter-se na lei da aliança com o Senhor. Sua sabedoria receberá
          louvor de muitos e não cairá no esquecimento. Sua memória se não
          apagará. Seu nome será honrado de geração em geração. As nações
          publicarão a sua sabedoria e a Igreja anunciará os seus louvores.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
