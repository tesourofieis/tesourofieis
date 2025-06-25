import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0126() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Policarpo, B. e Márt., a 26 de Janeiro</Text>

          <Text className="comment">
            S. Policarpo foi discípulo de S. João, que o revestiu da plenitude
            do sacerdócio (Intr.) e nomeou Bispo de Esmirna. Em carta escrita
            aos Filipenses, ele cita a primeira epístola de seu Mestre, da qual
            a liturgia nos faz ler hoje a passagem. «Aquele que, declara ele
            após S. João, não confessa ter vindo o Cristo na carne, é um
            anticristo». Ele, pois, reivindica para Jesus a realidade de seu
            título de Filho de Deus, contra os hereges de seu tempo que
            afirmavam ser a Encarnação do Verbo apenas aparente. Um dia,
            perguntando o herege Marcião se o conhecia, o santo Bispo respondeu:
            «que o conhecia como sendo o primogénito de Satanás». A Epístola de
            hoje estabelece o meio de distinguir «os filhos de Deus daqueles que
            são filhos do diabo». Aqueles que, à semelhança de Cristo, amam os
            irmãos e, como Ele dão, a vida por eles, são de Deus. Assim fará S.
            Policarpo. Vítima da perseguição sob o imperador na idade de 86
            anos, no ano de 166. Imitando a Policarpo, procuremos colher muitos
            frutos (significado do nome Policarpo) amando ao próximo por amor a
            Jesus.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/12confessorespontifices2"
            >
              Missa Sacerdótes tui
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Epístola</Text>

          <Text className="em">1 Jo. 3, 10-16</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Joánnis Apóstoli.
            </Text>
            <Text className="vernacular">
              Lição da Ep.ª do B. Ap.º S. João.
            </Text>
            <Text className="latin">
              Caríssimi: Omnis qui non est justus, non est ex Deo, et qui non
              díligit fratrem suum: quóniam hæc est annuntiátio, quam audístis
              ab inítio, ut diligátis altérutrum. Non sicut Cain, qui ex malígno
              erat, et occídit fratrem suum. Et propter quid occídit eum?
              Quóniam ópera ejus malígna erant: fratris autem ejus justa. Nolíte
              mirári fratres, si odit vos mundus. Nos scimus quóniam transláti
              sumus de morte ad vitam, quóniam dilígimus fratres. Qui non
              díligit, manet in morte: omnis qui odit fratrem suum, homicída
              est. Et scitis, quóniam omnis homicída non habet vitam ætérnam in
              semetípso manéntem. In hoc cognóvimus caritátem Dei, quóniam ille
              ánimam suam pro nobis pósuit: et nos debémus pro frátribus ánimas
              pónere.
            </Text>
            <Text className="vernacular">
              Caríssimos: Aquele que não é justo e não ama seu irmão não é de
              Deus. Porque esta é a recomendação que ouvistes desde o princípio:
              «Que vos ameis uns aos outros». Não seja, porém, como Caim, que
              era maligno o qual matou o seu irmão. E porque o matou ele? Porque
              as suas obras eram más, enquanto que as do seu irmão eram justas.
              Não vos admireis, irmãos, se o mundo vos odeia; porquanto sabemos
              que passamos da morte à vida, porque amamos os nossos irmãos.
              Aquele que não ama permanece na morte. Aquele que odeia o seu
              irmão é um homicida. E vós sabeis que o homicida não tem a vida
              eterna, permanecendo em si. Nisto conhecemos o amor de Deus:
              porquanto Ele deu sua vida por nós; e nós devemos também dar a
              nossa vida por nossos irmãos.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/5martirnaopontifice2#evangelho"
            title="Mártir não Pontífice - Missa Lætábitur justus"
          />

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus
              noster: ut, cujus exséquimur cultum, intercedénte beáto Polycárpo
              Mártyre tuo atque Pontífice, sentiámus efféctum. Per Dóminum
              nostrum...
            </Text>
            <Text className="vernacular">
              Fortalecidos com a participação deste dom sacratíssimo, Vos
              suplicamos, Senhor, nosso Deus, que, por intercessão do B.
              Policarpo, vosso Mártir e Pontífice, sintamos o efeito do mystério
              que celebrámos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
