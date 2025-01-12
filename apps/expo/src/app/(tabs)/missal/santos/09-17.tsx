import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0917() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Imp. dos Estigmas em S. Francisco, a 17 de Setembro
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Gl. 6, 14</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Mihi autem absit gloriári, nisi in Cruce Dómini nostri Jesu
              Christi: per quem mihi mundus crucifíxus est, et ego mundo.{" "}
              <Text className="em">Ps. 141, 2</Text> Voce mea ad Dóminum
              clamávi: voce mea ad Dóminum deprecátus sum. ℣. Gloria Patri...
            </Text>
            <Text className="text-base">
              Nunca, porém, Deus permita que me glorie senão na Cruz de nosso
              Senhor Jesus Cristo, por quem o mundo está crucificado para mim,
              como eu o estou para o mundo!{" "}
              <Text className="em">Sl. 141, 2</Text> Elevei a minha voz ao
              Senhor: dirigi ao Senhor a minha voz suplicante! ℣. Glória ao
              Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Dómine Jesu Christe, qui, frigescénte mundo, ad inflammándum corda
              nostra tui amóris igne, in carne beatíssimi Francísci passiónis
              tuæ sacra Stígmata renovásti: concéde propítius; ut ejus méritis
              et précibus crucem júgiter ferámus, et dignos fructus pœniténtiæ
              faciámus: Qui vivis...
            </Text>
            <Text className="text-base">
              Senhor Jesus Cristo, que, quando a caridade resfriou no mundo,
              quisestes renovar os Sagrados Estigmas da vossa Paixão na carne do
              B. Francisco, para inflamar os nossos corações no fogo do vosso
              amor, concedei-nos, Vos suplicamos, que pelos seus méritos e
              preces abracemos continuamente a Cruz e pratiquemos dignos frutos
              de penitência. Ó Vós, que viveis e reinais...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Gl. 6, 14-18</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Léctio Epístolæ beáti Pauli Apóstoli ad Gálatas.
            </Text>
            <Text className="text-base">
              Lição da Ep.ª do B. Ap.º Paulo aos Gálatas.
            </Text>
            <Text className="text-base">
              Fratres: Mihi autem absit gloriári, nisi in Cruce Dómini nostri
              Jesu Christi: per quem mihi mundus crucifíxus est, et ego mundo.
              In Christo enim Jesu neque circumcísio áliquid valet neque
              præpútium, sed nova creatúra. Et quicúmque hanc régulam secúti
              fúerint, pax sin per illos et misericórdia, et super Israël Dei.
              De cetero nemo mihi moléstus sit: ego enim stígmata Dómini Jesu in
              córpore meo porto. Grátia Dómini nostri Jesu Christi cum spíritu
              vestro, fratres. Amen.
            </Text>
            <Text className="text-base">
              Meus irmãos: Nunca Deus permita que me glorie senão na Cruz de
              nosso Senhor Jesus Cristo, por quem o mundo está crucificado para
              mim, como eu o estou para o mundo! Na verdade, em Jesus Cristo não
              é a circuncisão ou a incircuncisão que valem alguma coisa, mas
              cada um ser uma criatura nova. Que todos aqueles que seguirem esta
              regra experimentem paz e consolação, e do mesmo modo os que são o
              Israel (o povo) de Deus. Que doravante ninguém me dê desgosto
              algum, pois trago no meu coração os Estigmas do Senhor Jesus. Que
              a graça de nosso Senhor Jesus Cristo, meus irmãos, seja com vosso
              espírito. Amen.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 36, 30-31</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
              ℣. Lex Dei ejus in corde ipsíus: et non supplantabúntur gressus
              ejus.
            </Text>
            <Text className="text-base">
              A boca do justo falará com sabedoria e a sua língua proclamará a
              justiça. ℣. A lei do seu Deus está sempre no seu coração e os seus
              pés não tropeçarão.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. Francíscus pauper et húmilis cœlum dives
              ingréditur, hymnis cœléstibus honorátur. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. Francisco, pobre e humilde, entra rico no
              céu: em sua honra ressoam hinos celestiais. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            title="Intróito Mártir Pontífice"
            href="/missal/comum/3martirpontifice#evangelho"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 88, 25</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Véritas mea et misericórdia mea cum ipso: et in nómine meo
              exaltábitur cornu ejus.
            </Text>
            <Text className="text-base">
              A minha fidelidade e a minha misericórdia estarão com ele; e por
              virtude do meu nome será exaltado o seu poder.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Múnera tibi, Dómine, dicata sanctífica: et, intercedénte beáto
              Francísco, ab omni nos culpárum labe purífica. Per Dóminum...
            </Text>
            <Text className="text-base">
              Santificai, Senhor, os dons que Vos são oferecidos, e pela
              intercessão do B. Francisco purificai-nos dos nossos pecados. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Lc. 12, 42</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Fidélis servus et prudens, quem constítuit dóminus super famíliam
              suam: ut det illis in témpore trítici mensúram.
            </Text>
            <Text className="text-base">
              Eis o servo fiel e prudente, destinado pelo Senhor para distribuir
              oportunamente a cada um na família a sua medida de trigo.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui mira Crucis mystéria in beáto Francísco Confessóre tuo
              multifórmiter demonstrásti: da nobis, quǽsumus; devotiónis suæ
              semper exémpla sectári, et assídua ejúsdem Crucis meditatióne
              muníri. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que sob múltiplas formas manifestastes na pessoa do B.
              Francisco, vosso Confessor, os admiráveis mystérios da Cruz,
              concedei-nos, Vos rogamos, que possamos sempre seguir os exemplos
              da sua devoção e confortar-nos com a contínua meditação desta
              mesma Cruz. Por nosso...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
