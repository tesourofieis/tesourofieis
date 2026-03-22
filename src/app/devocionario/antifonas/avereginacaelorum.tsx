import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAvereginacaelorum() {
  return (
    <PageWrapper>
      <H1 text="Ave, Regína cælórum" />

      <Language>
        <Typography className="latin">
          Ave, Regína cælórum, Ave, Dómina Angelórum: Salve radix, salve porta, Ex qua mundo lux est
          orta: Gaude, Virgo gloriósa, Super omnes speciósa, Vale, o valde decóra, Et pro nobis
          Christum exóra.
        </Typography>
        <Typography className="vernacular">
          Ave, ó Rainha dos Céus, Ave ó Senhora dos Anjos. Salve, ó rebento de Jessé, salve ó porta
          por onde veio ao mundo a luz salvadora. Exultai, ó Virgem gloriosa, de beleza sem igual.
          Eu Vos saúdo, ó formosura soberana, rogai a Cristo por nós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Dignaré me laudáre te, Virgo sacráta.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Dignai-Vos aceitar, Senhora, os meus
          louvores.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Da mihi virtútem contra hostes tuos.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E dai-me coragem para combater os
          vossos inimigos.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Concéde, miséricors Deus, fragilitáti nostræ præsídium; ut, qui sanctæ Dei Genetrícis
          memóriam ágimus; intercessiónis eíus auxílio, a nostris iniquitátibus resurgámus. Per
          eúmdem Christum Dóminum nóstrum.
        </Typography>
        <Typography className="vernacular">
          Concedei, misericordioso Deus, proteção à nossa fragilidade; para, ao honrarmos a memória
          da Santa Mãe de Deus, com o auxílio de sua intercessão, ressurjamos de nossas iniquidades.
          Pelo mesmo Cristo, Senhor nosso.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
