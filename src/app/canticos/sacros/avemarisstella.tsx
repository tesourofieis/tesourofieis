import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAvemarisstella() {
  return (
    <PageWrapper>
      <H1 text="Ave maris stella" />

      <Language>
        <Typography className="latin">
          Ave maris stella, Dei Mater alma, atque semper Virgo, felix caeli porta.
        </Typography>
        <Typography className="vernacular">
          Ave, Estrela do mar, Mãe de Deus sagrada, Que sempre Virgem sois, Porta feliz do Céu.
        </Typography>
        <Typography className="latin">
          Sumens illud Ave, Gabriélis ore, Funda nos in pace, Mutans Evæ nomen.
        </Typography>
        <Typography className="vernacular">
          Ouvistes aquele «Ave», Dos lábios de Gabriel, Estabelecei-nos na paz, Mudando o nome de
          Eva.
        </Typography>
        <Typography className="latin">
          Solve vincla reis, Profer lumen cæcis, Mala nostra pelle, Bona cuncta posce.
        </Typography>
        <Typography className="vernacular">
          Libertai dos grilhões os pecadores, Mandai luz aos cegos, Afastai de nós os males, E
          obtém-nos todos os bens.
        </Typography>
        <Typography className="latin">
          Monstra te esse matrem, Sumat per te preces, Qui pro nobis natus, Tulit esse tuus.
        </Typography>
        <Typography className="vernacular">
          Mostrai que sois nossa Mãe; por Vós, ouça as nossas preces, Aquele que, para nos salvar,
          Quis ser vosso Filho.
        </Typography>
        <Typography className="latin">
          Virgo singuláris, Inter omnes mitis, Nos culpis solutos, Mites fac et castos.
        </Typography>
        <Typography className="vernacular">
          Ó Virgem sem igual, Entre todas a mais doce, Libertando-nos de nossas culpas, Fazei-os
          mansos e castos.
        </Typography>
        <Typography className="latin">
          Vitam præsta puram, Iter para tutum, Ut videntes Jesum, Semper collætemur.
        </Typography>
        <Typography className="vernacular">
          Concedei-nos uma vida pura, Fazei seguros os nossos caminhos, Para que, contemplando a
          Jesus, Exultemos eternamente.
        </Typography>
        <Typography className="latin">
          Sit laus Deo Patri, Summo Christo décus, Spirítui Sancto, Tribus honor unus.
        </Typography>
        <Typography className="vernacular">
          Seja louvado Deus Pai, A Cristo também, e ao Espírito Santo; Seja prestada honra igual.
        </Typography>
        <Typography className="latin">Amen.</Typography>
        <Typography className="vernacular">Amen.</Typography>
      </Language>
    </PageWrapper>
  );
}
