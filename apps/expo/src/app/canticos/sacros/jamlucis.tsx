import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageJamlucis() {
  return (
    <PageWrapper>
      <H1 text="Jam lucis" />

      <Language>
        <Typography className="latin">
          Jam lucis orto sídere, Deum precémur súpplices, Ut in diúrnis áctibus
          Nos servet a nocéntibus.
        </Typography>
        <Typography className="vernacular">
          Com o sol que se alevanta, A Deus se elevam nossas súplicas, Nos actos
          diurnos, Nos preserve de todo o mal.
        </Typography>
        <Typography className="latin">
          Linguam refrénans témperet, Ne litis horror ínsonet: Visum fovéndo
          cóntegat, Ne vanitátes háuriat.
        </Typography>
        <Typography className="vernacular">
          Moderai a nossa língua, A mentira nos não manche, Nos anime e guarde a
          vista, Para em vaidades se não perder.
        </Typography>
        <Typography className="latin">
          Sint pura cordis íntima, Absístat et vecórdia; Carnis terat supérbiam
          Potus cibíque párcitas.
        </Typography>
        <Typography className="vernacular">
          Seja puro em nosso peito o coração, E banida a loucura: A carne nos
          tempere a soberba, E a bebida reprima o orgulho.
        </Typography>
        <Typography className="latin">
          Ut, cum dies abscésserit, Noctémque sors redúxerit, Mundi per
          abstinéntiam Ipsi canámus glóriam.
        </Typography>
        <Typography className="vernacular">
          E quando a tarde descer, E quando a noite chegar, Esquecendo-nos do
          mundo, Cantemos a vossa glória.
        </Typography>
        <Typography className="latin">
          Deo Patri sit glória, Eiúsque soli Fílio, Cum Spíritu Paráclito, Nunc
          et per omne sǽculum.
        </Typography>
        <Typography className="vernacular">
          A Deus Pai se dê glória, E ao seu Filho também, Assim como ao Espírito
          Paráclito, Agora e para todo o sempre.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
