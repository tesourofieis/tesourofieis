import { expect, test } from "vitest";
import { Calendar } from "../src/lib/calendar";
import { format_propers } from "../src/lib/utils";

test("2024-01-28", () => {
  const calendar = new Calendar(2024);

  const day = calendar.get("2024-01-28");

  const proper = day?.getProper(calendar);

  const formated = format_propers(proper);

  console.log(formated);

  expect(formated).toMatchObject([
    {
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
    },
  ]);
});
