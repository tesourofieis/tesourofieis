import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PagePasc03() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Quarta-feira Pascal</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Mt. 25, 34</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Veníte, benedícti Patris mei, percípite regnum, allelúja: quod
              vobis parátum est ab orígine mundi, allelúja, allelúja, allelúja.{" "}
              <Text className="text-base latin">Ps. 95, 1</Text> Cantáte Dómino
              cánticum novum: cantáte Dómino, omnis terra. ℣. Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              Vinde, benditos do meu Pai, recebei o reino, aleluia: que foi
              preparado para vós desde a criação do mundo, aleluia, aleluia,
              aleluia. <Text className="text-base vernacular">Sl. 95, 1</Text>{" "}
              Cantai ao Senhor um cântico novo: que toda a terra cante hinos ao
              Senhor. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos Resurrectiónis Domínicæ ánnua solemnitáte lætíficas:
              concéde propítius; ut per temporália festa, quæ ágimus, perveníre
              ad gáudia ætérna mereámur. Per eúndem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos alegrais anualmente com a celebração da solenidade
              da Ressurreição do Senhor, permiti benigno que, celebrando nós
              estas festas neste tempo, mereçamos alcançar os gozos eternos.
              Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 3, 13-15 & 17-19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">Léctio Actuum Apostolorum.</Text>
            <Text className="text-base vernacular">
              Lição dos Actos dos Apóstolos.
            </Text>
            <Text className="text-base latin">
              In diébus illis: Apériens Petrus os suum, dixit: Viri Israelítæ,
              et qui timétis Deum, audíte. Deus Abraham et Deus Isaac et Deus
              Jacob, Deus patrum nostrórum, glorificávit Fílium suum Jesum, quem
              vos quidem tradidístis et negástis ante fáciem Piláti, judicánte
              illo dimítti. Vos autem sanctum et justum negástis, et petístis
              virum homicídam donári vobis: auctórem vero vitæ interfecistis,
              quem Deus suscitávit a mórtuis, cujus nos testes sumus. Et nunc,
              fratres, scio, quia per ignorántiam fecístis, sicut et príncipes
              vestri. Deus autem, quæ prænuntiávit per os ómnium Prophetárum,
              pati Christum suum, sic implévit. Pænitémini ígitur et
              convertímini, ut deleántur peccáta vestra.
            </Text>
            <Text className="text-base vernacular">
              Naqueles dias, Pedro, tomando a palavra, disse: «Varões de Israel
              e vós todos, que temeis a Deus, ouvi: Deus de Abraão, Deus de
              Isaque, Deus de Jacob e de nossos pais glorificou o seu Filho
              Jesus, que entregastes e atraiçoastes perante Pilatos, quando este
              O julgava e queria livrá-l’O. Vós atraiçoastes o Santo e o Justo:
              pedistes que um homicida fosse livre e matastes o autor da vida, o
              qual Deus, porém, ressuscitou dos mortos! De tudo isto somos
              testemunhas. Contudo, meus irmãos, sei que assim procedestes por
              ignorância; e do mesmo modo os vossos príncipes. Mas foi assim que
              Deus cumpriu tudo o que havia sido predito pelos Profetas, e que
              seu Cristo tinha de sofrer. Fazei, pois, penitência e
              convertei-vos, para que os vossos pecados vos sejam perdoados».
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 117, 24 & 16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hæc dies, quam fecit Dóminus: exsultémus et lætámur in ea. ℣.
              Déxtera Dómini fecit virtútem, déxtera Dómini exaltávit me.
            </Text>
            <Text className="text-base vernacular">
              Eis o dia que o Senhor fez: exultemos e alegremo-nos nele. A
              dextra do Senhor manifestou o seu poder: a dextra do Senhor
              exaltou-me!
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Luc. 24, 34</Text> Surréxit
              Dóminus vere: et appáruit Petro.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Lc. 24, 34</Text> O Senhor
              ressuscitou verdadeiramente e apareceu a Pedro.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 21, 1-14</Text>

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
              In illo témpore: Manifestávit se íterum Jesus discípulis ad mare
              Tiberíadis. Manifestávit autem sic. Erant simul Simon Petrus et
              Thomas, qui dícitur Dídymus, et Nathánaël, qui erat a Cana
              Galilǽæ, et fílii Zebedǽi et álii ex discípulis ejus duo. Dicit
              eis Simon Petrus: Vado piscári. Dicunt ei: Venímus et nos tecum.
              Et exiérunt et ascendérunt in navim: et illa nocte nihil
              prendidérunt. Mane autem facto, stetit Jesus in lítore: non tamen
              cognovérunt discípuli, quia Jesus est. Dixit ergo eis Jesus:
              Púeri, numquid pulmentárium habétis? Respondérunt ei: Non. Dicit
              eis: Míttite in déxteram navígii rete, et inveniétis. Misérunt
              ergo: et jam non valébant illud tráhere præ multitúdine píscium.
              Dixit ergo discípulus ille, quem diligébat Jesus, Petro: Dóminus
              est. Simon Petrus cum audísset, quia Dóminus est, túnica succínxit
              se (erat enim nudus), et misit se in mare. Alii autem discípuli
              navígio venérunt (non enim longe erant a terra, sed quasi cúbitis
              ducéntis), trahéntes rete píscium. Ut ergo descendérunt in terram,
              vidérunt prunas pósitas, et piscem superpósitum, et panem. Dicit
              eis Jesus: Afférte de píscibus, quos prendidístis nunc. Ascéndit
              Simon Petrus, et traxit rete in terram, plenum magnis píscibus
              centum quinquagínta tribus. Et cum tanti essent, non est scissum
              rete. Dicit eis Jesus: Veníte, prandéte. Et nemo audébat
              discumbéntium interrogáre eum: Tu quis es? sciéntes, quia Dóminus
              est. Et venit Jesus, et áccipit panem, et dat eis, et piscem
              simíliter. Hoc jam tértio manifestátus est Jesus discípulis suis,
              cum resurrexísset a mórtuis.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, Jesus apareceu novamente aos discípulos, junto do
              mar de Tiberíades. Manifestou-se assim: estavam juntos
              Simão-Pedro, Tomé, chamado o Dídimo, Natánael, que era de Caná de
              Galileia, os filhos de Zebedeu e dois outros discípulos. Então
              Simão-Pedro disse: «Eu vou pescar». Eles disseram: «Também iremos
              convosco». Saíram, então, e subiram para uma barca. Porém, durante
              toda a noite nada pescaram. Sendo já de manhã, Jesus apareceu na
              praia, mas os discípulos O não conheceram. Então Jesus disse-lhes:
              «Filhos, tendes alguma coisa para comer?». Responderam-Lhe: «Não».
              Ele disse-lhes: «Lançai a rede à direita da barca e achareis
              peixes». Lançaram-na eles, e já não podiam recolhê-la, tanta era a
              quantidade de peixes que continha. Então o discípulo, que Jesus
              preferia, disse a Pedro: «É o Senhor!». Simão-Pedro, ouvindo que
              era o Senhor, cingiu-se com a túnica (pois estava nu) e lançou-se
              ao mar. E os outros discípulos vieram com a barca (pois estavam um
              pouco afastados da terra, cerca de duzentos côvados), conduzindo a
              rede com os peixes. Logo que desceram para a terra, viram as
              brasas acesas, um peixe em cima delas e pão. E Jesus disse-lhes:
              «Dai-me desses peixes que pescastes agora». Subiu Pedro para a
              barca, puxou a rede para terra e tirou cento e cinquenta e três
              peixes grandes; e, sendo tantos, a rede se não rompeu! Disse-lhes,
              então, Jesus: «Vinde e comei». E nenhum dos discípulos presentes
              ousava perguntar-Lhe: «Quem sois?» (pois sabiam que era o Senhor).
              E Jesus aproximou-se, tomou o pão e deu-lhes dele; e o mesmo fez
              quanto ao peixe. Era esta já a terceira vez que Jesus aparecia a
              seus discípulos, após a ressurreição dos mortos.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 77, 23-25</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Portas cœli apéruit Dóminus: et pluit illis manna, ut éderent:
              panem cœli dedit eis: panem Angelórum manducávit homo, allelúja.
            </Text>
            <Text className="text-base vernacular">
              O Senhor abriu as portas do céu e fez chover maná para alimentar o
              seu povo: deu-lhes o pão do céu: o homem comeu o pão dos Anjos,
              aleluia.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacrifícia, Dómine, paschálibus gáudiis immolámus: quibus Ecclésia
              tua mirabíliter et páscitur et nutrítur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              No meio das alegrias pascais imolamos, Senhor, este sacrifício,
              que é para a vossa Igreja o alimento admirável de que se nutre e
              sustenta. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Rm. 6, 9</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Christus resúrgens ex mórtuis jam non móritur, allelúja: mors illi
              ultra non dominábitur, allelúja, allelúja.
            </Text>
            <Text className="text-base vernacular">
              Cristo, ressuscitado, já não torna a morrer, aleluia: a morte
              nunca mais terá poder sobre Ele, aleluia, aleluia.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ab omni nos, quǽsumus, Dómine, vetustáte purgátos: sacraménti tui
              veneránda percéptio in novam tránsferat creatúram: Qui vivis et
              regnas...
            </Text>
            <Text className="text-base vernacular">
              Senhor, dignai-Vos purificar-nos de todos os restos do «homem
              velho», e permiti que a sagrada recepção deste sacramento nos
              torne criaturas novas. Vós, que, sendo Deus, viveis e reinais...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
