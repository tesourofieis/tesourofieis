import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page112() {
  return (
    <PageWrapper>
      <H1 text="Salmo 112" />

      <Language>
        <Typography className="latin">Laudáte, púeri, Dóminum: * laudáte nomen Dómini.</Typography>
        <Typography className="vernacular">
          Louvai o Senhor, ó meninos: * louvai o nome do Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">fit reverentia</Typography> Sit nomen Dómini benedíctum, *
          ex hoc nunc, et usque in sǽculum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">inclinar a cabeça</Typography> Seja bendito o nome do
          Senhor, * desde agora e para sempre.
        </Typography>
        <Typography className="latin">
          A solis ortu usque ad occásum, * laudábile nomen Dómini.
        </Typography>
        <Typography className="vernacular">
          Desde o nascer ao pôr do sol, * é digno de louvor o nome do Senhor.
        </Typography>
        <Typography className="latin">
          Excélsus super omnes gentes Dóminus, * et super cælos glória ejus.
        </Typography>
        <Typography className="vernacular">
          Excelso é o Senhor sobre todas as gentes, * e a sua glória sobre os céus.
        </Typography>
        <Typography className="latin">
          Quis sicut Dóminus, Deus noster, qui in altis hábitat, * et humília réspicit in cælo et in
          terra?
        </Typography>
        <Typography className="vernacular">
          Quem há como o Senhor nosso Deus, que habita nas alturas: * e atende os humildes no céu e
          na terra?
        </Typography>
        <Typography className="latin">
          Súscitans a terra ínopem, * et de stércore érigens páuperem:
        </Typography>
        <Typography className="vernacular">
          Levantando da terra o desvalido, * e tirando da imundície o pobre:
        </Typography>
        <Typography className="latin">
          Ut cóllocet eum cum princípibus, * cum princípibus pópuli sui.
        </Typography>
        <Typography className="vernacular">
          Para o colocar com os príncipes, * com os príncipes do seu povo.
        </Typography>
        <Typography className="latin">
          Qui habitáre facit stérilem in domo, * matrem filiórum lætántem.
        </Typography>
        <Typography className="vernacular">
          Que faz a mulher estéril viver em sua casa, * alegre mãe de filhos.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
