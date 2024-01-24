import { describe, expect, test } from "vitest";
import { Calendar } from "./calendar";
import { format_propers } from "./utils";

describe("day", () => {
  test("2024-01-22", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-01-22");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    expect(formated).toMatchObject({
      info: {
        additional_info: ["Paramentos vermelhos"],
        colors: ["r"],
        date: "2024-01-22",
        description: "",
        id: "sancti:01-22:3:r",
        rank: 3,
        tempora: "Segunda-feira da 3ª semana após a Epifania",
        title: "S.S. Vicente e Anastácio, Mártires",
      },
      sections: [
        {
          body: {
            latin: [
              "!Ps 78:11-12; 78:10",
              "Intret in consp\u00e9ctu tuo, D\u00f3mine, g\u00e9mitus compedit\u00f3rum: redde vic\u00ednis nostris s\u00e9ptuplum in sinu e\u00f3rum: v\u00edndica s\u00e1nguinem Sanct\u00f3rum tu\u00f3rum, qui eff\u00fasus est.\n*Ps 78:1*\nDeus, ven\u00e9runt gentes in heredit\u00e1tem tuam: pollu\u00e9runt templum sanctum tuum: posu\u00e9runt Jer\u00fasalem in pom\u00f3rum cust\u00f3diam.\nGl\u00f3ria Patri\u2026\nIntret in consp\u00e9ctu tuo, D\u00f3mine, g\u00e9mitus compedit\u00f3rum: redde vic\u00ednis nostris s\u00e9ptuplum in sinu e\u00f3rum: v\u00edndica s\u00e1nguinem Sanct\u00f3rum tu\u00f3rum, qui eff\u00fasus est.",
            ],
            vernacular: [
              "*Sl 78:11-12; 78:10*",
              "Que os gemidos dos cativos cheguem \u00e0 vossa presen\u00e7a, Senhor. Castigai os nossos inimigos sete vezes por cada inj\u00faria que nos t\u00eam feito: vingai o sangue que os vossos Santos derramaram.\n*Sl 78:1*\n\u00d3 Deus, os povos invadiram a vossa heran\u00e7a, profanaram o vosso sagrado templo e reduziram Jerusal\u00e9m a um monte de ru\u00ednas!\nGl\u00f3ria ao Pai.\nQue os gemidos dos cativos cheguem \u00e0 vossa presen\u00e7a, Senhor. Castigai os nossos inimigos sete vezes por cada inj\u00faria que nos t\u00eam feito: vingai o sangue que os vossos Santos derramaram.",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Ad\u00e9sto, D\u00f3mine, supplicati\u00f3nibus nostris: ut, qui ex iniquit\u00e1te nostra reos nos esse cogn\u00f3scimus, beat\u00f3rum M\u00e1rtyrum tu\u00f3rum Vinc\u00e9ntii et Anast\u00e1sii intercessi\u00f3ne liber\u00e9mur.\nPer Dominum\u2026",
            ],
            vernacular: [
              "Senhor, dignai-Vos ouvir as nossas s\u00faplicas, a fim de que, reconhecendo-nos r\u00e9us diante de V\u00f3s pelas nossas iniquidades, sejamos livres delas por intercess\u00e3o dos vossos B. B. M\u00e1rtires Vicente e Anast\u00e1cio.\nPor nosso Senhor...",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "L\u00e9ctio libri Sapi\u00e9nti\u00e6",
              "*Sap 3:1-8*",
              "Justorum \u00e1nim\u00e6 in manu Dei sunt, et non tanget illos torm\u00e9ntum mortis. Visi sunt oculis insipi\u00e9ntium mori: et \u00e6stim\u00e1la est affl\u00edctio exitus ill\u00f3rum: et quod a nobis est iter, exterm\u00ednium: illi autem sunt in pace. Et si coram hom\u00ednibus torm\u00e9nta passi sunt, spes ill\u00f3rum immortalit\u00e1te plena est. In paucis vex\u00e1ti, in multis bene dispon\u00e9ntur: qu\u00f3niam Deus tent\u00e1vit eos, et invenit illos dignos se. Tamquam aurum in forn\u00e1ce prob\u00e1vit illos, et quasi holoc\u00e1usti h\u00f3stiam acc\u00e9pit illos, et in t\u00e9mpore erit resp\u00e9ctus illorum. Fulg\u00e9bunt justi, et tamquam scint\u00edll\u00e6 in arundin\u00e9to disc\u00farrent. Judic\u00e1bunt nati\u00f3nes, et dominab\u00fantur p\u00f3pulis, et regn\u00e1bit D\u00f3minus ill\u00f3rum in perp\u00e9tuum.",
            ],
            vernacular: [
              "Li\u00e7\u00e3o do Livro da Sabedoria.",
              "*Sb 3:1-8*",
              "As almas dos justos est\u00e3o nas m\u00e3os de Deus; por isso o tormento da morte os n\u00e3o tocar\u00e1. Pareciam mortos aos olhos dos insensatos: a sua sa\u00edda do mundo parecia uma afli\u00e7\u00e3o; a sua separa\u00e7\u00e3o de n\u00f3s uma calamidade; mas, agora, est\u00e3o em paz; e, ainda que tenham sofrido diante dos homens, a sua esperan\u00e7a est\u00e1 toda na imortalidade. Depois de haverem sofrido uma pena ligeira, receberam uma grande recompensa, pois Deus provou-os e achou-os dignos de si. Provou-os, como ao ouro, na fornalha; recebeu-os, como uma h\u00f3stia de holocausto; e para eles olhar\u00e1 benigno, quando vier o seu tempo. Os justos brilhar\u00e3o e resplandecer\u00e3o, como as chamas, que se ateiam entre os canaviais. Eles julgar\u00e3o as na\u00e7\u00f5es e dominar\u00e3o os povos; e o Senhor reinar\u00e1 com eles para sempre.",
            ],
          },
          id: "Lectio",
        },
        {
          body: {
            latin: [
              "*Exod 15:11*",
              "Glori\u00f3sus Deus in Sanctis suis: mir\u00e1bilis in majest\u00e1te, f\u00e1ciens prod\u00edgia.\n*Exod 15:6*\nV. D\u00e9xtera tua, D\u00f3mine, glorific\u00e1ta est in virt\u00fate: d\u00e9xtera manus tua confr\u00e9git inim\u00edcos. Allel\u00faja, allel\u00faja.\n*Eccl 44:14*\nC\u00f3rpora Sanct\u00f3rum in pace sep\u00falta sunt, et n\u00f3mina e\u00f3rum vivent in generati\u00f3nem et generati\u00f3nem. Allel\u00faja.",
            ],
            vernacular: [
              "*Ex 15:11*",
              "Deus \u00e9 glorioso em seus Santos: e admir\u00e1vel na sua majestade, praticando prod\u00edgios.\n*Ex 15:6*\nV. Senhor, a vossa dextra engrandeceu-se pela sua for\u00e7a: a vossa dextra esmagou os inimigos. Aleluia, aleluia.\n*Sb 44:14*\nSenhor, os corpos dos vossos Santos foram sepultados em paz e o seu nome subsistir\u00e1 de gera\u00e7\u00e3o em gera\u00e7\u00e3o. Aleluia.",
            ],
          },
          id: "Graduale",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Lucam.",
              "!Luc 21:9-19",
              "In illo témpore: Dixit Jesus discípulis suis: Cum audieritis proelia et seditiónes, nolíte terréri: opórtet primum hæc fíeri, sed nondum statim finis. Tunc dicébat illis: Surget gens contra gentem, et regnum advérsus regnum. Et terræmótus magni erunt per loca, et pestiléntiæ, et fames, terrorésque de coelo, et signa magna erunt. Sed ante hæc ómnia injícient vobis manus suas, et persequéntur tradéntes in synagógas et custódias, trahéntes ad reges et praesides propter nomen meum: contínget autem vobis in testimónium. Pónite ergo in córdibus vestris non præmeditári, quemádmodum respondeátis. Ego enim dabo vobis os et sapiéntiam, cui non potérunt resístere et contradícere omnes adversárii vestri. Tradémini autem a paréntibus, et frátribus, et cognátis, et amícis, et morte affícient ex vobis: et éritis ódio ómnibus propter nomen meum: et capíllus de cápite vestro non períbit. In patiéntia vestra possidébitis ánimas vestras.",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. Lucas.",
              "!Lc 21:9-19",
              "Naquele tempo, disse Jesus aos discípulos: «Quando ouvirdes falar em guerras e sedições, não vos assusteis; pois é necessário que estas cousas aconteçam, primeiramente; mas isto não será logo o fim». «Então, dizia-lhes Ele, levantar-se-á povo contra povo e reino contra reino; em diversos lugares haverá tremores de terra, peste, fome e também aparecerão cousas espantosas, grandes sinais no céu e outros prodígios. Mas, antes que tudo isto aconteça, lançar-vos-ão as mãos e perseguir-vos-ão, entregando-vos às sinagogas, lançando-vos nas prisões e conduzindo-vos à força diante dos reis e dos governadores, por causa do meu nome. Isto acontecerá para que deis testemunho da verdade. Gravai, pois, no vosso coração este pensamento: não premediteis de que modo haveis de responder, porque vos darei palavras e sabedoria, a que os vossos inimigos não poderão resistir, nem responder. Sereis entregues pelos vossos próprios pais, irmãos, parentes e amigos, que darão a morte a alguns de vós. Sereis aborrecidos de todos, por causa do meu nome; todavia, não se perderá nem um só cabelo das vossas cabeças. Com a vossa paciência possuireis as vossas almas».",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "!Ps 67:36",
              "Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem et fortitúdinem plebi suæ: benedíctus Deus, allelúja.",
              "(sed post Septuagesimam dicitur)",
              "Deus.",
            ],
            vernacular: [
              "!Sl 67:36",
              "Deus é admirável em seus Santos. Deus de Israel dará ao seu povo a força e a coragem. Bendito Ele seja, pois. Aleluia.",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre Justórum, et nobis salutária, te miseránte, reddántur.",
              "Per Dominum…",
            ],
            vernacular: [
              "Senhor, Vos oferecemos estes dons da nossa devoção; e que em consideração dos vossos Santos eles Vos sejam agradáveis, e pela vossa misericórdia nos sejam salutares.",
              "Por nosso Senhor...",
            ],
          },
          id: "Secreta",
        },
        {
          body: {
            latin: [
              "!Communis",
              "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum, Dóminum nostrum. Per quem majestátem tuam laudant Angeli, adórant Dominatiónes, tremunt Potestátes. Cæli cælorúmque Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus et nostras voces ut admítti jubeas, deprecámur, súpplici confessione dicéntes:",
            ],
            vernacular: [
              "! Comum",
              "É verdadeiramente digno e justo, racional e salutar render-Vos graças em todos os lugares e sempre, ó Senhor santo, Pai omnipotente, eterno Deus, por nosso Senhor Jesus Cristo. Pelo qual os Anjos louvam a vossa majestade, as Dominações a adoram e as Potestades se prostram reverentes; e os Céus, as Virtudes dos céus e os bem-aventurados Serafins a celebram em comum alegria e louvor. Dignai-Vos permitir, Vos imploramos, que as nossas vozes suplicantes se unam às deles, dizendo:",
            ],
          },
          id: "Prefatio",
        },
        {
          body: {
            latin: [
              "!Sap 3:4-6",
              "Et si coram homínibus torménta passi sunt, Deus tentávit eos: tamquam aurum in fornáce probávit eos, et quasi holocáusta accépit eos.",
            ],
            vernacular: [
              "!Sb 3:4-6",
              "Se sofreram tormentos diante dos homens, foi para Deus os provar. Deus provou-os na fornalha, como ao ouro, e recebeu-os, como hóstia de holocausto.",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per hæc contra ómnia advérsa muniámur.",
              "Per Dominum…",
            ],
            vernacular: [
              "Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os alimentos celestiais, sejamos fortalecidos contra todas as adversidades por intercessão dos vossos B. B. Mártires Vicente e Anastácio.",
              "Por nosso Senhor...",
            ],
          },
          id: "Postcommunio",
        },
      ],
    });
  });

  test("2024-01-22", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-01-22");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    expect(formated).toMatchObject({
      info: {
        additional_info: ["Paramentos vermelhos"],
        colors: ["r"],
        date: "2024-01-22",
        description: "",
        id: "sancti:01-22:3:r",
        rank: 3,
        tempora: "Segunda-feira da 3ª semana após a Epifania",
        title: "S.S. Vicente e Anastácio, Mártires",
      },
      sections: [
        {
          body: {
            latin: [
              "!Ps 78:11-12; 78:10",
              "Intret in consp\u00e9ctu tuo, D\u00f3mine, g\u00e9mitus compedit\u00f3rum: redde vic\u00ednis nostris s\u00e9ptuplum in sinu e\u00f3rum: v\u00edndica s\u00e1nguinem Sanct\u00f3rum tu\u00f3rum, qui eff\u00fasus est.\n*Ps 78:1*\nDeus, ven\u00e9runt gentes in heredit\u00e1tem tuam: pollu\u00e9runt templum sanctum tuum: posu\u00e9runt Jer\u00fasalem in pom\u00f3rum cust\u00f3diam.\nGl\u00f3ria Patri\u2026\nIntret in consp\u00e9ctu tuo, D\u00f3mine, g\u00e9mitus compedit\u00f3rum: redde vic\u00ednis nostris s\u00e9ptuplum in sinu e\u00f3rum: v\u00edndica s\u00e1nguinem Sanct\u00f3rum tu\u00f3rum, qui eff\u00fasus est.",
            ],
            vernacular: [
              "*Sl 78:11-12; 78:10*",
              "Que os gemidos dos cativos cheguem \u00e0 vossa presen\u00e7a, Senhor. Castigai os nossos inimigos sete vezes por cada inj\u00faria que nos t\u00eam feito: vingai o sangue que os vossos Santos derramaram.\n*Sl 78:1*\n\u00d3 Deus, os povos invadiram a vossa heran\u00e7a, profanaram o vosso sagrado templo e reduziram Jerusal\u00e9m a um monte de ru\u00ednas!\nGl\u00f3ria ao Pai.\nQue os gemidos dos cativos cheguem \u00e0 vossa presen\u00e7a, Senhor. Castigai os nossos inimigos sete vezes por cada inj\u00faria que nos t\u00eam feito: vingai o sangue que os vossos Santos derramaram.",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Ad\u00e9sto, D\u00f3mine, supplicati\u00f3nibus nostris: ut, qui ex iniquit\u00e1te nostra reos nos esse cogn\u00f3scimus, beat\u00f3rum M\u00e1rtyrum tu\u00f3rum Vinc\u00e9ntii et Anast\u00e1sii intercessi\u00f3ne liber\u00e9mur.\nPer Dominum\u2026",
            ],
            vernacular: [
              "Senhor, dignai-Vos ouvir as nossas s\u00faplicas, a fim de que, reconhecendo-nos r\u00e9us diante de V\u00f3s pelas nossas iniquidades, sejamos livres delas por intercess\u00e3o dos vossos B. B. M\u00e1rtires Vicente e Anast\u00e1cio.\nPor nosso Senhor...",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "L\u00e9ctio libri Sapi\u00e9nti\u00e6",
              "*Sap 3:1-8*",
              "Justorum \u00e1nim\u00e6 in manu Dei sunt, et non tanget illos torm\u00e9ntum mortis. Visi sunt oculis insipi\u00e9ntium mori: et \u00e6stim\u00e1la est affl\u00edctio exitus ill\u00f3rum: et quod a nobis est iter, exterm\u00ednium: illi autem sunt in pace. Et si coram hom\u00ednibus torm\u00e9nta passi sunt, spes ill\u00f3rum immortalit\u00e1te plena est. In paucis vex\u00e1ti, in multis bene dispon\u00e9ntur: qu\u00f3niam Deus tent\u00e1vit eos, et invenit illos dignos se. Tamquam aurum in forn\u00e1ce prob\u00e1vit illos, et quasi holoc\u00e1usti h\u00f3stiam acc\u00e9pit illos, et in t\u00e9mpore erit resp\u00e9ctus illorum. Fulg\u00e9bunt justi, et tamquam scint\u00edll\u00e6 in arundin\u00e9to disc\u00farrent. Judic\u00e1bunt nati\u00f3nes, et dominab\u00fantur p\u00f3pulis, et regn\u00e1bit D\u00f3minus ill\u00f3rum in perp\u00e9tuum.",
            ],
            vernacular: [
              "Li\u00e7\u00e3o do Livro da Sabedoria.",
              "*Sb 3:1-8*",
              "As almas dos justos est\u00e3o nas m\u00e3os de Deus; por isso o tormento da morte os n\u00e3o tocar\u00e1. Pareciam mortos aos olhos dos insensatos: a sua sa\u00edda do mundo parecia uma afli\u00e7\u00e3o; a sua separa\u00e7\u00e3o de n\u00f3s uma calamidade; mas, agora, est\u00e3o em paz; e, ainda que tenham sofrido diante dos homens, a sua esperan\u00e7a est\u00e1 toda na imortalidade. Depois de haverem sofrido uma pena ligeira, receberam uma grande recompensa, pois Deus provou-os e achou-os dignos de si. Provou-os, como ao ouro, na fornalha; recebeu-os, como uma h\u00f3stia de holocausto; e para eles olhar\u00e1 benigno, quando vier o seu tempo. Os justos brilhar\u00e3o e resplandecer\u00e3o, como as chamas, que se ateiam entre os canaviais. Eles julgar\u00e3o as na\u00e7\u00f5es e dominar\u00e3o os povos; e o Senhor reinar\u00e1 com eles para sempre.",
            ],
          },
          id: "Lectio",
        },
        {
          body: {
            latin: [
              "*Exod 15:11*",
              "Glori\u00f3sus Deus in Sanctis suis: mir\u00e1bilis in majest\u00e1te, f\u00e1ciens prod\u00edgia.\n*Exod 15:6*\nV. D\u00e9xtera tua, D\u00f3mine, glorific\u00e1ta est in virt\u00fate: d\u00e9xtera manus tua confr\u00e9git inim\u00edcos. Allel\u00faja, allel\u00faja.\n*Eccl 44:14*\nC\u00f3rpora Sanct\u00f3rum in pace sep\u00falta sunt, et n\u00f3mina e\u00f3rum vivent in generati\u00f3nem et generati\u00f3nem. Allel\u00faja.",
            ],
            vernacular: [
              "*Ex 15:11*",
              "Deus \u00e9 glorioso em seus Santos: e admir\u00e1vel na sua majestade, praticando prod\u00edgios.\n*Ex 15:6*\nV. Senhor, a vossa dextra engrandeceu-se pela sua for\u00e7a: a vossa dextra esmagou os inimigos. Aleluia, aleluia.\n*Sb 44:14*\nSenhor, os corpos dos vossos Santos foram sepultados em paz e o seu nome subsistir\u00e1 de gera\u00e7\u00e3o em gera\u00e7\u00e3o. Aleluia.",
            ],
          },
          id: "Graduale",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Lucam.",
              "!Luc 21:9-19",
              "In illo témpore: Dixit Jesus discípulis suis: Cum audieritis proelia et seditiónes, nolíte terréri: opórtet primum hæc fíeri, sed nondum statim finis. Tunc dicébat illis: Surget gens contra gentem, et regnum advérsus regnum. Et terræmótus magni erunt per loca, et pestiléntiæ, et fames, terrorésque de coelo, et signa magna erunt. Sed ante hæc ómnia injícient vobis manus suas, et persequéntur tradéntes in synagógas et custódias, trahéntes ad reges et praesides propter nomen meum: contínget autem vobis in testimónium. Pónite ergo in córdibus vestris non præmeditári, quemádmodum respondeátis. Ego enim dabo vobis os et sapiéntiam, cui non potérunt resístere et contradícere omnes adversárii vestri. Tradémini autem a paréntibus, et frátribus, et cognátis, et amícis, et morte affícient ex vobis: et éritis ódio ómnibus propter nomen meum: et capíllus de cápite vestro non períbit. In patiéntia vestra possidébitis ánimas vestras.",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. Lucas.",
              "!Lc 21:9-19",
              "Naquele tempo, disse Jesus aos discípulos: «Quando ouvirdes falar em guerras e sedições, não vos assusteis; pois é necessário que estas cousas aconteçam, primeiramente; mas isto não será logo o fim». «Então, dizia-lhes Ele, levantar-se-á povo contra povo e reino contra reino; em diversos lugares haverá tremores de terra, peste, fome e também aparecerão cousas espantosas, grandes sinais no céu e outros prodígios. Mas, antes que tudo isto aconteça, lançar-vos-ão as mãos e perseguir-vos-ão, entregando-vos às sinagogas, lançando-vos nas prisões e conduzindo-vos à força diante dos reis e dos governadores, por causa do meu nome. Isto acontecerá para que deis testemunho da verdade. Gravai, pois, no vosso coração este pensamento: não premediteis de que modo haveis de responder, porque vos darei palavras e sabedoria, a que os vossos inimigos não poderão resistir, nem responder. Sereis entregues pelos vossos próprios pais, irmãos, parentes e amigos, que darão a morte a alguns de vós. Sereis aborrecidos de todos, por causa do meu nome; todavia, não se perderá nem um só cabelo das vossas cabeças. Com a vossa paciência possuireis as vossas almas».",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "!Ps 67:36",
              "Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem et fortitúdinem plebi suæ: benedíctus Deus, allelúja.",
              "(sed post Septuagesimam dicitur)",
              "Deus.",
            ],
            vernacular: [
              "!Sl 67:36",
              "Deus é admirável em seus Santos. Deus de Israel dará ao seu povo a força e a coragem. Bendito Ele seja, pois. Aleluia.",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre Justórum, et nobis salutária, te miseránte, reddántur.",
              "Per Dominum…",
            ],
            vernacular: [
              "Senhor, Vos oferecemos estes dons da nossa devoção; e que em consideração dos vossos Santos eles Vos sejam agradáveis, e pela vossa misericórdia nos sejam salutares.",
              "Por nosso Senhor...",
            ],
          },
          id: "Secreta",
        },
        {
          body: {
            latin: [
              "!Communis",
              "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum, Dóminum nostrum. Per quem majestátem tuam laudant Angeli, adórant Dominatiónes, tremunt Potestátes. Cæli cælorúmque Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus et nostras voces ut admítti jubeas, deprecámur, súpplici confessione dicéntes:",
            ],
            vernacular: [
              "! Comum",
              "É verdadeiramente digno e justo, racional e salutar render-Vos graças em todos os lugares e sempre, ó Senhor santo, Pai omnipotente, eterno Deus, por nosso Senhor Jesus Cristo. Pelo qual os Anjos louvam a vossa majestade, as Dominações a adoram e as Potestades se prostram reverentes; e os Céus, as Virtudes dos céus e os bem-aventurados Serafins a celebram em comum alegria e louvor. Dignai-Vos permitir, Vos imploramos, que as nossas vozes suplicantes se unam às deles, dizendo:",
            ],
          },
          id: "Prefatio",
        },
        {
          body: {
            latin: [
              "!Sap 3:4-6",
              "Et si coram homínibus torménta passi sunt, Deus tentávit eos: tamquam aurum in fornáce probávit eos, et quasi holocáusta accépit eos.",
            ],
            vernacular: [
              "!Sb 3:4-6",
              "Se sofreram tormentos diante dos homens, foi para Deus os provar. Deus provou-os na fornalha, como ao ouro, e recebeu-os, como hóstia de holocausto.",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per hæc contra ómnia advérsa muniámur.",
              "Per Dominum…",
            ],
            vernacular: [
              "Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os alimentos celestiais, sejamos fortalecidos contra todas as adversidades por intercessão dos vossos B. B. Mártires Vicente e Anastácio.",
              "Por nosso Senhor...",
            ],
          },
          id: "Postcommunio",
        },
      ],
    });
  });
});
