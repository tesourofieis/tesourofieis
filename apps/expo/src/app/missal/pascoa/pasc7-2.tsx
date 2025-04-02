import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function PagePasc72() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Terça-feira de Pentecostes</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">4 Esd. 2, 36 & 37</Text>

          <Language>
            <Text className="latin">
              Accípite jucunditátem glóriæ vestræ, allelúja: grátias agéntes
              Deo, allelúja: qui vos ad cœléstia regna vocávit, allelúja,
              allelúja, allelúja. <Text className="latin">Ps. 77, 1</Text>{" "}
              Atténdite, pópule meus, legem meam: inclináte aurem vestram in
              verba oris mei.<Text className="versicle"> ℣. </Text>Gloria
              Patri...
            </Text>
            <Text className="vernacular">
              Recebei com alegria as delícias da vossa glória, aleluia: dai
              graças a Deus, aleluia: que vos chamou aos reinos celestiais,
              aleluia, aleluia. <Text className="vernacular">Sl. 77, 1</Text>{" "}
              Escutai a minha lei, ó meu povo: escutai as palavras que saem da
              minha boca.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Adsit nobis, quǽsumus, Dómine, virtus Spíritus Sancti: quæ et
              corda nostra cleménter expúrget, et ab ómnibus tueátur advérsis.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, fazei que a virtude do Espírito Santo nos
              assista; e que pela sua clemência purifique os nossos corações e
              nos defenda de todas as adversidades. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 8, 14-17</Text>

          <Language>
            <Text className="latin">Léctio Actuum Apostolórum.</Text>
            <Text className="vernacular">Lição dos Actos dos Apóstolos.</Text>
            <Text className="latin">
              In diébus illis: Cum audíssent Apóstoli, qui erant Jerosólymis,
              quod recepísset Samaría verbum Dei, misérunt ad eos Petrum et
              Joánnem. Qui cum veníssent, oravérunt pro ipsis, ut accíperent
              Spíritum Sanctum: nondum enim in quemquam illórum vénerat, sed
              baptizáti tantum erant in nómine Dómini Jesu. Tunc imponébant
              manus super illos, et accipiébant Spíritum Sanctum.
            </Text>
            <Text className="vernacular">
              Naqueles dias, quando os Apóstolos estavam em Jerusalém, souberam
              que a Samaria recebera a palavra de Deus; e por isso enviaram para
              lá Pedro e João, os quais, logo que chegaram, oraram por eles,
              para que recebessem o Espírito Santo, que não havia ainda descido
              sobre nenhum deles, pois somente haviam sido baptizados no nome do
              Senhor Jesus. Então impuseram-lhes as mãos, recebendo o Espírito
              Santo.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Joann. 14, 26</Text> Spíritus Sanctus
              docébit vos, quæcúmque díxero vobis. Allelúja.{" "}
              <Text className="em">(hic genuflectitur)</Text>
              <Text className="versicle"> ℣. </Text>Veni, Sancte Spíritus, reple
              tuórum corda fidélium: et tui amóris in eis ignem accénde.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Jo. 14, 26</Text> O Espírito Santo
              vos inspirará tudo o que vos tenho ensinado, aleluia.{" "}
              <Text className="em">(Genuflecte-se)</Text>
              <Text className="versicle"> ℣. </Text>Vinde, Espírito Santo,
              enchei os corações dos vossos fiéis e acendei neles o fogo do
              vosso amor.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 10, 1-10</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Joánnem.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. João.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus pharisǽis: Amen, amen, dico vobis:
              qui non intrat per óstium in ovíle óvium, sed ascéndit aliúnde,
              ille fur est et latro. Qui autem intrat per óstium, pastor est
              óvium. Huic ostiárius áperit, et oves vocem ejus áudiunt, et
              próprias oves vocat nominátim et e ducit eas. Et cum próprias oves
              emíserit, ante eas vadit: et oves illum sequúntur, quia sciunt
              vocem ejus. Aliénum autem non sequúntur, sed fúgiunt ab eo; quia
              non novérunt vocem alienórum. Hoc provérbium dixit eis Jesus. Illi
              autem non cognovérunt, quid loquerétur eis. Dixit ergo eis íterum
              Jesus: Amen, amen, dico vobis, quia ego sum óstium óvium. Omnes,
              quotquot venérunt, fures sunt et latrónes, et non audiérunt eos
              oves. Ego sum. óstium. Per me si quis introíerit, salvábitur: et
              ingrediétur et egrediátur et páscua invéniet. Fur non venit, nisi
              ut furétur et mactet et perdat. Ego veni, ut vitam hábeant et
              abundántius hábeant.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos fariseus: «Em verdade, em verdade
              vos digo: aquele que não entra pela porta no estábulo das ovelhas,
              mas entra por outro lugar, é ladrão e salteador. O pastor das
              ovelhas entra pela porta. A este abre o porteiro a porta e as
              ovelhas ouvem a sua voz. Ele chama as ovelhas pelos seus próprios
              nomes e fá-las sair. E, quando sai com elas, vai adiante e elas
              seguem-no, pois conhecem a sua voz. Mas não acompanharão um
              estranho; antes fugirão dele, porque não conhecem a voz dos
              estranhos». Jesus disse-lhes esta parábola, mas eles não
              compreenderam o seu sentido. E Jesus disse-lhes novamente: «Em
              verdade, em verdade vos digo: Eu sou a porta das ovelhas. Todos
              quantos vieram são ladrões e salteadores, por isso as minhas
              ovelhas os não ouviram. Eu sou a porta. Se alguém entrar por mim,
              será salvo: entrará e sairá e encontrará alimento. O ladrão não
              vem senão para devorar, roubar e destruir. Eu, porém, venho para
              que minhas ovelhas possuam a vida, e a possuam com abundância».
            </Text>
          </Language>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 77, 23-25</Text>

          <Language>
            <Text className="latin">
              Portas cœli aperuit Dóminus: et pluit illis manna, ut éderent:
              panem cœli dedit eis, panem Angelórum manducávit homo, allelúja.
            </Text>
            <Text className="vernacular">
              O Senhor abriu as portas do céu: fez chover maná, para que o
              comessem: e deu-lhes o pão do céu. O homem comeu o pão dos Anjos,
              aleluia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Puríficet nos, quǽsumus. Dómine, múneris præséntis oblátio: et
              dignos sacra participatióne effíciat. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, fazei que a oferta deste sacrifício nos
              purifique e nos torne dignos de participarmos deste mystério
              sagrado. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Jo. 15, 26; 16, 14; 17, 1 & 5</Text>

          <Language>
            <Text className="latin">
              Spíritus qui a Patre procédit, allelúja: ille me clarificábit,
              allelúja, allelúja.
            </Text>
            <Text className="vernacular">
              O Espírito, que procede do Pai, aleluia, glorificar-me-á, aleluia,
              aleluia.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Mentes nostras, quǽsumus, Dómine, Spíritus Sanctus divínis réparet
              sacraméntis: quia ipse est remíssio ómnium peccatórum. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, permiti que o Espírito Santo restaure com
              estes divinos sacramentos as nossas almas, pois Ele é a remissão
              de todos os pecados. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
