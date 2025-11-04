import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAdv40() {
  return (
    <PageWrapper>
      <H1 text="Quarto Domingo do Advento" />

      <H3 text="Intróito" />

      <Typography className="em">Is. 45, 8</Typography>

      <Language>
        <Typography className="latin">
          Rorate, cœli, cœli, désuper, et nubes pluant justum: aperiátur terra,
          et gérminet Salvatórem. <Typography className="latin">Ps. 18, 2</Typography> Cœli
          enárrant glóriam Dei: et ópera mánuum ejus annúntiat firmaméntum.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Ó céus, derramai dessas alturas o vosso orvalho: e que as nuvens
          chovam o Justo! Abra-se a terra e floresça o Salvador!{" "}
          <Typography className="vernacular">Sl. 18, 2</Typography> Os céus proclamam a
          glória de Deus: e o firmamento anuncia as obras das suas mãos.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Excita, quǽsumus, Dómine, poténtiam tuam, et veni: et magna nobis
          virtúte succúrre; ut per auxílium grátiæ tuæ, quod nostra peccáta
          præpédiunt, indulgéntiæ tuæ propitiatiónis accéleret: Qui vivis et
          regnas...
        </Typography>
        <Typography className="vernacular">
          Manifestai, Senhor, o vosso poder e «vinde»; e socorrei-nos com vosso
          infinito poder, a fim de que, com o auxílio da vossa graça, a vossa
          misericordiosa indulgência se digne apressar a chegada do remédio de
          que os nossos pecados necessitam. Vós, que, sendo Deus, viveis...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">1 Cor. 4, 1–5</Typography>

      <Language>
        <Typography className="latin">
          Lectio Epístolæ beati Pauli Apostoli ad Corinthios.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
        </Typography>
        <Typography className="latin">
          Fratres: Sic nos exístimet homo ut minístros Christi, et dispensatóres
          mysteriórum Dei. Hic jam quǽritur inter dispensatóres, ut fidélis quis
          inveniátur. Mihi autem pro mínimo est, ut a vobis júdicer aut ab
          humano die: sed neque meípsum judico. Nihil enim mihi cónscius sum:
          sed non in hoc justificátus sum: qui autem júdicat me, Dóminus est.
          Itaque nolíte ante tempus judicáre, quoadúsque véniat Dóminus: qui et
          illuminábit abscóndita tenebrárum, et manifestábit consília córdium:
          et tunc laus erit unicuique a Deo.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Que os homens nos considerem como ministros de Cristo e
          distribuidores dos méritos de Deus. Ora, as qualidades que se deseja
          que os ministros tenham é que sejam fiéis. Quanto a mim, bem pouco me
          importa ser julgado por vós ou por um tribunal humano: e nem eu a mim
          mesmo me julgo. Na verdade, a minha consciência me não repreende de
          coisa alguma; contudo, nem por isso me julgo justificado, pois o meu
          juiz é o Senhor. Eis por que não deveis julgar antes do tempo, antes
          que venha o Senhor, que iluminará o que está nas trevas e manifestará
          os mais secretos desígnios do coração. Então cada um receberá de Deus
          a recompensa meritória.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 144, 18 & 21</Typography>

      <Language>
        <Typography className="latin">
          Prope est Dóminus ómnibus invocántibus eum: ómnibus, qui ínvocant eum
          in veritáte.<Typography className="versicle"> ℣. </Typography>Laudem Dómini
          loquétur os meum: et benedícat omnis caro nomen sanctum ejus.
        </Typography>
        <Typography className="vernacular">
          O Senhor está próximo de todos aqueles que O invocam; de todos aqueles
          que O invocam com verdade.
          <Typography className="versicle"> ℣. </Typography>Que minha boca publique os
          louvores do Senhor: e que toda minha pessoa bendiga seu santo Nome.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>Veni, Dómine,
          et noli tardáre: reláxa facínora plebis tuæ Israël. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>Vinde, Senhor,
          e não retardeis mais: perdoai os crimes de Israel, vosso povo.
          Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Lc. 3, 1–6</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho
          segundo S. Lucas.
        </Typography>
        <Typography className="latin">
          Anno quintodécimo impérii Tibérii Cǽsaris, procuránte Póntio Piláto
          Judǽam, tetrárcha autem Galilǽæ Heróde, Philíppo autem fratre ejus
          tetrárcha Iturǽæ et Trachonítidis regionis, et Lysánia Abilínæ
          tetrárcha, sub princípibus sacerdotum Anna et Cáipha: factum est
          verbum Domini super Joannem, Zacharíæ filium, in deserto. Et venit in
          omnem regiónem Jordánis, prǽdicans baptísmum pæniténtiæ in remissiónem
          peccatórum, sicut scriptum est in libro sermónum Isaíæ Prophétæ: Vox
          clamántis in desérto: Paráte viam Dómini: rectas fácite sémitas ejus:
          omnis vallis implébitur: et omnis moris et collis humiliábitur: et
          erunt prava in dirécta, et áspera in vias planas: et vidébit omnis
          caro salutáre Dei.
        </Typography>
        <Typography className="vernacular">
          No ano décimo quinto do império de Tibério César sendo Pôncio Pilatos
          governador da Judeia, Herodes tetrarca da Galileia, Filipe, seu irmão,
          tetrarca da Itureia e da região de Traconites, e Lisânias tetrarca da
          Abilínia, e sendo pontífices Anás e Caifás: fez-se ouvir a palavra do
          Senhor, que foi dirigida no deserto a João, filho de Zacarias, o qual
          percorreu toda a região vizinha do Jordão, pregando o baptismo de
          penitência para a remissão dos pecados, segundo o que está escrito no
          livro das profecias do Profeta Isaías: «A voz do que clama no deserto:
          Preparai o caminho do Senhor; endireitai as suas veredas: toda a
          planície será elevada e todas as montanhas e colinas serão arrasadas:
          os caminhos tortuosos serão endireitados e os ásperos aplanados; e
          toda a carne humana verá a salvação de Deus».
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Lc. 1, 28</Typography>

      <Language>
        <Typography className="latin">
          Ave María, gratia plena; Dóminus tecum: benedícta tu in muliéribus, et
          benedíctus fructus ventris tui.
        </Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça: o Senhor é convosco: bendita sois vós
          entre as mulheres: e bendito é o fruto do vosso ventre.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrificiis præséntibus, quǽsumus, Dómine, placátus inténde: ut et
          devotióni nostræ profíciant et salúti. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, olhai propício para estes sacrifícios que Vos
          apresentamos, a fim de que sirvam para aumento da nossa devoção e para
          conseguirmos a salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Is. 7, 14</Typography>

      <Language>
        <Typography className="latin">
          Ecce Virgo concípiet et páriet fílium: et vocábitur nomen ejus
          Emmánuel.
        </Typography>
        <Typography className="vernacular">
          Eis que uma Virgem conceberá e dará à luz um filho, que será chamado
          Emanuel.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sumptis munéribus, quǽsumus, Dómine: ut, cum frequentatióne mystérii,
          crescat nostræ salútis efféctus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Havendo nós recebido os vossos dons sacratíssimos, Senhor, Vos
          suplicamos, dignai-Vos aumentar em nós, pela frequente recepção deste
          mystério, o efeito da nossa salvação. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
