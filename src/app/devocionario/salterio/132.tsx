import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page132() {
  return (
    <PageWrapper>
      <H1 text="Salmo 132" />

      <Language>
        <Typography className="latin">
          Ecce quam bonum et quam jucúndum, * habitáre fratres in unum:
        </Typography>
        <Typography className="vernacular">
          O quão bom e quão jucundo é, * viverem os irmãos em união:
        </Typography>
        <Typography className="latin">
          Sicut unguéntum in cápite, * quod descéndit in barbam, barbam Aaron,
        </Typography>
        <Typography className="vernacular">
          Como unção na cabeça, * que desce sobre a barba de Arão,
        </Typography>
        <Typography className="latin">
          Quod descéndit in oram vestiménti ejus: * sicut ros Hermon, qui descéndit in montem Sion.
        </Typography>
        <Typography className="vernacular">
          Que desce até à orla do seu manto: * como o orvalho do Hermon, que desce sobre o monte
          Sião.
        </Typography>
        <Typography className="latin">
          Quóniam illic mandávit Dóminus benedictiónem, * et vitam usque in sǽculum.
        </Typography>
        <Typography className="vernacular">
          Porque o Senhor derramou ali a sua bênção, * e vida para sempre.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
