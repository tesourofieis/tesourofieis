import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0912() {
  return (
    <PageWrapper>
      <H1 text="Santíssimo Nome de Maria, a 12 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Concéde, quǽsumus, omnípotens Deus: ut fidéles tui, qui sub
          sanctíssimæ Vírginis Maríæ Nómine et protectióne lætántur; ejus pia
          intercessióne a cunctis malis liberéntur in terris, et ad gáudia
          ætérna perveníre mereántur in cœlis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, Vos rogamos, concedei, por sua intercessão, aos
          vossos fiéis, que se alegram com o nome e a protecção da SS. Virgem
          Maria, a graça de serem livres de todos os males terrenos e de
          merecerem a posse das celestiais alegrias eternas. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Tua, Dómine, propitiatióne, et beátæ Maríæ semper Vírginis
          intercessióne, ad perpétuam atque præséntem hæc oblátio nobis
          profíciat prosperitátem et pacem. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Pela vossa misericórdia, Senhor, e pela intercessão da B. Maria,
          sempre Virgem, fazei que esta oblação nos assegure a prosperidade e a
          paz, agora e sempre. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sumptis, Dómine, salútis nostræ subsídiis: da, quǽsumus, beátæ Maríæ
          semper Vírginis patrocíniis nos úbique protegi; in cujus veneratióne
          hæc tuæ obtúlimus majestáti. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Havendo nós alcançado o poderoso auxílio da vossa salvação, Senhor,
          fazei, Vos imploramos, que sejamos protegidos com o patrocínio da B.
          Maria, sempre Virgem, em cuja honra oferecemos este sacrifício à vossa
          majestade. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
