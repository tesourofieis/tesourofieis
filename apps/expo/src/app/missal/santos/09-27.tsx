import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0927() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Cosme e Damião, Mártires, a 27 de Setembro
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum tuórum
          Cosmæ et Damiáni natalítia cólimus, a cunctis malis imminéntibus,
          eórum intercessiónibus, liberémur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos rogamos, que, celebrando o
          nascimento no céu dos vossos B. B. Mártires Cosme e Damião, sejamos
          livres, graças à sua intercessão, de todos os males que nos ameaçam.
          Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Gradual</Text>

      <Text className="em">Sl. 33, 18-19</Text>

      <Language>
        <Text className="latin">
          Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
          tribulatiónibus eórum liberávit eos.
          <Text className="versicle"> ℣. </Text>Juxta est Dóminus his, qui
          tribuláto sunt corde: et húmiles spíritu salvabit.
        </Text>
        <Text className="vernacular">
          Clamaram os justos; então o Senhor ouviu-os e livrou-os de todas suas
          aflições.<Text className="versicle"> ℣. </Text>O Senhor está próximo
          daqueles que têm o coração atribulado; e salvará os que têm o espírito
          humilhado.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Hæc est vera
          fratérnitas, quæ vicit mundi crímina: Christum secuta est, ínclita
          tenens regna cœléstia. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Esta é a
          verdadeira fraternidade que venceu os crimes do mundo: Ela seguiu
          Cristo, possuindo gloriosamente o reino celestial. Aleluia.
        </Text>
      </Language>

      <Text className="h3">Ofertório</Text>

      <Text className="em">Sl. 5, 12-13</Text>

      <Language>
        <Text className="latin">
          Gloriabúntur in te omnes, qui díligunt nomen tuum: quóniam tu, Dómine,
          benedíces justo: Dómine, ut scuto bonæ voluntátis tuæ coronásti nos.
        </Text>
        <Text className="vernacular">
          Em Vós se alegrarão, Senhor, os que amam o vosso nome; pois, Senhor,
          abençoais o justo. Rodeastes-nos, Senhor, com vosso amor, como se fora
          um escudo.
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Sanctórum tuórum nobis, Dómine, pia non desit orátio: quæ et múnera
          nostra concíliet, et tuam nobis indulgéntiam semper obtíneat. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Que a piedosa oração dos vossos Santos, Senhor, nos não falte; e que
          Vos torne recomendáveis as nossas ofertas e nos obtenha sempre a vossa
          misericórdia. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Comúnio</Text>

      <Text className="em">Sl. 78, 2 & 11</Text>

      <Language>
        <Text className="latin">
          Posuérunt mortália servórum tuórum, Dómine, escas volatilíbus cœli,
          carnes Sanctórum tuórum béstiis terræ: secúndum magnitúdinem bráchii
          tui pósside fílios morte punitórum.
        </Text>
        <Text className="vernacular">
          Deram os cadáveres dos vossos servos, Senhor, em alimento às aves do
          céu, e as carnes dos vossos Santos às feras da terra. Com o poder do
          vosso braço, salvai os filhos daqueles que foram condenados à morte.
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Prótegat, quǽsumus, Dómine, pópulum tuum et participátio cœléstis
          indúlta convívii, et deprecátio colláta Sanctórum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que o vosso povo, Senhor, Vos suplicamos, seja protegido pela
          participação, do celestial banquete, que lhe proporcionastes, e pela
          intercessão, que lhe concedestes, dos vossos Santos. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
