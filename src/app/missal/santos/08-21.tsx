import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0821() {
  return (
    <PageWrapper>
      <H1 text="Santa Joana de Chantal, Viúva, a 21 de Agosto" />

      <Typography className="comment">
        Semelhante á Maria, de quem ha sete dias celebramos a Assunção Santa
        Joanna Francisca de Chantal, foi esposa, mãe e viúva. Nasceu como São
        Bernardo, em Dijon e recebeu no baptismo o nome de Joana pois, o
        calendário marcava nesse dia, 3 de Janeiro, São João-o Esmoler. O nome
        de Francisca, por ela acrescentado na Confirmação, lembra o meigo Santo
        de Genebra. Como outrora Bento e Escolástica, como Francisco de Assis e
        Clara, Francisco de Sales e Joana Francisca, correspondendo aos
        desígnios da divina Providência, uniram seus piedosos esforços e
        ilustraram a Igreja pela fundação de uma nova familia (Or.). Morto o
        barão de Chantal (1601) a jovem viúva se consagra ao Senhor pelo voto de
        perpétua castidade, escrevendo com ferro em brasa, sobre o peito, o nome
        de Jesus. Mulher forte, da qual nos fala a Epístola, deixa tudo,
        comprando, por esse preço, a pérola preciosa da vida religiosa (Ev.).
        Dos seis filhos, ainda lhe restavam quatro e seu velho pai. Sequemos as
        nossas lágrimas, lhe diz o venerável ancião, a fim de mais honrar a
        santa vontade de Deus. Seu filho, Celso Benigno, opõe-se à partida da
        mãe e estende-se à soleira da porta: Se não posso impedir a vossa saída,
        pelo menos passareis sobre o corpo de vosso filho. A Senhora de Chantal
        luta contra as revoltas de seu coração e, depois de dar livre curso ás
        lágrimas, arma-se de coragem e passa sobre o соrpo do filho. Torna-se
        mãe de numerosas virgens da Ordem da Visitação, hoje espalhada no mundo
        inteiro, ás quais, cheia do espírito de caridade divina (Postcomm.),
        repetia sem cessar, como S. João, o seu padroeiro: Amemos a Deus de todo
        o nosso coração e ao próximo como a nós mesmos, por amor de Deus. Morreu
        em 1641, em Moulins. A exemplo e pela intercessão de Santa Joanna
        Francisca, roguemos a Deus, a fim de que, conhecendo a nossa fraqueza e
        confiados em sua força, vençamos, por sua graça, todos os obstáculos
        (Or.).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens et miséricors Deus, qui beátam Joánnam Francíscam, tuo
          amóre succénsam, admirábili spíritus fortitúdine per omnes vitæ
          sémitas in via perfectiónis donásti, quique per illam illustráre
          Ecclésiam tuam nova prole voluísti: ejus méritis et précibus concéde;
          ut, qui infirmitátis nostræ cónscii de tua virtúte confídimus,
          cœléstis grátiæ auxílio cuncta nobis adversántia vincámus. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deus omnipotente e eterno, que, havendo abrasado no vosso amor a B.
          Joana Francisca, lhe destes um admirável espírito de fortaleza para
          seguir em todos os caminhos da vida «a via da perfeição» , e que por
          ela quisestes ornar a vossa Igreja com uma nova família, permiti,
          pelos seus méritos e preces, que, tendo nós consciência da nossa
          fraqueza e pondo a nossa confiança no vosso poder, triunfemos com o
          auxílio da graça celestial de tudo o que nos é contrário. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Illo nos amóris igne, quǽsumus. Dómine, hæc hóstia salutáris
          inflámmet: quo beátæ Joannæ Francíscæ cor veheménter incéndit, et
          flammis adússit ætérnæ caritátis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, permiti que esta hóstia salutar nos inflame no
          fogo daquele amor que abrasou com tanto ardor o coração da B. Joana
          Francisca e o consumiu nas chamas da eterna caridade. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Spíritum nobis, Dómine, tuæ caritátis infúnde: ut, quos cœléstis panis
          virtúte satiásti, beáta Joánna Francisca intercedénte, fácias terréna
          despícere, et te solum Deum pura mente sectári. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Infundi em nós, Senhor, o espírito da vossa caridade, a fim de que
          pela intercessão da B. Joana Francisca aqueles que saciastes com o
          celestial Pão dos fortes desprezem os bens da terra e com o coração
          puro se unam somente a Vós, ó Deus. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
