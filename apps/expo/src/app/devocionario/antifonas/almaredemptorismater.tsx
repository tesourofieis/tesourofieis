import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAlmaredemptorismater() {
  return (
    <PageWrapper>
      <H1 text="Alma Redemptóris Mater" />

      <Language>
        <Typography className="latin">
          Alma Redemptóris Mater, quæ pérvia cæli porta manes, et stella maris,
          succúrre cadénti, Súrgere qui curat, pópulo: tu quæ genuísti, Natúra
          miránte, tuum sanctum Genitórem, Virgo prius ac postérius, Gabriélis
          ab ore Sumens illud Ave, peccatórum miserére.
        </Typography>
        <Typography className="vernacular">
          Santa Mãe do Redentor, Porta do Céu, Estrela do Mar, socorrei o povo
          cristão que procura levantar-se do abysmo da culpa. Vós que, acolhendo
          a saudação do Anjo, gerastes, com admiração da natureza, o vosso santo
          Criador, ó sempre Virgem Maria, tende misericórdia dos pecadores.
        </Typography>
      </Language>

      <Typography className="aside">Durante o Advento:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Angelus Dómini
          nuntiávit Maríæ.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Anjo do Senhor
          anunciou a Maria.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et concépit de
          Spíritu Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E Ela concebeu do
          Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui,
          Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per
          passiónem ejus et crucem ad resurrectiónis glóriam perducámur. Per
          eumdem Christum, Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Infundi, Senhor, Vos suplicamos, a vossa graça em nossas almas, para
          que nós, que pela anunciação do Anjo conhecemos a Incarnação do vosso
          Filho, sejamos conduzidos à glória da ressurreição pela sua Paixão e
          Cruz. Pelo mesmo Jesus Cristo Senhor Nosso.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        A partir das Vésperas do Natal até à Purificação:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Post partum Virgo
          invioláta permansísti.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Despois do parto,
          Virgem, permaneceste inviolada.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dei Génitrix,
          intercéde pro nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Mãe de Deus,
          intercedei por nós.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus, qui salútis ætérnæ beátæ Maríæ virginitáte fecúnda humáno géneri
          práemia præstitísti: tríbue, quáesumus, ut ipsam pro nobis intercédere
          sentiámus, per quam merúimus, Auctórem vitæ suscípere Dóminum nostrum
          Jesum Christum Fílium tuum.
        </Typography>
        <Typography className="vernacular">
          Deus, que prestastes ao género humano o prémio da salvação eterna,
          pela fecunda virgindade da bem-aventurada Maria, dai, pedimos, que a
          sintamos interceder por nós, por quem merecemos receber o autor da
          vida, nosso Senhor Jesus Cristo, vosso Filho.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
