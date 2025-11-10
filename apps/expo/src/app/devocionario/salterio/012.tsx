import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page012() {
  return (
    <PageWrapper>
      <H1 text="Salmo 12" />

      <Language>
        <Typography className="latin">
          Úsquequo, Dómine, obliviscéris me in finem? * Úsquequo avértis fáciem
          tuam a me?
        </Typography>
        <Typography className="vernacular">
          Até quando, ó Senhor, me esquecereis para sempre? * Até quando
          afastareis de mim a vossa face?
        </Typography>
        <Typography className="latin">
          Quámdiu ponam consília in ánima mea, * dolórem in corde meo per diem?
        </Typography>
        <Typography className="vernacular">
          Até quando trarei a minha alma com planos, * e o meu coração todo o
          dia em dor?
        </Typography>
        <Typography className="latin">
          Úsquequo exaltábitur inimícus meus super me? * Réspice, et exáudi me,
          Dómine, Deus meus.
        </Typography>
        <Typography className="vernacular">
          Até quando o meu inimigo será exaltado sobre mim? * Olhai para mim e
          escutai-me, ó Senhor meu Deus.
        </Typography>
        <Typography className="latin">
          Illúmina óculos meos ne umquam obdórmiam in morte: * nequándo dicat
          inimícus meus: præválui advérsus eum.
        </Typography>
        <Typography className="vernacular">
          Iluminai os meus olhos para que nunca durma na morte: * para que nunca
          o meu inimigo diga: prevaleci contra ele.
        </Typography>
        <Typography className="latin">
          Qui tríbulant me, exsultábunt si motus fúero: * ego autem in
          misericórdia tua sperávi.
        </Typography>
        <Typography className="vernacular">
          Os que me atribulam exultarão se for amotinado: * eu, porém, esperei
          na vossa misericórdia.
        </Typography>
        <Typography className="latin">
          Exsultábit cor meum in salutári tuo: cantábo Dómino qui bona tríbuit
          mihi: * et psallam nómini Dómini altíssimi.
        </Typography>
        <Typography className="vernacular">
          Meu coração exultará na vossa salvação: cantarei ao Senhor que bem me
          fez: * e salmos entoarei ao nome do altíssimo Senhor.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
