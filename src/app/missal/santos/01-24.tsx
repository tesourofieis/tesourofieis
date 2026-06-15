import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0124() {
  return (
    <PageWrapper>
      <H1 text="S. Timóteo, B. e Márt., a 24 de Janeiro" />

      <Typography className="comment">
        S. Timóteo, nascido na Listra (Ásia Menor) de pai pagão e mãe judia, já era cristão ao
        chegar S. Paulo naquela cidade. O Apóstolo cuja conversão celebramos amanhã, admirado de sua
        santidade, tomou-o como companheiro de suas viagens. São Timóteo, imediatamente, tudo
        abandonado, tornou-se o discípulo de S. Paulo (Ev.), o qual lhe conferiu a plenitude do
        sacerdócio (Intr.) e confiou-lhe o governo da Igreja de Éfeso. Na Epístola lemos a passagem
        de uma das duas admiráveis cartas que lhe escreveu o mestre. S. Timóteo morreu apedrejado na
        sua cidade episcopal (ano 97). Como Timóteo, confessemos a divindade de Cristo neste Tempo
        depois da Epifania que é a sua manifestação litúrgica.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/2martirpontificeforapascal">
          Missa Státuit ei Dóminus,
        </Link>
        excepto:
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">1 Tm. 6, 11-16</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum.
        </Typography>
        <Typography className="vernacular">Lição da Ep.ª do B. Ap.º Paulo a Timóteo.</Typography>
        <Typography className="latin">
          Caríssime: Sectáre justítiam, pietátem, fidem, caritátem, patiéntiam, mansuetúdinem. Certa
          bonum certámen fídei, apprehénde vitam ætérnam, in qua vocátus es, et conféssus bonam
          confessionem coram multis téstibus. Præcípio tibi coram Deo, qui vivíficat ómnia, et
          Christo Jesu, qui testimónium réddidit sub Póntio Piláto, bonam confessiónem: ut serves
          mandátum sine mácula, irreprehensíbile usque in advéntum Dómini nostri Jesu Christi, quem
          suis tempóribus osténdet beátus et solus potens, Rex regum et Dóminus dominántium: qui
          solus habet immortalitátem, et lucem inhábitat inaccessíbilem: quem nullus hóminum vidit,
          sed nec vidére potest: cui honor et impérium sempitérnum. Amen.
        </Typography>
        <Typography className="vernacular">
          Caríssimos: Procurai a justiça, a piedade, a fé, a caridade, a paciência e a mansidão.
          Combatei o bom combate da fé; esforçai-vos em alcançar a vida eterna, para a qual fostes
          chamado e para a qual fizestes esta boa profissão de fé diante de muitos testemunhos. Eu
          vos ordeno diante de Deus, que dá a vida a todas as coisas, e perante Jesus Cristo, que
          deu testemunho por uma boa profissão de fé, sob Pôncio Pilatos, que oportunamente mostrará
          o Bem-aventurado e o único Soberano, o Rei dos reis e o Senhor dos senhores, que só possui
          a imortalidade e goza uma luz inacessível, que ninguém nunca viu, nem ainda pode ver e a
          quem seja dada a honra e poder eterno. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
