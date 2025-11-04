import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page128() {
  return (
    <PageWrapper>
      <H1 text="Salmo 128" />

      <Language>
        <Typography className="latin">
          Sæpe expugnavérunt me a juventúte mea, * dicat nunc Israël.
        </Typography>
        <Typography className="vernacular">
          Amiúde me combateram desde a minha mocidade, * diga-o agora Israel.
        </Typography>
        <Typography className="latin">
          Sæpe expugnavérunt me a juventúte mea: * étenim non potuérunt mihi.
        </Typography>
        <Typography className="vernacular">
          Muitas vezes me combateram desde a minha mocidade: * todavia, não
          prevaleceram contra mim.
        </Typography>
        <Typography className="latin">
          Supra dorsum meum fabricavérunt peccatóres: * prolongavérunt
          iniquitátem suam.
        </Typography>
        <Typography className="vernacular">
          Sobre o meu dorso fabricaram os pecadores: * prolongaram a sua
          iniquidade.
        </Typography>
        <Typography className="latin">
          Dóminus justus concídit cervíces peccatórum: * confundántur et
          convertántur retrórsum omnes, qui odérunt Sion.
        </Typography>
        <Typography className="vernacular">
          O Senhor que é justo cortou os pescoços dos pecadores: * fiquem
          confundidos e retrocedam todos os que odeiam Sião.
        </Typography>
        <Typography className="latin">
          Fiant sicut fænum tectórum: * quod priúsquam evellátur, exáruit:
        </Typography>
        <Typography className="vernacular">
          Sejam como a erva dos telhados: * a qual seca antes de ser arrancada:
        </Typography>
        <Typography className="latin">
          De quo non implévit manum suam qui metit, * et sinum suum qui
          manípulos cólligit.
        </Typography>
        <Typography className="vernacular">
          Da qual o ceifeiro não encheu a mão, * nem seus braços o que apanha
          seus feixes.
        </Typography>
        <Typography className="latin">
          Et non dixérunt qui præteríbant: benedíctio Dómini super vos: *
          benedíximus vobis in nómine Dómini.
        </Typography>
        <Typography className="vernacular">
          Não disseram os que passavam: a bênção do Senhor seja sobre vós: * nós
          vos abençoamos no nome do Senhor.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
