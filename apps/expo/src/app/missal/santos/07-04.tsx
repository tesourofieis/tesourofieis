import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0704() {
  return (
    <PageWrapper>
      <H1 text="Santa Isabel, Rainha de Portugal, a 4 de Julho" />

      <Typography className="comment">
        A Igreja nos exorta hoje a louvar a Deus pelas santas obras da
        bem-aventurada Isabel. Filha de Pedro III de Aragão, herdou o nome e as
        virtudes de sua tia-avó
        <Link href="/missal/santos/11-19">Santa Isabel da Hungria.</Link> O pai,
        vendo-lhe a santidade, dizia que ela excederia a todas as mulheres
        nascidas também da raça real (Ep., Com.). Isabel casou-se com Dinis I,
        rei de Portugal, recebera a prerogativa de restabelecer a paz onde
        houvesse divisões, e de acalmar os furores da guerra (Or.). Viúva, tomou
        o hábito da Ordem Terceira, distribuiu suas riquezas, adquirindo, por
        esse meio, a pérola preciosa e tesouro oculto da vida eterna (Ev.).
        Morreu em 1336, em Coimbra. Seu corpo conservou-se intacto.
      </Typography>

      <H3 text="Intróito" />

      <Language>
        <Typography className="latin">
          Gaudeámus omnes in Dómino, diem festum celebrántes sub honóre beátæ
          Elisabeth reginæ: de cujus solemnitáte gaudent Angeli, et colláudant
          Fílium Dei. <Typography className="latin">Ps. 118, 1</Typography> Beáti immaculáti
          in via: qui ámbulant in lege Dómini.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Alegremo-nos todos no Senhor, no dia em que celebramos a festa em
          honra da B. Rainha Isabel: os Anjos regozijam-se com esta festa e
          louvam em harmonias o Filho de Deus.{" "}
          <Typography className="vernacular">Sl. 118, 1</Typography> Bem-aventurados aqueles
          que procedem sem mácula: e que andam na lei do Senhor.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Clementíssime Deus, qui beátam Elísabeth regínam, inter céteras
          egrégias dotes, béllíci furóris sedándi prærogatíva decorásti: da
          nobis, ejus intercessíóne; post mortális vitæ, quam supplícíter
          pétimus, pacem, ad ætérna gáudia perveníre. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó clementíssimo Deus, que entre outros eminentes dotes ornastes a B.
          Isabel com a prerrogativa de aplacar os furores da guerra,
          Concedei-nos por sua intercessão que, depois de havermos durante esta
          vida mortal gozado a paz, como humildemente pedimos, alcancemos também
          as alegrias eternas. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Ecl. 26, 19-24</Typography>

      <Language>
        <Typography className="latin">Léctio libri Sapiéntiæ.</Typography>
        <Typography className="vernacular">Lição do Livro da Sabedoria.</Typography>
        <Typography className="latin">
          Grátia super grátiam, múlier sancta et pudoráta. Omnis autem
          ponderátio non est digna continéntis ánimæ. Sicut sol óriens mundo in
          altíssimis Dei, sic mulíeris bonæ spécies in ornaméntum domus ejus.
          Lucérna splendens super candelábrum sanctum, et spécies faciéi super
          ætátem stábilem. Coluúmnæ áureæ super bases argénteas, et pedes firmi
          super plantas státibilis mulíeris. Fundaménta ætérna super petram
          sólidam, et mandáta Dei in corde mulíeris sanctæ.
        </Typography>
        <Typography className="vernacular">
          A mulher santa e casta é uma graça sobre graça: pois nem toda a
          riqueza é digna da alma casta. Assim como o sol, ao despontar nas
          alturas de Deus, ilumina o mundo, assim também a beleza da mulher
          virtuosa é ornamento da sua casa. A beleza do rosto feminino na idade
          madura é como uma lâmpada que brilha sobre um candelabro santo. Como
          colunas de ouro assentes sobre bases de prata, assim estão firmes
          sobre as suas plantas os pés da mulher constante. Os Mandamentos de
          Deus no coração da mulher santa são como alicerces eternos, assentes
          sobre a pedra sólida.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Language>
        <Typography className="latin">
          Verbo Dómini contínuit cælum: lenívit iracúndiam Dómini, et
          conciliávit cor Patris ad fílium.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 15</Typography> In vita sua fecit magnália,
          et in morte mirabília operáta est.
        </Typography>
        <Typography className="vernacular">
          Com a palavra do Senhor conteve o céu, afastou a ira do Senhor e
          conciliou o coração do pai com o do filho.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 15</Typography> Durante a sua vida
          praticou maravilhas e na morte operou milagres.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>Áspice, quæ
          sólio résides, regína, supérno, nos quondam hic pópulos, Elisabétha,
          tuos. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>Ó Rainha
          Isabel, que residis em excelso trono, olhai benignamente para nós, que
          outrora fomos na terra vossos súbditos. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/18virgensmartires2#evangelho"
        title="Virgens Mártires - Missa Me exspectavérunt"
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 44, 13 & 10</Typography>

      <Language>
        <Typography className="latin">
          Vultum tuum deprecabúntur omnes divítes plebis: fíliæ regum in honóre
          tuo.
        </Typography>
        <Typography className="vernacular">
          Todos os poderosos da terra implorarão o vosso olhar: as filhas dos
          reis honrar-vos-ão.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Deus, qui in honórem beátæ Elísabeth, regínæ has tibi solémnes hóstias
          offérri voluísti: da nobis; ut ejus vestígia secúti, et oratióne
          adjúti, tibi, cui servíre regnáre est, toto corde serviámus in terra,
          ac tecum regnémus in cælo. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que quisestes que este solene sacrifício Vos fosse oferecido
          em honra da B. Rainha Isabel, fazei que, seguindo nós seus passos e
          auxiliados pelas suas preces, Vos sirvamos na terra, lembrando-nos de
          que «servir-Vos é reinar», e convosco reinemos no céu. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 44, 10</Typography>

      <Language>
        <Typography className="latin">
          Ástitit regína a déxteris tuis in vestítu deauráto, circúmdata
          varietáte.
        </Typography>
        <Typography className="vernacular">
          À vossa dextra está a Rainha, vestida com seu manto de ouro e cercada
          de variedade.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Regáli ac sacro convívio, Dómine Jesu Christe, in quo tu es ipse verus
          cibus et potus, nos, quæsumus, dignos effíciat: et cáritas tua
          imménsa, et beátæ Elisabeth regínæ intercéssio gloriósa: Qui vivis et
          regnas...
        </Typography>
        <Typography className="vernacular">
          Permiti, ó Senhor Jesus Cristo, Vos suplicamos, que a imensa caridade
          e a gloriosa protecção da B. Rainha Isabel nos façam dignos do real e
          sagrado banquete em que Vós próprio sois a Verdadeira comida e bebida.
          Ó Vós, que, sendo Deus...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
