export function getTranslation(lang: string) {
  if (lang === LANGUAGE) {
    return {
      TITLES: TITLES_PT,
      VOTIVE_MASSES: VOTIVE_MASSES_PT,
      SECTION_LABELS: SECTION_LABELS_PT,
      SECTION_LABELS_MULTI: SECTION_LABELS_MULTI_PT,
      PATERNOSTER: PATERNOSTER_PT,
      TRANSFORMATIONS: TRANSFORMATIONS_PT,
      COMMEMORATIONS: COMMEMORATIONS_PT,
      SUPPLEMENTS,
    };
  }
  return {
    TITLES,
    VOTIVE_MASSES,
    SECTION_LABELS,
    SECTION_LABELS_MULTI,
    PATERNOSTER,
    TRANSFORMATIONS,
    COMMEMORATIONS,
    SUPPLEMENTS,
  };
}

export const WEEKDAY_MAPPING: { [key: string]: number } = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "10-DUr": 0, // The Feast of Christ the King, last Sunday of October.
};

export const THIS_DIR: string = "/src"; // Replace with the actual path
export const RESOURCES_DIR: string = `${THIS_DIR}/../resources`;
export const DIVOFF_DIR: string = `${RESOURCES_DIR}/divinum-officium`;
export const CUSTOM_DIVOFF_DIR: string = `${RESOURCES_DIR}/divinum-officium-custom`;
export const PROPERS_DIR: string = `${RESOURCES_DIR}/propers`;
export const SUPPLEMENT_DIR: string = `${RESOURCES_DIR}/supplement`;

export const LANGUAGE_LATIN: string = "Latin";
export const LANGUAGE: string = "Portugues";
export const LANGUAGES: Record<string, string> = {
  Portugues: "Portugues",
};
export const DIVOFF_LANG_MAP: Record<string, string> = {
  Latin: "Latin",
  ...LANGUAGES,
};
export const TYPE_TEMPORA: string = "tempora";
export const TYPE_SANCTI: string = "sancti";
export const PREFATIO_COMMUNIS: string = "Communis";
export const PREFATIO_TRINITATE: string = "Trinitate";
export const PREFATIO_PASCHAL: string = "Pasch";
export const PREFATIO_APOSTOLIS: string = "Apostolis";
export const PREFATIO_NAT: string = "Nat";
export const PREFATIO_EPI: string = "Epi";
export const PREFATIO_OMIT: string = "prefatio_omit";
export const PREFATIO_LENT: string = "Quad";
export const PREFATIO_JOSEPH: string = "Joseph";
export const PREFATIO_ASCENSION: string = "Asc";
export const ASTERISK: string = "*";

export const PATTERN_TEMPORA: RegExp = /^tempora:.*/;
export const PATTERN_SANCTI_CLASS_3_LOCAL = new RegExp(
  `^sancti:.*(?:${Object.keys(LANGUAGES).join("|")}):3:\\w$`,
);
export const PATTERN_ADVENT: RegExp = /^tempora:Adv\d/;
export const PATTERN_ADVENT_SUNDAY: RegExp = /^tempora:Adv\d-0/;
export const PATTERN_ADVENT_FERIA: RegExp = /tempora:Adv\d-[1-6]/;
export const PATTERN_ADVENT_FERIA_BETWEEN_17_AND_23: RegExp =
  /tempora:Adv\d-[1-6]:2/;
export const PATTERN_ADVENT_FERIA_BEFORE_17: RegExp = /tempora:Adv\d-[1-6]:3/;
export const PATTERN_POST_EPIPHANY_SUNDAY: RegExp = /^tempora:Epi\d-0/;
export const PATTERN_PRE_LENTEN: RegExp = /^tempora:Quadp\d/;
export const PATTERN_LENT: RegExp = /^tempora:Quad(p3-[3-6]|\d)/;
export const PATTERN_LENT_PREFATIO: RegExp = /^tempora:Quad(p3-[3-6]|[1-4]-\d)/;
export const PATTERN_EASTER: RegExp = /^tempora:Pasc\d/;
export const PATTERN_EASTER_PREFATIO: RegExp =
  /^tempora:Pasc([0-4]|5-0|5-1|5-2|5-3)/;
export const PATTERN_ASCENSION_PREFATIO: RegExp =
  /^tempora:Pasc(5-4|5-5|5-6|6-0|6-1|6-2|6-3|6-4|6-5)/;
export const PATTERN_SUNDAY: RegExp = /^tempora:.*\d-0.*/;
export const PATTERN_LENT_SUNDAY: RegExp = /^tempora:Quad\d-0.*/;
export const PATTERN_TEMPORA_SUNDAY: RegExp = /^tempora:.*/;
export const PATTERN_TEMPORA_SUNDAY_CLASS_1: RegExp = /^tempora:.*:1:.*/;
export const PATTERN_TEMPORA_SUNDAY_CLASS_2: RegExp =
  /^tempora:(.*:2|Nat1-0).*/;
export const PATTERN_TEMPORA_CLASS_1: RegExp = /^tempora:.*:1:.*/;
export const PATTERN_TEMPORA_CLASS_2: RegExp = /^tempora:.*:2:.*/;
export const PATTERN_TEMPORA_CLASS_3: RegExp = /^tempora:.*:3:.*/;
export const PATTERN_TEMPORA_CLASS_4: RegExp = /^tempora:.*:4:.*/;
export const PATTERN_SANCTI: RegExp = /^sancti:.*/;
export const PATTERN_SANCTI_CLASS_1: RegExp = /^sancti:.*:1:.*/;
export const PATTERN_SANCTI_CLASS_2: RegExp = /^sancti:.*:2:.*/;
export const PATTERN_SANCTI_CLASS_3: RegExp = /^sancti:.*:3:.*/;
export const PATTERN_SANCTI_CLASS_4: RegExp = /^sancti:.*:4:.*/;
export const PATTERN_SANCTI_CLASS_1_OR_2: RegExp = /^sancti:.*:[12]:.*/;
export const PATTERN_CLASS_1: RegExp = /^[a-z]+:.*:1:.*/;
export const PATTERN_CLASS_2: RegExp = /^[a-z]+:.*:2:.*/;
export const PATTERN_CLASS_3: RegExp = /^[a-z]+:.*:3:.*/;
export const PATTERN_COMMEMORATION: string = "wspomnienie";
export const PATTERN_ALLELUIA: RegExp = /allel[uú][ij]a.*/i;
export const PATTERN_TRACT: RegExp = /.*tra[ck]t.*/i;

export const INTROIT: string = "Introitus";
export const ORATIO: string = "Oratio";
export const LECTIO: string = "Lectio";
export const TRACTUS: string = "Tractus";
export const GRADUALE: string = "Graduale";
export const GRADUALE_PASCHAL: string = "GradualeP";
export const EVANGELIUM: string = "Evangelium";
export const OFFERTORIUM: string = "Offertorium";
export const SECRETA: string = "Secreta";
export const COMMUNIO: string = "Communio";
export const POSTCOMMUNIO: string = "Postcommunio";
export const COMMEMORATION: string = "Commemoratio";
export const COMMEMORATED_ORATIO: string = "Commemoratio Oratio";
export const COMMEMORATED_SECRETA: string = "Commemoratio Secreta";
export const COMMEMORATED_POSTCOMMUNIO: string = "Commemoratio Postcommunio";
export const PREFATIO: string = "Prefatio";

export const TEMPORA_RANK_MAP: {
  pattern: RegExp;
  month: number;
  day: number;
  rank: number;
}[] = [
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 17, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 18, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 19, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 20, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 21, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 22, rank: 2 },
  { pattern: PATTERN_ADVENT_FERIA, month: 11, day: 23, rank: 2 },
];

export const VISIBLE_SECTIONS = [
  "Comment",
  // Atypical sections
  // 02-02, feast of the Purification of the B.V.M.
  "De Benedictione Candelarum",
  "De Distributione Candelarum",
  "De Processione",
  // Quad6-0r, Dominica II Passionis seu in Palmis
  "Benedictio Palmorum",
  "De distributione ramorum",
  "De lectione Evangelica",
  "De processione cum ramis benedictis",
  "Hymnus ad Christum Regem",
  // Quad6-5r, Feria Sexta in Parasceve
  "Lectiones",
  "Passio",
  "Oratio Fidelium",
  "Crucis Adoratione",
  "CommunioQ",
  // Quad6-5r, Sabbato Sancto
  "Benedictio ignis",
  "De benedictione cerei Paschalis",
  "De solemni processione",
  "De praeconio paschali",
  "De lectionibus",
  "De prima parte Litaniarum",
  "De benedictione aquae baptismalis",
  "De renovatione promissionum baptismatis",
  "De altera parte Litaniarum",
  "De Missa solemni Vigiliae paschalis",
  // Feria IV Cinerum
  "Benedictio cinerum",
  // Common sections
  INTROIT,
  ORATIO,
  "LectioL1",
  "GradualeL1",
  "OratioL1",
  "LectioL2",
  "GradualeL2",
  "OratioL2",
  "LectioL3",
  "GradualeL3",
  "OratioL3",
  "LectioL4",
  "GradualeL4",
  "OratioL4",
  "LectioL5",
  "GradualeL5",
  "OratioL5",
  COMMEMORATED_ORATIO,
  LECTIO,
  GRADUALE,
  GRADUALE_PASCHAL,
  TRACTUS,
  "Sequentia",
  EVANGELIUM,
  "Maundi", // Quad6-4r, Feria Quinta in Coena Domini
  OFFERTORIUM,
  // 'OffertoriumP',  Ignoring for now
  SECRETA,
  COMMEMORATED_SECRETA,
  PREFATIO,
  "Pro Laudibus", // Quad6-5r, Sabbato Sancto
  "Communicantes",
  COMMUNIO,
  // 'CommunioP',  Ignoring for now
  POSTCOMMUNIO,
  COMMEMORATED_POSTCOMMUNIO,
  "Conclusio", // Quad6-5r, Sabbato Sancto
  "Super populum",
  "Post Missam", // Quad6-4r, Feria Quinta in Coena Domini
  "Denudatione altaris", // Quad6-4r, Feria Quinta in Coena Domini
];

// References to the sections that do not exist in the source files and are ignored
// on purpose as they make sense in the context of Divinum Officium, but not in Missalemeum
// const IGNORED_REFERENCES = [
//   "Oratio Gregem",
//   "Secreta Gregem",
//   "Postcommunio Gregem",
//   "Munda Cor Passionis",
// ];

export const FERIA = ":feria:4:w";
// TEMPORA - days whose dates are not fixed, but are calculated (in most cases depending on Easter Sunday)
export const TEMPORA_EPI1_0 = "tempora:Epi1-0:2:w"; // Feast of the Holy Family
export const TEMPORA_EPI1_0A = "tempora:Epi1-0a:2:w"; // First Sunday after Epiphany
export const TEMPORA_EPI1_1 = "tempora:Epi1-1:4:w"; // Monday after 1st week of Epiphany
export const TEMPORA_EPI1_2 = "tempora:Epi1-2:4:w"; // Tuesday after 1st week of Epiphany
export const TEMPORA_EPI1_3 = "tempora:Epi1-3:4:w"; // Wednesday after 1st week of Epiphany
export const TEMPORA_EPI1_4 = "tempora:Epi1-4:4:w"; // Thursday after 1st week of Epiphany
export const TEMPORA_EPI1_5 = "tempora:Epi1-5:4:w"; // Friday after 1st week of Epiphany
export const TEMPORA_EPI1_6 = "tempora:Epi1-6:4:w"; // Saturday after 1st week of Epiphany
export const TEMPORA_EPI2_0 = "tempora:Epi2-0:2:g"; // Sunday after 2nd week of Epiphany
export const TEMPORA_EPI2_1 = "tempora:Epi2-1:4:g"; // Monday after 2nd week of Epiphany
export const TEMPORA_EPI2_2 = "tempora:Epi2-2:4:g";
export const TEMPORA_EPI2_3 = "tempora:Epi2-3:4:g";
export const TEMPORA_EPI2_4 = "tempora:Epi2-4:4:g";
export const TEMPORA_EPI2_5 = "tempora:Epi2-5:4:g";
export const TEMPORA_EPI2_6 = "tempora:Epi2-6:4:g";
export const TEMPORA_EPI3_0 = "tempora:Epi3-0:2:g";
export const TEMPORA_EPI3_1 = "tempora:Epi3-1:4:g";
export const TEMPORA_EPI3_2 = "tempora:Epi3-2:4:g";
export const TEMPORA_EPI3_3 = "tempora:Epi3-3:4:g";
export const TEMPORA_EPI3_4 = "tempora:Epi3-4:4:g";
export const TEMPORA_EPI3_5 = "tempora:Epi3-5:4:g";
export const TEMPORA_EPI3_6 = "tempora:Epi3-6:4:g";
export const TEMPORA_EPI4_0 = "tempora:Epi4-0:2:g";
export const TEMPORA_EPI4_1 = "tempora:Epi4-1:4:g";
export const TEMPORA_EPI4_2 = "tempora:Epi4-2:4:g";
export const TEMPORA_EPI4_3 = "tempora:Epi4-3:4:g";
export const TEMPORA_EPI4_4 = "tempora:Epi4-4:4:g";
export const TEMPORA_EPI4_5 = "tempora:Epi4-5:4:g";
export const TEMPORA_EPI4_6 = "tempora:Epi4-6:4:g";
export const TEMPORA_EPI5_0 = "tempora:Epi5-0:2:g";
export const TEMPORA_EPI5_1 = "tempora:Epi5-1:4:g";
export const TEMPORA_EPI5_2 = "tempora:Epi5-2:4:g";
export const TEMPORA_EPI5_3 = "tempora:Epi5-3:4:g";
export const TEMPORA_EPI5_4 = "tempora:Epi5-4:4:g";
export const TEMPORA_EPI5_5 = "tempora:Epi5-5:4:g";
export const TEMPORA_EPI5_6 = "tempora:Epi5-6:4:g";
export const TEMPORA_EPI6_0 = "tempora:Epi6-0:2:g";
export const TEMPORA_EPI6_1 = "tempora:Epi6-1:4:g";
export const TEMPORA_EPI6_2 = "tempora:Epi6-2:4:g";
export const TEMPORA_EPI6_3 = "tempora:Epi6-3:4:g";
export const TEMPORA_EPI6_4 = "tempora:Epi6-4:4:g";
export const TEMPORA_EPI6_5 = "tempora:Epi6-5:4:g";
export const TEMPORA_EPI6_6 = "tempora:Epi6-6:4:g";

export const TEMPORA_QUADP1_0 = "tempora:Quadp1-0:2:v"; // Septuagesima Sunday
export const TEMPORA_QUADP1_1 = "tempora:Quadp1-1:4:v";
export const TEMPORA_QUADP1_2 = "tempora:Quadp1-2:4:v";
export const TEMPORA_QUADP1_3 = "tempora:Quadp1-3:4:v";
export const TEMPORA_QUADP1_4 = "tempora:Quadp1-4:4:v";
export const TEMPORA_QUADP1_5 = "tempora:Quadp1-5:4:v";
export const TEMPORA_QUADP1_6 = "tempora:Quadp1-6:4:v";
export const TEMPORA_QUADP2_0 = "tempora:Quadp2-0:2:v"; // Sexagesima Sunday
export const TEMPORA_QUADP2_1 = "tempora:Quadp2-1:4:v";
export const TEMPORA_QUADP2_2 = "tempora:Quadp2-2:4:v";
export const TEMPORA_QUADP2_3 = "tempora:Quadp2-3:4:v";
export const TEMPORA_QUADP2_4 = "tempora:Quadp2-4:4:v";
export const TEMPORA_QUADP2_5 = "tempora:Quadp2-5:4:v";
export const TEMPORA_QUADP2_6 = "tempora:Quadp2-6:4:v";
export const TEMPORA_QUADP3_0 = "tempora:Quadp3-0:2:v"; // Quinquagesima Sunday
export const TEMPORA_QUADP3_1 = "tempora:Quadp3-1:4:v";
export const TEMPORA_QUADP3_2 = "tempora:Quadp3-2:4:v";

export const TEMPORA_QUADP3_3 = "tempora:Quadp3-3:1:v"; // Ash Wednesday
export const TEMPORA_QUADP3_4 = "tempora:Quadp3-4:3:v";
export const TEMPORA_QUADP3_5 = "tempora:Quadp3-5:3:v";
export const TEMPORA_QUADP3_6 = "tempora:Quadp3-6:3:v";
export const TEMPORA_QUAD1_0 = "tempora:Quad1-0:1:v"; // Sunday in 1st week of Lent
export const TEMPORA_QUAD1_1 = "tempora:Quad1-1:3:v"; // Monday in 1st week of Lent
export const TEMPORA_QUAD1_2 = "tempora:Quad1-2:3:v"; // Tuesday in 1st week of Lent
export const TEMPORA_QUAD1_3 = "tempora:Quad1-3:2:v"; // Ember Wednesday of Lent
export const TEMPORA_QUAD1_4 = "tempora:Quad1-4:3:v"; // Thursday in 1st week of Lent
export const TEMPORA_QUAD1_5 = "tempora:Quad1-5:2:v"; // Ember Friday of Lent
export const TEMPORA_QUAD1_6 = "tempora:Quad1-6:2:v"; // Ember Saturday of Lent
export const TEMPORA_QUAD2_0 = "tempora:Quad2-0:1:v"; // Sunday in 2nd week of Lent
export const TEMPORA_QUAD2_1 = "tempora:Quad2-1:3:v"; // Monday in 2nd week of Lent
export const TEMPORA_QUAD2_2 = "tempora:Quad2-2:3:v";
export const TEMPORA_QUAD2_3 = "tempora:Quad2-3:3:v";
export const TEMPORA_QUAD2_4 = "tempora:Quad2-4:3:v";
export const TEMPORA_QUAD2_5 = "tempora:Quad2-5:3:v";
export const TEMPORA_QUAD2_6 = "tempora:Quad2-6:3:v";
export const TEMPORA_QUAD3_0 = "tempora:Quad3-0:1:v";
export const TEMPORA_QUAD3_1 = "tempora:Quad3-1:3:v";
export const TEMPORA_QUAD3_2 = "tempora:Quad3-2:3:v";
export const TEMPORA_QUAD3_3 = "tempora:Quad3-3:3:v";
export const TEMPORA_QUAD3_4 = "tempora:Quad3-4:3:v";
export const TEMPORA_QUAD3_5 = "tempora:Quad3-5:3:v";
export const TEMPORA_QUAD3_6 = "tempora:Quad3-6:3:v";
export const TEMPORA_QUAD4_0 = "tempora:Quad4-0:1:v";
export const TEMPORA_QUAD4_1 = "tempora:Quad4-1:3:v";
export const TEMPORA_QUAD4_2 = "tempora:Quad4-2:3:v";
export const TEMPORA_QUAD4_3 = "tempora:Quad4-3:3:v";
export const TEMPORA_QUAD4_4 = "tempora:Quad4-4:3:v";
export const TEMPORA_QUAD4_5 = "tempora:Quad4-5:3:v";
export const TEMPORA_QUAD4_6 = "tempora:Quad4-6:3:v";
export const TEMPORA_QUAD5_0 = "tempora:Quad5-0:1:v"; // 1st Passion Sunday
export const TEMPORA_QUAD5_1 = "tempora:Quad5-1:3:v";
export const TEMPORA_QUAD5_2 = "tempora:Quad5-2:3:v";
export const TEMPORA_QUAD5_3 = "tempora:Quad5-3:3:v";
export const TEMPORA_QUAD5_4 = "tempora:Quad5-4:3:v";
export const TEMPORA_QUAD5_5 = "tempora:Quad5-5Feria:3:v";
export const TEMPORA_QUAD5_6 = "tempora:Quad5-6:3:v";
export const TEMPORA_QUAD6_0 = "tempora:Quad6-0r:1:rv"; // 2nd Passion Sunday (Palm Sunday)
export const TEMPORA_QUAD6_1 = "tempora:Quad6-1:1:v";
export const TEMPORA_QUAD6_2 = "tempora:Quad6-2:1:v";
export const TEMPORA_QUAD6_3 = "tempora:Quad6-3:1:v";
export const TEMPORA_QUAD6_4 = "tempora:Quad6-4r:1:w"; // Maundy Thursday
export const TEMPORA_QUAD6_5 = "tempora:Quad6-5r:1:bv"; // Good Friday
export const TEMPORA_QUAD6_6 = "tempora:Quad6-6r:1:vw"; // Holy Saturday

export const TEMPORA_PASC0_0 = "tempora:Pasc0-0:1:w"; // Resurrection Sunday
export const TEMPORA_PASC0_1 = "tempora:Pasc0-1:1:w";
export const TEMPORA_PASC0_2 = "tempora:Pasc0-2:1:w";
export const TEMPORA_PASC0_3 = "tempora:Pasc0-3:1:w";
export const TEMPORA_PASC0_4 = "tempora:Pasc0-4:1:w";
export const TEMPORA_PASC0_5 = "tempora:Pasc0-5:1:w";
export const TEMPORA_PASC0_6 = "tempora:Pasc0-6:1:w";
export const TEMPORA_PASC1_0 = "tempora:Pasc1-0:1:w"; // Low Sunday
export const TEMPORA_PASC1_1 = "tempora:Pasc1-1:4:w";
export const TEMPORA_PASC1_2 = "tempora:Pasc1-2:4:w";
export const TEMPORA_PASC1_3 = "tempora:Pasc1-3:4:w";
export const TEMPORA_PASC1_4 = "tempora:Pasc1-4:4:w";
export const TEMPORA_PASC1_5 = "tempora:Pasc1-5:4:w";
export const TEMPORA_PASC1_6 = "tempora:Pasc1-6:4:w";
export const TEMPORA_PASC2_0 = "tempora:Pasc2-0:2:w";
export const TEMPORA_PASC2_1 = "tempora:Pasc2-1:4:w";
export const TEMPORA_PASC2_2 = "tempora:Pasc2-2:4:w";
export const TEMPORA_PASC2_3 = "tempora:Pasc2-3:2:w";
export const TEMPORA_PASC2_4 = "tempora:Pasc2-4Feria:4:w";
export const TEMPORA_PASC2_5 = "tempora:Pasc2-5Feria:4:w";
export const TEMPORA_PASC2_6 = "tempora:Pasc2-6Feria:4:w";
export const TEMPORA_PASC3_0 = "tempora:Pasc3-0r:2:w";
export const TEMPORA_PASC3_1 = "tempora:Pasc3-1Feria:4:w";
export const TEMPORA_PASC3_2 = "tempora:Pasc3-2Feria:4:w";
export const TEMPORA_PASC3_3 = "tempora:Pasc3-3Feria:4:w";
export const TEMPORA_PASC3_4 = "tempora:Pasc3-4:4:w";
export const TEMPORA_PASC3_5 = "tempora:Pasc3-5:4:w";
export const TEMPORA_PASC3_6 = "tempora:Pasc3-6:4:w";
export const TEMPORA_PASC4_0 = "tempora:Pasc4-0:2:w";
export const TEMPORA_PASC4_1 = "tempora:Pasc4-1:4:w";
export const TEMPORA_PASC4_2 = "tempora:Pasc4-2:4:w";
export const TEMPORA_PASC4_3 = "tempora:Pasc4-3:4:w";
export const TEMPORA_PASC4_4 = "tempora:Pasc4-4:4:w";
export const TEMPORA_PASC4_5 = "tempora:Pasc4-5:4:w";
export const TEMPORA_PASC4_6 = "tempora:Pasc4-6:4:w";
export const TEMPORA_PASC5_0 = "tempora:Pasc5-0:2:w";
export const TEMPORA_PASC5_1 = "tempora:Pasc5-1:4:v";
export const TEMPORA_PASC5_2 = "tempora:Pasc5-2:4:w";
export const TEMPORA_PASC5_3 = "tempora:Pasc5-3:2:w"; // Vigil of Ascension

export const TEMPORA_PASC5_4 = "tempora:Pasc5-4:1:w"; // Ascension
export const TEMPORA_PASC5_5 = "tempora:Pasc5-5:4:w";
export const TEMPORA_PASC5_6 = "tempora:Pasc5-6:4:w";
export const TEMPORA_PASC6_0 = "tempora:Pasc6-0:2:w";
export const TEMPORA_PASC6_1 = "tempora:Pasc6-1:4:w";
export const TEMPORA_PASC6_2 = "tempora:Pasc6-2:4:w";
export const TEMPORA_PASC6_3 = "tempora:Pasc6-3:4:w";
export const TEMPORA_PASC6_4 = "tempora:Pasc6-4r:4:w";
export const TEMPORA_PASC6_5 = "tempora:Pasc6-5:4:w";
export const TEMPORA_PASC6_6 = "tempora:Pasc6-6:1:r"; // Vigil of Pentecost

export const TEMPORA_PASC7_0 = "tempora:Pasc7-0:1:r"; // Pentecost
export const TEMPORA_PASC7_1 = "tempora:Pasc7-1:1:r"; // Whit Monday
export const TEMPORA_PASC7_2 = "tempora:Pasc7-2:1:r";
export const TEMPORA_PASC7_3 = "tempora:Pasc7-3:1:r"; // Ember Wednesday in Octave of Pentecost
export const TEMPORA_PASC7_4 = "tempora:Pasc7-4:1:r";
export const TEMPORA_PASC7_5 = "tempora:Pasc7-5:1:r"; // Ember Friday in Octave of Pentecost
export const TEMPORA_PASC7_6 = "tempora:Pasc7-6:1:r"; // Ember Saturday in Octave of Pentecost
export const TEMPORA_PENT01_0A = "tempora:Pent01-0a:2:g"; // 1st Sunday after Pentecost
export const TEMPORA_PENT01_0 = "tempora:Pent01-0r:1:w"; // Trinity Sunday
export const TEMPORA_PENT01_1 = "tempora:Pent01-1:4:g";
export const TEMPORA_PENT01_2 = "tempora:Pent01-2:4:g";
export const TEMPORA_PENT01_3 = "tempora:Pent01-3:4:g";
export const TEMPORA_PENT01_4 = "tempora:Pent01-4:1:w"; // Corpus Christi
export const TEMPORA_PENT01_5 = "tempora:Pent01-5:4:g";
export const TEMPORA_PENT01_6 = "tempora:Pent01-6:4:g";
export const TEMPORA_PENT02_0 = "tempora:Pent02-0r:2:g"; // Sunday in 2nd week after Pentecost
export const TEMPORA_PENT02_1 = "tempora:Pent02-1:4:g"; // Monday in 2nd week after Pentecost
export const TEMPORA_PENT02_2 = "tempora:Pent02-2:4:g"; // Tuesday in 2nd week after Pentecost
export const TEMPORA_PENT02_3 = "tempora:Pent02-3:4:g"; // Wednesday in 2nd week after Pentecost
export const TEMPORA_PENT02_4 = "tempora:Pent02-4:4:g"; // Thursday in 2nd week after Pentecost
export const TEMPORA_PENT02_5 = "tempora:Pent02-5:1:w"; // Feast of the Sacred Heart
export const TEMPORA_PENT02_6 = "tempora:Pent02-6Feria:4:g"; // Saturday in 2nd week after Pentecost
export const TEMPORA_PENT03_0 = "tempora:Pent03-0r:2:g"; // Sunday in 3rd week after Pentecost
export const TEMPORA_PENT03_1 = "tempora:Pent03-1Feria:4:g";
export const TEMPORA_PENT03_2 = "tempora:Pent03-2Feria:4:g";
export const TEMPORA_PENT03_3 = "tempora:Pent03-3Feria:4:g";
export const TEMPORA_PENT03_4 = "tempora:Pent03-4Feria:4:g";
export const TEMPORA_PENT03_5 = "tempora:Pent03-5Feria:4:g";
export const TEMPORA_PENT03_6 = "tempora:Pent03-6:4:g";
export const TEMPORA_PENT04_0 = "tempora:Pent04-0:2:g";
export const TEMPORA_PENT04_1 = "tempora:Pent04-1:4:g";
export const TEMPORA_PENT04_2 = "tempora:Pent04-2:4:g";
export const TEMPORA_PENT04_3 = "tempora:Pent04-3:4:g";
export const TEMPORA_PENT04_4 = "tempora:Pent04-4:4:g";
export const TEMPORA_PENT04_5 = "tempora:Pent04-5:4:g";
export const TEMPORA_PENT04_6 = "tempora:Pent04-6:4:g";
export const TEMPORA_PENT05_0 = "tempora:Pent05-0:2:g";
export const TEMPORA_PENT05_1 = "tempora:Pent05-1:4:g";
export const TEMPORA_PENT05_2 = "tempora:Pent05-2:4:g";
export const TEMPORA_PENT05_3 = "tempora:Pent05-3:4:g";
export const TEMPORA_PENT05_4 = "tempora:Pent05-4:4:g";
export const TEMPORA_PENT05_5 = "tempora:Pent05-5:4:g";
export const TEMPORA_PENT05_6 = "tempora:Pent05-6:4:g";
export const TEMPORA_PENT06_0 = "tempora:Pent06-0:2:g";
export const TEMPORA_PENT06_1 = "tempora:Pent06-1:4:g";
export const TEMPORA_PENT06_2 = "tempora:Pent06-2:4:g";
export const TEMPORA_PENT06_3 = "tempora:Pent06-3:4:g";
export const TEMPORA_PENT06_4 = "tempora:Pent06-4:4:g";
export const TEMPORA_PENT06_5 = "tempora:Pent06-5:4:g";
export const TEMPORA_PENT06_6 = "tempora:Pent06-6:4:g";
export const TEMPORA_PENT07_0 = "tempora:Pent07-0:2:g";
export const TEMPORA_PENT07_1 = "tempora:Pent07-1:4:g";
export const TEMPORA_PENT07_2 = "tempora:Pent07-2:4:g";
export const TEMPORA_PENT07_3 = "tempora:Pent07-3:4:g";
export const TEMPORA_PENT07_4 = "tempora:Pent07-4:4:g";
export const TEMPORA_PENT07_5 = "tempora:Pent07-5:4:g";
export const TEMPORA_PENT07_6 = "tempora:Pent07-6:4:g";
export const TEMPORA_PENT08_0 = "tempora:Pent08-0:2:g";
export const TEMPORA_PENT08_1 = "tempora:Pent08-1:4:g";
export const TEMPORA_PENT08_2 = "tempora:Pent08-2:4:g";
export const TEMPORA_PENT08_3 = "tempora:Pent08-3:4:g";
export const TEMPORA_PENT08_4 = "tempora:Pent08-4:4:g";
export const TEMPORA_PENT08_5 = "tempora:Pent08-5:4:g";
export const TEMPORA_PENT08_6 = "tempora:Pent08-6:4:g";
export const TEMPORA_PENT09_0 = "tempora:Pent09-0:2:g";
export const TEMPORA_PENT09_1 = "tempora:Pent09-1:4:g";
export const TEMPORA_PENT09_2 = "tempora:Pent09-2:4:g";
export const TEMPORA_PENT09_3 = "tempora:Pent09-3:4:g";
export const TEMPORA_PENT09_4 = "tempora:Pent09-4:4:g";
export const TEMPORA_PENT09_5 = "tempora:Pent09-5:4:g";
export const TEMPORA_PENT09_6 = "tempora:Pent09-6:4:g";
export const TEMPORA_PENT10_0 = "tempora:Pent10-0:2:g";
export const TEMPORA_PENT10_1 = "tempora:Pent10-1:4:g";
export const TEMPORA_PENT10_2 = "tempora:Pent10-2:4:g";
export const TEMPORA_PENT10_3 = "tempora:Pent10-3:4:g";
export const TEMPORA_PENT10_4 = "tempora:Pent10-4:4:g";
export const TEMPORA_PENT10_5 = "tempora:Pent10-5:4:g";
export const TEMPORA_PENT10_6 = "tempora:Pent10-6:4:g";
export const TEMPORA_PENT11_0 = "tempora:Pent11-0:2:g";
export const TEMPORA_PENT11_1 = "tempora:Pent11-1:4:g";
export const TEMPORA_PENT11_2 = "tempora:Pent11-2:4:g";
export const TEMPORA_PENT11_3 = "tempora:Pent11-3:4:g";
export const TEMPORA_PENT11_4 = "tempora:Pent11-4:4:g";
export const TEMPORA_PENT11_5 = "tempora:Pent11-5:4:g";
export const TEMPORA_PENT11_6 = "tempora:Pent11-6:4:g";
export const TEMPORA_PENT12_0 = "tempora:Pent12-0:2:g";
export const TEMPORA_PENT12_1 = "tempora:Pent12-1:4:g";
export const TEMPORA_PENT12_2 = "tempora:Pent12-2:4:g";
export const TEMPORA_PENT12_3 = "tempora:Pent12-3:4:g";
export const TEMPORA_PENT12_4 = "tempora:Pent12-4:4:g";
export const TEMPORA_PENT12_5 = "tempora:Pent12-5:4:g";
export const TEMPORA_PENT12_6 = "tempora:Pent12-6:4:g";
export const TEMPORA_PENT13_0 = "tempora:Pent13-0:2:g";
export const TEMPORA_PENT13_1 = "tempora:Pent13-1:4:g";
export const TEMPORA_PENT13_2 = "tempora:Pent13-2:4:g";
export const TEMPORA_PENT13_3 = "tempora:Pent13-3:4:g";
export const TEMPORA_PENT13_4 = "tempora:Pent13-4:4:g";
export const TEMPORA_PENT13_5 = "tempora:Pent13-5:4:g";
export const TEMPORA_PENT13_6 = "tempora:Pent13-6:4:g";
export const TEMPORA_PENT14_0 = "tempora:Pent14-0:2:g";
export const TEMPORA_PENT14_1 = "tempora:Pent14-1:4:g";
export const TEMPORA_PENT14_2 = "tempora:Pent14-2:4:g";
export const TEMPORA_PENT14_3 = "tempora:Pent14-3:4:g";
export const TEMPORA_PENT14_4 = "tempora:Pent14-4:4:g";
export const TEMPORA_PENT14_5 = "tempora:Pent14-5:4:g";
export const TEMPORA_PENT14_6 = "tempora:Pent14-6:4:g";
export const TEMPORA_PENT15_0 = "tempora:Pent15-0:2:g";
export const TEMPORA_PENT15_1 = "tempora:Pent15-1:4:g";
export const TEMPORA_PENT15_2 = "tempora:Pent15-2:4:g";
export const TEMPORA_PENT15_3 = "tempora:Pent15-3:4:g";
export const TEMPORA_PENT15_4 = "tempora:Pent15-4:4:g";
export const TEMPORA_PENT15_5 = "tempora:Pent15-5:4:g";
export const TEMPORA_PENT15_6 = "tempora:Pent15-6:4:g";
export const TEMPORA_PENT16_0 = "tempora:Pent16-0:2:g";
export const TEMPORA_PENT16_1 = "tempora:Pent16-1:4:g";
export const TEMPORA_PENT16_2 = "tempora:Pent16-2:4:g";
export const TEMPORA_PENT16_3 = "tempora:Pent16-3:4:g";
export const TEMPORA_PENT16_4 = "tempora:Pent16-4:4:g";
export const TEMPORA_PENT16_5 = "tempora:Pent16-5:4:g";
export const TEMPORA_PENT16_6 = "tempora:Pent16-6:4:g";
export const TEMPORA_PENT17_0 = "tempora:Pent17-0:2:g";
export const TEMPORA_PENT17_1 = "tempora:Pent17-1:4:g";
export const TEMPORA_PENT17_2 = "tempora:Pent17-2:4:g";
export const TEMPORA_PENT17_3 = "tempora:Pent17-3:4:g";
export const TEMPORA_PENT17_4 = "tempora:Pent17-4:4:g";
export const TEMPORA_PENT17_5 = "tempora:Pent17-5:4:g";
export const TEMPORA_PENT17_6 = "tempora:Pent17-6:4:g";
export const TEMPORA_PENT18_0 = "tempora:Pent18-0:2:g";
export const TEMPORA_PENT18_1 = "tempora:Pent18-1:4:g";
export const TEMPORA_PENT18_2 = "tempora:Pent18-2:4:g";
export const TEMPORA_PENT18_3 = "tempora:Pent18-3:4:g";
export const TEMPORA_PENT18_4 = "tempora:Pent18-4:4:g";
export const TEMPORA_PENT18_5 = "tempora:Pent18-5:4:g";
export const TEMPORA_PENT18_6 = "tempora:Pent18-6:4:g";
export const TEMPORA_PENT19_0 = "tempora:Pent19-0:2:g";
export const TEMPORA_PENT19_1 = "tempora:Pent19-1:4:g";
export const TEMPORA_PENT19_2 = "tempora:Pent19-2:4:g";
export const TEMPORA_PENT19_3 = "tempora:Pent19-3:4:g";
export const TEMPORA_PENT19_4 = "tempora:Pent19-4:4:g";
export const TEMPORA_PENT19_5 = "tempora:Pent19-5:4:g";
export const TEMPORA_PENT19_6 = "tempora:Pent19-6:4:g";
export const TEMPORA_PENT20_0 = "tempora:Pent20-0:2:g";
export const TEMPORA_PENT20_1 = "tempora:Pent20-1:4:g";
export const TEMPORA_PENT20_2 = "tempora:Pent20-2:4:g";
export const TEMPORA_PENT20_3 = "tempora:Pent20-3:4:g";
export const TEMPORA_PENT20_4 = "tempora:Pent20-4:4:g";
export const TEMPORA_PENT20_5 = "tempora:Pent20-5:4:g";
export const TEMPORA_PENT20_6 = "tempora:Pent20-6:4:g";
export const TEMPORA_PENT21_0 = "tempora:Pent21-0:2:g";
export const TEMPORA_PENT21_1 = "tempora:Pent21-1:4:g";
export const TEMPORA_PENT21_2 = "tempora:Pent21-2:4:g";
export const TEMPORA_PENT21_3 = "tempora:Pent21-3:4:g";
export const TEMPORA_PENT21_4 = "tempora:Pent21-4:4:g";
export const TEMPORA_PENT21_5 = "tempora:Pent21-5:4:g";
export const TEMPORA_PENT21_6 = "tempora:Pent21-6:4:g";
export const TEMPORA_PENT22_0 = "tempora:Pent22-0:2:g";
export const TEMPORA_PENT22_1 = "tempora:Pent22-1:4:g";
export const TEMPORA_PENT22_2 = "tempora:Pent22-2:4:g";
export const TEMPORA_PENT22_3 = "tempora:Pent22-3:4:g";
export const TEMPORA_PENT22_4 = "tempora:Pent22-4:4:g";
export const TEMPORA_PENT22_5 = "tempora:Pent22-5:4:g";
export const TEMPORA_PENT22_6 = "tempora:Pent22-6:4:g";
export const TEMPORA_PENT23_0 = "tempora:Pent23-0:2:g";
export const TEMPORA_PENT23_1 = "tempora:Pent23-1:4:g";
export const TEMPORA_PENT23_2 = "tempora:Pent23-2:4:g";
export const TEMPORA_PENT23_3 = "tempora:Pent23-3:4:g";
export const TEMPORA_PENT23_4 = "tempora:Pent23-4:4:g";
export const TEMPORA_PENT23_5 = "tempora:Pent23-5:4:g";
export const TEMPORA_PENT23_6 = "tempora:Pent23-6:4:g";

export const TEMPORA_PENT_3 = "tempora:093-3:2:v"; // Ember Wednesday in September
export const TEMPORA_PENT_5 = "tempora:093-5:2:v"; // Ember Friday in September
export const TEMPORA_PENT_6 = "tempora:093-6:2:v"; // Ember Saturday in September

export const TEMPORA_PENT24_0 = "tempora:Pent24-0:2:g";
export const TEMPORA_PENT24_1 = "tempora:Pent24-1:4:g";
export const TEMPORA_PENT24_2 = "tempora:Pent24-2:4:g";
export const TEMPORA_PENT24_3 = "tempora:Pent24-3:4:g";
export const TEMPORA_PENT24_4 = "tempora:Pent24-4:4:g";
export const TEMPORA_PENT24_5 = "tempora:Pent24-5:4:g";
export const TEMPORA_PENT24_6 = "tempora:Pent24-6:4:g";

export const TEMPORA_ADV1_0 = "tempora:Adv1-0:1:v"; // Sunday in 1st week of Advent
export const TEMPORA_ADV1_1 = "tempora:Adv1-1:3:v"; // Monday in 1st week of Advent
export const TEMPORA_ADV1_2 = "tempora:Adv1-2:3:v"; // Tuesday in 1st week of Advent
export const TEMPORA_ADV1_3 = "tempora:Adv1-3:3:v"; // Wednesday in 1st week of Advent
export const TEMPORA_ADV1_4 = "tempora:Adv1-4:3:v"; // Thursday in 1st week of Advent
export const TEMPORA_ADV1_5 = "tempora:Adv1-5:3:v"; // Friday in 1st week of Advent
export const TEMPORA_ADV1_6 = "tempora:Adv1-6:3:v"; // Saturday in 1st week of Advent
export const TEMPORA_ADV2_0 = "tempora:Adv2-0:1:v";
export const TEMPORA_ADV2_1 = "tempora:Adv2-1:3:v";
export const TEMPORA_ADV2_2 = "tempora:Adv2-2:3:v";
export const TEMPORA_ADV2_3 = "tempora:Adv2-3:3:v";
export const TEMPORA_ADV2_4 = "tempora:Adv2-4:3:v";
export const TEMPORA_ADV2_5 = "tempora:Adv2-5:3:v";
export const TEMPORA_ADV2_6 = "tempora:Adv2-6:3:v";
export const TEMPORA_ADV3_0 = "tempora:Adv3-0:1:v";
export const TEMPORA_ADV3_1 = "tempora:Adv3-1:3:v";
export const TEMPORA_ADV3_2 = "tempora:Adv3-2:3:v";
export const TEMPORA_ADV3_3 = "tempora:Adv3-3:2:v"; // Ember Wednesday in Advent
export const TEMPORA_ADV3_4 = "tempora:Adv3-4:3:v";
export const TEMPORA_ADV3_5 = "tempora:Adv3-5:2:v"; // Ember Friday in Advent
export const TEMPORA_ADV3_6 = "tempora:Adv3-6:2:v"; // Ember Saturday in Advent
export const TEMPORA_ADV4_0 = "tempora:Adv4-0:1:v";
export const TEMPORA_ADV4_1 = "tempora:Adv4-1:3:v";
export const TEMPORA_ADV4_2 = "tempora:Adv4-2:3:v";
export const TEMPORA_ADV4_3 = "tempora:Adv4-3:3:v";
export const TEMPORA_ADV4_4 = "tempora:Adv4-4:3:v";
export const TEMPORA_ADV4_5 = "tempora:Adv4-5:3:v";
export const TEMPORA_NAT1_0 = "tempora:Nat1-0:2:w"; // Sunday in the Octave of Nativity
export const TEMPORA_NAT1_1 = "tempora:Nat1-1:2:w"; // Ordinary day in the Octave of Nativity
export const TEMPORA_NAT2_0 = "tempora:Nat2-0:2:w"; // Feast of the Holy Name of Jesus

// SANCTI - days which have fixed date
export const SANCTI_10_DUr = "sancti:10-DUr:1:w"; // Feast of Christ the King; last Sunday of October
export const SANCTI_01_01 = "sancti:01-01:1:w"; // Octave of the Nativity
export const SANCTI_01_06 = "sancti:01-06:1:w"; // Epiphany
export const SANCTI_01_13 = "sancti:01-13:2:w"; // Baptism of the Lord
export const SANCTI_01_14 = "sancti:01-14:3:w";
export const SANCTI_01_15 = "sancti:01-15:3:w";
export const SANCTI_01_16 = "sancti:01-16:3:r";
export const SANCTI_01_17 = "sancti:01-17:3:w";
export const SANCTI_01_18 = "sancti:01-18r:4:w";
export const SANCTI_01_19 = "sancti:01-19:4:r";
export const SANCTI_01_20 = "sancti:01-20:3:r";
export const SANCTI_01_21 = "sancti:01-21:3:r";
export const SANCTI_01_22 = "sancti:01-22:3:r";
export const SANCTI_01_23 = "sancti:01-23:3:w";
export const SANCTI_01_24 = "sancti:01-24:3:r";
export const SANCTI_01_25 = "sancti:01-25r:3:w";
export const SANCTI_01_26 = "sancti:01-26:3:r";
export const SANCTI_01_27 = "sancti:01-27:3:w";
export const SANCTI_01_28 = "sancti:01-28:3:w";
export const SANCTI_01_29 = "sancti:01-29:3:w";
export const SANCTI_01_30 = "sancti:01-30:3:r";
export const SANCTI_01_31 = "sancti:01-31:3:w";

export const SANCTI_02_01 = "sancti:02-01:3:r";
export const SANCTI_02_02 = "sancti:02-02:2:w"; // Feast of the Purification of the Blessed Virgin Mary
export const SANCTI_02_03 = "sancti:02-03:4:r";
export const SANCTI_02_04 = "sancti:02-04:3:w";
export const SANCTI_02_05 = "sancti:02-05:3:r";
export const SANCTI_02_06 = "sancti:02-06:3:w";
export const SANCTI_02_07 = "sancti:02-07:3:w";
export const SANCTI_02_08 = "sancti:02-08:3:w";
export const SANCTI_02_09 = "sancti:02-09:3:w";
export const SANCTI_02_10 = "sancti:02-10:3:w";
export const SANCTI_02_11 = "sancti:02-11:3:w";
export const SANCTI_02_12 = "sancti:02-12:3:w";
export const SANCTI_02_14 = "sancti:02-14:4:r";
export const SANCTI_02_15 = "sancti:02-15:4:r";
export const SANCTI_02_18 = "sancti:02-18:4:r";
export const SANCTI_02_22 = "sancti:02-22:2:w"; // Feast of the Chair of Saint Peter
export const SANCTI_02_23 = "sancti:02-23:3:w";
export const SANCTI_02_24 = "sancti:02-24:2:r"; // St. Matthias, Apostle
export const SANCTI_02_27 = "sancti:02-27:3:w";

export const SANCTI_03_04 = "sancti:03-04:3:w";
export const SANCTI_03_06 = "sancti:03-06:3:r";
export const SANCTI_03_07 = "sancti:03-07:3:w";
export const SANCTI_03_08 = "sancti:03-08:3:w";
export const SANCTI_03_08PL = "sancti:03-08pl:3:w";
export const SANCTI_03_09 = "sancti:03-09:3:w";
export const SANCTI_03_10 = "sancti:03-10:3:r";
export const SANCTI_03_12 = "sancti:03-12:3:w";
export const SANCTI_03_15PL = "sancti:03-15pl:3:w";
export const SANCTI_03_17 = "sancti:03-17:3:w";
export const SANCTI_03_17PL = "sancti:03-17pl:3:w";
export const SANCTI_03_18 = "sancti:03-18:3:w";
export const SANCTI_03_19 = "sancti:03-19:1:w"; // Saint Joseph's Day
export const SANCTI_03_21 = "sancti:03-21:3:w";
export const SANCTI_03_24 = "sancti:03-24:3:w";
export const SANCTI_03_25 = "sancti:03-25:1:w"; // Annunciation
export const SANCTI_03_27 = "sancti:03-27:3:w";
export const SANCTI_03_28 = "sancti:03-28:3:w";

export const SANCTI_04_02 = "sancti:04-02:3:w";
export const SANCTI_04_04 = "sancti:04-04:3:w";
export const SANCTI_04_05 = "sancti:04-05:3:w";
export const SANCTI_04_11 = "sancti:04-11:3:w";
export const SANCTI_04_13 = "sancti:04-13:3:r";
export const SANCTI_04_14 = "sancti:04-14:3:r";
export const SANCTI_04_17 = "sancti:04-17:4:r";
export const SANCTI_04_21 = "sancti:04-21:3:w";
export const SANCTI_04_22 = "sancti:04-22:3:r";
export const SANCTI_04_23 = "sancti:04-23:4:r";
export const SANCTI_04_23PL = "sancti:04-23pl:1:r";
export const SANCTI_04_24 = "sancti:04-24:3:r";
export const SANCTI_04_25 = "sancti:04-25:2:r"; // St. Mark, Evangelist
export const SANCTI_04_26 = "sancti:04-26:3:r";
export const SANCTI_04_27 = "sancti:04-27:3:w";
export const SANCTI_04_28 = "sancti:04-28:3:w";
export const SANCTI_04_29 = "sancti:04-29:3:r";
export const SANCTI_04_30 = "sancti:04-30:3:w";

export const SANCTI_05_01 = "sancti:05-01:2:r"; // SS. Philip and James, Apostles
export const SANCTI_05_02 = "sancti:05-02:3:w";
export const SANCTI_05_03 = "sancti:05-03:2:r";
export const SANCTI_05_04 = "sancti:05-04:3:w";
export const SANCTI_05_05 = "sancti:05-05:3:w";
export const SANCTI_05_06 = "sancti:05-06:3:r";
export const SANCTI_05_07 = "sancti:05-07:3:r";
export const SANCTI_05_08 = "sancti:05-08:2:w";
export const SANCTI_05_09 = "sancti:05-09:3:w";
export const SANCTI_05_10 = "sancti:05-10:3:w";
export const SANCTI_05_12 = "sancti:05-12:3:r";
export const SANCTI_05_13 = "sancti:05-13:3:w";
export const SANCTI_05_14 = "sancti:05-14:4:r";
export const SANCTI_05_15 = "sancti:05-15:3:w";
export const SANCTI_05_16 = "sancti:05-16:4:w";
export const SANCTI_05_16PL = "sancti:05-16pl:3:w";
export const SANCTI_05_17 = "sancti:05-17:3:w";
export const SANCTI_05_18 = "sancti:05-18:3:r";
export const SANCTI_05_19 = "sancti:05-19:3:w";
export const SANCTI_05_20 = "sancti:05-20:3:w";
export const SANCTI_05_24PL = "sancti:05-24pl:2:w";
export const SANCTI_05_25 = "sancti:05-25:3:w";
export const SANCTI_05_26 = "sancti:05-26:3:w";
export const SANCTI_05_27 = "sancti:05-27:3:w";
export const SANCTI_05_28 = "sancti:05-28:3:w";
export const SANCTI_05_29 = "sancti:05-29:3:w";
export const SANCTI_05_30 = "sancti:05-30:4:r";
export const SANCTI_05_31 = "sancti:05-31:2:w"; // Mary the Queen

export const SANCTI_06_01 = "sancti:06-01:3:w";
export const SANCTI_06_01PL = "sancti:06-01pl:3:w";
export const SANCTI_06_02 = "sancti:06-02:4:r";
export const SANCTI_06_04 = "sancti:06-04:3:w";
export const SANCTI_06_05 = "sancti:06-05:3:r";
export const SANCTI_06_06 = "sancti:06-06:3:w";
export const SANCTI_06_09 = "sancti:06-09:4:r";
export const SANCTI_06_10 = "sancti:06-10:3:w";
export const SANCTI_06_10PL = "sancti:06-10pl:3:w";
export const SANCTI_06_11 = "sancti:06-11:3:r";
export const SANCTI_06_12 = "sancti:06-12:3:r";
export const SANCTI_06_13 = "sancti:06-13:3:w";
export const SANCTI_06_14 = "sancti:06-14:3:w";
export const SANCTI_06_15 = "sancti:06-15:3:w";
export const SANCTI_06_17 = "sancti:06-17r:3:w";
export const SANCTI_06_18 = "sancti:06-18:3:r";
export const SANCTI_06_19 = "sancti:06-19:3:r";
export const SANCTI_06_20 = "sancti:06-20:4:r";
export const SANCTI_06_21 = "sancti:06-21:3:w";
export const SANCTI_06_22 = "sancti:06-22:3:w";
export const SANCTI_06_23 = "sancti:06-23:2:v"; // Vigil of st. John Baptist
export const SANCTI_06_24 = "sancti:06-24:1:w"; // St. John Baptist
export const SANCTI_06_25 = "sancti:06-25:3:w";
export const SANCTI_06_26 = "sancti:06-26r:3:r";
export const SANCTI_06_28 = "sancti:06-28:3:r"; // Irineu
export const SANCTI_06_29 = "sancti:06-29:1:r"; // Ss. Peter and Paul
export const SANCTI_06_30 = "sancti:06-30:3:r";

export const SANCTI_07_01 = "sancti:07-01:1:r"; // Feast of the Most Precious Blood
export const SANCTI_07_02 = "sancti:07-02:2:w"; // Feast of the Visitation of the Blessed Virgin Mary
export const SANCTI_07_03 = "sancti:07-03r:3:r";
export const SANCTI_07_05 = "sancti:07-05:3:w";
export const SANCTI_07_07 = "sancti:07-07:3:w";
export const SANCTI_07_08 = "sancti:07-08:3:w";
export const SANCTI_07_10 = "sancti:07-10:3:r";
export const SANCTI_07_11 = "sancti:07-11:4:r";
export const SANCTI_07_12 = "sancti:07-12:3:r";
export const SANCTI_07_14 = "sancti:07-14:3:w";
export const SANCTI_07_15 = "sancti:07-15:3:w";
export const SANCTI_07_16 = "sancti:07-16:4:w";
export const SANCTI_07_17 = "sancti:07-17:4:w";
export const SANCTI_07_18 = "sancti:07-18:3:r";
export const SANCTI_07_18PL = "sancti:07-18pl:3:r";
export const SANCTI_07_19 = "sancti:07-19:3:w";
export const SANCTI_07_20 = "sancti:07-20:3:r";
export const SANCTI_07_20PL = "sancti:07-20pl:3:r";
export const SANCTI_07_21 = "sancti:07-21r:3:w";
export const SANCTI_07_22 = "sancti:07-22:3:w";
export const SANCTI_07_23 = "sancti:07-23:3:w";
export const SANCTI_07_24 = "sancti:07-24r:4:r";
export const SANCTI_07_24PL = "sancti:07-24pl:3:w";
export const SANCTI_07_25 = "sancti:07-25:2:r"; // St. James, Apostle
export const SANCTI_07_26 = "sancti:07-26:2:w"; // St. Anna, Mary's Mother
export const SANCTI_07_27 = "sancti:07-27:4:r";
export const SANCTI_07_28 = "sancti:07-28:3:r";
export const SANCTI_07_29 = "sancti:07-29:3:r";
export const SANCTI_07_30 = "sancti:07-30:4:r";
export const SANCTI_07_31 = "sancti:07-31:3:w";

export const SANCTI_08_01 = "sancti:08-01r:4:r";
export const SANCTI_08_02 = "sancti:08-02:3:r";
export const SANCTI_08_04 = "sancti:08-04:3:w";
export const SANCTI_08_05 = "sancti:08-05:3:w";
export const SANCTI_08_06 = "sancti:08-06:2:r"; // Transfiguration
export const SANCTI_08_07 = "sancti:08-07:3:r";
export const SANCTI_08_08 = "sancti:08-08r:3:r";
export const SANCTI_08_09 = "sancti:08-09t:3:r"; // Vigil of st. Laurent
export const SANCTI_08_10 = "sancti:08-10:2:r"; // St. Laurent
export const SANCTI_08_11 = "sancti:08-11:4:r";
export const SANCTI_08_12 = "sancti:08-12:3:w";
export const SANCTI_08_13 = "sancti:08-13:4:r";
export const SANCTI_08_14 = "sancti:08-14:2:w"; // Vigil of Assumption of Mary
export const SANCTI_08_15 = "sancti:08-15r:1:w"; // Assumption of Mary
export const SANCTI_08_16 = "sancti:08-16:2:w"; // St. Joachim
export const SANCTI_08_17 = "sancti:08-17:3:w";
export const SANCTI_08_18 = "sancti:08-18r:4:w";
export const SANCTI_08_19 = "sancti:08-19:3:w";
export const SANCTI_08_20 = "sancti:08-20:3:w";
export const SANCTI_08_21 = "sancti:08-21:3:w";
export const SANCTI_08_22 = "sancti:08-22r:2:w"; // Immaculate Heart of Mary
export const SANCTI_08_23 = "sancti:08-23:3:w";
export const SANCTI_08_24 = "sancti:08-24:2:r"; // St. Bartholomew, Apostle
export const SANCTI_08_25 = "sancti:08-25:3:w";
export const SANCTI_08_26 = "sancti:08-26:4:r";
export const SANCTI_08_26PL = "sancti:08-26pl:1:w";
export const SANCTI_08_27 = "sancti:08-27:3:w";
export const SANCTI_08_28 = "sancti:08-28:3:r";
export const SANCTI_08_29 = "sancti:08-29:3:r";
export const SANCTI_08_30 = "sancti:08-30:3:r";
export const SANCTI_08_31 = "sancti:08-31:3:w";

export const SANCTI_09_01 = "sancti:09-01:4:w";
export const SANCTI_09_01PL = "sancti:09-01pl:3:w";
export const SANCTI_09_02 = "sancti:09-02:3:w";
export const SANCTI_09_03 = "sancti:09-03r:3:w";
export const SANCTI_09_05 = "sancti:09-05:3:w";
export const SANCTI_09_07PL = "sancti:09-07pl:3:r";
export const SANCTI_09_08 = "sancti:09-08:2:w"; // Nativity of Mary
export const SANCTI_09_09 = "sancti:09-09:4:r";
export const SANCTI_09_10 = "sancti:09-10:3:w";
export const SANCTI_09_11 = "sancti:09-11:4:r";
export const SANCTI_09_12 = "sancti:09-12:3:w";
export const SANCTI_09_14 = "sancti:09-14:2:r"; // Exaltation of the Cross
export const SANCTI_09_15 = "sancti:09-15:2:w"; // The Seven Dolors of the Blessed Virgin Mary
export const SANCTI_09_16 = "sancti:09-16:3:w";
export const SANCTI_09_17 = "sancti:09-17:4:w";
export const SANCTI_09_18 = "sancti:09-18r:3:w";
export const SANCTI_09_19 = "sancti:09-19:3:r";
export const SANCTI_09_20 = "sancti:09-20:4:r";
export const SANCTI_09_21 = "sancti:09-21:2:r"; // St. Matthew, Apostle and Evangelist
export const SANCTI_09_22 = "sancti:09-22:3:w";
export const SANCTI_09_23 = "sancti:09-23:3:r";
export const SANCTI_09_24 = "sancti:09-24:4:w";
export const SANCTI_09_25PL = "sancti:09-25pl:3:w";
export const SANCTI_09_26 = "sancti:09-26:4:r";
export const SANCTI_09_27 = "sancti:09-27:3:r";
export const SANCTI_09_28 = "sancti:09-28:3:r";
export const SANCTI_09_29 = "sancti:09-29:1:w"; // St. Michael the Archangel
export const SANCTI_09_30 = "sancti:09-30r:3:w";

export const SANCTI_10_01 = "sancti:10-01:4:w";
export const SANCTI_10_01PL = "sancti:10-01pl:3:w";
export const SANCTI_10_02 = "sancti:10-02:3:w";
export const SANCTI_10_03 = "sancti:10-03:3:w";
export const SANCTI_10_04 = "sancti:10-04:3:w";
export const SANCTI_10_05 = "sancti:10-05:4:r";
export const SANCTI_10_06 = "sancti:10-06:3:w";
export const SANCTI_10_07 = "sancti:10-07r:2:w"; // Our Lady of the Rosary
export const SANCTI_10_08 = "sancti:10-08r:3:w";
export const SANCTI_10_09 = "sancti:10-09:3:w";
export const SANCTI_10_10 = "sancti:10-10:3:w";
export const SANCTI_10_11 = "sancti:10-11:2:w"; // Maternity of the Blessed Virgin Mary
export const SANCTI_10_13 = "sancti:10-13:3:w";
export const SANCTI_10_14 = "sancti:10-14:3:r";
export const SANCTI_10_15 = "sancti:10-15:3:w";
export const SANCTI_10_16 = "sancti:10-16:3:w";
export const SANCTI_10_17 = "sancti:10-17:3:w";
export const SANCTI_10_18 = "sancti:10-18:2:r"; // St. Luke, Evangelist
export const SANCTI_10_19 = "sancti:10-19:3:w";
export const SANCTI_10_20 = "sancti:10-20:3:w";
export const SANCTI_10_21 = "sancti:10-21:4:w";
export const SANCTI_10_23 = "sancti:10-23r:3:w";
export const SANCTI_10_24 = "sancti:10-24:3:w";
export const SANCTI_10_25 = "sancti:10-25:4:r";
export const SANCTI_10_28 = "sancti:10-28:2:r"; // SS. Simon and Jude, Apostles

export const SANCTI_11_01 = "sancti:11-01:1:w"; // All Saints
export const SANCTI_11_02_1 = "sancti:11-02m1:1:b"; // All Souls' Day
export const SANCTI_11_02_2 = "sancti:11-02m2:1:b";
export const SANCTI_11_02_3 = "sancti:11-02m3:1:b";
export const SANCTI_11_04 = "sancti:11-04r:3:w";
export const SANCTI_11_08 = "sancti:11-08r:4:r";
export const SANCTI_11_09 = "sancti:11-09:2:w"; // Dedication of the Lateran Basilica in Rome
export const SANCTI_11_10 = "sancti:11-10:3:w";
export const SANCTI_11_11 = "sancti:11-11:3:w";
export const SANCTI_11_12 = "sancti:11-12:3:r";
export const SANCTI_11_13 = "sancti:11-13:4:w";
export const SANCTI_11_13PL = "sancti:11-13pl:2:w";
export const SANCTI_11_14 = "sancti:11-14:3:w";
export const SANCTI_11_15 = "sancti:11-15:3:w";
export const SANCTI_11_16 = "sancti:11-16:3:w";
export const SANCTI_11_17 = "sancti:11-17:3:w";
export const SANCTI_11_18 = "sancti:11-18r:3:w";
export const SANCTI_11_19 = "sancti:11-19:3:w";
export const SANCTI_11_20 = "sancti:11-20:3:w";
export const SANCTI_11_21 = "sancti:11-21:3:w";
export const SANCTI_11_22 = "sancti:11-22:3:r";
export const SANCTI_11_23 = "sancti:11-23:3:r";
export const SANCTI_11_24 = "sancti:11-24:3:w";
export const SANCTI_11_25 = "sancti:11-25:3:r";
export const SANCTI_11_26 = "sancti:11-26:3:w";
export const SANCTI_11_29 = "sancti:11-29r:4:r";
export const SANCTI_11_30 = "sancti:11-30:2:r"; // St. Andrew, Apostle

export const SANCTI_12_02 = "sancti:12-02:3:r";
export const SANCTI_12_03 = "sancti:12-03:3:w";
export const SANCTI_12_04 = "sancti:12-04:3:w";
export const SANCTI_12_05 = "sancti:12-05:4:w";
export const SANCTI_12_06 = "sancti:12-06:3:w";
export const SANCTI_12_07 = "sancti:12-07:3:w";
export const SANCTI_12_08 = "sancti:12-08:1:w"; // Immaculate Conception of the Blessed Virgin Mary
export const SANCTI_12_10 = "sancti:12-10:4:r";
export const SANCTI_12_11 = "sancti:12-11:3:w";
export const SANCTI_12_13 = "sancti:12-13r:3:r";
export const SANCTI_12_16 = "sancti:12-16:3:r";
export const SANCTI_12_21 = "sancti:12-21:2:r"; // St. Thomas, Apostle
export const SANCTI_12_24 = "sancti:12-24:1:v"; // Vigil of the Nativity of the Lord
export const SANCTI_12_25_1 = "sancti:12-25m1:1:w"; // Nativity of the Lord
export const SANCTI_12_25_2 = "sancti:12-25m2:1:w";
export const SANCTI_12_25_3 = "sancti:12-25m3:1:w";
export const SANCTI_12_26 = "sancti:12-26:2:r"; // St. Stephen, Protomartyr
export const SANCTI_12_27 = "sancti:12-27:2:w"; // St. John, Apostle and Evangelist
export const SANCTI_12_28 = "sancti:12-28:2:r"; // Holy Innocents
export const SANCTI_12_29 = "sancti:12-29r:4:r";
export const SANCTI_12_31 = "sancti:12-31r:4:w";

// COMMUNE / VOTIVE
//
// export const TEMPORA_C_10A = "tempora:C10a:4:v"; // B. M. V. Saturdays in Advent
// export const TEMPORA_C_10B = "tempora:C10b:4:w"; // B. M. V. Saturdays between Nativity and Purification
// export const TEMPORA_C_10C = "tempora:C10c:4:w"; // B. M. V. Saturdays between Feb 2 and Wednesday in Holy Week
// export const TEMPORA_C_10PASC = "tempora:C10Pasc:4:w"; // B. M. V. Saturdays in Easter period
// export const TEMPORA_C_10T = "tempora:C10t:4:w"; // B. M. V. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
//
export const COMMUNE_C_10A = "commune:C10a:0:w"; // B. V. M. Saturdays in Advent
export const COMMUNE_C_10B = "commune:C10b:0:w"; // B. V. M. Saturdays between Nativity and Purification
export const COMMUNE_C_10C = "commune:C10c:0:w"; // B. V. M. Saturdays between Feb 2 and Wednesday in Holy Week
export const COMMUNE_C_10PASC = "commune:C10Pasc:0:w"; // B. V. M. Saturdays in Easter period
export const COMMUNE_C_10T = "commune:C10t:0:w"; // B. V. M. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
export const VOTIVE_PENT01_0 = "votive:Pent01-0r:0:w"; // Trinity
export const VOTIVE_PENT02_5 = "votive:Pent02-5:0:w"; // Sacred Heart of Jesus
export const VOTIVE_08_22 = "votive:08-22r:0:w"; // Immaculate Heart of B. V. M.
export const VOTIVE_ANGELS = "votive:Angels:0:w";
export const VOTIVE_JOSEPH = "votive:Joseph:0:w";
export const VOTIVE_PETERPAUL = "votive:PeterPaul:0:r";
export const VOTIVE_PETERPAULP = "votive:PeterPaulP:0:r";
export const VOTIVE_APOSTLES = "votive:Apostles:0:r";
export const VOTIVE_APOSTLESP = "votive:ApostlesP:0:r";
export const VOTIVE_HOLYSPIRIT = "votive:HolySpirit:0:r";
export const VOTIVE_HOLYSPIRIT2 = "votive:HolySpirit2:0:r";
export const VOTIVE_BLESSEDSACRAMENT = "votive:BlessedSacrament:0:w";
export const VOTIVE_JESUSETERNALPRIEST = "votive:JesusEternalPriest:0:w";
export const VOTIVE_CROSS = "votive:Cross:0:r";
export const VOTIVE_PASSION = "votive:Passion:0:r";
export const VOTIVE_DEFUNCTORUM = "votive:Defunctorum:0:b";
export const VOTIVE_MORTALITATIS = "votive:TemporeMortalitatis:0:v";
export const VOTIVE_FIDEI_PROPAGATIONE = "votive:FideiPropagatione:0:v";
export const VOTIVE_MATRIMONIUM = "votive:Matrimonium:0:w";

export const EMBER_DAYS = [
  TEMPORA_QUAD1_3, // Ember Wednesday of Lent
  TEMPORA_QUAD1_5, // Ember Friday of Lent
  TEMPORA_QUAD1_6, // Ember Saturday of Lent
  TEMPORA_PENT_3, // Ember Wednesday in September
  TEMPORA_PENT_5, // Ember Friday in September
  TEMPORA_PENT_6, // Ember Saturday in September
  TEMPORA_ADV3_3, // Ember Wednesday in Advent
  TEMPORA_ADV3_5, // Ember Friday in Advent
  TEMPORA_ADV3_6, // Ember Saturday in Advent
];

export const TABLE_OF_PRECEDENCE = [
  // 1st class feasts
  SANCTI_12_25_1, // Nativity
  SANCTI_12_25_2, // Nativity
  SANCTI_12_25_3, // Nativity
  TEMPORA_PASC0_0, // Resurrection Sunday
  TEMPORA_PASC7_0, // Pentecost
  TEMPORA_QUAD6_4, // Maundy Thursday
  TEMPORA_QUAD6_5, // Good Friday
  TEMPORA_QUAD6_6, // Holy Saturday
  SANCTI_01_06, // Epiphany
  TEMPORA_PASC5_4, // Ascension
  TEMPORA_PENT01_0, // Trinity Sunday
  TEMPORA_PENT01_4, // Corpus Christi
  TEMPORA_PENT02_5, // Feast of the Sacred Heart
  SANCTI_10_DUr, // Feast of Christ the King; last Sunday of October
  SANCTI_12_08, // Immaculate Conception of the Blessed Virgin Mary
  SANCTI_08_15, // Assumption of Mary
  SANCTI_12_24, // Vigil of the Nativity of the Lord
  SANCTI_01_01, // Octave of the Nativity
  PATTERN_ADVENT_SUNDAY,
  PATTERN_LENT_SUNDAY,
  TEMPORA_PASC1_0, // Low Sunday
  TEMPORA_QUADP3_3, // Ash Wednesday
  TEMPORA_QUAD6_1, // Monday of Holy Week
  TEMPORA_QUAD6_2, // Tuesday of Holy Week
  TEMPORA_QUAD6_3, // Wednesday of Holy Week
  SANCTI_11_02_1, // All Souls' Day
  SANCTI_11_02_2, // All Souls' Day
  SANCTI_11_02_3, // All Souls' Day
  TEMPORA_PASC6_6, // Vigil of Pentecost
  TEMPORA_PASC0_1, // Resurrection Octave
  TEMPORA_PASC0_2,
  TEMPORA_PASC0_3,
  TEMPORA_PASC0_4,
  TEMPORA_PASC0_5,
  TEMPORA_PASC0_6,
  // TEMPORA_PASC2_3,
  TEMPORA_PASC7_1, // Pentecost Octave
  TEMPORA_PASC7_2,
  TEMPORA_PASC7_3,
  TEMPORA_PASC7_4,
  TEMPORA_PASC7_5,
  TEMPORA_PASC7_6,
  PATTERN_CLASS_1,
  // 2nd class feasts
  TEMPORA_PASC5_3, // Vigil of Ascension
  SANCTI_01_13, // Baptism of the Lord
  SANCTI_08_06, // Transfiguration
  PATTERN_TEMPORA_SUNDAY_CLASS_2,
  PATTERN_CLASS_2,
  SANCTI_12_26, // Octave of Nativity
  SANCTI_12_27,
  SANCTI_12_28,
  SANCTI_12_29,
  SANCTI_12_31,
  // 3rd class feasts
  TEMPORA_QUAD1_1, // Feria in Lent (except Ember Days)
  TEMPORA_QUAD1_2,
  TEMPORA_QUAD1_4,
  TEMPORA_QUAD2_1,
  TEMPORA_QUAD2_2,
  TEMPORA_QUAD2_3,
  TEMPORA_QUAD2_4,
  TEMPORA_QUAD2_5,
  TEMPORA_QUAD2_6,
  TEMPORA_QUAD3_1,
  TEMPORA_QUAD3_2,
  TEMPORA_QUAD3_3,
  TEMPORA_QUAD3_4,
  TEMPORA_QUAD3_5,
  TEMPORA_QUAD3_6,
  TEMPORA_QUAD4_1,
  TEMPORA_QUAD4_2,
  TEMPORA_QUAD4_3,
  TEMPORA_QUAD4_4,
  TEMPORA_QUAD4_5,
  TEMPORA_QUAD4_6,
  TEMPORA_QUAD5_1,
  TEMPORA_QUAD5_2,
  TEMPORA_QUAD5_3,
  TEMPORA_QUAD5_4,
  TEMPORA_QUAD5_5,
  TEMPORA_QUAD5_6,
  PATTERN_CLASS_3,
  // 4th class feasts
  ".*",
];

export const FEASTS_OF_JESUS_CLASS_1_AND_2: string[] = [
  SANCTI_01_06,
  SANCTI_01_13,
  SANCTI_02_02,
  SANCTI_08_06,
];

// Related to propers' printing

export const COMMEMORATION_SECTIONS = [
  COMMEMORATED_ORATIO,
  COMMEMORATED_SECRETA,
  COMMEMORATED_POSTCOMMUNIO,
];

export const CUSTOM_PREFACES = [
  { id: TEMPORA_PENT02_0, preface: PREFATIO_TRINITATE }, // 2nd Sun. after Pentecost - force Trinitate as otherwise it shows communis
  { id: SANCTI_01_01, preface: PREFATIO_NAT },
  { id: TEMPORA_PASC2_3, preface: PREFATIO_JOSEPH },
  { id: SANCTI_01_06, preface: PREFATIO_EPI },
  { id: SANCTI_11_09, preface: PREFATIO_COMMUNIS }, // Consecration of basilica in Lateran
  { id: SANCTI_11_18, preface: PREFATIO_COMMUNIS }, // Consecration of basilica of Peter and Paul
  { id: SANCTI_07_25, preface: PREFATIO_APOSTOLIS }, // st. James, the Apostle
  { id: SANCTI_12_21, preface: PREFATIO_APOSTOLIS }, // st. Thomas, the Apostle
  { id: SANCTI_06_24, preface: PREFATIO_COMMUNIS }, // St. John the Baptist
  { id: PATTERN_ADVENT_FERIA, preface: PREFATIO_COMMUNIS },
  { id: PATTERN_ADVENT_SUNDAY, preface: PREFATIO_TRINITATE },
  { id: PATTERN_EASTER_PREFATIO, preface: PREFATIO_PASCHAL },
  { id: TEMPORA_QUAD6_5, preface: PREFATIO_OMIT },
  { id: PATTERN_LENT_PREFATIO, preface: PREFATIO_LENT }, // Lent until Saturday before Passion Sunday
  { id: PATTERN_ASCENSION_PREFATIO, preface: PREFATIO_ASCENSION }, // From Ascension Sunday till Friday before Pentecost Vigil
];

export const CUSTOM_INTER_READING_SECTIONS: { [id: string]: string } = {
  [SANCTI_04_28]: GRADUALE,
  [SANCTI_05_02]: GRADUALE,
};

export const OBSERVANCES_WITHOUT_OWN_PROPER: RegExp[] = [
  // Advent feria except Ember Days
  /^tempora:Adv[124]-[1-6]/,
  /^tempora:Adv[3]-[124]/,
];

export const REFERENCE_REGEX: RegExp = /^@([\w/\-]*):?([^:]*)[: ]*(.*)/;
export const SECTION_REGEX: RegExp = /^### *(.*)/;
export const SECTION_VERSE: RegExp = /^! *(.*)/;

export const TITLES: Record<string, string> = {
  [TEMPORA_EPI1_0]: "Sanctæ Familiæ Jesu Mariæ Joseph",
  [TEMPORA_EPI1_1]: "Feria II infra Hebd I post Epiphaniam",
  [TEMPORA_EPI1_2]: "Feria III infra Hebd I post Epiphaniam",
  [TEMPORA_EPI1_3]: "Feria IV infra Hebd I post Epiphaniam",
  [TEMPORA_EPI1_4]: "Feria V infra Hebd I post Epiphaniam",
  [TEMPORA_EPI1_5]: "Feria VI infra Hebd I post Epiphaniam",
  [TEMPORA_EPI1_6]: "Sabbato infra Hebd I post Epiphaniam",
  [TEMPORA_EPI2_0]: "Dominica II post Epiphaniam",
  [TEMPORA_EPI2_1]: "Feria II infra Hebd II post Epiphaniam",
  [TEMPORA_EPI2_2]: "Feria III infra Hebd II post Epiphaniam",
  [TEMPORA_EPI2_3]: "Feria IV infra Hebd II post Epiphaniam",
  [TEMPORA_EPI2_4]: "Feria V infra Hebd II post Epiphaniam",
  [TEMPORA_EPI2_5]: "Feria VI infra Hebd II post Epiphaniam",
  [TEMPORA_EPI2_6]: "Sabbato infra Hebd II post Epiphaniam",
  [TEMPORA_EPI3_0]: "Dominica III post Epiphaniam",
  [TEMPORA_EPI3_1]: "Feria II infra Hebd III post Epiphaniam",
  [TEMPORA_EPI3_2]: "Feria III infra Hebd III post Epiphaniam",
  [TEMPORA_EPI3_3]: "Feria IV infra Hebd III post Epiphaniam",
  [TEMPORA_EPI3_4]: "Feria V infra Hebd III post Epiphaniam",
  [TEMPORA_EPI3_5]: "Feria VI infra Hebd III post Epiphaniam",
  [TEMPORA_EPI3_6]: "Sabbato infra Hebd III post Epiphaniam",
  [TEMPORA_EPI4_0]: "Dominica IV post Epiphaniam",
  [TEMPORA_EPI4_1]: "Feria II infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI4_2]: "Feria III infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI4_3]: "Feria IV infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI4_4]: "Feria V infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI4_5]: "Feria VI infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI4_6]: "Sabbato infra Hebd IV post Epiphaniam",
  [TEMPORA_EPI5_0]: "Dominica V post Epiphaniam",
  [TEMPORA_EPI5_1]: "Feria II infra Hebd V post Epiphaniam",
  [TEMPORA_EPI5_2]: "Feria III infra Hebd V post Epiphaniam",
  [TEMPORA_EPI5_3]: "Feria IV infra Hebd V post Epiphaniam",
  [TEMPORA_EPI5_4]: "Feria V infra Hebd V post Epiphaniam",
  [TEMPORA_EPI5_5]: "Feria VI infra Hebd V post Epiphaniam",
  [TEMPORA_EPI5_6]: "Sabbato infra Hebd V post Epiphaniam",
  [TEMPORA_EPI6_0]: "Dominica VI post Epiphaniam",
  [TEMPORA_EPI6_1]: "Feria II infra Hebd VI post Epiphaniam",
  [TEMPORA_EPI6_2]: "Feria III infra Hebd VI post Epiphaniam",
  [TEMPORA_EPI6_3]: "Feria IV infra Hebd VI post Epiphaniam",
  [TEMPORA_EPI6_4]: "Feria V infra Hebd VI post Epiphaniam",
  [TEMPORA_EPI6_5]: "Feria VI infra Hebd VI post Epiphaniam",
  [TEMPORA_EPI6_6]: "Sabbato infra Hebd VI post Epiphaniam",
  [TEMPORA_QUADP1_0]: "Dominica in Septuagesima",
  [TEMPORA_QUADP1_1]: "Feria II infra Hebd Septuagesimæ",
  [TEMPORA_QUADP1_2]: "Feria III infra Hebd Septuagesimæ",
  [TEMPORA_QUADP1_3]: "Feria IV infra Hebd Septuagesimæ",
  [TEMPORA_QUADP1_4]: "Feria V infra Hebd Septuagesimæ",
  [TEMPORA_QUADP1_5]: "Feria VI infra Hebd Septuagesimæ",
  [TEMPORA_QUADP1_6]: "Sabbato infra Hebd Septuagesimæ",
  [TEMPORA_QUADP2_0]: "Dominica in Sexagesima",
  [TEMPORA_QUADP2_1]: "Feria II infra Hebd Sexagesimæ",
  [TEMPORA_QUADP2_2]: "Feria III infra Hebd Sexagesimæ",
  [TEMPORA_QUADP2_3]: "Feria IV infra Hebd Sexagesimæ",
  [TEMPORA_QUADP2_4]: "Feria V infra Hebd Sexagesimæ",
  [TEMPORA_QUADP2_5]: "Feria VI infra Hebd Sexagesimæ",
  [TEMPORA_QUADP2_6]: "Sabbato infra Hebd Sexagesimæ",
  [TEMPORA_QUADP3_0]: "Dominica in Quinquagesima",
  [TEMPORA_QUADP3_1]: "Feria II infra Hebd Quinquagesimæ",
  [TEMPORA_QUADP3_2]: "Feria III infra Hebd Quinquagesimæ",
  [TEMPORA_QUADP3_3]: "Feria IV Cinerum",
  [TEMPORA_QUADP3_4]: "Feria V post Cineres",
  [TEMPORA_QUADP3_5]: "Feria VI post Cineres",
  [TEMPORA_QUADP3_6]: "Sabbato post Cineres",
  [TEMPORA_QUAD1_0]: "Dominica I in Quadragesimæ",
  [TEMPORA_QUAD1_1]: "Feria II infra Hebd I Quadragesimæ",
  [TEMPORA_QUAD1_2]: "Feria III infra Hebd I Quadragesimæ",
  [TEMPORA_QUAD1_3]: "Feria IV Quatuor Temporum Quadragesimæ",
  [TEMPORA_QUAD1_4]: "Feria V infra Hebd I Quadragesimæ",
  [TEMPORA_QUAD1_5]: "Feria VI Quattuor Temporum Quadragesimæ",
  [TEMPORA_QUAD1_6]: "Sabbato Quattuor Temporum Quadragesimæ",
  [TEMPORA_QUAD2_0]: "Dominica II in Quadragesimæ",
  [TEMPORA_QUAD2_1]: "Feria II infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD2_2]: "Feria III infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD2_3]: "Feria IV infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD2_4]: "Feria V infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD2_5]: "Feria VI infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD2_6]: "Sabbato infra Hebd II Quadragesimæ",
  [TEMPORA_QUAD3_0]: "Dominica III in Quadragesimæ",
  [TEMPORA_QUAD3_1]: "Feria II infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD3_2]: "Feria III infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD3_3]: "Feria IV infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD3_4]: "Feria V infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD3_5]: "Feria VI infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD3_6]: "Sabbato infra Hebd III Quadragesimæ",
  [TEMPORA_QUAD4_0]: "Dominica IV in Quadragesimæ",
  [TEMPORA_QUAD4_1]: "Feria II infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD4_2]: "Feria III infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD4_3]: "Feria IV infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD4_4]: "Feria V infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD4_5]: "Feria VI infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD4_6]: "Sabbato infra Hebd IV Quadragesimæ",
  [TEMPORA_QUAD5_0]: "Dominica I Passionis",
  [TEMPORA_QUAD5_1]: "Feria II infra Hebd Passionis",
  [TEMPORA_QUAD5_2]: "Feria III infra Hebd Passionis",
  [TEMPORA_QUAD5_3]: "Feria IV infra Hebd Passionis",
  [TEMPORA_QUAD5_4]: "Feria V infra Hebd Passionis",
  [TEMPORA_QUAD5_5]: "Feria VI infra Hebd Passionis",
  [TEMPORA_QUAD5_6]: "Sabbato infra Hebd Passionis",
  [TEMPORA_QUAD6_0]: "Dominica II Passionis seu in Palmis",
  [TEMPORA_QUAD6_1]: "Feria II Hebdomadæ Sanctæ",
  [TEMPORA_QUAD6_2]: "Feria III Hebdomadæ Sanctæ",
  [TEMPORA_QUAD6_3]: "Feria IV Hebdomadæ Sanctæ",
  [TEMPORA_QUAD6_4]: "Feria Quinta in Coena Domini",
  [TEMPORA_QUAD6_5]: "Feria Sexta in Parasceve",
  [TEMPORA_QUAD6_6]: "Sabbato Sancto",
  [TEMPORA_PASC0_0]: "Dominica Resurrectionis",
  [TEMPORA_PASC0_1]: "Die II infra octavam Paschæ",
  [TEMPORA_PASC0_2]: "Die III infra octavam Paschæ",
  [TEMPORA_PASC0_3]: "Die VI infra octavam Paschæ",
  [TEMPORA_PASC0_4]: "Die V infra octavam Paschæ",
  [TEMPORA_PASC0_5]: "Die VI infra octavam Paschæ",
  [TEMPORA_PASC0_6]: "Sabbato in Albis",
  [TEMPORA_PASC1_0]: "Dominica in Albis in Octava Paschæ",
  [TEMPORA_PASC1_1]: "Feria II infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC1_2]: "Feria III infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC1_3]: "Feria IV infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC1_4]: "Feria V infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC1_5]: "Feria VI infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC1_6]: "Sabbato infra Hebd I post Octavam Paschæ",
  [TEMPORA_PASC2_0]: "Dominica II Post Pascha",
  [TEMPORA_PASC2_1]: "Feria II infra Hebd II post Octavam Paschæ",
  [TEMPORA_PASC2_2]: "Feria III infra Hebd II post Octavam Paschæ",
  [TEMPORA_PASC2_3]: "Patrocinii St. Joseph Confessoris Sponsi B.M.V.",
  [TEMPORA_PASC2_4]: "Feria V infra Hebd II post Octavam Paschæ",
  [TEMPORA_PASC2_5]: "Feria VI infra Hebd II post Octavam Paschæ",
  [TEMPORA_PASC2_6]: "Sabbato infra Hebd II post Octavam Paschæ",
  [TEMPORA_PASC3_0]: "Dominica III Post Pascha",
  [TEMPORA_PASC3_1]: "Feria II infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC3_2]: "Feria III infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC3_3]: "Feria IV infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC3_4]: "Feria V infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC3_5]: "Feria VI infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC3_6]: "Sabbato infra Hebd III post Octavam Paschæ",
  [TEMPORA_PASC4_0]: "Dominica IV Post Pascha",
  [TEMPORA_PASC4_1]: "Feria II infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC4_2]: "Feria III infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC4_3]: "Feria IV infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC4_4]: "Feria V infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC4_5]: "Feria VI infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC4_6]: "Sabbato infra Hebd IV post Octavam Paschæ",
  [TEMPORA_PASC5_0]: "Dominica V Post Pascha",
  [TEMPORA_PASC5_1]: "Feria II in Rogationibus",
  [TEMPORA_PASC5_2]: "Feria III in Rogationibus",
  [TEMPORA_PASC5_3]: "Wigilia Wniebowstąpienia Pańskiego",
  [TEMPORA_PASC5_4]: "In Ascensione Domini",
  [TEMPORA_PASC5_5]: "Feria VI post Ascensionem",
  [TEMPORA_PASC5_6]: "Sabbato post Ascensionem",
  [TEMPORA_PASC6_0]: "Dominica post Ascensionem",
  [TEMPORA_PASC6_1]: "Feria II infra Hebd post Ascensionem",
  [TEMPORA_PASC6_2]: "Feria III infra Hebd post Ascensionem",
  [TEMPORA_PASC6_3]: "Feria IV infra Hebd post Ascensionem",
  [TEMPORA_PASC6_4]: "Feria V infra Hebd post Ascensionem",
  [TEMPORA_PASC6_5]: "Feria VI infra Hebd post Ascensionem",
  [TEMPORA_PASC6_6]: "Sabbato in Vigilia Pentecostes",
  [TEMPORA_PASC7_0]: "Dominica Pentecostes",
  [TEMPORA_PASC7_1]: "Die II infra octavam Pentecostes",
  [TEMPORA_PASC7_2]: "Die III infra octavam Pentecostes",
  [TEMPORA_PASC7_3]: "Feria IV Quattuor Temporum Pentecostes",
  [TEMPORA_PASC7_4]: "Die V infra octavam Pentecostes",
  [TEMPORA_PASC7_5]: "Feria VI Quattuor temporum Pentecostes",
  [TEMPORA_PASC7_6]: "Sabbato Quattuor Temporum Pentecostes",
  [TEMPORA_PENT01_0]: "Dominica Sanctissimæ Trinitatis",
  [TEMPORA_PENT01_1]: "Feria II infra Hebd I post Octavam Pentecostes",
  [TEMPORA_PENT01_2]: "Feria III infra Hebd I post Octavam Pentecostes",
  [TEMPORA_PENT01_3]: "Feria IV infra Hebd I post Octavam Pentecostes",
  [TEMPORA_PENT01_4]: "Festum Sanctissimi Corporis Christi",
  [TEMPORA_PENT01_5]: "Feria V infra Hebd I post Octavam Pentecostes",
  [TEMPORA_PENT01_6]: "Sabbato infra Hebd I post Octavam Pentecostes",
  [TEMPORA_PENT02_0]: "Dominica II Post Pentecosten",
  [TEMPORA_PENT02_1]: "Feria II infra Hebd II post Octavam Pentecostes",
  [TEMPORA_PENT02_2]: "Feria III infra Hebd II post Octavam Pentecostes",
  [TEMPORA_PENT02_3]: "Feria IV infra Hebd II post Octavam Pentecostes",
  [TEMPORA_PENT02_4]: "Feria V infra Hebd II post Octavam Pentecostes",
  [TEMPORA_PENT02_5]: "Sanctissimi Cordis Domini Nostri Jesu Christi",
  [TEMPORA_PENT02_6]: "Sabbato infra Hebd II post Octavam Pentecostes",
  [TEMPORA_PENT03_0]: "Dominica III Post Pentecosten§",
  [TEMPORA_PENT03_1]: "Feria II infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT03_2]: "Feria III infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT03_3]: "Feria IV infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT03_4]: "Feria V infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT03_5]: "Feria VI infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT03_6]: "Sabbato infra Hebd III post Octavam Pentecostes§",
  [TEMPORA_PENT04_0]: "Dominica IV Post Pentecosten",
  [TEMPORA_PENT04_1]: "Feria II infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT04_2]: "Feria III infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT04_3]: "Feria IV infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT04_4]: "Feria V infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT04_5]: "Feria VI infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT04_6]: "Sabbato infra Hebd IV post Octavam Pentecostes",
  [TEMPORA_PENT05_0]: "Dominica V Post Pentecosten",
  [TEMPORA_PENT05_1]: "Feria II infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT05_2]: "Feria III infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT05_3]: "Feria IV infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT05_4]: "Feria V infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT05_5]: "Feria VI infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT05_6]: "Sabbato infra Hebd V post Octavam Pentecostes",
  [TEMPORA_PENT06_0]: "Dominica VI Post Pentecosten",
  [TEMPORA_PENT06_1]: "Feria II infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT06_2]: "Feria III infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT06_3]: "Feria IV infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT06_4]: "Feria V infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT06_5]: "Feria VI infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT06_6]: "Sabbato infra Hebd VI post Octavam Pentecostes",
  [TEMPORA_PENT07_0]: "Dominica VII Post Pentecosten",
  [TEMPORA_PENT07_1]: "Feria II infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT07_2]: "Feria III infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT07_3]: "Feria IV infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT07_4]: "Feria V infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT07_5]: "Feria VI infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT07_6]: "Sabbato infra Hebd VII post Octavam Pentecostes",
  [TEMPORA_PENT08_0]: "Dominica VIII Post Pentecosten",
  [TEMPORA_PENT08_1]: "Feria II infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT08_2]: "Feria III infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT08_3]: "Feria IV infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT08_4]: "Feria V infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT08_5]: "Feria VI infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT08_6]: "Sabbato infra Hebd VIII post Octavam Pentecostes",
  [TEMPORA_PENT09_0]: "Dominica IX Post Pentecosten",
  [TEMPORA_PENT09_1]: "Feria II infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT09_2]: "Feria III infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT09_3]: "Feria IV infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT09_4]: "Feria V infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT09_5]: "Feria VI infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT09_6]: "Sabbato infra Hebd IX post Octavam Pentecostes",
  [TEMPORA_PENT10_0]: "Dominica X Post Pentecosten",
  [TEMPORA_PENT10_1]: "Feria II infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT10_2]: "Feria III infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT10_3]: "Feria IV infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT10_4]: "Feria V infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT10_5]: "Feria VI infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT10_6]: "Sabbato infra Hebd X post Octavam Pentecostes",
  [TEMPORA_PENT11_0]: "Dominica XI Post Pentecosten",
  [TEMPORA_PENT11_1]: "Feria II infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT11_2]: "Feria III infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT11_3]: "Feria IV infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT11_4]: "Feria V infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT11_5]: "Feria VI infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT11_6]: "Sabbato infra Hebd XI post Octavam Pentecostes",
  [TEMPORA_PENT12_0]: "Dominica XII Post Pentecosten",
  [TEMPORA_PENT12_1]: "Feria II infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT12_2]: "Feria III infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT12_3]: "Feria IV infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT12_4]: "Feria V infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT12_5]: "Feria VI infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT12_6]: "Sabbato infra Hebd XII post Octavam Pentecostes",
  [TEMPORA_PENT13_0]: "Dominica XIII Post Pentecosten",
  [TEMPORA_PENT13_1]: "Feria II infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT13_2]: "Feria III infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT13_3]: "Feria IV infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT13_4]: "Feria V infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT13_5]: "Feria VI infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT13_6]: "Sabbato infra Hebd XIII post Octavam Pentecostes",
  [TEMPORA_PENT14_0]: "Dominica XIV Post Pentecosten",
  [TEMPORA_PENT14_1]: "Feria II infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT14_2]: "Feria III infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT14_3]: "Feria IV infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT14_4]: "Feria V infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT14_5]: "Feria VI infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT14_6]: "Sabbato infra Hebd XIV post Octavam Pentecostes",
  [TEMPORA_PENT15_0]: "Dominica XV Post Pentecosten",
  [TEMPORA_PENT15_1]: "Feria II infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT15_2]: "Feria III infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT15_3]: "Feria IV infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT15_4]: "Feria V infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT15_5]: "Feria VI infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT15_6]: "Sabbato infra Hebd XV post Octavam Pentecostes",
  [TEMPORA_PENT16_0]: "Dominica XVI Post Pentecosten",
  [TEMPORA_PENT16_1]: "Feria II infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT16_2]: "Feria III infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT16_3]: "Feria IV infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT16_4]: "Feria V infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT16_5]: "Feria VI infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT16_6]: "Sabbato infra Hebd XVI post Octavam Pentecostes",
  [TEMPORA_PENT17_0]: "Dominica XVII Post Pentecosten",
  [TEMPORA_PENT17_1]: "Feria II infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT17_2]: "Feria III infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT17_3]: "Feria IV infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT17_4]: "Feria V infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT17_5]: "Feria VI infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT17_6]: "Sabbato infra Hebd XVII post Octavam Pentecostes",
  [TEMPORA_PENT18_0]: "Dominica XVIII Post Pentecosten",
  [TEMPORA_PENT18_1]: "Feria II infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT18_2]: "Feria III infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT18_3]: "Feria IV infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT18_4]: "Feria V infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT18_5]: "Feria VI infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT18_6]: "Sabbato infra Hebd XVIII post Octavam Pentecostes",
  [TEMPORA_PENT19_0]: "Dominica XIX Post Pentecosten",
  [TEMPORA_PENT19_1]: "Feria II infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT19_2]: "Feria III infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT19_3]: "Feria IV infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT19_4]: "Feria V infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT19_5]: "Feria VI infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT19_6]: "Sabbato infra Hebd XIX post Octavam Pentecostes",
  [TEMPORA_PENT20_0]: "Dominica XX Post Pentecosten",
  [TEMPORA_PENT20_1]: "Feria II infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT20_2]: "Feria III infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT20_3]: "Feria IV infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT20_4]: "Feria V infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT20_5]: "Feria VI infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT20_6]: "Sabbato infra Hebd XX post Octavam Pentecostes",
  [TEMPORA_PENT21_0]: "Dominica XXI Post Pentecosten",
  [TEMPORA_PENT21_1]: "Feria II infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT21_2]: "Feria III infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT21_3]: "Feria IV infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT21_4]: "Feria V infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT21_5]: "Feria VI infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT21_6]: "Sabbato infra Hebd XXI post Octavam Pentecostes",
  [TEMPORA_PENT22_0]: "Dominica XXII Post Pentecosten",
  [TEMPORA_PENT22_1]: "Feria II infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT22_2]: "Feria III infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT22_3]: "Feria IV infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT22_4]: "Feria V infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT22_5]: "Feria VI infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT22_6]: "Sabbato infra Hebd XXII post Octavam Pentecostes",
  [TEMPORA_PENT23_0]: "Dominica XXIII Post Pentecosten",
  [TEMPORA_PENT23_1]: "Feria II infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT23_2]: "Feria III infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT23_3]: "Feria IV infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT23_4]: "Feria V infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT23_5]: "Feria VI infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT23_6]: "Sabbato infra Hebd XXIII post Octavam Pentecostes",
  [TEMPORA_PENT_3]: "Feria IV Quattuor Temporum Septembris",
  [TEMPORA_PENT_5]: "Feria VI Quattuor Temporum Septembris",
  [TEMPORA_PENT_6]: "Sabbato Quattuor Temporum Septembris",
  [TEMPORA_PENT24_0]: "Dominica XXIV Post Pentecosten",
  [TEMPORA_PENT24_1]: "Feria II infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_PENT24_2]: "Feria III infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_PENT24_3]: "Feria IV infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_PENT24_4]: "Feria V infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_PENT24_5]: "Feria VI infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_PENT24_6]: "Sabbato infra Hebd XXIV post Octavam Pentecostes",
  [TEMPORA_ADV1_0]: "Dominica I Adventus",
  [TEMPORA_ADV1_1]: "Feria II infra Hebd I Adventus",
  [TEMPORA_ADV1_2]: "Feria III infra Hebd I Adventus",
  [TEMPORA_ADV1_3]: "Feria IV infra Hebd I Adventus",
  [TEMPORA_ADV1_4]: "Feria V infra Hebd I Adventus",
  [TEMPORA_ADV1_5]: "Feria VI infra Hebd I Adventus",
  [TEMPORA_ADV1_6]: "Sabbato infra Hebd I Adventus",
  [TEMPORA_ADV2_0]: "Dominica II Adventus",
  [TEMPORA_ADV2_1]: "Feria II infra Hebd II Adventus",
  [TEMPORA_ADV2_2]: "Feria III infra Hebd II Adventus",
  [TEMPORA_ADV2_3]: "Feria IV infra Hebd II Adventus",
  [TEMPORA_ADV2_4]: "Feria V infra Hebd II Adventus",
  [TEMPORA_ADV2_5]: "Feria VI infra Hebd II Adventus",
  [TEMPORA_ADV2_6]: "Sabbato infra Hebd II Adventus",
  [TEMPORA_ADV3_0]: "Dominica III Adventus",
  [TEMPORA_ADV3_1]: "Feria II infra Hebd IV Adventus",
  [TEMPORA_ADV3_2]: "Feria III infra Hebd IV Adventus",
  [TEMPORA_ADV3_3]: "Feria IV Quattuor Temporum Adventus",
  [TEMPORA_ADV3_4]: "Feria V infra Hebd IV Adventus",
  [TEMPORA_ADV3_5]: "Feria VI Quattuor Temporum Adventus",
  [TEMPORA_ADV3_6]: "Sabbato Temporum Adventus",
  [TEMPORA_ADV4_0]: "Dominica IV Adventus",
  [TEMPORA_ADV4_1]: "Feria II infra Hebd IV Adventus",
  [TEMPORA_ADV4_2]: "Feria III infra Hebd IV Adventus",
  [TEMPORA_ADV4_3]: "Feria IV infra Hebd IV Adventus",
  [TEMPORA_ADV4_4]: "Feria V infra Hebd IV Adventus",
  [TEMPORA_ADV4_5]: "Feria VI infra Hebd IV Adventus",
  [TEMPORA_NAT1_0]: "Dominica Infra Octavam Nativitatis",
  [TEMPORA_NAT1_1]: "Feria Infra Octavam Nativitatis",
  [TEMPORA_NAT2_0]: "Sanctissimi Nominis Jesu",
  [SANCTI_10_DUr]: "In festo Domino nostro Jesu Christi Regis",
  [TEMPORA_EPI1_0A]: "Dominica post Epiphaniam",
  [TEMPORA_PENT01_0A]: "Dominica Post Pentecosten",
  [COMMUNE_C_10A]: "1 Missa B. V. M. – Rorate",
  [COMMUNE_C_10B]: "2 Missa B. V. M. – Vultum Tuum",
  [COMMUNE_C_10C]: "3 Missa B. V. M. – Salve, Sancta Parens",
  [COMMUNE_C_10PASC]: "4 Missa B. V. M. – Salve, Sancta Parens",
  [COMMUNE_C_10T]: "5 Missa B. V. M. – Salve, Sancta Parens",
  [SANCTI_01_01]: "Die Octavæ Nativitatis Domini",
  [SANCTI_01_06]: "In Epiphania Domini",
  [SANCTI_01_13]: "In Commemoratione Baptismatis Domini Nostri Jesu Christi",
  [SANCTI_01_14]: "S. Hilarii Episcopi Confessoris Ecclesiæ Doctoris",
  [SANCTI_01_15]: "S. Pauli Primi Eremitæ et Confessoris",
  [SANCTI_01_16]: "S. Marcelli Papæ et Martyris",
  [SANCTI_01_17]: "S. S. Antonii Abbatis",
  [SANCTI_01_18]: "S. Priscæ Virginis",
  [SANCTI_01_19]: "S. Marii et Soc. Mart.",
  [SANCTI_01_20]: "Ss. Fabiani et Sebastiani Martyrum",
  [SANCTI_01_21]: "S. Agnetis Virginis et Martyris",
  [SANCTI_01_22]: "Ss. Vincentii et Anastasii Martyrum",
  [SANCTI_01_23]: "S. Raymundi de Penafort Confessoris",
  [SANCTI_01_24]: "S. Timothei Episcopi et Martyris",
  [SANCTI_01_25]: "In Conversione S. Pauli Apostoli",
  [SANCTI_01_26]: "S. Polycarpi Episcopi et Martyris",
  [SANCTI_01_27]:
    "S. Joannis Chrysostomi Episcopi Confessoris Ecclesiæ Doctoris",
  [SANCTI_01_28]: "S. Petri Nolasci Confessoris",
  [SANCTI_01_29]: "S. Francisci Salesii Episcopi Confessoris Ecclesiæ Doctoris",
  [SANCTI_01_30]: "S. Martinæ Virginis et Martyris",
  [SANCTI_01_31]: "S. Joannis Bosco Confessoris",
  [SANCTI_02_01]: "S. Ignatii Episcopi et Martyris",
  [SANCTI_02_02]: "In Purificatione Beatæ Mariæ Virginis",
  [SANCTI_02_03]: "S. Blasii Episcopi",
  [SANCTI_02_04]: "S. Andreæ Corsini Episcopi et Confessoris",
  [SANCTI_02_05]: "S. Agathæ Virginis et Martyris",
  [SANCTI_02_06]: "S. Titi Episc. et Confessoris",
  [SANCTI_02_07]: "S. Romualdi Abbatis",
  [SANCTI_02_08]: "S. Joannis de Matha Confessoris",
  [SANCTI_02_09]: "S. Cyrilli Episc. Alexandrini Confessoris Ecclesiæ Doctoris",
  [SANCTI_02_10]: "S. Scholasticæ Virginis",
  [SANCTI_02_11]: "In Apparitione Beatæ Mariæ Virginis",
  [SANCTI_02_12]: "Ss. Septem Fundat. Ord. Servorum B. M. V.",
  [SANCTI_02_14]: "S. Valentini",
  [SANCTI_02_15]: "SS. Faustini et Jovitæ",
  [SANCTI_02_18]: "S. Simeonis Faustini Episcopi et Martyris",
  [SANCTI_02_22]: "In Cathedra S. Petri Ap. ",
  [SANCTI_02_23]: "S. Petri Damiani",
  [SANCTI_02_24]: "S. Matthiæ Apostoli",
  [SANCTI_02_27]: "S. Gabrielis a Virgine Perdolente Confessoris",
  [SANCTI_03_04]: "S. Casimiri Confessoris",
  [SANCTI_03_06]: "Ss. Perpetuæ et Felicitatis Martyrum",
  [SANCTI_03_07]: "S. Thomæ de Aquino Confessoris Ecclesiæ Doctoris",
  [SANCTI_03_08]: "S. Joannis de Deo Confessoris",
  [SANCTI_03_09]: "S. Franciscæ Viduæ Romanæ",
  [SANCTI_03_10]: "Ss. Quadraginta Martyrum",
  [SANCTI_03_12]: "S. Gregorii Papæ Confessoris et Ecclesiæ Doctoris",
  [SANCTI_03_15PL]: "S. Clementis Hofbauer",
  [SANCTI_03_17]: "S. Patricii Episcopi et Conf.",
  [SANCTI_03_18]: "S. Cyrilli Episcopi Hierosolymitani Ecclesiæ Doctoris",
  [SANCTI_03_19]: "S. Joseph Sponsi B.M.V. Confessoris",
  [SANCTI_03_21]: "S. Benedicti Abbatis",
  [SANCTI_03_24]: "S. Gabrielis Archangeli",
  [SANCTI_03_25]: "In Annuntiatione Beate Mariæ Virgine",
  [SANCTI_03_27]: "S. Joannis Damasceni Confessoris",
  [SANCTI_03_28]: "S. Joannis a Capistrano Confessoris",
  [SANCTI_04_02]: "S. Francisci de Paula Confessoris",
  [SANCTI_04_04]: "S. Isidori Episc. Confessoris et Ecclesiæ Doctoris",
  [SANCTI_04_05]: "S. Vincentii Ferrerii Confessoris",
  [SANCTI_04_11]: "S. Leonis I. Papæ Confessoris et Ecclesise Doctoris",
  [SANCTI_04_13]: "S. Hermenegildi Martyris",
  [SANCTI_04_14]: "S. Justini Martyris",
  [SANCTI_04_17]: "S. Aniceti Papæ et Martyris",
  [SANCTI_04_21]: "S. Anselmi Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_04_22]: "SS. Soteris et Caji Summorum Pontificum et Martyrum",
  [SANCTI_04_23]: "S. Georgii Martyris",
  [SANCTI_04_23PL]: "S. Adalberti, Episcopi et Martyris",
  [SANCTI_04_24]: "S. Fidelis de Sigmaringa Martyris",
  [SANCTI_04_25]: "S. Marci Evangelistæ",
  [SANCTI_04_26]: "SS. Cleti et Marcellini Summorum Pontificum et Martyrum",
  [SANCTI_04_27]: "S. Petri Canisii Confessoris et Ecclesiæ Doctoris",
  [SANCTI_04_28]: "S. Pauli a Cruce Confessoris",
  [SANCTI_04_29]: "S. Petri Martyris",
  [SANCTI_04_30]: "S. Catharina Senensis Virgine",
  [SANCTI_05_01]: "Ss. Philippi et Jacobi Apostolorum",
  [SANCTI_05_02]: "S. Athanasii Confessoris Ecclesiæ Doctoris",
  [SANCTI_05_03]: "Ss. Alexandri et Sociorum Martyrum",
  [SANCTI_05_04]: "S. Monicæ Viduæ",
  [SANCTI_05_05]: "S. Pii V Papæ Confessoris",
  [SANCTI_05_06]: "S. Joannis Apostoli ante portam Latinam",
  [SANCTI_05_07]: "S. Stanislai Episcopi et Martyris",
  [SANCTI_05_08]: "Apparitione S Michælis Archangeli",
  [SANCTI_05_09]:
    "S. Gregorii Nazianzeni Episcopi Confessoris Ecclesiæ Doctoris",
  [SANCTI_05_10]: "S. Antonii Episcopi Confessoris",
  [SANCTI_05_12]:
    "Ss. Nerei, Achillei et Domitillæ Virginis atque Pancratii Martyrum",
  [SANCTI_05_13]:
    "S. Roberti Bellarmino Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_05_14]: "S. Bonifacii Martyris",
  [SANCTI_05_15]: "S. Johanni Baptistæ de la Salle Confessoris",
  [SANCTI_05_16]: "S. Ubaldi Episcopi Confessoris",
  [SANCTI_05_16PL]: "S. Andreæ Bobolæ Martyrum",
  [SANCTI_05_17]: "S. Paschalis Baylon Confessoris",
  [SANCTI_05_18]: "S. Venantii Martyris",
  [SANCTI_05_19]: "S. Petri Celestini Papæ Confessoris",
  [SANCTI_05_20]: "S. Bernardini Senensis Confessoris",
  [SANCTI_05_24PL]: "Beatæ Mariæ Virginis Confessoris Auxiliatrix",
  [SANCTI_05_25]: "S. Gregorii VII Papæ Confessoris",
  [SANCTI_05_26]: "S. Philippi Neri Confessoris",
  [SANCTI_05_27]: "S. Bedæ Venerabilis Confessoris et Ecclesiæ Doctoris",
  [SANCTI_05_28]: "S. Augustini Episcopi Confessoris",
  [SANCTI_05_29]: "S. Mariæ Magdalenæ de Pazzis Virginis",
  [SANCTI_05_30]: "S. Felicis Papæ et Martyris",
  [SANCTI_05_31]: "Beatæ Mariæ Virginis Reginæ",
  [SANCTI_06_01]: "S. Angelæ Mericiæ Virginis",
  [SANCTI_06_01PL]: "B. Jacobi Episcopi et Confessoris",
  [SANCTI_06_02]: "Ss. Marcellini, Petri, atque Erasmi Martyrum",
  [SANCTI_06_04]: "S. Francisci Caracciolo Confessoris",
  [SANCTI_06_05]: "S. Bonifatii Episc. et Mart.",
  [SANCTI_06_06]: "S. Norberti Episc. et Confessoris",
  [SANCTI_06_09]: "Ss. Primi et Feliciani Martyrum",
  [SANCTI_06_10]: "S. Margaritæ Reginæ viduæ",
  [SANCTI_06_10PL]: "B. Bogumilai Episcopi et Confessoris",
  [SANCTI_06_11]: "S. Barnabæ Apostoli",
  [SANCTI_06_12]: "S. Joannis a S. Facundo Confessoris",
  [SANCTI_06_13]: "S. Antonii de Padua Confessoris",
  [SANCTI_06_14]: "S. Basilii Magni Confessoris et Ecclesiæ Doctoris",
  [SANCTI_06_15]: "Ss. Viti, Modesti atque Crescentiæ Martyrum",
  [SANCTI_06_17]: "S. Gregorii Barbadici Episcopi Confessoris",
  [SANCTI_06_18]: "S. Ephræm Syri Confessoris et Ecclesiæ Doctorem",
  [SANCTI_06_19]: "S. Julianæ de Falconeriis Virginis",
  [SANCTI_06_20]: "S. Silverii Papæ et Martyri",
  [SANCTI_06_21]: "S. Aloisii Gonzagæ Confessoris",
  [SANCTI_06_22]: "S. Paulini Episcopi et Confessoris",
  [SANCTI_06_23]: "In Vigilia S. Joannis Baptistæ",
  [SANCTI_06_24]: "In Nativitate S. Joannis Baptistæ",
  [SANCTI_06_25]: "S. Gulielmi Abbatis",
  [SANCTI_06_26]: "Ss. Joannis et Pauli Martyrum",
  [SANCTI_06_28]: "In Vigilia Ss. Petri et Pauli Apostolorum",
  [SANCTI_06_29]: "SS. Apostolorum Petri et Pauli",
  [SANCTI_06_30]: "In Commemoratione Sancti Pauli Apostoli",
  [SANCTI_07_01]: "Pretiosissimi Sanguinis Domini Nostri Jesu Christi",
  [SANCTI_07_02]: "In Visitatione B. Mariæ Virginis",
  [SANCTI_07_03]: "S. Irenæi Episcopi et Martyris",
  [SANCTI_07_05]: "S. Antonii Mariæ Zaccaria Confessoris",
  [SANCTI_07_07]: "Ss. Cyrilli et Methodii Pont. et Conf. ",
  [SANCTI_07_08]: "S. Elisabeth Reg. Portugaliæ Viduæ",
  [SANCTI_07_10]:
    "Ss. Septem Fratrum Martyrum, ac Rufinæ et Secundæ Virginum et Martyrum",
  [SANCTI_07_11]: "S. Pii I Papæ et Martyris",
  [SANCTI_07_12]: "S. Joannis Gualberti Abbatis",
  [SANCTI_07_14]: "S. Bonaventuræ Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_07_15]: "S. Henrici Imperatoris Confessoris",
  [SANCTI_07_16]: "In Commemoratione Beatæ Mariæ Virgine de Monte Carmelo.",
  [SANCTI_07_17]: "S. Alexii Confessoris",
  [SANCTI_07_18]: "S. Camilli de Lellis Confessoris",
  [SANCTI_07_18PL]: "B. Simonis Confessoris",
  [SANCTI_07_19]: "S. Vincentii a Paulo Confessoris",
  [SANCTI_07_20]: "S. Hieronymi Emiliani Confessoris",
  [SANCTI_07_20PL]: "B. Ceslai Confessoris",
  [SANCTI_07_21]: "S. Laurentii a Brundusio Confessoris",
  [SANCTI_07_22]: "S. Mariæ Magdalenæ Poenitentis",
  [SANCTI_07_23]: "S. Apollinaris Episcopi et Martyris",
  [SANCTI_07_24]: "S. Christinæ Virginis et Martyris",
  [SANCTI_07_24PL]: "B. Kingæ Virginis",
  [SANCTI_07_25]: "S. Jacobi Apostoli",
  [SANCTI_07_26]: "S. Annæ Matris B.M.V. ",
  [SANCTI_07_27]: "S. Pantaleonis Martyris",
  [SANCTI_07_28]:
    "Ss. Nazarii et Celsi Martyrum, Victoris I Papæ et Martyris ac Innocentii I Papæ et Confessoris ",
  [SANCTI_07_29]: "S. Marthæ Virginis",
  [SANCTI_07_30]: "S. Abdon et Sennen Martyrum",
  [SANCTI_07_31]: "S. Ignatii Confessoris",
  [SANCTI_08_01]: "Ss. Martyrum Machabæorum",
  [SANCTI_08_02]:
    "S. Alfonsi Mariæ de Ligorio Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_08_04]: "S. Dominici Confessoris",
  [SANCTI_08_05]: "S. Mariæ ad Nives ",
  [SANCTI_08_06]: "In Transfiguratione Domini Nostri Jesu Christi",
  [SANCTI_08_07]: "S. Cajetani Confessoris",
  [SANCTI_08_08]: "S. Joannis Mariæ Vianney Confessoris",
  [SANCTI_08_09]: "Vigilia S. Laurentii Martyris",
  [SANCTI_08_10]: "S. Laurentii Martyris",
  [SANCTI_08_11]: "Ss. Tiburtii et Susannæ Virginum et Martyrum",
  [SANCTI_08_12]: "S. Claræ Virginis",
  [SANCTI_08_13]: "Ss. Hippolyti et Cassiani Martyrum",
  [SANCTI_08_14]: "Vigilia Assumptionis B.M.V.",
  [SANCTI_08_15]: "In Assumptione Beatæ Mariæ Virginis",
  [SANCTI_08_16]: "S. Joachim Confessoris, Patris B. Mariæ Virginis",
  [SANCTI_08_17]: "S. Hyacinthi Confessoris",
  [SANCTI_08_18]: "S. Agapiti Martyris",
  [SANCTI_08_19]: "S. Joannis Eudes Confessoris",
  [SANCTI_08_20]: "S. Bernardi Abbatis et Ecclesiæ Doctoris",
  [SANCTI_08_21]: "S. Joannæ Franciscæ Frémiot de Chantal Viduæ",
  [SANCTI_08_22]: "Immaculati Cordis Beatæ Mariæ Virginis",
  [SANCTI_08_23]: "S. Philippi Benitii Confessoris",
  [SANCTI_08_24]: "S. Bartholomæi Apostoli",
  [SANCTI_08_25]: "S. Ludovici Confessoris",
  [SANCTI_08_26]: "S. Zephirini Papæ et Martyris",
  [SANCTI_08_26PL]: "Beate Mariae Virginis Claromontane Czestochoviensis",
  [SANCTI_08_27]: "S. Josephi Calasanctii Confessoris",
  [SANCTI_08_28]: "S. Augustini Episcopi et Confessoris et Ecclesiæ Doctoris",
  [SANCTI_08_29]: "Decollatione S. Joannis Baptistæ",
  [SANCTI_08_30]: "S. Rosæ a Sancta Maria Limange Virginis",
  [SANCTI_08_31]: "S. Raymundi Nonnati Confessoris",
  [SANCTI_09_01]: "S. Ægidii Abbatis",
  [SANCTI_09_01PL]: "B. Bronislauæ Virginins",
  [SANCTI_09_02]: "S. Stephani Hungariæ Regis Confessoris",
  [SANCTI_09_03]: "S. Pii X Papæ Confessoris",
  [SANCTI_09_05]: "S. Laurentii Justiniani Episcopi et Confessoris",
  [SANCTI_09_07PL]: "B. Melchiori Martyrum",
  [SANCTI_09_08]: "Nativitate Beatæ Mariæ Virginis",
  [SANCTI_09_09]: "S. Gorgonii Martyris",
  [SANCTI_09_10]: "S. Nicolai de Tolentino Confessoris",
  [SANCTI_09_11]: "Ss. Proti et Hyacinthi Martyrum",
  [SANCTI_09_12]: "S. Nominis Beatæ Mariæ Virginis",
  [SANCTI_09_14]: "In Exaltatione Sanctæ crucis",
  [SANCTI_09_15]: "Septem Dolorum Beatæ Mariæ Virginis",
  [SANCTI_09_16]: "Ss. Cornelii Papæ et Cypriani Episcopi, Martyrum",
  [SANCTI_09_17]: "Impressionis Stigmatum S. Francisci",
  [SANCTI_09_18]: "S. Josephi de Cupertino Confessoris",
  [SANCTI_09_19]: "S. Januarii Episcopi et Sociorum Martyrum",
  [SANCTI_09_20]: "S. Eustachii et Sociorum Martyrum",
  [SANCTI_09_21]: "S. Matthæi Apostoli et Evangelistæ",
  [SANCTI_09_22]: "S. Thomæ de Villanove Episcopi et Confessoris",
  [SANCTI_09_23]: "S. Lini Papæ et Martyris",
  [SANCTI_09_24]: "Beatæ Mariæ Virginis de Mercede",
  [SANCTI_09_25PL]: "B. Ladislai Confessoris",
  [SANCTI_09_26]: "Ss. Cypriani et Justinæ Martyrum",
  [SANCTI_09_27]: "S. Cosmæ et Damiani Martyrum",
  [SANCTI_09_28]: "S. Wenceslai Ducis et Martyris",
  [SANCTI_09_29]: "In Dedicatione S. Michælis Archangelis",
  [SANCTI_09_30]: "S. Hieronymi Presbyteris Confessoris et Ecclesiæ Doctoris",
  [SANCTI_10_01]: "S. Remigii Episcopi Confessoris", // particular-PL: 'sancti:10-01pl:3'
  [SANCTI_10_01PL]: "B. Joannis de Dukla",
  [SANCTI_10_02]: "Ss. Angelorum Custodum",
  [SANCTI_10_03]: "S. Theresiæ a Jesu Infante Virginis",
  [SANCTI_10_04]: "S. Francisci Confessoris",
  [SANCTI_10_05]: "Ss. Placidi et Sociorum Martyrum",
  [SANCTI_10_06]: "S. Brunonis Confessoris",
  [SANCTI_10_07]: "Festum Beatæ Mariæ Virginis a Rosario",
  [SANCTI_10_08]: "S. Birgittæ Viduæ",
  [SANCTI_10_09]: "S. Joannis Leonardi Confessoris",
  [SANCTI_10_10]: "S. Francisci Borgiæ Confessoris",
  [SANCTI_10_11]: "Maternitatis Beatæ Mariæ Virginis",
  [SANCTI_10_13]: "S. Eduardi Regis Confessoris",
  [SANCTI_10_14]: "S. Callisti Papæ et Martyris",
  [SANCTI_10_15]: "S. Teresiæ Virginis",
  [SANCTI_10_16]: "S. Hedwigis Viduæ",
  [SANCTI_10_17]: "S. Margaritæ Mariæ Alaquoque Virginis",
  [SANCTI_10_18]: "S. Lucæ Evangelistæ",
  [SANCTI_10_19]: "S. Petri de Alcantara Confessoris",
  [SANCTI_10_20]: "S. Joannis Cantii Confessoris",
  [SANCTI_10_21]: "S. Hilarionis Abbatis",
  [SANCTI_10_23]: "S. Antonii Mariæ Claret Episcopi Confessoris",
  [SANCTI_10_24]: "S. Raphælis Archangeli",
  [SANCTI_10_25]: "Ss. Chrysanthi et Dariæ Martyrum",
  [SANCTI_10_28]: "Ss. Simonis et Judæ Apostolorum.",
  [SANCTI_11_01]: "Omnium Sanctorum",
  [SANCTI_11_02_1]:
    "In Commemoratione Omnium Fidelium Defunctorum Ad primam Missam",
  [SANCTI_11_02_2]:
    "In Commemoratione Omnium Fidelium Defunctorum Ad secundam Missam",
  [SANCTI_11_02_3]:
    "In Commemoratione Omnium Fidelium Defunctorum Ad tertiam Missam",
  [SANCTI_11_04]: "S. Caroli Episcopi et Confessoris",
  [SANCTI_11_08]: "Ss. Quatuor Coronatorum Martyrum",
  [SANCTI_11_09]: "In Dedicatione Basilicæ Ss. Salvatoris",
  [SANCTI_11_10]: "S. Andreæ Avellini Confessoris",
  [SANCTI_11_11]: "S. Martini Episcopi et Confessoris",
  [SANCTI_11_12]: "S. Martini Papæ et Martyris",
  [SANCTI_11_13]: "S. Didaci Confessoris",
  [SANCTI_11_13PL]: "S. Stanislai Confessoris",
  [SANCTI_11_14]: "S. Josaphat Episcopi et Martyris",
  [SANCTI_11_15]: "S. Alberti Magni Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_11_16]: "S. Gertrudis Virginis",
  [SANCTI_11_17]: "S. Gregorii Thaumaturgi Episcopi et Confessoris",
  [SANCTI_11_18]: "In Dedicatione Basilicarum Ss. Apostolorum Petri et Pauli",
  [SANCTI_11_19]: "S. Elisabeth Viduæ",
  [SANCTI_11_20]: "S. Felicis de Valois Confessoris",
  [SANCTI_11_21]: "In Presentatione Beatæ Mariæ Virginis",
  [SANCTI_11_22]: "S. Cæciliæ Virginis et Martyris",
  [SANCTI_11_23]: "S. Clementis Papæ et Martyris",
  [SANCTI_11_24]: "S. Joannis a Cruce Confessoris et Ecclesiæ Doctoris",
  [SANCTI_11_25]: "S. Catharinæ Virginis et Martyris",
  [SANCTI_11_26]: "S. Silvesteri Abbatis et Confessoris",
  [SANCTI_11_29]: "S. Saturnini Martyris",
  [SANCTI_11_30]: "S. Andreæ Apostoli",
  [SANCTI_12_02]: "S. Bibianæ Virginis et Martyris",
  [SANCTI_12_03]: "S. Francisci Xaverii Confessoris",
  [SANCTI_12_04]:
    "S. Petri Chrysologi Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_12_05]: "S. Sabbæ Abbatis",
  [SANCTI_12_06]: "S. Nicolai Episcopi et Confessoris",
  [SANCTI_12_07]: "S. Ambrosii Episcopi Confessoris et Ecclesiæ Doctoris",
  [SANCTI_12_08]: "In Conceptione Immaculata Beatæ Mariæ Virginis",
  [SANCTI_12_10]: "S. Melchiadis Papæ et Mart",
  [SANCTI_12_11]: "S. Damasi Papæ et Confessoris",
  [SANCTI_12_13]: "S. Luciæ Virginis et Martyris",
  [SANCTI_12_16]: "S. Eusebii Episcopi et Martyris",
  [SANCTI_12_21]: "S. Thomæ Apostoli",
  [SANCTI_12_24]: "In Vigilia Nativitatis Domini",
  [SANCTI_12_25_1]: "In Nativitate Domini in nocte",
  [SANCTI_12_25_2]: "In Nativitatis Domini in aurora",
  [SANCTI_12_25_3]: "In die Nativitatis Domini",
  [SANCTI_12_26]: "S. Stephani Protomartyris",
  [SANCTI_12_27]: "S. Joannis Apostoli et Evangelistæ",
  [SANCTI_12_28]: "Ss. Innocentium",
  [SANCTI_12_29]: "S. Thomæ M.",
  [SANCTI_12_31]: "S. Silvestri",
  [VOTIVE_ANGELS]: "Missa de Angelis",
  [VOTIVE_JOSEPH]: "Missa de S. Ioseph",
  [VOTIVE_PETERPAUL]: "Missa de Ss. Petro et Paulo App.",
  [VOTIVE_PETERPAULP]: "Missa de Ss. Petro et Paulo App.",
  [VOTIVE_APOSTLES]: "Missa de omnibus Ss. Apostolis",
  [VOTIVE_APOSTLESP]: "Missa de omnibus Ss. Apostolis",
  [VOTIVE_HOLYSPIRIT]: "Missa de Spiritu Sancto",
  [VOTIVE_HOLYSPIRIT2]: "Missa ad postulandam gratiam Spiritus Sancti",
  [VOTIVE_BLESSEDSACRAMENT]: "Missa de sanctissimo Eucharistiae Sacramento",
  [VOTIVE_JESUSETERNALPRIEST]:
    "Missa de D. N. Iesu Christo summo et aeterno Sacerdote",
  [VOTIVE_CROSS]: "Missa de sancta Cruce",
  [VOTIVE_PASSION]: "Missa de Passione Domini",
  [VOTIVE_PENT01_0]: "Sanctissimæ Trinitatis",
  [VOTIVE_PENT02_5]: "Sanctissimi Cordis Domini Nostri Jesu Christi",
  [VOTIVE_08_22]: "Immaculati Cordis Beatæ Mariæ Virginis",
  [VOTIVE_DEFUNCTORUM]: "Missa Defunctorum Quotidianis",
  [VOTIVE_MORTALITATIS]: "Missa Tempore Mortalitatis",
};

export const VOTIVE_MASSES = [];

export const SECTION_LABELS = {
  Communicantes: "Communicantes",
  CommunioP: "CommunioP",
  Communio: "Communio",
  Evangelium: "Evangelium",
  GradualeP: "Graduale",
  Graduale: "Graduale",
  Introitus: "Introitus",
  Lectio: "Lectio",
  OffertoriumP: "OffertoriumP",
  Offertorium: "Offertorium",
  Oratio: "Oratio",
  Postcommunio: "Postcommunio",
  Secreta: "Secreta",
  Sequentia: "Sequentia",
  "Super populum": "Super populum",
  Prefatio: "Prefatio",
  Tractus: "Graduale",
  // 02-02, feast of the Purification of the B.V.M.
  "De Benedictione Candelarum": "De Benedictione Candelarum",
  "De Distributione Candelarum": "De Distributione Candelarum",
  "De Processione": "De Processione",
  // Quad6-0r, Dominica II Passionis seu in Palmis
  "Benedictio Palmorum": "Benedictio Palmorum",
  "De distributione ramorum": "De distributione ramorum",
  "De lectione Evangelica": "De lectione Evangelica",
  "De processione cum ramis benedictis": "De processione cum ramis benedictis",
  "Hymnus ad Christum Regem": "Hymnus ad Christum Regem",
  // Quad6-4r, Feria Quinta in Coena Domini
  Maundi: "De lotione pedum",
  "Post Missam": "Post Missam",
  "Denudatione altaris": "Denudatione altaris",
  // Quad6-5r, Feria Sexta in Parasceve
  Lectiones: "De prima parte: Lectiones",
  Passio: "Passio",
  "Oratio Fidelium":
    "De secunda parte: De Orationibus Solemnibus, quae etiam «Oratio Fidelium» dicuntur",
  "Crucis Adoratione": "De tertia parte: De Solemni Sanctae Crucis Adoratione",
  CommunioQ: "De quarta parte: Communio",
  // Quad6-5r, Sabbato Sancto
  "Benedictio ignis": "Benedictio ignis",
  "De benedictione cerei Paschalis": "De benedictione cerei Paschalis",
  "De solemni processione": "De solemni processione",
  "De praeconio paschali": "De praeconio paschali",
  "De lectionibus": "De lectionibus",
  "De prima parte Litaniarum": "De prima parte Litaniarum",
  "De benedictione aquae baptismalis": "De benedictione aquae baptismalis",
  "De renovatione promissionum baptismatis":
    "De renovatione promissionum baptismatis",
  "De altera parte Litaniarum": "De altera parte Litaniarum",
  "De Missa solemni Vigiliae paschalis": "De Missa solemni Vigiliæ paschalis",
  "Pro Laudibus": "Pro Laudibus",
  Conclusio: "Conclusio",
  "Benedictio cinerum": "Benedictio cinerum",
};

export const SECTION_LABELS_MULTI = {
  GradualeL1: "Graduale",
  GradualeL2: "Graduale",
  GradualeL3: "Graduale",
  GradualeL4: "Graduale",
  GradualeL5: "Graduale",
  GradualeP: "Graduale",
  Graduale: "Graduale",
  LectioL1: "Lectio",
  LectioL2: "Lectio",
  LectioL3: "Lectio",
  LectioL4: "Lectio",
  LectioL5: "Lectio",
  Lectio: "Lectio",
  OratioL1: "Oratio",
  OratioL2: "Oratio",
  OratioL3: "Oratio",
  OratioL4: "Oratio",
  OratioL5: "Oratio",
  Oratio: "Oratio",
  EvangeliumL1: "Evangelium",
};

export const PATERNOSTER = `
    "Pater noster, qui es in caelis,\n" \
    "Sanctificetur nomen tuum.\n" \
    "Adveniat regnum tuum.\n" \
    "Fiat voluntas tua, sicut in coelo et in terra.\n" \
    "Panem nostrum quotidianum da nobis hodie.\n" \
    "Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris.\n" \
    "Et ne nos inducas in tentationem:\n" \
    "Sed libera nos a malo. Amen.`;

export const TRANSFORMATIONS = [
  { pattern: /\+\+/, replacement: "☩" },
  { pattern: /\+/, replacement: "☩" },
  { pattern: /V\./, replacement: "℣." },
  { pattern: /R\./, replacement: "℟." },
  { pattern: /^#/, replacement: "##" },
  { pattern: /^!x!/, replacement: "!" },
  { pattern: /^!! *(.*)/, replacement: "### $1" },
  { pattern: /^\[([^\]^]*)\]/, replacement: "### $1" },
  // { pattern: /^! *(.*)/, replacement: "*$1*" },
  { pattern: /^v\. */, replacement: "" },
  { pattern: /^_/, replacement: "" },
  { pattern: /\(\(/, replacement: "(" },
  { pattern: /\)\)/, replacement: ")" },
  { pattern: /\[/, replacement: "(" },
  { pattern: /\]/, replacement: ")" },
  { pattern: /\((\^\d+)\)/, replacement: "[\\1]" }, // preserving footnotes, like [^1], [^1]:
  { pattern: /^.*`.*$/, replacement: "" },
  { pattern: /^[&$]Gloria\.*$/, replacement: "Glória Patri…" },
  { pattern: /^\$Oremus\.*$/, replacement: "Oremus." },
  { pattern: /^\$Per Dominum eiusdem\.*$/, replacement: "Per Dominum…" },
  { pattern: /^\$Per Dominum\.*$/, replacement: "Per Dominum…" },
  { pattern: /^\$Per eu[mn]dem\.*$/, replacement: "Per eúndem…" },
  { pattern: /^\$Qui tecum eiusdem\.*$/, replacement: "Qui tecum…" },
  { pattern: /^\$Qui tecum\.*$/, replacement: "Qui tecum…" },
  { pattern: /^\$Qui vivis\.*$/, replacement: "Qui vivis…" },
  { pattern: /^\$Deo [Gg]ratias\.*$/, replacement: "Deo gratias." },
  {
    pattern: /^[&$]Dominus *[Vv]obiscum\.*$/,
    replacement: "℣. Dóminus vobíscum.    \n\r℟. Et cum spíritu tuo.",
  },
  { pattern: /^\*Modlitwa nad ludem\*.*$/, replacement: "" },
  { pattern: /^\$Pater noster.*$/, replacement: PATERNOSTER },
  { pattern: /\(rubrica 1955 aut rubrica 1960 dicitur\)/, replacement: "" },
  { pattern: /\(deinde dicuntur semper\)/, replacement: "" },
];

export const COMMEMORATIONS = {
  [COMMEMORATION]: "Commemoratio",
  [COMMEMORATED_ORATIO]: "Commemoratio Oratio",
  [COMMEMORATED_SECRETA]: "Commemoratio Secreta",
  [COMMEMORATED_POSTCOMMUNIO]: "Commemoratio Postcommunio",
};

export const SUPPLEMENTS = {};

export const POST_EPIPHANY = [
  TEMPORA_EPI1_0,
  TEMPORA_EPI1_1,
  TEMPORA_EPI1_2,
  TEMPORA_EPI1_3,
  TEMPORA_EPI1_4,
  TEMPORA_EPI1_5,
  TEMPORA_EPI1_6,
  TEMPORA_EPI2_0,
  TEMPORA_EPI2_1,
  TEMPORA_EPI2_2,
  TEMPORA_EPI2_3,
  TEMPORA_EPI2_4,
  TEMPORA_EPI2_5,
  TEMPORA_EPI2_6,
  TEMPORA_EPI3_0,
  TEMPORA_EPI3_1,
  TEMPORA_EPI3_2,
  TEMPORA_EPI3_3,
  TEMPORA_EPI3_4,
  TEMPORA_EPI3_5,
  TEMPORA_EPI3_6,
  TEMPORA_EPI4_0,
  TEMPORA_EPI4_1,
  TEMPORA_EPI4_2,
  TEMPORA_EPI4_3,
  TEMPORA_EPI4_4,
  TEMPORA_EPI4_5,
  TEMPORA_EPI4_6,
  TEMPORA_EPI5_0,
  TEMPORA_EPI5_1,
  TEMPORA_EPI5_2,
  TEMPORA_EPI5_3,
  TEMPORA_EPI5_4,
  TEMPORA_EPI5_5,
  TEMPORA_EPI5_6,
  TEMPORA_EPI6_0,
  TEMPORA_EPI6_1,
  TEMPORA_EPI6_2,
  TEMPORA_EPI6_3,
  TEMPORA_EPI6_4,
  TEMPORA_EPI6_5,
  TEMPORA_EPI6_6,
];

export const FROM_PRE_LENT_TO_POST_PENTECOST = [
  TEMPORA_QUADP1_0,
  TEMPORA_QUADP1_1,
  TEMPORA_QUADP1_2,
  TEMPORA_QUADP1_3,
  TEMPORA_QUADP1_4,
  TEMPORA_QUADP1_5,
  TEMPORA_QUADP1_6,
  TEMPORA_QUADP2_0,
  TEMPORA_QUADP2_1,
  TEMPORA_QUADP2_2,
  TEMPORA_QUADP2_3,
  TEMPORA_QUADP2_4,
  TEMPORA_QUADP2_5,
  TEMPORA_QUADP2_6,
  TEMPORA_QUADP3_0,
  TEMPORA_QUADP3_1,
  TEMPORA_QUADP3_2,
  TEMPORA_QUADP3_3,
  TEMPORA_QUADP3_4,
  TEMPORA_QUADP3_5,
  TEMPORA_QUADP3_6,
  TEMPORA_QUAD1_0,
  TEMPORA_QUAD1_1,
  TEMPORA_QUAD1_2,
  TEMPORA_QUAD1_3,
  TEMPORA_QUAD1_4,
  TEMPORA_QUAD1_5,
  TEMPORA_QUAD1_6,
  TEMPORA_QUAD2_0,
  TEMPORA_QUAD2_1,
  TEMPORA_QUAD2_2,
  TEMPORA_QUAD2_3,
  TEMPORA_QUAD2_4,
  TEMPORA_QUAD2_5,
  TEMPORA_QUAD2_6,
  TEMPORA_QUAD3_0,
  TEMPORA_QUAD3_1,
  TEMPORA_QUAD3_2,
  TEMPORA_QUAD3_3,
  TEMPORA_QUAD3_4,
  TEMPORA_QUAD3_5,
  TEMPORA_QUAD3_6,
  TEMPORA_QUAD4_0,
  TEMPORA_QUAD4_1,
  TEMPORA_QUAD4_2,
  TEMPORA_QUAD4_3,
  TEMPORA_QUAD4_4,
  TEMPORA_QUAD4_5,
  TEMPORA_QUAD4_6,
  TEMPORA_QUAD5_0,
  TEMPORA_QUAD5_1,
  TEMPORA_QUAD5_2,
  TEMPORA_QUAD5_3,
  TEMPORA_QUAD5_4,
  TEMPORA_QUAD5_5,
  TEMPORA_QUAD5_6,
  TEMPORA_QUAD6_0,
  TEMPORA_QUAD6_1,
  TEMPORA_QUAD6_2,
  TEMPORA_QUAD6_3,
  TEMPORA_QUAD6_4,
  TEMPORA_QUAD6_5,
  TEMPORA_QUAD6_6,
  TEMPORA_PASC0_0,
  TEMPORA_PASC0_1,
  TEMPORA_PASC0_2,
  TEMPORA_PASC0_3,
  TEMPORA_PASC0_4,
  TEMPORA_PASC0_5,
  TEMPORA_PASC0_6,
  TEMPORA_PASC1_0,
  TEMPORA_PASC1_1,
  TEMPORA_PASC1_2,
  TEMPORA_PASC1_3,
  TEMPORA_PASC1_4,
  TEMPORA_PASC1_5,
  TEMPORA_PASC1_6,
  TEMPORA_PASC2_0,
  TEMPORA_PASC2_1,
  TEMPORA_PASC2_2,
  TEMPORA_PASC2_3,
  TEMPORA_PASC2_4,
  TEMPORA_PASC2_5,
  TEMPORA_PASC2_6,
  TEMPORA_PASC3_0,
  TEMPORA_PASC3_1,
  TEMPORA_PASC3_2,
  TEMPORA_PASC3_3,
  TEMPORA_PASC3_4,
  TEMPORA_PASC3_5,
  TEMPORA_PASC3_6,
  TEMPORA_PASC4_0,
  TEMPORA_PASC4_1,
  TEMPORA_PASC4_2,
  TEMPORA_PASC4_3,
  TEMPORA_PASC4_4,
  TEMPORA_PASC4_5,
  TEMPORA_PASC4_6,
  TEMPORA_PASC5_0,
  TEMPORA_PASC5_1,
  TEMPORA_PASC5_2,
  TEMPORA_PASC5_3,
  TEMPORA_PASC5_4,
  TEMPORA_PASC5_5,
  TEMPORA_PASC5_6,
  TEMPORA_PASC6_0,
  TEMPORA_PASC6_1,
  TEMPORA_PASC6_2,
  TEMPORA_PASC6_3,
  TEMPORA_PASC6_4,
  TEMPORA_PASC6_5,
  TEMPORA_PASC6_6,
  TEMPORA_PASC7_0,
  TEMPORA_PASC7_1,
  TEMPORA_PASC7_2,
  TEMPORA_PASC7_3,
  TEMPORA_PASC7_4,
  TEMPORA_PASC7_5,
  TEMPORA_PASC7_6,
  TEMPORA_PENT01_0,
  TEMPORA_PENT01_1,
  TEMPORA_PENT01_2,
  TEMPORA_PENT01_3,
  TEMPORA_PENT01_4,
  TEMPORA_PENT01_5,
  TEMPORA_PENT01_6,
  TEMPORA_PENT02_0,
  TEMPORA_PENT02_1,
  TEMPORA_PENT02_2,
  TEMPORA_PENT02_3,
  TEMPORA_PENT02_4,
  TEMPORA_PENT02_5,
  TEMPORA_PENT02_6,
  TEMPORA_PENT03_0,
  TEMPORA_PENT03_1,
  TEMPORA_PENT03_2,
  TEMPORA_PENT03_3,
  TEMPORA_PENT03_4,
  TEMPORA_PENT03_5,
  TEMPORA_PENT03_6,
  TEMPORA_PENT04_0,
  TEMPORA_PENT04_1,
  TEMPORA_PENT04_2,
  TEMPORA_PENT04_3,
  TEMPORA_PENT04_4,
  TEMPORA_PENT04_5,
  TEMPORA_PENT04_6,
  TEMPORA_PENT05_0,
  TEMPORA_PENT05_1,
  TEMPORA_PENT05_2,
  TEMPORA_PENT05_3,
  TEMPORA_PENT05_4,
  TEMPORA_PENT05_5,
  TEMPORA_PENT05_6,
  TEMPORA_PENT06_0,
  TEMPORA_PENT06_1,
  TEMPORA_PENT06_2,
  TEMPORA_PENT06_3,
  TEMPORA_PENT06_4,
  TEMPORA_PENT06_5,
  TEMPORA_PENT06_6,
  TEMPORA_PENT07_0,
  TEMPORA_PENT07_1,
  TEMPORA_PENT07_2,
  TEMPORA_PENT07_3,
  TEMPORA_PENT07_4,
  TEMPORA_PENT07_5,
  TEMPORA_PENT07_6,
  TEMPORA_PENT08_0,
  TEMPORA_PENT08_1,
  TEMPORA_PENT08_2,
  TEMPORA_PENT08_3,
  TEMPORA_PENT08_4,
  TEMPORA_PENT08_5,
  TEMPORA_PENT08_6,
  TEMPORA_PENT09_0,
  TEMPORA_PENT09_1,
  TEMPORA_PENT09_2,
  TEMPORA_PENT09_3,
  TEMPORA_PENT09_4,
  TEMPORA_PENT09_5,
  TEMPORA_PENT09_6,
  TEMPORA_PENT10_0,
  TEMPORA_PENT10_1,
  TEMPORA_PENT10_2,
  TEMPORA_PENT10_3,
  TEMPORA_PENT10_4,
  TEMPORA_PENT10_5,
  TEMPORA_PENT10_6,
  TEMPORA_PENT11_0,
  TEMPORA_PENT11_1,
  TEMPORA_PENT11_2,
  TEMPORA_PENT11_3,
  TEMPORA_PENT11_4,
  TEMPORA_PENT11_5,
  TEMPORA_PENT11_6,
  TEMPORA_PENT12_0,
  TEMPORA_PENT12_1,
  TEMPORA_PENT12_2,
  TEMPORA_PENT12_3,
  TEMPORA_PENT12_4,
  TEMPORA_PENT12_5,
  TEMPORA_PENT12_6,
  TEMPORA_PENT13_0,
  TEMPORA_PENT13_1,
  TEMPORA_PENT13_2,
  TEMPORA_PENT13_3,
  TEMPORA_PENT13_4,
  TEMPORA_PENT13_5,
  TEMPORA_PENT13_6,
  TEMPORA_PENT14_0,
  TEMPORA_PENT14_1,
  TEMPORA_PENT14_2,
  TEMPORA_PENT14_3,
  TEMPORA_PENT14_4,
  TEMPORA_PENT14_5,
  TEMPORA_PENT14_6,
  TEMPORA_PENT15_0,
  TEMPORA_PENT15_1,
  TEMPORA_PENT15_2,
  TEMPORA_PENT15_3,
  TEMPORA_PENT15_4,
  TEMPORA_PENT15_5,
  TEMPORA_PENT15_6,
  TEMPORA_PENT16_0,
  TEMPORA_PENT16_1,
  TEMPORA_PENT16_2,
  TEMPORA_PENT16_3,
  TEMPORA_PENT16_4,
  TEMPORA_PENT16_5,
  TEMPORA_PENT16_6,
  TEMPORA_PENT17_0,
  TEMPORA_PENT17_1,
  TEMPORA_PENT17_2,
  TEMPORA_PENT17_3,
  TEMPORA_PENT17_4,
  TEMPORA_PENT17_5,
  TEMPORA_PENT17_6,
  TEMPORA_PENT18_0,
  TEMPORA_PENT18_1,
  TEMPORA_PENT18_2,
  TEMPORA_PENT18_3,
  TEMPORA_PENT18_4,
  TEMPORA_PENT18_5,
  TEMPORA_PENT18_6,
  TEMPORA_PENT19_0,
  TEMPORA_PENT19_1,
  TEMPORA_PENT19_2,
  TEMPORA_PENT19_3,
  TEMPORA_PENT19_4,
  TEMPORA_PENT19_5,
  TEMPORA_PENT19_6,
  TEMPORA_PENT20_0,
  TEMPORA_PENT20_1,
  TEMPORA_PENT20_2,
  TEMPORA_PENT20_3,
  TEMPORA_PENT20_4,
  TEMPORA_PENT20_5,
  TEMPORA_PENT20_6,
  TEMPORA_PENT21_0,
  TEMPORA_PENT21_1,
  TEMPORA_PENT21_2,
  TEMPORA_PENT21_3,
  TEMPORA_PENT21_4,
  TEMPORA_PENT21_5,
  TEMPORA_PENT21_6,
  TEMPORA_PENT22_0,
  TEMPORA_PENT22_1,
  TEMPORA_PENT22_2,
  TEMPORA_PENT22_3,
  TEMPORA_PENT22_4,
  TEMPORA_PENT22_5,
  TEMPORA_PENT22_6,
  TEMPORA_PENT23_0,
  TEMPORA_PENT23_1,
  TEMPORA_PENT23_2,
  TEMPORA_PENT23_3,
  TEMPORA_PENT23_4,
  TEMPORA_PENT23_5,
  TEMPORA_PENT23_6,
];

export const EMBER_DAYS_SEPTEMBER = [
  TEMPORA_PENT_3,
  "",
  TEMPORA_PENT_5,
  TEMPORA_PENT_6,
];

export const WEEK_24_AFTER_PENTECOST = [
  TEMPORA_PENT24_0,
  TEMPORA_PENT24_1,
  TEMPORA_PENT24_2,
  TEMPORA_PENT24_3,
  TEMPORA_PENT24_4,
  TEMPORA_PENT24_5,
  TEMPORA_PENT24_6,
];

export const ADVENT = [
  TEMPORA_ADV1_0,
  TEMPORA_ADV1_1,
  TEMPORA_ADV1_2,
  TEMPORA_ADV1_3,
  TEMPORA_ADV1_4,
  TEMPORA_ADV1_5,
  TEMPORA_ADV1_6,
  TEMPORA_ADV2_0,
  TEMPORA_ADV2_1,
  TEMPORA_ADV2_2,
  TEMPORA_ADV2_3,
  TEMPORA_ADV2_4,
  TEMPORA_ADV2_5,
  TEMPORA_ADV2_6,
  TEMPORA_ADV3_0,
  TEMPORA_ADV3_1,
  TEMPORA_ADV3_2,
  TEMPORA_ADV3_3,
  TEMPORA_ADV3_4,
  TEMPORA_ADV3_5,
  TEMPORA_ADV3_6,
  TEMPORA_ADV4_0,
  TEMPORA_ADV4_1,
  TEMPORA_ADV4_2,
  TEMPORA_ADV4_3,
  TEMPORA_ADV4_4,
  TEMPORA_ADV4_5,
];

export const NATIVITY_OCTAVE_SUNDAY = [TEMPORA_NAT1_0];

export const NATIVITY_OCTAVE_FERIA = [TEMPORA_NAT1_1];

export const HOLY_NAME = [TEMPORA_NAT2_0];

export const CHRIST_KING = [SANCTI_10_DUr];

export const SUNDAY_IN_CHRISTMAS_OCTAVE = [TEMPORA_NAT1_0];

export const SANCTI = [
  SANCTI_01_01,
  SANCTI_01_06,
  SANCTI_01_13,
  SANCTI_01_14,
  SANCTI_01_15,
  SANCTI_01_16,
  SANCTI_01_17,
  SANCTI_01_18,
  SANCTI_01_19,
  SANCTI_01_20,
  SANCTI_01_21,
  SANCTI_01_22,
  SANCTI_01_23,
  SANCTI_01_24,
  SANCTI_01_25,
  SANCTI_01_26,
  SANCTI_01_27,
  SANCTI_01_28,
  SANCTI_01_29,
  SANCTI_01_30,
  SANCTI_01_31,
  SANCTI_02_01,
  SANCTI_02_02,
  SANCTI_02_03,
  SANCTI_02_04,
  SANCTI_02_05,
  SANCTI_02_06,
  SANCTI_02_07,
  SANCTI_02_08,
  SANCTI_02_09,
  SANCTI_02_10,
  SANCTI_02_11,
  SANCTI_02_12,
  SANCTI_02_14,
  SANCTI_02_15,
  SANCTI_02_18,
  SANCTI_02_22,
  SANCTI_02_23,
  SANCTI_02_24,
  SANCTI_02_27,
  SANCTI_03_04,
  SANCTI_03_06,
  SANCTI_03_07,
  SANCTI_03_08,
  SANCTI_03_09,
  SANCTI_03_10,
  SANCTI_03_12,
  SANCTI_03_17,
  SANCTI_03_18,
  SANCTI_03_19,
  SANCTI_03_21,
  SANCTI_03_24,
  SANCTI_03_25,
  SANCTI_03_27,
  SANCTI_03_28,
  SANCTI_04_11,
  SANCTI_04_13,
  SANCTI_04_14,
  SANCTI_04_17,
  SANCTI_04_21,
  SANCTI_04_22,
  SANCTI_04_23,
  SANCTI_04_24,
  SANCTI_04_25,
  SANCTI_04_26,
  SANCTI_04_27,
  SANCTI_04_28,
  SANCTI_04_29,
  SANCTI_04_30,
  SANCTI_05_01,
  SANCTI_05_02,
  SANCTI_05_03,
  SANCTI_05_04,
  SANCTI_05_05,
  SANCTI_05_06,
  SANCTI_05_07,
  SANCTI_05_08,
  SANCTI_05_09,
  SANCTI_05_10,
  SANCTI_05_12,
  SANCTI_05_13,
  SANCTI_05_14,
  SANCTI_05_15,
  SANCTI_05_17,
  SANCTI_05_18,
  SANCTI_05_19,
  SANCTI_05_20,
  SANCTI_05_25,
  SANCTI_05_26,
  SANCTI_05_27,
  SANCTI_05_28,
  SANCTI_05_29,
  SANCTI_05_30,
  SANCTI_05_31,
  SANCTI_06_01,
  SANCTI_06_02,
  SANCTI_06_04,
  SANCTI_06_05,
  SANCTI_06_06,
  SANCTI_06_09,
  SANCTI_06_10,
  SANCTI_06_11,
  SANCTI_06_12,
  SANCTI_06_13,
  SANCTI_06_14,
  SANCTI_06_15,
  SANCTI_06_17,
  SANCTI_06_18,
  SANCTI_06_19,
  SANCTI_06_20,
  SANCTI_06_21,
  SANCTI_06_22,
  SANCTI_06_23,
  SANCTI_06_24,
  SANCTI_06_25,
  SANCTI_06_26,
  SANCTI_06_28,
  SANCTI_06_29,
  SANCTI_06_30,
  SANCTI_07_01,
  SANCTI_07_02,
  SANCTI_07_03,
  SANCTI_07_05,
  SANCTI_07_07,
  SANCTI_07_08,
  SANCTI_07_10,
  SANCTI_07_11,
  SANCTI_07_12,
  SANCTI_07_14,
  SANCTI_07_15,
  SANCTI_07_16,
  SANCTI_07_17,
  SANCTI_07_18,
  SANCTI_07_19,
  SANCTI_07_20,
  SANCTI_07_21,
  SANCTI_07_22,
  SANCTI_07_23,
  SANCTI_07_24,
  SANCTI_07_25,
  SANCTI_07_26,
  SANCTI_07_27,
  SANCTI_07_28,
  SANCTI_07_29,
  SANCTI_07_30,
  SANCTI_07_31,
  SANCTI_08_01,
  SANCTI_08_02,
  SANCTI_08_04,
  SANCTI_08_05,
  SANCTI_08_06,
  SANCTI_08_07,
  SANCTI_08_08,
  SANCTI_08_09,
  SANCTI_08_10,
  SANCTI_08_11,
  SANCTI_08_12,
  SANCTI_08_13,
  SANCTI_08_14,
  SANCTI_08_15,
  SANCTI_08_16,
  SANCTI_08_17,
  SANCTI_08_18,
  SANCTI_08_19,
  SANCTI_08_20,
  SANCTI_08_21,
  SANCTI_08_22,
  SANCTI_08_23,
  SANCTI_08_24,
  SANCTI_08_25,
  SANCTI_08_26,
  SANCTI_08_27,
  SANCTI_08_28,
  SANCTI_08_29,
  SANCTI_08_30,
  SANCTI_08_31,
  SANCTI_09_01,
  SANCTI_09_02,
  SANCTI_09_03,
  SANCTI_09_05,
  SANCTI_09_08,
  SANCTI_09_09,
  SANCTI_09_10,
  SANCTI_09_11,
  SANCTI_09_12,
  SANCTI_09_14,
  SANCTI_09_15,
  SANCTI_09_16,
  SANCTI_09_17,
  SANCTI_09_18,
  SANCTI_09_19,
  SANCTI_09_20,
  SANCTI_09_21,
  SANCTI_09_22,
  SANCTI_09_23,
  SANCTI_09_24,
  SANCTI_09_26,
  SANCTI_09_27,
  SANCTI_09_28,
  SANCTI_09_29,
  SANCTI_09_30,
  SANCTI_10_01,
  SANCTI_10_02,
  SANCTI_10_03,
  SANCTI_10_04,
  SANCTI_10_05,
  SANCTI_10_06,
  SANCTI_10_07,
  SANCTI_10_08,
  SANCTI_10_09,
  SANCTI_10_10,
  SANCTI_10_11,
  SANCTI_10_13,
  SANCTI_10_14,
  SANCTI_10_15,
  SANCTI_10_16,
  SANCTI_10_17,
  SANCTI_10_18,
  SANCTI_10_19,
  SANCTI_10_20,
  SANCTI_10_21,
  SANCTI_10_23,
  SANCTI_10_24,
  SANCTI_10_25,
  SANCTI_10_28,
  SANCTI_11_01,
  SANCTI_11_02_1,
  SANCTI_11_02_2,
  SANCTI_11_02_3,
  SANCTI_11_04,
  SANCTI_11_08,
  SANCTI_11_09,
  SANCTI_11_10,
  SANCTI_11_11,
  SANCTI_11_12,
  SANCTI_11_13,
  SANCTI_11_14,
  SANCTI_11_15,
  SANCTI_11_16,
  SANCTI_11_17,
  SANCTI_11_18,
  SANCTI_11_19,
  SANCTI_11_20,
  SANCTI_11_21,
  SANCTI_11_22,
  SANCTI_11_23,
  SANCTI_11_24,
  SANCTI_11_25,
  SANCTI_11_26,
  SANCTI_11_29,
  SANCTI_11_30,
  SANCTI_12_02,
  SANCTI_12_03,
  SANCTI_12_04,
  SANCTI_12_05,
  SANCTI_12_06,
  SANCTI_12_07,
  SANCTI_12_08,
  SANCTI_12_10,
  SANCTI_12_11,
  SANCTI_12_13,
  SANCTI_12_16,
  SANCTI_12_21,
  SANCTI_12_24,
  SANCTI_12_25_1,
  SANCTI_12_25_2,
  SANCTI_12_25_3,
  SANCTI_12_26,
  SANCTI_12_27,
  SANCTI_12_28,
  SANCTI_12_29,
  SANCTI_12_31,
];

// PT

export const TITLES_PT: Record<string, string> = {
  [TEMPORA_EPI1_0]: "Sagrada Família",
  [TEMPORA_EPI1_1]: "Segunda-feira da semana após a Epifania",
  [TEMPORA_EPI1_2]: "Terça-feira da semana após a Epifania",
  [TEMPORA_EPI1_3]: "Quarta-feira da semana após a Epifania",
  [TEMPORA_EPI1_4]: "Quinta-feira da semana após a Epifania",
  [TEMPORA_EPI1_5]: "Sexta-feira da semana após a Epifania",
  [TEMPORA_EPI1_6]: "Sábado da semana após a Epifania",
  [TEMPORA_EPI2_0]: "2º Domingo após a Epifania",
  [TEMPORA_EPI2_1]: "Segunda-feira da 2ª semana após a Epifania",
  [TEMPORA_EPI2_2]: "Terça-feira da 2ª semana após a Epifania",
  [TEMPORA_EPI2_3]: "Quarta-feira da 2ª semana após a Epifania",
  [TEMPORA_EPI2_4]: "Quinta-feira da 2ª semana após a Epifania",
  [TEMPORA_EPI2_5]: "Sexta-feira da 2ª semana após a Epifania",
  [TEMPORA_EPI2_6]: "Sábado da 2ª semana após a Epifania",
  [TEMPORA_EPI3_0]: "3º Domingo após a Epifania",
  [TEMPORA_EPI3_1]: "Segunda-feira da 3ª semana após a Epifania",
  [TEMPORA_EPI3_2]: "Terça-feira da 3ª semana após a Epifania",
  [TEMPORA_EPI3_3]: "Quarta-feira da 3ª semana após a Epifania",
  [TEMPORA_EPI3_4]: "Quinta-feira da 3ª semana após a Epifania",
  [TEMPORA_EPI3_5]: "Sexta-feira da 3ª semana após a Epifania",
  [TEMPORA_EPI3_6]: "Sábado da 3ª semana após a Epifania",
  [TEMPORA_EPI4_0]: "4º Domingo após a Epifania",
  [TEMPORA_EPI4_1]: "Segunda-feira da 4ª semana após a Epifania",
  [TEMPORA_EPI4_2]: "Terça-feira da 4ª semana após a Epifania",
  [TEMPORA_EPI4_3]: "Quarta-feira da 4ª semana após a Epifania",
  [TEMPORA_EPI4_4]: "Quinta-feira da 4ª semana após a Epifania",
  [TEMPORA_EPI4_5]: "Sexta-feira da 4ª semana após a Epifania",
  [TEMPORA_EPI4_6]: "Sábado da 4ª semana após a Epifania",
  [TEMPORA_EPI5_0]: "5º Domingo após a Epifania",
  [TEMPORA_EPI5_1]: "Segunda-feira da 5ª semana após a Epifania",
  [TEMPORA_EPI5_2]: "Terça-feira da 5ª semana após a Epifania",
  [TEMPORA_EPI5_3]: "Quarta-feira da 5ª semana após a Epifania",
  [TEMPORA_EPI5_4]: "Quinta-feira da 5ª semana após a Epifania",
  [TEMPORA_EPI5_5]: "Sexta-feira da 5ª semana após a Epifania",
  [TEMPORA_EPI5_6]: "Sábado da 5ª semana após a Epifania",
  [TEMPORA_EPI6_0]: "6º Domingo após a Epifania",
  [TEMPORA_EPI6_1]: "Segunda-feira da 6ª semana após a Epifania",
  [TEMPORA_EPI6_2]: "Terça-feira da 6ª semana após a Epifania",
  [TEMPORA_EPI6_3]: "Quarta-feira da 6ª semana após a Epifania",
  [TEMPORA_EPI6_4]: "Quinta-feira da 6ª semana após a Epifania",
  [TEMPORA_EPI6_5]: "Sexta-feira da 6ª semana após a Epifania",
  [TEMPORA_EPI6_6]: "Sábado da 6ª semana após a Epifania",
  [TEMPORA_QUADP1_0]: "Domingo da Septuagésima",
  [TEMPORA_QUADP1_1]: "Segunda-feira da semana da Septuagésima",
  [TEMPORA_QUADP1_2]: "Terça-feira da semana da Septuagésima",
  [TEMPORA_QUADP1_3]: "Quarta-feira da semana da Septuagésima",
  [TEMPORA_QUADP1_4]: "Quinta-feira da semana da Septuagésima",
  [TEMPORA_QUADP1_5]: "Sexta-feira da semana da Septuagésima",
  [TEMPORA_QUADP1_6]: "Sábado da semana da Septuagésima",
  [TEMPORA_QUADP2_0]: "Domingo da Sexagésima",
  [TEMPORA_QUADP2_1]: "Segunda-feira da semana da Sexagésima",
  [TEMPORA_QUADP2_2]: "Terça-feira da semana da Sexagésima",
  [TEMPORA_QUADP2_3]: "Quarta-feira da semana da Sexagésima",
  [TEMPORA_QUADP2_4]: "Quinta-feira da semana da Sexagésima",
  [TEMPORA_QUADP2_5]: "Sexta-feira da semana da Sexagésima",
  [TEMPORA_QUADP2_6]: "Sábado da semana da Sexagésima",
  [TEMPORA_QUADP3_0]: "Domingo da Quinquagésima",
  [TEMPORA_QUADP3_1]: "Segunda-feira da semana da Quinquagésima",
  [TEMPORA_QUADP3_2]: "Terça-feira da semana da Quinquagésima",
  [TEMPORA_QUADP3_3]: "Quarta-feira de Cinzas",
  [TEMPORA_QUADP3_4]: "Quinta-feira depois das Cinzas",
  [TEMPORA_QUADP3_5]: "Sexta-feira depois das Cinzas",
  [TEMPORA_QUADP3_6]: "Sábado depois das Cinzas",
  [TEMPORA_QUAD1_0]: "1º Domingo da Quaresma",
  [TEMPORA_QUAD1_1]: "Segunda-feira da 1ª semana da Quaresma",
  [TEMPORA_QUAD1_2]: "Terça-feira da 1ª semana da Quaresma",
  [TEMPORA_QUAD1_3]:
    "Quarta-feira da 1ª Semana da Quaresma, Têmporas da Primavera",
  [TEMPORA_QUAD1_4]: "Quinta-feira da 1ª semana da Quaresma",
  [TEMPORA_QUAD1_5]: "Sexta-feira 1ª semana da Quaresma, Têmporas da Primavera",
  [TEMPORA_QUAD1_6]: "Sábado da 1ª semana da Quaresma, Têmporas da Primavera",
  [TEMPORA_QUAD2_0]: "2º Domingo da Quaresma",
  [TEMPORA_QUAD2_1]: "Segunda-feira da 2ª semana da Quaresma",
  [TEMPORA_QUAD2_2]: "Terça-feira da 2ª semana da Quaresma",
  [TEMPORA_QUAD2_3]: "Quarta-feira da 2ª semana da Quaresma",
  [TEMPORA_QUAD2_4]: "Quinta-feira da 2ª semana da Quaresma",
  [TEMPORA_QUAD2_5]: "Sexta-feira da 2ª semana da Quaresma",
  [TEMPORA_QUAD2_6]: "Sábado da 2ª semana da Quaresma",
  [TEMPORA_QUAD3_0]: "3º Domingo da Quaresma",
  [TEMPORA_QUAD3_1]: "Segunda-feira da 3ª semana da Quaresma",
  [TEMPORA_QUAD3_2]: "Terça-feira da 3ª semana da Quaresma",
  [TEMPORA_QUAD3_3]: "Quarta-feira da 3ª semana da Quaresma",
  [TEMPORA_QUAD3_4]: "Quinta-feira da 3ª semana da Quaresma",
  [TEMPORA_QUAD3_5]: "Sexta-feira da 3ª semana da Quaresma",
  [TEMPORA_QUAD3_6]: "Sábado da 3ª semana da Quaresma",
  [TEMPORA_QUAD4_0]: "4º Domingo da Quaresma",
  [TEMPORA_QUAD4_1]: "Segunda-feira da 4ª semana da Quaresma",
  [TEMPORA_QUAD4_2]: "Terça-feira da 4ª semana da Quaresma",
  [TEMPORA_QUAD4_3]: "Quarta-feira da 4ª semana da Quaresma",
  [TEMPORA_QUAD4_4]: "Quinta-feira da 4ª semana da Quaresma",
  [TEMPORA_QUAD4_5]: "Sexta-feira da 4ª semana da Quaresma",
  [TEMPORA_QUAD4_6]: "Sábado da 4ª semana da Quaresma",
  [TEMPORA_QUAD5_0]: "Domingo da Paixão",
  [TEMPORA_QUAD5_1]: "Segunda-feira da semana da Paixão",
  [TEMPORA_QUAD5_2]: "Terça-feira da semana da Paixão",
  [TEMPORA_QUAD5_3]: "Quarta-feira da semana da Paixão",
  [TEMPORA_QUAD5_4]: "Quinta-feira da semana da Paixão",
  [TEMPORA_QUAD5_5]: "Sexta-feira da semana da Paixão",
  [TEMPORA_QUAD5_6]: "Sábado da semana da Paixão",
  [TEMPORA_QUAD6_0]: "Domingo de Ramos",
  [TEMPORA_QUAD6_1]: "Segunda-feira Santa",
  [TEMPORA_QUAD6_2]: "Terça-feira Santa",
  [TEMPORA_QUAD6_3]: "Quarta-feira Santa",
  [TEMPORA_QUAD6_4]: "Quinta-feira Santa",
  [TEMPORA_QUAD6_5]: "Sexta-feira Santa",
  [TEMPORA_QUAD6_6]: "Sábado Santo",
  [TEMPORA_PASC0_0]: "Domingo da Ressurreição",
  [TEMPORA_PASC0_1]: "Segunda-feira Pascal",
  [TEMPORA_PASC0_2]: "Terça-feira Pascal",
  [TEMPORA_PASC0_3]: "Quarta-feira Pascal",
  [TEMPORA_PASC0_4]: "Quinta-feira Pascal",
  [TEMPORA_PASC0_5]: "Sexta-feira Pascal",
  [TEMPORA_PASC0_6]: "Sábado Pascal",
  [TEMPORA_PASC1_0]: "Domingo in Albis",
  [TEMPORA_PASC1_1]: "Segunda-feira da 1º semana depois da Páscoa",
  [TEMPORA_PASC1_2]: "Terça-feira da 1ª semana depois da Páscoa",
  [TEMPORA_PASC1_3]: "Quarta-feira da 1ª semana depois da Páscoa",
  [TEMPORA_PASC1_4]: "Quinta-feira da 1ª semana depois da Páscoa",
  [TEMPORA_PASC1_5]: "Sexta-feira da 1ª semana depois da Páscoa",
  [TEMPORA_PASC1_6]: "Sábado da 1ª semana depois da Páscoa",
  [TEMPORA_PASC2_0]: "2º Domingo depois da Páscoa",
  [TEMPORA_PASC2_1]: "Segunda-feira da 2ª semana depois da Páscoa",
  [TEMPORA_PASC2_2]: "Terça-feira da 2ª semana depois da Páscoa",
  [TEMPORA_PASC2_3]: "S. José, Padroeiro da Santa Igreja e dos Moribundos",
  [TEMPORA_PASC2_4]: "Quinta-feira da 2ª semana depois da Páscoa",
  [TEMPORA_PASC2_5]: "Sexta-feira da 2ª semana depois da Páscoa",
  [TEMPORA_PASC2_6]: "Sábado da 2ª semana depois da Páscoa",
  [TEMPORA_PASC3_0]: "3º Domingo depois da Páscoa",
  [TEMPORA_PASC3_1]: "Segunda-feira da 3ª semana depois da Páscoa",
  [TEMPORA_PASC3_2]: "Terça-feira da 3ª semana depois da Páscoa",
  [TEMPORA_PASC3_3]: "Quarta-feira da 3ª semana depois da Páscoa",
  [TEMPORA_PASC3_4]: "Quinta-feira da 3ª semana depois da Páscoa",
  [TEMPORA_PASC3_5]: "Sexta-feira da 3ª semana depois da Páscoa",
  [TEMPORA_PASC3_6]: "Sábado da 3ª semana depois da Páscoa",
  [TEMPORA_PASC4_0]: "4º Domingo depois da Páscoa",
  [TEMPORA_PASC4_1]: "Segunda-feira da 4ª semana depois da Páscoa",
  [TEMPORA_PASC4_2]: "Terça-feira da 4ª semana depois da Páscoa",
  [TEMPORA_PASC4_3]: "Quarta-feira da 4ª semana depois da Páscoa",
  [TEMPORA_PASC4_4]: "Quinta-feira da 4ª semana depois da Páscoa",
  [TEMPORA_PASC4_5]: "Sexta-feira da 4ª semana depois da Páscoa",
  [TEMPORA_PASC4_6]: "Sábado da 4ª semana depois da Páscoa",
  [TEMPORA_PASC5_0]: "5º Domingo depois da Páscoa",
  [TEMPORA_PASC5_1]: "Segunda-feira das Rogações",
  [TEMPORA_PASC5_2]: "Terça-feira das Rogações",
  [TEMPORA_PASC5_3]: "Vigília da Ascensão",
  [TEMPORA_PASC5_4]: "Ascensão",
  [TEMPORA_PASC5_5]: "Sexta-feira depois da Ascensão",
  [TEMPORA_PASC5_6]: "Sábado depois da Ascensão",
  [TEMPORA_PASC6_0]: "Domingo depois da Ascensão",
  [TEMPORA_PASC6_1]: "Segunda-feira da semana depois da Ascensão",
  [TEMPORA_PASC6_2]: "Terça-feira da semana depois da Ascensão",
  [TEMPORA_PASC6_3]: "Quarta-feira da semana depois da Ascensão",
  [TEMPORA_PASC6_4]: "Quinta-feira da semana depois da Ascensão",
  [TEMPORA_PASC6_5]: "Sexta-feira da semana depois da Ascensão",
  [TEMPORA_PASC6_6]: "Vigília de Pentecostes",
  [TEMPORA_PASC7_0]: "Domingo de Pentecostes",
  [TEMPORA_PASC7_1]: "Segunda-feira na semana da oitava de Pentecostes",
  [TEMPORA_PASC7_2]: "Terça-feira na semana da oitava de Pentecostes",
  [TEMPORA_PASC7_3]: "Quarta-feira das Têmporas de Pentecostes",
  [TEMPORA_PASC7_4]: "Quinta-feira na semana da oitava de Pentecostes",
  [TEMPORA_PASC7_5]: "Sexta-feira das Têmporas de Pentecostes",
  [TEMPORA_PASC7_6]: "Sábado das Têmporas de Pentecostes",
  [TEMPORA_PENT01_0]: "Domingo da Santíssima Trindade",
  [TEMPORA_PENT01_1]: "Segunda-feira depois 1ª semana da oitava de Pentecostes",
  [TEMPORA_PENT01_2]: "Terça-feira depois 1ª semana da oitava de Pentecostes",
  [TEMPORA_PENT01_3]: "Quarta-feira depois 1ª semana da oitava de Pentecostes",
  [TEMPORA_PENT01_4]: "Santíssimo Corpo de Cristo",
  [TEMPORA_PENT01_5]: "Sexta-feira depois 1ª semana da oitava de Pentecostes",
  [TEMPORA_PENT01_6]: "Sábado depois 1ª semana da oitava de Pentecostes",
  [TEMPORA_PENT02_0]: "2º Domingo depois de Pentecostes",
  [TEMPORA_PENT02_1]: "Segunda-feira da 2ª semana depois de Pentecostes",
  [TEMPORA_PENT02_2]: "Terça-feira da 2ª semana depois de Pentecostes",
  [TEMPORA_PENT02_3]: "Quarta-feira da 2ª semana depois de Pentecostes",
  [TEMPORA_PENT02_4]: "Quinta-feira da 2ª semana depois de Pentecostes",
  [TEMPORA_PENT02_5]: "Santíssimo Coração de Jesus",
  [TEMPORA_PENT02_6]: "Sábado da 2ª semana depois de Pentecostes",
  [TEMPORA_PENT03_0]: "3º Domingo depois de Pentecostes",
  [TEMPORA_PENT03_1]: "Segunda-feira da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT03_2]: "Terça-feira da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT03_3]: "Quarta-feira da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT03_4]: "Quinta-feira da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT03_5]: "Sexta-feira da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT03_6]: "Sábado da 3ª semana depois de Pentecostes",
  [TEMPORA_PENT04_0]: "4º Domingo depois de Pentecostes",
  [TEMPORA_PENT04_1]: "Segunda-feira da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT04_2]: "Terça-feira da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT04_3]: "Quarta-feira da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT04_4]: "Quinta-feira da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT04_5]: "Sexta-feira da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT04_6]: "Sábado da 4ª semana depois de Pentecostes",
  [TEMPORA_PENT05_0]: "5º Domingo depois de Pentecostes",
  [TEMPORA_PENT05_1]: "Segunda-feira da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT05_2]: "Terça-feira da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT05_3]: "Quarta-feira da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT05_4]: "Quinta-feira da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT05_5]: "Sexta-feira da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT05_6]: "Sábado da 5ª semana depois de Pentecostes",
  [TEMPORA_PENT06_0]: "6º Domingo depois de Pentecostes",
  [TEMPORA_PENT06_1]: "Segunda-feira da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT06_2]: "Terça-feira da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT06_3]: "Quarta-feira da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT06_4]: "Quinta-feira da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT06_5]: "Sexta-feira da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT06_6]: "Sábado da 6ª semana depois de Pentecostes",
  [TEMPORA_PENT07_0]: "7º Domingo depois de Pentecostes",
  [TEMPORA_PENT07_1]: "Segunda-feira da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT07_2]: "Terça-feira da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT07_3]: "Quarta-feira da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT07_4]: "Quinta-feira da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT07_5]: "Sexta-feira da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT07_6]: "Sábado da 7ª semana depois de Pentecostes",
  [TEMPORA_PENT08_0]: "8º Domingo depois de Pentecostes",
  [TEMPORA_PENT08_1]: "Segunda-feira da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT08_2]: "Terça-feira da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT08_3]: "Quarta-feira da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT08_4]: "Quinta-feira da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT08_5]: "Sexta-feira da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT08_6]: "Sábado da 8ª semana depois de Pentecostes",
  [TEMPORA_PENT09_0]: "9º Domingo depois de Pentecostes",
  [TEMPORA_PENT09_1]: "Segunda-feira da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT09_2]: "Terça-feira da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT09_3]: "Quarta-feira da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT09_4]: "Quinta-feira da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT09_5]: "Sexta-feira da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT09_6]: "Sábado da 9ª semana depois de Pentecostes",
  [TEMPORA_PENT10_0]: "10º Domingo depois de Pentecostes",
  [TEMPORA_PENT10_1]: "Segunda-feira da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT10_2]: "Terça-feira da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT10_3]: "Quarta-feira da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT10_4]: "Quinta-feira da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT10_5]: "Sexta-feira da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT10_6]: "Sábado da 10ª semana depois de Pentecostes",
  [TEMPORA_PENT11_0]: "11º Domingo depois de Pentecostes",
  [TEMPORA_PENT11_1]: "Segunda-feira da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT11_2]: "Terça-feira da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT11_3]: "Quarta-feira da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT11_4]: "Quinta-feira da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT11_5]: "Sexta-feira da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT11_6]: "Sábado da 11ª semana depois de Pentecostes",
  [TEMPORA_PENT12_0]: "12º Domingo depois de Pentecostes",
  [TEMPORA_PENT12_1]: "Segunda-feira da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT12_2]: "Terça-feira da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT12_3]: "Quarta-feira da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT12_4]: "Quinta-feira da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT12_5]: "Sexta-feira da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT12_6]: "Sábado da 12ª semana depois de Pentecostes",
  [TEMPORA_PENT13_0]: "13º Domingo depois de Pentecostes",
  [TEMPORA_PENT13_1]: "Segunda-feira da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT13_2]: "Terça-feira da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT13_3]: "Quarta-feira da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT13_4]: "Quinta-feira da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT13_5]: "Sexta-feira da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT13_6]: "Sábado da 13ª semana depois de Pentecostes",
  [TEMPORA_PENT14_0]: "14º Domingo depois de Pentecostes",
  [TEMPORA_PENT14_1]: "Segunda-feira da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT14_2]: "Terça-feira da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT14_3]: "Quarta-feira da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT14_4]: "Quinta-feira da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT14_5]: "Sexta-feira da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT14_6]: "Sábado da 14ª semana depois de Pentecostes",
  [TEMPORA_PENT15_0]: "15º Domingo depois de Pentecostes",
  [TEMPORA_PENT15_1]: "Segunda-feira da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT15_2]: "Terça-feira da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT15_3]: "Quarta-feira da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT15_4]: "Quinta-feira da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT15_5]: "Sexta-feira da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT15_6]: "Sábado da 15ª semana depois de Pentecostes",
  [TEMPORA_PENT16_0]: "16º Domingo depois de Pentecostes",
  [TEMPORA_PENT16_1]: "Segunda-feira da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT16_2]: "Terça-feira da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT16_3]: "Quarta-feira da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT16_4]: "Quinta-feira da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT16_5]: "Sexta-feira da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT16_6]: "Sábado da 16ª semana depois de Pentecostes",
  [TEMPORA_PENT17_0]: "17º Domingo depois de Pentecostes",
  [TEMPORA_PENT17_1]: "Segunda-feira da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT17_2]: "Terça-feira da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT17_3]: "Quarta-feira da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT17_4]: "Quinta-feira da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT17_5]: "Sexta-feira da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT17_6]: "Sábado da 17ª semana depois de Pentecostes",
  [TEMPORA_PENT18_0]: "18º Domingo depois de Pentecostes",
  [TEMPORA_PENT18_1]: "Segunda-feira da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT18_2]: "Terça-feira da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT18_3]: "Quarta-feira da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT18_4]: "Quinta-feira da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT18_5]: "Sexta-feira da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT18_6]: "Sábado da 18ª semana depois de Pentecostes",
  [TEMPORA_PENT19_0]: "19º Domingo depois de Pentecostes",
  [TEMPORA_PENT19_1]: "Segunda-feira da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT19_2]: "Terça-feira da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT19_3]: "Quarta-feira da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT19_4]: "Quinta-feira da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT19_5]: "Sexta-feira da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT19_6]: "Sábado da 19ª semana depois de Pentecostes",
  [TEMPORA_PENT20_0]: "20º Domingo depois de Pentecostes",
  [TEMPORA_PENT20_1]: "Segunda-feira da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT20_2]: "Terça-feira da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT20_3]: "Quarta-feira da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT20_4]: "Quinta-feira da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT20_5]: "Sexta-feira da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT20_6]: "Sábado da 20ª semana depois de Pentecostes",
  [TEMPORA_PENT21_0]: "21º Domingo depois de Pentecostes",
  [TEMPORA_PENT21_1]: "Segunda-feira da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT21_2]: "Terça-feira da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT21_3]: "Quarta-feira da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT21_4]: "Quinta-feira da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT21_5]: "Sexta-feira da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT21_6]: "Sábado da 21ª semana depois de Pentecostes",
  [TEMPORA_PENT22_0]: "22º Domingo depois de Pentecostes",
  [TEMPORA_PENT22_1]: "Segunda-feira da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT22_2]: "Terça-feira da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT22_3]: "Quarta-feira da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT22_4]: "Quinta-feira da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT22_5]: "Sexta-feira da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT22_6]: "Sábado da 22ª semana depois de Pentecostes",
  [TEMPORA_PENT23_0]: "23º Domingo depois de Pentecostes",
  [TEMPORA_PENT23_1]: "Segunda-feira da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT23_2]: "Terça-feira da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT23_3]: "Quarta-feira da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT23_4]: "Quinta-feira da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT23_5]: "Sexta-feira da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT23_6]: "Sábado da 23ª semana depois de Pentecostes",
  [TEMPORA_PENT_3]: "Quarta-feira das Têmporas de Setembro",
  [TEMPORA_PENT_5]: "Sexta-feira das Têmporas de Setembro",
  [TEMPORA_PENT_6]: "Sábado das Têmporas de Setembro",
  [TEMPORA_PENT24_0]: "24 Domingo depois de Pentecostes",
  [TEMPORA_PENT24_1]: "Segunda-feira da 24ª semana depois de Pentecostes",
  [TEMPORA_PENT24_2]: "Terça-feira da 24ª semana depois de Pentecostes",
  [TEMPORA_PENT24_3]: "Quarta-feira da 24ª semana depois de Pentecostes",
  [TEMPORA_PENT24_4]: "Quinta-feira da 24ª semana depois de Pentecostes",
  [TEMPORA_PENT24_5]: "Sexta-feira da 24ª semana depois de Pentecostes",
  [TEMPORA_PENT24_6]: "Sábado da 24ª semana depois de Pentecostes",
  [TEMPORA_ADV1_0]: "1ª Domingo do Advento",
  [TEMPORA_ADV1_1]: "Segunda-feira da 1ª semana do Advento",
  [TEMPORA_ADV1_2]: "Terça-feira da 1ª semana do Advento",
  [TEMPORA_ADV1_3]: "Quarta-feira da 1ª semana do Advento",
  [TEMPORA_ADV1_4]: "Quinta-feira da 1ª semana do Advento",
  [TEMPORA_ADV1_5]: "Sexta-feira da 1ª semana do Advento",
  [TEMPORA_ADV1_6]: "Sábado da 1ª semana do Advento",
  [TEMPORA_ADV2_0]: "2º Domingo do Advento",
  [TEMPORA_ADV2_1]: "Segunda-feira da 2ª semana do Advento",
  [TEMPORA_ADV2_2]: "Terça-feira da 2ª semana do Advento",
  [TEMPORA_ADV2_3]: "Quarta-feira da 2ª semana do Advento",
  [TEMPORA_ADV2_4]: "Quinta-feira da 2ª semana do Advento",
  [TEMPORA_ADV2_5]: "Sexta-feira da 2ª semana do Advento",
  [TEMPORA_ADV2_6]: "Sábado da 2ª semana do Advento",
  [TEMPORA_ADV3_0]: "3º Domingo do Advento",
  [TEMPORA_ADV3_1]: "Segunda-feira da 3ª semana do Advento",
  [TEMPORA_ADV3_2]: "Terça-feira da 3ª semana do Advento",
  [TEMPORA_ADV3_3]: "Quarta-feira das Têmporas de Inverno",
  [TEMPORA_ADV3_4]: "Quinta-feira da 3ª semana do Advento",
  [TEMPORA_ADV3_5]: "Sexta-feira das Têmporas de Inverno",
  [TEMPORA_ADV3_6]: "Sábado das Têmporas de Inverno",
  [TEMPORA_ADV4_0]: "4º Domingo do Advento",
  [TEMPORA_ADV4_1]: "Segunda-feira da 4ª semana do Advento",
  [TEMPORA_ADV4_2]: "Terça-feira da 4ª semana do Advento",
  [TEMPORA_ADV4_3]: "Quarta-feira da 4ª semana do Advento",
  [TEMPORA_ADV4_4]: "Quinta-feira da 4ª semana do Advento",
  [TEMPORA_ADV4_5]: "Sexta-feira da 4ª semana do Advento",
  [TEMPORA_NAT1_0]: "Domingo dentro do Oitavário do Natal",
  [TEMPORA_NAT1_1]: "Feria na Oitavária do Natal",
  [TEMPORA_NAT2_0]: "Santíssimo Nome de Jesus",
  [SANCTI_10_DUr]: "Cristo Rei",
  [TEMPORA_EPI1_0A]: "Domingo dentro do Oitavário da Epifania",
  [TEMPORA_PENT01_0A]: "1ª Domingo depois de Pentecostes",
  [COMMUNE_C_10A]: "1ª Missa da Virgem Maria - Missa Roráte cœli",
  [COMMUNE_C_10B]: "2ª Missa da Virgem Maria - Missa Vultum tuum",
  [COMMUNE_C_10C]: "3º Missa da Virgem Maria – Missa Salve, Sancta Parens",
  [COMMUNE_C_10PASC]: "4 Missa da Virgem Maria – Missa Salve, Sancta Parens",
  [COMMUNE_C_10T]: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
  [SANCTI_01_01]: "Circuncisão do Senhor e Oitava do Natal",
  [SANCTI_01_06]: "Epifania do Senhor",
  [SANCTI_01_13]: "Comemoração do Baptismo do Senhor",
  [SANCTI_01_14]: "S. Hilário, Bispo Confessor e Doutor",
  [SANCTI_01_15]: "S. Paulo, 1.º Eremita, Confessor",
  [SANCTI_01_16]: "S. Marcelo, Papa e Mártir",
  [SANCTI_01_17]: "S. António, Abade",
  [SANCTI_01_18]: "Santa Prisca, Mártir",
  [SANCTI_01_19]: "S.S. Mário, Marta, Audifax e Abachum",
  [SANCTI_01_20]: "S.S. Fabião, Papa e Sebastião, Mártires",
  [SANCTI_01_21]: "S. Inês, Virgem e Mártir",
  [SANCTI_01_22]: "S.S. Vicente e Anastácio, Mártires",
  [SANCTI_01_23]: "S. Raimundo de Penhafort, Confessor",
  [SANCTI_01_24]: "S. Timóteo, Bispo e Mártir",
  [SANCTI_01_25]: "Conversão S. Paulo, Apóstolo",
  [SANCTI_01_26]: "S. Policarpo, Bispo e Mártir",
  [SANCTI_01_27]: "S. João Crisóstomo, Confessor, Bispo e Doutor da Igreja",
  [SANCTI_01_28]: "S. Pedro Nolasco, Confessor",
  [SANCTI_01_29]: "S. Francisco de Sales, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_01_30]: "S. Martinha, Virgem e Mártir",
  [SANCTI_01_31]: "S. João Bosco, Confessor",
  [SANCTI_02_01]: "S. Inácio, Bispo e Mártir",
  [SANCTI_02_02]: "Purificação da B. V. Maria",
  [SANCTI_02_03]: "S. Brás, Bispo e Mártir",
  [SANCTI_02_04]: "S. André Corsino, Bispo e Confessor",
  [SANCTI_02_05]: "S. Águeda, Virgem e Mártir",
  [SANCTI_02_06]: "S. Tito, Bispo e Confessor",
  [SANCTI_02_07]: "S. Romualdo, Abade",
  [SANCTI_02_08]: "S. João da Mata, Confessor",
  [SANCTI_02_09]:
    "S. Cirilo de Alexandria, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_02_10]: "S. Escolástica",
  [SANCTI_02_11]: "Aparição de Nossa Senhora, em Lourdes",
  [SANCTI_02_12]: "Os VII Fundadores dos Servitas de B. V. Maria, Confessores",
  [SANCTI_02_14]: "S. Valentim, Presbítero e Mártir",
  [SANCTI_02_15]: "S.S. Faustino e Jovita, Mártires",
  [SANCTI_02_18]: "S. Simeão, Bispo e Mártir",
  [SANCTI_02_22]: "Cadeira S. Pedro em Antióquia",
  [SANCTI_02_23]: "S. Pedro Damião, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_02_24]: "S. Matias, Apóstolo",
  [SANCTI_02_27]: "S. Gabriel de Nossa Senhora das Dores",
  [SANCTI_03_04]: "S. Casimiro, Confessor",
  [SANCTI_03_06]: "S.S. Perpétua e Felicidade, Mártires",
  [SANCTI_03_07]: "S. Tomás de Aquino, Confessor e Doutor da Igreja",
  [SANCTI_03_08]: "S. João de Deus, Confessor",
  [SANCTI_03_09]: "S. Francisca Romana, Viúva",
  [SANCTI_03_10]: "S.S. Quarenta Mártires",
  [SANCTI_03_12]: "S. Gregório, Papa, Confessor e Doutor da Igreja",
  [SANCTI_03_17]: "S. Patrício, Bispo e Confessor",
  [SANCTI_03_18]: "S. Cirilo de Jerusalém, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_03_19]: "S. José, Esposo de Nossa Senhora",
  [SANCTI_03_21]: "S. Bento, Abade",
  [SANCTI_03_24]: "S. Gabriel Arcanjo",
  [SANCTI_03_25]: "Anunciação de Nossa Senhora",
  [SANCTI_03_27]: "S. João Damasceno, Confessor e Doutor da Igreja",
  [SANCTI_03_28]: "S. João Capistrano, Confessor",
  [SANCTI_04_02]: "S. Francisco de Paula, Confessor",
  [SANCTI_04_04]: "S. Isidoro, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_04_05]: "S. Vicente Ferrer, Confessor",
  [SANCTI_04_11]: "S. Leão I, Papa, Confessor e Doutor da Igreja",
  [SANCTI_04_13]: "S. Hermenegildo, Mártir",
  [SANCTI_04_14]: "S. Justino, Mártir",
  [SANCTI_04_17]: "S. Aniceto, Papa e Mártir",
  [SANCTI_04_21]: "S. Anselmo, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_04_22]: "S.S. Sotero e Caio, Papas e Mártires",
  [SANCTI_04_23]: "S. Jorge, Mártir",
  [SANCTI_04_24]: "S. Fiel de Sigmaringen, Mártir",
  [SANCTI_04_25]: "S. Marcos, Evangelista",
  [SANCTI_04_26]: "S.S. Cleto e Marcelino, Papas e Mártires",
  [SANCTI_04_27]: "S. Pedro Canísio, Confessor e Doutor da Igreja",
  [SANCTI_04_28]: "S. Paulo da Cruz, Confessor",
  [SANCTI_04_29]: "S. Pedro de Verona, Mártir",
  [SANCTI_04_30]: "S. Catarina de Sena, Virgem",
  [SANCTI_05_01]: "S. Filipe e S. Tiago, Apóstolos",
  [SANCTI_05_02]: "S. Atanásio, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_05_03]: "A Invenção da Santa Cruz",
  [SANCTI_05_04]: "S. Mónica, Viúva",
  [SANCTI_05_05]: "S. Pio V, Papa e Confessor",
  [SANCTI_05_06]: "S. João ante a Porta Latina",
  [SANCTI_05_07]: "S. Estanislau, Bispo e Mártir",
  [SANCTI_05_08]: "Aparição de S. Miguel, Arcanjo",
  [SANCTI_05_09]:
    "S. Gregório de Nazianzeno, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_05_10]: "S. Antonino, Bispo e Confessor",
  [SANCTI_05_12]: "S.S. Nereu, Achileu, Domitila, Virgem e Pancracio, Mártires",
  [SANCTI_05_13]: "S. Roberto Belarmino, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_05_14]: "S. Bonifácio, Mártir",
  [SANCTI_05_15]: "S. João Baptista de la Salle, Confessor",
  [SANCTI_05_16]: "S. Ubaldo, Bispo e Confessor",
  [SANCTI_05_17]: "S. Pascoal Bailão, Confessor",
  [SANCTI_05_18]: "S. Venâncio, Mártir",
  [SANCTI_05_19]: "S. Pedro Celestino, Papa e Confessor",
  [SANCTI_05_20]: "S. Bernardino de Sena, Confessor",
  [SANCTI_05_25]: "S. Gregório VII, Papa e Confessor",
  [SANCTI_05_26]: "S. Filipe Néri, Confessor",
  [SANCTI_05_27]: "S. Beda, Confessor e Doutor da Igreja",
  [SANCTI_05_28]: "S. Agostinho de Cantuária, Bispo e Confessor",
  [SANCTI_05_29]: "S. Maria Madalena de Pazzi, Virgem",
  [SANCTI_05_30]: "S. Félix I, Papa e Mártir",
  [SANCTI_05_31]: "Nossa Senhora, Rainha",
  [SANCTI_06_01]: "Santa Angela Mericia",
  [SANCTI_06_02]: "S.S. Marcelino e Pedro, Mártires e Erasmo, Bispo",
  [SANCTI_06_04]: "S. Francisco Caraccíolo, Confessor",
  [SANCTI_06_05]: "S. Bonifácio, Bispo e Mártir",
  [SANCTI_06_06]: "S. Norberto, Bispo e Confessor",
  [SANCTI_06_09]: "S.S. Primo e Feliciano, Mártires",
  [SANCTI_06_10]: "Santa Margarida, Viúva",
  [SANCTI_06_11]: "S. Barnabé, Apóstolo",
  [SANCTI_06_12]: "S. João de Facundo, Confessor",
  [SANCTI_06_13]: "S. António de Lisboa, Confessor e Doutor da Igreja",
  [SANCTI_06_14]: "S. Basílio Magno, Confessor, Bispo e Doutor da Igreja",
  [SANCTI_06_15]: "S.S. Vito, Modesto e Crescência, Mártires",
  [SANCTI_06_17]: "S. Gregório Barbarigo, Bispo e Confessor",
  [SANCTI_06_18]: "S. Efrém, Diácono, Confessor e Doutor da Igreja",
  [SANCTI_06_19]: "S. Juliana Falconiéri, Virgem",
  [SANCTI_06_20]: "S. Silvestre, Papa e Mártir",
  [SANCTI_06_21]: "S. Luís Gonzaga, Confessor",
  [SANCTI_06_22]: "S. Paulino, Bispo e Confessor",
  [SANCTI_06_23]: "Vigília da Natividade de S. Jão Baptista",
  [SANCTI_06_24]: "Nascimento de S. João Baptista",
  [SANCTI_06_25]: "S. Guilherme, Abade",
  [SANCTI_06_26]: "S.S. João e Paulo, Mártires",
  [SANCTI_06_28]: "São Irineu, Bispo e Mártir",
  [SANCTI_06_29]: "S. Pedro e S. Paulo, Apóstolos",
  [SANCTI_06_30]: "Comemoração S. Paulo, Apóstolo",
  [SANCTI_07_01]: "Preciosíssimo Sangue de Nosso Senhor Jesus Cristo",
  [SANCTI_07_02]: "Visitação de Nossa Senhora",
  [SANCTI_07_03]: "S. Irineus, Bispo e Mártir",
  [SANCTI_07_05]: "S. António Maria Zacarias, Confessor",
  [SANCTI_07_07]: "S.S. Cirilo e Metódio, Bispos e Confessores",
  [SANCTI_07_08]: "S. Isabel, Rainha de Portugal e Viúva",
  [SANCTI_07_10]:
    "Os Sete Irmãos Mártires e S.S. Rufina e Secunda, Virgens e Mártires",
  [SANCTI_07_11]: "S. Pio I, Papa e Mártir",
  [SANCTI_07_12]: "S. João Gualberto, Abade",
  [SANCTI_07_14]: "S. Boaventura, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_07_15]: "S. Henrique, Imperador e Confessor",
  [SANCTI_07_16]: "B. V. Maria do Monte Carmelo",
  [SANCTI_07_17]: "S. Aleixo, Confessor",
  [SANCTI_07_18]: "S. Camilo de Lelis",
  [SANCTI_07_19]: "S. Vicente de Paulo, Confessor",
  [SANCTI_07_20]: "S. Jerónimo Emiliano",
  [SANCTI_07_21]: "S. Praxedes de Brindisi, Confessor e Doutor da Igreja",
  [SANCTI_07_22]: "S. Maria Madalena, Penitente",
  [SANCTI_07_23]: "S. Apolinário, Bispo e Mártir",
  [SANCTI_07_24]: "Santa Cristina",
  [SANCTI_07_25]: "S. Tiago, Apóstolo",
  [SANCTI_07_26]: "S. Ana, Mãe de Nossa Senhora",
  [SANCTI_07_27]: "S. Pantaleão, Mártir",
  [SANCTI_07_28]:
    "S.S. Nazário e Celso, Mártires, S. Victor I, Papa e Mártir, S. Inocêncio I, Papa e Confessor",
  [SANCTI_07_29]: "S. Marta, Virgem",
  [SANCTI_07_30]: "S.S. Ábdon e Senen, Mártires",
  [SANCTI_07_31]: "S. Inácio de Loiola, Confessor",
  [SANCTI_08_01]: "Os Santos Mártires Macabeus",
  [SANCTI_08_02]: "S. Afonso de Ligório, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_08_04]: "S. Domingos, Confessor",
  [SANCTI_08_05]: "Dedicação da Igreja de Nossa Senhora das Neves",
  [SANCTI_08_06]: "Transfiguração de Nosso Senhor Jesus Cristo",
  [SANCTI_08_07]: "S. Caetano, Confessor",
  [SANCTI_08_08]: "S. João Maria Vianney, Confessor",
  [SANCTI_08_09]: "Vigília de S. Lourenço, Mártir",
  [SANCTI_08_10]: "S. Lourenço, Mártir",
  [SANCTI_08_11]: "S.S. Tibúrcio e Susana, Mártires",
  [SANCTI_08_12]: "S. Clara, Virgem",
  [SANCTI_08_13]: "S.S. Hipólito e Cassiano, Mártires",
  [SANCTI_08_14]: "Vigília da Assunção de Nossa Senhora",
  [SANCTI_08_15]: "Assunção de Nossa Senhora",
  [SANCTI_08_16]: "S. Joaquim, Pai de Nossa Senhora",
  [SANCTI_08_17]: "S. Jacinto, Confessor",
  [SANCTI_08_18]: "S. Agapito, Mártir",
  [SANCTI_08_19]: "S. João Eudes, Confessor",
  [SANCTI_08_20]: "S. Bernardo, Abade e Doutor da Igreja",
  [SANCTI_08_21]: "S. Joana de Chantal, Viúva",
  [SANCTI_08_22]: "Imaculado Coração de Nossa Senhora",
  [SANCTI_08_23]: "S. Filipe Benício, Confessor",
  [SANCTI_08_24]: "S. Bartolomeu, Apóstolo",
  [SANCTI_08_25]: "S. Luís, Rei de França e Confessor",
  [SANCTI_08_26]: "S. Zeferino",
  [SANCTI_08_27]: "S. José Calasans, Confessor",
  [SANCTI_08_28]: "S. Agostinho, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_08_29]: "Degolação de  S. João Baptista",
  [SANCTI_08_30]: "Santa Rosa de Lima, Virgem",
  [SANCTI_08_31]: "S. Raimundo Nonato, Confessor",
  [SANCTI_09_01]: "S. Egídio, Abade",
  [SANCTI_09_02]: "S. Estêvão, Rei e Confessor",
  [SANCTI_09_03]: "S. Pio X, Papa e Confessor",
  [SANCTI_09_05]: "S. Lourenço Justiniano, Bispo e Confessor",
  [SANCTI_09_08]: "Natividade da B. V. Maria",
  [SANCTI_09_09]: "S. Gorgónio, Mártir",
  [SANCTI_09_10]: "S. Nicolau Tolentino, Confessor",
  [SANCTI_09_11]: "S. S. Proto e Jacinto, Mártires",
  [SANCTI_09_12]: "Santíssimo Nome de Maria",
  [SANCTI_09_14]: "Exaltação da Santa Cruz",
  [SANCTI_09_15]: "Sete Dores da B. V. Maria",
  [SANCTI_09_16]: "S. S. Cornélio e Cipriano, Mártires",
  [SANCTI_09_17]: "Imp. dos Estigmas em S. Francisco",
  [SANCTI_09_18]: "S. José Cupertino, Confessor",
  [SANCTI_09_19]: "S. Januário e Outros, Mártires",
  [SANCTI_09_20]: "S. S. Fabião e Sebastião, Mártires",
  [SANCTI_09_21]: "S. Mateus, Apóstolo e Evangelista",
  [SANCTI_09_22]: "S. Tomás de Vilanova, Bispo e Confessor",
  [SANCTI_09_23]: "S. Lino, Papa e Mártir",
  [SANCTI_09_24]: "B. V. Maria das Mercês",
  [SANCTI_09_26]: "S. S. Cipriano e Justina, Mártires",
  [SANCTI_09_27]: "S. S. Cosme e Damião, Mártires",
  [SANCTI_09_28]: "S. Venceslau, Mártir",
  [SANCTI_09_29]: "Dedicação de S. Miguel Arcanjo",
  [SANCTI_09_30]: "S. Jerónimo, Presbítero Confessor e Doutor",
  [SANCTI_10_01]: "S. Remigio",
  [SANCTI_10_02]: "Santos Anjos da Guarda",
  [SANCTI_10_03]: "Santa Teresa do Menino Jesus",
  [SANCTI_10_04]: "S. Francisco",
  [SANCTI_10_05]: "S. Plácido e Companheiros Mártires",
  [SANCTI_10_06]: "S. Bruno, Confessor",
  [SANCTI_10_07]: "SS. Rosário da B. V. Maria",
  [SANCTI_10_08]: "Santa Brígida, Viúva",
  [SANCTI_10_09]: "S. João Leonardo, Confessor",
  [SANCTI_10_10]: "S. Francisco de Bórgia",
  [SANCTI_10_11]: "Maternidade da B. V. Maria",
  [SANCTI_10_13]: "S. Eduardo, Confessor",
  [SANCTI_10_14]: "S. Calisto I, Papa e Mártir",
  [SANCTI_10_15]: "Santa Teresa, Virgem",
  [SANCTI_10_16]: "Santa Hedviges, Viúva",
  [SANCTI_10_17]: "Santa Margarida Maria, Virgem",
  [SANCTI_10_18]: "S. Lucas, Evangelista",
  [SANCTI_10_19]: "S. Pedro de Alcântara, Confessor",
  [SANCTI_10_20]: "S. João Câncio, Confessor",
  [SANCTI_10_21]: "S. Hilarião, Abade",
  [SANCTI_10_23]: "S. António Maria Claret, Bispo e Confessor",
  [SANCTI_10_24]: "S. Rafael, Arcanjo",
  [SANCTI_10_25]: "S.S. Crisanto e Daria, Mártires",
  [SANCTI_10_28]: "S.S. Simão e Judas, Apóstolos",
  [SANCTI_11_01]: "Todos os Santos",
  [SANCTI_11_02_1]: "Comemoração dos Fiéis Defuntos, 1ª Missa",
  [SANCTI_11_02_2]: "Comemoração dos Fiéis Defuntos, 2ª Missa",
  [SANCTI_11_02_3]: "Comemoração dos Fiéis Defuntos, 3ª Missa",
  [SANCTI_11_04]: "S. Carlos Borromeu, Bispo e Confessor",
  [SANCTI_11_08]: "Os Quatro S.S. Mártires Coroados",
  [SANCTI_11_09]: "Dedicação da Basílica do Salvador",
  [SANCTI_11_10]: "S. André de Avelino, Confessor",
  [SANCTI_11_11]: "S. Martinho, Bispo e Confessor",
  [SANCTI_11_12]: "S. Martinho I, Papa e Mártir",
  [SANCTI_11_13]: "S. Diogo, Confessor",
  [SANCTI_11_14]: "S. Josafá, Bispo e Mártir",
  [SANCTI_11_15]: "S. Alberto Magno, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_11_16]: "S. Gertrudes, Virgem",
  [SANCTI_11_17]: "S. Gregório Taumaturgo, Bispo e Confessor",
  [SANCTI_11_18]: "Dedicação da Basílica de S.S Pedro e Paulo",
  [SANCTI_11_19]: "S. Isabel, Viúva",
  [SANCTI_11_20]: "S. Félix de Valois, Confessor",
  [SANCTI_11_21]: "Apresentação da Nossa Senhora",
  [SANCTI_11_22]: "S. Cecília, Virgem e Mártir",
  [SANCTI_11_23]: "S. Clemente I, Papa e Mártir",
  [SANCTI_11_24]: "S. João da Cruz, Confessor e Doutor da Igreja",
  [SANCTI_11_25]: "S. Catarina, Virgem e Mártir",
  [SANCTI_11_26]: "S. Silvestre, Abade",
  [SANCTI_11_29]: "S. Saturnino, Mártir",
  [SANCTI_11_30]: "S. André, Apóstolo",
  [SANCTI_12_02]: "S. Bibiana, Virgem e Mártir",
  [SANCTI_12_03]: "S. Francisco Xavier, Confessor",
  [SANCTI_12_04]: "S. Pedro Chrysólogo, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_12_05]: "S. Sabbas, Abade",
  [SANCTI_12_06]: "S. Nicolau, Bispo e Confessor",
  [SANCTI_12_07]: "S. Ambrósio, Bispo, Confessor e Doutor da Igreja",
  [SANCTI_12_08]: "Imaculada Conceição da SS. Virgem",
  [SANCTI_12_10]: "S. Melquíades, Papa e Mártir",
  [SANCTI_12_11]: "S. Dâmaso, Papa e Confessor",
  [SANCTI_12_13]: "S. Luzia, Virgem e Mártir",
  [SANCTI_12_16]: "S. Eusébio, Bispo e Mártir",
  [SANCTI_12_21]: "S. Tomé, Apóstolo",
  [SANCTI_12_24]: "Vigília Natal de N. S. Jesus Cristo",
  [SANCTI_12_25_1]: "Natal de N. S. Jesus Cristo",
  [SANCTI_12_25_2]: "Natal de N. S. Jesus Cristo",
  [SANCTI_12_25_3]: "Natal de N. S. Jesus Cristo",
  [SANCTI_12_26]: "S. Estêvão, Primeiro Mártir",
  [SANCTI_12_27]: "S. João, Apóstolo e Evangelista",
  [SANCTI_12_28]: "Santos Inocentes",
  [SANCTI_12_29]: "S. Tomás de Cantuária, Bispo e Mártir",
  [SANCTI_12_31]: "S. Silvestre",
  [VOTIVE_ANGELS]: "Holy Angels",
  [VOTIVE_JOSEPH]: "St. Joseph",
  [VOTIVE_JESUSETERNALPRIEST]:
    "Our Lord Jesus Christ, Supreme and Eternal Priest",
  [VOTIVE_PENT01_0]: "Most Holy Trinity",
  [VOTIVE_PENT02_5]: "Sacred Heart of Jesus",
  [VOTIVE_08_22]: "Immaculate Heart of Mary",
  [VOTIVE_MORTALITATIS]: "Tempore Mortalitatis",
};

export const VOTIVE_MASSES_PT = [
  {
    ref: "tempore-mortalitatis",
    id: VOTIVE_MORTALITATIS,
    title: TITLES_PT[VOTIVE_MORTALITATIS],
    tags: ["For the deliverance from death in time of pestilence"],
  },
  {
    ref: "rorate",
    id: COMMUNE_C_10A,
    title: TITLES_PT[COMMUNE_C_10A],
    tags: ["Advent"],
  },
  {
    ref: "vultum-tuum",
    id: COMMUNE_C_10B,
    title: TITLES_PT[COMMUNE_C_10B],
    tags: ["From Nativity until Purification"],
  },
  {
    ref: "salve-sancta-parens-3",
    id: COMMUNE_C_10C,
    title: TITLES_PT[COMMUNE_C_10C],
    tags: ["From Feb 3 until Holy Wednesday"],
  },
  {
    ref: "salve-sancta-parens-4",
    id: COMMUNE_C_10PASC,
    title: TITLES_PT[COMMUNE_C_10PASC],
    tags: ["Eastertide"],
  },
  {
    ref: "salve-sancta-parens-5",
    id: COMMUNE_C_10T,
    title: TITLES_PT[COMMUNE_C_10T],
    tags: ["From Trinity Sunday until Advent"],
  },
  {
    ref: "trinitas",
    id: VOTIVE_PENT01_0,
    title: TITLES_PT[VOTIVE_PENT01_0],
    tags: ["Votive", "Monday"],
  },
  {
    ref: "angelis",
    id: VOTIVE_ANGELS,
    title: TITLES_PT[VOTIVE_ANGELS],
    tags: ["Votive", "Tuesday"],
  },
  {
    ref: "joseph",
    id: VOTIVE_JOSEPH,
    title: TITLES_PT[VOTIVE_JOSEPH],
    tags: ["Votive", "Wednesday"],
  },
  {
    ref: "aeterno-sacerdote",
    id: VOTIVE_JESUSETERNALPRIEST,
    title: TITLES_PT[VOTIVE_JESUSETERNALPRIEST],
    tags: ["Votive", "Thursday"],
  },
  {
    ref: "cordis-jesu",
    id: VOTIVE_PENT02_5,
    title: TITLES_PT[VOTIVE_PENT02_5],
    tags: ["Votive", "Friday"],
  },
  {
    ref: "cordis-mariae",
    id: VOTIVE_08_22,
    title: TITLES_PT[VOTIVE_08_22],
    tags: ["Votive", "First Saturday"],
  },
];

export const SECTION_LABELS_PT = {
  Communicantes: "Communicantes",
  CommunioP: "Comúnio",
  Communio: "Comúnio",
  Evangelium: "Evangelho",
  GradualeP: "Gradual",
  Graduale: "Gradual",
  Introitus: "Intróito",
  Lectio: "Epístola",
  OffertoriumP: "Ofertório",
  Offertorium: "Ofertório",
  Oratio: "Oração",
  "Commemoratio Oratio": "Comemoração Oração",
  Postcommunio: "Postcomúnio",
  "Commemoratio Postcommunio": "Comemoração Postcomúnio",
  Secreta: "Secreta",
  "Commemoratio Secreta": "Comemoração Secreta",
  Sequentia: "Sequência",
  "Super populum": "Sobre o povo",
  Prefatio: "Prefácio",
  Tractus: "Tracto",
  // 02-02, feast of the Purification of the B.V.M.
  "De Benedictione Candelarum": "Bênção das Velas",
  "De Distributione Candelarum": "Distribuição das Velas",
  "De Processione": "Procissão",
  // Quad6-0r, Dominica II Passionis seu in Palmis
  "Benedictio Palmorum": "Bênção dos Ramos",
  "De distributione ramorum": "Distribuição dos Ramos",
  "De lectione Evangelica": "Leitura do Evangelho",
  "De processione cum ramis benedictis": "Procissão dos Ramos",
  "Hymnus ad Christum Regem": "Hino a Cristo Rei",
  // Quad6-4r, Feria Quinta in Coena Domini
  Maundi: "Quinta-feira Santa",
  "Post Missam": "Depois da Missa",
  "Denudatione altaris": "Desnudação do Altar",
  // Quad6-5r, Feria Sexta in Parasceve
  Lectiones: "I. Readings from Scripture",
  Passio: "Paixão",
  "Oratio Fidelium": "II. The Great Intercessions",
  "Crucis Adoratione": "III. Adoração da Cruz",
  CommunioQ: "IV. Communion",
  // Quad6-5r, Sabbato Sancto
  "Benedictio ignis": "Bênção do Fogo",
  "De benedictione cerei Paschalis": "Bênção da Vela Pascal",
  "De solemni processione": "Procissão da Vela Pascal",
  "De praeconio paschali": "Proclamação Pascal",
  "De lectionibus": "Leituras",
  "De prima parte Litaniarum": "Primeira parte da Ladainha",
  "De benedictione aquae baptismalis": "Bênção da água baptismal",
  "De renovatione promissionum baptismatis":
    "Renovação das promessas baptismais",
  "De altera parte Litaniarum": "Segunda parte da Ladainha",
  "De Missa solemni Vigiliae paschalis": "Santa Missa",
  "Pro Laudibus": "Laudes",
  Conclusio: "Conclusão",
  "Benedictio cinerum": "Bênção das Cinzas",
};

export const SECTION_LABELS_MULTI_PT = {
  GradualeL1: "Gradual",
  GradualeL2: "Gradual",
  GradualeL3: "Gradual",
  GradualeL4: "Gradual",
  GradualeL5: "Gradual",
  Graduale: "Gradual",
  LectioL1: "1ª Lição",
  LectioL2: "2ª Lição",
  LectioL3: "3ª Lição",
  LectioL4: "4ª Lição",
  LectioL5: "5ª Lição",
  Lectio: "Epístola",
  OratioL1: "Oração",
  OratioL2: "Oração",
  OratioL3: "Oração",
  OratioL4: "Oração",
  OratioL5: "Oração",
  Oratio: "Oração",
  EvangeliumL1: "Evangelho",
};

export const PATERNOSTER_PT = `
    "Pai nosso, que estais nos céus;\n" \
    "Santificado seja o Vosso nome;\n" \
    "Venha a nós o Vosso reino;\n" \
    "Seja feita a Vossa vontade, assim na terra como no céu.\n" \
    "O pão nosso de cada dia nos dai hoje;\n" \
    "Perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores;\n" \
    "E não nos deixeis cair em tentação.\n" \
    "Mas livrai-nos do mal.`;

export const TRANSFORMATIONS_PT = [
  { pattern: /\+\+/, replacement: "☩" },
  { pattern: /\+/, replacement: "☩" },
  { pattern: /V\./, replacement: "℣." },
  { pattern: /R\./, replacement: "℟." },
  { pattern: /^#/, replacement: "##" },
  { pattern: /^!x!/, replacement: "!" },
  { pattern: /^!! *(.*)/, replacement: "### $1" },
  { pattern: /^\[([^\]^]*)\]/, replacement: "### $1" },
  // { pattern: /^! *(.*)/, replacement: "*$1*" },
  { pattern: /^v\. */, replacement: "" },
  { pattern: /^_/, replacement: "" },
  { pattern: /\(\(/, replacement: "(" },
  { pattern: /\)\)/, replacement: ")" },
  { pattern: /\[/, replacement: "(" },
  { pattern: /\]/, replacement: ")" },
  { pattern: /\((\^\d+)\)/, replacement: "[\\1]" }, // preserving footnotes, like [^1], [^1]:
  { pattern: /^.*`.*$/, replacement: "" },
  { pattern: /^[&$]Gloria\.*$/, replacement: "Glória ao Pai." },
  { pattern: /^\$Oremus\.*$/, replacement: "Oremos." },
  { pattern: /^\$Per Dominum eiusdem\.*$/, replacement: "Por nosso Senhor..." },
  { pattern: /^\$Per Dominum\.*$/, replacement: "Por nosso Senhor..." },
  {
    pattern: /^\$Per eu[mn]dem\.*$/,
    replacement: "Pelo mesmo nosso Senhor...",
  },
  { pattern: /^\$Qui tecum eiusdem\.*$/, replacement: "Que convosco vive..." },
  { pattern: /^\$Qui tecum\.*$/, replacement: "Que convosco vive..." },
  { pattern: /^\$Qui vivis\.*$/, replacement: "Ó Vós, que viveis..." },
  { pattern: /^\$Deo [Gg]ratias\.*$/, replacement: "Graças a Deus." },
  {
    pattern: /^[&$]Dominus *[Vv]obiscum\.*$/,
    replacement: "℣. O Senhor seja convosco.    \n\r℟. E com o vosso espírito.",
  },
  { pattern: /^\*Modlitwa nad ludem\*.*$/, replacement: "" },
  { pattern: /^\$Pater noster.*$/, replacement: PATERNOSTER_PT },
  { pattern: /\(rubrica 1955 aut rubrica 1960 dicitur\)/, replacement: "" },
  { pattern: /\(deinde dicuntur semper\)/, replacement: "" },
];

export const COMMEMORATIONS_PT = {
  COMMEMORATION: "Comemoração",
  COMMEMORATED_ORATIO: "Comemoração Oração",
  COMMEMORATED_SECRETA: "Comemoração Secreta",
  COMMEMORATED_POSTCOMMUNIO: "Comemoração Postcomúnio",
};
