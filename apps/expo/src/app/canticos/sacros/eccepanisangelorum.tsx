import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageEccepanisangelorum() {
  return (
    <PageWrapper>
      <H1 text="Ecce panis angelorum" />

      <Language>
        <Typography className="latin">
          Ecce panis Angelorum, Factus cibus viatorum, Vere panis filiorum, Non
          mittendus canibus! In figuris praesignatur, Cum Isaac immolatur, Agnus
          Paschae deputatur, Datur manna patribus.
        </Typography>
        <Typography className="vernacular">
          Eis o Pão dos Anjos que se fez alimento dos homens viadores,
          verdadeiro pão dos inocentes, que não deve ser dado aos cães!
          Antigamente foi representado por figuras: imolado com Isaque e
          significado no cordeiro pascal e no maná do deserto.
        </Typography>
        <Typography className="latin">
          Bone pastor, panis vere, Jesu, nostri miserere, Tu nos pasce, nos
          tuere, Tu nos bona fac videre In terra viventium. Tu qui cuncta scis
          et vales, Qui nos pascis hic mortales, Tuos ibi commensales,
          Cohaeredes et sodales Fac sanctorum civium.
        </Typography>
        <Typography className="vernacular">
          Ó bom Pastor, ó Pão verdadeiro, ó Jesus, tende piedade de nós:
          alimentai-nos, defendei-nos do mal e permiti que gozemos os
          verdadeiros bens da terra dos vivos. Ó Vós, que tudo conheceis e
          podeis: ó Vós, que nos alimentais nesta vida mortal, tornai-nos
          co-herdeiros e companheiros dos habitantes da cidade celestial. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
