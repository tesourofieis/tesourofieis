import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAdeste() {
  return (
    <PageWrapper>
      <H1 text="Adeste Fideles" />

      <Language>
        <Typography className="latin">
          Adeste, fideles, læti triumphantes,{"\n"}
          Venite, venite in Bethlehem.{"\n"}
          Natum videte{"\n"}
          Regem angelorum:{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Ó vinde, fiéis, alegres, triunfantes,{"\n"}
          Vinde, vinde a Belém,{"\n"}
          Vede o Rei dos anjos{"\n"}
          Que nasceu.{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
        <Typography className="latin">
          Deum de Deo, lumen de lumine{"\n"}
          Gestant puellæ viscera{"\n"}
          Deum verum, genitum non factum.{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Deus de Deus, Luz da Luz,{"\n"}
          Fruto do ventre da Virgem,{"\n"}
          Deus verdadeiro, gerado, não criado.{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
        <Typography className="latin">
          Cantet nunc io, chorus angelorum;{"\n"}
          Cantet nunc aula cælestium,{"\n"}
          Gloria, gloria in excelsis Deo,{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Cante agora o coro dos anjos,{"\n"}
          Cante agora a corte celestial,{"\n"}
          Glória, glória a Deus nas alturas,{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
        <Typography className="latin">
          En grege relicto, humiles ad cunas,{"\n"}
          Vocati pastores approperant;{"\n"}
          Et nos ovanti gradu festinemus.{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Deixando o rebanho, os pastores humildes,{"\n"}
          Chamados, apressam-se às pressas;{"\n"}E nós, com passo alegre, apressemo-nos.{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
        <Typography className="latin">
          Aeterni Parentis splendorem aeternum,{"\n"}
          Velatum sub carne videbimus;{"\n"}
          Deum infantem pannis involutum.{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Veremos o esplendor eterno do Pai eterno,{"\n"}
          Escondido sob a carne;{"\n"}
          Deus menino envolto em panos.{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
        <Typography className="latin">
          Ergo qui natus die hodierna,{"\n"}
          Jesu, tibi sit gloria,{"\n"}
          Patris aeterni Verbum caro factum.{"\n"}
          Venite adoremus (3×){"\n"}
          Dominum.
        </Typography>
        <Typography className="vernacular">
          Portanto, Tu que nasceste hoje,{"\n"}
          Jesus, a Ti seja a glória,{"\n"}
          Verbo do Pai eterno feito carne.{"\n"}
          Vinde, adoremos (3×){"\n"}O Senhor.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
