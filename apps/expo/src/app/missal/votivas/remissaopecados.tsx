import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageRemissaopecados() {
  return (
    <PageWrapper>
      <H1 text="Pela Remissão dos Pecados" />

      <H3 text="Intróito" />

      <Text className="em">Sb. 11,24, 25 & 27</Text>

      <Language>
        <Text className="latin">
          Miseréris ómnium, Dómine, et nihil odísti eórum, quæ fecísti:
          dissímulans peccáta hóminum propter pœniténtiam, et parcens illis:
          quia tu es Dóminus, Deus noster. (T. P. Allelúja, allelúja){" "}
          <Text className="latin">Ps. 56, 2</Text> Miserére mei, Deus, miserére
          mei: quóniam in te confídit ánima mea.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Tendes misericórdia de todos, Senhor, e a nenhum daqueles que
          criastes, tendes ódio: quando os homens fazem penitência, lançais um
          véu sobre os seus pecados e perdoais-lhes, porquanto sois o Senhor,
          nosso Deus. (T. P. Aleluia, aleluia.){" "}
          <Text className="vernacular">Sl. 56, 2</Text> Tende misericórdia de
          mim, ó Deus, tende misericórdia de mim, porque a minha alma em Vós
          confia.<Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Exáudi, quǽsumus, Dómine, súpplicum preces, et confiténtium tibi parce
          peccátis: ut páriter nobis indulgéntiam tríbuas benígnus et pacem. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos rogamos, ouvi as preces dos suplicantes e perdoai os
          pecados destes que se confessam pecadores, a fim de que, benigno, lhes
          concedais ao mesmo tempo a indulgência e a paz. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Rm. 7, 22-25</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Romános.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Romanos.
        </Text>
        <Text className="latin">
          Fratres: Condeléctor legi Dei secúndum interiórem hóminem: video autem
          áliam legem in membris meis, repugnántem legi mentis meæ, et
          captivántem me in lege peccáti, quæ est in membris meis. Infélix ego
          homo, quis me liberábit de córpore mortis hujus? Grátia Dei per Jesum
          Christum, Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Como homem de vida interior, delicio-me; contudo sinto
          nos meus membros uma outra lei, que repugna à lei dos meus membros.
          Desditoso de mim, que sou homem! Quem me livrará deste corpo de morte?
          Graças sejam dadas a Deus, por Jesus Cristo, nosso Senhor.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 78, 9-10</Text>

      <Language>
        <Text className="latin">
          Propítius esto, Dómine, peccátis nostris, ne quando dicant gentes: Ubi
          est Deus eórum?<Text className="versicle"> ℣. </Text>ibid., 9 Adjuva
          nos, Deus, salutáris noster: et propter honórem nóminis tui, Dómine,
          líbera nos.
        </Text>
        <Text className="vernacular">
          Sede propício para com os nossos pecados, Senhor, para que não digam
          os pagãos: onde está o seu Deus? Auxiliai-nos, ó Deus, nosso Salvador:
          e por causa do vosso nome, Senhor, livrai-nos.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 7, 12</Text> Deus judex justus, fortis et
          pátiens: numquid irascátur per síngulos dies? Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 7, 12</Text> Deus é juiz justo, forte
          e paciente: porventura irar-se-á todos os dias? Aleluia.
        </Text>
      </Language>

      <H3 text="Trato" />

      <Text className="em">Sl. 129, 1-4</Text>

      <Language>
        <Text className="latin">
          De profúndis clamávi ad te, Dómine: Dómine, exáudi vocem meam.
          <Text className="versicle"> ℣. </Text>
          Fiant aures tuæ intendéntes in oratiónem servi tui.
          <Text className="versicle"> ℣. </Text>Si iniquitátes observáveris,
          Dómine: Dómine, quis sustinébit?
          <Text className="versicle"> ℣. </Text>Quia apud te propitiátio est: et
          propter legem tuam sustínui te, Dómine.
        </Text>
        <Text className="vernacular">
          Das profundezas do abysmo, Senhor, clamo por Vós; ouvi a minha oração,
          Senhor.<Text className="versicle"> ℣. </Text>Estejam os vossos ouvidos
          atentos à oração do vosso servo.
          <Text className="versicle"> ℣. </Text>Se guardardes a lembrança dos
          nossos delitos, Senhor, quem poderá subsistir ante Vós, Senhor?
          <Text className="versicle"> ℣. </Text>Pois nas vossas mãos está o
          perdão: e por causa da vossa lei ousei comparecer ante Vós, Senhor.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato, dizendo-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 7, 12</Text> Deus judex justus, fortis et
          pátiens: numquid irascétur per síngulos dies? Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Ps. 50, 10</Text> Audítui meo dabis gáudium et
          lætítiam: et exsultábunt ossa humiliáta. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 7, 12</Text> Deus é juiz justo, forte
          e paciente. Porventura irar-se-á todos os dias? Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Sl. 50, 10</Text> Dareis gozo e alegria aos meus
          ouvidos: e meus ossos humilhados exultarão de contentamento. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Lc. 11, 9-13</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Lucas.
        </Text>
        <Text className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Pétite, et dábitur
          vobis: quǽrite, et inveniétis: pulsáte, et aperiétur vobis. Omnis
          enim, qui petit, áccipit: et qui quærit, invénit: et pulsánti
          aperietur, Quis autem ex vobis patrem pétii panem, numquid lápidem
          dabit illi? Aut piscem: numquid pro pisce serpéntem dabit illi? Aut si
          petíerit ovum: numquid pórriget illi scorpiónem? Si ergo vos, cum
          sitis mali, nostis bona data dare fíliis vestris: quanto magis Pater
          vester de cœlo dabit spíritum bonum peténtibus se?
        </Text>
        <Text className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Pedi e recebereis;
          buscai e encontrareis; batei e abrir-se-vos-á. Porquanto todo aquele
          que pedir receberá; todo aquele, que procurar achará; todo aquele que
          bater abrir-se-lhe-á. Se algum de vós pedir um pão a seu pai,
          porventura este lhe dará uma pedra? Ou, se lhe pedir um peixe,
          dar-lhe-á uma serpente? Ou, se lhe pedir um ovo, dar-lhe-á um
          escorpião? Pois se vós, sendo maus, sabeis, contudo, dar coisas boas a
          vossos filhos, quanto mais vosso Pai celestial dará o Espírito Santo
          àqueles que lho pedirem».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 101, 2</Text>

      <Language>
        <Text className="latin">
          Dómine, exáudi oratiónem meam: et clamor meus ad te pervéniat. (T. P.
          Allelúja.)
        </Text>
        <Text className="vernacular">
          Ouvi a minha oração, Senhor: e que meu clamor chegue até Vós. (T. P.
          Aleluia).
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Hóstias tibi, Dómine, placatiónis et laudis offérimus: ut et delícta
          nostra miserátus absólvas, et nutántia corda tu dírigas. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Vos oferecemos, Senhor, estas hóstias de louvor e de paz, a fim que,
          misericordioso, nos absolvais dos nossos delitos, e amparareis os
          nossos corações vacilantes. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Lc. 11, 9-10</Text>

      <Language>
        <Text className="latin">
          Petite, et accipiétis; quǽrite, et inveniétis; pulsáte, et aperiétur
          vobis. Omnis enim, qui pétii, áccipit; et qui quærit, invénit; et
          pulsánti aperiétur. (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Pedi e recebereis; procurai e encontrareis; batei e abrir-se-vos-á.
          Todo aquele que pede, recebe; e todo aquele que procura, encontra; e
          todo aquele que bate, abrir-se-lhe-á. (T. P. Aleluia.)
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Præsta nobis, ætérne Salvátor: ut, percipiéntes hoc múnere véniam
          peccatórum, deínceps peccáta vitémus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, ó eterno Salvador, que, encontrando nós neste dom o
          perdão dos pecados, doravante evitemos os pecados. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
