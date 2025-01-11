"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0721() {
  return (
    <div className="docs">
      <h1>Santa Praxedes, Virgem, a 21 de Julho</h1>

      <aside>
        A festa de S. Pio I, a 11 de Julho lembrou-nos a memória de Santa
        Pudenciana e sua irmã Santa Praxedes, que puzeram sua casa à disposição
        do Santo Pontífice. A primeira aparece no Ciclo a 19 de Maio, sob o
        reino de Jesus resuscitado e a segunda, hoje, sob o do Espírito Santo.
        Na Terça-Feira da Terceira Semana da Quaresma, faz-se em Roma, a Estação
        em Santa Pudenciana, e, na Segunda-Feira Santa, em Santa Praxedes. A
        santa, filha do senador romano Pudencia, consagrou a Deus a sua
        virgindade (Ep.) e renunciou a toda a sua fortuna em proveito dos pobres
        e da Igreja, adquirindo, a esse preço, o tesouro e a pérola preciosa do
        reino celeste (Ev., Com.). As cerimónias do culto celebradas no seu
        palácio, chamaram a atenção dos pagãos que o invadiram, prendendo muitos
        cristãos que foram mortos. Santa Praxedes morreu sob Antonino, no II
        século, depois de haver pedido a Deus que a arrancasse ao espectáculo de
        tão grande desgraça. Seu corpo foi colocado próximo ao do pai e da irmã,
        no cemitério de sua avó Priscilla. Celebremos com alegria a festa da bem
        aventurada Virgem Santa Praxedes, a fim de haurirmos os sentimentos de
        terna devoção (Or.).
      </aside>

      <aside>
        Intróito, como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        . Evangelho e Ofertório como na [Missa Me
        exspectavérunt](/missal/comum/18virgensmartires2). Oração, Epístola,
        Secreta, Comúnio e Postcomúnio como na [Missa
        Loquébar](/missal/comum/21virgemnaomartir2). Gradual seguinte:
      </aside>

      <h3>Gradual</h3>

      <em>Sl. 44, 8</em>

      <div className="side-by-side">
        <p>
          Dilexísti justítiam, et odísti iniquitátem. ℣. Proptérea unxit te
          Deus, Deus tuus, óleo lætítiæ.
        </p>
        <p>
          Amastes a justiça e odiastes a iniquidade. ℣. Pelo que o Senhor, vosso
          Deus, vos ungiu com o óleo da alegria.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>ibid., 5</em> Spécie tua et pulchritúdine
          tua inténde, próspere procéde et regna. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>ibid., 5</em> Caminhai, pois, com beleza e
          com majestade; ide gozar a glória e reinai. Aleluia.
        </p>
      </div>
    </div>
  );
}
