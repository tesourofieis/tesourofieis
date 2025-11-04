import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1016() {
  return (
    <PageWrapper>
      <H1 text="Santa Hedviges, Viúva, a 16 de Outubro" />

      <Typography className="comment">
        Hedviges, nascida de familia real, e ainda mais ilustre pela inocência
        de sua vida, era filha de Bertholdo, príncipe de Carinthia e tia materna
        de Santa Isabel de Hungria. Dada em casamento a Henrique, duque da
        Polónia, cumpriu tão santamente os deveres de esposa que a Igreja a
        compara à mulher forte, cujo retrato o Espirito Santo nos dá na Epístola
        deste dia. Teve três filhos e três filhas. Castigava o corpo pelo jejum
        e vigílias e pela severidade do vestuário: era imensa a sua caridade
        para com os pobres, servindo-os ela propria à mesa. Lavava e osculava as
        ulceras dos leprosos. Para melhor entregar-se ao serviço de Deus,
        conseguiu do esposo a promessa, por voto, de guardarem ambos a
        continência. Morto o duque, Hedviges, como o negociante do qual fala o
        Evangelho, despojou-se de todos os seus bens para adquirir a pérola
        preciosa da vida eterna. Após instantes preces e, por inspiração divina,
        passou generosamente do seio das pompas do século para a vida humilde da
        cruz (Or.), entrando no mosteiro de Trebnitz, da Ordem dos
        Cistercienses, do qual era Abadessa sua filha Gertrudes. Morreu a 15 de
        Outubro de 1243 e, na Polónia, é venerada como Padroeira, com particular
        devoção.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátam Hedwígem a sǽculi pompa ad húmilem tuæ Crucis
          sequélam toto corde transíre docuísti: concéde; ut ejus méritis et
          exémplo discámus peritúras mundi calcáre delícias, et in ampléxu tuæ
          Crucis ómnia nobis adversántia superáre: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que inspirastes a B. Hedviges a deixar as pompas do mundo para
          abraçar com fervor a humildade da vossa Cruz, concedei-nos pelos seus
          méritos e exemplos que aprendamos a esmagar as delícias caducas deste
          mundo e, abraçando a vossa Cruz, a vencer todas as adversidades. Ó
          Vós, que viveis e reinais...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
