import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1123() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Clemente, Papa e Mártir, a 23 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Is. 59, 21; 56, 7</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dicit Dóminus: Sermónes mei, quos dedi in os tuum, non defícient
              de ore tuo: et múnera tua accépta erunt super altáre meum.{" "}
              <Text className="text-base latin">Ps. 111, 1</Text> Beátus vir,
              qui timet Dóminum: in mandátis ejus cupit nimis. ℣. Gloria
              Patri...
            </Text>
            <Text className="text-base vernacular">
              Disse o Senhor: Minhas palavras, que pus na vossa boca, não
              cessarão de estar nos vossos lábios; e então os dons, que
              apresentardes nos meus altares, ser-me-ão agradáveis.{" "}
              <Text className="text-base vernacular">Sl. 111, 1</Text>{" "}
              Bem-aventurado o varão que teme o Senhor: e cujo zelo é ardente no
              cumprimento dos seus mandamentos. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Fl. 3, 17-21; 4, 1-3</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Philippenses.
            </Text>
            <Text className="text-base vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Filipenses.
            </Text>
            <Text className="text-base latin">
              Fratres: Imitatóres mei estóte, et observáte eos, qui ita
              ámbulant, sicut habétis formam nostram. Multi enim ámbulant, quos
              sæpe dicébam vobis (nunc autem et flens dico) inimícos Crucis
              Christi: quorum finis intéritus: quorum Deus venter est: et glória
              in confusióne ipsórum, qui terréna sápiunt. Nostra autem
              conversátio in cœlis est: unde étiam Salvatórem exspectámus,
              Dóminum nostrum Jesum Christum, qui reformábit corpus humilitátis
              nostræ, configurátum córpori claritátis suæ, secúndum operatiónem,
              qua étiam possit subjícere sibi ómnia. Itaque, fratres mei
              caríssimi et desideratíssimi, gáudium meum et coróna mea: sic
              state in Dómino, caríssimi. Evódiam rogo et Sýntychen déprecor
              idípsum sápere in Dómino. Etiam rogo et te, germáne compar, ádjuva
              illas, quæ mecum laboravérunt in Evangélio cum Cleménte et céteris
              adjutóribus meis, quorum nómina sunt in libro vitæ.
            </Text>
            <Text className="text-base vernacular">
              Meus irmãos: Sede meus imitadores e segui aqueles que se conduzem
              segundo o modelo que tendes em nós, porque há muitos, de quem vos
              tenho falado (e ainda falo deles com lágrimas), que se portam como
              inimigos da Cruz de Cristo. Seu fim será a condenação; pois fazem
              do estômago o seu Deus, põem a sua glória naquilo que deveria ser
              motivo de vergonha e não têm prazer senão nas coisas terrenas.
              Mas, quanto a nós, o nosso pensamento está nos céus, donde também
              esperamos o Salvador, nosso Senhor Jesus Cristo, que renovará o
              nosso corpo vil, tornando-o semelhante ao seu corpo glorioso, por
              meio daquela virtude que Ele possui de sujeitar a si todas as
              coisas. Portanto, queridos e amados irmãos, que sois a minha
              alegria e a minha coroa, permanecei firmes no Senhor, meus
              caríssimos irmãos. Peço a Evódia e suplico a Sintiquene que tenham
              os mesmos sentimentos no Senhor. Também vos rogo, ó fiel
              companheiro, que auxilieis aqueles que trabalharam comigo pelo
              Evangelho com Clemente e com os outros meus coadjutores, cujos
              nomes estão escritos no livro da vida.
            </Text>
          </View>

          <Text className="h2">Comemoração de Santa Felicidade</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsta, quǽsumus, omnípotens Deus: ut, beátæ Felicitátis Martyris
              tuæ sollémnia recenséntes, méritis ipsíus protegámur et précibus.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, ó Deus omnipotente, Vos suplicamos, que, celebrando
              nós a solenidade da B. Felicidade, vossa Mártir, sejamos
              protegidos pelos seus méritos e preces. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Vota pópuli tui, Dómine, propitiátus inténde: et, cujus nos
              tríbuis sollémnia celebráre, fac gaudére suffrágiis. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aceitai propício, Senhor, os votos do vosso povo e fazei-nos gozar
              o efeito dos sufrágios daquela cuja festa nos permitis celebrar.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súpplices te rogámus, omnípotens Deus: ut, intercedéntibus Sanctis
              tuis, et tua in nobis dona multíplices, et témpora nostra
              dispónas. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, humildemente Vos suplicamos, pela intercessão
              dos vossos Santos, que multipliqueis sobre nós os vossos
              benefícios e governeis os dias da nossa vida. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
