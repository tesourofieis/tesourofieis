import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageConfirmacao() {
  return (
    <PageWrapper>
      <H1 text="Confirmação" />

      <Text className="aside">
        Logo que é dado o respectivo sinal para começar a Cerimónia da
        Confirmação (Santo Crisma), aqueles que vão receber o Sacramento
        ajoelham diante do Bispo, que começa:
      </Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Spíritus Sanctus supervéniat in
          vos, et virtus Altíssimi custódiat vos a peccátis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Que o Espírito Santo desça sobre
          vós e que a virtude do Altíssimo vos livre de todos os pecados.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Adjutórium nostrum in nómine
          Dómini.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O nosso auxílio está no Nome do
          Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Qui fecit cœlum et terram.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Que criou o céu e a terra.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te véniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E que meu clamor chegue até
          Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dominus vobíscum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et cum spíritu tuo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E com vosso espírito.
        </Text>
      </Language>

      <H1 text="Imposição das Mãos" />

      <Text className="aside">
        O Bispo estende as mãos sobre as cabeças dos que vão receber a
        Confirmação, os quais as inclinam mediocremente:
      </Text>

      <Language>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui regeneráre dignátus es hunc famulum
          tuum (hanc famulam tuam) ex aqua, et Spíritu Sancto, quique dedísti
          eis remissiónem ómnium peccatórum: emítte in eum (eam) septifórmem
          Spíritum tuum Sanctum Paráclitum de cælis.
        </Text>
        <Text className="vernacular">
          Deus omnipotente e sempiterno, que Vos dignastes regenerar pela água e
          pelo Espírito Santo os vossos servos aqui presentes e que lhes
          concedestes a remissão dos seus pecados, enviai-lhes agora do alto dos
          céus o vosso Espírito Santo Paráclito, que é o Autor dos sete dons.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Spíritum sapiéntiæ, et
          intelléctus.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Espírito da Sabedoria e do
          Entendimento!
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Spíritum consílii, et
          fortitúdinis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Espírito do Conselho e da
          Fortaleza!
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Spíritum sciéntiæ, et pietátis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Espírito da Ciência e da
          Piedade!
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          Adímple eum (eam) Spíritu timóris tui, et consígna eum (eam) signo Cru{" "}
          <Text className="cross"> ✠ </Text> cis Christi, in vitam propitiátus
          ætérnam. Per eúmdem Dóminum nostrum Jesum Christum, Fílium tuum: Qui
          tecum vivit et regnat in unitáte ejúsdem Spíritus Sancti Deus, per
          ómnia sæcula sæculórum.
        </Text>
        <Text className="vernacular">
          Enchei-nos com o Espírito do vosso Temor e marcai-os com o sinal da
          Cruz <Text className="cross"> ✠ </Text> de Cristo, a fim de os
          auxiliar na posse da vida eterna. Pelo mesmo...
        </Text>
      </Language>

      <Text className="aside">
        Todos se erguem, apresentando-se um a um ao Bispo (com ordem e sempre
        encomendando-se a Deus) para os ungir. Chegados aos pé do Bispo, devem
        ajoelhar-se e dizer de modo inteligível o seu nome de Baptismo. Bispo
        diz, fazendo
      </Text>

      <H1 text="A Unção" />

      <Language>
        <Text className="latin">
          <Text className="latin">N.</Text> Signo te signo Cru{" "}
          <Text className="cross"> ✠ </Text> cis: et cornfírmo te Chrísmate
          salútis. In nómine Pa <Text className="cross"> ✠ </Text> tris, et Fí{" "}
          <Text className="cross"> ✠ </Text> lii, et Spíritus{" "}
          <Text className="cross"> ✠ </Text> Sancti.
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">N.</Text>, eu te marco com o sinal da
          Cruz <Text className="cross"> ✠ </Text> e te confirmo com o Crisma da
          salvação: em Nome do Pai <Text className="cross"> ✠ </Text> e do Filho{" "}
          <Text className="cross"> ✠ </Text> e do Espírito{" "}
          <Text className="cross"> ✠ </Text> Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Pax tecum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>A paz seja convosco!
        </Text>
      </Language>

      <Text className="aside">
        Um dos Clérigos Assistentes ao Bispo limpará a Unção do que recebeu o
        Sacramento, o qual não poderá retirar-se do Templo sem receber
      </Text>

      <H1 text="A Bênção" />

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Confírma hoc, Deus, quod
          operátus es in nobis, a templo sancto tuo, quod est in Jerúsalem.
          <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
          Spirítui Sancto: Sicut erat in princípio, et nunc, et semper, et in
          sæcula sæculórum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Confirmai, ó Deus, o que acabais
          de operar em nós, lá do vosso santo templo que é Jerusalém celestial.
          <Text className="versicle"> ℣. </Text>Glória ao Pai e ao Filho e ao
          Espírito Santo. Assim como era no princípio, agora e sempre e por
          todos os séculos dos séculos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="latin">
            Et repetitur Antiphona: Confírma hoc, etc.
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Repete-se Confirmai... até celestial.
          </Text>
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Osténde nobis, Dómine,
          misericórdiam tuam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Mostrai, Senhor, a vossa
          misericórdia.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et salutáre tuum da nobis.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E dai-nos a salvação.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te véniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E que meu clamor chegue até
          Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dominus vobíscum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et cum spíritu tuo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E com vosso espírito.
        </Text>
      </Language>

      <Language>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Deus, qui Apóstolis tuis Sanctum dedísti Spíritum, et per eos eorúmque
          successóres céteris fidélibus tradéndum esse voluísti: réspice
          propítius ad humilitátis nostræ famulátum, et præsta; ut eórum corda,
          quorum frontes sacro Chrísmate delinívimus, et signo sanctæ Crucis
          signávimus, idem Spíritus Sanctus in eis supervéniens, templum glóriæ
          suæ dignánter span perfíciat: Qui cum Patre, et eódem Spíritu Sancto
          vivis et regnas Deus, in sæcula sæculórum.
        </Text>
        <Text className="vernacular">
          Ó Deus, que concedestes o Espírito Santo aos vossos Apóstolos e que
          quisestes transmiti-los aos outros fiéis pelo seu ministério e pelo
          dos seus sucessores, dignai-Vos olhar benigno para os vossos humildes
          servos; e permiti que este mesmo Espírito, descendo aos corações
          daqueles que ungimos na testa e marcamos com o sinal da Cruz, os faça
          perfeitos, tornando-os na sua morada e no templo da sua glória: Ó Vós,
          que viveis e reinais com o Pai e o Espírito Santo pelos séculos dos
          séculos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>

      <Text className="aside">
        O Bispo continua, estando ainda todos de joelhos:
      </Text>

      <Language>
        <Text className="latin">
          Ecce sic benedicétur omnis homo, qui timet Dóminum.
        </Text>
        <Text className="vernacular">
          É assim que será abençoado todo o homem que teme o Senhor!
        </Text>
        <Text className="latin">
          Bene <Text className="cross"> ✠ </Text> dicat vos Dóminus ex Sion, ut
          videátis bona Jerúsalem ómnibus diébus vitæ vestræ, et habeátis vitam
          ætérnam.
        </Text>
        <Text className="vernacular">
          Que o Senhor vos abençoe <Text className="cross"> ✠ </Text> lá do alto
          de Sião, a fim de que vejais os bens de Jerusalém todos os dias da
          vossa vida e alcanceis a vida eterna.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
