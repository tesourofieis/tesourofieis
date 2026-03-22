import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page003() {
  return (
    <PageWrapper>
      <H1 text="Salmo 3" />

      <Language>
        <Typography className="latin">
          Dómine, quid multiplicáti sunt qui tríbulant me? * Multi insúrgunt advérsum me.
        </Typography>
        <Typography className="vernacular">
          Senhor, porque tantos são os que me atribulam? * Muitos se insurgem contra mim.
        </Typography>
        <Typography className="latin">
          Multi dicunt ánimæ meæ: * Non est salus ipsi in Deo ejus.
        </Typography>
        <Typography className="vernacular">
          Muitos dizem à minha alma: * não há salvação para ele no seu Deus.
        </Typography>
        <Typography className="latin">
          Tu autem, Dómine, suscéptor meus es, * glória mea, et exáltans caput meum.
        </Typography>
        <Typography className="vernacular">
          Vós, porém, Senhor, sois o meu protector, * minha glória e exaltais a minha cabeça.
        </Typography>
        <Typography className="latin">
          Voce mea ad Dóminum clamávi: * et exaudívit me de monte sancto suo.
        </Typography>
        <Typography className="vernacular">
          Com minha voz ao Senhor clamei: * e Ele me ouviu do seu santo monte.
        </Typography>
        <Typography className="latin">
          Ego dormívi, et soporátus sum: * et exsurréxi, quia Dóminus suscépit me.
        </Typography>
        <Typography className="vernacular">
          Deitei-me para descansar e adormeci: * e levantei-me, pois me acolheu o Senhor.
        </Typography>
        <Typography className="latin">
          Non timébo míllia pópuli circumdántis me: * exsúrge, Dómine, salvum me fac, Deus meus.
        </Typography>
        <Typography className="vernacular">
          Não temerei milhares de pessoas me cercando: * levantai-Vos, ó Senhor, salvai-me, ó Deus
          meu!
        </Typography>
        <Typography className="latin">
          Quóniam Tu percussísti omnes adversántes mihi sine causa: * dentes peccatórum contrivísti.
        </Typography>
        <Typography className="vernacular">
          Porque Vós tendes ferido todos os que sem causa me perseguem: * quebrastes os dentes dos
          pecadores.
        </Typography>
        <Typography className="latin">
          Dómini est salus: * et super pópulum tuum benedíctio tua.
        </Typography>
        <Typography className="vernacular">
          A salvação é do Senhor: * e sua bênção está sobre seu povo.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
