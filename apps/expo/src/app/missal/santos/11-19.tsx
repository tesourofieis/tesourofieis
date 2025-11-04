import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1119() {
  return (
    <PageWrapper>
      <H1 text="Santa Isabel, Viúva, a 19 de Novembro" />

      <Typography className="comment">
        Isabel, filha de André, rei da Hungria, foi dada em casamento ao
        landgrave de Thuringia Luiz IV, do qual teve três filhos, Hermano,
        Sophia e Gertrudes. O marido, que era um santo, deixou-a inteiramente
        livre em suas práticas de devoção e caridade. Como a mulher forte, da
        qual nos fala a Epístola, se levantava de noite para orar, distribuía
        esmolas aos pobres, com grande prodigalidade, tecendo ela própria a lã
        para confeccionar agasalhos. A sua nota distintiva era o amor aos
        doentes e leprosos, de quem cuidava com ternura maternal, osculando-lhes
        as chagas, com respeito. Morto o esposo, quiz tudo abandonar para
        adquirir a pérola da vida eterna (Ev.), e revestindo-se de vestes
        grosseiras, entrou na Ordem dos Penitentes de São Francisco, onde se
        tornou célebre por sua paciência e humildade. O cunhado, feito
        landegrave, expulsou-a com os filhos da residência principesca de
        Wartburg, e, aquela que era chamada a mãe dos pobres, não encontrou
        sequer um tecto hospitaleiro para abrigá-la. Morreu aos 24 annos, em
        1231.
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
          Tuórum corda fidélium, Deus miserátor, illústra: et, beátæ Elisabeth
          précibus gloriósis; fac nos próspera mundi despícere, et cœlésti
          semper consolatióne gaudére. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus de misericórdia, esclarecei os corações dos vossos fiéis; e,
          pelas gloriosas preces da B. Isabel, concedei-nos a graça de
          desprezarmos as prosperidades deste mundo e de gozarmos perpetuamente
          a consolação celestial. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
