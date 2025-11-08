import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageMagnificat() {
  return (
    <PageWrapper>
      <H1 text="Magnificat" />

      <Language>
        <Typography className="latin">
          Magníficat ánima mea Dóminum. Et exsultávit spíritus meus: * in Deo,
          salutári meo.
        </Typography>
        <Typography className="vernacular">
          A minha alma glorifica o Senhor. E o meu espírito exultou: * em Deus,
          meu salvador.
        </Typography>
        <Typography className="latin">
          Quia respéxit humilitátem ancíllæ suæ: * ecce enim ex hoc beátam me
          dicent omnes generatiónes.
        </Typography>
        <Typography className="vernacular">
          Visto que Ele olhou para a humildade da sua serva: * desde agora todas
          as gerações me chamarão bem-aventurada.
        </Typography>
        <Typography className="latin">
          Quia fecit mihi magna, qui potens est: * et sanctum nomen ejus.
        </Typography>
        <Typography className="vernacular">
          Pois o Omnipotente operou em mim grandes maravilhas: * e seu Nome é
          Santo.
        </Typography>
        <Typography className="latin">
          Et misericórdia ejus, a progénie in progénies: * timéntibus eum.
        </Typography>
        <Typography className="vernacular">
          Sua misericórdia espalha-se de geração em geração sobre os: * que O
          temem.
        </Typography>
        <Typography className="latin">
          Fecit poténtiam in brácchio suo: * dispérsit supérbos mente cordis
          sui.
        </Typography>
        <Typography className="vernacular">
          Manifestou-se o poder doseu braço: * dispersou os soberbos, cujo
          coração é cheio de orgulho.
        </Typography>
        <Typography className="latin">
          Depósuit poténtes de sede: * et exaltávit húmiles.
        </Typography>
        <Typography className="vernacular">
          Depôs os poderosos dos seus tronos: * e ergueu os humildes.
        </Typography>
        <Typography className="latin">
          Esuriéntes implévit bonis: * et dívites dimísit inánes.
        </Typography>
        <Typography className="vernacular">
          Saciou de bens os que tinham fome: * e deixou as mãos vazias aos
          ricos.
        </Typography>
        <Typography className="latin">
          Suscépit Israël púerum suum: * recordátus misericórdiæ suæ.
        </Typography>
        <Typography className="vernacular">
          Recebeu Israel como seu servo: * lembrando-se da sua misericórdia.
        </Typography>
        <Typography className="latin">
          Sicut locútus est ad patres nostros: * Ábraham, et sémini ejus in
          sǽcula.
        </Typography>
        <Typography className="vernacular">
          Tal como anunciara a nossos pais: * a Abraão e à sua descendência para
          sempre.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et
          Fílio, et Spíritui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao
          Filho e ao Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in
          pricípio, et nunc, et semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no
          princípio, agora e sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
