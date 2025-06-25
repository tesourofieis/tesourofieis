import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageVerdades() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Verdades de Fé</Text>
          <Text className="h2">Os dez mandamentos</Text>
          <View className="list-group list-group-flush">
            <Text className="li list-group-item">
              Adorar a Deus e amá-Lo sobre todas as coisas.
            </Text>
            <Text className="li list-group-item">
              Não invocar o santo nome de Deus em vão.
            </Text>
            <Text className="li list-group-item">
              Santificar os domingos e festas de guarda.
            </Text>
            <Text className="li list-group-item">
              Honrar pai e mãe (e os outros legítimos superiores).
            </Text>
            <Text className="li list-group-item">
              Não matar (nem causar outro dano, no corpo ou na alma, a si mesmo
              ou ao próximo).
            </Text>
            <Text className="li list-group-item">
              Guardar castidade nas palavras e nas obras.
            </Text>
            <Text className="li list-group-item">
              Não furtar (nem injustamente reter ou danificar os bens do
              próximo).
            </Text>
            <Text className="li list-group-item">
              Não levantar falsos testemunhos (nem de qualquer outro modo faltar
              à verdade ou difamar o próximo).
            </Text>
            <Text className="li list-group-item">
              Guardar castidade nos pensamentos e nos desejos.
            </Text>
            <Text className="li list-group-item">
              Não cobiçar as coisas alheias.
            </Text>
          </View>
          <Text className="h2">Os dois mandamentos de caridade</Text>
          <Text className="text-base">
            Amarás o Senhor teu Deus, com todo teu coração, com toda tua alma e
            com toda tua mente Amarás ao próximo como a ti mesmo.
          </Text>
          <Text className="h2">A regra de ouro</Text>
          <Text className="text-base">
            Tudo quanto quiserdes que os homens vos façam, fazei-lho vós também.
          </Text>
          <Text className="h2">Os cinco preceitos da Igreja</Text>
          <View className="list-group list-group-flush">
            <Text className="li list-group-item">
              Participar na Missa, aos domingos e festas de guarda e abster-se
              de trabalhos e actividades que impeçam a santificação desses dias.
            </Text>
            <Text className="li list-group-item">
              Confessar os pecados ao menos uma vez cada ano.
            </Text>
            <Text className="li list-group-item">
              Comungar o sacramento da Eucaristia ao menos pela Páscoa.
            </Text>
            <Text className="li list-group-item">
              Guardar a abstinência e jejuar nos dias determinados pela Igreja.
            </Text>
            <Text className="li list-group-item">
              Contribuir para as necessidades materiais da Igreja, segundo as
              possibilidades.
            </Text>
          </View>
          <Text className="h2">Sacramentos</Text>
          <Text className="text-base">
            Baptismo
            {"\n"}
            Confirmação
            {"\n"}
            Eucaristia
            {"\n"}
            Penitência ou Confissão
            {"\n"}
            Extrema Unção
            {"\n"}
            Ordem
            {"\n"}
            Matrimónio
          </Text>
          <Text className="h2">As Bem-Aventuranças</Text>
          <Text className="text-base">
            Bem-aventurados os pobres em espírito, porque deles é o reino dos
            céus.
            {"\n"}
            Bem-aventurados os que choram, porque serão consolados.
            {"\n"}
            Bem-aventurados os mansos, porque possuirão a terra.
            {"\n"}
            Bem-aventurados os que têm fome e sede de justiça, porque serão
            saciados.
            {"\n"}
            Bem-aventurados os misericordiosos, porque alcançarão misericórdia.
            {"\n"}
            Bem-aventurados os puros de coração, porque verão a Deus.
            {"\n"}
            Bem-aventurados os pacificadores, porque serão chamados filhos de
            Deus.
            {"\n"}
            Bem-aventurados os que sofrem perseguição por causa da justiça,
            porque deles é o reino dos céus.
            {"\n"}
            Bem-aventurados sereis quando vos insultarem, vos perseguirem e,
            mentindo, disserem toda a espécie de calúnias contra vós.
            {"\n"}
            Alegrai-vos e exultai, porque será grande a vossa recompensa nos
            céus.
          </Text>
          <Text className="h2">Dias de Obrigação</Text>
          <Text className="aside">Para além de todos os Domingos</Text>
          <View className="list-group list-group-flush">
            <Text className="li list-group-item">
              1 de Janeiro - Circuncisão do Senhor
            </Text>
            <Text className="li list-group-item">6 de Janeiro - Epifania</Text>
            <Text className="li list-group-item">
              19 de Março - Solenidade de São José
            </Text>
            <Text className="li list-group-item">
              Ascensão de Jesus - Quinta-feira da sexta semana da Páscoa
            </Text>
            <Text className="li list-group-item">
              Corpus Christi - Primeira quinta-feira após o Domingo da
              Santíssima Trindade
            </Text>
            <Text className="li list-group-item">
              29 de Junho - Solenidade dos Apóstolos São Pedro e São Paulo
            </Text>
            <Text className="li list-group-item">
              15 de Agosto - Assunção de Maria
            </Text>
            <Text className="li list-group-item">
              1 de Novembro - Dia de Todos-os-Santos
            </Text>
            <Text className="li list-group-item">
              8 de Dezembro - Imaculada Conceição de Maria
            </Text>
            <Text className="li list-group-item">25 de Dezembro - Natal</Text>
          </View>
          <Text className="h2">Trabalhos de Misericórdia</Text>
          <Language>
            <Text className="latin">Corporais</Text>
            <Text className="vernacular">Espirituais</Text>
            <Text className="latin">
              Dar de comer a quem tem fome
              {"\n"}
              Dar de beber a quem tem sede
              {"\n"}
              Vestir os nus
              {"\n"}
              Dar pousada aos peregrinos
              {"\n"}
              Visitar os enfermos
              {"\n"}
              Visitar os presos
              {"\n"}
              Enterrar os mortos
            </Text>
            <Text className="vernacular">
              Dar bons conselhos
              {"\n"}
              Ensinar os ignorantes
              {"\n"}
              Corrigir os que erram
              {"\n"}
              Consolar os tristes
              {"\n"}
              Perdoar as injúrias
              {"\n"}
              Suportar com paciência as fraquezas do nosso próximo
              {"\n"}
              Rezar a Deus por vivos e defuntos
            </Text>
          </Language>
          <Text className="h2">Virtudes</Text>
          <Language>
            <Text className="latin">Cardeais</Text>
            <Text className="vernacular">Teologais</Text>
            <Text className="latin">
              Prudência
              {"\n"}
              Justiça
              {"\n"}
              Fortaleza
              {"\n"}
              Temperança
            </Text>
            <Text className="vernacular">
              Fé
              {"\n"}
              Esperança
              {"\n"}
              Caridade
            </Text>
          </Language>
          <Text className="h2">Pecados Contra o Espírito Santo</Text>
          <Text className="aside">
            Pecados de pura malícia, que são contrários à bondade que se atribui
            ao Espírito Santo.
          </Text>
          <Text className="text-base">
            Desesperar da salvação;
            {"\n"}
            Presunção de se salvar sem merecimentos;
            {"\n"}
            Combater a verdade conhecida;
            {"\n"}
            Ter inveja das graças que Deus dá a outrem;
            {"\n"}
            Obstinar-se no pecado;
            {"\n"}
            Morrer na impenitência final.
          </Text>
          <Text className="h2">Pecados que Bradam aos Céus</Text>
          <Text className="aside">
            Sua malícia é tão grave e manifesta, que provoca Deus a puni-los com
            os mais severos castigos.
          </Text>
          <Text className="text-base">
            Homicídio voluntário; Pecado impuro contra a natureza; Opressão dos
            pobres, principalmente órfãos e viúvas; Não pagar o salário a quem
            trabalha.
          </Text>
          <Text className="h2">Do Espírito Santo</Text>
          <Language>
            <Text className="latin">
              <Text className="latin">Dons</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Frutos</Text>
            </Text>
            <Text className="latin">
              Sabedoria
              {"\n"}
              Entendimento
              {"\n"}
              Conselho
              {"\n"}
              Fortaleza
              {"\n"}
              Ciência
              {"\n"}
              Piedade
              {"\n"}
              Temor de Deus
            </Text>
            <Text className="vernacular">
              Amor
              {"\n"}
              Alegria
              {"\n"}
              Paz
              {"\n"}
              Paciência
              {"\n"}
              Longanimidade
              {"\n"}
              Bondade
              {"\n"}
              Benignidade
              {"\n"}
              Mansidão
              {"\n"}
              Fé
              {"\n"}
              Modéstia
              {"\n"}
              Continência
              {"\n"}
              Castidade
            </Text>
          </Language>
          <Language>
            <Text className="latin">
              <Text className="latin">Pecados Capitais</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Virtudes Opostas</Text>
            </Text>
            <Text className="latin">
              Soberba
              {"\n"}
              Avareza
              {"\n"}
              Luxúria
              {"\n"}
              Ira
              {"\n"}
              Gula
              {"\n"}
              Inveja
            </Text>
            <Text className="vernacular">
              Humildade
              {"\n"}
              Caridade
              {"\n"}
              Castidade
              {"\n"}
              Paciência
              {"\n"}
              Temperança
              {"\n"}
              Bondade
            </Text>
          </Language>
          <Text className="h2">Novíssimos</Text>
          <Language>
            <Text className="latin">
              Mors
              {"\n"}
              Iudicium
              {"\n"}
              Infernus
              {"\n"}
              Paradisus
            </Text>
            <Text className="vernacular">
              Morte
              {"\n"}
              Juízo
              {"\n"}
              Inferno
              {"\n"}
              Paraíso
            </Text>
          </Language>
          <Text className="h2">Assuntos para Meditação Diária</Text>
          <Language>
            <Text className="latin">
              Deum glorificare; {"\n"}
              Jesum imitari; {"\n"}
              Beatissimam Virginem et Sanctos venerari; {"\n"}
              Angelos invocare; {"\n"}
              Animam salvare; {"\n"}
              Corpus mortificare; {"\n"}
              Virtutes a Deo exorare; {"\n"}
              Peccata expiare; {"\n"}
              Paradisum comparare; {"\n"}
              Infernum evitare; {"\n"}
              Aeternitatem considerare; {"\n"}
              Tempus bene applicare; {"\n"}
              Proximum ædificare; {"\n"}
              Mundum formidare; {"\n"}
              Dæmones impugnare; {"\n"}
              Passiones frenare; {"\n"}
              Mortem semper exspectare; {"\n"}
              Ad iudicium te præparare.
            </Text>
            <Text className="vernacular">
              Deus para glorificar;{"\n"}
              Jesus para imitar;{"\n"}A abençoada Virgem e os Santos para
              venerar;{"\n"}
              Os Anjos para invocar;{"\n"}A alma para salvar;{"\n"}O corpo para
              mortificar;{"\n"}
              Virtudes para conquistar;{"\n"}
              Pecados para expiar;{"\n"}O paraíso para ganhar;{"\n"}O inferno
              para evitar;{"\n"}
              Eternidade para preparar;{"\n"}
              Tempo para bem aproveitar;{"\n"}O próximo para edificar;{"\n"}] O
              mundo para desprezar;{"\n"}
              Demónios para combater;{"\n"}
              Paixões para refrear;{"\n"}A morte sempre esperar;{"\n"}E o
              julgamento para se preparar.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
