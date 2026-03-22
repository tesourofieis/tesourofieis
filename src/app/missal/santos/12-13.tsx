import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1213() {
  return (
    <PageWrapper>
      <H1 text="Santa Luzia, Virgem e Mártir, a 13 de Dezembro" />

      <Typography className="comment">
        Nascida na Sicília, pelo fim do século III, de família nobre, Santa Luzia, como nos recorda
        por duas vezes o Evangelho, desfez-se de todos os seus bens em favor dos pobres e, quando
        nada mais possuía, deu-se a si própria a Jesus (Ep.). Enquanto as virgens loucas
        descuidavam-se de encher os seus vasos com o «óleo da alegria» mencionado no Intróito.
        Luzia, cujo nome significa luz, esperou, tendo na mão a lâmpada acesa, isto é, com a alma
        cheia de graça, a vinda do Esposo. «Os corações puros são o templo do Espírito Santo»,
        declarou a Santa ao juiz. Foi esse Espírito também simbolizado pelo «óleo da alegria», como
        rezam as cerimónias da Quinta-Feira Santa, que amolgou e fortaleceu de modo tão admirável a
        alma de Santa Luzia, que ela pode resistir aos carrascos até à morte, preferindo dar a
        própria vida a fim de conservar o tesouro da virgindade. Seu nome brilha no Canon Missa,
        repetido diariamente por milhares de Sacerdotes que glorificam a Deus em seu nome. Morreu em
        303. Com a lâmpada acesa, isto é, com a alma em estado de graça, esperemos neste Tempo do
        Advento o Esposo que virá brevemente.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 44, 8</Typography>

      <Language>
        <Typography className="latin">
          Dilexísti justítiam, et odísti iniquitátem.
          <Typography className="versicle"> ℣. </Typography>Proptérea unxit te Deus, Deus tuus, óleo
          lætítiæ.
        </Typography>
        <Typography className="vernacular">
          Amastes a justiça e odiastes a iniquidade.
          <Typography className="versicle"> ℣. </Typography>Por isso o Senhor, vosso Deus, ungiu-vos
          com o óleo da alegria, de preferência às vossas companheiras.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 3</Typography> Diffúsa est grátia in lábiis tuis:
          proptérea benedíxit te Deus in ætérnum. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 3</Typography> A graça espalhou-se nos vossos
          lábios; por isso Deus vos abençoou por todos os séculos. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/21virgemnaomartir2#evangelho"
        title="Virgem não Mártir - Missa Vultum tuum"
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 44, 15-16</Typography>

      <Language>
        <Typography className="latin">
          Afferéntur Regi Vírgines post eam: próximæ ejus afferéntur tibi in lætítia et
          exsultatióne: adducéntur in templum Regi Dómino.
        </Typography>
        <Typography className="vernacular">
          Após ela serão apresentadas virgens ao Rei; as suas companheiras serão introduzidas no
          meio da alegria e júbilo: serão conduzidas ao Senhor no templo do Rei.
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 118, 161-162</Typography>

      <Language>
        <Typography className="latin">
          Príncipes persecúti sunt me gratis, et a verbis tuis formidávit cor meum: lætábor ego
          super elóquia tua, quasi qui invénit spólia multa.
        </Typography>
        <Typography className="vernacular">
          Os príncipes perseguiram-me injustamente, mas o meu coração não temeu senão as vossas
          palavras. Regozijar-me-ei com vossas palavras, como se um homem houvera achado ricos
          despojos.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
