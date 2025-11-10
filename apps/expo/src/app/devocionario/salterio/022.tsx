import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page022() {
  return (
    <PageWrapper>
      <H1 text="Salmo 22" />

      <Language>
        <Typography className="latin">
          Dóminus regit me, et nihil mihi déerit: * in loco páscuæ ibi me
          collocávit.
        </Typography>
        <Typography className="vernacular">
          O Senhor é meu pastor e nada me faltará: * num lugar de pastos me
          colocou.
        </Typography>
        <Typography className="latin">
          Super aquam refectiónis educávit me: * ánimam meam convértit.
        </Typography>
        <Typography className="vernacular">
          Conduziu-me junto a uma água refrescante: * converteu a minha alma.
        </Typography>
        <Typography className="latin">
          Dedúxit me super sémitas justítiæ, * propter nomen suum.
        </Typography>
        <Typography className="vernacular">
          Levou-me por veredas de justiça, * por causa do seu nome.
        </Typography>
        <Typography className="latin">
          Nam, et si ambulávero in médio umbræ mortis, non timébo mala: *
          quóniam Tu mecum es.
        </Typography>
        <Typography className="vernacular">
          Pois, ainda que ande no meio da sombra da morte, não temerei mal
          algum: * porque Vós estais comigo.
        </Typography>
        <Typography className="latin">
          Virga tua, et báculus tuus: * ipsa me consoláta sunt.
        </Typography>
        <Typography className="vernacular">
          Vossa vara e o vosso báculo: * me consolaram.
        </Typography>
        <Typography className="latin">
          Parásti in conspéctu meo mensam, * advérsus eos, qui tríbulant me.
        </Typography>
        <Typography className="vernacular">
          Preparastes uma mesa ante mim, * à vista daqueles que me atribulam.
        </Typography>
        <Typography className="latin">
          Impinguásti in óleo caput meum: * et calix meus inébrians quam
          præclárus est!
        </Typography>
        <Typography className="vernacular">
          Ungistes com óleo a minha cabeça: * e quão precioso é o meu cálice
          farto!
        </Typography>
        <Typography className="latin">
          Et misericórdia tua subsequétur me * ómnibus diébus vitæ meæ:
        </Typography>
        <Typography className="vernacular">
          Vossa misericórdia seguir-me-á * todos os dias da minha vida:
        </Typography>
        <Typography className="latin">
          Et ut inhábitem in domo Dómini, * in longitúdinem diérum.
        </Typography>
        <Typography className="vernacular">
          A fim de que habite na casa do Senhor, * durante longos dias.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
