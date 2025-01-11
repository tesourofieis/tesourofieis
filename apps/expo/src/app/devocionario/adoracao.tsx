"use dom";
import "../../global.css";

import React from "react";
import Adorote from "./../canticos/sacros/adorote";
import Aveverum from "./../canticos/sacros/aveverum";
import Eccepanisangelorum from "./../canticos/sacros/eccepanisangelorum";
import Parcedomine from "./../canticos/sacros/parcedomine";
import Salutaris from "./../canticos/sacros/salutaris";
import Tantumergo from "./../canticos/sacros/tantumergo";

export default function PageAdoracao() {
  return (
    <div className="docs">
      <h1>Adoração</h1>
      <h2>O Salutáris Hóstia</h2>
      <Salutaris />
      <h1>Acto de Adoração</h1>
      Meu Senhor e meu Deus, creio que estais verdadeiramente, realmente e
      substancialmente nessa Hóstia Consagrada, como estais no céu! Creio-o,
      Senhor, porque Vós o disseste! Humildemente prostrado no abysmo do meu
      nada e da minha miséria, profundamente Vos adoro e reconheço como meu
      Deus, Criador, Senhor, Redentor e Juiz. Não só Vos Adoro nessa Divina
      Hóstia, mas também em todos os Sacrários do mundo, principalmente onde
      sois menos adorado, manifestando-Vos o meu maior amor e reconhecimento
      pela vossa existência na Hóstia Consagrada. Tende misericórdia de mim,
      Senhor, e suportai-me na vossa presença! Senhor, pesa-me do íntimo do
      coração de Vos haver ofendido tantas vezes e tão vilmente! Arrependo-me
      sinceramente de Vos haver ultrajado! Quem me dera, Senhor, antes ter
      morrido, do que Vos haver ofendido! Mas... aqui me tendes a vossos pés,
      humilhado e contrito. Proponho, auxiliado com vossa graça, nunca, nunca
      mais pecar! Senhor, sois bom e misericordioso, perdoai-me! E agora,
      Senhor, vinde a mim. Já que não posso receber-Vos sacramentalmente, ao
      menos desejo receber-Vos espiritualmente. Vinde, Senhor, e Vos não
      afasteis nunca mais. Ah! Como é bom viver unido a Vós! Senhor, eu Vos amo;
      eu Vos adoro!
      <h1>Hinos em Honra do Santíssimo Sacramento</h1>
      <h2>Adoro Te Devote</h2>
      <Adorote />
      <h2>Ave Verum Corpus</h2>
      <Aveverum />
      <h2>Ecce Panis Angelorum</h2>
      <Eccepanisangelorum />
      <h2>Parce Domine</h2>
      <Parcedomine />
      <h2>Cor jesu sacratissimum</h2>
      <div className="side-by-side">
        <p>℣. Cor Jesu sacratissimum:</p>
        <p>℣. Coração sacratíssimo de Jesus:</p>
        <p>
          <span className="text-red-500">℟.</span> Miserere nobis.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Tende misericórdia de nós.
        </p>
      </div>
      <h1>Hino para antes da Bênção</h1>
      <h2>Tantum Ergo</h2>
      <Tantumergo />
      <div className="side-by-side">
        <p>℣. Panem de cælo præstitísti eis. (T. P. Aleluia)</p>
        <p>℣. Vós lhes destes, Senhor, o pão do céu. (T. P. Aleluia)</p>
        <p>
          <span className="text-red-500">℟.</span> Omne delectaméntum in se
          habéntem. (T. P. Aleluia)
        </p>
        <p>
          <span className="text-red-500">℟.</span> O qual encerra em si toda a
          doçura. (T. P. Aleluia)
        </p>
        <p>
          <span className="text-red-500 text-center">Orémus.</span>
        </p>
        <p>
          <span className="text-red-500 text-center">Oremos.</span>
        </p>
        <p>
          Deus, quid nobis sub Sacraménto mirábili passiónis tuæ memóriam
          reliquísti: tríbue, quǽsumus, ita nos Córporis et Sánguinis tui sacra
          mystéria venerári; ut redemptiónis tuæ fructum in nobis júgiter
          sentiámus: Qui vivis et régnas in sæcula sæculórum.
        </p>
        <p>
          Ó Deus, que neste admirável Sacramento nos deixastes um memorial da
          vossa paixão, concedei-nos a graça, Vos suplicamos, de honrarmos por
          tal modo os sagrados mystérios do vosso Corpo e Sangue que sintamos
          sempre os frutos da vossa Redenção: Vós, que viveis e reinais em todos
          os séculos dos séculos.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
      <h1>Louvores Dívinos</h1>
      <div className="side-by-side">
        <p>Benedíctus Deus. Benedíctum Nomen sanctum ejus.</p>
        <p>Bendito seja Deus. Bendito o seu Santo Nome.</p>
        <p>Benedíctus Jesus Christus, verus Deus et verus homo.</p>
        <p>Bendito Jesus Cristo, verdadeiro Deus e verdadeiro homem.</p>
        <p>Benedíctum Nomen Jesu.</p>
        <p>Bendito o nome de Jesus.</p>
        <p>Benedíctum Cor ejus sacratíssimum.</p>
        <p>Bendito o seu Sacratíssimo Coração.</p>
        <p>Benedíctus Sanguis ejus pretiosíssimus.</p>
        <p>Bendito o seu Preciosíssimo sangue.</p>
        <p>Benedíctus Jesus in sanctíssimo altáris Sacraménto.</p>
        <p>Bendito Jesus Cristo no Santíssimo Sacramento do altar.</p>
        <p>Benedíctus Spíritus Sanctus, Paráclitus.</p>
        <p>Bendito o Espírito Santo Paráclito.</p>
        <p>Benedícta magna Mater Dei, María sanctíssima.</p>
        <p>Bendita Excelsa Mãe de Deus, Maria Santíssima.</p>
        <p>Benedicta sancta ejus et immaculáta concéptio.</p>
        <p>Bendita a sua Santa e Imaculada Conceição.</p>
        <p>Benedícta ejus gloriósa assúmptio.</p>
        <p>Bendita a sua Gloriosa Assun-ção.</p>
        <p>Benedíctum nomen Maríæ, Vírginis e Matris.</p>
        <p>Bendito o nome de Maria, Virgem e Mãe.</p>
        <p>Benedíctus sanctus Joseph, ejus castíssimus Sponsus.</p>
        <p>Bendito São José, seu Castíssimo Esposo.</p>
        <p>Benedíctus Deus em Ángelis ejus, et in Sanctis suis.</p>
        <p>Bendito Deus nos seus Anjos e nos seus Santos.</p>
      </div>
      <h1>Hinos para depois da Bênção</h1>
      <h2>Cristus Vincit</h2>
      <div className="side-by-side">
        <p>Christus Vincit!</p>
        <p>Cristo Vence!</p>
        <p>Christus Regnat!</p>
        <p>Cristo Reina!</p>
        <p>Christus, Cristus Imperat!</p>
        <p>Cristo, Cristo Impera!</p>
      </div>
      <h2>Graças e Louvores</h2>
      <div className="side-by-side">
        <p>℣. Adoremus in aeternum sanctissimum Sacramentum.</p>
        <p>℣. Graças e louvores se dêem a todo o momento.</p>
      </div>
      <p>
        <em>Sl. 116</em> Que todas as nações louvem o Senhor; que todos os povos
        O aclamem. Porquanto grandiosa é para connosco a sua misericórdia, e a
        fidelidade do Senhor permanecerá eternamente.
      </p>
      Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no
      princípio, agora e sempre, e por todos os séculos dos séculos.
    </div>
  );
}
