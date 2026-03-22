import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0806() {
  return (
    <PageWrapper>
      <H1 text="Transfiguração de N. S. J. Cristo, a 6 de Agosto" />

      <Typography className="comment">
        A festa da Transfiguração de Jesus ha muito já era celebrada a 6 de Agosto, nas diversas
        igrejas do Oriente e do Occidente. A fim de comemorar a victoria que impediu, proximo de
        Belgrado, em 1456, a onda invasora do Islamismo e cuja noticia chegou á Roma, precisamente a
        6 de Agosto, Calisto III estendeu a solenidade á toda a Igreja. É a festa das igrejas que
        têm por orago o Santo Salvador. Pio X elevou-a ao rito de 2 classe, pois, é o título
        secundário de S. João de Latrão, outrora chamada basílica do Santo Salvador.
      </Typography>

      <Typography className="aside">
        Comemoração de S. Sixto, Felicíssimo e Agapito como na
        <Link href="/missal/comum/7muitosmartires2">Missa Missa Sapiéntiam sanctórum</Link>
      </Typography>

      <H3 text="Intróito" />

      <Typography className="em">Sl. 76, 19</Typography>

      <Language>
        <Typography className="latin">
          Illuxérunt coruscatiónes tuæ orbi terræ: commóta est et contrémuit terra.{" "}
          <Typography className="latin">Ps. 83, 2-3</Typography> Quam dilécta tabernácula tua,
          Dómine virtútum! concupíscit, et déficit ánima mea in átria Dómini.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Os vossos relâmpagos iluminaram o globo terrestre: moveu-se a terra e tremeu.{" "}
          <Typography className="vernacular">Sl. 83, 2-3</Typography> Como são amáveis os vossos
          tabernáculos, ó Senhor dos exércitos! Minha alma suspira ardentemente pelos átrios do
          Senhor.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui fídei sacraménta in Unigéniti tui gloriósa Transfiguratióne patrum testimónio
          roborásti, et adoptiónem filiórum perféctam, voce delápsa in nube lúcida, mirabíliter
          præsignásti: concéde propítius; ut ipsíus Regis glóriæ nos coherédes effícias, et ejúsdem
          glóriæ tríbuas esse consórtes. Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que na gloriosa Transfiguração de vosso Filho Unigénito confirmastes os méritos da
          fé pelo testemunho dos patriarcas, e que pela voz saída da nuvem iluminada proclamastes
          admiravelmente a perfeita adopção que de nós fizestes como vossos filhos, concedei-nos
          propício a graça de nos tornarmos co-herdeiros do Rei da glória e de mais tarde sermos
          participantes desta mesma glória. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">2 Pe. 1, 16-19</Typography>

      <Language>
        <Typography className="latin">Léctio Epístolæ beáti Petri Apóstoli.</Typography>
        <Typography className="vernacular">Lição da Ep.ª do B. Ap.º Pedro.</Typography>
        <Typography className="latin">
          Caríssimi: Non doctas fábulas secúti notam fecimus vobis Dómini nostri Jesu Christi
          virtútem et præséntiam: sed speculatores facti illíus magnitudinis. Accipiens enim a Deo
          Patre honórem et glóriam, voce delapsa ad eum hujuscemodi a magnifica glória: Hic est
          Fílius meus diléctus, in quo mihi complacui, ipsum audíte. Et hanc vocem nos audivimus de
          cœlo allatam, cum essemus cum ipso in monte sancto. Et habémus firmiórem propheticum
          sermónem: cui bene facitis attendentes, quasi lucérnæ lucénti in caliginóso loco, donec
          dies elucescat et lucifer oriálur in córdibus vestris.
        </Typography>
        <Typography className="vernacular">
          Caríssimos: Não foi servindo-nos de fábulas engenhosas que vos fizemos conhecer o poder e
          a vinda de nosso Senhor Jesus Cristo, mas depois de havermos sido espectadores da sua
          majestade. Com efeito, Ele recebeu de Deus Pai honra e glória, quando da glória magnífica
          desceu sobre Ele esta voz: «Este é o meu Filho muito amado, em quem pus as minhas
          complacências; ouvi-O». Nós também ouvimos esta voz, vinda do céu, quando estávamos com
          Ele, na montanha sagrada. E consideramos a palavra profética como firmíssima, à qual
          fazeis bem em atender, como se fora uma lâmpada em um lugar escuro, até que o dia brilhe e
          que a estrela da manhã nasça nos nossos corações!
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 44, 3 & 2</Typography>

      <Language>
        <Typography className="latin">
          Speciosus forma præ fíliis hóminum: diffúsa est grátia in lábiis tuis.
          <Typography className="versicle"> ℣. </Typography>Eructávit cor meum verbum bonum: dico
          ego ópera mea Regi.
        </Typography>
        <Typography className="vernacular">
          Sois o mais belo dos filhos dos homens: a graça espalhou-se nos vossos lábios.
          <Typography className="versicle"> ℣. </Typography>Meu coração exprimiu uma palavra
          excelente: Consagro ao Rei as minhas obras.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Sap. 7, 26</Typography> Candor est lucis ætérnæ, spéculum
          sine mácula, et imágo bonitátis illíus. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sb. 7, 26</Typography> Este é o esplendor da luz
          eterna, o espelho sem mancha de Deus e a imagem da sua bondade!
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 17, 1-9</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Assúmpsit Jesus Petrum, et Jacóbum, et Joánnem fratrem ejus, et duxit
          illos in montem excélsum seórsum: et transfigurátus est ante eos. Et resplénduit fácies
          ejus sicut sol: vestiménta autem ejus facta sunt alba sicut nix. Et ecce, apparuérunt
          illis Moyses et Elías cum eo loquéntes. Respóndens autem Petrus, dixit ad Jesum: Dómine,
          bonum est nos hic esse: si vis, faciámus hic tria tabernácula, tibi unum, Móysi unum et
          Elíæ unum. Adhuc eo loquénte, ecce, nubes lúcida obumbrávit eos. Et ecce vox de nube,
          dicens: Hic est Fílius meus diléctus, in quo mihi bene complácui: ipsum audíte. Et
          audiéntes discípuli, cecidérunt in fáciem suam, et timuérunt valde. Et accéssit Jesus, et
          tétigit eos, dixítque eú Surgite, et nolíte timére. Levántes autem óculos suos, néminem
          vidérunt nisi solum Jesum. Et descendéntibus illis de monte, præcépit eis Jesus, dicens:
          Némini dixéritis visiónem, donec Fílius hóminis a mórtuis resúrgat.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, Jesus levou consigo Pedro, Tiago e João e conduziu-os a um monte alto e
          separado, transfigurando-se ante eles: seu rosto resplandecia, como o sol, e os seus
          vestidos tornaram-se brancos, como a neve! E Moisés e Elias apareceram, conversando com
          Jesus. Então, Pedro disse a Jesus: «Senhor, é tão bom estar aqui!... Se quereis, façamos
          aqui três tendas: uma para Vós, outra para Moisés e outra para Elias!». Ainda ele falava,
          eis que uma nuvem brilhante os envolveu, saindo do seio dela uma voz, que dina: «Este é o
          meu Filho muito amado, em quem pus as minhas complacências; ouvi-O». Havendo escutado a
          voz, os discípulos caíram com o rosto no chão e ficaram atemorizados. Mas Jesus tocou-os e
          disse-lhes: «Levantai-vos; não vos amedronteis». Então, erguendo os olhos, já nada viram
          senão só Jesus. Desceram do monte, dando-lhes Jesus esta ordem: «Não conteis a ninguém
          esta visão até que o Filho do homem ressuscite dos mortos».
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 111, 3</Typography>

      <Language>
        <Typography className="latin">
          Glória et divítiæ in domo ejus: et justítia ejus manet in sǽculum sǽculi, allelúja.
        </Typography>
        <Typography className="vernacular">
          A glória e as riquezas estão na sua casa; a sua justiça subsistirá para sempre. Aleluia.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Obláta, quǽsumus, Dómine, múnera gloriósa Unigéniti tui Transfiguratióne sanctífica:
          nosque a peccatórum máculis, splendóribus ipsíus illustratiónis emunda. Per eúndem
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Santificai, Senhor, pela gloriosa Transfiguração do vosso Filho Unigénito, Vos pedimos, as
          oblatas que Vos apresentamos; e pelos esplendores da sua glorificação purificai-nos das
          manchas dos nossos pecados. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 17, 9</Typography>

      <Language>
        <Typography className="latin">
          Visiónem, quam vidístis, némini dixéritis, donec a mórtuis resúrgat Fílius hóminis.
        </Typography>
        <Typography className="vernacular">
          Não conteis a ninguém esta visão até que o Filho do homem ressuscite dos mortos.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut sacrosáncta Fílii tui Transfiguratiónis mystéria,
          quæ sollemni celebrámus offício, purificáta mentis intellegéntia consequámur. Per eúndem
          Dómium nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, fazei que possamos gozar com a alma purificada de
          todas as manchas os sacrossantos mystérios da Transfiguração do vosso Filho, que
          celebrámos solenemente neste ofício. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
