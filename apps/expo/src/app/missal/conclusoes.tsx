import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageConclusoes() {
  return (
    <PageWrapper>
      <H1 text="Conclusão das Orações, Secretas e Postcomúnios" />

      <Typography className="aside">
        Para maior facilidade, damos a seguir as conclusões por extenso das
        Orações, Secretas e Postcomúnios das Missas, as quais, ordinariamente,
        estão indicadas no Missal, de modo abreviado.
      </Typography>

      <H1 text="1.ª - Quando se dirige ao Pai, concluir-se-á:" />

      <Language>
        <Typography className="latin">
          Per Dóminum nostrum Jesum Christum Fílium tuum, qui tecum vivit et
          regnat in unitáte Spíritus Sancti, Deus, per ómnia Sæcula sæculórum.
          Amen.
        </Typography>
        <Typography className="vernacular">
          Por nosso Senhor Jesus, vosso Filho, que convosco vive e reina em
          unidade do Espírito Santo, Deus, por todos os séculos dos séculos.
          Amen.
        </Typography>
      </Language>

      <H1 text="2.ª - Quando se menciona o Filho no princípio:" />

      <Language>
        <Typography className="latin">
          Per eúmdem Dóminum nostrum Jesum Christum Fílium tuum, qui tecum vivit
          et regnat in unitáte Spíritus Sancti, Deus, per ómnia sæcula
          sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Pelo mesmo nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e
          reina em unidade do Espírito Santo, Deus, por todos os séculos dos
          séculos. Amen.
        </Typography>
      </Language>

      <H1 text="3.ª - Quando se menciona o Filho no fim, concluir-se-á:" />

      <Language>
        <Typography className="latin">
          Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia
          sæcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Que convosco vive e reina em unidade do Espírito Santo, Deus, por
          todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <H1 text="4.ª - Quando se dirige ao Filho concluir-se-á:" />

      <Language>
        <Typography className="latin">
          Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus,
          per ómnia sæcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Vós, que viveis e reinais com Deus Pai em unidade do Espírito Santo,
          Deus, por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <H1 text="5.ª - Quando se menciona o Espírito Santo, concluir-se-á:" />

      <Language>
        <Typography className="latin">
          ... in unitáte ejúsdem Spíritus Sancti, Deus, per ómnia sæcula
          sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          ... em unidade do mesmo Espírito Santo, Deus, por todos os séculos dos
          séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Quando na mesma Missa se recitam diversas Orações, Secretas e
        Postcomúnios, somente a primeira e a última terão a conclusão como se
        indica atrás. Terminadas as conclusões, os fiéis respondem: Amen.
      </Typography>
    </PageWrapper>
  );
}
