import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0722Lisboa() {
  return (
    <PageWrapper>
      <H1 text="S. Lourenço de Brindes, Conf., a 22 de Julho" />
      <H3 text="Intróito" />
      <Typography className="vernacular">
        Descobrirei as obras de Deus pelas suas palavras. O sol, iluminando o mundo, vê todas as
        coisas: e a glória do Senhor brilha nas suas obras. Apareça o Senhor e desapareçam os seus
        inimigos! Que aqueles que O odeiam fujam da sua presença.
        <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
      </Typography>
      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Deus, qui ad árdua quæque pro nóminis tui glória et animárum salúte beáto Lauréntio,
          Confessóri tuo atque Doctóri, spíritum sapiéntiæ et fortitúdinis contulísti: da nobis in
          eódem spíritu et agénda cognóscere; et cógnita, ejus intercessióne, perfícere.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que para glória do vosso nome e salvação das almas ornastes o B. Lourenço, vosso
          Confessor, com o espírito de conselho e de fortaleza nas obras ainda as mais árduas,
          concedei-nos pela sua intercessão o mesmo espírito, a fim de conhecermos o que devemos
          praticar e de praticarmos o que houvermos conhecido. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Epístola" />
      <Typography className="vernacular">
        Lição da Ep.ª do B. Ap.º Paulo aos Coríntios. A caridade de Cristo obriga-nos. Se
        considerarmos que um só morreu por todos, então todos morreremos. Ora Cristo morreu por
        todos, para que os que vivem, já não vivam para si, mas para Aquele que morreu e ressuscitou
        por eles. Eis porque não conhecemos ninguém, segundo a carne; e, se conhecemos Jesus Cristo
        segundo a carne, agora já o não conhecemos assim. Se alguém, pois. é de Cristo, é uma
        criatura nova; o passado já desapareceu e tudo se tornou novo. Tudo vem de Deus, que nos
        reconciliou consigo por Cristo e que nos confiou o ministério da reconciliação; porquanto
        Deus estava verdadeiramente em Cristo quando se reconciliou com o mundo, lhe não imputando
        mais os seus pecados e revestindo-nos com o poder da reconciliação. Nós cumprimos, pois, o
        cargo de embaixadores de Cristo, e é Deus quem vos exorta, servindo-se de nós. Nós vos
        conjuramos, invocando o nome de Cristo, a que vos reconcilieis com Deus, o qual por amor de
        vós tratou Aquele que não tinha pecado como se o tivesse, a fim de que por Ele nos
        tornássemos justos na justiça que vem de Deus.
      </Typography>
      <H3 text="Gradual" />
      <Typography className="vernacular">
        O Senhor é a minha fortaleza e a minha glória, pois foi o meu Salvador. Ele é o meu Deus: eu
        O glorificarei. O Senhor apareceu, como um guerreiro: e chama-se omnipotente. Aleluia,
        aleluia. Invocou o Altíssimo e o Omnipotente quando os inimigos o atacaram de todos os
        lados; e Deus, que é excelso e santo, ouviu-o. Aleluia.
      </Typography>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/pascoa/pasc7-5#evangelho"
        title="Sexta-feira das Têmporas de Pentecostes - Estação nos Doze Apóstolos"
      />
      <H3 text="Ofertório" />
      <Typography className="vernacular">
        Ele quis que minha boca fosse como uma espada aguda. Protegeu-me com a sombra da sua mão de
        reserva, como uma flecha escolhida.
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Fazei, ó Deus, que as lágrimas da salutar penitência nos tornem dignos de nos aproximarmos
        deste celestial banquete, o qual era tão suave à candura da alma do B. Lourenço. Por nosso
        Senhor...
      </Typography>
      <H3 text="Comúnio" />
      <Typography className="vernacular">
        Os poderosos ficarão admirados quando me virem; e a face dos príncipes manifestará a sua
        admiração.
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Possamos nós, Senhor, ficar eternamente saciados com esta alegria da vossa divindade, cujo
        gozo o B. Lourenço experimentou no sacrossanto mystério do altar. Por nosso Senhor...
      </Typography>
      <Typography className="aside">
        Nalguns lugares diz-se a
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi,
        </Link>
        com a Oração, Secreta e Postcomúnio precedentes.
      </Typography>
    </PageWrapper>
  );
}
