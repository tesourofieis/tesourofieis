import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0919() {
  return (
    <PageWrapper>
      <H1 text="S. Januário e Outros, Mártires, a 19 de Setembro" />

      <Typography className="comment">
        Em Pozzola, na Campania, diz o Martyrologio Romano, festa dos santos Martyres Januario,
        bispo de Benevento, Festo, seu diácono, Didier, seu leitor, Socio, diácono da Igreja de
        Misena, Proculo, diácono de Pozzola, Eutichio e Acucio que, depois de acorrentados e presos,
        foram decapitados sob o imperador Diocleciano (305). O corpo de S. Januario foi levado para
        Nápoles e honrosamente sepultado na igreja onde se conserva ainda o seu sangue, numa ampola
        de vidro. Quando colocam a ampola perto da cabeça do Santo Martyr, o sangue se torna líquido
        e ferve, como se acabasse de ser derramado. Esse milagre, conhecido com o nome de milagre de
        São Januario, renova-se ainda em nossos dias. O sangue conservado em duas ampolas de vidro,
        coagulado em forma de massa, vermelho escuro, aumenta de volume e de peso quando se torna
        líquido, fica de um vermelho vivo, enquanto que se cobre de bolhas a superfície, levando a
        dizer que entra em ebulição. O prodígio dá-se em três épocas do ano; durante as festas de
        Maio, que duram nove dias, a partir do 1º Domingo do mês; em Setembro durante oito dias, de
        19 a 26 e em Dezembro no dia 16.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/8muitosmartires3#evangelho2"
        title="Muitos Mártires - Missa Salus autem"
      />
    </PageWrapper>
  );
}
