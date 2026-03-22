import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page001() {
  return (
    <PageWrapper>
      <H1 text="Salmo 1" />

      <Language>
        <Typography className="latin">
          Beátus vir, qui non ábiit in consílio impiórum, et in via peccatórum non stetit, * et in
          cáthedra pestiléntiæ non sedit:
        </Typography>
        <Typography className="vernacular">
          Bem-aventurado o varão que não foi no conselho dos ímpios, nem ficou no caminho dos
          pecadores, * e na cadeira pestilencial se não sentou:
        </Typography>
        <Typography className="latin">
          Sed in lege Dómini volúntas ejus, * et in lege ejus meditábitur die ac nocte.
        </Typography>
        <Typography className="vernacular">
          Mas sua vontade está na lei do Senhor, * e dia e noite meditará na sua lei.
        </Typography>
        <Typography className="latin">
          Et erit tamquam lignum, quod plantátum est secus decúrsus aquárum, * quod fructum suum
          dabit in témpore suo:
        </Typography>
        <Typography className="vernacular">
          Ele será como a árvore, que está plantada junto ao curso das águas, * que a seu tempo dará
          seu fruto:
        </Typography>
        <Typography className="latin">
          Et fólium ejus non défluet: * et ómnia quæcúmque fáciet, prosperabúntur.
        </Typography>
        <Typography className="vernacular">
          Cuja folha não murchará: * e prosperará tudo quanto fizer.
        </Typography>
        <Typography className="latin">
          Non sic ímpii, non sic: * sed tamquam pulvis, quem proícit ventus a fácie terræ.
        </Typography>
        <Typography className="vernacular">
          Não assim os ímpios, não assim: * mas serão como o pó que o vento dispersa da face da
          terra.
        </Typography>
        <Typography className="latin">
          Ideo non resúrgent ímpii in judício: * neque peccatóres in concílio justórum.
        </Typography>
        <Typography className="vernacular">
          Por isso os ímpios não ressuscitarão no juízo: * nem os pecadores no concílio dos justos.
        </Typography>
        <Typography className="latin">
          Quóniam novit Dóminus viam justórum: * et iter impiórum períbit.
        </Typography>
        <Typography className="vernacular">
          Porque o Senhor conhece o caminho dos justos: * e o caminho dos ímpios perecerá.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
