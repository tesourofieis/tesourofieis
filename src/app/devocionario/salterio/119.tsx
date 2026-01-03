import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page119() {
  return (
    <PageWrapper>
      <H1 text="Salmo 119" />

      <Language>
        <Typography className="latin">
          Ad Dóminum cum tribulárer clamávi: * et exaudívit me.
        </Typography>
        <Typography className="vernacular">
          Na minha tribulação, clamei ao Senhor: * e ouviu-me.
        </Typography>
        <Typography className="latin">
          Dómine, líbera ánimam meam a lábiis iníquis, * et a lingua dolósa.
        </Typography>
        <Typography className="vernacular">
          Ó Senhor, livrai a minha alma dos lábios iníquos, * e da língua
          dolosa.
        </Typography>
        <Typography className="latin">
          Quid detur tibi, aut quid apponátur tibi * ad linguam dolósam?
        </Typography>
        <Typography className="vernacular">
          Que te será dado, ou que te será acrescentado, * ó língua dolosa?
        </Typography>
        <Typography className="latin">
          Sagíttæ poténtis acútæ, * cum carbónibus desolatóriis.
        </Typography>
        <Typography className="vernacular">
          Setas agudas do poderoso, * com brasas devoradoras.
        </Typography>
        <Typography className="latin">
          Heu mihi, quia incolátus meus prolongátus est: habitávi cum
          habitántibus Cedar: * multum íncola fuit ánima mea.
        </Typography>
        <Typography className="vernacular">
          Ai de mim, o meu desterro prolongou-se, habitei com os moradores de
          Cedar: * muito andou peregrinando a minha alma.
        </Typography>
        <Typography className="latin">
          Cum his, qui odérunt pacem, eram pacíficus: * cum loquébar illis,
          impugnábant me gratis.
        </Typography>
        <Typography className="vernacular">
          Com os que odiavam a paz eu era pacífico: * quando lhes falava, me
          contradiziam sem motivo.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
