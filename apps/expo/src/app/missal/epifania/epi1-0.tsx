import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageEpi10() {
  return (
    <PageWrapper>
      <H1 text="Domingo dentro do Oitavário da Epifania" />

      <H3 text="Intróito" />

      <Language>
        <Text className="latin">
          In excélso throno vidi sedére virum, quem adórat multitúdo Angelórum,
          psalléntes in unum: ecce, cujus impérii nomen est in ætérnum.{" "}
          <Text className="latin">Ps. 99, 1</Text> Jubiláte Deo, omnis terra:
          servíte Dómino in lætítia.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Vi um Homem, sentado em um trono muito elevado, a quem a multidão dos
          Anjos adorava, cantando em coro de vozes: «Eis Aquele cujo império é
          eterno!» <Text className="vernacular">Sl. 99, 1</Text> Aclamai
          jubilosamente o Senhor, ó habitantes da terra: obedecei ao Senhor com
          alegria.<Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Vota, quǽsumus, Dómine, supplicántis pópuli cœlésti pietáte
          proséquere: ut et, quæ agénda sunt, vídeant, et ad implénda, quæ
          víderint, convaléscant Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Aceitai, Senhor, com vossa celestial bondade os votos do vosso povo
          suplicante; e, Vos imploramos, permiti que os vossos servos conheçam o
          que devem cumprir e tenham coragem de cumprir o que conhecem. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Rm. 12, 1-5</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Romános.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap. Paulo aos Romanos.
        </Text>
        <Text className="latin">
          Fratres: Obsecro vos per misericórdiam Dei, ut exhibeátis córpora
          vestra hóstiam vivéntem, sanctam, Deo placéntem, rationábile obséquium
          vestrum. Et nolíte conformári huic sǽculo, sed reformámini in novitáte
          sensus vestri: ut probétis, quæ sit volúntas Dei bona, et benéplacens,
          et perfécta. Dico enim per grátiam, quæ data est mihi, ómnibus qui
          sunt inter vos: Non plus sápere, quam opórtet sápere, sed sápere ad
          sobrietátem: et unicuique sicut Deus divísit mensúram fídei. Sicut
          enim in uno córpore multa membra habémus, ómnia autem membra non
          eúndem actum habent: ita multi unum corpus sumus in Christo, sínguli
          autem alter alteríus membra: in Christo Jesu, Dómino nostro.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Peço-vos pela misericórdia de Deus que ofereçais os
          vossos corpos como hóstia viva, santa e agradável a Deus, para que o
          culto que Lhe prestais seja racional. Não vos conformeis com os
          costumes; mas reformai-vos com a graça do espírito novo, que agora
          possuís, para que conheçais qual é a vontade de Deus, o que é bom,
          agradável e perfeito. Exorto-vos, pois, a todos vós, pela graça que me
          foi dada, que não formeis de vós um juízo muito elevado, mas que
          tenhais sentimentos modestos de vós, cada um conforme a medida que
          Deus lhe concedeu. Porquanto, assim como em um só corpo temos muitos
          membros (os quais, contudo, não têm a mesma função), assim também,
          ainda que sejamos vários, contudo formamos um só corpo em Jesus
          Cristo, sendo cada um de nós em particular membros uns dos outros, em
          Jesus Cristo, nosso Senhor.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 71, 18 & 3</Text>

      <Language>
        <Text className="latin">
          Benedíctus Dóminus, Deus Israël, qui facit mirabília magna solus a
          sǽculo.<Text className="versicle"> ℣. </Text>Suscípiant montes pacem
          pópulo tuo, et colles justítiam.
        </Text>
        <Text className="vernacular">
          Bendito seja o Senhor Deus de Israel, pois somente Ele opera prodígios
          em todos os séculos.
          <Text className="versicle"> ℣. </Text>
          Que os montes do vosso povo sejam bafejados pela paz: e as colinas
          pela justiça.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 99, 1</Text> Jubiláte Deo, omnis terra:
          servíte Dómino in lætítia. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 99, 1</Text> Aclamai jubilosamente o
          Senhor, ó habitantes da terra: obedecei ao Senhor com alegria.
          Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Lc. 2, 42-52</Text>

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
          Cum factus esset Jesus annórum duódecim, ascendéntibus illis
          Jerosólymam secúndum consuetúdinem diéi festi, consummatísque diébus,
          cum redírent, remánsit puer Jesus in Jerúsalem, et non cognovérunt
          paréntes ejus. Existimántes autem illum esse in comitátu, venérunt
          iter diéi, et requirébant eum inter cognátos et notos. Et non
          inveniéntes, regréssi sunt in Jerúsalem, requiréntes eum. Et factum
          est, post tríduum invenérunt illum in templo sedéntem in médio
          doctórum, audiéntem illos et interrogántem eos. Stupébant autem omnes,
          qui eum audiébant, super prudéntia et respónsis ejus. Et vidéntes
          admiráti sunt. Et dixit Mater ejus ad illum: Fili, quid fecísti nobis
          sic? Ecce, pater tuus et ego doléntes quærebámus te. Et ait ad illos:
          Quid est, quod me quærebátis? Nesciebátis, quia in his, quæ Patris mei
          sunt, opórtet me esse? Et ipsi non intellexérunt verbum, quod locútus
          est ad eos. Et descéndit cum eis, et venit Názareth: et erat súbditus
          illis. Et Mater ejus conservábat ómnia verba hæc in corde suo. Et
          Jesus proficiébat sapiéntia et ætáte et grátia apud Deum et hómines.
        </Text>
        <Text className="vernacular">
          Quando Jesus completou doze anos de idade, como seus pais tivessem ido
          a Jerusalém, no tempo da festa, segundo o costume, decorridos que
          foram os dias da mesma, voltaram para casa, tendo o Menino Jesus
          ficado em Jerusalém, sem que de tal os pais se apercebessem. Pensando
          que Ele viria com seus companheiros de jornada, fizeram um dia de
          viagem, procurando-O depois entre os parentes e os conhecidos. Não O
          encontrando, voltaram logo a Jerusalém pelo mesmo caminho. Então,
          aconteceu que, depois de três dias, foram achá-l’O no templo, sentado
          no meio dos doutores, ouvindo-os e interrogando-os. E aqueles que O
          ouviam estavam admirados da sua sabedoria e das suas respostas. Quando
          os pais O encontraram, ficaram admirados, dizendo-Lhe logo a Mãe: «Meu
          Filho, porque procedestes assim para connosco? Eis que vosso pai e eu
          Vos buscávamos aflitos!» Ele disse-lhes: «Porque me procuráveis? Não
          sabíeis que é preciso que me ocupe das coisas de meu Pai?», Porém eles
          não compreenderam o que Jesus lhes disse, Então, desceu com eles, veio
          para Nazaré e era-lhes obediente. E sua Mãe conservava todas estas
          coisas no coração. Quanto a Jesus, crescia em sabedoria, em idade e em
          graça, diante de Deus e dos homens.
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 99, 1 & 2</Text>

      <Language>
        <Text className="latin">
          Jubiláte Deo, omnis terra, servíte Dómino in lætítia: intráte in
          conspéctu ejus in exsultatióne: quia Dóminus ipse est Deus.
        </Text>
        <Text className="vernacular">
          Aclamai jubilosamente o Senhor, ó habitantes da terra: obedecei ao
          Senhor com alegria: apresentai-vos diante d’Ele com alegria; pois Ele
          é bom.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Oblátum tibi, Dómine, sacrificium vivíficet nos semper et múniat. Per
          Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Fazei, Senhor, que este sacrifício, que Vos é oferecido, sempre nos
          vivifique e conforte. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Lc. 2, 48 & 49</Text>

      <Language>
        <Text className="latin">
          Fili, quid fecísti nobis sic? ego et pater tuus doléntes quærebámus
          te. Et quid est, quod me quærebátis? nesciebátis, quia in his, quæ
          Patris mei sunt, opórtet me esse?
        </Text>
        <Text className="vernacular">
          Meu filho, porque procedestes assim para connosco? Eis que o vosso pai
          e eu Vos buscávamos aflitos! E porque me procuráveis? Não sabíeis que
          é preciso que me ocupe das coisas de meu Pai?
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Súpplices te rogámus, omnípotens Deus: ut, quos tuis réfícis
          sacraméntis, tibi etiam plácitis móribus dignánter deservíre concédas.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Humildemente Vos suplicamos, ó Deus omnipotente, concedei àqueles que
          se sustentam com vossos sacramentos a graça de Vos servirem com actos
          que Vos sejam agradáveis. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
