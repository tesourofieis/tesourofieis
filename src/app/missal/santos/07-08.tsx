import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0708() {
  return (
    <PageWrapper>
      <H1 text="S. Isabel de Portugal, Rainha e Viúva, a 8 de Julho" />

      <Typography className="aside">
        Restantes partes da Missa: como no Comum das Santas Mulheres não Virgens.
      </Typography>

      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Clementíssime Deus, qui beátam Elisabeth regínam, inter céteras egrégias dotes, béllici
          furóris sedándi prærogatíva decorásti: da nobis, ejus intercessióne; post mortális vitæ,
          quam supplíciter pétimus, pacem, ad ætérna gáudia perveníre.
        </Typography>
        <Typography className="vernacular">
          Ó clementíssimo Deus, que entre outros eminentes dotes ornastes a B. Isabel com a
          prerrogativa de aplacar os furores da guerra, Concedei-nos por sua intercessão que, depois
          de havermos durante esta vida mortal gozado a paz, como humildemente pedimos, alcancemos
          também as alegrias eternas.
        </Typography>
      </Language>

      <H3 text="Secreta" />
      <Language>
        <Typography className="latin"></Typography>
        <Typography className="vernacular">
          Ó Deus, que quisestes que este solene sacrifício Vos fosse oferecido em honra da B. Rainha
          Isabel, fazei que, seguindo nós seus passos e auxiliados pelas suas preces, Vos sirvamos
          na terra, lembrando-nos de que «servir-Vos é reinar», e convosco reinemos no céu.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />
      <Language>
        <Typography className="latin"></Typography>
        <Typography className="vernacular">
          Permiti, ó Senhor Jesus Cristo, Vos suplicamos, que a imensa caridade e a gloriosa
          protecção da B. Rainha Isabel nos façam dignos do real e sagrado banquete em que Vós
          próprio sois a Verdadeira comida e bebida.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
