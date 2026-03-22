import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page31Inimigos() {
  return (
    <PageWrapper>
      <H1 text="31.ª Pelos inimigos" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, pacis caritatísque amátor et custos: da ómnibus inimícis nostris pacem caritatémque
          veram; et cunctórum eis remissiónem tríbue peccatórum, nosque ab eórum insídiis poténter
          éripe. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que amais e conservais a paz, concedei aos nossos inimigos a paz e a verdadeira
          caridade, bem como a remissão dos seus pecados; e a nós, Senhor, livrai-nos com vosso
          poder das suas insídias. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Oblátis, quǽsumus, Dómine, placáre munéribus: et nos ab inimícis nostris cleménter éripe,
          eisque indulgéntiam tríbue delictórum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, deixai-Vos aplacar com estes dons, que Vos oferecemos; e, pela
          vossa clemência, livrai-nos das mãos dos nossos inimigos, concedendo-lhes ao mesmo tempo o
          perdão dos pecados. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hæc nos commúnio, Dómine, éruat a delíctis: et ab inimicórum deféndat insídiis. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que esta comunhão, Senhor, nos livre de todos os delitos e nos defenda das insídias dos
          nossos inimigos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
