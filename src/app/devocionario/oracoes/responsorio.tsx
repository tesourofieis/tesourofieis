import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageResponsorio() {
  return (
    <PageWrapper>
      <H1 text="Responsório de Santo António" />

      <Language>
        <Typography className="latin">
          Si quæris mirácula, mors, error, calámitas, dæmon, lepra fúgiunt, ægri surgunt sani.
        </Typography>
        <Typography className="vernacular">
          Se milagres procurais, a morte, o erro, a calamidade, o demónio, e a lepra fogem, os
          enfermos saudáveis se levantam.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> Cedunt mare, víncula: membra, resque
          pérditas, pétunt et accípiunt juvénes et cani.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Cede o mar embravecido, recupera-se o
          perdido, pedem e recebem, tanto velhos como mancebos.
        </Typography>
        <Typography className="latin">
          Péreunt perícula, cessat et necéssitas, narrent hi qui séntiunt, dicant Paduáni.
        </Typography>
        <Typography className="vernacular">
          Desaparecem os perigos e cessa a indigência, digam-no aqueles que o sentiram, e digam-no
          os Paduanos.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> Cedunt mare, víncula: membra, resque
          pérditas, pétunt et accípiunt juvénes et cani.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Cede o mar embravecido, recupera-se o
          perdido, pedem e recebem, tanto velhos como mancebos.
        </Typography>
        <Typography className="latin">Glória Patri et Fílio et Spirítui Sancto.</Typography>
        <Typography className="vernacular">
          Glória ao Pai, e ao Filho e ao Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> Cedunt mare, víncula: membra, resque
          pérditas, pétunt et accípiunt juvénes et cani.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Cede o mar embravecido, recupera-se o
          perdido, pedem e recebem, tanto velhos como mancebos.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Ora pro nobis, beate Antoni.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Rogai por nós, bem-aventurado António.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ut digni efficiamur promissionibus
          Christi.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Para que sejamos dignos das promessas
          de Cristo.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Ecclesiam tuam, Deus, beati Antonii Confessoris tui atque Doctoris solemnitas votiva
          lætificet, ut spiritualibus semper muniatur auxiliis, et gáudiis perfrui mereatur æternis.
          Per Christum Dóminum nostrum. <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, nós Vos suplicamos, que alegre à vossa Igreja a solenidade votiva do
          bem-aventurado Santo António, vosso Confessor e Doutor, para que, fortalecida sempre com
          os espirituais auxílios, mereça gozar os prazeres eternos. Por Jesus Cristo, Nosso Senhor.{" "}
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
