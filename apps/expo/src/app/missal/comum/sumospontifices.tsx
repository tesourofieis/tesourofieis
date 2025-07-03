import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function PageSumospontifices() {
  return (
    <PageWrapper>
      <H1 text="Um ou Muitos Sumos Pontífices" />

      <H3 text="Intróito" />

      <Text className="em">Jo. 21, 15, 16 & 17</Text>

      <Language>
        <Text className="latin">
          Si díligis me, Simon Petre, pasce agnos meos, pasce oves meas. (T. P.
          Allelúja, allelúja.) <Text className="latin">Ps. 29, 2</Text> Exaltábo
          te, Dómine, quóniam suscepísti me, nec delectásti inimícos meos super
          me.<Text className="versicle"> ℣. </Text>
          Gloria Patri...
        </Text>
        <Text className="vernacular">
          Se me amas, Simão-Pedro, apascenta os meus cordeiros, apascenta as
          minhas ovelhas. (T. P. Aleluia, aleluia.){" "}
          <Text className="vernacular">Sl. 29, 2</Text> Louvar-Vos-ei, Senhor,
          pois me acolhestes e não permitistes que meus inimigos se rissem de
          mim.<Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum{" "}
          <Text className="latin">N.</Text> (Mártyrem tuum atque) Summum
          Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ
          præstitísti esse pastórem. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Pastor eterno, atendei propício ao vosso rebanho; e guardai-o com
          vossa perpétua protecção por intercessão do bem-aventurado{" "}
          <Text className="vernacular">N.</Text> (Vosso Mártir e) Sumo
          Pontífice, o qual escolhestes como pastor de toda a Igreja. Por nosso
          Senhor...
        </Text>
      </Language>

      <Text className="aside">
        Se, porém, se fizer comemoração doutro Sumo Pontífice nesta mesma Missa,
        dir-se-á a seguinte Oração, em vez da Precedente:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui Ecclésiam tuam, in apostólicæ petræ soliditáte fundátam, ab
          infernárum éruis terróre portárum: præsta, quǽsumus; ut, intercedénte
          beáto <Text className="latin">N.</Text> (Mártyre tuo atque) Summo
          Pontífice, in tua veritáte persístens, contínua securitáte muniátur.
          Per Dominum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que do terror das portas do inferno livrastes a vossa Igreja,
          fundada na solidez da pedra apostólica, concedei-nos, Vos suplicamos,
          que, por intercessão do bem-aventurado{" "}
          <Text className="vernacular">N.</Text> (Vosso Mártir e) Sumo
          Pontífice, sempre persista na vossa verdade e seja protegida em
          contínua segurança. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">l. Pe. 5, 1-4 & 10-11</Text>

      <Language>
        <Text className="latin">Léctio Epístolæ beáti Petri Apóstoli.</Text>
        <Text className="vernacular">Lição da Ep.ª do B. Ap.º Pedro.</Text>
        <Text className="latin">
          Caríssimi: Senióres, qui in vobis sunt, obsécro consénior et testis
          Christi passiónum, qui et ejus, quæ in futúro revelánda est, glóriæ
          communicátor: páscite qui in vobis est gregem Dei, providéntes non
          coácte, sed spontánee secúndum Deum, neque turpis lucri grátia, sed
          voluntárie; neque ut dominántes in cleris, sed forma facti gregis ex
          ánimo. Et, cum appáruerit princeps pastórum, percipiétis
          immarcescíbilem glóriæ corónam. Deus autem omnis grátiæ, qui vocávit
          nos in ætérnam suam glóriam in Christo Jesu, módicum passos ipse
          perfíciet, confirmábit solidabítque. Ipsi glória et impérium in sǽcula
          sæculórum. Amen.
        </Text>
        <Text className="vernacular">
          Aos sacerdotes que estão entre vós rogo eu, sacerdote como eles e
          testemunha dos sofrimentos de Cristo e que tomarei parte com eles
          naquela glória que será manifestada um dia: apascentai o rebanho de
          Deus que vos está confiado, cuidai dele não constrangidos, mas de boa
          vontade, segundo Deus; não por amor de lucro vil, mas por dedicação;
          não como para dominar sobre a herança (do Senhor), mas fazendo-vos
          modelos do rebanho. E quando aparecer o príncipe dos pastores,
          recebereis a coroa imarcescível da glória. Foi Deus de toda a graça
          que nos chamou em Jesus Cristo à sua eterna glória; e, depois de
          terdes sofrido um pouco, vos aperfeiçoará, fortificará e consolidará.
          A Ele: glória e império pelos séculos dos séculos. Amen.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 106, 32, 31</Text>

      <Language>
        <Text className="latin">
          Exáltent eum in Ecclésia plebis: et in cáthedra seniórum laudent eum.
          <Text className="versicle"> ℣. </Text>Confiteántur Dómino misericórdiæ
          ejus; et mirabília ejus fíliis hóminum.
        </Text>
        <Text className="vernacular">
          Que seja exaltado na assembleia do povo; que seja louvado no conselho
          dos anciãos.<Text className="versicle"> ℣. </Text>
          Glorifiquem o Senhor pelas suas misericórdias: e pelas suas maravilhas
          em favor dos filhos dos homens.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Matth. 16, 18</Text> Tu es Petrus, et super
          hanc petram ædificábo Ecclésiam meam. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Mt. 16, 18</Text> Tu és Pedro, e sobre
          esta pedra edificarei a minha Igreja. Aleluia.
        </Text>
      </Language>

      <Text className="aside">
        Depois da Septuagésima omite-se o Aleluia e o Verso e diz-se:
      </Text>

      <H3 text="Trato" />

      <Text className="em">Sl. 39, 10-11</Text>

      <Language>
        <Text className="latin">
          Annuntiávi justítiam tuam in ecclésia magna, ecce, lábia mea non
          prohibébo: Dómine, tu scisti.
          <Text className="versicle"> ℣. </Text>
          Justítiam tuam non abscóndi in corde meo: veritátem tuam et salutáre
          tuum dixi.<Text className="versicle"> ℣. </Text>Non abscóndi
          misericórdiam tuam, et veritátem tuam a concílio multo.
        </Text>
        <Text className="vernacular">
          Anunciei a vossa justiça numa grande assembleia: eis, pois, que não
          cerrareis os meus lábios, Senhor, bem o sabeis.
          <Text className="versicle"> ℣. </Text>Não encerrei a vossa justiça no
          meu coração; mas publiquei a vossa verdade e salvação.
          <Text className="versicle"> ℣. </Text>Não ocultei a vossa misericórdia
          e fidelidade diante da grande assembleia.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato e diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Matth. 16, 18</Text> Tu es Petrus, et super
          hanc petram ædificábo Ecclésiam meam. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Ps. 44, 17, 18</Text> Constítues eos príncipes
          super omnem terram: mémores erunt nóminis tui, Dómine. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Mt. 16, 18</Text> Tu és Pedro, e sobre
          esta pedra edificarei a minha Igreja. Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Sl. 44, 17, 18</Text> Vós os constituístes
          príncipes em toda a terra: e eles perpetuarão, Senhor, o vosso nome.
          Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Mt. 16, 13-19</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Venit Jesus in partes Cæsaréæ Philíppi, et
          interrogábat discípulos suos, dicens: Quem dicunt hómines esse Fílium
          hóminis? At illi dixérunt: Alii Joánnem Baptístam, alii autem Elíam,
          alii vero Jeremíam aut unum ex prophétis. Dicit illis Jesus: Vos autem
          quem me esse dícitis? Respóndens Simon Petrus, dixit: Tu es Christus,
          Fílius Dei vivi. Respóndens autem Jesus, dixit ei: Beátus es, Simon
          Bar Jona: quia caro et sanguis non revelávit tibi, sed Pater meus, qui
          in cœlis est. Et ego dico tibi, quia tu es Petrus, et super hanc
          petram ædificábo Ecclésiam meam, et portæ ínferi non prævalébunt
          advérsus eam. Et tibi dabo claves regni cœlórum. Et quodcúmque
          ligáveris super terram, erit ligátum et in cœlis: et quodcúmque
          sólveris super terram, erit solútum et in cœlis.
        </Text>
        <Text className="vernacular">
          Naquele tempo, foi Jesus para a região de Cesareia, de Filipe, e
          interrogou os seus discípulos, dizendo-lhes: «Quem dizem os homens que
          é o Filho do homem?». Eles responderam: «Uns dizem que é João
          Baptista, outros que é Elias e outros que é Jeremias ou algum dos
          Profetas». Jesus disse-lhes: «E quem dizeis vós que eu sou?».
          Respondendo, Simão-Pedro disse: «Tu és Cristo, Filho de Deus vivo!». E
          Jesus disse-lhe: «Bem-aventurado és tu, Simão Barjona, porque não foi
          a carne nem o sangue que te revelaram o que dizes, mas meu Pai, que
          está nos céus. E Eu digo-te: tu és Pedro, e sobre esta pedra
          edificarei a minha Igreja; e as portas do inferno não prevalecerão
          contra ela. Eu te darei as chaves do reino dos céus; e tudo o que
          ligares sobre a terra será ligado também nos céus; e tudo o que
          desatares sobre a terra será desatado também nos céus».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Jr. 1, 9-10</Text>

      <Language>
        <Text className="latin">
          Ecce, dedi verba mea in ore tuo: ecce, constítui te super gentes et
          super regna, ut evéllas et destruas, et ædífices et plantes. (T. P.
          Allelúja.)
        </Text>
        <Text className="vernacular">
          Eis que pus as minhas palavras na tua boca: eis que te constituí sobre
          os povos e sobre os reinos para arrancares e destruíres, e para
          edificares e plantares. (T. P. Aleluia.)
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina:
          ut, et gregis tui profíciat ubique succéssus, et grati fiant nómini
          tuo, te gubernánte, pastóres. Per Dóminum nostrum Jesum Christum,
          Fílium tuum: Qui tecum vivit et regnat...
        </Text>
        <Text className="vernacular">
          Com as ofertas destes dons, Vos suplicamos, Senhor, iluminai
          benignamente a vossa Igreja, a fim de que não só o vosso rebanho
          triunfe em toda a parte, mas também pelo poder do vosso nome os
          pastores sejam bem acolhidos. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="aside">
        Se, porém, se fizer comemoração doutro Sumo Pontífice nesta mesma Missa,
        dir-se-á a seguinte Secreta, em vez da Precedente:
      </Text>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera, quæ tibi, Dómine, lætántes offérimus, súscipe benígnus, et
          præsta: ut, intercedénte beáto <Text className="latin">N.</Text>,
          Ecclésia tua et fídei integritáte lætétur, et témporum tranquillitáte
          semper exsúltet. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Recebei benignamente, Senhor, os dons que com alegria Vos oferecemos,
          e fazei que, por intercessão do bem-aventurado{" "}
          <Text className="vernacular">N.</Text>, a vossa. Igreja se alegre com
          a integridade da sua fé e sempre exulte com a tranquilidade dos
          tempos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 16, 18</Text>

      <Language>
        <Text className="latin">
          Tu es Petrus, et super hanc petram ædificábo Ecclésiam meam. (T. P.
          Allelúja.)
        </Text>
        <Text className="vernacular">
          Tu és Pedro, e sobre esta pedra edificarei a minha Igreja. (T. P.
          Aleluia.)
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus
          Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis
          accípiat et in religiónis integritáte persístat. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, governai com mansidão a vossa Igreja, agora
          que foi alimentada com a sagrada refeição, a fim de que, dirigida com
          firme suavidade, alcance o incremento da sua liberdade e persista na
          integridade da sua doutrina. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="aside">
        Se, porém, se fizer comemoração doutro Sumo Pontífice nesta mesma Missa,
        dir-se-á o seguinte Postcomúnio, em vez do Precedente:
      </Text>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Multíplica, quǽsumus, Dómine, in Ecclesia tua spíritum grátiæ, quem
          dedísti: ut beáti <Text className="latin">N.</Text> (Martyris tui
          atque) Summi Pontíficis deprecatióne nec pastóri obœdiéntia gregis nec
          gregi desit cura pastóris. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, multiplicai na vossa Igreja o espírito da
          graça, que lhe concedestes, a fim de que, pela oração do
          bem-aventurado <Text className="vernacular">N.</Text> (Vosso Mártir e)
          Sumo Pontífice, não falte ao pastor a obediência do rebanho, nem ao
          rebanho a dedicação do pastor. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
