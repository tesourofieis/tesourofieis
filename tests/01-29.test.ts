import { expect, test } from "vitest";
import { Calendar } from "../src/lib/calendar";
import { format_propers } from "../src/lib/utils";

test("2024-01-29", () => {
  const calendar = new Calendar(2024);

  const day = calendar.get("2024-01-29");

  const proper = day?.getProper(calendar);

  const formated = format_propers(proper);

  console.log(formated);

  expect(formated).toMatchObject([
    {
      info: {
        colors: ["w"],
        date: null,
        id: "sancti:01-29:3:w",
        rank: 3,
        tempora: null,
        title: "S. Francisco de Sales, Bispo, Confessor e Doutor da Igreja",
      },
      sections: [
        {
          body: {
            latin: [
              "S. Francisci Salesii Episcopi Confessoris Ecclesiæ Doctoris;;Duplex;;3;;vide C4a",
              "",
            ],
            vernacular: [
              "S. Francisci Salesii Episcopi Confessoris Ecclesiae Doctoris;;Duplex;;3;;vide C4a",
              "",
            ],
          },
          id: "Rank",
        },
        {
          body: {
            latin: ["Francisce", ""],
            vernacular: ["Francisce", ""],
          },
          id: "Name",
        },
        {
          body: {
            latin: ["vide C4a;", "Gloria", "CredoDA", ""],
            vernacular: ["vide C4a;", "Gloria", "CredoDA", ""],
          },
          id: "Rule",
        },
        {
          body: {
            latin: undefined,
            vernacular: [
              "## 29 I – S. Francisco de Sales, Bispo Confessor e Doutor",
              "3 classe",
              "Paramentos brancos",
              "",
            ],
          },
          id: "Comment",
        },
        {
          body: {
            latin: [
              "Eccli 15:5",
              "In médio Ecclésiæ apéruit os ejus: et implévit eum Dóminus spíritu sapiéntiæ et intelléctus: stolam glóriæ índuit eum. (Allelúja, allelúja.)",
              "Ps 91:2",
              "Bonum est confitéri Dómino: et psállere nómini tuo, Altíssime.",
              "Glória Patri…",
              "In médio Ecclésiæ apéruit os ejus: et implévit eum Dóminus spíritu sapiéntiæ et intelléctus: stolam glóriæ índuit eum. (Allelúja, allelúja.)",
              "",
            ],
            vernacular: [
              "Sb 15:5",
              "Abriu-lhe o Senhor a boca no meio da Igreja, encheu-o com o espírito da sabedoria e da inteligência e revestiu-o com a túnica da glória.",
              "Sl 91:2",
              "É bom louvar o Senhor: e cantar hinos em honra do vosso nome, ó Altíssimo!",
              "Glória ao Pai.",
              "Abriu-lhe o Senhor a boca no meio da Igreja, encheu-o com o espírito da sabedoria e da inteligência e revestiu-o com a túnica da glória.",
              "",
              "",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Deus, qui ad animárum salútem beátum Francíscum Confessórem tuum atque Pontíficem ómnibus ómnia factum esse voluísti: concéde propítius; ut caritátis tuæ dulcédine perfúsi, ejus dirigéntibus mónitis ac suffragántibus méritis, ætérna gáudia consequámur.",
              "Per Dominum…",
              "",
              "",
            ],
            vernacular: [
              "Ó Deus, que para a salvação das almas quisestes que o B. Francisco, vosso Confessor e Pontífice, se fizesse tudo para todos, concedei-nos benigno que, cheios da doçura do vosso amor, guiados pelos seus conselhos e protegidos pelos seus merecimentos, alcancemos as alegrias eternas.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum",
              "2 Tim 4:1-8",
              "Caríssime: Testíficor coram Deo, et Jesu Christo, qui judicatúrus est vivos et mórtuos, per advéntum ipsíus et regnum ejus: prǽdica verbum, insta opportúne, importune: árgue, óbsecra, íncrepa in omni patiéntia, et doctrína. Erit enim tempus, cum sanam doctrínam non sustinébunt, sed ad sua desidéria, coacervábunt sibi magistros, pruriéntes áuribus, et a veritáte quidem audítum avértent, ad fábulas autem converténtur. Tu vero vígila, in ómnibus labóra, opus fac Evangelístæ, ministérium tuum ímple. Sóbrius esto. Ego enim jam delíbor, et tempus resolutiónis meæ instat. Bonum certámen certávi, cursum consummávi, fidem servávi. In réliquo repósita est mihi coróna justítiæ, quam reddet mihi Dóminus in illa die, justus judex: non solum autem mihi, sed et iis, qui díligunt advéntum ejus.",
              "",
            ],
            vernacular: [
              "Lição da Ep.ª do B. Ap.º Paulo a Timóteo.",
              "2 Tm 4:1-8",
              "Caríssimo: Conjuro-te diante de Deus e de Jesus Cristo, que há-de julgar vivos e mortos na sua vinda e no seu reino, a que pregues a palavra; instes oportuna e inoportunamente; repreendas; supliques; e ameaces com toda a paciência e doutrina; pois virá tempo em que não suportarão a sã doutrina, mas, indo ao sabor dos seus desejos, procurarão para si muitos mestres, que lhes preguem o que os ouvidos gostam de escutar, e fechem os ouvidos à verdade, para os abrirem às fábulas. Tu, porém, vigia, trabalha em tudo, cumpre o ministério de evangelista e desempenha o teu ministério. Sê sóbrio. Pois quanto a mim sou como uma vítima já aspergida para o sacrifício. O tempo da minha morte já se aproxima. Pelejei o bom combate; acabei a vida; permaneci na fé. Não me falta mais do que esperar a coroa da justiça, que me está reservada, a qual o Senhor, como justo juiz, me dará no grande dia: e não somente a mim, mas também àqueles que amam a sua vinda.",
              "",
              "",
            ],
          },
          id: "Lectio",
        },
        {
          body: {
            latin: [
              "Allelúja, allelúja.",
              "Eccli 45:9",
              "Amávit eum Dóminus, et ornávit eum: stolam glóriæ índuit eum.",
              "Osee 14:6",
              "Justus germinábit sicut lílium: et florébit in ætérnum ante Dóminum. Allelúja.",
              "",
            ],
            vernacular: [
              "Aleluia, aleluia.",
              "Sb 45:9",
              "Amou-o o Senhor e revestiu-o com a túnica da glória. Aleluia.",
              "Oz 14:6",
              "O justo germinará, como o lírio, e florescerá para sempre diante do Senhor. Aleluia.",
              "",
            ],
          },
          id: "GradualeP",
        },
        {
          body: {
            latin: [
              "Ps 36:30-31",
              "Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.",
              "℣. Lex Dei ejus in corde ipsíus: et non supplantabúntur gressus ejus.",
              "Ps 111:1-3",
              "Beátus vir, qui timet Dóminum: in mandátis ejus cupit nimis.",
              "℣. Potens in terra erit semen ejus: generátio rectórum benedicétur.",
              "℣. Glória et divítiæ in domo ejus: et justítia ejus manet in sǽculum sǽculi.",
              "",
            ],
            vernacular: [
              "Sl 36:30-31",
              "A boca do justo falará com sabedoria e a sua língua proclamará a justiça.",
              "℣. A lei do seu Deus está sempre no seu coração e os seus pés não tropeçarão.",
              "Sl 111:1-3",
              "Bem-aventurado o varão que teme o Senhor e que emprega todo o zelo em obedecer-Lhe.",
              "℣. Sua descendência será poderosa na terra, pois a geração dos justos será abençoada.",
              "℣. Na sua casa haverá glória e riqueza: e a sua justiça subsistirá em todos os séculos dos séculos.",
              "",
              "",
            ],
          },
          id: "Tractus",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Matthǽum",
              "Matt 5:13-19",
              "In illo témpore: Dixit Jesus discípulis suis: Vos estis sal terræ. Quod si sal evanúerit, in quo saliétur? Ad níhilum valet ultra, nisi ut mittátur foras, et conculcétur ab homínibus. Vos estis lux mundi. Non potest cívitas abscóndi supra montem pósita. Neque accéndunt lucérnam, et ponunt eam sub módio, sed super candelábrum, ut lúceat ómnibus qui in domo sunt. Sic lúceat lux vestra coram homínibus, ut vídeant ópera vestra bona, et gloríficent Patrem vestrum, qui in cœlis est. Nolíte putáre, quóniam veni sólvere legem aut prophétas: non veni sólvere, sed adimplére. Amen, quippe dico vobis, donec tránseat cœlum et terra, jota unum aut unus apex non præteríbit a lege, donec ómnia fiant. Qui ergo sólverit unum de mandátis istis mínimis, et docúerit sic hómines, mínimus vocábitur in regno cœlórum: qui autem fécerit et docúerit, hic magnus vocábitur in regno cœlórum.",
              "",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. Mateus.",
              "Mt 5:13-19",
              "Naquele tempo, disse Jesus a seus discípulos: «Sois o sal da terra. Se o sal perde a força, com que salgará? Para nada mais presta, senão para se lançar fora e ser pisado pelos homens. Sois a luz do mundo. Uma cidade situada no cimo de um monte não pode ficar escondida. Nem se acende uma luz para a meter debaixo do alqueire, mas para a colocar no candeeiro, a fim de alumiar todos os que estão em casa. Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem vosso Pai, que está nos céus. Não penseis que vim abrogar a Lei ou os Profetas: não vim abrogar, mas aperfeiçoar; porque em verdade vos digo: até que passe o céu e a terra, nem um iota, nem um til se omitirá na Lei. Quem quer, pois, que transgrida, ainda um dos mais pequenos mandamentos, ou ensine os homens a violá-los, será chamado o menor no reino dos céus. Porém, quem os cumprir e ensinar será chamado grande no reino dos céus.",
              "",
              "",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "Ps 91:13",
              "Justus ut palma florébit: sicut cedrus, quæ in Líbano est, multiplicábitur. ~(Allelúja.)",
              "",
            ],
            vernacular: [
              "Sl 91:13",
              "O justo florescerá, como a palmeira, e crescerá, como o cedro do Líbano.",
              "",
              "",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Pro Doctore Pontifice",
              "Sancti N. Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Senhor, que a piedosa oração de Santo N. vosso Pontífice e Doutor, nos não abandone, e que por ela as nossas ofertas Vos sejam agradáveis e alcancemos benigna e continuamente a vossa misericórdia.",
              "Por nosso Senhor...",
              "",
              "",
            ],
          },
          id: "Secreta",
        },
        {
          body: {
            latin: [
              "Communis",
              "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum, Dóminum nostrum. Per quem majestátem tuam laudant Angeli, adórant Dominatiónes, tremunt Potestátes. Cæli cælorúmque Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus et nostras voces ut admítti jubeas, deprecámur, súpplici confessione dicéntes:",
              "",
            ],
            vernacular: [
              "Comum",
              "É verdadeiramente digno e justo, racional e salutar render-Vos graças em todos os lugares e sempre, ó Senhor santo, Pai omnipotente, eterno Deus, por nosso Senhor Jesus Cristo. Pelo qual os Anjos louvam a vossa majestade, as Dominações a adoram e as Potestades se prostram reverentes; e os Céus, as Virtudes dos céus e os bem-aventurados Serafins a celebram em comum alegria e louvor. Dignai-Vos permitir, Vos imploramos, que as nossas vozes suplicantes se unam às deles, dizendo:",
              "",
            ],
          },
          id: "Prefatio",
        },
        {
          body: {
            latin: [
              "Luc 12:42",
              "Fidélis servus et prudens, quem constítuit dóminus super famíliam suam: ut det illis in témpore trítici mensúram. (Allelúja.)",
              "",
            ],
            vernacular: [
              "Lc 12:42",
              "O servo fiel e prudente é destinado pelo Senhor para distribuir, oportunamente, na sua família a cada um a sua medida de trigo.",
              "",
              "",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Pro Doctore Pontifice",
              "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus N. Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Ó Senhor, dignai-Vos conceder-nos que o B. N., vosso Pontífice e ilustre Doutor, seja nosso intercessor perante Vós, a fim de que este sacrifício nos alcance a salvação.",
              "Por nosso Senhor...",
              "",
              "",
              "",
            ],
          },
          id: "Postcommunio",
        },
      ],
    },
  ]);
});
