import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import PaiNosso from "./../devocionario/oracoes/painosso";

export default function PageBaptismo() {
  return (
    <PageWrapper>
      <H1 text="Baptismo" />

      <H2 text="Apresentação do neófito e interrogatório" />

      <Typography className="aside">
        Aquele que vai receber o Baptismo, estacionará à entrada do Templo, diante do Sacerdote,
        ficando o Padrinho ao lado direito e a Madrinha ao lado esquerdo. O Ministro apresenta-se e
        começa o interrogatório a que devem responder o Padrinho e a Madrinha.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Quid petis ab Ecclésia Dei?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> O que pedes à Igreja de Deus?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Fidem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> A Fé.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Fides, quid tibi præstat?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Para que te serve a Fé?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Para alcançar a vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Si ígitur vis ad vitam íngredi, serva
          mandáta. Díliges Dóminum Deum tuum ex toto corde tuo, et ex tota ánima tua, et ex tota
          mente tua, et próximum tuum sicut teípsum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Se, portanto, queres alcançar a vida
          eterna, observa os Mandamentos. Amarás o Senhor, teu Deus, com todo teu coração, com toda
          tua alma e com toda tua inteligência, e amarás o próximo como a ti próprio.
        </Typography>
      </Language>

      <H2 text="Exorcismos e Ritos preparatórios" />

      <H3 text="Insuflação" />

      <Typography className="aside">
        O Sacerdote sopra levemente três vezes sobre a cabeça do Neófito:
      </Typography>

      <Language>
        <Typography className="latin">
          Exi ab eo (ea), immúnde spíritus, et da locum Spirítui Sancto Paráclito.
        </Typography>
        <Typography className="vernacular">
          Espírito impuro, sai deste (ou desta) e dá o teu lugar ao Espírito Santo Paráclito!
        </Typography>
      </Language>

      <H3 text="Assinalação da Cruz no peito" />

      <Typography className="aside">
        O Sacerdote fará o sinal da Cruz na testa e no peito do Neófito:
      </Typography>

      <Language>
        <Typography className="latin">
          Accipe signum Crucis tam in fron <Typography className="cross"> ✠ </Typography> te, quam
          in cor <Typography className="cross"> ✠ </Typography> de, sume fidem cæléstium
          præceptórum: et talis esto móribus, ut templum Dei jam esse possis.
        </Typography>
        <Typography className="vernacular">
          Recebe o sinal da Cruz, na fronte <Typography className="cross"> ✠ </Typography> e no
          coração <Typography className="cross"> ✠ </Typography> ; abraça a fé nos preceitos
          divinos; e procede de tal modo que desde já possas ser um templo de Deus.
        </Typography>
      </Language>

      <Typography className="aside">O Sacerdote continua:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Preces nostras, quæsumus, Dómine, cleménter exáudi: et hunc eléctum tuum{" "}
          <Typography className="latin">N.</Typography> (hanc eléctam tuam{" "}
          <Typography className="text-red-500">N.</Typography>) crucis Domínicæ impressióne signátum
          (signátam) perpétua virtúte custódi: ut magnitúdinis glóriæ tuæ rudiménta servans, per
          custódiam mandatórum tuórum ad regeneratiónis glóriam perveníre mereátur. Per Christum
          Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Pela vossa clemência, Vos suplicamos, Senhor, dignai-Vos ouvir as nossas preces; e com
          vosso poder guardai sempre este vosso escolhido{" "}
          <Typography className="vernacular">N.</Typography> (ou esta vossa escolhida{" "}
          <Typography className="text-red-500">N.</Typography>) que acaba de ser assinalado (a) com
          a Cruz do Senhor, a fim de que, conservando as primeiras instruções da vossa infinita
          glória, possa alcançar a glória da regeneração pela prática dos vossos Mandamentos. Por
          Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Imposição da mão" />

      <Typography className="aside">
        O Sacerdote coloca a sua mão direita sobre a cabeça do Neófito:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Omnípotens, sempitérne Deus, Pater Dómini nostri Jesu Christi, respícere dignáre super
          hunc fámulum tuum <Typography className="latin">N.</Typography> (hanc fámulam tuam{" "}
          <Typography className="text-red-500">N.</Typography>) quem (quam) ad rudiménta fídei
          vocáre dignátus es; omnem cæcitátem cordis ab eo (ea) expélle; disrúmpe omnes láqueos
          sátanæ, quibus fúerat colligátus (colligáta); áperi ei, Dómine, jánuam pietátis tuæ, ut
          signo sapiéntiæ tuæ imbútus (imbúta), ómnium cupiditátum fœtóribus cáreat, et ad suávem
          odórem præceptórum tuórum lætus (læta) tibi in Ecclésia tua desérviat, et profíciat de die
          in diem. Per eúmdem Christum Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Deus omnipotente e sempiterno, Pai de nosso Senhor Jesus Cristo, dignai-Vos olhar propício
          para este vosso servo (ou para esta vossa serva){" "}
          <Typography className="vernacular">N.</Typography>, que Vos dignastes chamar à iniciação
          da Fé; afastai para longe dele (ou dela) a cegueira do coração; quebrai todos os laços com
          que Satanás o (ou a) havia prendido. Abri-lhe, Senhor, a porta da vossa misericórdia, a
          fim de que, marcado (a) com o sinal da vossa sabedoria, seja preservado (a) da corrupção
          de todas as más paixões e, atraído (a) pelo suave odor dos vossos Mandamentos, Vos sirva
          com alegria na vossa Igreja de dia para dia. Pelo mesmo Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Bênção do sal" />

      <Language>
        <Typography className="latin">
          Exorcízo te, creatúra salis, in nómine Dei <Typography className="cross"> ✠ </Typography>{" "}
          Patris omnipoténtis, et in caritáte Dómini nostri Jesu{" "}
          <Typography className="cross"> ✠ </Typography> Christi, et in virtúte Spíritus{" "}
          <Typography className="cross"> ✠ </Typography> Sancti. Exorcízo te per Deum{" "}
          <Typography className="cross"> ✠ </Typography> vivum, per Deum{" "}
          <Typography className="cross"> ✠ </Typography> verum, per Deum{" "}
          <Typography className="cross"> ✠ </Typography> sanctum, per Deum{" "}
          <Typography className="cross"> ✠ </Typography> qui te ad tutélam humáni géneris
          procreávit, et pópulo veniénti ad credulitátem per servos suos consecrári præcépit, ut in
          nómine sanctæ Trinitátis efficiáris salutáre sacraméntum ad effugándum inimícum. Proínde
          rogámus te, Dómine Deus noster, ut hanc creatúram salis sanctificándo sanctí{" "}
          <Typography className="cross"> ✠ </Typography> fices, et benedicéndo bene{" "}
          <Typography className="cross"> ✠ </Typography> dícas, ut fiat ómnibus accipiéntibus
          perfécta medicína, pérmanens in viscéribus eórum, in nómine ejúsdem Dómini nostri Jesu
          Christi, qui ventúrus est judicáre vivos et mórtuos, et sæculum per ignem.
        </Typography>
        <Typography className="vernacular">
          Eu te exorcizo, criatura de sal, em Nome de Deus{" "}
          <Typography className="cross"> ✠ </Typography> Pai omnipotente, na caridade de nosso
          Senhor Jesus <Typography className="cross"> ✠ </Typography> Cristo, e com o poder do
          Espírito <Typography className="cross"> ✠ </Typography> Santo. Eu te exorcizo em Nome do
          span <Typography className="cross"> ✠ </Typography> vivo, do Deus{" "}
          <Typography className="cross"> ✠ </Typography> verdadeiro, do Deus{" "}
          <Typography className="cross"> ✠ </Typography> santo, do Deus{" "}
          <Typography className="cross"> ✠ </Typography> que te criou para proveito do género
          humano, e ordenou aos seus servos te consagrassem para o povo chamado à Fé, a fim de que
          em Nome da Santíssima Trindade possas ser instrumento salutar para afugentar o inimigo.
          Por isso, Senhor, nosso Deus, Vos rogamos que santifiqueis{" "}
          <Typography className="cross"> ✠ </Typography> e abençoeis{" "}
          <Typography className="cross"> ✠ </Typography> esta criatura de sal, para que se torne em
          medicina salutar daquelas que o tomarem, e permaneça nas suas entranhas, em Nome de nosso
          Senhor Jesus Cristo, que há-de vir a julgar os vivos e os mortos, e o mundo pelo fogo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote introduz alguns grãos deste Sal na boca do baptizado:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">N.</Typography> Accipe sal sapiéntiæ: propitiátio sit tibi
          in vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">N.</Typography> Recebe o sal da sabedoria; que ele te
          seja propício para a vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Pax tecum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> A paz seja contigo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso espírito.
        </Typography>
      </Language>

      <Typography className="aside">Dada a paz, o Sacerdote recita a seguinte oração:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus patrum nostrórum, Deus univérsæ cónditor veritátis, te súpplices exorámus, ut hunc
          fámulum tuum <Typography className="latin">N.</Typography> (hanc fámulam tuam
          <Typography className="text-red-500">N.</Typography>) respícere dignéris propítius, et hoc
          primum pábulum salis gustántem, non diútius esuríre permíttas, quo minus cibo expleátur
          cælésti, quátenus sit semper spíritu fervens, spe gaudens, tuo semper nómini sérviens.
          Perduc eum (eam), Dómine, quæsumus, ad novæ regeneratiónis lavácrum, ut cum fidélibus tuis
          promissiónum tuárum ætérna præmia cónsequi mereátur. Per Christum Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Deus de nossos pais, ó Deus, Autor de toda a verdade, Vos pedimos e suplicamos que Vos
          digneis olhar benignamente para o vosso servo{" "}
          <Typography className="vernacular">N.</Typography> (para a vossa serva{" "}
          <Typography className="text-red-500">N.</Typography>) que, que havendo provado pela
          primeira vez este sal, não sofra por mais tempo fome, antes permiti que seja sustentado
          (a) com o alimento celestial, conservando-se sempre ao serviço do vosso Nome, animado (a)
          com constante fervor espiritual e alegre esperança. Conduzi-o (a), Senhor, Vos suplicamos,
          à fonte da regeneração, para que consiga alcançar com os demais fiéis as recompensas
          eternas por Vós prometidas. Por Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Abjuração" />

      <Typography className="aside">O Sacerdote continua, em tom imperativo:</Typography>

      <Language>
        <Typography className="latin">
          Exorcízo te, immúnde spíritus, in nómine Patris{" "}
          <Typography className="cross"> ✠ </Typography>, et Fílii{" "}
          <Typography className="cross"> ✠ </Typography>, et Spíritus{" "}
          <Typography className="cross"> ✠ </Typography> Sancti, ut éxeas, et recédas ab hoc fámulo
          (hac fámula) Dei <Typography className="text-red-500">N.</Typography>: Ipse enim tibi
          ímperat, maledícte damnáte, qui pédibus super mare ambulávit, et Petro mergénti déxteram
          porréxit.
        </Typography>
        <Typography className="vernacular">
          Em Nome do Pai <Typography className="cross"> ✠ </Typography> e do Filho{" "}
          <Typography className="cross"> ✠ </Typography> e do Espírito{" "}
          <Typography className="cross"> ✠ </Typography> Santo, eu te exorcizo, ó espírito impuro, a
          fim de que saias e te afastes deste servo (ou serva) de Deus,{" "}
          <Typography className="text-red-500">N.</Typography> Quem isto te ordena, ó espírito
          maligno, é Aquele Senhor que caminhou por cima das ondas do mar e que estendeu a mão a
          Pedro, quando este se submergia.
        </Typography>

        <Typography className="latin">
          Ergo, maledícte diábole, recognósce senténtiam tuam, et da honórem Deo vivo et vero, da
          honórem Jesu Christo Fílio ejus, et Spirítui Sancto, et recéde ab hoc fámulo (hac fámula)
          Dei <Typography className="text-red-500">N.</Typography>, quia istum (istam) sibi Deus, et
          Dóminus noster Jesus Christus ad suam sanctam grátiam, et benedictiónem, fontémque
          Baptísmatis vocáre dignátus est.
        </Typography>
        <Typography className="vernacular">
          Portanto, tu, demónio maldito, submete-te à sua condenação e dá glória ao Deus vivo e
          verdadeiro, a Jesus Cristo, seu Filho, e ao Espírito Santo. Retira-te deste servo (ou
          serva) de Deus, <Typography className="text-red-500">N.</Typography>, porque Deus assim
          manda, e nosso Senhor Jesus Cristo dignou-se chamá-lo (ou chamá-la) à sua graça e bênção,
          e à fonte baptismal.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Assinalação da Cruz na Testa" />

      <Typography className="aside">
        O Sacerdote impõe o sinal da Cruz na testa do Neófito:
      </Typography>

      <Language>
        <Typography className="latin">
          Et hoc signum sanctæ Cru <Typography className="cross"> ✠ </Typography> cis, quod nos
          fronti ejus damus, tu, maledícte diábole, numquam áudeas violáre. Per eúmdem Christum
          Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          E te não atrevas nunca, ó demónio maldito, a violar este sinal{" "}
          <Typography className="cross"> ✠ </Typography> da santa Cruz que imprimimos na sua fronte.
          Pelo mesmo Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Imposição da mão" />

      <Typography className="aside">
        O Sacerdote impõe sobre a cabeça do Neófito a sua mão direita:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Aetérnam ac justíssimam pietátem tuam déprecor, Dómine sancte, Pater omnípotens, ætérne
          Deus, auctor lúminis et veritátis, super hunc fámulum tuum{" "}
          <Typography className="latin">N.</Typography> (hanc fámulam tuam{" "}
          <Typography className="text-red-500">N.</Typography>) ut dignéris eum (eam) illumináre
          lúmine intelligéntiæ tuæ: munda eum (eam) et sanctífica: da ei sciéntiam veram, ut dignus
          (digna) grátia Baptísmi tui efféctus (effécta), téneat firmam spem, consílium rectum,
          doctrínam sanctam. Per Christum Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Senhor santo, Pai omnipotente, Deus eterno, autor da luz e da verdade, imploro a vossa
          eterna e justíssima bondade em favor deste vosso servo (ou serva){" "}
          <Typography className="vernacular">N.</Typography>, a fim de que Vos digneis ilustrá-lo
          (ou ilustrá-la) com a luz da vossa inteligência, purificá-lo (ou purificá-la) e
          santificá-lo (ou santificá-la). Concedei-lhe, Senhor, a verdadeira ciência, para que,
          tornando-se digno (ou digna) da graça do Baptismo, conserve sempre uma esperança bem
          firme, um conselho bem recto e doutrina santa.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H2 text="Entrada no Templo" />

      <H3 text="Imposição da estola" />

      <Typography className="aside">
        O Sacerdote impõe a Estola sobre a cabeça do Neófito e entra com ele e com os Padrinhos no
        Templo.
      </Typography>

      <Typography className="aside">Entretanto, o Sacerdote diz:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">N.</Typography> Ingrédere in templum Dei, ut hábeas partem
          cum Christo in vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">N.</Typography> Entra no Templo de Deus, a fim de que
          tenhas parte com Cristo na vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H2 text="Iniciação na fé" />

      <Typography className="aside">
        O cortejo caminha até próximo da Fonte Baptismal e recitam em voz alta o Credo e o Pater
        Noster.
      </Typography>

      <H3 text="Creio em Deus" />

      <Language>
        <Typography className="latin">
          Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in Jesum Christum, Fílium
          ejus únicum, Dóminum nostrum: qui concéptus est de Spíritu Sancto, natus ex María Vírgine,
          passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia
          die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis:
          inde ventúrus est judicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam
          cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam
          ætérnam.
        </Typography>
        <Typography className="vernacular">
          Creio em Deus, Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único
          Filho, nosso Senhor; o qual foi concebido pelo poder do Espírito Santo; nasceu da Virgem
          Maria; padeceu sob Pôncio Pilatos; foi crucificado, morto e sepultado; desceu aos
          infernos; ao terceiro dia ressuscitou dos mortos; subiu aos céus; está assentado à direita
          de Deus Pai todo-poderoso, donde há-de vir a julgar os vivos e os mortos. Creio no
          Espírito Santo; na Santa Igreja Católica; na comunicação dos Santos; na remissão dos
          pecados; na ressurreição da carne; na vida eterna. Amen.
        </Typography>
      </Language>

      <H3 text="Pai-Nosso" />

      <PaiNosso />

      <Typography className="aside">O Sacerdote faz o:</Typography>

      <H2 text="Último Exorcismo" />

      <Language>
        <Typography className="latin">
          Exorcízo te, omnis spíritus immúnde, in nómine Dei{" "}
          <Typography className="cross"> ✠ </Typography> Patris omnipoténtis, et in nómine Jesu{" "}
          <Typography className="cross"> ✠ </Typography> Christi Fílii ejus, Dómini et Júdicis
          nostri, et in virtúte Spíritus <Typography className="cross"> ✠ </Typography> Sancti, ut
          discédas ab hoc plásmate Dei <Typography className="text-red-500">N.</Typography>, quod
          Dóminus noster ad templum sanctum suum vocáre dignátus est, ut fiat templum Dei vivi, et
          Spíritus Sanctus hábitet in eo. Per eúmdem Christum Dóminum nostrum, qui ventúrus est
          judicáre vivos et mórtuos, et sæculum per ignem.
        </Typography>
        <Typography className="vernacular">
          Eu te exorcizo, ó espírito imundo, qualquer que sejas, em Nome de Deus{" "}
          <Typography className="cross"> ✠ </Typography> Pai omnipotente, e em nome de Jesus{" "}
          <Typography className="cross"> ✠ </Typography> Cristo, seu Filho, nosso Senhor e nosso
          Juiz, e pelo poder do Espírito <Typography className="cross"> ✠ </Typography> Santo, para
          que saias desta criatura de Deus, <Typography className="text-red-500">N.</Typography>,
          que nosso Senhor se dignou chamar ao seu sagrado templo, a fim de que se torne em templo
          do Deus vivo e morada do Espírito Santo. Pelo mesmo Cristo, nosso Senhor, que há-de vir a
          julgar os vivos e os mortos, e o mundo pelo fogo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Insalivação" />

      <Typography className="aside">
        O Sacerdote com a saliva da sua boca toca nas orelhas do Neófito:
      </Typography>

      <Language>
        <Typography className="latin">Ephpheta, quod est, Adaperire.</Typography>
        <Typography className="vernacular">Éfeta, isto é: Abre-te.</Typography>
      </Language>

      <Typography className="aside">
        Imediatamente, tocando no nariz do Neófito, acrescenta:
      </Typography>

      <Language>
        <Typography className="latin">
          In odórem suavitátis. Tu autem effugáre, diábole; appropinquábit enim judícium Dei.
        </Typography>
        <Typography className="vernacular">
          Em odor de suavidade. Tu, porém, ó demónio, foge, porque se aproxima o reino de Deus.
        </Typography>
      </Language>

      <H2 text="Renúncia a Satanás" />

      <Typography className="aside">
        O Sacerdote começa o interrogatório, ao qual devem responder com voz clara e firme: são
        feitas no singular, porque se referem ao Neófito.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Abrenúntias sátanæ?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Renuncias a Satanás?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Abrenúntio.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Renuncio!
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Et ómnibus opéribus ejus?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> E a todas suas obras?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Abrenúntio.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Renuncio!
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Et ómnibus pompis ejus?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> E a todas suas seduções?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Abrenúntio.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Renuncio!
        </Typography>
      </Language>

      <H2 text="Unção Catecumenal" />

      <Typography className="aside">
        O Sacerdote unge no peito e entre as espáduas o Neófito. Para que estas Unções possam ser
        feitas sobre a pele do Neófito, ser-lhe-ão descobertos o peito e depois as espáduas, ao pé
        do pescoço.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Ego te línio{" "}
          <Typography className="cross"> ✠ </Typography> óleo salútis in Christo Jesu Dómino nostro,
          ut hábeas vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Eu te unjo{" "}
          <Typography className="cross"> ✠ </Typography> com o Óleo da salvação em nosso Senhor
          Jesus Cristo, para que possas possuir a vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Chegado a este ponto, o Sacerdote depõe a Estola de cor violácea e substitui-a pela Estola
        de cor branca.
      </Typography>

      <H2 text="Confissão da Fé" />

      <Typography className="aside">
        O Sacerdote entra no Baptistério, acompanhado pelo Neófito e pelos Padrinhos, faz as três
        interrogações do Ritual, às quais todos devem responder com convicção e firmeza:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Credis in Deum Patrem omnipoténtem,
          Creatórem cæli et terræ?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Crês em Deus, Pai omnipotente,
          Criador do céu e da terra?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Credo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Creio.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Credis in Jesum Christum, Fílium ejus
          únicum, Dóminum nostrum, natum, et passum?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Crês em Jesus Cristo, seu Filho
          único, nosso Senhor, que nasceu e padeceu?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Credo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Creio.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Credis et in Spíritum Sanctum, sanctam
          Ecclésiam cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis
          resurrectiónem, et vitam ætérnam?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Crês no Espírito Santo, na Santa
          Igreja Católica, na comunicação dos Santos, na remissão dos pecados, na ressurreição da
          carne e na vida eterna?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Credo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Creio.
        </Typography>
      </Language>

      <H2 text="Ablução Baptismal" />

      <Typography className="aside">Terminada a Confissão da Fé, o Sacerdote interroga:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Vis baptizári?
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Queres ser baptizado?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Volo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Quero.
        </Typography>
      </Language>

      <Typography className="aside">
        O Padrinho (ou a Madrinha) ou ambos seguram o Neófito e sustentam-no sobre a Pia baptismal,
        com o rosto para baixo. Se o Padrinho segurar o Neófito, a Madrinha coloca a mão direita nas
        costas do Neófito.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Ego te baptízo in nómine Pa{" "}
          <Typography className="cross"> ✠ </Typography> tris, fundit primo, et Fí{" "}
          <Typography className="cross"> ✠ </Typography> lii, fundit secundo, et Spíritus{" "}
          <Typography className="cross"> ✠ </Typography> Sancti, fundit tertio.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Eu te baptizo em Nome do Pai{" "}
          <Typography className="cross"> ✠ </Typography> e do Filho{" "}
          <Typography className="cross"> ✠ </Typography> e do Espírito{" "}
          <Typography className="cross"> ✠ </Typography> Santo.
        </Typography>
      </Language>

      <Typography className="aside">
        Se, porém, se duvidar se o Neófito tinha sido já baptizado, usar-se-á a seguinte forma:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Si non es baptizátus (-a), ego te
          baptízo in nómine Pa <Typography className="cross"> ✠ </Typography> tris, et Fí{" "}
          <Typography className="cross"> ✠ </Typography> lii, et Spíritus{" "}
          <Typography className="cross"> ✠ </Typography> Sancti.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Se não és baptizado (a), eu te
          baptizo em Nome do Pai <Typography className="cross"> ✠ </Typography>, e do Fi{" "}
          <Typography className="cross"> ✠ </Typography> lho, e do Espírito{" "}
          <Typography className="cross"> ✠ </Typography> Santo.
        </Typography>
      </Language>

      <H2 text="Unção Crismal" />

      <Typography className="aside">O Sacerdote dirige a Deus a seguinte súplica:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus omnípotens, Pater Dómini nostri Jesu Christi, qui te regenerávit ex aqua et Spíritu
          Sancto, quique dedit tibi remissiónem ómnium peccatórum (hic inungit), ipse te líniat{" "}
          <Typography className="cross"> ✠ </Typography> Chrísmate salútis in eódem Christo Jesu
          Dómino nostro in vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          Que o Deus omnipotente, Pai de nosso Senhor Jesus Cristo, que te regenerou pela água e
          pelo Espírito Santo e te concedeu a graça da remissão de todos os pecados, te unja Ele
          próprio com o Crisma da salvação <Typography className="cross"> ✠ </Typography> para a
          vida eterna, em o mesmo nosso Senhor Jesus Cristo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Pax tibi.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> A paz seja contigo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso espírito.
        </Typography>
      </Language>

      <H3 text="Veste Branca" />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Accipe vestem cándidam, quam pérferas
          immaculátam ante tribúnal Dómini nostri Jesu Christi, ut hábeas vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Recebe a Veste branca, a qual
          apresentarás imaculada ante o tribunal de nosso Senhor Jesus Cristo, a fim de alcançares a
          vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Vela Acesa" />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography> Accipe lámpadem ardéntem, et
          irreprehensíbilis custódi Baptísmum tuum: serva Dei mandáta, ut, cum Dóminus vénerit ad
          núptias, possis occúrrere ei una cum ómnibus Sanctis in aula cælésti, et vivas in sæcula
          sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography> Recebe esta Vela acesa e guarda a
          graça do teu Baptismo com fidelidade irrepreensível: cumpre os Mandamentos de Deus, a fim
          de que, quando o Senhor vier para as bodas, possas ir ao seu encontro com todos os Santos
          na corte celestial, e assim permaneças em todos os séculos dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Despedida" />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Vade in pace, et Dóminus sit tecum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Sac.</Typography>{" "}
          <Typography className="text-red-500">N.</Typography> Vai em paz, que o Senhor seja
          contigo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Lavra-se o Assento do Baptismo, que os Padrinhos assinam, e todos se retiram.
      </Typography>
    </PageWrapper>
  );
}
