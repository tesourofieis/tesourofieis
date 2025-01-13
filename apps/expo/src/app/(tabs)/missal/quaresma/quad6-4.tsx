import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import PangeLingua from "../../canticos/sacros/pangelingua";
import Salmo21 from "../../devocionario/salterio/021";

export default function PageQuad64() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Quinta-Feira Santa</Text>

          <Text className="aside">
            A Estação fazia-se outrora na igreja de S. João de Latrão,
            primitivamente chamada Basílica de São Salvador. A liturgia da
            Quinta-feira Santa é, realmente, toda impregnada da lembrança da
            Redenção. Comportava antigamente a celebração de três Missas; na
            primeira, eram reconciliados os Penitentes públicos; na segunda,
            consagravam-se os Santos Óleos e na terceira, comemorava-se
            especialmente a Instituição da Eucaristia na última Ceia. Somente
            esta última resta hoje; o Bispo cercado de 12 Padres, 7 Diáconos e 7
            Subdiáconos, benze então os Santos Óleos na Catedral.
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Gl. 6, 14</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Nos autem gloriári opórtet in Cruce Dómini nostri Jesu Christi: in
              quo est salus, vita et resurréctio nostra: per quem salváti et
              liberáti sumus. <Text className="text-base latin">Ps. 66, 2</Text>{" "}
              Deus misereátur nostri, et benedícat nobis: illúminet vultum suum
              super nos, et misereátur nostri.
            </Text>
            <Text className="text-base vernacular">
              Nós, porém, devemos ufanar-nos na Cruz de N. S. Jesus Cristo, pois
              Ele é a nossa salvação, vida e ressurreição: e por Ele fomos
              salvos e livres.{" "}
              <Text className="text-base vernacular">Sl. 66, 2</Text> Que Deus
              tenha misericórdia de nós e nos abençoe; e se compadeça de nós!
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, a quo et Judas reatus sui pœnam, et confessiónis suæ latro
              prǽmium sumpsit, concéde nobis tuæ propitiatiónis efféctum: ut,
              sicut in passióne sua Jesus Christus, Dóminus noster, diversa
              utrísque íntulit stipéndia meritórum; ita nobis, abláto vetustátis
              erróre, resurrectiónis suæ grátiam largiátur: Qui tecum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, de quem Judas recebeu o castigo da sua perfídia e o ladrão
              a recompensa da sua confissão, concedei-nos o efeito da vossa
              misericórdia, a fim de que, assim como N. S. Jesus Cristo durante
              a sua Paixão tratou a um e ao outro segundo os seus méritos, assim
              também, havendo desaparecido a nossa malícia do «homem velho», nos
              tornemos participantes da sua ressurreição. Ele, que, sendo
              Deus...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">1 Cor. 11, 20-32</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios.
            </Text>
            <Text className="text-base vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
            </Text>
            <Text className="text-base latin">
              Fratres: Conveniéntibus vobis m unum, jam non est Domínicam cœnam
              manducáre. Unusquísque enim suam cenam præsúmit ad manducándum. Et
              alius quidem ésurit: álius autem ébrius est. Numquid domos non
              habétis ad manducándum et bibéndum? aut ecclésiam Dei contémnitis,
              et confúnditis eos, qui non habent? Quid dicam vobis? Laudo vos?
              In hoc non laudo. Ego enim accépi a Dómino quod et trádidi vobis,
              quóniam Dóminus Jesus, in qua nocte tradebátur, accépit panem, et
              grátias agens tregit, et dixit: Accípite, et manducáte: hoc est
              corpus meum, quod pro vobis tradétur: hoc fácite in meam
              commemoratiónem. Simíliter et cálicem, postquam cœnávit, dicens:
              Hic calix novum Testaméntum est in meo sánguine: hoc fácite,
              quotiescúmque bibétis, in meam commemoratiónem. Quotiescúmque enim
              manducábitis panem hunc et cálicem bibétis: mortem Dómini
              annuntiábitis, donec véniat. Itaque quicúmque manducáverit panem
              hunc vel bíberit cálicem Dómini indígne, reus erit córporis et
              sánguinis Dómini. Probet autem seípsum homo: et sic de pane illo
              edat et de cálice bibat. Qui enim mandúcat et bibit indígne,
              judícium sibi mandúcat et bibit: non dijúdicans corpus Dómini.
              Ideo inter vos multi infirmi et imbecílles, et dórmiunt multi.
              Quod si nosmetípsos dijudicarémus, non útique judicarémur. Dum
              judicámur autem, a Dómino corrípimur, ut non cum hoc mundo
              damnémur.
            </Text>
            <Text className="text-base vernacular">
              Meus irmãos: Quando vos reunis em assembleia, já não é para comer
              a Ceia do Senhor que o fazeis; pois cada um de vós se antecipa em
              comer a sua própria ceia à parte, de modo que um fica com fome e o
              outro fica ébrio. Porventura não tendes as vossas casas para aí
              comer e beber? Ou, desprezando a assembleia de Deus, quereis
              humilhar aqueles que nada possuem? Que vos direi? Louvar-vos?
              Decerto que não posso louvar-vos por isto; pois foi o Senhor que
              me ensinou o que a este respeito vos transmiti, isto é: que o
              Senhor Jesus, na noite em que foi traído, tomou o pão e, depois de
              haver dado graças, partiu-o e disse: «Aceitai e comei. Isto é o
              meu corpo, que será entregue por vós. Fazei isto em minha
              memória». Do mesmo modo, depois de haver ceado, tomou o cálice e
              disse: «Este cálice é o Novo Testamento no meu sangue. Fazei isto
              mesmo, em minha memória, sempre que o beberdes». Todas as vezes
              que comerdes este pão e beberdes este cálice anunciareis a morte
              do Senhor, até que Ele venha. É por isso que todo aquele que
              indignamente comer este pão ou beber o cálice do Senhor será réu
              do Corpo e do Sangue do Senhor. Examine-se, pois, o homem a si
              mesmo: e, assim, coma daquele pão e beba do cálice; pois o que
              comer e beber indignamente, não discernindo o Corpo do Senhor,
              come e bebe a sua condenação. É por isto que no meio de vós há
              muitos enfermos e fracos e muitos outros dormem. Portanto, se nos
              julgarmos a nós mesmos, não seremos condenados; pois, enquanto nos
              julgamos, o Senhor nos corrigirá, a fim de não sermos condenados
              com este mundo.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Fl. 2, 8-9</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Christus factus est pro nobis obœdiens usque ad mortem, mortem
              autem crucis ℣. Propter quod et Deus exaltávit illum: et dedit
              illi nomen, quod est super omne nomen.
            </Text>
            <Text className="text-base vernacular">
              Cristo tornou-se obediente por nós até à morte, e morte de cruz.
              ℣. Pelo que Deus O exaltou e lhe deu um nome que é superior a
              todos os nomes.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 13, 1-15</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Joánnem.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. João.
            </Text>
            <Text className="text-base latin">
              Ante diem festum Paschae, sciens Jesus, quia venit hora ejus, ut
              tránseat ex hoc mundo ad Patrem: cum dilexísset suos, qui erant in
              mundo, in finem diléxit eos. Et cena facta, cum diábolus jam
              misísset in cor, ut tráderet eum Judas Simónis Iscariótæ: sciens,
              quia ómnia dedit ei Pater in manus, et quia a Deo exivit, et ad
              Deum vadit: surgit a cena et ponit vestiménta sua: et cum
              accepísset línteum, præcínxit se. Deinde mittit aquam in pelvim,
              et cœpit laváre pedes discipulórum, et extérgere línteo, quo erat
              præcínctus. Venit ergo ad Simónem Petrum. Et dicit ei Petrus:
              Dómine, tu mihi lavas pedes? Respóndit Jesus et dixit ei: Quod ego
              fácio, tu nescis modo, scies autem póstea. Dicit ei Petrus: Non
              lavábis mihi pedes in ætérnum.
            </Text>
            <Text className="text-base vernacular">
              Antes do dia da festa da Páscoa, sabendo Jesus que chegara a sua
              hora em que devia passar deste mundo para seu Pai, havendo amado
              os seus, que estavam no mundo, amou-os até ao fim. E, depois da
              ceia, quando já o demónio havia posto o desígnio de O atraiçoar no
              coração de Judas Iscariotes, filho de Simão, sabendo Jesus que o
              Pai havia deixado todas as coisas nas suas mãos e que, havendo Ele
              saído de Deus, para Deus voltava, levantou-se da mesa, tirou o seu
              manto e cingiu-se com uma toalha. Em seguida, deitou água em uma
              bacia, começou a lavar os pés dos discípulos e enxugou-lhos com a
              toalha com que se cingira. Chegou, enfim, a Simão-Pedro, o qual
              lhe disse: «Senhor, quereis lavar-me os pés?». Jesus respondeu: «O
              que Eu faço o não compreendes agora; mais tarde compreendê-lo-ás».
              Pedro disse-Lhe: «Não; jamais me lavareis os pés!».
            </Text>
            <Text className="text-base latin">
              Respóndit ei Jesus: Si non lávero te, non habébis partem mecum.
              Dicit ei Simon Petrus: Dómine, non tantum pedes meos, sed et manus
              et caput. Dicit ei Jesus: Qui lotus est, non índiget nisi ut pedes
              lavet, sed est mundus totus. Et vos mundi estis, sed non omnes.
              Sciébat enim, quisnam esset, qui tráderet eum: proptérea dixit:
              Non estis mundi omnes. Postquam ergo lavit pedes eórum et accépit
              vestiménta sua: cum recubuísset íterum, dixit eis: Scitis, quid
              fécerim vobis? Vos vocátis me Magíster et Dómine: et bene dícitis:
              sum étenim. Si ergo ego lavi pedes vestros, Dóminus et Magíster:
              et vos debétis alter altérius laváre pedes. Exémplum enim dedi
              vobis, ut, quemádmodum ego feci vobis, ita et vos faciátis.
            </Text>
            <Text className="text-base vernacular">
              Jesus respondeu-lhe: «Se te não lavar os pés, não terás parte
              comigo». Simão-Pedro disse, então: «Senhor, não só os pés, mas
              ainda as mãos e a cabeça!». E Jesus disse-lhe: «Quem está lavado
              só precisa de lavar os pés; pois está todo limpo. Vós também
              estais limpos, mas não todos». Pois Ele sabia quem havia de
              entregá-l’O; por isso disse: «Não estais todos limpos». Depois de
              lhes lavar os pés, tomou os vestidos, assentou-se à mesa e disse:
              «Sabeis o que vos fiz? Chamais-me Senhor e Mestre e dizeis bem,
              porque, na verdade, o sou. Se Eu, pois, sendo vosso Mestre e
              Senhor, vos lavei os pés, também deveis lavá-los uns aos outros.
              Dei-Vos o exemplo, para que, assim como Eu vos fiz, assim façais
              também».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 117, 16 & 17</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Déxtera Dómini fecit virtútem, déxtera Dómini exaltávit me: non
              móriar, sed vivam, et narrábo ópera Dómini.
            </Text>
            <Text className="text-base vernacular">
              A dextra do Senhor mostrou o seu poder; a dextra do Senhor
              exaltou-me! Não morrerei, mas viverei e publicarei as maravilhas
              do Senhor.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ipse tibi, quǽsumus, Dómine sancte, Pater omnípotens, ætérne Deus,
              sacrifícium nostrum reddat accéptum, qui discípulis suis in sui
              commemoratiónem hoc fíeri hodiérna traditióne monstrávit, Jesus
              Christus, Fílius tuus, Dóminus noster: Qui tecum vivit et
              regnat...
            </Text>
            <Text className="text-base vernacular">
              Senhor santo, Pai omnipotente e Deus eterno, permiti que este
              nosso sacrifício Vos seja agradável por Jesus Cristo, vosso Filho,
              que, instituindo-o neste dia, prescreveu aos discípulos que o
              celebrassem em sua memória. Ele, que, sendo Deus, convosco vive
              e...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Jo. 13, 12, 13 & 15</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dóminus Jesus, postquam cœnávit cum discípulis suis, lavit pedes
              eórum, et ait illis: Scitis, quid fécerim vobis ego, Dóminus et
              Magíster? Exemplum dedi vobis, ut et vos ita faciátis.
            </Text>
            <Text className="text-base vernacular">
              O Senhor Jesus, depois de haver ceado com seus discípulos,
              lavou-lhes os pés e disse-lhes: «Sabeis o que vos fiz, sendo vosso
              Senhor e Mestre? Dei-vos o exemplo, para que façais também o
              mesmo».
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti vitálibus aliméntis, quǽsumus, Dómine, Deus noster: ut,
              quod témpore nostræ mortalitátis exséquimur, immortalitátis tuæ
              múnere consequámur. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Senhor, nosso Deus, havendo nós sido saciados com este alimento
              de vida, concedei-nos a graça de, com vosso socorro, alcançarmos
              no seio da imortalidade o que procurámos durante a vida mortal.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h2">Procissão do SS. Sacramento</Text>

          <Text className="h3">Pange Lingua</Text>

          <PangeLingua />

          <Text className="h2">Desnudação dos Altares</Text>

          <Text className="h3">Antífona</Text>

          <Text className="em">Sl. 21, 19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Diviserunt sibi vestimenta mea: et super vestem meam misérunt
              sortem.
            </Text>
            <Text className="text-base vernacular">
              Dividiram entre si os meus vestidos e sobre a minha túnica jogaram
              sortes.
            </Text>
          </View>

          <Text className="h3">Salmo 21</Text>

          <Salmo21 />

          <Text className="aside">
            Depois do Salmo 21 repetir Antífona anterior.
          </Text>

          <Text className="h2">Lava-Pés</Text>

          <Text className="aside">Evangelho igual ao anterior.</Text>

          <Text className="h3">Antífona</Text>

          <Text className="em">Jo. 13, 34</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Mandátum novum do vobis: ut diligátis ínvicem, sicut diléxi vos,
              dicit Dóminus. <Text className="text-base latin">Ps. 118, 1</Text>{" "}
              Beáti immaculáti in via: qui ámbulant in lege Dómini.
            </Text>
            <Text className="text-base vernacular">
              Dou-vos um novo mandamento: «Amai-vos uns aos outros, como vos
              amei», diz o Senhor.{" "}
              <Text className="text-base vernacular">Sl. 118, 1</Text>{" "}
              Bem-aventurados os que são puros na sua vida: e que seguem a lei
              do Senhor.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">Jo. 13, 4, 5 & 15</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Postquam surréxit Dóminus a cœna, misit aquam in pelvim, et cœpit
              laváre pedes discipulórum suórum: hoc exémplum réliquit eis.{" "}
              <Text className="text-base latin">Ps. 47, 2</Text> Magnus Dóminus,
              et laudábilis nimis: in civitáte Dei nostri, in monte sancto ejus.
              Postquam surréxit Dóminus.
            </Text>
            <Text className="text-base vernacular">
              Depois que o Senhor se levantou da ceia, deitou água em uma bacia
              e começou a lavar os pés aos discípulos, deixando este exemplo.{" "}
              <Text className="text-base vernacular">Sl. 47, 2</Text> O Senhor é
              grande e digno de todo o louvor na cidade de nosso Deus, na sua
              montanha sagrada.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">Jo. 13, 12, 13 & 15</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dóminus Jesus, postquam cœnávit cum discípulis suis, lavit pedes
              eórum, et ait illis: Scitis, quid fécerim vobis ego, Dóminus et
              Magíster? Exémplum dedi vobis, ut et vos ita faciátis.{" "}
              <Text className="text-base latin">Ps. 84, 2</Text> Benedixísti,
              Dómine, terram tuam: avertísti captivitátem Jacob.
            </Text>
            <Text className="text-base vernacular">
              O Senhor Jesus, depois de haver ceado com os discípulos,
              lavou-lhes os pés e disse-lhes: «Sabeis o que acabo de vos fazer,
              posto que seja vosso Senhor e Mestre? Dei-vos o exemplo, a fim de
              que façais o que acabo de fazer».{" "}
              <Text className="text-base vernacular">Sl. 84, 2</Text>{" "}
              Abençoastes, Senhor, a vossa terra; livrastes Jacob do cativeiro.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">Jo. 13, 6-7 & 8</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dómine, tu mihi lavas pedes? Respóndit Jesus et dixit ei: Si non
              lávero tibi pedes, non habébis partem mecum. ℣. Venit ergo ad
              Simónem Petrum, et dixit ei Petrus.
            </Text>
            <Text className="text-base vernacular">
              Senhor, quereis lavar-me os pés? Jesus respondeu-lhe e disse: «Se
              te não lavar os pés, não terás parte comigo». ℣. Porém, quando
              Jesus chegou junto de Simão-Pedro, este disse-Lhe:
            </Text>
            <Text className="text-base latin">
              Dómine, tu mihi lavas pedes? Respóndit Jesus et dixit ei: Si non
              lávero tibi pedes, non habébis partem mecum. ℣. Quod ego fácio, tu
              nescis modo: scies autem póstea.
            </Text>
            <Text className="text-base vernacular">
              Senhor, quereis lavar-me os pés? Jesus respondeu-lhe e disse: «Se
              te não lavar os pés, não terás parte comigo». ℣. «O que faço
              presentemente tu o ignoras; mas sabê-lo-ás depois».
            </Text>
            <Text className="text-base latin">
              Dómine, tu mihi lavas pedes? Respóndit Jesus et dixit ei: Si non
              lávero tibi pedes, non habébis partem mecum.
            </Text>
            <Text className="text-base vernacular">
              Senhor, quereis lavar-me os pés? Jesus respondeu-lhe e disse: «Se
              te não lavar os pés, não terás parte comigo».
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Si ego, Dóminus et Magíster vester, lavi vobis pedes: quanto magis
              debétis alter altérius laváre pedes?{" "}
              <Text className="text-base latin">Ps. 48, 2</Text> Audíte hæc,
              omnes gentes: áuribus percípite, qui habitátis orbem.
            </Text>
            <Text className="text-base vernacular">
              Se Eu, vosso Senhor e Mestre, vos lavei os pés, quanto mais deveis
              lavar os pés uns aos outros.{" "}
              <Text className="text-base vernacular">Sl. 48, 2</Text> Ó povos,
              escutai todos esta palavra. Ouvi-a, ó habitantes da terra.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">Jo. 13, 35</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              In hoc cognóscent omnes, quia discípuli mei estis, si dilectiónem
              habuéritis ad ínvicem. ℣. Dixit Jesus discípulis suis.
            </Text>
            <Text className="text-base vernacular">
              Todos conhecerão que sois meus discípulos, se vos amardes uns aos
              outros. ℣. Disse Jesus a seus discípulos.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">1 Cor. 13, 13</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Máneant in vobis fides, spes, cáritas, tria hæc: major autem horum
              est cáritas. ℣. Nunc autem manent fides, spes, cáritas, tria hæc:
              major horum est cáritas.
            </Text>
            <Text className="text-base vernacular">
              Que a fé, a esperança e a caridade permaneçam em vós; mas a
              caridade é a maior destas três virtudes. ℣. Presentemente existem
              três virtudes, mas a maior das três é a caridade.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Benedícta sit sancta Trínitas atque indivísa Unitas: confitébimur
              ei, quia fecit nobíscum misericórdiam suam. ℣. Benedicámus Patrem,
              et Fílium, cum Sancto Spíritu.{" "}
              <Text className="text-base latin">Ps. 83, 23</Text> Quam dilécta
              tabernácula tua, Dómine virtútum! concupíscit, et déficit ánima
              mea in átria Dómini.
            </Text>
            <Text className="text-base vernacular">
              Bendita seja a Santíssima Trindade e a unidade indivisível!
              Cantaremos os seus louvores, porque Deus espalhou sobre nós a sua
              misericórdia. ℣. Bendigamos o Pai, e o Filho, e o Espírito Santo.{" "}
              <Text className="text-base vernacular">Sl. 83, 23</Text> Como são
              amáveis os vossos tabernáculos, ó Deus dos exércitos. Minha alma
              voa em transportes de amor ao pensar nos átrios do Senhor.
            </Text>
          </View>

          <Text className="h3">Antífona</Text>

          <Text className="em">1 Jo. 2; 3; 4</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ubi cáritas et amor, Deus ibi est. ℣. Congregávit nos in unum
              Christi amor. ℣. Exsultémus et in ipso jucundémur. ℣. Timeámus et
              amémus Deum vivum. ℣. Et ex corde diligámus nos sincéro.
            </Text>
            <Text className="text-base vernacular">
              Deus está onde estiverem a caridade e o amor. ℣. Foi o amor ele
              Cristo que nos reuniu. ℣. Alegremo-nos e encontremos n’Ele as
              delícias. ℣. Temamos e amemos Deus vivo. ℣. Amemo-nos uns aos
              outros, sinceramente.
            </Text>
            <Text className="text-base latin">
              Ubi cáritas et amor, Deus ibi est. ℣. Simul ergo cum in unum
              congregámur: ℣. Ne nos mente dividámur, caveámus. ℣. Cessent
              júrgia malígna, cessent lites. ℣. Et in médio nostri sit Christus
              Deus.
            </Text>
            <Text className="text-base vernacular">
              Deus esta onde estiverem a caridade e o amor. ℣. Estamos reunidos
              em uma única assembleia. ℣. Evitemos tudo o que possa dividir os
              nossos corações. ℣. Longe de nós as rixas e as dissensões. ℣. Que
              Cristo, nosso Deus, esteja no meio de nós.
            </Text>
            <Text className="text-base latin">
              Ubi cáritas et amor, Deus ibi est. ℣. Simul quoque cum Beátis
              videámus ℣. Gloriánter vultum tuum, Christe Deus: ℣. Gáudium, quod
              est imménsum atque probum. ℣. Sǽcula per infiníta sæculórum.{" "}
              <Text className="text-base latin">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              Deus está onde estiverem a caridade e o amor. ℣. Fazei-nos ver com
              os Bem-aventurados. ℣. Vosso rosto está na glória, Cristo nosso
              Deus: ℣. Alegria imensa e pura. ℣. Em todos os séculos, pelos
              infinitos séculos.{" "}
              <Text className="text-base vernacular">℟.</Text> Amen.
            </Text>
          </View>

          <View className="side-by-side">
            <Text className="text-base latin">
              Pater noster, <Text className="text-base latin">secréto.</Text> ℣.
              Et ne nos indúcas in tentatiónem.
            </Text>
            <Text className="text-base vernacular">
              Pai-nosso,{" "}
              <Text className="text-base vernacular">em silêncio.</Text> ℣. E
              não nos deixeis cair em tentação.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Sed líbera nos a malo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Mas livrai-nos do
              mal.
            </Text>
            <Text className="text-base latin">
              ℣. Tu mandásti mandáta tua, Dómine.
            </Text>
            <Text className="text-base vernacular">
              ℣. Ordenastes, Senhor, que os vossos mandamentos:
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Custodíri nimis.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Fossem bem
              observados.
            </Text>
            <Text className="text-base latin">
              ℣. Tu lavásti pedes discipulórum tuórum.
            </Text>
            <Text className="text-base vernacular">
              ℣. Lavastes os pés aos vossos discípulos.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Opera mánuum tuárum ne
              despícias.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Não desprezeis as
              obras das vossas mãos.
            </Text>
            <Text className="text-base latin">
              ℣. Dómine, exáudi oratiónem meam.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, ouvi a minha oração.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E que meu clamor
              chegue até Vós.
            </Text>
            <Text className="text-base latin">℣. Dóminus vobíscum.</Text>
            <Text className="text-base vernacular">
              ℣. O Senhor seja convosco.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E com vosso
              espírito.
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Adésto, Dómine, quǽsumus, officio servitútis nostræ: et quia tu
              discípulis tuis pedes laváre dignátus es, ne despícias ópera
              mánuum tuárum, quæ nobis retinénda mandásti: ut, sicut hic nobis
              et a nobis exterióra abluúntur inquinaménta; sic a te ómnium
              nostrum interióra lavéntur peccáta. Quod ipse præstáre dignéris,
              qui vivis et regnas Deus: per ómnia sǽcula sæculórum.{" "}
              <Text className="text-base latin">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos imploramos, aceitai benignamente estas homenagens da
              nossa humildade, e, já que não hesitastes em lavar os pés aos
              vossos discípulos, não desprezeis o que acabámos de fazer, segundo
              o que nos mandastes, a fim de que, havendo sido purificados das
              manchas exteriores do corpo, sejamos também lavados por Vós das
              manchas interiores dos nossos pecados. Concedei-nos esta graça.
              Vós que, sendo Deus, viveis e reinais por todos os séculos dos
              séculos. <Text className="text-base vernacular">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
