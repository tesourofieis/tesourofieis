import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSantissimosacramento() {
  return (
    <PageWrapper>
      <H1 text="Missa do Santíssimo Sacramento" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/pentecostes/pent1-4">
          Missa do Santíssimo Corpo de Cristo,
        </Link>
        excepto: Depois da Septuagésima omite-se o Aleluia o Verso que se segue, e diz-se o:
      </Typography>

      <H3 text="Trato" />

      <Typography className="em">Ml. 1, 11</Typography>

      <Language>
        <Typography className="latin">
          Ab ortu solis usque ad occásum, magnum est nomen meum in géntibus.
          <Typography className="versicle"> ℣. </Typography>Et in omni loco sacrificátur, et
          offértur nómini meo oblátio munda: quia magnum est nomen meum in géntibus.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Prov. 9, 5</Typography> Veníte, comédite panem meum: et
          bíbite vinum, quod míscui vobis.
        </Typography>
        <Typography className="vernacular">
          Desde o nascente até ao poente o meu nome é grande entre as nações.
          <Typography className="versicle"> ℣. </Typography>Em todos os lugares fazem-se sacrifícios
          e oferece-se em honra do meu nome uma vítima pura; pois o meu nome é grande entre as
          nações.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Pr. 9, 5</Typography> Vinde, comei o meu pão e bebei o
          vinho, que vos preparei.
        </Typography>
      </Language>

      <Typography className="aside">
        No Tempo Pascal omite-se O Gradual e o Trato, e diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Luc. 24, 35</Typography> Cognovérunt discípuli Dóminum Jesum
          in fractióne panis. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Joann. 6, 56-57</Typography> Caro mea vere est cibus, et
          sanguis meus vere est potus: qui mánducat meam carnem, et bibit meum sánguinem, in me
          manet, et ego in eo. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Lc. 24, 35</Typography> Os discípulos reconheceram o
          Senhor pela fracção do pão. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Jo. 6, 56-57</Typography> Minha Carne é verdadeira comida e o
          meu Sangue verdadeira bebida. Aquele que come a minha Carne e bebe o meu Sangue, permanece
          em mim e Eu nele. Aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
