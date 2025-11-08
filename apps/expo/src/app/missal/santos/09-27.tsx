import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0927() {
  return (
    <PageWrapper>
      <H1 text="S. S. Cosme e Damião, Mártires, a 27 de Setembro" />

      <Typography className="comment">
        Irmãos pelo sangue, os SS. Cosme e Damião o foram sobretudo pela fé em
        Jesus e pelo martírio comum, sofrido pelo Cristo (All.). Naturais de
        Egeu, na Arabia, medicos distinctos do reinado de Diocleciano e
        Maximiano, curavam, pela virtude de Cristo e pela sua ciência medica, as
        mais graves doenças, estendendo-se a sua reputação, muito em breve, por
        todo o país. Apóstolos ainda mais do que medicos, curavam as almas ao
        mesmo tempo que os corpos, a exemplo de Jesus na Palestina (Ev.).
        Denunciados ao prefeito Lydiano, sofreram os mais terríveis suplícios,
        sendo, finalmente, acorrentados e jogados no mar, apedrejados e expostos
        ás chamas dum braseiro. Depois de varios tormentos, morreram cerca do
        anno de 285, e seus corpos foram transportados a Roma, para o antigo
        templo de Romulo, transformado em igreja, a ambos consagrada, e onde se
        faz a Estação na Quinta-Feira da 3ª Semana da Quaresma (1). Seus nomes
        estão inscriptos no Canon da Missa, em seguida a alguns mártires
        romanos.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum tuórum
          Cosmæ et Damiáni natalítia cólimus, a cunctis malis imminéntibus,
          eórum intercessiónibus, liberémur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos rogamos, que, celebrando o
          nascimento no céu dos vossos B. B. Mártires Cosme e Damião, sejamos
          livres, graças à sua intercessão, de todos os males que nos ameaçam.
          Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 33, 18-19</Typography>

      <Language>
        <Typography className="latin">
          Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
          tribulatiónibus eórum liberávit eos.
          <Typography className="versicle"> ℣. </Typography>Juxta est Dóminus
          his, qui tribuláto sunt corde: et húmiles spíritu salvabit.
        </Typography>
        <Typography className="vernacular">
          Clamaram os justos; então o Senhor ouviu-os e livrou-os de todas suas
          aflições.<Typography className="versicle"> ℣. </Typography>O Senhor
          está próximo daqueles que têm o coração atribulado; e salvará os que
          têm o espírito humilhado.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          Hæc est vera fratérnitas, quæ vicit mundi crímina: Christum secuta
          est, ínclita tenens regna cœléstia. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          Esta é a verdadeira fraternidade que venceu os crimes do mundo: Ela
          seguiu Cristo, possuindo gloriosamente o reino celestial. Aleluia.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 5, 12-13</Typography>

      <Language>
        <Typography className="latin">
          Gloriabúntur in te omnes, qui díligunt nomen tuum: quóniam tu, Dómine,
          benedíces justo: Dómine, ut scuto bonæ voluntátis tuæ coronásti nos.
        </Typography>
        <Typography className="vernacular">
          Em Vós se alegrarão, Senhor, os que amam o vosso nome; pois, Senhor,
          abençoais o justo. Rodeastes-nos, Senhor, com vosso amor, como se fora
          um escudo.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sanctórum tuórum nobis, Dómine, pia non desit orátio: quæ et múnera
          nostra concíliet, et tuam nobis indulgéntiam semper obtíneat. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a piedosa oração dos vossos Santos, Senhor, nos não falte; e que
          Vos torne recomendáveis as nossas ofertas e nos obtenha sempre a vossa
          misericórdia. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 78, 2 & 11</Typography>

      <Language>
        <Typography className="latin">
          Posuérunt mortália servórum tuórum, Dómine, escas volatilíbus cœli,
          carnes Sanctórum tuórum béstiis terræ: secúndum magnitúdinem bráchii
          tui pósside fílios morte punitórum.
        </Typography>
        <Typography className="vernacular">
          Deram os cadáveres dos vossos servos, Senhor, em alimento às aves do
          céu, e as carnes dos vossos Santos às feras da terra. Com o poder do
          vosso braço, salvai os filhos daqueles que foram condenados à morte.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Prótegat, quǽsumus, Dómine, pópulum tuum et participátio cœléstis
          indúlta convívii, et deprecátio colláta Sanctórum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que o vosso povo, Senhor, Vos suplicamos, seja protegido pela
          participação, do celestial banquete, que lhe proporcionastes, e pela
          intercessão, que lhe concedestes, dos vossos Santos. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
