import { View } from "react-native";
import { H1, H2, H4, H6 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageVerdades() {
  return (
    <PageWrapper>
      <H1 text="Verdades de Fé" />
      <H2 text="Os dez mandamentos" />
      <View className="list-group list-group-flush">
        <Typography className="li list-group-item">
          Adorar a Deus e amá-Lo sobre todas as coisas.
        </Typography>
        <Typography className="li list-group-item">
          Não invocar o santo nome de Deus em vão.
        </Typography>
        <Typography className="li list-group-item">
          Santificar os domingos e festas de guarda.
        </Typography>
        <Typography className="li list-group-item">
          Honrar pai e mãe (e os outros legítimos superiores).
        </Typography>
        <Typography className="li list-group-item">
          Não matar (nem causar outro dano, no corpo ou na alma, a si mesmo ou
          ao próximo).
        </Typography>
        <Typography className="li list-group-item">
          Guardar castidade nas palavras e nas obras.
        </Typography>
        <Typography className="li list-group-item">
          Não furtar (nem injustamente reter ou danificar os bens do próximo).
        </Typography>
        <Typography className="li list-group-item">
          Não levantar falsos testemunhos (nem de qualquer outro modo faltar à
          verdade ou difamar o próximo).
        </Typography>
        <Typography className="li list-group-item">
          Guardar castidade nos pensamentos e nos desejos.
        </Typography>
        <Typography className="li list-group-item">
          Não cobiçar as coisas alheias.
        </Typography>
      </View>
      <H2 text="Os dois mandamentos de caridade" />
      <Typography className="vernacular">
        Amarás o Senhor teu Deus, com todo teu coração, com toda tua alma e com
        toda tua mente Amarás ao próximo como a ti mesmo.
      </Typography>
      <H2 text="A regra de ouro" />
      <Typography className="vernacular">
        Tudo quanto quiserdes que os homens vos façam, fazei-lho vós também.
      </Typography>
      <H2 text="Os cinco preceitos da Igreja" />
      <View className="list-group list-group-flush">
        <Typography className="li list-group-item">
          Participar na Missa, aos domingos e festas de guarda e abster-se de
          trabalhos e actividades que impeçam a santificação desses dias.
        </Typography>
        <Typography className="li list-group-item">
          Confessar os pecados ao menos uma vez cada ano.
        </Typography>
        <Typography className="li list-group-item">
          Comungar o sacramento da Eucaristia ao menos pela Páscoa.
        </Typography>
        <Typography className="li list-group-item">
          Guardar a abstinência e jejuar nos dias determinados pela Igreja.
        </Typography>
        <Typography className="li list-group-item">
          Contribuir para as necessidades materiais da Igreja, segundo as
          possibilidades.
        </Typography>
      </View>
      <H2 text="Sacramentos" />
      <Typography className="vernacular">
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
      </Typography>
      <H2 text="As Bem-Aventuranças" />
      <Typography className="vernacular">
        Bem-aventurados os pobres em espírito, porque deles é o reino dos céus.
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
        Bem-aventurados os pacificadores, porque serão chamados filhos de Deus.
        {"\n"}
        Bem-aventurados os que sofrem perseguição por causa da justiça, porque
        deles é o reino dos céus.
        {"\n"}
        Bem-aventurados sereis quando vos insultarem, vos perseguirem e,
        mentindo, disserem toda a espécie de calúnias contra vós.
        {"\n"}
        Alegrai-vos e exultai, porque será grande a vossa recompensa nos céus.
      </Typography>
      <H2 text="Dias de Obrigação" />
      <Typography className="aside">Para além de todos os Domingos</Typography>
      <View className="list-group list-group-flush">
        <Typography className="li list-group-item">
          1 de Janeiro - Circuncisão do Senhor
        </Typography>
        <Typography className="li list-group-item">
          6 de Janeiro - Epifania
        </Typography>
        <Typography className="li list-group-item">
          19 de Março - Solenidade de São José
        </Typography>
        <Typography className="li list-group-item">
          Ascensão de Jesus - Quinta-feira da sexta semana da Páscoa
        </Typography>
        <Typography className="li list-group-item">
          Corpus Christi - Primeira quinta-feira após o Domingo da Santíssima
          Trindade
        </Typography>
        <Typography className="li list-group-item">
          29 de Junho - Solenidade dos Apóstolos São Pedro e São Paulo
        </Typography>
        <Typography className="li list-group-item">
          15 de Agosto - Assunção de Maria
        </Typography>
        <Typography className="li list-group-item">
          1 de Novembro - Dia de Todos-os-Santos
        </Typography>
        <Typography className="li list-group-item">
          8 de Dezembro - Imaculada Conceição de Maria
        </Typography>
        <Typography className="li list-group-item">
          25 de Dezembro - Natal
        </Typography>
      </View>
      <H2 text="Trabalhos de Misericórdia" />
      <H6 text="Corporais" />
      <Typography className="latin">
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
      </Typography>
      <H6 text="Espirituais" />
      <Typography className="vernacular">
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
      </Typography>
      <H2 text="Virtudes" />
      <H6 text="Cardeais" />
      <Typography className="latin">
        Prudência
        {"\n"}
        Justiça
        {"\n"}
        Fortaleza
        {"\n"}
        Temperança
      </Typography>
      <H6 text="Teologais" />
      <Typography className="vernacular">
        Fé
        {"\n"}
        Esperança
        {"\n"}
        Caridade
      </Typography>
      <H2 text="Pecados Contra o Espírito Santo" />
      <Typography className="aside">
        Pecados de pura malícia, que são contrários à bondade que se atribui ao
        Espírito Santo.
      </Typography>
      <Typography className="vernacular">
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
      </Typography>
      <H2 text="Pecados que Bradam aos Céus" />
      <Typography className="aside">
        Sua malícia é tão grave e manifesta, que provoca Deus a puni-los com os
        mais severos castigos.
      </Typography>
      <Typography className="vernacular">
        Homicídio voluntário; Pecado impuro contra a natureza; Opressão dos
        pobres, principalmente órfãos e viúvas; Não pagar o salário a quem
        trabalha.
      </Typography>
      <H2 text="Do Espírito Santo" />
      <H6 text="Dons" />
      <Typography className="latin">
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
      </Typography>
      <H6 text="Frutos" />
      <Typography className="vernacular">
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
      </Typography>
      <H4 text="Pecados Capitais" />
      <Typography className="latin">
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
      </Typography>
      <H4 text="Virtudes Opostas aos Pecados Capitais" />
      <Typography className="vernacular">
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
      </Typography>
      <H2 text="Novíssimos" />
      <Language>
        <Typography className="latin">
          Mors
          {"\n"}
          Iudicium
          {"\n"}
          Infernus
          {"\n"}
          Paradisus
        </Typography>
        <Typography className="vernacular">
          Morte
          {"\n"}
          Juízo
          {"\n"}
          Inferno
          {"\n"}
          Paraíso
        </Typography>
      </Language>
      <H2 text="Assuntos para Meditação Diária" />
      <Language>
        <Typography className="latin">
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
        </Typography>
        <Typography className="vernacular">
          Deus para glorificar;{"\n"}
          Jesus para imitar;{"\n"}A abençoada Virgem e os Santos para venerar;
          {"\n"}
          Os Anjos para invocar;{"\n"}A alma para salvar;{"\n"}O corpo para
          mortificar;{"\n"}
          Virtudes para conquistar;{"\n"}
          Pecados para expiar;{"\n"}O paraíso para ganhar;{"\n"}O inferno para
          evitar;{"\n"}
          Eternidade para preparar;{"\n"}
          Tempo para bem aproveitar;{"\n"}O próximo para edificar;{"\n"}] O
          mundo para desprezar;{"\n"}
          Demónios para combater;{"\n"}
          Paixões para refrear;{"\n"}A morte sempre esperar;{"\n"}E o julgamento
          para se preparar.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
