import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0707() {
  return (
    <PageWrapper>
      <H1 text="S. S. Cirilo e Metódio, Bs. e Cs., a 7 de Julho" />

      <Typography className="comment">
        Possuída de santo amor, para com seus Chefes, cuja Oitava terminou ontem, a Igreja celebra
        hoje a festa de S. Cirilo e de S. Metódio «que se comprometeram por juramento a perseverar
        na fé do bem-aventurado Pedro e dos Pontífices» e «conduziram a Pedro, em numerosas levas,
        os Búlgaros, Moravios, Boémios». Irmãos pelo sangue, nasceram no século IX em Tessalónica e
        distinguiram-se pelos progressos nas ciências, em Constantinopla. Sagrados Bispos, pelo Papa
        Adriano II (Intr., Ep., Ale.), converteram os povos eslavos (Or.). Inventores dos caracteres
        dessa língua, traduziram os livros santos e realizaram os ritos sagrados nesse idioma de que
        são considerados os autores. S. Cirilo morreu em Roma, em 869, e foi sepultado junto das
        relíquias de S. Clemente, por ele trazidas de Chersoneso. S. Metódio faleceu em 885.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/12confessorespontifices2">
          Missa Sacerdótes tui
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui Slavóniæ gentes per beátos Confessóris tuos atque
          Pontífices Cyríllum et Methódium ad agnitiónem tui nóminis veníre tribuísti: præsta; ut,
          quorum festivitáte gloriámur, eórum consórtio copulémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente e eterno, que Vos dignastes trazer ao conhecimento do vosso nome os
          povos eslavos pelo ministério dos B. B. Cirilo e Metódio, vossos Confessores e Pontífices,
          concedei-nos a graça de sermos um dia admitidos na companhia daqueles cuja festa nos
          gloriamos de celebrar. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard href="/missal/santos/02-06#evangelho" title="S. Tito, B. e Conf." />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 67, 36</Typography>

      <Language>
        <Typography className="latin">
          Mirábilis Deus in Sanctis suis: Deus Israel, ipse dabit virtútem et fortitúdinem plebisuæ:
          benedíctus Deus.
        </Typography>
        <Typography className="vernacular">
          Deus é admirável em seus Santos. Deus de Israel dará ao seu povo a força e a coragem.
          Bendito seja Deus.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Preces nostras, quæsumus, Dómine, et tuórum réspice oblatiónes fidélium: ut tibi gratæ
          sint in tuórum festivitáte (commemoratione) Sanctórum, et nobis conferant tuæ
          propitiatiónis auxílium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos receber benignamente as nossas orações e as oblatas dos fiéis, Senhor, a fim de
          que estas festas dos vossos Santos Vos sejam agradáveis e nos obtenham o auxílio da vossa
          propiciação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 10, 27</Typography>

      <Language>
        <Typography className="latin">
          Quod dico vobis in tenebris, dícite in lúmine, dicit Dóminus: et quod in aure audítis,
          prædicáte super tecta.
        </Typography>
        <Typography className="vernacular">
          O que vos digo nas trevas dizei-o às claras, diz o Senhor; e o que vos disse ao ouvido
          pregai-o em cima dos telhados.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut, qui nobis múnera dignáris præbére cœléstia, intercedéntibus
          sanctis tuis Cyríllo et Methódio, despícere terréna concédas. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, que Vos dignastes cumular-nos com os dons celestiais, Vos suplicamos,
          concedei-nos por intercessão dos vossos Santos Cirilo e Metódio a graça de desprezarmos as
          coisas terrenas. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
