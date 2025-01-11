"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1002() {
  return (
    <div className="docs">
      <h1>Santos Anjos da Guarda, a 2 de Outubro</h1>
      Missa da Festa da{" "}
      <Link className="link" href="/missal/santos/05-08">
        Aparição de Arcanjo Miguel
      </Link>{" "}
      , excepto:
      <h3>Oração</h3>
      <div className="side-by-side">
        <p>
          Deus, qui ineffábili providéntia sanctos Angelos tuos ad nostram
          custódiam míttere dignáris: largíre supplícibus tuis; et eórum semper
          protectióne deféndi, et ætérna societáte gaudére. Per Dóminum...
        </p>
        <p>
          Ó Deus, que por vossa inefável Providência Vos dignastes mandar os
          vossos Anjos para nos guardarem, concedei aos vossos suplicantes a
          graça de serem sempre defendidos pela sua protecção e de gozarem
          eternamente, a sua companhia. Por nosso Senhor...
        </p>
      </div>
      <h3>Epístola</h3>
      <em>Ex. 23, 20-23</em>
      <div className="side-by-side">
        <p>Léctio libri Exodi.</p>
        <p>Lição do Livro Êxodo.</p>
        <p>
          Hæc dicit Dóminus Deus: Ecce, ego mittam Angelum meum, qui præcédat
          te, et custódiat in via, et intróducat in locum, quem parávi. Obsérva
          eum, et audi vocem ejus, nec contemnéndum putes: quia non dimíttet,
          cum peccáveris, et est nomen meum in illo. Quod si audiéris vocem ejus
          et féceris ómnia, quæ loquor, inimícus ero inimícis tuis et affligam
          affligéntes te: præcedétque te Angelus meus.
        </p>
        <p>
          Isto diz o Senhor, nosso Deus: «Eis que enviarei o meu Anjo, a fim de
          que ele vá adiante de vós; vos guarde no caminho; e vos introduza no
          lugar que vos preparei. Respeitai-o, ouvi a sua voz e não deixeis de
          atendê-lo, porque vos não perdoará, quando pecardes. Ele vos falará em
          meu nome. Se escutardes a sua voz e se fizerdes o que vos ordenar,
          serei inimigo do vosso inimigo e afligirei aqueles que vos afligirem,
          pois o meu Anjo preceder-vos-á».
        </p>
      </div>
      <h3>Gradual</h3>
      <em>Sl. 90,11-12</em>
      <div className="side-by-side">
        <p>
          Angelis suis Deus mandávit de te, ut custódiant te in ómnibus viis
          tuis. ℣. In mánibus portábunt te, ne umquam offéndas ad lápidem pedem
          tuum.
        </p>
        <p>
          Deus mandou aos seus Anjos que te guardassem em todas as tuas vias. ℣.
          E eles te conduzirão em cima de suas mãos, para que o teu pé não
          tropece.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Ps. 102, 21</em> Benedícite Dómino, omnes
          virtútes ejus: minístri ejus, qui fácitis voluntátem ejus. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Sl. 102, 21</em> Bendizei todos o Senhor, ó
          exércitos do Senhor; pois estais ao seu serviço e desempenhais as suas
          ordens. Aleluia.
        </p>
      </div>
      <h3>Ofertório</h3>
      <em>Sl. 102, 20 & 21</em>
      <div className="side-by-side">
        <p>
          Benedícite Dóminum, omnes Angeli ejus: minístri ejus, qui fácitis
          verbum ejus, ad audiéndam vocem sermónum ejus.
        </p>
        <p>
          Bendizei o Senhor, ó vós, Anjos, heróis poderosos, executores das suas
          ordens e sempre fiéis aos seus chamamentos.
        </p>
      </div>
      <h3>Secreta</h3>
      <div className="side-by-side">
        <p>
          Súscipe, Dómine, múnera, quæ pro sanctórum Angelórum tuórum
          veneratióne deférimus: et concéde propítius; ut, perpétuis eórum
          præsídiis, a præséntibus perículis liberémur et ad vitam perveniámus
          ætérnam. Per Dóminum nostrum...
        </p>
        <p>
          Recebei, Senhor, as ofertas que Vos apresentamos em honra dos vossos
          Santos Anjos e concedei-nos propício que pela sua contínua protecção
          sejamos livres dos perigos da vida presente e alcancemos a vida
          eterna. Por nosso Senhor...
        </p>
      </div>
      <h3>Postcomúnio</h3>
      <div className="side-by-side">
        <p>
          Súmpsimus, Dómine, divína mystéria, sanctórum Angelórum tuórum
          festivitáte lætántes: quǽsumus; ut eórum protectióne ab hóstium
          júgiter liberémur insídiis, et contra ómnia advérsa muniámur. Per
          Dóminum...
        </p>
        <p>
          Havendo recebido os divinos mystérios enquanto celebramos com júbilo a
          festa dos vossos Santos Anjos, dignai-Vos permitir, Vos suplicamos,
          que pela sua protecção sejamos sempre livres das insídias dos nossos
          inimigos e de todas as adversidades. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
