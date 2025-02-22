import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function PageQuad21() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Segunda-feira da 2.ª Semana da Quaresma</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 25, 11-12</Text>

          <View className="side-by-side">
            <Text className="latin">
              Rédime me, Dómine, et miserére mei: pes enim meus stetit in via
              recta: in ecclésiis benedícam Dóminum.{" "}
              <Text className="latin">Ps. ibid., 1</Text> Júdica me, Dómine,
              quóniam ego in innocéntia mea ingréssus sum: et in Dómino sperans,
              non infirmábor.<Text className="versicle"> ℣. </Text>Gloria
              Patri...
            </Text>
            <Text className="vernacular">
              Resgatai-me, Senhor, e tende piedade de mim; pois os meus pés
              estão no caminho direito: bendirei o Senhor nas assembleias.{" "}
              <Text className="vernacular">Sl. ibid., 1</Text> Fazei-me justiça,
              Senhor, porque procedi com inocência; e confiei no Senhor, sem
              nunca vacilar.<Text className="versicle"> ℣. </Text>Glória ao
              Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Præsta, quǽsumus, omnípotens Deus: ut fámilia tua, quæ se,
              affligéndo carnem, ab aliméntis ábstinet: sectándo justítiam, a
              culpa jejúnet. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente, Vos suplicamos, fazei que os vossos fiéis, que
              para mortificação da carne se privam dos alimentos, se abstenham
              também do pecado, praticando a justiça. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Dn. 9, 15-19</Text>

          <View className="side-by-side">
            <Text className="latin">Léctio Daniélis Prophétæ.</Text>
            <Text className="vernacular">Lição do Profeta Daniel.</Text>
            <Text className="latin">
              In diébus illis: Orávit Dániel Dóminum, dicens: Dómine, Deus
              noster, qui eduxísti pópulum tuum de terra Ægýpti in manu forti,
              et fecísti tibi nomen secúndum diem hanc; peccávimus, iniquitátem
              fécimus, Dómine, in omnem justítiam tuam: avertátur, óbsecro, ira
              tua et furor tuus a civitáte tua Jerúsalem et monte sancto tuo.
              Propter peccáta enim nostra et iniquitátes patrum nostrórum.
              Jerúsalem et pópulus tuus in oppróbrium sunt ómnibus per circúitum
              nostrum. Nunc ergo exáudi, Deus noster, oratiónem servi tui et
              preces ejus: et osténde fáciem tuam super sanctuárium tuum, quod
              desértum est, propter temetípsum. Inclína, Deus meus, aurem tuam,
              et audi: áperi óculos tuos, et vide desolatiónem nostram et
              civitátem, super quam invocátum est nomen tuum: neque enim in
              justificatiónibus nostris prostérnimus preces ante fáciem tuam,
              sed in miseratiónibus tuis multis. Exáudi, Dómine, placáre,
              Dómine: atténde et fac: ne moréris propter temetípsum, Deus meus:
              quia nomen tuum invocátum est super civitátem et super pópulum
              tuum, Dómine, Deus noster.
            </Text>
            <Text className="vernacular">
              Naqueles dias, Daniel dirigiu ao Senhor esta oração: «Senhor,
              nosso Deus, que tirastes o vosso povo da terra do Egipto com vossa
              mão omnipotente, pelo que adquiristes uma glória que permaneceu
              até hoje: nós pecámos, Senhor; cometemos iniquidades contra a
              vossa lei! Afastai, pois, Senhor, a vossa ira e indignação da
              vossa cidade de Jerusalém, do vosso monte sagrado; pois é por
              causa dos nossos pecados e das iniquidades de nossos pais que
              Jerusalém e o vosso povo vivem no opróbrio, diante de todas as
              nações que nos rodeiam. Então, agora, ó nosso Deus, ouvi a oração
              e as preces do vosso servo; mostrai a vossa face no santuário, que
              está abandonado; fazei isto pela vossa própria glória! Inclinai,
              meu Deus, os vossos ouvidos e escutai-nos. Abri os olhos e vede a
              nossa desolação e a desolação da cidade, que possui o vosso nome.
              Não é confiados na nossa justiça que depomos a vossos pés as
              nossas súplicas, mas sim com o pensamento na vossa profunda
              misericórdia. Ouvi-nos, Senhor! Deixai-Vos aplacar, Senhor!
              Atendei-nos, Senhor! Perdoai-nos, Senhor! Fazei o que Vos pedimos!
              Não tardeis, por causa da honra do vosso nome, ó meu Deus; pois
              esta cidade e este povo, que Vos pertencem, têm a honra de usar o
              vosso nome, ó Senhor, nosso Deus»!
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 69, 6 & 3</Text>

          <View className="side-by-side">
            <Text className="latin">
              Adjútor meus et liberátor meus esto: Dómine, ne tardáveris.
              <Text className="versicle"> ℣. </Text>
              Confundántur et revereántur inimíci mei, qui quærunt ánimam meam.
            </Text>
            <Text className="vernacular">
              Sede o meu auxiliar e o meu libertador! Senhor, não tardeis!
              <Text className="versicle"> ℣. </Text>
              Que sejam confundidos e envergonhados os meus inimigos, que
              procuram tirar-me a vida.
            </Text>
          </View>

          <Text className="h3">Trato</Text>

          <LinkCard
            href="/missal/pre-quaresma/quadp3-3#trato"
            title="Trato Quarta-feira de Cinzas"
          />

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 8, 21-29</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Joánnem.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. João.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus turbis Judæórum: Ego vado, et
              quærétis me, et in peccáto vestro moriémini. Quo ego vado, vos non
              potéstis veníre. Dicébant ergo Judǽi: Numquid interfíciet
              semetípsum, quia dixit: Quo ego vado, vos non potéstis veníre? Et
              dicébat eis: Vos de deórsum estis, ego de supérnis sum. Vos de
              mundo hoc estis, ego non sum de hoc mundo. Dixi ergo vobis, quia
              moriémini in peccátis vestris: si enim non credidéritis, quia ego
              sum, moriémini in peccáto vestro. Dicébant ergo ei: Tu quis es?
              Dixit eis Jesus: Princípium, qui et loquor vobis. Multa habeo de
              vobis loqui et judicáre. Sed qui me misit, verax est: et ego quæ
              audívi ab eo, hæc loquor in mundo. Et non cognovérunt, quia Patrem
              ejus dicébat Deum. Dixit ergo eis Jesus: Cum exaltavéritis Fílium
              hóminis, tunc cognoscétis quia ego sum, et a meípso fácio nihil:
              sed, sicut dócuit me Pater, hæc loquor: et qui me misit, mecum
              est, et non relíquit me solum: quia ego, quæ plácita sunt ei,
              fácio semper.
            </Text>
            <Text className="vernacular">
              Naquele tempo, Jesus disse às turbas dos judeus: «Eu vou;
              procurar-me-eis e morrereis no vosso pecado. Aonde eu vou não
              podereis vós ir». Diziam, então, os judeus: «Porventura matar-se-á
              Ele a si mesmo? Pois diz: «Aonde eu vou não podereis vós ir?». Ele
              disse-lhes: «Vós sois debaixo e Eu sou do alto. Vós sois do mundo
              e Eu não sou deste mundo. Eu vos digo, pois: morrereis no vosso
              pecado porque, se não acreditardes quem Eu sou, morrereis no vosso
              pecado». Diziam-lhe, então: «Quem sois Vós?». Jesus
              respondeu-lhes: «Eu, que vos falo, sou o princípio. Muitas coisas
              tenho de que deva censurar-vos e condenar-vos; mas Aquele que me
              enviou é verdadeiro, e o que Eu digo ao mundo com Ele o aprendi».
              Porém, eles não compreenderam que Ele com estas palavras queria
              dizer que Deus era seu Pai. Disse-lhes, portanto, Jesus: «Quando
              levantardes da terra o Filho do homem, então conhecereis quem Eu
              sou; assim como que não faço nada de mim próprio e que o que digo
              foi meu Pai quem me ensinou. Aquele que me enviou está comigo, e
              não me deixa só, porquanto faço sempre o que Lhe agrada».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 15, 7 & 8</Text>

          <View className="side-by-side">
            <Text className="latin">
              Benedícam Dóminum, qui tríbuit mihi intelléctum: providébam
              Dóminum in conspéctu meo semper: quóniam a dextris est mihi, ne
              commóvear.
            </Text>
            <Text className="vernacular">
              Bendirei o Senhor, que me deu inteligência; tenho os meus olhos
              voltados continuamente para o Senhor; não vacilarei, porque Ele
              está à minha direita.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Hæc hóstia, Dómine, placatiónis et laudis, tua nos protectióne
              dignos effíciat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que esta hóstia de propiciação e de louvor, Senhor, nos torne
              dignos da vossa protecção. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 8, 2</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa
              terra!
            </Text>
            <Text className="vernacular">
              Senhor, nosso Deus, quão admirável é o vosso nome em toda a terra!
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Hæc nos commúnio, Dómine, purget a crímine: et cœléstis remédii
              fáciat esse consórtes. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que esta comunhão, Senhor, nos purifique de nossos crimes e nos
              faça participantes dos remédios celestiais. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Oração sobre o povo</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">Humiliáte cápita vestra Deo.</Text>
            <Text className="vernacular">
              Inclinai as vossas cabeças diante de Deus.
            </Text>
            <Text className="latin">
              Adésto supplicatiónibus nostris, omnípotens Deus: et, quibus
              fidúciam sperándæ pietátis indúlges; consuétæ misericórdiæ tríbue
              benígnus efféctum. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Sede atento às nossas súplicas, ó Deus omnipotente; e permiti
              benignamente que aqueles que de Vós mereceram a doce confiança de
              lhes revelardes que podiam ter esperança na vossa bondade alcancem
              os efeitos da vossa habitual misericórdia. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
