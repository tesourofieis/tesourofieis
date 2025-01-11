"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0121() {
  return (
    <div className="docs">
      <h1>Santa Inês, Virgem e Márt., a 21 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Intróito</h3>

      <em>Sl. 118, 95-96</em>

      <div className="side-by-side">
        <p>
          Me exspectavérunt peccatores, ut pérderent me: testimónia tua, Dómine,
          intelléxi: omnis consummatiónis vidi finem: latum mandátum tuum nimis.{" "}
          <em>Ps. ibid., 1</em> Beáti immaculáti in via: qui ámbulant in lege
          Dómini. ℣. Gloria Patri...
        </p>
        <p>
          Esperaram-me os pecadores para me perder; mas, Senhor, tinha meditado
          nos vossos testemunhos. Encontrei limites em tudo quanto existe: só o
          vosso poder é infinito. <em>Sl. ibid., 1</em> Bem-aventurados os que
          são imaculados em seus caminhos e que cumprem a Lei do Senhor. ℣.
          Glória ao Pai...
        </p>
      </div>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Omnipotens sempitérne Deus, qui infírma mundi éligis, ut fórtia quæque
          confúndas: concéde propítius; ut, qui beátæ Agnétis Vírginis et
          Mártyris tuæ sollémnia cólimus, ejus apud te patrocínia sentiámus. Per
          Dóminum...
        </p>
        <p>
          Ó Deus omnipotente e eterno, que escolhestes os fracos para confundir
          os fortes, concedei-nos benigno que, celebrando a solenidade da B.
          Inês, vossa Virgem e Mártir, gozemos a sua protecção junto do vosso
          trono. Por nosso Senhor...
        </p>
      </div>

      <h3>Gradual</h3>

      <em>Sl. 44, 3</em>

      <div className="side-by-side">
        <p>
          Diffúsa est grátia in lábiis tuis: proptérea benedíxit te Deus in
          ætérnum. ℣. <em>ibid., 5</em> Propter veritátem et mansuetúdinem et
          justítiam: et dedúcet te mirabíliter déxtera tua.
        </p>
        <p>
          A graça espalhou-se nos vossos lábios; por isso Deus vos abençoou para
          a eternidade. ℣. <em>ibid., 5</em> Por amor da verdade, da mansidão e
          da justiça a vossa mão direita vos levará a praticar maravilhas.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Matth. 25, 4 & 6</em> Quinque prudéntes
          vírgines accepérunt óleum in vasis suis cum lampádibus: média autem
          nocte clamor factus est: Ecce, sponsus venit: exíte óbviam Christo
          Dómino. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Mt. 25, 4 & 6</em> As cinco virgens prudentes
          tomaram azeite em seus vasos para suas lâmpadas. À meia-noite ouviu-se
          um clamor dizer: «Eis que chega o esposo: ide ao encontro de Cristo
          Senhor». Aleluia.
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hóstias, Dómine, quas tibi offérimus, propítius súscipe: et,
          intercedénte beáta Agnéte Vírgine et Mártyre tua, víncula peccatórum
          nostrórum absólve. Per Dóminum nostrum...
        </p>
        <p>
          Recebei benigno, Senhor, as hóstias que Vos oferecemos; e, por
          intercessão da B. Inês, vossa Virgem e Mártir, dignai-Vos quebrar as
          cadeias dos nossos pecados. Por nosso Senhor...
        </p>
      </div>

      <h3>Comúnio</h3>

      <em>Mt. 25, 4 & 6</em>

      <div className="side-by-side">
        <p>
          Quinque prudéntes vírgines accepérunt óleum in vasis suis cum
          lampádibus: média autem nocte clamor factus est: Ecce, sponsus venit:
          exíte óbviam Christo Dómino.
        </p>
        <p>
          As cinco virgens prudentes tomaram azeite em seus vasos para suas
          lâmpadas. À meia-noite ouviu-se um clamor dizer: «Eis o esposo que
          chega: ide ao encontro de Cristo Senhor».
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Refécti cibo potúque cœlésti. Deus noster, te súpplices exorámus: ut,
          in cujus hæc commemoratióne percépimus, ejus muniámur et précibus. Per
          Dóminum...
        </p>
        <p>
          Confortados já com o alimento e a bebida celestiais, ó Deus, Vos
          suplicamos, fazei que aquela em cuja memória os recebemos nos proteja
          com suas preces. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
