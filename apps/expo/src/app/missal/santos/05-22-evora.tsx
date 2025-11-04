import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0522Evora() {
  return (
    <PageWrapper>
      <H1 text="Dedicação da Catedral de Évora, a 22 de Maio" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/25dedicacaoigreja">
          Missa Terríbilis est
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Intróito" />
      <Typography className="vernacular">
        Exultemos todos no Senhor, celebrando a festa da Dedicação da Igreja
        Eborense, de cuja santificação se alegram os Anjos, que louvam o Filho
        de Deus. Aleluia, aleluia. Amei, Senhor, o esplendor da vossa Casa e o
        lugar em que habita a vossa glória.
        <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        <H3 text="Oração" />Ó Deus, que quisestes reformar a Igreja Eborense na
        festividade do B. Mâncio, vosso discípulo e Mártir, Vos suplicamos que
        auxilieis com os dons celestes o vosso povo, a fim de que, cumprindo
        sempre a disciplina eclesiástica, alcance a vida eterna. Ó Vós, que
        viveis e reinais...
      </Typography>
      <H3 text="Evangelho" />
      <Typography className="vernacular">
        Continuação do santo Evangelho segundo S. João. Naquele tempo,
        celebrava-se em Jerusalém a festa da Dedicação. Era no Inverno. E Jesus
        passeava no templo, no pórtico de Salomão. Rodearam-n’O, então, os
        judeus e disseram-Lhe: «Até quando nos trareis perplexos? Se sois o
        Cristo, dizei-nos claramente». Jesus respondeu-lhes: «Eu já vo-lo disse,
        mas não me acreditais. As obras que faço em nome de meu Pai dão
        testemunho de mim; porém, vós não acreditais, porque não sois das minhas
        ovelhas. Minhas ovelhas ouvem a minha voz. Eu conheço-as e elas
        seguem-me. Dou-lhes a vida eterna e jamais perecerão, porque ninguém as
        arrebata da minha mão».
      </Typography>
    </PageWrapper>
  );
}
