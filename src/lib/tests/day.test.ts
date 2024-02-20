import { describe, expect, test } from "vitest";
import { Calendar } from "../calendar";
import { format_propers } from "../utils";

describe("day", () => {
  test("2024-01-22", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-01-22");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    expect(formated).toMatchObject({
      info: {
        colors: ["r"],
        date: null,
        id: "sancti:01-22:3:r",
        rank: 3,
        tempora: null,
        title: "S.S. Vicente e Anastácio, Mártires",
      },
      sections: [
        {
          body: {
            latin: [
              "Ss. Vincentii et Anastasii Martyrum;;Semiduplex;;2.2;;vide C3",
              "",
            ],
            vernacular: [
              "Ss. Vincentii et Anastasii Martyrum;;Semiduplex;;2;;vide C3",
              "",
            ],
          },
          id: "Rank",
        },
        {
          body: {
            latin: ["vide C3;", "Gloria", ""],
            vernacular: ["vide C3;", "Gloria", ""],
          },
          id: "Rule",
        },
        {
          body: {
            latin: undefined,
            vernacular: [
              "## 22 I – S. S. Vicente e Anastácio, Mártires",
              "3 classe",
              "Paramentos vermelhos",
              "",
            ],
          },
          id: "Comment",
        },
        {
          body: {
            latin: ["Commune Plurimorum Martyrum Intret in conspectu", ""],
            vernacular: ["Commune Plurimorum Martyrum Intret in conspectu", ""],
          },
          id: "Name",
        },
        {
          body: {
            latin: [
              "Ps 78:11-12; 78:10",
              "Intret in conspéctu tuo, Dómine, gémitus compeditórum: redde vicínis nostris séptuplum in sinu eórum: víndica sánguinem Sanctórum tuórum, qui effúsus est.",
              "Ps 78:1",
              "Deus, venérunt gentes in hereditátem tuam: polluérunt templum sanctum tuum: posuérunt Jerúsalem in pomórum custódiam.",
              "Glória Patri…",
              "Intret in conspéctu tuo, Dómine, gémitus compeditórum: redde vicínis nostris séptuplum in sinu eórum: víndica sánguinem Sanctórum tuórum, qui effúsus est.",
              "",
            ],
            vernacular: [
              "Sl 78:11-12; 78:10",
              "Que os gemidos dos cativos cheguem à vossa presença, Senhor. Castigai os nossos inimigos sete vezes por cada injúria que nos têm feito: vingai o sangue que os vossos Santos derramaram.",
              "Sl 78:1",
              "Ó Deus, os povos invadiram a vossa herança, profanaram o vosso sagrado templo e reduziram Jerusalém a um monte de ruínas!",
              "Glória ao Pai.",
              "Que os gemidos dos cativos cheguem à vossa presença, Senhor. Castigai os nossos inimigos sete vezes por cada injúria que nos têm feito: vingai o sangue que os vossos Santos derramaram.",
              "",
              "",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra reos nos esse cognóscimus, beatórum Mártyrum tuórum Vincéntii et Anastásii intercessióne liberémur.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que, reconhecendo-nos réus diante de Vós pelas nossas iniquidades, sejamos livres delas por intercessão dos vossos B. B. Mártires Vicente e Anastácio.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "L\u00e9ctio libri Sapi\u00e9nti\u00e6",
              "Sap 3:1-8",
              "Justorum \u00e1nim\u00e6 in manu Dei sunt, et non tanget illos torm\u00e9ntum mortis. Visi sunt oculis insipi\u00e9ntium mori: et \u00e6stim\u00e1la est affl\u00edctio exitus ill\u00f3rum: et quod a nobis est iter, exterm\u00ednium: illi autem sunt in pace. Et si coram hom\u00ednibus torm\u00e9nta passi sunt, spes ill\u00f3rum immortalit\u00e1te plena est. In paucis vex\u00e1ti, in multis bene dispon\u00e9ntur: qu\u00f3niam Deus tent\u00e1vit eos, et invenit illos dignos se. Tamquam aurum in forn\u00e1ce prob\u00e1vit illos, et quasi holoc\u00e1usti h\u00f3stiam acc\u00e9pit illos, et in t\u00e9mpore erit resp\u00e9ctus illorum. Fulg\u00e9bunt justi, et tamquam scint\u00edll\u00e6 in arundin\u00e9to disc\u00farrent. Judic\u00e1bunt nati\u00f3nes, et dominab\u00fantur p\u00f3pulis, et regn\u00e1bit D\u00f3minus ill\u00f3rum in perp\u00e9tuum.",
              "",
            ],
            vernacular: [
              "Li\u00e7\u00e3o do Livro da Sabedoria.",
              "Sb 3:1-8",
              "As almas dos justos est\u00e3o nas m\u00e3os de Deus; por isso o tormento da morte os n\u00e3o tocar\u00e1. Pareciam mortos aos olhos dos insensatos: a sua sa\u00edda do mundo parecia uma afli\u00e7\u00e3o; a sua separa\u00e7\u00e3o de n\u00f3s uma calamidade; mas, agora, est\u00e3o em paz; e, ainda que tenham sofrido diante dos homens, a sua esperan\u00e7a est\u00e1 toda na imortalidade. Depois de haverem sofrido uma pena ligeira, receberam uma grande recompensa, pois Deus provou-os e achou-os dignos de si. Provou-os, como ao ouro, na fornalha; recebeu-os, como uma h\u00f3stia de holocausto; e para eles olhar\u00e1 benigno, quando vier o seu tempo. Os justos brilhar\u00e3o e resplandecer\u00e3o, como as chamas, que se ateiam entre os canaviais. Eles julgar\u00e3o as na\u00e7\u00f5es e dominar\u00e3o os povos; e o Senhor reinar\u00e1 com eles para sempre.",
              "",
              "",
            ],
          },
          id: "Lectio",
        },

        {
          body: {
            latin: [
              "Exod 15:11",
              "Gloriósus Deus in Sanctis suis: mirábilis in majestáte, fáciens prodígia.",
              "Exod 15:6",
              "℣. Déxtera tua, Dómine, glorificáta est in virtúte: déxtera manus tua confrégit inimícos. Allelúja, allelúja.",
              "Eccl 44:14",
              "Córpora Sanctórum in pace sepúlta sunt, et nómina eórum vivent in generatiónem et generatiónem. Allelúja.",
              "",
            ],
            vernacular: [
              "Ex 15:11",
              "Deus é glorioso em seus Santos: e admirável na sua majestade, praticando prodígios.",
              "Ex 15:6",
              "℣. Senhor, a vossa dextra engrandeceu-se pela sua força: a vossa dextra esmagou os inimigos. Aleluia, aleluia.",
              "Sb 44:14",
              "Senhor, os corpos dos vossos Santos foram sepultados em paz e o seu nome subsistirá de geração em geração. Aleluia.",
              "",
              "",
            ],
          },
          id: "Graduale",
        },
        {
          body: {
            latin: [
              "Exod 15:11",
              "Gloriósus Deus in Sanctis suis: mirábilis in majestáte, fáciens prodígia.",
              "Exod 15:6",
              "℣. Déxtera tua, Dómine, glorificáta est in virtúte: déxtera manus tua confrégit inimícos.",
              "Ps 125:5-6.",
              "Qui séminant in lácrimis, in gáudio metent.",
              "℣. Eúntes ibant et flébant, mitténtes sémina sua.",
              "℣. Veniéntes autem vénient cum exsultatióne, portántes manípulos suos.",
              "",
            ],
            vernacular: [
              "Ex 15:11",
              "Deus é glorioso em seus Santos: e admirável na sua majestade, praticando prodígios.",
              "Ex 15:6",
              "℣. Senhor, a vossa dextra engrandeceu-se pela sua força: a vossa dextra esmagou os inimigos.",
              "Sl 125:5-6.",
              "Aqueles que semeiam com lágrimas ceifarão com júbilo.",
              "℣. Iam, caminhavam e lançavam a semente à terra, chorando.",
              "℣. Porém, quando voltavam, exultavam de alegria, trazendo os seus molhos de trigo.",
              "",
            ],
          },
          id: "Tractus",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Lucam.",
              "Luc 21:9-19",
              "In illo témpore: Dixit Jesus discípulis suis: Cum audieritis proelia et seditiónes, nolíte terréri: opórtet primum hæc fíeri, sed nondum statim finis. Tunc dicébat illis: Surget gens contra gentem, et regnum advérsus regnum. Et terræmótus magni erunt per loca, et pestiléntiæ, et fames, terrorésque de coelo, et signa magna erunt. Sed ante hæc ómnia injícient vobis manus suas, et persequéntur tradéntes in synagógas et custódias, trahéntes ad reges et praesides propter nomen meum: contínget autem vobis in testimónium. Pónite ergo in córdibus vestris non præmeditári, quemádmodum respondeátis. Ego enim dabo vobis os et sapiéntiam, cui non potérunt resístere et contradícere omnes adversárii vestri. Tradémini autem a paréntibus, et frátribus, et cognátis, et amícis, et morte affícient ex vobis: et éritis ódio ómnibus propter nomen meum: et capíllus de cápite vestro non períbit. In patiéntia vestra possidébitis ánimas vestras.",
              "",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. Lucas.",
              "Lc 21:9-19",
              "Naquele tempo, disse Jesus aos discípulos: «Quando ouvirdes falar em guerras e sedições, não vos assusteis; pois é necessário que estas cousas aconteçam, primeiramente; mas isto não será logo o fim». «Então, dizia-lhes Ele, levantar-se-á povo contra povo e reino contra reino; em diversos lugares haverá tremores de terra, peste, fome e também aparecerão cousas espantosas, grandes sinais no céu e outros prodígios. Mas, antes que tudo isto aconteça, lançar-vos-ão as mãos e perseguir-vos-ão, entregando-vos às sinagogas, lançando-vos nas prisões e conduzindo-vos à força diante dos reis e dos governadores, por causa do meu nome. Isto acontecerá para que deis testemunho da verdade. Gravai, pois, no vosso coração este pensamento: não premediteis de que modo haveis de responder, porque vos darei palavras e sabedoria, a que os vossos inimigos não poderão resistir, nem responder. Sereis entregues pelos vossos próprios pais, irmãos, parentes e amigos, que darão a morte a alguns de vós. Sereis aborrecidos de todos, por causa do meu nome; todavia, não se perderá nem um só cabelo das vossas cabeças. Com a vossa paciência possuireis as vossas almas».",
              "",
              "",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "Ps 67:36",
              "Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem et fortitúdinem plebi suæ: benedíctus Deus, allelúja.",
              "(sed post Septuagesimam dicitur)",
              "Deus.",
              "",
            ],
            vernacular: [
              "Sl 67:36",
              "Deus é admirável em seus Santos. Deus de Israel dará ao seu povo a força e a coragem. Bendito Ele seja, pois. Aleluia.",
              "",
              "",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre Justórum, et nobis salutária, te miseránte, reddántur.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Senhor, Vos oferecemos estes dons da nossa devoção; e que em consideração dos vossos Santos eles Vos sejam agradáveis, e pela vossa misericórdia nos sejam salutares.",
              "Por nosso Senhor...",
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
              "Sap 3:4-6",
              "Et si coram homínibus torménta passi sunt, Deus tentávit eos: tamquam aurum in fornáce probávit eos, et quasi holocáusta accépit eos.",
              "",
            ],
            vernacular: [
              "Sb 3:4-6",
              "Se sofreram tormentos diante dos homens, foi para Deus os provar. Deus provou-os na fornalha, como ao ouro, e recebeu-os, como hóstia de holocausto.",
              "",
              "",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per hæc contra ómnia advérsa muniámur.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os alimentos celestiais, sejamos fortalecidos contra todas as adversidades por intercessão dos vossos B. B. Mártires Vicente e Anastácio.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Postcommunio",
        },
      ],
    });
  });

  test("2024-01-28", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-01-28");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    console.log(formated);

    expect(formated).toMatchObject({
      info: {
        colors: ["v"],
        date: null,
        id: "tempora:Quadp1-0:2:v",
        rank: 2,
        tempora: null,
        title: "Domingo da Septuagésima",
      },
      sections: [
        {
          body: {
            latin: ["Dominica in Septuagesima;;Semiduplex;;5.6", ""],
            vernacular: ["Dominica in Septuagesima;;Semiduplex;;5.6", ""],
          },
          id: "Rank",
        },
        {
          body: {
            latin: [
              "no Gloria",
              "Credo",
              "Prefatio=Trinitate",
              "Suffr=Maria2;Sanctorum,Ecclesiæ;;",
              "",
            ],
            vernacular: ["no Gloria", "Credo", "Prefatio=Trinitate", ""],
          },
          id: "Rule",
        },
        {
          body: {
            latin: [
              "Ps 9:10-11; 9:19-20",
              "Adjútor in opportunitátibus, in tribulatióne: sperent in te, qui novérunt te: quóniam non derelínquis quæréntes te, Dómine,",
              "℣. Quóniam non in finem oblívio erit páuperis: patiéntia páuperum non períbit in ætérnum: exsúrge, Dómine, non præváleat homo.",
              "",
            ],
            vernacular: [
              "Sl 9:10-11; 9:19-20",
              "Senhor, sois o nosso auxílio nas necessidades e nas tribulações: esperem, pois, em Vós aqueles que Vos conhecem, porque nunca abandonais os que Vos procuram. O infeliz não será sempre esquecido; a paciência do pobre não será frustrada para sempre. Erguei-Vos, para que o homem mau não triunfe.",
              "",
            ],
          },
          id: "GradualeF",
        },
        {
          body: {
            latin: [
              "Ps 17:5; 17:6; 17:7",
              "Circumdedérunt me gémitus mortis, dolóres inférni circumdedérunt me: et in tribulatióne mea invocávi Dóminum, et exaudívit de templo sancto suo vocem meam.",
              "Ps 17:2-3",
              "Díligam te, Dómine, fortitúdo mea: Dóminus firmaméntum meum, et refúgium meum, et liberátor meus.",
              "Glória Patri…",
              "Circumdedérunt me gémitus mortis, dolóres inférni circumdedérunt me: et in tribulatióne mea invocávi Dóminum, et exaudívit de templo sancto suo vocem meam.",
              "",
            ],
            vernacular: [
              "Sl 17:5-7",
              "Rodearam-me os gemidos da morte e cercaram-me as dores do inferno; mas na minha tribulação invoquei o Senhor, que lá no seu santo templo ouviu a minha voz.",
              "Sl 17:2-3",
              "Eu Vos amarei, Senhor, que sois a minha fortaleza, o meu sustentáculo, o meu refúgio e o meu libertador.",
              "Glória ao Pai.",
              "Rodearam-me os gemidos da morte e cercaram-me as dores do inferno; mas na minha tribulação invoquei o Senhor, que lá no seu santo templo ouviu a minha voz.",
              "",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut, qui juste pro peccátis nostris afflígimur, pro tui nóminis glória misericórditer liberémur.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Ouvi benigno, Senhor, Vos rogamos, as preces do vosso povo, a fim de que nós, que estamos justamente aflitos com o peso dos nossos pecados, sejamos misericordiosamente livres, pela glória do vosso nome.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "S. Petri Nolasci Confessoris",
              "Deus, qui in tuæ caritátis exémplum ad fidélium redemptiónem sanctum Petrum Ecclésiam tuam nova prole fœcundáre divínitus docuísti: ipsíus nobis intercessióne concéde; a peccáti servitúte solútis, in cœlésti pátria perpétua libertáte gaudére:",
              "Qui vivis…",
              "",
            ],
            vernacular: [
              "S. Pedro Nolasco, Confessor",
              "Ó Deus, que em prova da vossa caridade quisestes inspirar sobrenaturalmente S. Pedro a fundar na vossa Igreja uma nova família, destinada à redenção dos fiéis cativos, concedei-nos por sua intercessão que, livres nós do cativeiro do pecado, gozemos perpétua liberdade na pátria celestial.",
              "Ó Vós, que viveis...",
              "",
            ],
          },
          id: "Commemoratio Oratio",
        },
        {
          body: {
            latin: [
              "Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios",
              "1 Cor 9:24-27; 10:1-5",
              "Fratres: Nescítis, quod ii, qui in stádio currunt, omnes quidem currunt, sed unus áccipit bravíum? Sic cúrrite, ut comprehendátis. Omnis autem, qui in agóne conténdit, ab ómnibus se ábstinet: et illi quidem, ut corruptíbilem corónam accípiant; nos autem incorrúptam. Ego ígitur sic curro, non quasi in incértum: sic pugno, non quasi áërem vérberans: sed castígo corpus meum, et in servitútem rédigo: ne forte, cum áliis prædicáverim, ipse réprobus effíciar. Nolo enim vos ignoráre, fratres, quóniam patres nostri omnes sub nube fuérunt, et omnes mare transiérunt, et omnes in Móyse baptizáti sunt in nube et in mari: et omnes eándem escam spiritálem manducavérunt, et omnes eúndem potum spiritálem bibérunt bibébant autem de spiritáli, consequénte eos, petra: petra autem erat Christus: sed non in plúribus eórum beneplácitum est Deo.",
              "",
            ],
            vernacular: [
              "Lição da Ep.ª do B. Ap.º Paulo aos Coríntios",
              "1 Cor. 9:24-27; 10:1-5",
              "Meus irmãos: Não sabeis que aqueles que correm no circo, todos correm, mas somente um ganha o prémio? Correi, pois, de tal modo que o ganheis. Aqueles que combatem na arena abstêm-se de tudo; e procedem assim para alcançar uma coroa corruptível. Nós, porém, para alcançarmos uma coroa incorruptível. Eu também assim corro, mas não ao acaso; eu pelejo, mas não como quem fere o ar; pois castigo o meu corpo e o reduzo à servidão, com medo de que, depois de ter pregado aos outros, seja condenado. Ora, meus irmãos, não quero que ignoreis que nossos pais estiveram debaixo da nuvem, passaram o mar e todos foram baptizados e guiados por Moisés na nuvem e no mar; nem mesmo que ignoreis que todos eles, também, comeram o mesmo alimento espiritual e beberam a mesma bebida. Com efeito, beberam em um rochedo espiritual, que os seguia, o qual era Cristo. Todavia, a maior parte deles não agradou a Deus.",
              "",
            ],
          },
          id: "Lectio",
        },
        {
          body: {
            latin: [
              "Ps 9:10-11; 9:19-20",
              "Adjútor in opportunitátibus, in tribulatióne: sperent in te, qui novérunt te: quóniam non derelínquis quæréntes te, Dómine,",
              "℣. Quóniam non in finem oblívio erit páuperis: patiéntia páuperum non períbit in ætérnum: exsúrge, Dómine, non præváleat homo.",
              "",
              "Tractus",
              "Ps 129:1-4",
              "De profúndis clamávi ad te. Dómine: Dómine, exáudi vocem meam.",
              "℣. Fiant aures tuæ intendéntes in oratiónem servi tui.",
              "℣. Si iniquitátes observáveris, Dómine: Dómine, quis sustinébit?",
              "℣. Quia apud te propitiátio est, et propter legem tuam sustínui te, Dómine.",
              "",
            ],
            vernacular: [
              "Sl 9:10-11; 9:19-20",
              "Senhor, sois o nosso auxílio nas necessidades e nas tribulações: esperem, pois, em Vós aqueles que Vos conhecem, porque nunca abandonais os que Vos procuram. O infeliz não será sempre esquecido; a paciência do pobre não será frustrada para sempre. Erguei-Vos, para que o homem mau não triunfe.",
              "Sl 129:1-4",
              "Das profundezas do abysmo clamei por Vós, Senhor: ouvi a minha voz.",
              "℣. Que os vossos ouvidos estejam atentos à voz deste vosso servo.",
              "℣. Se julgais as nossas iniquidades, Senhor, quem poderá subsistir ante Vós?",
              "℣. Mas sois propício; por amor da vossa lei esperei em Vós.",
              "",
            ],
          },
          id: "Graduale",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Matthǽum",
              "Matt 20:1-16",
              "In illo témpore: Dixit Jesus discípulis suis parábolam hanc: Simile est regnum coelórum hómini patrifamílias, qui éxiit primo mane condúcere operários in víneam suam. Conventióne autem facta cum operáriis ex denário diúrno, misit eos in víneam suam. Et egréssus circa horam tértiam, vidit álios stantes in foro otiósos, et dixit illis: Ite et vos in víneam meam, et quod justum fúerit, dabo vobis. Illi autem abiérunt. Iterum autem éxiit circa sextam et nonam horam: et fecit simíliter. Circa undécimam vero éxiit, et invénit álios stantes, et dicit illis: Quid hic statis tota die otiósi? Dicunt ei: Quia nemo nos condúxit. Dicit illis: Ite et vos in víneam meam. Cum sero autem factum esset, dicit dóminus víneæ procuratóri suo: Voca operários, et redde illis mercédem, incípiens a novíssimis usque ad primos. Cum veníssent ergo qui circa undécimam horam vénerant, accepérunt síngulos denários. Veniéntes autem et primi, arbitráti sunt, quod plus essent acceptúri: accepérunt autem et ipsi síngulos denários. Et accipiéntes murmurábant advérsus patremfamílias, dicéntes: Hi novíssimi una hora fecérunt et pares illos nobis fecísti, qui portávimus pondus diéi et æstus. At ille respóndens uni eórum, dixit: Amíce, non facio tibi injúriam: nonne ex denário convenísti mecum? Tolle quod tuum est, et vade: volo autem et huic novíssimo dare sicut et tibi. Aut non licet mihi, quod volo, fácere? an óculus tuus nequam est, quia ego bonus sum? Sic erunt novíssimi primi, et primi novíssimi. Multi enim sunt vocáti, pauci vero elécti.",
              "",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. Mateus",
              "Mt 20:1-16",
              "Naquele tempo, disse Jesus a seus discípulos: «O reino dos céus é semelhante a um pai de família que sai da sua casa cedo para ajustar jornaleiros, para a sua vinha. E, tendo ajustado com eles dar a cada um por dia um dinheiro, mandou-os para a vinha. Cerca da hora terceira, saiu outra vez e viu que estavam ociosos na praça outros jornaleiros. Disse-lhes: «Ide, também, trabalhar para a minha vinha, e pagar-vos-ei o que for justo»; e eles foram. Saiu, ainda, cerca da hora sexta e cerca da hora nona, e fez a mesma coisa. Enfim, havendo saído cerca da hora undécima, encontrou outros e disse-lhes: «Porque estais todo o dia ociosos?». Eles responderam: «Porque ninguém nos ajustou». E disse-lhes: «Ide vós, também, para a minha vinha». Quando era já pela tarde, disse o senhor da vinha ao seu intendente: «Chama os jornaleiros e paga-lhes os salários, começando pelos últimos e acabando nos primeiros». Quando vieram os jornaleiros da hora undécima, receberam um dinheiro cada um. Vindo, por sua vez, os primeiros, cuidavam que receberiam mais; porém receberam, também, um dinheiro cada um. Então, estes, recebendo o dinheiro, murmuraram contra o pai de família, dizendo: «Estes últimos não trabalharam senão uma hora, e dais-lhes tanto como a nós, que aguentámos no dia inteiro o peso do trabalho e do calor?». Mas o senhor, dirigindo-se a um deles, respondeu: «Meu amigo, não te faço injustiça. Não ajustaste comigo receber um dinheiro? Toma, pois, o que te pertence, e vai-te. Quanto a mim, quero dar a este último tanto como a ti. Porventura me não é lícito ser generoso para com quem quiser? Diz-me: o teu olho é mau, porque o meu é bom? Assim, os últimos serão os primeiros, e os primeiros serão os últimos; pois muitos são os chamados e poucos os escolhidos».",
              "",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "Ps 91:2",
              "Bonum est confitéri Dómino, et psállere nómini tuo, Altíssime.",
              "",
            ],
            vernacular: [
              "Sl 91:2",
              "É bom louvar o Senhor; e cantar Salmos em honra do vosso nome, ó Altíssimo.",
              "",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et coeléstibus nos munda mystériis, et cleménter exáudi.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Recebendo as nossas ofertas e orações, Senhor, dignai-Vos purificar-nos por virtude dos vossos celestiais mystérios e ouvi misericordioso os nossos rogos.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Secreta",
        },
        {
          body: {
            latin: [
              "S. Petri Nolasci Confessoris",
              "Laudis tibi. Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "S. Pedro Nolasco, Confessor",
              "Vos oferecemos este sacrifício de louvor em memória dos vossos Santos, para que por meio deles nos livremos dos males presentes e futuros.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Commemoratio Secreta",
        },
        {
          body: {
            latin: [
              "de sanctissima Trinitate",
              "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: Qui cum unigénito Fílio tuo et Spíritu Sancto unus es Deus, unus es Dóminus: non in uníus singularitáte persónæ, sed in uníus Trinitáte substántiæ. Quod enim de tua glória, revelánte te, crédimus, hoc de Fílio tuo, hoc de Spíritu Sancto sine differéntia discretiónis sentímus. Ut in confessióne veræ sempiternǽque Deitátis, et in persónis propríetas, et in esséntia únitas, et in majestáte adorétur æquálitas. Quam laudant Angeli atque Archángeli, Chérubim quoque ac Séraphim: qui non cessant clamáre cotídie, una voce dicéntes:",
              "",
            ],
            vernacular: [
              "da SS. Trindade",
              "É verdadeiramente digno e justo, racional e salutar render-Vos graças em todos os lugares e sempre, ó Senhor santo, Pai omnipotente, eterno Deus, que com vosso Filho Unigénito e com o Espírito Santo sois um só Deus, um só Senhor, não na unidade de uma só pessoa, mas na Trindade de uma só substância. Porquanto, o que acreditamos a respeito da vossa glória, acreditamo-lo também, pela vossa revelação, a respeito do vosso Filho e do Espírito Santo, de tal modo que, confessando a verdadeira e eterna divindade, adoramos nas pessoas a propriedade, na essência a unidade e a igualdade na majestade. É esta majestade, que louvam os Anjos e Arcanjos, os Querubins e Serafins, que não cessam quotidianamente de cantar em uníssono:",
              "",
            ],
          },
          id: "Prefatio",
        },
        {
          body: {
            latin: [
              "Ps 30:17-18",
              "Illúmina fáciem tuam super servum tuum, et salvum me fac in tua misericórdia: Dómine, non confúndar, quóniam invocávi te.",
              "",
            ],
            vernacular: [
              "Sl 30:17-18",
              "Fazei resplandecer a vossa face sobre este vosso servo, e salvai-me pela vossa misericórdia, Senhor; que eu não seja confundido, pois Vos invoquei.",
              "",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Fidéles tui, Deus, per tua dona firméntur: ut eadem et percipiéndo requírant, et quæréndo sine fine percípiant.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Que os vossos fiéis, ó Deus, sejam fortificados com vossos dons, a fim de que, recebendo-os, continuem a procurá-los, e, havendo-os achado, sirvam para a nossa eternidade.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Postcommunio",
        },
        {
          body: {
            latin: [
              "S. Petri Nolasci Confessoris",
              "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "S. Pedro Nolasco, Confessor",
              "Fortalecidos com o alimento e com a bebida celestiais, Vos suplicamos humildemente, ó nosso Deus, que nos protejam as preces daquele em cuja memória os recebermos.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Commemoratio Postcommunio",
        },
      ],
    });
  });

  test("2024-01-29", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-01-29");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    console.log(formated);

    expect(formated).toMatchObject({
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
    });
  });

  test("2024-11-02", () => {
    const calendar = new Calendar(2024);

    const day = calendar.get("2024-11-02");

    const proper = day?.getProper(calendar);

    const formated = format_propers(proper);

    console.log(formated);

    expect(formated).toMatchObject({
      info: {
        colors: ["b"],
        date: null,
        id: "sancti:11-02m1:1:b",
        rank: 1,
        tempora: null,
        title: "Comemoração dos Fiéis Defuntos, 1ª Missa",
      },
      sections: [
        {
          body: {
            latin: [
              "In Commemoratione Omnium Fidelium Defunctorum Ad primam Missam;;Duplex;;3;;ex C9",
              "",
            ],
            vernacular: [
              "In Commemoratione Omnium Fidelium Defunctorum Ad primam Missam;;Duplex;;3;;ex C9",
              "",
            ],
          },
          id: "Rank",
        },
        {
          body: {
            latin: undefined,
            vernacular: [
              "Commemoratione Omnium Fidelium Defunctorum Ad primam Missam;;Duplex Solemnity;;6;;ex C9",
              "",
            ],
          },
          id: "RankNewcal",
        },
        {
          body: {
            latin: undefined,
            vernacular: [
              "In Commemoratione Omnium Fidelium Defunctorum Ad primam Missam;;I. classis;;6;;ex C9",
              "",
              "",
            ],
          },
          id: "Rank1960",
        },
        {
          body: {
            latin: [
              "ex C9",
              "no Gloria",
              "no Credo",
              "Prefatio=Defunctorum",
              "multiple3",
              "Sequentia",
              "",
            ],
            vernacular: [
              "ex C9",
              "no Gloria",
              "no Credo",
              "Prefatioo=Defunctorum",
              "multiple3",
              "Sequentia",
              "Requiem gloria",
              "",
            ],
          },
          id: "Rule",
        },
        {
          body: {
            latin: undefined,
            vernacular: [
              "## 02 XI – Comemoração dos Fiéis Defuntos - 1ª Missa",
              "1 classe",
              "Paramentos vermelhos",
              "",
            ],
          },
          id: "Comment",
        },
        {
          body: {
            latin: ["Missa Defunctorum quotidianis, Requiem aeternam", ""],
            vernacular: ["Missa Defunctorum quotidianis, Requiem aeternam", ""],
          },
          id: "Name",
        },
        {
          body: {
            latin: [
              "4 Esdr 2:34; 2:35",
              "Réquiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.",
              "Ps 64:2-3",
              "Te decet hymnus, Deus, in Sion, et tibi reddétur votum in Jerúsalem: exáudi oratiónem meam, ad te omnis caro véniet.",
              "Réquiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.",
              "",
            ],
            vernacular: [
              "4 Ezd 2:34; 2:35",
              "Dai-lhes, Senhor, o eterno repouso, e que lhes resplandeça a luz perpétua.",
              "Sl 64:2-3",
              "A Vós, Senhor, dirigimos estes hinos em Sião: e oferecemos estes votos em Jerusalém: ouvi a minha oração: todas as criaturas devem comparecer ante Vós.",
              "Dai-lhes, Senhor, o eterno repouso, e que lhes resplandeça a luz perpétua.",
              "",
            ],
          },
          id: "Introitus",
        },
        {
          body: {
            latin: [
              "Fidélium, Deus, ómnium Cónditor et Redémptor: animábus famulórum famularúmque tuárum remissiónem cunctórum tríbue peccatórum; ut indulgéntiam, quam semper optavérunt, piis supplicatiónibus consequántur:",
              "Qui vivis…",
              "",
            ],
            vernacular: [
              "Ó Deus, Criador e Redentor de todos os fiéis, concedei às almas dos vossos servos a remissão de todos seus pecados, a fim de que pelas nossas humilíssimas orações alcancem da vossa misericórdia o perdão que sempre desejaram.",
              "Ó Vós, que viveis...",
              "",
            ],
          },
          id: "Oratio",
        },
        {
          body: {
            latin: [
              "Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios",
              "1 Cor 15:51-57",
              "Fratres: Ecce, mystérium vobis dico: Omnes quidem resurgámus, sed non omnes immutábimur. In moménto, in ictu óculi, in novíssima tuba: canet enim tuba, et mórtui resúrgent incorrúpti: et nos immutábimur. Opórtet enim corruptíbile hoc induere incorruptiónem: et mortále hoc indúere immortalitátem. Cum autem mortále hoc indúerit immortalitátem, tunc fiet sermo, qui scriptus est: Absórpta est mors in victória. Ubi est, mors, victória tua? Ubi est, mors, stímulus tuus? Stímulus autem mortis peccátum est: virtus vero peccáti lex. Deo autem grátias, qui dedit nobis victóriam per Dóminum nostrum Jesum Christum.",
              "",
            ],
            vernacular: [
              "Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.",
              "1 Cor 15:51-57",
              "Irmãos: Eis um mystério que vos revelo: Ressuscitaremos todos certamente; mas não seremos todos mudados. Num instante, num abrir e fechar de olhos, ao som da última trombeta, porque, então a trombeta soará e os mortos ressuscitarão incorruptíveis, e nós seremos transmudados. Pois é preciso que este corpo corruptível se revista da incorruptibilidade, e que este corpo mortal se revista da imortalidade. Quando este corpo corruptível se revestir da incorruptibilidade e este corpo mortal se revestir da imortalidade, então se cumprirá a palavra que está escrita: «A morte foi absorvida pela vitória. Onde está, ó morte, a tua vitória? Onde está, ó morte, o teu aguilhão?». Ora, o aguilhão da morte é o pecado; e a força do pecado é a lei. Graças, pois, sejam rendidas a Deus, que nos concedeu a vitória por Jesus Cristo, Senhor nosso.",
              "",
            ],
          },
          id: "Lectio",
        },
        {
          body: {
            latin: [
              "4 Esdr 2:34 et 35.",
              "Réquiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.",
              "Ps 111:7.",
              "℣. In memória ætérna erit justus: ab auditióne mala non timébit.",
              "",
              "Tractus.",
              "Absólve, Dómine, ánimas ómnium fidélium ab omni vínculo delictórum.",
              "℣. Et grátia tua illis succurrénte, mereántur evádere judícium ultiónis.",
              "℣. Et lucis ætérnæ beatitúdine pérfrui.",
              "",
            ],
            vernacular: [
              "4 Ezdr 2:34-35",
              "Dai-lhes, Senhor, o eterno repouso, e que lhes resplandeça a luz perpétua.",
              "Sl 111:7",
              "℣. A recordação do homem justo permanecerá eternamente; este não temerá ouvir as sentenças más dos homens.",
              "",
              "Tractus",
              "Livrai, Senhor, as almas dos fiéis defuntos das cadeias dos seus pecados:",
              "℣. E que com o socorro da vossa graça consigam evitar o juízo da vingança:",
              "℣. E gozem a bem-aventurança da luz eterna.",
              "",
            ],
          },
          id: "Graduale",
        },
        {
          body: {
            latin: [
              "Dies iræ, dies illa",
              "Solvet sæclum in favílla:",
              "Teste David cum Sibýlla.",
              "",
              "Quantus tremor est futúrus,",
              "Quando judex est ventúrus,",
              "Cuncta stricte discussúrus!",
              "",
              "Tuba mirum spargens sonum",
              "Per sepúlcra regiónum,",
              "Coget omnes ante thronum.",
              "",
              "Mors stupébit et natúra,",
              "Cum resúrget creatúra,",
              "Judicánti responsúra.",
              "",
              "Liber scriptus proferétur,",
              "In quo totum continétur,",
              "Unde mundus judicétur.",
              "",
              "Judex ergo cum sedébit,",
              "Quidquid latet, apparébit:",
              "Nil inúltum remanébit.",
              "",
              "Quid sum miser tunc dictúrus?",
              "Quem patrónum rogatúrus,",
              "Cum vix justus sit secúrus?",
              "",
              "Rex treméndæ majestátis,",
              "Qui salvándos salvas gratis,",
              "Salva me, fons pietátis.",
              "",
              "Recordáre, Jesu pie,",
              "Quod sum causa tuæ viæ:",
              "Ne me perdas illa die.",
              "",
              "Quærens me, sedísti lassus:",
              "Redemísti Crucem passus:",
              "Tantus labor non sit cassus.",
              "",
              "Juste judex ultiónis,",
              "Donum fac remissiónis",
              "Ante diem ratiónis.",
              "",
              "Ingemísco, tamquam reus:",
              "Culpa rubet vultus meus:",
              "Supplicánti parce, Deus.",
              "",
              "Qui Maríam absolvísti,",
              "Et latrónem exaudísti,",
              "Mihi quoque spem dedísti.",
              "",
              "Preces meæ non sunt dignæ:",
              "Sed tu bonus fac benígne,",
              "Ne perénni cremer igne.",
              "",
              "Inter oves locum præsta,",
              "Et ab hœdis me sequéstra,",
              "Státuens in parte dextra.",
              "",
              "Confutátis maledíctis,",
              "Flammis ácribus addíctis:",
              "Voca me cum benedíctis.",
              "",
              "Oro supplex et acclínis,",
              "Cor contrítum quasi cinis:",
              "Gere curam mei finis.",
              "",
              "Lacrimósa dies illa,",
              "Qua resúrget ex favílla",
              "Judicándus homo reus.",
              "",
              "Huic ergo parce, Deus:",
              "Pie Jesu Dómine,",
              "Dona eis réquiem.",
              "Amen.",
              "",
            ],
            vernacular: [
              "Dia da ira aquele dia",
              "em que o universo será reduzido a cinzas,",
              "segundo as profecias de David e Sibila.",
              "",
              "Qual não será o terror dos homens",
              "quando o soberano Juiz vier examinar",
              "todas as acções com rigor!",
              "",
              "O som estridente da trombeta acordará os mortos,",
              "nas profundezas das sepulturas,",
              "reunindo-os todos diante do trono do Senhor.",
              "",
              "A morte e a natureza ficarão estupefactas",
              "quando a criatura comparecer",
              "para ser julgada pelo Juiz.",
              "",
              "Um livro aparecerá,",
              "onde está escrito tudo sobre o que há-de consistir",
              "o julgamento do mundo.",
              "",
              "Quando o Juiz se assentar no tribunal,",
              "tudo o que estiver oculto ficará descoberto,",
              "e nenhum crime ficará impune.",
              "",
              "Infeliz de mim! Que poderei dizer então?",
              "Que protector procurarei,",
              "quando somente o justo está tranquilo?!",
              "",
              "Ó Rei, cuja majestade é tremenda,",
              "mas que salvais, gratuitamente, os escolhidos,",
              "salvai-me, ó fonte de piedade!",
              "",
              "Recordai-Vos, ó piíssimo Jesus,",
              "de que vieste ao mundo por minha causa:",
              "não me condeneis nesse dia.",
              "",
              "Ó Vós, que Vos fatigastes em minha procura",
              "e que para me resgatardes morrestes na Cruz:",
              "não queirais que fiquem infrutíferos tantos esforços.",
              "",
              "Ó justo Juiz, que castigais com justiça,",
              "concedei-me o perdão das minhas faltas",
              "antes do dia do julgamento.",
              "",
              "Eu choro, como réu;",
              "as minhas culpas envergonham-me.",
              "Ó Deus, que minhas súplicas me alcancem perdão.",
              "",
              "Ó Vós, que absolvestes Maria",
              "e ouvistes o ladrão,",
              "e me concedestes também a esperança!",
              "",
              "Bem sei que minhas preces não são dignas;",
              "mas Vós, que sois bom,",
              "não consintais que eu arda no fogo eterno.",
              "",
              "Colocai-me entre os cordeiros,",
              "à vossa direita,",
              "e separai-me dos pecadores.",
              "",
              "Livrai-me da confusão",
              "e do suplicio dos malditos condenados",
              "e introduzi-me junto dos benditos de vosso Pai.",
              "",
              "Prostrado ante Vós, suplicante,",
              "com o coração esmagado, como reduzido a cinzas,",
              "Vos imploro, ó da morte.",
              "",
              "Dia de lágrimas aquele em",
              "que o homem renasça da sua cinza",
              "para ser julgado!",
              "",
              "Tende, pois, piedade dele, ó meu Deus!",
              "Ó piíssimo Jesus, ó Senhor,",
              "concedei-lhe o repouso eterno.",
              "Amen.",
              "",
            ],
          },
          id: "Sequentia",
        },
        {
          body: {
            latin: [
              "Sequéntia ☩ sancti Evangélii secúndum Joánnem",
              "Joann 5:25-29",
              "In illo témpore: Dixit Jesus turbis Judæórum: Amen, amen, dico vobis, quia venit hora, et nunc est, quando mórtui áudient vocem Fílii Dei: et qui audíerint, vivent. Sicut enim Pater habet vitam in semetípso, sic dedit et Fílio habére vitam in semetípso: et potestátem dedit ei judícium fácere, quia Fílius hóminis est. Nolíte mirári hoc, quia venit hora, in qua omnes, qui in monuméntis sunt, áudient vocem Fílii Dei: et procédent, qui bona fecérunt, in resurrectiónem vitæ: qui vero mala egérunt, in resurrectiónem judícii.",
              "",
            ],
            vernacular: [
              "Continuação ☩ do santo Evangelho segundo S. João.",
              "Jo 5:25-29",
              "Naquele tempo, disse Jesus às turbas dos judeus: «Em verdade, em verdade vos digo: A hora chega (ela chegou já) em que os mortos ouvirão a voz do Filho de Deus; e os que a ouvirem, viverão. Porque, assim como o Pai tem a vida em si, assim Ele deu ao Filho o poder de ter a vida em si; e deu-lhe, também, o poder de julgar, pois Ele é o Filho do homem. Não vos admireis disto, pois vem a hora em que todos aqueles que estão nos túmulos ouvirão a voz do Filho de Deus. Então, aqueles que tiverem praticado obras boas sairão para a ressurreição da vida eterna; e aqueles que tiverem praticado obras más ressuscitarão para a condenação».",
              "",
            ],
          },
          id: "Evangelium",
        },
        {
          body: {
            latin: [
              "Dómine Jesu Christe, Rex glóriæ, líbera ánimas ómnium fidélium defunctórum de pœnis inférni et de profúndo lacu: líbera eas de ore leónis, ne absórbeat eas tártarus, ne cadant in obscúrum: sed sígnifer sanctus Míchaël repræséntet eas in lucem sanctam:",
              "* Quam olim Abrahæ promisísti et sémini ejus.",
              "℣. Hóstias et preces tibi, Dómine, laudis offérimus: tu súscipe pro animábus illis, quarum hódie memóriam fácimus: fac eas, Dómine, de morte transíre ad vitam.",
              "* Quam olim Abrahæ promisísti et sémini ejus.",
              "",
            ],
            vernacular: [
              "Senhor Jesus Cristo, Rei da glória, livrai as almas de todos os fiéis defuntos das penas do inferno e do lago profundo; livrai-as da boca do leão; que o inferno as não sepulte, nem elas se abismem nas trevas desse lugar tremendo; mas que S. Miguel, que é o porta-estandarte divino, as conduza até à luz santa. Como outrora prometestes a Abraão e à sua posteridade.",
              "℣. Vos oferecemos, Senhor, estas hóstias e estas orações de louvor: aceitai-as pelas almas daqueles que hoje comemoramos, e fazei-as passar da morte à vida: Como outrora prometestes a Abraão e à sua posteridade.",
              "",
            ],
          },
          id: "Offertorium",
        },
        {
          body: {
            latin: [
              "Hóstias, quǽsumus, Dómine, quas tibi pro animábus famulórum famularúmque tuárum offérimus, propitiátus inténde: ut, quibus fídei christiánæ méritum contulísti, dones et prǽmium.",
              "Per Dominum…",
              "",
            ],
            vernacular: [
              "Olhai benigno, Senhor, Vos suplicamos, para as hóstias que Vos oferecemos pelas almas dos vossos servos, a fim de que, depois de lhes haverdes concedido o dom da fé cristã, lhes proporcioneis a recompensa.",
              "Por nosso Senhor...",
              "",
            ],
          },
          id: "Secreta",
        },
        {
          body: {
            latin: [
              "Defunctorum",
              "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum, Dóminum nostrum. In quo nobis spes beátæ resurrectiónis effúlsit, ut, quos contrístat certa moriéndi condício, eósdem consolétur futúræ immortalitátis promíssio. Tuis enim fidélibus, Dómine, vita mutátur, non tóllitur: et, dissolúta terréstris hujus incolátus domo, ætérna in cælis habitátio comparátur. Et ídeo cum Angelis et Archángelis, cum Thronis et Dominatiónibus cumque omni milítia cœléstis exércitus hymnum glóriæ tuæ cánimus, sine fine dicéntes:",
              "",
            ],
            vernacular: [
              "dos Defuntos",
              "É verdadeiramente digno e justo, racional e salutar que sempre e em todos os lugares Vos dêmos graças, Senhor santo, Pai omnipotente, eterno Deus, por meio de nosso Senhor Jesus Cristo, em quem nos concedestes a esperança da feliz ressurreição; de sorte que, conquanto a condição certa da nossa morte nos entristeça, fiquemos consolados com a promessa da imortalidade futura. Pois, para os vossos fiéis, Senhor, a vida muda-se, não se acaba; e, desfeita esta Inorada terrena, adquire-se a habitação eterna nos céus. E, por isso, com os Anjos e Arcanjos, com os Tronos e Dominações e com toda a milícia do exército celestial, cantamos o hino da vossa glória, dizendo sem cessar:",
              "",
              "",
            ],
          },
          id: "Prefatio",
        },
        {
          body: {
            latin: [
              "4 Esdr 2:35; 2:34",
              "Lux ætérna lúceat eis, Dómine:",
              "* Cum Sanctis tuis in ætérnum: quia pius es.",
              "℣. Requiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.",
              "* Cum Sanctis tuis in ætérnum: quia pius es.",
              "",
            ],
            vernacular: [
              "4 Ezdr 2:35; 2:34",
              "Que a luz eterna lhes resplandeça: Com os vossos Santos em todos os séculos, ó Senhor, pois sois bom.",
              "℣. Dai-lhes, Senhor, o eterno repouso, e que a luz perpétua lhes resplandeça: Com os vossos santos em todos os séculos, ó Senhor, pois sois misericordioso.",
              "",
              "",
            ],
          },
          id: "Communio",
        },
        {
          body: {
            latin: [
              "Animábus, quǽsumus, Dómine, famulórum famularúmque tuárum orátio profíciat supplicántium: ut eas et a peccátis ómnibus éxuas, et tuæ redemptiónis fácias esse partícipes:",
              "Qui vivis…",
              "",
            ],
            vernacular: [
              "Que as nossas humildes preces sejam proveitosas às almas dos vossos servos e servas, a fim de que, soltas das cadeias dos seus pecados, participem dos frutos da vossa redenção.",
              "Ó Vós, que viveis...",
              "",
            ],
          },
          id: "Postcommunio",
        },
      ],
    });
  });
});
