import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page126() {
  return (
    <PageWrapper>
      <H1 text="Salmo 126" />

      <Language>
        <Typography className="latin">
          Nisi Dóminus ædificáverit domum, * in vanum laboravérunt qui ædíficant eam.
        </Typography>
        <Typography className="vernacular">
          Se o Senhor não edificar a casa, * é em vão que trabalham os que a edificam.
        </Typography>
        <Typography className="latin">
          Nisi Dóminus custodíerit civitátem, * frustra vígilat qui custódit eam.
        </Typography>
        <Typography className="vernacular">
          Se o Senhor não guardar a cidade, * inutilmente vigia o que a guarda.
        </Typography>
        <Typography className="latin">
          Vanum est vobis ante lucem súrgere: * súrgite postquam sedéritis, qui manducátis panem
          dolóris.
        </Typography>
        <Typography className="vernacular">
          Em vão vos levantais antes de amanhecer: * levantai-vos, depois que tiverdes repousado,
          vós que comeis o pão da dor.
        </Typography>
        <Typography className="latin">
          Cum déderit diléctis suis somnum: * ecce heréditas Dómini fílii: merces, fructus ventris.
        </Typography>
        <Typography className="vernacular">
          Quando Ele der o sono aos seus amados: * eis que a herança do Senhor são filhos, o fruto
          do ventre.
        </Typography>
        <Typography className="latin">
          Sicut sagíttæ in manu poténtis: * ita fílii excussórum.
        </Typography>
        <Typography className="vernacular">
          Como setas na mão do valente: * assim são os filhos dos atribulados.
        </Typography>
        <Typography className="latin">
          Beátus vir, qui implévit desidérium suum ex ipsis: * non confundétur cum loquétur inimícis
          suis in porta.
        </Typography>
        <Typography className="vernacular">
          Ditoso o varão que viu cumprido o seu desejo com eles: * não será confundido quando falar
          com seus inimigos no portão.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
