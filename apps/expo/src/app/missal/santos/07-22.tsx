import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0722() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santa Maria Madalena, a 22 de Julho</Text>

          <Text className="comment">
            Jesus, dando o Espírito Santo aos Apóstolos, lhes recomendára
            perdoar os pecados, como Ele o fizera, e a liturgia lembra hoje um
            exemplo celebre para sempre, da misericórdia do Salvador para com os
            que se arrependem. Maria, irmã de Marta e de Lázaro, era de Magdala,
            na Galileia, donde seu nome de Madalena. Era uma pecadora. Tocada
            pela graça, foi prostrar-se aos pés do Salvador, Simão, o Fariseu,
            escandalizado, tel-a-ia rejeitado como os soberbos designados pelo
            Profeta Isaías «que dizem: Retira-te de mim, não te aproximes, pois,
            sou puro». Jesus, ao contrário, «defende-a contra as calúnias dos
            orgulhosos» (Com.). Admirando a acção divina nessa alma «de ora em
            diante atenta a seus mandamentos, enquanto que os pecadores
            desejariam ainda faze-la cair no mal» (Intr.), «Ele acolhe com
            misericordia a oferta se seus serviços» (Secr.) e lhe garante, para
            todo o sempre, lugar de honra na sua corte real (Of.). O
            arrependimento transformou-lhe o amor. «Porque muito amou, seus
            numerosos pecados lhe são perdoados» (Ev.). A seu pedido, Jesus
            ressuscita Lázaro (Or.) e, quando depois da crucifixão do Salvador,
            a que assiste com profunda dor, ela procura, semelhante à esposa dos
            Cânticos (Ep.), onde colocaram o seu esposo divino; o Cristo chama-a
            pelo seu nome e encarrega-a de anunciar aos discípulos a sua
            Ressurreição, pelo que hoje se diz o Credo, como nas missas dos
            Apóstolos. A exemplo de Madalena que, no dizer dos Santos Padres,
            personifica a acção da Igreja para com Jesus, aproximemo-nos, em
            espírito de amor e de arrependimento, a fim de espalhar em torno de
            Jesus, presente na mesa sagrada, o tesouro dos nossos louvores
            (Secr.), cerquemo-lo no altar, com espírito de fé que não receia o
            escândalo farisaico, de todo o luxo conveniente à casa de Deus.
          </Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/comum/18virgensmartires2#intróito"
            title="Virgens Mártires - Missa Me exspectavérunt"
          />

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Beátæ Maríæ Magdalénæ, quǽsumus, Dómine, suffrágiis adjuvémur:
              cujus précibus exorátus, quatriduánum fratrem Lázarum vivum ab
              ínferis resuscitásti: Qui vivis...
            </Text>
            <Text className="vernacular">
              Que nós sejamos socorridos, ó Deus, Vos suplicamos, pela
              intercessão da B. Maria Madalena, cujas preces de Vós obtiveram a
              ressurreição de seu irmão Lázaro, que falecera havia quatro dias.
              Ó Vós, que, viveis e reinais...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Ct. 3, 2-5; 8, 6-7</Text>

          <Language>
            <Text className="latin">Léctio libri Sapiéntiæ.</Text>
            <Text className="vernacular">Lição do Livro da Sabedoria.</Text>
            <Text className="latin">
              Surgam, et circuíbo civitátem: per vicos et pláteas quæram, quem
              díligit ánima mea: quæsívi illum, et non invéni. Invenérunt me
              vígiles, qui custódiunt civitátem. Num quem díligit ánima mea,
              vidístis? Páululum cum pertransíssem eos, invéni, quem díligit
              ánima mea: ténui eum, nec dimíttam, donec introdúcam illum in
              domum matris meæ et in cubículum genetrícis meæ. Adjúro vos, fíliæ
              Jerúsalem, per cápreas cervósque campórum, ne suscitétis neque
              evigiláre faciátis diléctam, donec ipsa velit. Pone me ut
              signáculum super cor tuum, ut signáculum super bráchium tuum: quia
              fortis est ut mors diléctio, dura sicut inférnus æmulátio:
              lámpades ejus lámpades ignis atque flammárum. Aquæ multæ non
              potuérunt exstínguere caritátem, nec flúmina óbruent illam: si
              déderit homo omnem substántiam domus suæ pro dilectióne, quasi
              nihil despíciet eam.
            </Text>
            <Text className="vernacular">
              Erguer-me-ei, percorrerei toda a cidade e procurarei pelas ruas e
              praças aquele que minha alma ama! Procurei-o e o não encontrei. As
              sentinelas que vigiam a cidade encontraram-me. Então disse-lhes:
              «Não vistes aquele que minha alma ama?». E, quando havia já
              passado além delas, encontrei aquele que minha alma ama! Então
              detive-o; e o não deixarei mais enquanto o não fizer entrar na
              casa de minha mãe e no quarto daquela que me gerou. Eu vos
              conjuro, ó filhas de Jerusalém, pelas cabras dos montes e pelos
              veados dos campos, que não perturbeis, nem desperteis a minha
              muito amada, até que ela própria acorde. Colocai como que um sinal
              sobre o vosso coração; como que um sinal sobre o vosso braço,
              porque o amor é forte, como a morte, e o zelo do amor é
              inflexível, como o inferno. Seus ardores são de fogo e de chamas;
              nem as águas caudalosas puderam extinguir o amor, nem os rios
              submergi-lo; pois, ainda que o homem haja dado todas as riquezas
              da sua casa pelo seu amor, desprezá-las-á, como se nada fossem.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 44, 8</Text>

          <Language>
            <Text className="latin">
              Dilexísti justítiam, et odísti iniquitátem.
              <Text className="versicle"> ℣. </Text>Proptérea unxit te Deus,
              Deus tuus, óleo lætítiæ.
            </Text>
            <Text className="vernacular">
              Amastes a justiça e odiastes a iniquidade.
              <Text className="versicle"> ℣. </Text>Pelo que o Senhor, vosso
              Deus, vos ungiu com o óleo da alegria.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 3</Text> Diffúsa est grátia in
              lábiis tuis: proptérea benedíxit te Deus in ætérnum. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 3</Text> A graça espalhou-se
              nos vossos lábios: eis porque Deus vos abençoou para sempre.
              Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/quaresma/quad5-4#evangelho"
            title="Quinta-feira da Semana da Paixão - Estação em Santo Apolinário"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 44, 10</Text>

          <Language>
            <Text className="latin">
              Fíliæ regum in honóre tuo, ástitit regína a dextris tuis in
              vestítu deauráto, circúmdata varietáte.
            </Text>
            <Text className="vernacular">
              As filhas dos reis formam a vossa corte de glória: a própria
              rainha está colocada à vossa direita, envergando um vestido de
              ouro, recamado da mais rica variedade.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Múnera nostra, quǽsumus, Dómine, beátæ Maríæ Magdalénæ gloriósa
              mérita tibi reddant accépta: cujus oblatiónis obséquium unigénitus
              Fílius tuus cleménter suscépit impénsum: Qui tecum vivit et
              regnat...
            </Text>
            <Text className="vernacular">
              Dignai-Vos aceitar, Senhor, Vos pedimos, as oblatas que Vos
              apresentamos pelos gloriosos méritos da B. Maria Madalena, da qual
              o vosso Filho Unigénito recebeu misericordiosamente a sua oferta e
              os seus serviços. Ele, que convosco vive e reina...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 118, 121, 122 & 128</Text>

          <Language>
            <Text className="latin">
              Feci judícium et justítiam, Dómine, non calumniéntur mihi supérbi:
              ad ómnia mandáta tua dirigébar, omnem viam iniquitátis odio hábui.
            </Text>
            <Text className="vernacular">
              Pratiquei a equidade e a justiça; não me entregueis, pois, àqueles
              que me perseguem. Procurei em tudo dirigir-me segundo os vossos
              Mandamentos: e odiei todas as vias da iniquidade.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sumpto, quǽsumus, Dómine, único ac salutári remédio, Córpore et
              Sánguine tuo pretióso: ab ómnibus malis, sanctæ Maríæ Magdalénæ
              patrocíniis, eruámur: Qui vivis et regnas...
            </Text>
            <Text className="vernacular">
              Havendo nós recebido o único e salutar remédio, o vosso Corpo e o
              vosso Sangue preciosíssimo permiti, Senhor, Vos pedimos, que
              sejamos livres de todos os males pelo patrocínio de Santa Maria
              Madalena. Ó Vós, que viveis e...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
