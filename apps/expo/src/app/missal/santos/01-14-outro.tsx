import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0114Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Félix, Presb. e Márt., a 14 de Janeiro" />

      <Typography className="comment">
        Este santo Sacerdote nasceu em Nola, pequena cidade do sul da Itália e
        morreu pelo ano de 312. Violentamente perseguido pela fé, mereceu o
        título de mártir, embora tivesse sobrevivido aos cruéis suplícios que
        lhe foram infligidos. Inúmeros milagres tornaram célebre o seu túmulo.
        Segundo testemunha S. Paulino, por ele convertido, Nola é, depois Roma,
        o segundo centro das numerosas peregrinações que caracterizam o século
        IV. Assim se afirma no seu glorioso servo o poder divino do Mestre.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Concéde, quǽsumus, quaténus, quorum sollémnia ágimus, étiam actus
          imitémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó omnipotente Deus, que os exemplos dos vossos Santos
          nos incitem a uma vida melhor, de que modo que imitemos também as
          acções daquele cuja solenidade celebramos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias tibi, Dómine, beáti Félicis Mártyris tui dicátas méritis,
          benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Aceitai benignamente, Senhor, as hóstias que Vos oferecemos em honra
          dos méritos do B. Félix, vosso Mártir, e permiti que nos alcancem o
          vosso perpétuo auxílio. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, Dómine, salutáribus repléti mystériis: ut, beáti Félicis
          Mártyris tui, cujus sollémnia celebrámus, oratiónibus adjuvémur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Havendo sido saciados com os salutares dons, dignai-Vos conceder-nos,
          Senhor, que sejamos auxiliados pelas orações do vosso B. Mártir Félix,
          cuja solenidade celebrámos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
