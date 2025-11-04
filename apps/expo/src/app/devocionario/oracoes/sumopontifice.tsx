import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSumopontifice() {
  return (
    <PageWrapper>
      <H1 text="Pro Summo Pontifice" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Orémus pro Pontífice nostro N.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Oremos pelo nosso Pontífice N.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dóminus consérvet eum, et
          vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in
          ánimam inimicórum ejus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Que o Senhor o conserve e
          vivifique, que o faça santo na terra e o não entregue à vontade dos
          seus inimigos.
        </Typography>
        <Typography className="latin">Pater Noster... Ave Maria...</Typography>
        <Typography className="vernacular">Pai Nosso... Ave Maria...</Typography>
        <Typography className="latin">
          <Typography className="latin">
            <Typography className="versicle"> ℣. </Typography>{" "}
          </Typography>
          Deus, ómnium fidélium pastor et rector, fámulum tuum N., quem pastórem
          Ecclésiæ tuæ præésse voluísti, propítius réspice: da ei, quǽsumus,
          verbo et exémplo, quibus præest, profícere: ut ad vitam, una cum grege
          sibi crédito, pervéniat sempitérnam. Per Christum, Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            <Typography className="versicle"> ℣. </Typography>{" "}
          </Typography>
          Ó Deus, pastor e guia de todos os fieis, olhai misericordiosamente
          sobre vosso Servo N. que escolheestes para pastor da vossa Igreja;
          concedei-lhe que, com sua palavra e exemplo, encaminhe o rebanho que
          lhe confiastes, e juntamente com ele, possa alcançar a vida eterna.
          Por Cristo Senhor nosso.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography>Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography>Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
