import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import LadainhaLoreto from "./ladainhas/loreto";
import AveMaria from "./oracoes/avemaria";
import Gloria from "./oracoes/gloria";
import PaiNosso from "./oracoes/painosso";
import PageSimboloapostolos from "./oracoes/simboloapostolos";
import PageSinalCruz from "./oracoes/sinalcruz";

export default function PageRosario() {
  return (
    <PageWrapper>
      <Text className="h1">Rosário</Text>
      <Text className="h1">Sinal da Cruz</Text>
      <PageSinalCruz />
      <Text className="h1">No Crucifixo</Text>
      <PageSimboloapostolos />
      <Text className="h2">Oferecimento do Santo Rosário</Text>
      <Text className="text-base">
        Santíssima Virgem, Mãe de Deus, eu Vos ofereço este rosário em desagravo
        do Santíssimo Coração de Nosso Senhor Jesus Cristo, Vosso Filho, e em
        desagravo do Vosso Coração Imaculado; e pelas intenções que Vos
        apresento:
      </Text>
      <Text className="text-base">Referir as intenções.</Text>
      <Text className="h2">Intenções do Santo Padre</Text>
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
      <Text className="h1">Nas contas maiores</Text>
      <PaiNosso />
      <Text className="h1">Nas contas menores</Text>
      <AveMaria />
      <Text className="h1">No fim das dezenas</Text>
      <Gloria />
      <Text className="h2">Nossa Senhora a Santa Catarina Labouré</Text>
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
      <Text className="h2">Nossa Senhora aos Santos Pastorinhos</Text>
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
      <Text className="h1">Meditações do Rosário</Text>
      <Text className="h2">Mistérios Gozosos</Text>
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
      <Text className="h2">Mistérios Dolorosos</Text>
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
      <Text className="h2">Mistérios Gloriosos</Text>
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
      <Text className="h1">Orações no fim do Rosário</Text>
      <Text className="h2">Salve Rainha</Text>
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
