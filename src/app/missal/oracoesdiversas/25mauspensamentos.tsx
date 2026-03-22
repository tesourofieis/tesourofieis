import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page25Mauspensamentos() {
  return (
    <PageWrapper>
      <H1 text="25.ª Para afastar os maus pensamentos" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens et mitíssime Deus, réspice propítius ad preces nostras: et líbera corda nostra
          de malárum tentatiónibus cogitatiónum; ut Sancti Spíritus dignum fíeri habitáculum
          mereámur. Per Dóminum... in unitáte ejúsdem Spíritus Sancti.
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente e pacífico, ouvi benigno as nossas preces e livrai os nossos corações
          da tentação dos maus pensamentos, a fim de que mereçamos tornar-nos em digna morada do
          Espírito Santo. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Has tibi, Dómine, offérimus oblatiónes pro salúte nostra: quaténus ánimas nostras ab
          immúndis cogitatiónibus purges, illæsásque custódias, et Sancti Spíritus grátia illumináre
          dignéris. Per Dóminum... in unitáte ejúsdem Spíritus Sancti.
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos oferecemos estas oblatas em favor da nossa salvação, a fim de que Vos digneis
          expurgar os pensamentos impuros das nossas almas, conservá-las ilesas e iluminá-las com a
          graça do Espírito Santo. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Deus, qui illúminas omnem hóminem veniéntem in hunc mundum: illúmina, quǽsumus, corda
          nostra grátiæ tuæ splendóre; ut digna ac plácita majestáti tuæ cogitáre semper, et te
          sincére dilígere valeámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deusm que iluminais todos os homens que vêm a este mundo, ilustrai, Vos suplicamos, os
          nossos corações com o resplendor da vossa graça, a fim de que tenhamos sempre na mente
          pensamentos dignos e agradáveis à vossa majestade e consagremos sinceramente, e só a Vós,
          todo nosso amor. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
