import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageVerdades() {
  return (
    <SafeAreaView>
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
          Amarás o Senhor teu Deus, com todo teu coração, com toda tua alma e
          com toda tua mente Amarás ao próximo como a ti mesmo.
          <Text className="h2">A regra de ouro</Text>
          Tudo quanto quiserdes que os homens vos façam, fazei-lho vós também.
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
          <View className="list-group list-group-flush">
            <Text className="li list-group-item">Baptismo</Text>
            <Text className="li list-group-item">Confirmação</Text>
            <Text className="li list-group-item">Eucaristia</Text>
            <Text className="li list-group-item">Penitência ou Confissão</Text>
            <Text className="li list-group-item">Extrema Unção</Text>
            <Text className="li list-group-item">Ordem</Text>
            <Text className="li list-group-item">Matrimónio</Text>
          </View>
          <Text className="h2">As Bem-Aventuranças</Text>
          Bem-aventurados os pobres em espírito, porque deles é o reino dos
          céus. Bem-aventurados os que choram, porque serão consolados.
          Bem-aventurados os mansos, porque possuirão a terra. Bem-aventurados
          os que têm fome e sede de justiça, porque serão saciados.
          Bem-aventurados os misericordiosos, porque alcançarão misericórdia.
          Bem-aventurados os puros de coração, porque verão a Deus.
          Bem-aventurados os pacificadores, porque serão chamados filhos de
          Deus. Bem-aventurados os que sofrem perseguição por causa da justiça,
          porque deles é o reino dos céus. Bem-aventurados sereis quando vos
          insultarem, vos perseguirem e, mentindo, disserem toda a espécie de
          calúnias contra vós. Alegrai-vos e exultai, porque será grande a vossa
          recompensa nos céus.
          <Text className="h2">Dias de Obrigação</Text>
          <View className="aside">Para além de todos os Domingos</View>
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
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Corporais</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Espirituais</Text>
            </Text>
            <Text className="text-base latin">
              <View className="text-base latin">
                <Text className="text-base latin">
                  Dar de comer a quem tem fome
                </Text>
                <Text className="li list-group-item">
                  Dar de beber a quem tem sede
                </Text>
                <Text className="li list-group-item">Vestir os nus</Text>
                <Text className="li list-group-item">
                  Dar pousada aos peregrinos
                </Text>
                <Text className="li list-group-item">Visitar os enfermos</Text>
                <Text className="li list-group-item">Visitar os presos</Text>
                <Text className="li list-group-item">Enterrar os mortos</Text>
              </View>
            </Text>
            <Text className="text-base">
              <View className="list-group list-group-flush">
                <Text className="li list-group-item">Dar bons conselhos</Text>
                <Text className="li list-group-item">
                  Ensinar os ignorantes
                </Text>
                <Text className="li list-group-item">
                  Corrigir os que erram
                </Text>
                <Text className="li list-group-item">Consolar os tristes</Text>
                <Text className="li list-group-item">Perdoar as injúrias</Text>
                <Text className="li list-group-item">
                  Suportar com paciência as fraquezas do nosso próximo
                </Text>
                <Text className="li list-group-item">
                  Rezar a Deus por vivos e defuntos
                </Text>
              </View>
            </Text>
          </View>
          <Text className="h2">Virtudes</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Cardeais</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Teologais</Text>
            </Text>
            <Text className="text-base latin">
              <View className="text-base latin">
                <Text className="text-base latin">Prudência</Text>
                <Text className="li list-group-item">Justiça</Text>
                <Text className="li list-group-item">Fortaleza</Text>
                <Text className="li list-group-item">Temperança</Text>
              </View>
            </Text>
            <Text className="text-base">
              <View className="list-group list-group-flush">
                <Text className="li list-group-item">Fé</Text>
                <Text className="li list-group-item">Esperança</Text>
                <Text className="li list-group-item">Caridade</Text>
              </View>
            </Text>
          </View>
          <Text className="h2">Pecados Contra o Espírito Santo</Text>
          <View className="aside">
            Pecados de pura malícia, que são contrários à bondade que se atribui
            ao Espírito Santo.
          </View>
          Desesperar da salvação; Presunção de se salvar sem merecimentos;
          Combater a verdade conhecida; Ter inveja das graças que Deus dá a
          outrem; Obstinar-se no pecado; Morrer na impenitência final.
          <Text className="h2">Pecados que Bradam aos Céus</Text>
          <View className="aside">
            Sua malícia é tão grave e manifesta, que provoca Deus a puni-los com
            os mais severos castigos.
          </View>
          Homicídio voluntário; Pecado impuro contra a natureza; Opressão dos
          pobres, principalmente órfãos e viúvas; Não pagar o salário a quem
          trabalha.
          <Text className="h2">Do Espírito Santo</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Dons</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Frutos</Text>
            </Text>
            <Text className="text-base latin">
              <View className="text-base latin">
                <Text className="text-base latin">Sabedoria</Text>
                <Text className="li list-group-item">Entendimento</Text>
                <Text className="li list-group-item">Conselho</Text>
                <Text className="li list-group-item">Fortaleza</Text>
                <Text className="li list-group-item">Ciência</Text>
                <Text className="li list-group-item">Piedade</Text>
                <Text className="li list-group-item">Temor de Deus</Text>
              </View>
            </Text>
            <Text className="text-base">
              <View className="list-group list-group-flush">
                <Text className="li list-group-item">Amor</Text>
                <Text className="li list-group-item">Alegria</Text>
                <Text className="li list-group-item">Paz</Text>
                <Text className="li list-group-item">Paciência</Text>
                <Text className="li list-group-item">Longanimidade</Text>
                <Text className="li list-group-item">Bondade</Text>
                <Text className="li list-group-item">Benignidade</Text>
                <Text className="li list-group-item">Mansidão</Text>
                <Text className="li list-group-item">Fé</Text>
                <Text className="li list-group-item">Modéstia</Text>
                <Text className="li list-group-item">Continência</Text>
                <Text className="li list-group-item">Castidade</Text>
              </View>
            </Text>
          </View>
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Pecados Capitais</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Virtudes Opostas</Text>
            </Text>
            <Text className="text-base latin">
              <View className="text-base latin">
                <Text className="text-base latin">Soberba</Text>
                <Text className="li list-group-item">Avareza</Text>
                <Text className="li list-group-item">Luxúria</Text>
                <Text className="li list-group-item">Ira</Text>
                <Text className="li list-group-item">Gula</Text>
                <Text className="li list-group-item">Inveja</Text>
              </View>
            </Text>
            <Text className="text-base">
              <View className="list-group list-group-flush">
                <Text className="li list-group-item">Humildade</Text>
                <Text className="li list-group-item">Caridade</Text>
                <Text className="li list-group-item">Castidade</Text>
                <Text className="li list-group-item">Paciência</Text>
                <Text className="li list-group-item">Temperança</Text>
                <Text className="li list-group-item">Bondade</Text>
              </View>
            </Text>
          </View>
          <Text className="h2">Novíssimos</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              <View className="text-base latin">
                <Text className="text-base latin">Mors</Text>
                <Text className="li list-group-item">Iudicium</Text>
                <Text className="li list-group-item">Infernus</Text>
                <Text className="li list-group-item">Paradisus</Text>
              </View>
            </Text>
            <Text className="text-base">
              <View className="list-group list-group-flush">
                <Text className="li list-group-item">Morte</Text>
                <Text className="li list-group-item">Juízo</Text>
                <Text className="li list-group-item">Inferno</Text>
                <Text className="li list-group-item">Paraíso</Text>
              </View>
            </Text>
          </View>
          <Text className="h2">Assuntos para Meditação Diária</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Deum glorificare; <br />
              Jesum imitari; <br />
              Beatissimam Virginem et Sanctos venerari; <br />
              Angelos invocare; <br />
              Animam salvare; <br />
              Corpus mortificare; <br />
              Virtutes a Deo exorare; <br />
              Peccata expiare; <br />
              Paradisum comparare; <br />
              Infernum evitare; <br />
              Aeternitatem considerare; <br />
              Tempus bene applicare; <br />
              Proximum ædificare; <br />
              Mundum formidare; <br />
              Dæmones impugnare; <br />
              Passiones frenare; <br />
              Mortem semper exspectare; <br />
              Ad iudicium te præparare.
            </Text>
            <Text className="text-base vernacular">
              Deus para glorificar; <br />
              Jesus para imitar; <br />A abençoada Virgem e os Santos para
              venerar; <br />
              Os Anjos para invocar; <br />A alma para salvar; <br />O corpo
              para mortificar; <br />
              Virtudes para conquistar; <br />
              Pecados para expiar; <br />O paraíso para ganhar; <br />O inferno
              para evitar; <br />
              Eternidade para preparar; <br />
              Tempo para bem aproveitar; <br />O próximo para edificar; <br />O
              mundo para desprezar; <br />
              Demónios para combater; <br />
              Paixões para refrear; <br />A morte sempre esperar; <br />E o
              julgamento para se preparar.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
