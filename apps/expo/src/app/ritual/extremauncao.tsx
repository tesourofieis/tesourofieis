import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import AspergesMe from "./../missal/aspergesme";

export default function PageExtremauncao() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Extrema-unção</Text>
          <Text className="aside">
            No quarto do enfermo Preparar-se-á uma mesa coberta com uma toalha
            branca e sobre esta um Crucifixo, duas velas, Água benta, um prato
            com oito Pequenos bocados de algodão para limpar o Óleo das unções,
            um pouco de miolo de pão, uma bacia com água e uma toalha. O
            Sacerdote, entrando em casa do enfermo, dirá:
          </Text>
          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Pax huic dómui.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>A paz esteja nesta casa.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et ómnibus habitántibus in
              ea.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E em todos seus habitantes.
            </Text>
          </Language>
          <Text className="h2">Asperges Me</Text>
          <AspergesMe />
          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Adjutórium nostrum in nómine
              Dómini.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O nosso auxílio está no Nome
              do Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Qui fecit cœlum et terram.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Que criou o céu e a terra.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem
              meam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E que meu clamor chegue até
              Vós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dominus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Intróeat, Dómine Jesu Christe, domum hanc sub nostræ humilitátis
              ingréssu, ætérna felícitas, divína prospéritas, seréna lætítia,
              cáritas fructuósa, sánitas sempitérna: effúgiat ex hoc loco
              accéssus dæmonum: adsint Angeli pacis, domúmque hanc déserat omnis
              malígna discórdia. Magnífica, Dómine, super nos nomen sanctum
              tuum; et béne <Text className="cross"> ✠ </Text> dic nostræ
              conversatióni: sanctífica nostræ humilitátis ingréssum, qui
              sanctus et qui pius es, et pérmanes cum Patre et Spíritu Sancto in
              sæcula sæculórum.
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo, fazei entrar nesta casa, conduzido pelos
              passos do vosso humilde ministro, a felicidade eterna, a
              prosperidade divina, a alegria pura, a caridade fecunda e a saúde
              inalterável; fazei que os demónios fujam desta casa, não ousando
              mais entrar nela; fazei que os Anjos da paz aqui acorram e que
              toda a maligna discórdia seja expulsa. Fazei brilhar, Senhor, a
              grandeza do vosso Sacratíssimo Nome e abençoai{" "}
              <Text className="cross"> ✠ </Text> o nosso ministério. Santificai
              a nossa humilde entrada neste lugar santo, ó Vós, que sois a
              própria santidade e misericórdia e que permaneceis imutável com o
              Pai e com o Espírito Santo em todos os séculos dos séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="latin">
              Orémus, et deprecémur Dóminum nostrum Jesum Christum, ut
              benedicéndo bene <Text className="cross"> ✠ </Text> dicat hoc
              tabernáculum, et omnes habitántes in eo, et det eis Angelum bonum
              custódem, et fáciat eos sibi servíre ad considerándum mirabília de
              lege sua: avértat ab eis omnes contrárias potestátes: erípiat eos
              ab omni formídine, et ab omni perturbatióne, ac sanos in hoc
              tabernáculo custodíre dignétur: Qui cum Patre et Spíritu Sancto
              vivit et regnat Deus in sæcula sæculórum.
            </Text>
            <Text className="vernacular">
              Pedimos e imploramos de nosso Senhor Jesus Cristo, que encha com
              suas bênçãos <Text className="cross"> ✠ </Text> esta casa e todos
              aqueles que nela habitam; que lhes envie o seu Anjo para os
              guardar cuidadosamente; que os una ao seu serviço e os faça
              considerar nas maravilhas da sua Lei; que afaste deles todas as
              forças inimigas; que os livre de qualquer perturbação ou terror e
              que se digne conservá-los sãos e salvos nesta morada: Ele, que,
              sendo Deus, vive e...
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Exáudi nos, Dómine sancte, Pater omnípotens, ætérnæ deus: et
              míttere dignéris sanctum Angelum tuum de cælis, qui custódiat,
              fóveat, prótegat, vísitet, atque deféndat omnes habitántes in hoc
              habitáculo. Per Christum Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              Ouvi-nos, Senhor santo, Pai omnipotente, Deus eterno, e dignai-Vos
              mandar do céu o vosso Santo Anjo, para que guarde, sustente,
              proteja, visite e defenda todos aqueles que se encontram nesta
              morada. Por Cristo Senhor nosso.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          O Acólito diz o{" "}
          <Link className="link" href="/devocionario/oracoes/confesso">
            Confiteor Deo...
          </Link>{" "}
          e o Sacerdote, tendo dado as Absolvições, continua:
          <Language>
            <Text className="latin">
              In nómine Pa <Text className="cross"> ✠ </Text> tris, et Fí{" "}
              <Text className="cross"> ✠ </Text> lii, et Spíritus{" "}
              <Text className="cross"> ✠ </Text> Sancti, extinguátur in te omnis
              virtus diáboli per impositiónem mánuum nostrárum, et per
              invocatiónem gloriósæ et sanctæ Dei Genitrícis Vírginis Maríæ,
              ejúsque ínclyti Sponsi Joseph, et ómnium sanctórum Angelórum,
              Archangelórum, Mártyrum, Confessórum, Vírginum, atque ómnium simul
              Sanctórum.
            </Text>
            <Text className="vernacular">
              Em Nome do Pai <Text className="cross"> ✠ </Text> e do Filho{" "}
              <Text className="cross"> ✠ </Text> e do Espírito{" "}
              <Text className="cross"> ✠ </Text> Santo, pela imposição das
              nossas mãos e pela invocação de todos os santos Anjos, Arcanjos,
              Patriarcas, Profetas, Apóstolos, Mártires, Confessores, Virgens e
              Todos os Santos em geral desapareça todo e qualquer poder do
              demónio sobre vós!
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h1">Sagradas Unções</Text>
          <Text className="h2">Da Olhos</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et suam piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per visum deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que cometestes com a vista.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h2">Dos Ouvidos</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et suam piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per audítum deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que cometestes com os ouvidos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h2">Do Nariz</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et span piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per odorátum deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que cometestes com o cheiro.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h2">Da Boca</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et suam piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per gustum et locutiónem deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que span com o gosto e as palavras.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h2">Das Mãos</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et suam piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per tactum deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que cometestes com o tacto.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="h2">Dos Pés</Text>
          <Language>
            <Text className="latin">
              Per istam sanctam Unctió <Text className="cross"> ✠ </Text> nem,
              et suam piíssimam misericórdiam, indúlgeat tibi Dóminus quidquid
              per gressum deliquísti.
            </Text>
            <Text className="vernacular">
              Em virtude desta santa Unção <Text className="cross"> ✠ </Text>,
              que o Senhor, pela sua piíssima misericórdia, vos perdoe todas as
              faltas que cometestes com os passos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Text className="aside">
            Se o enfermo se encontra em necessidade extrema, o Sacerdote,
            fazendo uma só unção, dirá:
          </Text>
          <Text className="text-base">
            Em virtude desta Unção, que o Senhor vos perdoe todas as faltas que
            cometestes. Amen.
          </Text>
          <Text className="aside">
            Após as Unções ou Unção o Sacerdote continuará:
          </Text>
          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléson.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Christe, eléison.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Cristo, tende piedade.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléson.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade.
            </Text>
            <Text className="latin">
              Pater noster <Text className="latin">secreto usque ad</Text> Pai
              Nosso <Text className="em">Em silêncio até</Text>
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Et ne nos indúcas in
              tentatiónesm.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>E não nos deixeis cair em
              tentação.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Sed líbera nos a malo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Mas livrai-nos do mal.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Salvum (-am) fac servum tuum
              (ancíllam tuam).
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Salvai o vosso servo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Deus meus, sperántem in te.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Que em Vós espera.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Mitte ei, Dómine, auxílium
              de sancto.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Enviai-lhe, Senhor, do vosso
              santuário o vosso auxílio.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Et de Sion tuére eum (eam).
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> E protejei-o lá de Sião.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Esto ei, Dómine, turris
              fortitúdinis.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Sede, Senhor, a sua
              fortaleza.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> A fácie inimíci.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Contra o inimigo.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Nihil profíciat inimícus in
              eo (ea).
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Que o inimigo não tenha
              poder algum nele.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Et fílius iniquitátis non
              appónat nocére ei.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> E que o Filho da iniquidade
              não possa prejudicá-lo.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem
              meam.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> E que meu clamor chegue até
              Vós.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text> Dominus vobíscum.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> O Senhor seja convosco.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Dómine Deus, qui per Apóstolum tuum Jacóbum locútus es: Infirmátur
              quis in vobis? indúcat presbýteros Ecclésiæ et orent super eum,
              ungéntes eum óleo in nómine Dómini: et orátio fídei salvábit
              infírmum, et alleviábit eum Dóminus: et si in peccátis sit,
              remitténtur ei; cura, quæsumus, Redémptor noster, grátia Sancti
              Spíritus languóres istíus infírmi (infírmæ), ejúsque sana vúlnera,
              et dimítte peccáta, atque dolóres cunctos mentis et córporis ab eo
              (ea) expélle, plenámque intérius et extérius sanitátem
              misericórditer redde, ut, ope misericórdiæ tuæ restitútus (-a), ad
              prístina reparétur offícia: Qui cum Patre et eódem Spíritu Sancto
              vivis et regnas Deus, in sæcula sæculórum.
            </Text>
            <Text className="vernacular">
              Senhor Deus, que pela boca do Apóstolo Tiago dissestes. «Se algum
              de vós estiver doente, faça vir os Presbíteros da Igreja, para que
              orem por ele e o unjam com o Santo Óleo, a qual oração, feita com
              fé, salvará o enfermo, e o Senhor o aliviará; e se tiver pecados
              alcançará assim a remissão deles» ; curai, Vos suplicamos, Senhor,
              pela graça do Espírito Santo, as enfermidades deste doente;
              curai-lhe as suas feridas e perdoai-lhe os seus pecados. Fazei
              desaparecer as enfermidades do seu corpo e da sua alma; e pela
              vossa misericórdia, restituí-lhe plenamente a saúde espiritual e
              corporal, a fim de que, restabelecido por efeito da vossa bondade,
              possa retomar o cumprimento dos seus deveres. Ó Vós, que, sendo
              Deus...
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Réspice, quæsumus, Dómine fámulum tuum{" "}
              <Text className="latin">N.</Text> (fámulam tuam{" "}
              <Text className="text-red-500">N.</Text>) in infirmitáte sui
              córporis fatiscéntem, et ánimam réfove, quam creásti: ut,
              castigatiónibus emendátus (-a), se tua séntiat medicína salvátum
              (-am). Per Christum Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, olhai benigno para o vosso servo{" "}
              <Text className="vernacular">N.</Text>, que sucumbe sob a
              enfermidade do seu corpo, e reanimai esta alma que criastes, a fim
              de que, curado dos castigos que sofreu, reconheça que não deve a
              salvação senão aos remédios da vossa graça. Por nosso Senhor...
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Dómine sancte, Pater omnípotens, ætérne Deus, qui, benedictiónis
              tuæ grátiam ægris infundéndo corpóribus, factúram tuam multíplici
              pietáte custódis: ad invocatiónem tui nóminis benígnus assíste; ut
              fámulum tuum (fámulam tuam) ab ægritúdine liberátum (-am), et
              sanitáte donátum (-am), déxtera tua érigas, virtúte confírmes,
              potestáte tueáris, atque Ecclésiæ tuæ sanctæ, cum omni desideráta
              prosperitáte, restítuas. Per Christum Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              Senhor santo, Pai omnipotente, Deus eterno, que infundis nos
              corpos dos enfermos a graça das vossas bênçãos e que rodeais as
              criaturas com os incessantes cuidados da vossa bondade, atendei
              benigno à invocação que fazemos do vosso santo Nome; e, depois de
              haverdes curado da doença e restituído a saúde ao vosso servo,
              erguei-o com vossa dextra, fortalecei-o com vossa robustez,
              protegei-o com vosso poder e restituí-o à Santa Igreja, havendo
              atendido a todos seus desejos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
