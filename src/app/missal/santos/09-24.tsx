import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0924() {
  return (
    <PageWrapper>
      <H1 text="B. Virgem Maria das Mercês, a 24 de Setembro" />

      <Typography className="comment">
        A Santíssima Virgem apareceu no XIII seculo a S. Pedro Nolasco, a S. Raymundo de Pennafort e
        a Thiago, rei de Aragão, para lhes sugerir a fundação de um instituto religioso com o fim de
        libertar os cristãos do bárbaro jugo dos Sarracenos (Or.) que, nessa época, ocupavam grande
        parte da Espanha. Foi, por conseguinte, a 10 do mês de Agosto do anno de 1218, que o rei
        Tiago decretou o estabelecimento da Ordem real, militar e religiosa de Nossa Senhora das
        Mercês e concedeu a seus membros o privilégio de trazer sobre o peito as suas proprias
        armas. O maior numero deles eram cavalheiros, e, enquanto os clérigos recitavam o officio
        divino nas comendadorias, eles vigiavam as costas e libertavam os prisioneiros. A obra
        espalhou-se por toda a superficie do globo, produzindo heróis de santidade, homens de
        caridade e piedade incomparáveis, que se dedicavam a recolher esmolas dos Cristãos para o
        resgate de seus irmãos e muitas vezes se entregavam como resgate a fim de libertarem um
        grande numero de cativos. Celebra da primeiramente pela Ordem de Nossa Senhora das Mercês, a
        festa de hoje estendeu-se á Igreja universal por Inocêncio XII, no seculo XVII.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/26festasmaria1">
          Missa Salve
        </Link>{" "}
        , sancta Parens da Virgem Maria, excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui per gloriosíssimam Fílii tui Matrem, ad liberandos Christi fidéles a potestáte
          paganórum, nova Ecclésiam tuam prole amplificáre dignátus es: præsta, quǽsumus; ut, quam
          pie venerámur tanti óperis institutrícem, ejus páriter méritis et intercessióne, a
          peccátis ómnibus et captivitáte dǽmonis liberémur. Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que pela gloriosíssima Mãe do vosso Filho Vos dignastes aumentar a vossa Igreja
          com uma nova família, destinada a libertar os fiéis de Cristo do poder dos pagãos,
          concedei-nos, Vos rogamos, que, venerando piedosamente a inspiradora de uma tão notável
          instituição, sejamos, graças aos seus méritos e intercessão, livres de todos os pecados e
          do cativeiro do demónio. Pelo mesmo...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
