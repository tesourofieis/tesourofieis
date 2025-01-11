"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0618() {
  return (
    <div className="docs">
      <h1>S. Efrém, Diácono, Conf. e Doutor, a 18 de Junho</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui Ecclésiam tuam beáti Ephræm Confessóris tui et Doctoris mira
          eruditióne et præcláris vitæ méritis illustráre voluísti: te súpplices
          exorámus; ut, ipso intercedénte, eam advérsus erróris et pravitátis
          insídias perénni tua virtúte deféndas. Per Dóminum...
        </p>
        <p>
          Ó Deus, que quisestes ilustrar a vossa Igreja com a brilhante erudição
          e com os méritos da preclara vida do B. Efrém, vosso Confessor e
          Doutor, humildemente Vos suplicamos que pela sua intercessão a
          defendais com vosso perpétuo poder das insídias do erro e da
          perversidade. Por nosso Senhor...
        </p>
      </div>

      <h3>Oração Comemoração S. S. Marcos e Marceliano</h3>

      <div className="side-by-side">
        <p>
          Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum tuórum
          Marci et Marcelliáni natalítia cólimus; a cunctis malis imminéntibus
          eórum intercessiónibus liberémur. Per Dóminum nostrum...
        </p>
        <p>
          Ó Deus Omnipotente, celebrando nós o nascimento dos vossos Santos
          Mártires Marcos e Marceliano, permiti, Vos suplicamos, que por sua
          intercessão sejamos livres de todos os males que nos ameaçam. Por
          nosso Senhor...
        </p>
      </div>

      <h3>Secreta Comemoração S. S. Mártires</h3>

      <div className="side-by-side">
        <p>
          Múnera tibi, Dómine, dicáta sanctífica: et, intercedéntibus sanctis
          Martýribus tuis Marco et Marcelliáno, per eadem nos placátus inténde.
          Per Dóminum...
        </p>
        <p>
          Santificai, Senhor, estes dons que Vos são oferecidos, a fim de que
          pela intercessão dos vossos Santos Mártires Marcos e Marceliano Vos
          digneis aplacar-Vos e olhardes aplacado para nós. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio Comemoração S. S. Mártires</h3>

      <div className="side-by-side">
        <p>
          Salutáris tui, Dómine, múnere satiáti, súpplices exorámus: ut, cujus
          lætámur gustu, intercedéntibus sanctis Martýribus tuis Marco et
          Marcelliáno, renovémur efféctu. Per Dóminum...
        </p>
        <p>
          Saciados com este dom salutar, humildemente Vos suplicamos que,
          havendo recebido com alegria este sacramento, sejamos, por intercessão
          dos vossos Santos Mártires Marcos e Marceliano, restaurados pelo seu
          eficaz efeito. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
