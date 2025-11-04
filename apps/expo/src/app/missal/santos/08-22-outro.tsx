import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0822Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Timóteo e Outros, Mártires, a 22 de Agosto" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Aixílium tuum nobis, Dómine, quǽsumus, placátus impende: et,
          intercedéntibus beátis Martýribus tuis Timótheo, Hippolýto et
          Symphoriáno, déxteram super nos tuæ propitiatiónis exténde. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deixai-Vos aplacar, Senhor, e concedei-nos o vosso auxílio; e pela
          intercessão dos vossos B. B. Mártires Timóteo, Hipólito e Sinforiano
          dignai-Vos amparar-nos com vossa mão propícia. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre
          Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit
          auxílium. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Aceitai, Senhor, esta oferta, que o vosso povo escolhido oferece em
          honra dos vossos Santos, por cujos méritos reconhece ter alcançado
          auxílio na tribulação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Divíni muneris largitate satiáti, quǽsumus, Dómine, Deus noster: ut,
          intercedéntibus sanctis Martýribus tuis Timótheo, Hippolýto et
          Symphoriáno, in ejus semper participatióne vivámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciados abundantemente com o dom divino, ó Senhor, nosso Deus, Vos
          suplicamos, fazei, pela intercessão dos vossos Santos Mártires
          Timóteo, Hipólito e Sinforiano, que participemos sempre dele durante
          toda nossa vida. Por nosso...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
