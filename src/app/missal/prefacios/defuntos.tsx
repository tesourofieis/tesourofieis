import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageDefuntos() {
  return (
    <PageWrapper>
      <H1 text="Prefácio dos Defuntos" />

      <Typography className="aside">
        Diz-se em todas as Missas de Réquiem.
      </Typography>

      <Language>
        <Typography className="latin">
          Vere dignum et justum est, æquum et salutáre, nos tibi semper et
          ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus:
          per Christum, Dóminum nostrum. In quo nobis spes beátæ resurrectiónis
          effúlsit, ut, quos contrístat certa moriéndi condício, eósdem
          consolétur fu-túræ immortalitátis promíssio. Tuis enim fidélibus,
          Dómine, vita mutátur, non tóllitur: et, dissolúta terréstris hujus
          incolátus domo, ætérna in cœlis habitátio comparátur. Et ídeo cum
          Angelis et Archángelis, cum Thronis et Dominatiónibus cumque omni
          milítia cœléstis exércitus hymnum glóriæ tuæ cánimus, sine fine
          dicéntes:
        </Typography>
        <Typography className="vernacular">
          É verdadeiramente digno e justo, racional e salutar que sempre e em
          todos os lugares Vos dêmos graças, Senhor santo, Pai omnipotente,
          eterno Deus, por meio de nosso Senhor Jesus Cristo, em quem nos
          concedestes a esperança da feliz ressurreição; de sorte que, conquanto
          a condição certa da nossa morte nos entristeça, fiquemos consolados
          com a promessa da imortalidade futura. Pois, para os vossos fiéis,
          Senhor, a vida muda-se, não se acaba; e, desfeita esta Inorada
          terrena, adquire-se a habitação eterna nos céus. E, por isso, com os
          Anjos e Arcanjos, com os Tronos e Dominações e com toda a milícia do
          exército celestial, cantamos o hino da vossa glória, dizendo sem
          cessar:
        </Typography>
      </Language>
    </PageWrapper>
  );
}
