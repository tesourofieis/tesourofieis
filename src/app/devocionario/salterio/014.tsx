import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page014() {
  return (
    <PageWrapper>
      <H1 text="Salmo 14" />

      <Language>
        <Typography className="latin">
          Dómine, quis habitábit in tabernáculo tuo? * Aut quis requiéscet in monte sancto tuo?
        </Typography>
        <Typography className="vernacular">
          Senhor, quem habitará no vosso tabernáculo? * Ou quem descansará no vosso santo monte?
        </Typography>
        <Typography className="latin">
          Qui ingréditur sine mácula, * et operátur justítiam:
        </Typography>
        <Typography className="vernacular">
          O que vive sem mácula, * e pratica a justiça:
        </Typography>
        <Typography className="latin">
          Qui lóquitur veritátem in corde suo, * qui non egit dolum in lingua sua:
        </Typography>
        <Typography className="vernacular">
          O que fala verdade no seu coração, * o que não forjou dolos com sua língua:
        </Typography>
        <Typography className="latin">
          Nec fecit próximo suo malum, * et oppróbrium non accépit advérsus próximos suos.
        </Typography>
        <Typography className="vernacular">
          Nem mal fez ao seu próximo, * nem consentiu que seus próximos fossem desonrados.
        </Typography>
        <Typography className="latin">
          Ad níhilum dedúctus est in conspéctu ejus malígnus: * timéntes autem Dóminum gloríficat:
        </Typography>
        <Typography className="vernacular">
          Na sua apreciação considera o malvado como um nada, * mas honra os que temem o Senhor:
        </Typography>
        <Typography className="latin">
          Qui jurat próximo suo, et non décipit, * qui pecúniam suam non dedit ad usúram, et múnera
          super innocéntem non accépit.
        </Typography>
        <Typography className="vernacular">
          Faz juramento ao seu próximo e o não engana, * não empresta o seu dinheiro com usura, nem
          aceita subornos contra o inocente.
        </Typography>
        <Typography className="latin">Qui facit hæc: * non movébitur in ætérnum.</Typography>
        <Typography className="vernacular">Quem procede assim: * jamais será abalado.</Typography>
      </Language>
    </PageWrapper>
  );
}
