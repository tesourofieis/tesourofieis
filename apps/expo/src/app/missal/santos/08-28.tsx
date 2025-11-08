import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0828() {
  return (
    <PageWrapper>
      <H1 text="S. Agostinho, a 28 de Agosto" />

      <Typography className="comment">
        Agostinho nasceu em 354, em Tagaste (na actual Argélia). Sua mãe, Santa
        Mónica, muito cedo ensinou-lhe a rezar; depois de haver saboreado com
        delícias suas santas lições, deixou-se, logo, arrastar ás mais graves
        desordens. Não oferecendo Cartago teatro assaz vasto para o seu génio,
        foi á Roma, obtendo o lugar de Mestre de eloquência em Milão. Minhas
        iniquidades, confessa ele, se assemelhavam à bola de neve crescendo a
        medida que a fazem rolar. Sua mãe, consternada, dirigia a Deus continuas
        orações, acompanhadas de lágrimas, e seguia os passos do filho. A pedido
        seu, Santo Ambrósio o acolheu com bondade e o esclareceu sobre as
        ciências divinas. Um dia, por inspiração do céu, Agostinho abriu as
        Epístolas de S. Paulo e leu: Não vos entregueis à desordem e à impureza,
        porém, revesti-vos de N. S. J. C.. Imediatamente suas irresoluções
        cessaram; recebeu o baptismo aos 33 annos, na vigília da Páscoa de 387.
        Sete meses depois dessa grande felicidade, Santa Mónica morreu, pedindo
        ao filho que se lembrasse dela no altar do Senhor. Agostinho, ordenado
        sacerdote, celebrava pela mãe o Santo Sacrifício. Senhor, dizia
        frequentemente, tende piedade de minha mãe; era boa, perdoava facilmente
        perdoai-lhe também as suas faltas. Bispo de Hippona aos 41 annos (All.,
        Comm.) começou a viver canonicamente, isto é, em comum com os seus
        clérigos. A comunidade forneceu, a numerosas igrejas, bispos e padres e
        assim o Instituto de Santo Agostinho espalhou-se pouco a pouco na
        África, e, mais especialmente, nas Gallias. A Regra de Santo Agostinho,
        que dele faz um dos quatro fundadores de Ordens religiosas, é tirada da
        epístola 211 por ele escrita a religiosas e adaptada, em época mais
        remota, aos homens. Graças à sublimidade da sua ciência e ao ardor de
        seu amor, o Santo é um dos quatro grandes Doutores do Ocidente. Morreu
        depois de 36 anos de episcopado, no ano 430, recitando os Psalmos
        penitenciais.
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
          Adésto supplicatiónibus nostris, omnípotens Deus: et, quibus fidúciam
          sperándæ pietátis indúlges, intercedénte beáto Augustíno Confessóre
          tuo atque Pontífice, consuétae misericórdiæ tríbue benígnus efféctum.
          Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ouvi benigno, ó Deus omnipotente, as nossas súplicas, e, visto que nos
          permitis confiarmos na vossa bondade, concedei-nos, pela intercessão
          do B. Agostinho, vosso Confessor e Pontífice, a graça de alcançarmos o
          efeito benigno da vossa habitual misericórdia. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 36, 30-31</Typography>

      <Language>
        <Typography className="latin">
          Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
          <Typography className="versicle"> ℣. </Typography>Lex Dei ejus in
          corde ipsíus: et non supplantabúntur gressus ejus.
        </Typography>
        <Typography className="vernacular">
          A boca do justo falará com sabedoria e a sua língua proclamará a
          justiça.<Typography className="versicle"> ℣. </Typography>A lei do seu
          Deus está no seu coração e os seus pés não tropeçarão.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 88, 21</Typography> Invéni David
          servum meum, óleo sancto meo unxi eum. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 88, 21</Typography> Encontrei o
          meu servo David e ungi-o com meu óleo sagrado. Aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
