import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page053() {
  return (
    <PageWrapper>
      <H1 text="Salmo 53" />

      <Language>
        <Typography className="latin">
          Deus, in nómine tuo salvum me fac: * et in virtúte tua júdica me.
        </Typography>
        <Typography className="vernacular">
          Salvai-me, ó Deus, por vosso nome: * e com vosso poder julgai-me.
        </Typography>
        <Typography className="latin">
          Deus, exáudi oratiónem meam: * áuribus pércipe verba oris mei.
        </Typography>
        <Typography className="vernacular">
          Ouvi, ó Deus, a minha oração: * atendei às palavras da minha boca.
        </Typography>
        <Typography className="latin">
          Quóniam aliéni insurrexérunt advérsum me, et fortes quæsiérunt ánimam meam: * et non
          proposuérunt Deum ante conspéctum suum.
        </Typography>
        <Typography className="vernacular">
          Porque os estranhos se levantaram contra mim e os fortes buscaram a minha vida: * e a Deus
          não puseram ante si.
        </Typography>
        <Typography className="latin">
          Ecce enim, Deus ádjuvat me: * et Dóminus suscéptor est ánimæ meæ.
        </Typography>
        <Typography className="vernacular">
          Eis que Deus vem em meu auxílio: * e o Senhor é o protector da minha vida.
        </Typography>
        <Typography className="latin">
          Avérte mala inimícis meis: * et in veritáte tua dispérde illos.
        </Typography>
        <Typography className="vernacular">
          Fazei recair os males sobre os meus inimigos: * e exterminai-os na vossa verdade.
        </Typography>
        <Typography className="latin">
          Voluntárie sacrificábo tibi, * et confitébor nómini tuo, Dómine: quóniam bonum est:
        </Typography>
        <Typography className="vernacular">
          Sacrificar-me-ei voluntariamente a Vós, * e o vosso nome louvarei, ó Senhor, porque é bom:
        </Typography>
        <Typography className="latin">
          Quóniam ex omni tribulatióne eripuísti me: * et super inimícos meos despéxit óculus meus.
        </Typography>
        <Typography className="vernacular">
          Porquanto me tendes livrado de toda a tribulação: * e com desdém olhei os meus inimigos.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
