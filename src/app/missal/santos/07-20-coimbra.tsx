import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0720Coimbra() {
  return (
    <PageWrapper>
      <H1 text="Santa Colomba, Virgem e Mártir, a 20 de Julho, Na Diocese de Coimbra" />
      <H3 text="Intróito" />
      <Typography className="vernacular">
        Quem me dará asas, como as da pomba! Então voarei e descansarei. Eis que me afastei,
        fugindo, e permaneci na solidão. Esperava Aquele que me salvou. Ouvi, ó Deus, a minha
        oração; não desprezeis a minha súplica; atendei-me e ouvi-me.
        <Typography className="versicle"> ℣. </Typography>
        Glória ao Pai...
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Ó omnipotente e eterno Deus, olhai propício para a nossa fraqueza; e, assim como concedestes
        a fortaleza à B. Colomba, vossa Virgem, para suportar o martírio da Cruz, assim também,
        protegendo-nos com sua intercessão, acolhei-nos à dextra da vossa majestade. Por nosso
        Senhor...
      </Typography>
      <H3 text="Epístola" />
      <LinkCard
        href="/missal/comum/21virgemnaomartir2#epístola"
        title="Virgem não Mártir - Missa Vultum tuum"
      />
      <H3 text="Gradual" />
      <Typography className="vernacular">
        O meu inimigo arruinou as minhas veredas e afligiu-me até à desolação. Armou o seu arco,
        apontou-o para mim, como alvo da sua seta, e cravou nos meus rins as setas da sua aljava.
        Aleluia, aleluia. Suportei a dor das setas até à morte de cruz, para ser fiel ao meu Senhor
        Jesus. Aleluia.
      </Typography>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/comum/17virgensmartires1#evangelho"
        title="Virgens Mártires - Missa Loquébar"
      />
      <H3 text="Ofertório" />
      <Typography className="vernacular">
        Nunca Deus permita que me glorie senão na Cruz de nosso Senhor Jesus Cristo, por quem o
        mundo está crucificado para mim e eu para o mundo.
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Senhor, que este sacrifício, que Vos é oferecido pelos auxílios dos méritos da B. Colomba,
        vossa Virgem e Mártir, nos conserve a vida e nos proteja. Por nosso Senhor...
      </Typography>
      <H3 text="Comúnio" />
      <Typography className="vernacular">
        Ergue-te, minha amiga, minha única beleza, e vem. Ó minha pomba, escondida nas fendas das
        rochas e nas cavernas dos muros em ruínas, mostra-me o teu rosto e faz-me ouvir a tua voz. A
        tua voz é doce, o teu rosto é belo.
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Pela participação que tivemos neste mystério, Senhor, confirmai os vossos servos na
        confissão da verdadeira fé, pela qual a B. Colomba não duvidou sofrer o martírio da Cruz e
        derramar o sangue. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
