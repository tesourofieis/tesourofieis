import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page042() {
  return (
    <PageWrapper>
      <H1 text="Salmo 42" />

      <Language>
        <Typography className="latin">
          Júdica me, Deus, et discérne causam meam de gente non sancta, * ab hómine iníquo, et
          dolóso érue me.
        </Typography>
        <Typography className="vernacular">
          Julgai-me, ó Deus, e defendei a minha causa da gente infiel, * livrai-me do homem iníquo e
          ardiloso.
        </Typography>
        <Typography className="latin">
          Quia Tu es, Deus, fortitúdo mea: * quare me repulísti? et quare tristis incédo, dum
          afflígit me inimícus?
        </Typography>
        <Typography className="vernacular">
          Pois Vós sois a minha fortaleza, ó Deus: * porque me repelistes? E porque hei-de andar
          triste, enquanto me aflige o inimigo?
        </Typography>
        <Typography className="latin">
          Emítte lucem tuam et veritátem tuam: * ipsa me deduxérunt, et adduxérunt in montem sanctum
          tuum, et in tabernácula tua.
        </Typography>
        <Typography className="vernacular">
          Enviai a vossa luz e a vossa verdade: * elas me conduziram e me levaram ao vosso santo
          monte e aos vossos tabernáculos.
        </Typography>
        <Typography className="latin">
          Et introíbo ad altáre Dei: * ad Deum, qui lætíficat juventútem meam.
        </Typography>
        <Typography className="vernacular">
          Irei até ao Altar de Deus: * até Deus, que é a alegria da minha juventude.
        </Typography>
        <Typography className="latin">
          Confitébor tibi in cíthara, Deus, Deus meus: * quare tristis es, ánima mea? et quare
          contúrbas me?
        </Typography>
        <Typography className="vernacular">
          Ó Deus, ó meu Deus, louvar-Vos-ei com a cítara: * porque estás triste, alma minha? E
          porque me conturbas?
        </Typography>
        <Typography className="latin">
          Spera in Deo, quóniam adhuc confitébor illi: * salutáre vultus mei, et Deus meus.
        </Typography>
        <Typography className="vernacular">
          Confia em Deus, porque ainda O louvarei: * a Ele que é a salvação do meu rosto e o meu
          Deus.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
