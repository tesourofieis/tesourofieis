import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageApostolos() {
  return (
    <PageWrapper>
      <H1 text="Missa de Todos os S. S. Apóstolos" />

      <Typography className="aside">
        Tudo como na Missa precedente, excepto o seguinte: Oração, Secreta e
        Postcomúnio como na{" "}
        <Link className="link" href="/missal/santos/10-28">
          Missa S. Simão e S. Judas
        </Link>{" "}
        .
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">Ef. 4, 7-13</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Ephésios.
        </Typography>
        <Typography className="vernacular">
          Lição da do B. Ap.º Paulo aos Efésios.
        </Typography>
        <Typography className="latin">
          Fratres: Unicuíque nostrum data est grátia secúndum mensúram
          donatiónis Christi. Propter quod dicit: Ascéndens in altum captívam
          duxit captivitátem: dedit dona homínibus. Quod autem ascéndit, quid
          est, nisi quia et descéndit primum in inferióres partes terræ? Qui
          descéndit, ipse est et qui ascéndit super omnes cœlos, ut impléret
          ómnia. Et ipse dedit quosdam quidem apóstolos, quosdam autem
          prophétas, alios vero vero evangelístas, alios autem pastóres, et
          doctores ad consummatiónem sanctó rum in opus ministérii, in
          ædificatiónem córporis Christi: donec occurrámus omnes in unitátem
          fídei et agnitiónis Fílii Dei, in virum perféctum, in mensúram ætatis
          plenitúdinis Christi.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: A graça foi dada a cada um de nós segundo a medida do dom
          de Jesus Cristo. É por isso que a Escritura diz: «Subindo ao céu, Ele
          levou consigo muitos cativos e distribuiu dons pelos homens». Mas,
          porque foi que subiu, senão porque, também, antes descera aos lugares
          mais baixos da terra? Aquele que desceu, foi o mesmo que subiu acima
          de todos os céus, para completar todas as coisas. Foi Ele, também,
          quem destinou uns para apóstolos, outros para profetas, estes para
          evangelistas, aqueles para pastores e doutores para a perfeição dos
          santos, para o trabalho do ministério e para a edificação do corpo de
          Cristo, até que nós todos cheguemos à unidade, da fé e do conhecimento
          do Filho de Deus, ao estado da perfeição humana, à medida da plenitude
          de Cristo.
        </Typography>
      </Language>

      <H2 text="Missa de Todos os S. S. Apóstolos" />

      <Typography className="aside">
        Para Quarta-feira Dentro do Tempo Pascal Tudo como na Missa precedente,
        excepto o seguinte:
      </Typography>

      <H3 text="Intróito" />

      <Typography className="em">Sl. 63, 3</Typography>

      <Language>
        <Typography className="latin">
          Protexísti me, Deus, a convéntu malignántium, allelúja: a multitúdine
          operántium iniquitátem, allelúja, allelúja.{" "}
          <Typography className="latin">Ps. ib., 2</Typography> Exáudi, Dómine,
          orationem meam, cum déprecor: a timóre inimíci éripe ánimam meam.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, livrastes-me da companhia dos maus, aleluia: livrastes-me do
          meio daqueles que procedem com iniquidade. Aleluia, aleluia.{" "}
          <Typography className="vernacular">Sl. ib., 2</Typography> Senhor,
          quando eu Vos invocar, ouvi a minha oração: livrai a minha alma do
          temor do inimigo.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <Typography className="aside">Depois da Epistola:</Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 88, 6</Typography> Confitebúntur
          cœli mirabília tua, Dómine: étenim veritátem tuam in ecclésia
          sanctórum. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Joann. 15, 16</Typography> Ego vos elégi de
          mundo, ut eátis, et fructum afferátis, et fructus vester máneat.
          Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 88, 6</Typography> Senhor, os
          céus proclamam as vossas maravilhas e a vossa verdade na assembleia
          dos Santos. Aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Jo. 15, 16</Typography> Fui Eu quem vos
          escolheu no mundo, a fim de que possais ir (pelo mundo), alcanceis
          frutos e esses frutos permaneçam Aleluia.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 44, 17-18</Typography>

      <Language>
        <Typography className="latin">
          Constítues eos príncipes super omnem terram: mémores erunt nóminis
          tui, Dómine, in omni progénie et generatióne, allelúja, allelúja.
        </Typography>
        <Typography className="vernacular">
          Vós os instituístes príncipes em toda a terra: eles se recordarão do
          vosso nome em todas as gerações. Aleluia, aleluia.
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 18, 5</Typography>

      <Language>
        <Typography className="latin">
          In omnem terram exívit sonus eórum: et in fines orbis terræ verba
          eórum, allelúja, allelúja.
        </Typography>
        <Typography className="vernacular">
          O som da sua voz ecoa por toda a terra, fazendo-se ouvir as suas
          palavras até às extremidades do mundo, aleluia, aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
