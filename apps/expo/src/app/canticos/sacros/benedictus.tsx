import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageBenedictus() {
  return (
    <PageWrapper>
      <H1 text="Benedíctus" />

      <Language>
        <Text className="latin">
          Benedíctus Dóminus, Deus Israël: * quia visitávit, et fecit
          redemptiónem plebis suæ:
        </Text>
        <Text className="vernacular">
          Bendito seja o Senhor, Deus de Israel: * porque visitou e remiu seu
          povo:
        </Text>
        <Text className="latin">
          Et eréxit cornu salútis nobis: * in domo David, púeri sui.
        </Text>
        <Text className="vernacular">
          E preparou para nós uma poderosa salvação: * na casa de seu servo
          David.
        </Text>
        <Text className="latin">
          Sicut locútus est per os sanctórum, * qui a sǽculo sunt, prophetárum
          ejus:
        </Text>
        <Text className="vernacular">
          Quando prometeu, pela boca dos seus Santos, * que outrora foram seus
          Profetas:
        </Text>
        <Text className="latin">
          Salútem ex inimícis nostris, * et de manu ómnium, qui odérunt nos.
        </Text>
        <Text className="vernacular">
          Que nos salvaria dos nossos dos nossos inimigos, * e das mãos de todos
          os que nos odeiam.
        </Text>
        <Text className="latin">
          Ad faciéndam misericórdiam cum pátribus nostris: * et memorári
          testaménti sui sancti.
        </Text>
        <Text className="vernacular">
          Para praticar a sua misericórdia para com os nossos pais: * e em
          recordação da sua sagrada aliança.
        </Text>
        <Text className="latin">
          Jusjurándum, quod jurávit ad Ábraham patrem nostrum, * datúrum se
          nobis:
        </Text>
        <Text className="vernacular">
          Segundo o juramento que prestara a Abraão, nosso pai: * que nos
          concederia:
        </Text>
        <Text className="latin">
          Ut sine timóre, de manu inimicórum nostrórum liberáti, * serviámus
          illi.
        </Text>
        <Text className="vernacular">
          Sermos livres das mãos dos nos inimigos, * para O servirmos sem temor.
        </Text>
        <Text className="latin">
          In sanctitáte, et justítia coram ipso, * ómnibus diébus nostris.
        </Text>
        <Text className="vernacular">
          Na santidade e justiça, na sua presença, * em todos os dias da nossa
          vida.
        </Text>
        <Text className="latin">
          Et tu, puer, Prophéta Altíssimi vocáberis: * præíbis enim ante fáciem
          Dómini, paráre vias ejus:
        </Text>
        <Text className="vernacular">
          E tu, menino, serás chamado profeta do Altíssimo: * pois irás ante a
          face do Senhor, a preparar os seus caminhos:
        </Text>
        <Text className="latin">
          Ad dandam sciéntiam salútis plebi ejus: * in remissiónem peccatórum
          eórum:
        </Text>
        <Text className="vernacular">
          E dar aoseu povo o conhecimento da salvação: * a fim de alcançar a
          remissão dos seus pecados:
        </Text>
        <Text className="latin">
          Per víscera misericórdiæ Dei nostri: * in quibus visitávit nos, óriens
          ex alto:
        </Text>
        <Text className="vernacular">
          Pelas entranhas da misericórdia do nosso Deus: * pela qual nos
          visitará um Sol, nascendo do alto:
        </Text>
        <Text className="latin">
          Illumináre his, qui in ténebris, et in umbra mortis sedent: * ad
          dirigéndos pedes nostros in viam pacis.
        </Text>
        <Text className="vernacular">
          Para iluminar aqueles que jazem nas trevas e na sombra da morte: * e
          dirigir nossos passos no caminho da paz.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
          Spíritui Sancto.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum. Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
