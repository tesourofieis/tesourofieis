import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageEnfermos() {
  return (
    <PageWrapper>
      <H1 text="Pelos Enfermos" />

      <H3 text="Intróito" />

      <Typography className="em">Sl. 54, 2-3</Typography>

      <Language>
        <Typography className="latin">
          Exáudi, Deus, oratiónem meam, et ne despéxeris deprecatiónem meam:
          inténde in me et exáudi me. (T. P. Allelúja, allelúja.){" "}
          <Typography className="latin">Ps. ibid., 3-4</Typography> Contristátus
          sum in exercitatióne mea: et conturbátus sum a voce inimíci et a
          tribulatióne peccatóris.
          <Typography className="versicle"> ℣. </Typography>
          Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Ouvi, ó Deus, a minha oração e não desprezeis a minha humilde súplica:
          atendei-me e ouvi-me. (T. P. Aleluia, aleluia.){" "}
          <Typography className="vernacular">Sl. ibid., 3-4</Typography> Estou
          cheio de angústia por causa das aflições, que me oprimem. Estou
          perturbado por causa da voz do meu inimigo e das tribulações que me
          infligem os pecadores.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, salus ætérna credéntium: exáudi nos pro
          fámulis tuis infírmis, pro quibus misericórdiæ tuæ implorámus
          auxílium; ut, reddíta sibi sanitáte, gratiárum tibi in Ecclésia tua
          réferant actiónes. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Omnipotente e sempiterno Deus, que salvais eternamente os que crêem em
          Vós, ouvi as orações que Vos dirigimos pelos vossos servos enfermos,
          em favor dos quais imploramos o socorro da vossa misericórdia, a fim
          de que, readquirindo a saúde, Vos rendam acções de graças na vossa
          Igreja. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Tg. 5, 13-16</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Jacóbi Apóstoli.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Tiago.
        </Typography>
        <Typography className="latin">
          Caríssimi: Tristátur áliquis vestrum? oret.Æquo ánimo est? psallat.
          Infirmátur quis in vobis? indúcat presbýteros Ecclésiæ, et orent super
          eum, ungéntes eum óleo in nómine Dómini: et orátio fídei salvábit
          infírmum, et alleviábit eum Dóminus: et si in peccátis sit,
          remitténtur ei. Confitémini ergo altérutrum peccáta vestra, et oráte
          pro ínvicem, ut salvémini.
        </Typography>
        <Typography className="vernacular">
          Caríssimos: Está triste algum de vós? Que ore. Está alegre? Que cante
          Salmos. Está enfermo algum de vós? Que sejam chamados os Sacerdotes da
          Igreja, para que orem por ele, ungindo-o com o óleo em nome do Senhor.
          Então a oração da fé salvará o enfermo; o Senhor o aliviará e, se
          tiver pecados, ser-lhe-ão perdoados. Confessai, portanto, os vossos
          pecados um ao outro e orai uns pelos outros, a fim de que sejais
          salvos.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 6, 3-4</Typography>

      <Language>
        <Typography className="latin">
          Miserére mihi, Dómine, quóniam infírmus sum: sana me, Dómine.
          <Typography className="versicle"> ℣. </Typography>
          Conturbáta sunt ómnia ossa mea: et ánima mea turbáta est valde.
        </Typography>
        <Typography className="vernacular">
          Compadecei-Vos de mim, Senhor, pois estou enfermo: curai-me, Senhor.
          <Typography className="versicle"> ℣. </Typography>Estou oprimido em
          todo meu corpo: estou perturbado até ao íntimo da minha alma.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 101, 2</Typography> Dómine, exáudi
          oratiónem meam: et clamor meus ad te pervéniat. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 101, 2</Typography> Ouvi,
          Senhor, a minha oração: e que meu clamor chegue até Vós. Aleluia.
        </Typography>
      </Language>

      <Typography className="aside">
        Após a Septuagésima, omite-se o Aleluia e o seguinte, e diz-se:
      </Typography>

      <H3 text="Trato" />

      <Typography className="em">Sl. 30, 10-11</Typography>

      <Language>
        <Typography className="latin">
          Miserére mei, Dómine, quóniam tríbulor: conturbátus est in ira óculus
          meus, ánima mea et venter meus.
          <Typography className="versicle"> ℣. </Typography>Quóniam defécit in
          dolóre vita mea, et anni mei in gemítibus.
          <Typography className="versicle"> ℣. </Typography>
          Infirmáta est in paupertáte virtus mea: et ossa mea conturbáta sunt.
        </Typography>
        <Typography className="vernacular">
          Compadecei-Vos de mim, Senhor, pois estou atribulado: os meus olhos, a
          minha alma e até as minhas entranhas estão atribuladas.
          <Typography className="versicle"> ℣. </Typography>Pois a minha vida
          consome-se no meio da dor: e os meus anos em gemidos!
          <Typography className="versicle"> ℣. </Typography>Minhas forças
          debilitaram-se por causa da minha pobreza: e os meus ossos estão
          abalados.
        </Typography>
      </Language>

      <Typography className="aside">
        No Tempo Pascal omite-se o Gradual- e a Trato, e diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 101, 2</Typography> Dómine, exáudi
          oratiónem meam: et clamor meus ad te pervéniat. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Ps. 27, 7</Typography> In Deo sperávit cor
          meum, et adjútus sum: et reflóruit caro mea, et ex voluntáte mea
          confitébor ei. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 101, 2</Typography> Senhor,
          ouvi a minha oração: e que meu clamor chegue até Vós. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Sl. 27, 7</Typography> Meu coração teve
          esperança em Deus e foi socorrido: e a minha carne refloresceu: eis
          porque O louvarei de todo meu coração. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 8, 5-13</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Cum introísset Jesus Caphárnaum, accessit ad eum
          centúrio, rogans eum et dicens: Dómine, puer meus jacet in domo
          paralýticus, et male torquétur. Et ait illi Jesus: Ego véniam et
          curábo eum. Et respóndens centúrio, ait: Dómine, non sum dignus, ut
          intres sub tectum meum: sed tantum dic verbo, et sanábitur puer meus.
          Nam et ego homo sum sub potestáte constitútus, habens sub me mílites,
          et dico huic: Vade, et vadit; et alii: Veni, et venit; et servo meo:
          Fac hoc, ei facit. Audiens autem Jesus, mirátus est et sequéntibus se
          dixit: Amen, dico vobis, non inveni tantam fidem in Israël. Dico autem
          vobis, quod multi ab Oriénte et Occidénte vénient, et recúmbent cum
          Abraham et Isaac et Jacob in regno cœlórum: filii autem regni
          ejiciéntur in ténebras exterióres: ibi erit fletus et stridor déntium.
          Et dixit Jesus centurióni: Vade, et, sicut credidísti, fiat tibi. Et
          sanátus est puer in illa hora.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, entrando Jesus em Cafarnaum, aproximou-se dele um
          centurião, pedindo-Lhe e dizendo: «Senhor, o meu servo jaz em casa
          paralítico e sofre gravemente». Jesus disse-lhe: «Eu irei e o
          curarei». Mas o centurião respondeu: «Senhor, não sou digno de que
          entreis em minha casa; dizei somente uma palavra e o meu servo será
          curado. Pois eu, posto que seja um homem sujeito a outros superiores,
          tenho soldados debaixo das minhas ordens. E digo a um: vai; e ele vai.
          E digo a outro: vem; e ele vem. E digo ao meu servo: faz isto; e ele
          faz». Ouvindo Jesus isto, ficou admirado e disse aos que O seguiam:
          «Em verdade vos digo que nunca encontrei tão grande fé em Israel!
          Declaro-vos que muitos virão do Oriente e do Ocidente e tomarão lugar
          no banquete com Abraão, Isaque e Jacob, no reino dos céus; mas os
          filhos do reino serão lançados nas trevas exteriores, onde só haverá
          pranto e ranger de dentes». Então Jesus disse ao centurião: «Vai; e,
          assim como acreditastes, assim acontecerá». E naquela hora o servo foi
          curado.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 54, 2-3</Typography>

      <Language>
        <Typography className="latin">
          Exáudi, Deus, oratiónem meam, et ne despéxeris deprecatiónem meam:
          inténde in me et exáudi me. (T. P. Allelúja.)
        </Typography>
        <Typography className="vernacular">
          Senhor, ouvi a minha oração e não desprezeis as minhas súplicas.
          Volvei-Vos para mim e ouvi-me. (T. P. Aleluia.)
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Deus, cujus nútibus vitæ nostræ moménta decúrrunt: súscipe preces et
          hóstias famulórum tuórum, pro quibus ægrotántibus misericórdiam tuam
          implorámus; ut, de quorum perículo metúimus, de eórum salúte lætémur.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, cuja vontade governa o decurso dos instantes da nossa vida,
          recebei as preces e as oblatas dos vossos servos enfermos, em favor
          dos quais imploramos a vossa misericórdia, a fim de que, depois de
          havermos temido o perigo em que eles se encontravam, nos regozijemos
          de os ver sãos e salvos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 30, 17-18</Typography>

      <Language>
        <Typography className="latin">
          Illúmina fáciem tuam super servum tuum, et salvum me fac in tua
          misericórdia: Dómine, non confúndar, quóniam invocávi te. (T. P.
          Allelúja.)
        </Typography>
        <Typography className="vernacular">
          Lançai o esplendor da vossa face sobre o vosso servo: e salvai-me
          consoante a vossa misericórdia! Senhor, visto que Vos invoquei, fazei
          que não seja confundido. (T. P. Aleluia.)
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Deus, infirmitátis humánæ singuláre præsídium: auxílii tui super
          infírmos fámulos tuos osténde virtútem; ut, ope misericórdiæ tuæ
          adjúti, Ecclésiæ tuæ sanctæ incólumes repræsentári mereántur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que sois o único apoio da fraqueza humana, mostrai aos vossos
          servos enfermos o poder do vosso socorro, a fim de que, socorridos
          pela vossa misericórdia, sejam restituídos sãos e salvos ao seio da
          vosso Igreja. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
