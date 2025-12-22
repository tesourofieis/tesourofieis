import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page127() {
  return (
    <PageWrapper>
      <H1 text="Salmo 127" />

      <Language>
        <Typography className="latin">
          Beáti omnes, qui timent Dóminum, * qui ámbulant in viis ejus.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurados todos os que temem o Senhor, * e que andam nos seus
          caminhos.
        </Typography>
        <Typography className="latin">
          Labóres mánuum tuárum quia manducábis: * beátus es, et bene tibi erit.
        </Typography>
        <Typography className="vernacular">
          Pois comerás dos labores de tuas mãos: * bem-aventurado és e ficarás
          bem.
        </Typography>
        <Typography className="latin">
          Uxor tua sicut vitis abúndans, * in latéribus domus tuæ.
        </Typography>
        <Typography className="vernacular">
          Tua esposa será como uma videira fecunda, * no interior de tua casa.
        </Typography>
        <Typography className="latin">
          Fílii tui sicut novéllæ olivárum, * in circúitu mensæ tuæ.
        </Typography>
        <Typography className="vernacular">
          Teus filhos, como pimpolhos de oliveiras, * ao redor de tua mesa.
        </Typography>
        <Typography className="latin">
          Ecce, sic benedicétur homo, * qui timet Dóminum.
        </Typography>
        <Typography className="vernacular">
          Eis como será abençoado o homem, * que teme o Senhor.
        </Typography>
        <Typography className="latin">
          Benedícat tibi Dóminus ex Sion: * et vídeas bona Jerúsalem ómnibus
          diébus vitæ tuæ.
        </Typography>
        <Typography className="vernacular">
          Te abençoe o Senhor desde Sião: * e vejas os bens de Jerusalém todos
          os dias de tua vida.
        </Typography>
        <Typography className="latin">
          Et vídeas fílios filiórum tuórum, * pacem super Israël.
        </Typography>
        <Typography className="vernacular">
          Vejas os filhos de teus filhos, * e a paz sobre Israel.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
