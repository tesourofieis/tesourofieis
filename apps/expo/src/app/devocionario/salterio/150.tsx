import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page150() {
  return (
    <PageWrapper>
      <H1 text="Salmo 150" />

      <Language>
        <Typography className="latin">
          Laudáte Dóminum in sanctis ejus: * laudáte eum in firmaménto virtútis
          ejus.
        </Typography>
        <Typography className="vernacular">
          Louvai o Senhor no seu santuário: * louvai-O no seu augusto
          firmamento.
        </Typography>
        <Typography className="latin">
          Laudáte eum in virtútibus ejus: * laudáte eum secúndum multitúdinem
          magnitúdinis ejus.
        </Typography>
        <Typography className="vernacular">
          Louvai-O nas suas virtudes: * louvai-O segundo a multitude da sua
          grandeza.
        </Typography>
        <Typography className="latin">
          Laudáte eum in sono tubæ: * laudáte eum in psaltério, et cíthara.
        </Typography>
        <Typography className="vernacular">
          Louvai-O ao som da trombeta: * louvai-O com o saltério e a cítara.
        </Typography>
        <Typography className="latin">
          Laudáte eum in týmpano, et choro: * laudáte eum in chordis, et órgano.
        </Typography>
        <Typography className="vernacular">
          Louvai-O com timbales e em coro: * louvai-O com cordas e órgão.
        </Typography>
        <Typography className="latin">
          Laudáte eum in cýmbalis benesonántibus: laudáte eum in cýmbalis
          jubilatiónis: * omnis spíritus laudet Dóminum.
        </Typography>
        <Typography className="vernacular">
          Louvai-O com címbalos melodiosos: louvai-O com címbalos de júbilo: *
          todo o espírito louve o Senhor.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
