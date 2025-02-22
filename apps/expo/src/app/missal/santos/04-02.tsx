import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0402() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Francisco de Paula, Conf., a 2 de Abril</Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, humílium celsitúdo, qui beátum Francíscum Confessórem
              Sanctórum tuórum glória sublimásti: tríbue, quǽsumus; ut, ejus
              méritis et imitatióne, promíssa humílibus prǽmia felíciter
              consequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, grandeza dos humildes, que coroastes com a glória dos
              vossos Santos o B. Francisco, Confessor, concedei-nos, pelos seus
              méritos e pela imitação das suas virtudes, Vos suplicamos, a
              felicidade de conseguirmos as recompensas prometidas aos humildes.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Fl. 3, 7-12</Text>

          <View className="side-by-side">
            <Text className="latin">
              Léctio Epistola; beáti Pauli Apóstoli ad Philippénses.
            </Text>
            <Text className="vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Filipenses.
            </Text>
            <Text className="latin">
              Fratres: Quæ mihi fuérunt lucra, hæc arbitrátus sum propter
              Christum detriménta. Verúmtamen exístimo ómnia detriméntum esse
              propter eminéntem sciéntiam Jesu Christi, Dómini mei: propter quem
              ómnia detriméntum feci et arbitror ut stércora, ut Christum
              lucrifáciam, et invéniar in illo, non habens meam justítiam, quæ
              ex lege est, sed illam, quæ ex fide est Christi Jesu: quæ ex Deo
              est justítia in fide, ad cognoscéndum illum, et virtútem
              resurrectiónis ejus, et societátem passiónum illíus: configurátus
              morti ejus: si quo modo occúrram ad resurrectiónem, quæ est ex
              mórtuis: non quod jam accéperim aut jam perféctus sim: sequor
              autem, si quo modo comprehéndam, inquo et comprehénsus sum a
              Christo Jesu.
            </Text>
            <Text className="vernacular">
              Meus irmãos: As coisas que considerava ganho tive-as depois como
              perda, meditando em Cristo. E, na verdade, considero tudo como
              perda, pelo melhor conhecimento que tenho de Jesus Cristo, meu
              Senhor, por amor de quem renunciei a todas as coisas,
              considerando-as como poeira, a fim de que ganhe Cristo e me
              encontre com Ele, não com a minha própria justiça (a que vem da
              Lei) mas com aquela que nasce da fé em Jesus Cristo (a justiça que
              vem de Deus pela fé), para que o conheça a Ele, assim como ao
              mystério da sua Ressurreição e tome parte nos seus sofrimentos,
              havendo-me conformado com sua morte, a fim de que de algum modo
              possa conseguir a ressurreição dos mortos. Não que eu tenha
              alcançado o prémio ou me haja tornado já perfeito; mas prossigo no
              meu caminho para ver se alcanço o destino para que fui
              predestinado por Jesus Cristo.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Hæc dona devótæ plebis, Dómine, quibus tua cumulámus altária,
              beáti Francísci méritis tibi grata nobísque salutária, te
              miseránte, reddántur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que estes dons do vosso povo, que depositamos nos vossos altares,
              se tornem agradáveis a Vós, Senhor, e salutares para nós por
              intercessão dos méritos do B. Francisco, e por efeito da vossa
              misericórdia. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 19, 28 & 29</Text>

          <View className="side-by-side">
            <Text className="latin">
              Amen, dico vobis: quod vos, qui reliquístis ómnia et secúti estis
              me, céntuplum accipiétis, et vitam ætérnam possidébitis. (T.P.
              Allelúja.)
            </Text>
            <Text className="vernacular">
              Em verdade vos digo: «Vós, que abandonastes tudo e me seguistes,
              recebereis o cêntuplo e possuireis a vida eterna». (T.P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Sumpta, Dómine, sacraménta cœléstia: beáto Francísco Confessóre
              tuo intercedénte, precámur; ut et temporális vitæ subsídia nobis
              cónferant et ætérnæ. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, permiti que os celestiais sacramentos, que
              acabámos de receber, nos consigam, pela intercessão do B.
              Francisco, vosso Confessor, auxílios para a vida presente e para a
              eterna. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
