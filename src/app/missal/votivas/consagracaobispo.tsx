import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageConsagracaobispo() {
  return (
    <PageWrapper>
      <H1 text="No Aniversário da Eleição ou Consagração do Bispo" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/12confessorespontifices2">
          Missa Sacerdótes tui
        </Link>{" "}
        , excepto: Oração, Secreta e Postcomúnio como na
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me.
        </Link>{" "}
      </Typography>

      <H3 text="Epístola" />

      <Typography className="em">Heb. 5, 1-4</Typography>

      <Language>
        <Typography className="latin">Léctio Epístolæ beáti Pauli Apóstoli ad Hebrǽos.</Typography>
        <Typography className="vernacular">Lição da Ep.ª do B. Ap.º Paulo aos Hebreus.</Typography>
        <Typography className="latin">
          Fratres: Omnis póntifex ex homínibus as sumptus, pro homínibus constitúitur in iis, quæ
          sunt ad Deum, ut ófferat dona, et sacrifícia pro peccátis: qui condolére possit iis, qui
          ígnorant et errant: quóniam et ipse circúmdatus est infirmitáte: et proptérea debet,
          quemádmodum pro pópulo, ita étiam et pro semetípso offérre pro peccátis. Nec quisquam
          sumit sibi honórem, sed qui vocátur a Deo, tamquam Aaron.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Todo o Pontífice é escolhido entre os homens e instituído para os homens
          naquilo que diz respeito ao culto de Deus, a fim de que ofereça dons e sacrifícios pelos
          pecados e se compadeça daqueles que vivem na ignorância e no erro, pois ele também está
          cercado de fraqueza. É por causa desta fraqueza que ele deve oferecer por si e pelo povo
          sacrifícios pelos pecados. Ninguém tome para si esta honra, mas espere que seja chamado
          por Deus, como Aarão.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mc. 13, 33-37</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum Marcum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          Marcos.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Vidéte, vigiláte et oráte: nescítis enim,
          quando tempus sit. Sicut homo, qui péregre proféctus réliquit domum suam, et dedit servis
          suis potestátem cujúsque óperis, et janitóri præcépit, ut vígilet. Vigiláte ergo (nescítis
          enim, quando dóminus domus véniat: sero, an média nocte, an galli cantu, an mane) ne, cum
          vénerit repénte, invéniat vos dormiéntes. Quod autem vobis dico, ómnibus dico: Vigilate.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Sede atentos; vigiai e orai, pois não
          sabeis quando virá esse tempo. Assim como um homem que vai para uma viagem deixa a sua
          casa, entrega o seu domínio aos servos, marca a cada um deles a sua ocupação e encarrega o
          porteiro da vigilância, assim também vós deveis vigiar (pois não sabeis se o senhor da
          casa virá de tarde, ou à meia-noite, ou ao cantar do galo, ou de manhã), para que não
          aconteça que, regressando ele repentinamente, vos encontre a dormir. O que a vós digo, a
          todos o digo: Vigiai!».
        </Typography>
      </Language>
    </PageWrapper>
  );
}
