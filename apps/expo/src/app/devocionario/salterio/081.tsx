import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page081() {
  return (
    <PageWrapper>
      <H1 text="Salmo 81" />

      <Language>
        <Typography className="latin">
          Deus stetit in synagóga deórum: * in médio autem deos dijúdicat.
        </Typography>
        <Typography className="vernacular">
          Deus está presente no conselho dos deuses: * no meio deles julga os
          mesmos deuses.
        </Typography>
        <Typography className="latin">
          Úsquequo judicátis iniquitátem: * et fácies peccatórum súmitis?
        </Typography>
        <Typography className="vernacular">
          Até quando julgareis injustamente: * e tereis em favor os pecadores?
        </Typography>
        <Typography className="latin">
          Judicáte egéno, et pupíllo: * húmilem, et páuperem justificáte.
        </Typography>
        <Typography className="vernacular">
          Fazei justiça ao necessitado e ao órfão: * atendei à razão do humilde
          e do pobre.
        </Typography>
        <Typography className="latin">
          Erípite páuperem: * et egénum de manu peccatóris liberáte.
        </Typography>
        <Typography className="vernacular">
          Resgatai o pobre: * e livrai o desvalido da mão do pecador.
        </Typography>
        <Typography className="latin">
          Nesciérunt, neque intellexérunt, in ténebris ámbulant: * movebúntur
          ómnia fundaménta terræ.
        </Typography>
        <Typography className="vernacular">
          Não souberam nem entenderam, andam nas trevas: * serão abalados todos
          os fundamentos da terra.
        </Typography>
        <Typography className="latin">
          Ego dixi: Dii estis, * et fílii Excélsi omnes.
        </Typography>
        <Typography className="vernacular">
          Eu disse: sois deuses, * e todos filhos do Excelso.
        </Typography>
        <Typography className="latin">
          Vos autem sicut hómines moriémini: * et sicut unus de princípibus
          cadétis.
        </Typography>
        <Typography className="vernacular">
          Contudo, vós como homens morrereis: * e caireis como um qualquer
          príncipe.
        </Typography>
        <Typography className="latin">
          Surge, Deus, júdica terram: * quóniam Tu hereditábis in ómnibus
          géntibus.
        </Typography>
        <Typography className="vernacular">
          Levantai-Vos, ó Deus, julgai a terra: * porque todos as gentes são
          vossa herança.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
