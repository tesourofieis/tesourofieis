import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageAvemarisstella() {
  return (
    <PageWrapper>
      <H1 text="Ave maris stella" />

      <Language>
        <Text className="latin">
          Ave maris stella, Dei Mater alma, atque semper Virgo, felix caeli
          porta.
        </Text>
        <Text className="vernacular">
          Ave, Estrela do mar, Mãe de Deus sagrada, Que sempre Virgem sois,
          Porta feliz do Céu.
        </Text>
        <Text className="latin">
          Sumens illud Ave, Gabriélis ore, Funda nos in pace, Mutans Evæ nomen.
        </Text>
        <Text className="vernacular">
          Ouvistes aquele «Ave», Dos lábios de Gabriel, Estabelecei-nos na paz,
          Mudando o nome de Eva.
        </Text>
        <Text className="latin">
          Solve vincla reis, Profer lumen cæcis, Mala nostra pelle, Bona cuncta
          posce.
        </Text>
        <Text className="vernacular">
          Libertai dos grilhões os pecadores, Mandai luz aos cegos, Afastai de
          nós os males, E obtém-nos todos os bens.
        </Text>
        <Text className="latin">
          Monstra te esse matrem, Sumat per te preces, Qui pro nobis natus,
          Tulit esse tuus.
        </Text>
        <Text className="vernacular">
          Mostrai que sois nossa Mãe; por Vós, ouça as nossas preces, Aquele
          que, para nos salvar, Quis ser vosso Filho.
        </Text>
        <Text className="latin">
          Virgo singuláris, Inter omnes mitis, Nos culpis solutos, Mites fac et
          castos.
        </Text>
        <Text className="vernacular">
          Ó Virgem sem igual, Entre todas a mais doce, Libertando-nos de nossas
          culpas, Fazei-os mansos e castos.
        </Text>
        <Text className="latin">
          Vitam præsta puram, Iter para tutum, Ut videntes Jesum, Semper
          collætemur.
        </Text>
        <Text className="vernacular">
          Concedei-nos uma vida pura, Fazei seguros os nossos caminhos, Para
          que, contemplando a Jesus, Exultemos eternamente.
        </Text>
        <Text className="latin">
          Sit laus Deo Patri, Summo Christo décus, Spirítui Sancto, Tribus honor
          unus.
        </Text>
        <Text className="vernacular">
          Seja louvado Deus Pai, A Cristo também, e ao Espírito Santo; Seja
          prestada honra igual.
        </Text>
        <Text className="latin">Amen.</Text>
        <Text className="vernacular">Amen.</Text>
      </Language>
    </PageWrapper>
  );
}
