import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page014() {
  return (
    <PageWrapper>
      <H1 text="Salmo 14" />

      <Language>
        <Text className="latin">
          Dómine, quis habitábit in tabernáculo tuo? * Aut quis requiéscet in
          monte sancto tuo?
        </Text>
        <Text className="vernacular">
          Senhor, quem habitará no vosso tabernáculo? * Ou quem descansará no
          vosso santo monte?
        </Text>
        <Text className="latin">
          Qui ingréditur sine mácula, * et operátur justítiam:
        </Text>
        <Text className="vernacular">
          O que vive sem mácula, * e pratica a justiça:
        </Text>
        <Text className="latin">
          Qui lóquitur veritátem in corde suo, * qui non egit dolum in lingua
          sua:
        </Text>
        <Text className="vernacular">
          O que fala verdade no seu coração, * o que não forjou dolos com sua
          língua:
        </Text>
        <Text className="latin">
          Nec fecit próximo suo malum, * et oppróbrium non accépit advérsus
          próximos suos.
        </Text>
        <Text className="vernacular">
          Nem mal fez ao seu próximo, * nem consentiu que seus próximos fossem
          desonrados.
        </Text>
        <Text className="latin">
          Ad níhilum dedúctus est in conspéctu ejus malígnus: * timéntes autem
          Dóminum gloríficat:
        </Text>
        <Text className="vernacular">
          Na sua apreciação considera o malvado como um nada, * mas honra os que
          temem o Senhor:
        </Text>
        <Text className="latin">
          Qui jurat próximo suo, et non décipit, * qui pecúniam suam non dedit
          ad usúram, et múnera super innocéntem non accépit.
        </Text>
        <Text className="vernacular">
          Faz juramento ao seu próximo e o não engana, * não empresta o seu
          dinheiro com usura, nem aceita subornos contra o inocente.
        </Text>
        <Text className="latin">
          Qui facit hæc: * non movébitur in ætérnum.
        </Text>
        <Text className="vernacular">
          Quem procede assim: * jamais será abalado.
        </Text>
      </Language>
    </PageWrapper>
  );
}
