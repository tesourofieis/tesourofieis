import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function PageContrapagaos() {
  return (
    <PageWrapper>
      <H1 text="Missa Contra os Pagãos" />

      <H3 text="Intróito" />

      <Text className="em">Sl. 43, 23-24 & 25-26</Text>

      <Language>
        <Text className="latin">
          Exsúrge, quare obdórmis, Dómine? exsúrge, et ne repéllas in finem:
          quare fáciem tuam avértis, oblivísceris tribulatiónem nostram? Adhǽsit
          in terra venter noster: exsúrge, Dómine, ádjuva nos et líbera nos. (T.
          P. Allelúja, allelúja.) <Text className="latin">Ps. ibid., 2</Text>{" "}
          Deus, áuribus nostris audívimus: patres nostri annuntiavérunt nobis.
          <Text className="versicle"> ℣. </Text>
          Gloria Patri...
        </Text>
        <Text className="vernacular">
          Despertai, porque dormis, Senhor? Despertai e nos não rechaceis para
          sempre: porque escondeis para sempre o vosso rosto? Porque Vos
          esqueceis da nossa tribulação? A nossa alma rasteja no pó da terra.
          Despertai, Senhor; vinde em nosso auxílio; livrai-nos. (T. P. Aleluia,
          aleluia.) <Text className="vernacular">Sl. ibid., 2</Text> Ó Deus, com
          os nossos ouvidos o ouvimos; os nossos pais contaram-nos tudo.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, in cujus manu sunt ómnium potestátes et
          ómnium jura regnórum: réspice in auxílium Christianórum; ut gentes
          paganórum, quæ in sua feritáte confídunt, déxteræ tuæ poténtia
          conterántur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó omnipotente e sempiterno Deus, em cujas mãos estão todos os poderes
          e os direitos de todos os vivos, vinde em auxílio dos cristãos, a fim
          de que os povos pagãos, que confiam na sua altivez, sejam humilhados
          sob o peso da vossa dextra. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Est. 13, 8-11 & 15-17</Text>

      <Language>
        <Text className="latin">Léctio libri Esther.</Text>
        <Text className="vernacular">Lição do Livro de Ester.</Text>
        <Text className="latin">
          In diébus illis: Orávit Mardochǽus ad Dóminum, dicens: Dómine, Dómine,
          Rex omnípotens, in dicióne enim tua cuncta sunt pósita, et non est qui
          possit tuæ resístere voluntáti, si decréveris salváre Israël. Tu
          fecísti cœlum et terram, et quidquid cœli ámbitu continétur. Dóminus
          ómnium es, nec est qui resístat majestáti tuæ. Et nunc, Dómine Rex,
          Deus Abraham, miserére pópuli tui, quia volunt nos inimíci nostri
          pérdere, et hereditátem tuam delére. Ne despícias partem tuam, quam
          redemísti tibi de Ægýpto. Exáudi deprecatiónem meam, et propítius esto
          sorti et funículo tuo, et convérte luctum nostrum in gáudium, ut
          vivéntes laudémus nomen tuum, Dómine, et ne claudas ora te canéntium,
          Dómine, Deus noster.
        </Text>
        <Text className="vernacular">
          Naqueles dias: orava Mardoqueu ao Senhor, dizendo: «Senhor, Senhor,
          Rei omnipotente, em cujo poder se encontram todas as coisas e a cuja
          vontade ninguém poderá resistir se quiseres salvar Israel; Vós, que
          criastes o céu e a terra e todas as maravilhas que se contêm no âmbito
          dos céus; Vós, que sois o Senhor de tudo quanto existe e a cuja
          majestade se não pode resistir: agora, pois, Senhor, meu Deus e meu
          Rei, Deus de Abraão, perdoai ao vosso povo, porque os nossos inimigos
          querem perder-nos, na ânsia de destruírem a vossa herança. Não deixeis
          em esquecimento este vosso povo, que resgatastes da terra do Egipto.
          Escutai a minha súplica e sede propício à vossa herança; convertei o
          nosso luto em alegria, para que, vivendo, Senhor, cantemos hinos em
          louvor do vosso nome, e não feches a boca, Senhor, nosso Deus, àqueles
          que Vos louvam».
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 82, 19 & 14</Text>

      <Language>
        <Text className="latin">
          Sciant gentes, quóniam nomen tibi Deus: tu solus Altíssimus super
          omnem terram.<Text className="versicle"> ℣. </Text>Deus meus, pone
          illos ut rotam, et sicut stípulam ante fáciem venti.
        </Text>
        <Text className="vernacular">
          Saibam todos os povos que o vosso nome é Deus: e que só Vós sois o
          Altíssimo sobre toda a terra.
          <Text className="versicle"> ℣. </Text>
          Tornai-os a todos, ó meu Deus, como pó, como uma palha que o
          torvelinho arrasta pelo caminho.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 79, 3</Text> Excita, Dómine, poténtiam
          tuam, et veni: ut salvos fácias nos. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 79, 3</Text> Despertai o vosso poder,
          Senhor, e vinde, para que sejamos salvos. Aleluia.
        </Text>
      </Language>

      <Text className="aside">
        Depois da Septuagésima, omite-se o Aleluia e o seguinte, e diz-se:
      </Text>

      <H3 text="Trato" />

      <Text className="em">Sl. 78, 9-11</Text>

      <Language>
        <Text className="latin">
          Adjuva nos, Deus, salutáris noster: et propter honórem nóminis tui,
          Dómine, líbera nos: et propítius esto peccátis nostris, propter nomen
          tuum.<Text className="versicle"> ℣. </Text>Ne quando dicant gentes:
          Ubi est Deus eórum? et innotéscat in, natiónibus coram óculis nostris.
          <Text className="versicle"> ℣. </Text>
          Víndica sánguinem servórum tuórum, qui effúsus est: intret in
          conspéctu tuo gémitus compeditórum.
        </Text>
        <Text className="vernacular">
          Socorrei-nos, ó Deus, nosso Salvador; pela glória do vosso nome,
          Senhor, livrai-nos: e perdoai os nossos pecados pelo vosso nome.
          <Text className="versicle"> ℣. </Text>Não digam algum dia os povos:
          onde está o seu Deus? Seja notório aos povos e aos nossos olhos.
          <Text className="versicle"> ℣. </Text>Vingai o sangue que os vossos
          servos derramaram: cheguem até Vós os gemidos dos cativos.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato e diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 79, 3</Text> Excita, Dómine, poténtiam
          tuam, et veni: ut salvos fácias nos. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">ibid., 15-16</Text> Deus virtútum, convértere,
          réspice de cœlo, et vide, et vísita víneam istam: et pérfice eam, quam
          plantávit déxtera tua. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 79, 3</Text> Despertai o vosso poder,
          Senhor, e vinde para que sejamos salvos. Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">ibid., 15-16</Text> Deus poderoso, volvei-Vos
          para nós, olhai para nós lá do céu, contemplai e visitai esta vinha:
          defendei esta vinha que a vossa mão dextra plantou. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/pascoa/pasc5-1#evangelho"
        title="Dias de Rogação - 25 de Abril e nos 3 dias antes da Ascensão"
      />

      <H3 text="Ofertório" />

      <Text className="em">Sl. 17, 28 & 32</Text>

      <Language>
        <Text className="latin">
          Pópulum húmilem salvum fácies: et óculos superbórum humiliábis:
          quóniam quis Deus præter te, Dómine? (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Salvais o povo humilde e humilhais o povo soberbo: pois quem é Deus,
          senão Vós, Senhor? (T. P. Aleluia.)
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Sacrifícium, Dómine, quod immolámus, inténde: ut propugnatóres tuos ab
          omni éruas paganórum nequítia, et in tuæ protectiónis securitáte
          constítuas. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Olhai benignamente para o sacrifício que imolamos, Senhor, a fim de
          que defendais os vossos defensores de toda a malícia dos pagãos e os
          conserveis em segurança com vossa protecção. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Sl. 118, 81, 84 & 86</Text>

      <Language>
        <Text className="latin">
          In salutári tuo ánima mea, et in verbum tuum sperávi: quando fácies de
          persequéntibus me judícium? Iníqui persecúti sunt me, ádjuva me,
          Dómine, Deus meus. (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Anseia a minha alma com o desejo de que a salveis. Quando fareis
          justiça contra os que me perseguem? Os maus perseguem-me, auxiliai-me,
          Senhor, meu Deus. (T. P. Aleluia.)
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Protéctor noster, áspice, Deus: et propugnatóres tuos a paganórum
          defénde perículis; ut, omni perturbatióne submóta, líberis tibi
          méntibus desérviant. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, nosso protector, lançai para nós os vossos olhares e defendei
          os vossos defensores contra os perigos dos pagãos, de modo que,
          afastados todos os perigos, Vos possam servir com liberdade de
          espírito. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
