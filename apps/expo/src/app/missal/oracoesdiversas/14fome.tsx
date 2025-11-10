import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page14Fome() {
  return (
    <PageWrapper>
      <H1 text="14.ª Para os tempos de fome" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da nobis, quǽsumus, Dómine, piæ supplicatiónis efféctum: et famem
          propitiátus avérte; ut mortálium corda cognóscant, et te indignánte
          tália flagélla prodíre, et te miseránte cessáre. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, concedei-nos a graça de alcançarmos o que de
          Vós imploramos com nossas súplicas piedosas; e, pela vossa bondade,
          afastai de nós a fome, a fim de que os corações mortais conheçam que,
          assim como estes flagelos provêm da vossa indignação, assim também a
          vossa misericórdia pode fazê-los cessar. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Deus, qui humáni generis utrámque substántiam, præséntium númerum et
          aliménto végetas et rénovas sacraménto: tríbue, quǽsumus; ut eórum et
          corpóribus nostris subsídium non desit et méntibus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que com os dons aqui presentes assistis ao género humano nas
          suas duas substâncias, sustentando-o com o alimento e renovando-o com
          o sacramento, concedei-nos, Vos suplicamos, que a assistência, que
          esperamos, não falte nem aos nossos corpos, nem às nossas almas. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Gubérna, quǽsumus, Dómine, temporálibus aliméntis: quos dignáris
          ætérnis informáre mystériis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, dignai-Vos manifestar a vossa providência,
          concedendo os alimentos temporais àqueles que Vos dignastes robustecer
          com mystérios eternos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
