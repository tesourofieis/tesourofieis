import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageOrdenacaopadre() {
  return (
    <PageWrapper>
      <H1 text="No Dia da Ordenação de Presbítero" />

      <Typography className="aside">
        Como na Missa do dia, juntando-se, o seguinte, sob a mesma conclusão da
        que antecede:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Exáudi, quǽsumus, Dómine, súpplicum preces, et de voto tibi péctore
          famulántes perpétua defensióne custódi: ut, nullis perturbatiónibus
          impedíti, líberam servitútem tuis semper exhibeámus offíciis. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ouvi, Senhor, Vos imploramos, as preces destes vossos servos
          suplicantes e guardai-nos perpetuamente, a fim de que, livres de todo
          o temor, exerçamos com toda a liberdade o nosso ministério. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Tuis, quǽsumus, Dómine, operáre mystériis: ut hæc tibi múnera dignis
          méntibus offerámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, fazei que estes mystérios tornem dignos de Vós
          estes dons, que Vos oferecemos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quos tuis, Dómine, réficis sacraméntis, contínuis attólle benígnus
          auxíliis: ut tuæ redemptiónis efféctum, et mystériis capiámus et
          móribus: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Fortificai, Senhor, com vossas incessantes graças aqueles que
          benignamente alimentastes com vossos sacramentos, a fim de que
          experimentemos o efeito da Redenção, tanto pela virtude destes
          mystérios, como pela nossa própria conduta. Ó Vós, que, sendo Deus...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
