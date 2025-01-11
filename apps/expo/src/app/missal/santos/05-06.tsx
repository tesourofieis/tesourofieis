"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0506() {
  return (
    <div className="docs">
      <h1>S. João (diante da porta latina), a 6 de Maio</h1>

      <aside>
        Jesus prometera a Tiago e a João, filhos de Zebedeu, que beberiam o
        cálice de sua paixão a fim de poderem participar do triunfo da sua
        ressurreição. O Imperador Domiciano chamou João a Roma, condenando-o a
        ser mergulhado numa caldeira de azeite fervendo. S. João, por um milagre
        extraordinário, saiu ileso e ainda mais vigoroso. Construíram naquele
        lugar um santuário junto à Porta Latina, o qual foi consagrado ao Santo
        Apóstolo. Aí se faz a Estação do Sábado da Paixão.
      </aside>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui cónspicis, quia nos úndique mala nostra pertúrbant: præsta,
          quǽsumus; ut beáti Joánnis Apóstoli tui et Evangelístæ intercéssio
          gloriósa nos prótegat. Per Dominum...
        </p>
        <p>
          Ó Deus, que tão bem conheceis como estamos perturbados pelos males que
          nos cercam, concedei-nos, Vos suplicamos, que nos proteja a gloriosa
          intercessão do B. João, Vosso Apóstolo e Evangelista. Por nosso
          Senhor...
        </p>
      </div>

      <h3>Gradual</h3>

      <div className="side-by-side">
        <p>
          Allelúja, allelúja. ℣. <em>Ps 91:13</em> Justus ut palma florébit:
          sicut cedrus Líbani multiplicábitur. Allelúja
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Sl. 91:13</em> O justo florescerá, como a
          palmeira, e crescerá, como o cedro do Líbano. Aleluia.
        </p>
        <p>
          <em>Ps 14:6</em>
          ℣. Justus germinábit sicut lílium: et florébit in ætérnum ante
          Dóminum. Allelúja.
        </p>
        <p>
          <em>Sl. 14:6</em>
          ℣. O justo despontará, como o lírio, e florescerá eternamente na
          presença do Senhor. Aleluia.
        </p>
      </div>

      <h3>Evangelho</h3>

      <em>Mt. 20, 20-23</em>

      <div className="side-by-side">
        <p>
          <span className="cross text-red-500">✠</span> Sequéntia sancti
          Evangélii secúndum Matthǽum.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Continuação do santo
          Evangelho segundo S. Mateus.
        </p>
        <p>
          In llo témpore: Accessit ad Jesum mater filiórum Zebedǽi cum fíliis
          suis, adórans et petens áliquid ab eo. Qui dixit ei: Quid vis? Ait
          illi: Dic, ut sédeant hi duo fílii mei, unus ad déxteram tuam et unus
          ad sinístram in regno tuo. Respóndens autem Jesus, dixit: Néscitis,
          quid petátis. Potéstis bíbere cálicem, quem ego bibitúrus sum? Dicunt
          ei: Póssumus. Ait illis: Cálicem quidem meum bibétis: sédere autem ad
          déxteram meam vel sinístram, non est meum dare vobis, sed quibus
          parátum est a Patre meo.
        </p>
        <p>
          Naquele tempo, a mãe dos filhos de Zebedeu aproximou-se de Jesus com
          seus dois filhos, adorando-O e querendo pedir-Lhe alguma coisa. Jesus
          disse-lhe: «Que quereis?». Ela respondeu: «Ordenai que estes meus dois
          filhos se assentem, um à vossa direita e o outro à vossa esquerda, no
          vosso reino». Jesus respondeu-lhe: «Não sabeis o que pedis. Podeis
          beber o cálice que Eu devo beber?». Eles responderam: «Podemos». E
          Jesus disse-lhes: «Bebereis, com efeito, o meu cálice; porém não
          depende de mim conceder-vos um lugar à minha direita ou à minha
          esquerda, pois isso é para aqueles para quem meu Pai o preparou».
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Refécti, Dómine, pane cœlésti: ad vitam, quǽsumus, nutriámur ætérnam.
          Per Dominum...
        </p>
        <p>
          Havendo sido alimentados com o pão celestial, Vos rogamos, Senhor,
          fazei que com ele sejamos nutridos para a vida eterna. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
