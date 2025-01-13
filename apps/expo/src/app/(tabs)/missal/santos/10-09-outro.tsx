import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1009Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Dionísio e Outros, Mártires, a 9 de Outubro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui hodiérna die beátum Dionýsium, Mártyrem tuum atque
              Pontíficem, virtúte constantiæ in passióne roborásti, quique illi,
              ad prædicándum géntibus glóriam tuam, Rústicum et Eleuthérium
              sociáre dignátus es: tríbue nobis, quǽsumus; eórum imitatióne, pro
              amóre tuo próspera mundi despícere, et nulla ejus advérsa
              formidáre. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que neste dia fortalecestes o B. Dionísio, vosso Mártir e
              Pontífice, com a virtude da constância no martírio e que Vos
              dignastes associar-lhe Rústico e Eleutério para pregarem a vossa
              glória aos povos, concedei-nos, Vos suplicamos, que, seguindo os
              seus exemplos, desprezemos por vosso amor as prosperidades do
              mundo e nunca temamos as adversidades. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 17, 22-34</Text>

          <View className="side-by-side">
            <Text className="text-base latin">Léctio Actuum Apostolorum.</Text>
            <Text className="text-base vernacular">
              Lição dos Actos dos Apóstolos
            </Text>
            <Text className="text-base latin">
              In diébus illis: Stans Paulus in médio Areopági, ait: Viri
              Atheniénses, per ómnia quasi superstitiosióres vos vídeo.
              Prætériens enim et videns simulácra vestra, invéni et aram, in qua
              scriptum erat: Ignóto Deo. Quod ergo ignorántes cólitis, hoc ego
              annúntio vobis. Deus, qui fecit mundum et ómnia, quæ in eo sunt,
              hic cœli et terræ cum sit Dóminus, non in manufáctis templis
              hábitat, nec mánibus humánis cólitur índigens áliquo, cum ipse det
              ómnibus vitam et inspiratiónem et ómnia: fecítque ex uno omne
              genus hóminum inhabitáre super univérsam fáciem terræ, defíniens
              statúta témpora et términos habitatiónis eórum, quærere Deum, si
              forte attréctent eum aut invéniant, quamvis non longe sit ab
              unoquóque nostrum. In ipso enim vívimus et movémur et sumus: sicut
              et quidam vestrórum poëtárum dixérunt: Ipsíus enim et genus sumus.
              Genus ergo cum simus Dei, non debémus æstimáre auro aut argénto
              aut lápidi, sculptúræ artis et cogitatiónis hóminis Divínum esse
              símile. Et témpora quidem hujus ignorántia despíciens Deus, nunc
              annúntiat homínibus, ut omnes úbique pœniténtiam agant, eo quod
              státuit diem, in quo judicatúrus est orbem in æquitáte, in viro,
              in quo státuit, fidem præbens ómnibus, súscitans eum a mórtuis.
              Cum audíssent autem resurrectiónem mortuórum, quidam quidem
              irridébant, quidam vero dixérunt: Audiámus te de hoc íterum. Sic
              Paulus exívit de médio eórum. Quidam vero viri adhæréntes ei,
              credidérunt: in quibus et Dionýsius Areopagíta, et múlier nómine
              Dámaris, et álii cum eis.
            </Text>
            <Text className="text-base vernacular">
              Naqueles dias, estando Paulo no meio do Aerópago, disse: «Varões
              atenienses, vejo que em todas as coisas sois como os mais
              religiosos; porquanto, passando eu e vendo as estátuas dos vossos
              deuses, até encontrei um altar com esta inscrição»: «Ao Deus
              desconhecido». Ora o Deus que adorais sem conhecer é Aquele que
              venho anunviar-vos: Ele, o Deus que criou o mundo e tudo quanto
              existe; e, sendo o Senhor do céu e da terra, contudo não habita
              nos templos construídos pelos homens, nem é honrado pelas obras
              humanas, como se tivesse necessidade de alguém; pois Ele a todos
              dá a vida, a respiração e tudo o mais. Ele fez nascer dum só homem
              todo o género humano e deu-lhe para habitação toda a terra,
              marcando a ordem dos tempos e os limites da sua duração, a fim de
              que os mesmos homens procurem Deus (se porventura O podem
              encontrar), ainda que Ele não está longe de cada um de nós. É
              n'Ele que vivemos, nos movemos e existimos, como disseram alguns
              dos vossos poetas: «Nós somos da mesma raça de Deus». E, visto que
              «somos da mesma raça de Deus», não devemos acreditar que a
              divindade é semelhante ao ouro, ou à prata, ou à pedra, ou à pedra
              esculpida pela arte e pela indústria do homem. Ora, Deus,
              desprezando estes tempos de ignorância, anuncia agora, a todos os
              homens e em todos os lugares, que devem fazer penitência; pois
              destinou um dia em que deverá julgar o mundo, segundo a justiça,
              por Aquele que instituiu juiz e do qual deu a todos uma prova
              certa, ressuscitando-O dos mortos». Quando eles (os Atenienses)
              ouviram falar em ressurreição dos mortos, uns escarneceram e
              outros disseram: «Noutra vez te ouviremos sobre esse assunto». E
              assim Paulo retirou-se desta assembleia. Todavia alguns dos
              ouvintes agregaram-se a ele e acreditaram, entre os quais
              Dionísio, o Areopagita, uma mulher chamada Dámaris e com estes
              ainda outros.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/8muitosmartires3#evangelho"
            title="Muitos Mártires - Missa Salus autem"
          />

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Obláta tibi, Dómine, múnera pópuli tui, pro tuórum honóre
              Sanctórum, súscipe propítius, quǽsumus: et eórum nos intercessióne
              sanctífica. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebei propício, Senhor, Vos rogamos, os dons que o vosso povo
              apresenta em honra dos vossos Santos; e pela sua intercessão
              santificai-nos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sumptis, Dómine, sacraméntis, quǽsumus: ut, intercedéntibus beátis
              Martýribus tuis Dionýsio, Rústico et Eleuthério, ad redemptiónis
              ætérnæ proficiamus augméntum. Per Dóminum nostrum Jesum Christum,
              Fílium tuum: Qui tecum vivit et regnat...
            </Text>
            <Text className="text-base vernacular">
              Havendo nós recebido estes sacramentos, Senhor, Vos suplicamos,
              dignai-Vos permitir que por intercessão dos vossos B. B. Mártires
              Dionísio, Rústico e Eleutério cada vez mais avancemos no caminho
              da redenção eterna. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
