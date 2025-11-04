import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1115() {
  return (
    <PageWrapper>
      <H1 text="S. Alberto Magno, B. C. e Doutor, a 15 de Novembro" />

      <Typography className="comment">
        Alberto, Suevo de origem, foi desde a infância devotíssimo à
        bem-aventurada Virgem. Resolvido a entrar na Ordem dos Pregadores, se
        deixou enganar pelos artifícios do demónio, a que já renunciara quando o
        bem-aventurado Jordão de Saxónia conseguiu fazê-lo voltar à sua vocação.
        Estudou a philosophia em Colónia e a ensinou em seguida em Paris, onde
        se tornou um dos mais célebres mestres da universidade. Tendo regressado
        a Colónia, teve por discípulo S. Tomás de Aquino. Urbano IV o elegeu
        bispo de Ratisbona. Combateu os erros de Guilherme de Santo Amor.
        Faleceu em Colónia no ano de 1280.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Albértum Pontíficem tuum atque Doctórem in humána
          sapiéntia divínæ fídei subjiciénda magnum effecísti: da nobis,
          quǽsumus; ita ejus magistérii inhærére vestígiis, ut luce perfécta
          fruámur in cœlis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que ao B. Alberto, vosso Pontífice e Doutor, tornastes grande
          na arte de sujeitar a sabedoria humana à fé divina, concedei-nos, Vos
          suplicamos, que de tal modo sigamos as lições do seu magistério que
          nos céus gozemos a luz perfeita. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut quod
          Passiónis Fílii tui Dómini nostri mystério gérimus, beáti Alberti
          intercessióne et exémplo, pio consequámur afféctu. Per eumdem
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Pelos presentes sacrifícios, Senhor, Vos suplicamos, olhai aplacado
          para nós, a fim de que com o exemplo e intercessão do B. Alberto
          consigamos alcançar piedosos afectos pelo mystério, que celebramos, da
          paixão do vosso Filho e nosso Senhor. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Per hæc sancta quæ súmpsimus, ab hóstium nos, Dómine, impugnatióne
          defénde: et intercedénte beáto Albérto Confessóre tuo atque Pontífice,
          perpétua pace respiráre concéde; Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Por estes sacrossantos sacramentos, que recebemos, Senhor,
          defendei-nos dos ataques dos nossos inimigos, e, intercedendo o B.
          Alberto, vosso Confessor e Pontífice, permiti que gozemos a paz
          perpétua. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
