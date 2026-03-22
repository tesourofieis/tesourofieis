import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PagePrecesaomiguel() {
  return (
    <PageWrapper>
      <H1 text="Prece a São Miguel Arcanjo" />

      <Language>
        <Typography className="latin">
          Princeps gloriosíssime cæléstis militiæ, sancte Michaël Archangele, defénde nos in prælio
          advérsus príncipes et potestátes, advérsus mundi rectóres tenebrárum harum, contra
          spirituália nequitiæ, in cæléstibus.
        </Typography>
        <Typography className="vernacular">
          Gloriosíssimo Príncipe da Milícia Celeste, São Miguel Arcanjo, defendei-nos «no nosso
          combate contra os principados e potestades, contra os príncipes do mundo tenebroso, contra
          as hostes espirituais da iniquidade nas regiões celestes».
        </Typography>
        <Typography className="latin">
          Veni in auxilium hominum; quos Deus ad imáginem similitúdinis suæ fecit, et a tyránnide
          diáboli emit prétio magno.
        </Typography>
        <Typography className="vernacular">
          Vinde em auxílio dos homens, que Deus criou à sua imagem e semelhança e que remiu, por
          alto preço, da tirania do demónio.
        </Typography>
        <Typography className="latin">
          Te custódem et patrónum sancta venerátur Ecclésia; tibi trádidit Dóminus ánimas
          redemptórum in supérna felicitáte locándas. Deprecáre Deum pacis, ut cónterat sátanam sub
          pédibus nostris, ne ultra váleat captivos tenére hómines, et Ecclésiæ nocére.
        </Typography>
        <Typography className="vernacular">
          A Santa Igreja vos venera como Guarda e Patrono, a vós, Deus confiou as almas remidas
          destinadas a ter assento na suprema Felicidade. Rogai ao Deus da Paz que esmague Satanás
          debaixo dos nossos pés, que ele não possa mais reter os homens cativos e infligir males à
          Igreja.
        </Typography>
        <Typography className="latin">
          Offer nostras preces in Conspéctu Altíssimi, ut cito anticipent nos misericórdiæ Dómini,
          et apprehéndas dracónem, serpéntem antiquum, qui est diábolus et sátanas, et ligátum
          mittas in abyssum, ut non sedúcat ámplius gentes.
        </Typography>
        <Typography className="vernacular">
          Oferecei as nossas preces ao Altíssimo, a fim de que, sem demora, possa atrair a sua
          misericórdia sobre nós; prendei «o dragão, a antiga serpente que é o Diabo e Satanás»,
          lançai-o acorrentado no abysmo, «que ele mais não possa seduzir as nações».
        </Typography>
      </Language>
    </PageWrapper>
  );
}
