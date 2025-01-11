"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0804() {
  return (
    <div className="docs">
      <h1>S. Domingos de Gusmão, Conf., a 4 de Agosto</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui Ecclésiam tuam beáti Dominici Confessóris tui illumináre
          dignátus es méritis et doctrinis: concéde; ut ejus intercessióne
          temporalibus non destituatur auxiliis, et spiritualibus semper
          profíciat increméntis. Per Dóminum nostrum...
        </p>
        <p>
          Ó Deus, que Vos dignastes iluminar a vossa Igreja com os méritos e as
          lições do B. Domingos, vosso Confessor, concedei-nos pela sua
          intercessão que ela não seja privada dos auxílios temporais e que
          sempre tomem incremento os seus bens espirituais. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/13doutores#epístola"
        title="Doutores - Missa In médio Ecclésiae"
      />

      <h3>Gradual</h3>

      <em>Sl. 91, 13 & 14</em>

      <div className="side-by-side">
        <p>
          Justus ut palma florébit: sicut cedrus Líbani multiplicábitur in domo
          Dómini. ℣. <em>ibid., 3</em> Ad annuntiándum mane misericórdiam tuam,
          et veritátem tuam per noctem.
        </p>
        <p>
          O justo florescerá, como a palmeira, e multiplicar-se-á, como o cedro
          do Líbano, na casa do Senhor. ℣. <em>ibid., 3</em> Para anunciar de
          manhã a vossa misericórdia e durante a noite a vossa verdade.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Osee 14, 6</em> Justus germinábit sicut
          lílium: et florébit in ætérnum ante Dóminum. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Os. 14, 6</em> O justo germinará, como o
          lírio, e florescerá perpetuamente na presença do Senhor. Aleluia.
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Múnera tibi, Dómine, dicáta sanctífica: ut, méritis beáti Domínici
          Confessóris tui, nobis profíciant ad medélam. Per Dóminum...
        </p>
        <p>
          Santificai, Senhor, os dons que Vos são apresentados, a fim de que,
          pelos méritos do B. Domingos, vosso Confessor, sirvam de remédio, às
          nossas almas. Por nosso Senhor...
        </p>
      </div>

      <h3>Comúnio</h3>

      <em>Lc. 12, 42</em>

      <div className="side-by-side">
        <p>
          Fidélis servus et prudens, quem constítuit dóminus super famíliam
          suam: ut det illis in témpore trítici mensúram.
        </p>
        <p>
          O servo fiel e prudente é destinado pelo Senhor para distribuir
          oportunamente a cada um na sua família a sua medida de trigo.
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Concéde, quǽsumus, omnípotens Deus: ut, qui peccatórum nostrórum
          póndere prémimur, beáti Domínici Confessóris tui patrocínio
          sublevémur. Per Dóminum...
        </p>
        <p>
          Concedei-nos, Deus omnipotente. Vos rogamos, que, estando oprimidos
          sob o peso dos nossos pecados, sejamos livres deles, pelo patrocínio
          do B. Domingos, vosso Confessor. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
