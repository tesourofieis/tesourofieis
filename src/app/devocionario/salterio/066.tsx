import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page066() {
  return (
    <PageWrapper>
      <H1 text="Salmo 66" />

      <Language>
        <Typography className="latin">
          Deus misereátur nostri, et benedícat nobis: * illúminet vultum suum super nos, et
          misereátur nostri.
        </Typography>
        <Typography className="vernacular">
          Deus tenha piedade de nós e nos abençoe: * faça resplandecer a sua face sobre nós e tenha
          de nós piedade.
        </Typography>
        <Typography className="latin">
          Ut cognoscámus in terra viam tuam, * in ómnibus géntibus salutáre tuum.
        </Typography>
        <Typography className="vernacular">
          Para que conheçamos na terra o vosso caminho, * e entre todas as gentes a vossa salvação.
        </Typography>
        <Typography className="latin">
          Confiteántur tibi pópuli, Deus: * confiteántur tibi pópuli omnes.
        </Typography>
        <Typography className="vernacular">
          Que os povos Vos glorifiquem, ó Deus: * que todos os povos Vos glorifiquem.
        </Typography>
        <Typography className="latin">
          Læténtur et exsúltent gentes: * quóniam júdicas pópulos in æquitáte, et gentes in terra
          dírigis.
        </Typography>
        <Typography className="vernacular">
          Alegrem-se as gentes e regozijem-se: * porquanto julgais os povos com equidade e dirigis
          as gentes sobre a terra.
        </Typography>
        <Typography className="latin">
          Confiteántur tibi pópuli, Deus, confiteántur tibi pópuli omnes: * terra dedit fructum
          suum.
        </Typography>
        <Typography className="vernacular">
          Que os povos Vos glorifiquem, ó Deus, que os povos todos Vos glorifiquem: * a terra deu o
          seu fruto.
        </Typography>
        <Typography className="latin">
          Benedícat nos Deus, Deus noster, benedícat nos Deus: * et métuant eum omnes fines terræ.
        </Typography>
        <Typography className="vernacular">
          Abençoe-nos Deus, o nosso Deus, abençoe-nos Deus: * e temam-n’O todos os confins da terra.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
