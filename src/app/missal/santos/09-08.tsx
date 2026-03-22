import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0908() {
  return (
    <PageWrapper>
      <H1 text="Natividade da B. Virgem Maria, a 8 de Setembro" />

      <Typography className="comment">
        Esta festa muito antiga celebrava-se em Roma desde o VII seculo; o Papa Inocêncio IV, para
        realizar o desejo dos Cardeais, antes da eleição do seu predecessor acrescentou-lhe uma
        Oitava, no 1º Concilio de Leão, realizado em 1245. Foi a data de 8 de Setembro que serviu
        para fixar a festa da Imaculada Conceição, nove meses antes (8 de Set.-8 de Dez.). Maria foi
        inseparável de Jesus no plano divino, a liturgia aplica-lhe o que dizem os Livros santos da
        Sabedoria eterna que é o Verbo por quem tudo foi feito. Como o Cristo, a Virgem preside
        realmente a toda a obra da criação, pois, sendo escolhida de toda a eternidade para nos dar
        o Salvador, foi Ela com o seu Filho que Deus teve principalmente em vista quando criava o
        mundo.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/07-02">
          Missa da Visitação da B. Virgem Maria
        </Link>{" "}
        , excepto: Na Oração e Secreta substituir a palavra Visitação por Natividade.
      </Typography>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/12-08#epístola"
        title="Imaculada Conceição da B. Virgem Maria"
      />

      <H3 text="Evangelho" />

      <LinkCard href="/missal/santos/08-16#evangelho" title="S. Joaquim" />
    </PageWrapper>
  );
}
