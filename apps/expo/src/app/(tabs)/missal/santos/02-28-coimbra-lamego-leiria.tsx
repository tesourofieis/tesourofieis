"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0228CoimbraLamegoLeiria() {
  return (
    <div className="docs">
      <h1>
        Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de
        Fevereiro
      </h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/santos/08-28">
          Missa na festa
        </Link>{" "}
        , excepto:
      </aside>

      <h2>Oração</h2>

      <div className="side-by-side">
        <p>
          Magníficet te, Dómine, sancti Confessóris tui atque Pontíficis
          Augustíni veneránda Tranlátio: qua illi honórem, et nobis opem,
          ineffábili providéntia contulísti. Per Dominum...
        </p>
        <p>
          Senhor, que a veneranda Trasladação de Santo Agostinho, Vosso
          Confessor e Pontífice, nos engrandeça, a qual, por Vossa inefável
          providência, deu a ele glória e a nós socorro. Por nosso Senhor...
        </p>
      </div>

      <h2>Secreta</h2>

      <div className="side-by-side">
        <p>
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
          intercessiónem beáti Augustíni Confessóris tui atque Pontíficis, ad
          perpétuam nobis fac proveníre salútem. Per Dóminum...
        </p>
        <p>
          Deus omnipotente e sempiterno, fazei que as dádivas oferecidas à Vossa
          majestade por intercessão do B. Agostinho, Vosso Confessor e
          Pontífice, nos façam chegar à salvação eterna. Por nosso Senhor...
        </p>
      </div>

      <h2>Postcomúnio</h2>

      <div className="side-by-side">
        <p>
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens
          Deus: ut beáti Augustíni Confessóris tui atque Pontíficis nos ubíque
          orátio ádjuvet; in cujus Translatióne hæc tuæ obtúlimus majestáti. Per
          Dóminum nostram...
        </p>
        <p>
          Depois de havermos recebido os sacramentos da nossa salvação,
          concedei-nos, omnipotente Deus, Vos imploramos, que em toda a parte
          nos socorra a oração do B. Agostinho, Vosso Confessor e Pontífice, em
          cuja Trasladação oferecemos estes dons à Vossa majestade. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
