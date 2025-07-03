import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import LadainhaLoreto from "./ladainhas/loreto";
import AveMaria from "./oracoes/avemaria";
import Gloria from "./oracoes/gloria";
import PaiNosso from "./oracoes/painosso";
import PageSimboloapostolos from "./oracoes/simboloapostolos";
import PageSinalCruz from "./oracoes/sinalcruz";
import { H1, H2 } from "~/components/Headings";


export default function PageRosario() {
  return (
    <PageWrapper>
      <H1 text="Rosário" />
      <H1 text="Sinal da Cruz" />
      <PageSinalCruz />
      <H1 text="No Crucifixo" />
      <PageSimboloapostolos />
      <H2 text="Oferecimento do Santo Rosário" />
      <Text className="text-base">
        Santíssima Virgem, Mãe de Deus, eu Vos ofereço este rosário em desagravo
        do Santíssimo Coração de Nosso Senhor Jesus Cristo, Vosso Filho, e em
        desagravo do Vosso Coração Imaculado; e pelas intenções que Vos
        apresento:
      </Text>
      <Text className="text-base">Referir as intenções.</Text>
      <H2 text="Intenções do Santo Padre" />
      <Language>
        <Text className="latin">Exaltatio S. Matris Ecclesiæ.</Text>
        <Text className="li vernacular">Exaltação da Santa Igreja.</Text>
        <Text className="latin">Propagatio fidei.</Text>
        <Text className="li vernacular">Propagação da fé.</Text>
        <Text className="latin">Extirpatio hæresum.</Text>
        <Text className="li vernacular">Extirpação das heresias.</Text>
        <Text className="latin">Conversio peccatorum.</Text>
        <Text className="li vernacular">Conversão dos pecadores.</Text>
        <Text className="latin">Pax inter principes christianos.</Text>
        <Text className="li vernacular">
          Paz entre os Reis e Príncipes católicos.
        </Text>
      </Language>
      <H1 text="Nas contas maiores" />
      <PaiNosso />
      <H1 text="Nas contas menores" />
      <AveMaria />
      <H1 text="No fim das dezenas" />
      <Gloria />
      <H2 text="Nossa Senhora a Santa Catarina Labouré" />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>O Maria sine labe concepta.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ó Maria concebida sem pecado.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Ora pro nobis, qui confugimus
          ad te.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Rogai por nós que recorremos a
          vós.
        </Text>
      </Language>
      <H2 text="Nossa Senhora aos Santos Pastorinhos" />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Oh mi Jesu, dimitte nobis débita
          nostra, líbera nos ab igne inférni,
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ó meu Jesus, perdoai-nos e
          livrai-nos do fogo do inferno,
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Conduc in cælum omnes animas,
          præsértim illas quæ máxime indigent misericórdia tua.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Levai as alminhas todas para o
          Céu e socorrei principalmente as que mais precisarem.
        </Text>
      </Language>
      <H1 text="Meditações do Rosário" />
      <H2 text="Mistérios Gozosos" />
      <Text className="aside">Segunda-feira e Quinta-feira</Text>
      <Text className="bold">Primeiro mistério:</Text>
      <Text className="text-base">
        Meditemos na Anunciação do Arcanjo São Gabriel à Santíssima Virgem, e
        roguemos a virtude da humildade.
      </Text>
      <Text className="bold">Segundo mistério:</Text>
      <Text className="text-base">
        Meditemos na Visitação da Santíssima Virgem a Sua Prima, Santa Isabel, e
        roguemos a caridade para com o próximo.
      </Text>
      <Text className="bold">Terceiro mistério:</Text>
      <Text className="text-base">
        Meditemos no Nascimento do Menino Jesus, e roguemos o desprendimento dos
        bens do mundo.
      </Text>
      <Text className="bold">Quarto mistério:</Text>
      <Text className="text-base">
        Meditemos na Apresentação do Menino Jesus no Templo e na Purificação de
        Nossa Senhora, e roguemos a obediência e a pureza do espírito e do
        coração.
      </Text>
      <Text className="bold">Quinto mistério:</Text>
      <Text className="text-base">
        Meditemos na Perda e no Encontro do Menino Jesus no Templo, e roguemos o
        conhecimento das coisas divinas e a prontidão no serviço de Deus.
      </Text>
      <H2 text="Mistérios Dolorosos" />
      <Text className="aside">Terça-feira e Sexta-feira</Text>
      <Text className="bold">Primeiro mistério:</Text>
      <Text className="text-base">
        Meditemos na Agonia de N. S. Jesus Cristo, e roguemos a contrição dos
        nossos pecados.
      </Text>
      <Text className="bold">Segundo mistério:</Text>
      <Text className="text-base">
        Meditemos na flagelação de N. S. Jesus Cristo, e roguemos a mortificação
        dos sentidos.
      </Text>
      <Text className="bold">Terceiro mistério:</Text>
      <Text className="text-base">
        Meditemos na Coroação de Espinhos de N. S. Jesus Cristo, e roguemos a
        mortificação do espírito e do coração.
      </Text>
      <Text className="bold">Quarto mistério:</Text>
      <Text className="text-base">
        Meditemos em N. S. Jesus Cristo levando a Cruz para o Calvário, e
        roguemos a paciência e a resignação.
      </Text>
      <Text className="bold">Quinto mistério:</Text>
      <Text className="text-base">
        Meditemos na Crucifixão e Morte de N. S. Jesus Cristo, e roguemos o amor
        a Deus e a salvação das almas.
      </Text>
      <H2 text="Mistérios Gloriosos" />
      <Text className="aside">
        <Text className="text-base">Quarta-feira, Sábado e Domingo</Text>
      </Text>
      <Text className="bold">Primeiro mistério:</Text>
      <Text className="text-base">
        Meditemos na Ressurreição de N. S. Jesus Cristo, e roguemos para
        recebermos o dom da fé e para a conversão dos pecadores.
      </Text>
      <Text className="bold">Segundo mistério:</Text>
      <Text className="text-base">
        Meditemos na Ascensão de N. S. Jesus Cristo, e roguemos a esperança e o
        desejo do céu.
      </Text>
      <Text className="bold">Terceiro mistério:</Text>
      <Text className="text-base">
        Meditemos na descida do Divino Espírito Santo, e roguemos o amor a Deus
        e o zelo da salvação das almas.
      </Text>
      <Text className="bold">Quarto mistério:</Text>
      <Text className="text-base">
        Meditemos na Assunção da Santíssima Virgem, e roguemos a graça de uma
        boa morte e a devoção a Nossa Senhora.
      </Text>
      <Text className="bold">Quinto mistério:</Text>
      <Text className="text-base">
        Meditemos na Coroação da Santíssima Virgem, e roguemos a perseverança
        final e a confiança em Nossa Senhora.
      </Text>
      <H1 text="Orações no fim do Rosário" />
      <H2 text="Salve Rainha" />
      <Language>
        <Text className="latin">
          Salve, Regina, Mater misericórdiæ, vita, dulcédo et spes nostra,
          salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus geméntes
          et flentes in hac lacrimárum valle. Éia ergo, advocáta nostra, illos
          tuos misericórdes óculos ad nos convérte. Et Jesum benedíctum fructum
          ventris tui, nobis, post hoc exsílium, osténde. O clemens, o pia, o
          dulcis Virgo Maria!
        </Text>
        <Text className="vernacular">
          Salvé, Rainha, mãe de misericórdia, vida, doçura, esperança nossa,
          salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos,
          gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa,
          esses Vossos olhos misericordiosos a nós volvei. E, depois deste
          desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó
          clemente, ó piedosa, ó doce Virgem Maria.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Ora pro nobis, Regina
          Sacratíssimi Rosárii.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Rogai por nós, Rainha do
          Santíssimo Rosário.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Ut digni efficiámur
          promissiónibus Christi.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Para que sejamos dignos das
          promessas de Cristo.
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Deus, cujus Unigénitus per vitam, mortem et resurrectiónem suam nobis
          salútis ætérnæ prǽmia comparávit, concede, quǽsumus: ut hæc mystéria
          sacratissimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod
          continent, et quod promittunt assequámur. Per eundem Christum Dóminum
          nostrum.
        </Text>
        <Text className="vernacular">
          Ó Deus, cujo Filho Unigénito por sua vida, morte e ressurreição nos
          alcançou os prémios da vida eterna, concedei-nos, Vos suplicamos, que,
          venerando nós estes mistérios do Santíssimo Rosário da Virgem Maria,
          imitemos o que eles contêm, e alcancemos o que eles prometem. Pelo
          mesmo Cristo, nosso Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
      <LadainhaLoreto />
      <PageSinalCruz />
    </PageWrapper>
  );
}
