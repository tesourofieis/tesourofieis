export const TYPE_TEMPORA: string = "tempora";
export const TYPE_SANCTI: string = "santos";
export const ASTERISK: string = "*";

export const PATTERN_TEMPORA: RegExp = /^tempora:.*/;
export const PATTERN_ADVENT: RegExp = /^tempora:adv\d/;
export const PATTERN_EPIPHANY: RegExp = /^tempora:epi\d/;
export const PATTERN_ADVENT_SUNDAY: RegExp = /^tempora:adv\d-0/;
export const PATTERN_ADVENT_FERIA: RegExp = /tempora:adv\d-[1-6]/;
export const PATTERN_ADVENT_FERIA_BETWEEN_17_AND_23: RegExp =
  /tempora:adv\d-[1-6]:2/;
export const PATTERN_ADVENT_FERIA_BEFORE_17: RegExp = /tempora:adv\d-[1-6]:3/;
export const PATTERN_POST_EPIPHANY_SUNDAY: RegExp = /^tempora:epi\d-0/;
export const PATTERN_PRE_LENTEN: RegExp = /^tempora:quadp\d/;
export const PATTERN_LENT: RegExp = /^tempora:quad(p3-[3-6]|\d)/;
export const PATTERN_EASTER: RegExp = /^tempora:pasc\d/;
/^tempora:pasc([0-4]|5-0|5-1|5-2|5-3)/;
export const PATTERN_SUNDAY: RegExp = /^tempora:.*\d-0.*/;
export const PATTERN_LENT_SUNDAY: RegExp = /^tempora:quad\d-0.*/;
export const PATTERN_TEMPORA_SUNDAY: RegExp = /^tempora:.*/;
export const PATTERN_TEMPORA_SUNDAY_CLASS_1: RegExp = /^tempora:.*:1:.*/;
export const PATTERN_TEMPORA_SUNDAY_CLASS_2: RegExp =
  /^tempora:(.*:2|Nat1-0).*/;
export const PATTERN_TEMPORA_CLASS_1: RegExp = /^tempora:.*:1:.*/;
export const PATTERN_TEMPORA_CLASS_2: RegExp = /^tempora:.*:2:.*/;
export const PATTERN_TEMPORA_CLASS_3: RegExp = /^tempora:.*:3:.*/;
export const PATTERN_TEMPORA_CLASS_4: RegExp = /^tempora:.*:4:.*/;
export const PATTERN_SANCTI: RegExp = /^santos:.*/;
export const PATTERN_SANCTI_CLASS_1: RegExp = /^santos:.*:1:.*/;
export const PATTERN_SANCTI_CLASS_2: RegExp = /^santos:.*:2:.*/;
export const PATTERN_SANCTI_CLASS_3: RegExp = /^santos:.*:3:.*/;
export const PATTERN_SANCTI_CLASS_4: RegExp = /^santos:.*:4:.*/;
export const PATTERN_SANCTI_CLASS_1_OR_2: RegExp = /^santos:.*:[12]:.*/;
export const PATTERN_CLASS_1: RegExp = /^[a-z]+:.*:1:.*/;
export const PATTERN_CLASS_2: RegExp = /^[a-z]+:.*:2:.*/;
export const PATTERN_CLASS_3: RegExp = /^[a-z]+:.*:3:.*/;

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

export const FERIA = ":feria:4:w";
// TEMPORA - days whose dates are not fixed, but are calculated (in most cases depending on Easter Sunday)
export const TEMPORA_EPI1_0 = "tempora:epi1-0:2:w"; // Feast of the Holy Family
export const TEMPORA_EPI1_0A = "tempora:epi1-0a:2:w"; // First Sunday after Epiphany
export const TEMPORA_EPI1_1 = "tempora:epi1-1:4:w"; // Monday after 1st week of Epiphany
export const TEMPORA_EPI1_2 = "tempora:epi1-2:4:w"; // Tuesday after 1st week of Epiphany
export const TEMPORA_EPI1_3 = "tempora:epi1-3:4:w"; // Wednesday after 1st week of Epiphany
export const TEMPORA_EPI1_4 = "tempora:epi1-4:4:w"; // Thursday after 1st week of Epiphany
export const TEMPORA_EPI1_5 = "tempora:epi1-5:4:w"; // Friday after 1st week of Epiphany
export const TEMPORA_EPI1_6 = "tempora:epi1-6:4:w"; // Saturday after 1st week of Epiphany
export const TEMPORA_EPI2_0 = "tempora:epi2-0:2:g"; // Sunday after 2nd week of Epiphany
export const TEMPORA_EPI2_1 = "tempora:epi2-1:4:g"; // Monday after 2nd week of Epiphany
export const TEMPORA_EPI2_2 = "tempora:epi2-2:4:g";
export const TEMPORA_EPI2_3 = "tempora:epi2-3:4:g";
export const TEMPORA_EPI2_4 = "tempora:epi2-4:4:g";
export const TEMPORA_EPI2_5 = "tempora:epi2-5:4:g";
export const TEMPORA_EPI2_6 = "tempora:epi2-6:4:g";
export const TEMPORA_EPI3_0 = "tempora:epi3-0:2:g";
export const TEMPORA_EPI3_1 = "tempora:epi3-1:4:g";
export const TEMPORA_EPI3_2 = "tempora:epi3-2:4:g";
export const TEMPORA_EPI3_3 = "tempora:epi3-3:4:g";
export const TEMPORA_EPI3_4 = "tempora:epi3-4:4:g";
export const TEMPORA_EPI3_5 = "tempora:epi3-5:4:g";
export const TEMPORA_EPI3_6 = "tempora:epi3-6:4:g";
export const TEMPORA_EPI4_0 = "tempora:epi4-0:2:g";
export const TEMPORA_EPI4_1 = "tempora:epi4-1:4:g";
export const TEMPORA_EPI4_2 = "tempora:epi4-2:4:g";
export const TEMPORA_EPI4_3 = "tempora:epi4-3:4:g";
export const TEMPORA_EPI4_4 = "tempora:epi4-4:4:g";
export const TEMPORA_EPI4_5 = "tempora:epi4-5:4:g";
export const TEMPORA_EPI4_6 = "tempora:epi4-6:4:g";
export const TEMPORA_EPI5_0 = "tempora:epi5-0:2:g";
export const TEMPORA_EPI5_1 = "tempora:epi5-1:4:g";
export const TEMPORA_EPI5_2 = "tempora:epi5-2:4:g";
export const TEMPORA_EPI5_3 = "tempora:epi5-3:4:g";
export const TEMPORA_EPI5_4 = "tempora:epi5-4:4:g";
export const TEMPORA_EPI5_5 = "tempora:epi5-5:4:g";
export const TEMPORA_EPI5_6 = "tempora:epi5-6:4:g";
export const TEMPORA_EPI6_0 = "tempora:epi6-0:2:g";
export const TEMPORA_EPI6_1 = "tempora:epi6-1:4:g";
export const TEMPORA_EPI6_2 = "tempora:epi6-2:4:g";
export const TEMPORA_EPI6_3 = "tempora:epi6-3:4:g";
export const TEMPORA_EPI6_4 = "tempora:epi6-4:4:g";
export const TEMPORA_EPI6_5 = "tempora:epi6-5:4:g";
export const TEMPORA_EPI6_6 = "tempora:epi6-6:4:g";

export const TEMPORA_QUADP1_0 = "tempora:quadp1-0:2:v"; // Septuagesima Sunday
export const TEMPORA_QUADP1_1 = "tempora:quadp1-1:4:v";
export const TEMPORA_QUADP1_2 = "tempora:quadp1-2:4:v";
export const TEMPORA_QUADP1_3 = "tempora:quadp1-3:4:v";
export const TEMPORA_QUADP1_4 = "tempora:quadp1-4:4:v";
export const TEMPORA_QUADP1_5 = "tempora:quadp1-5:4:v";
export const TEMPORA_QUADP1_6 = "tempora:quadp1-6:4:v";
export const TEMPORA_QUADP2_0 = "tempora:quadp2-0:2:v"; // Sexagesima Sunday
export const TEMPORA_QUADP2_1 = "tempora:quadp2-1:4:v";
export const TEMPORA_QUADP2_2 = "tempora:quadp2-2:4:v";
export const TEMPORA_QUADP2_3 = "tempora:quadp2-3:4:v";
export const TEMPORA_QUADP2_4 = "tempora:quadp2-4:4:v";
export const TEMPORA_QUADP2_5 = "tempora:quadp2-5:4:v";
export const TEMPORA_QUADP2_6 = "tempora:quadp2-6:4:v";
export const TEMPORA_QUADP3_0 = "tempora:quadp3-0:2:v"; // Quinquagesima Sunday
export const TEMPORA_QUADP3_1 = "tempora:quadp3-1:4:v";
export const TEMPORA_QUADP3_2 = "tempora:quadp3-2:4:v";

export const TEMPORA_QUADP3_3 = "tempora:quadp3-3:1:v"; // Ash Wednesday
export const TEMPORA_QUADP3_4 = "tempora:quadp3-4:3:v";
export const TEMPORA_QUADP3_5 = "tempora:quadp3-5:3:v";
export const TEMPORA_QUADP3_6 = "tempora:quadp3-6:3:v";
export const TEMPORA_QUAD1_0 = "tempora:quad1-0:1:v"; // Sunday in 1st week of Lent
export const TEMPORA_QUAD1_1 = "tempora:quad1-1:3:v"; // Monday in 1st week of Lent
export const TEMPORA_QUAD1_2 = "tempora:quad1-2:3:v"; // Tuesday in 1st week of Lent
export const TEMPORA_QUAD1_3 = "tempora:quad1-3:2:v"; // Ember Wednesday of Lent
export const TEMPORA_QUAD1_4 = "tempora:quad1-4:3:v"; // Thursday in 1st week of Lent
export const TEMPORA_QUAD1_5 = "tempora:quad1-5:2:v"; // Ember Friday of Lent
export const TEMPORA_QUAD1_6 = "tempora:quad1-6:2:v"; // Ember Saturday of Lent
export const TEMPORA_QUAD2_0 = "tempora:quad2-0:1:v"; // Sunday in 2nd week of Lent
export const TEMPORA_QUAD2_1 = "tempora:quad2-1:3:v"; // Monday in 2nd week of Lent
export const TEMPORA_QUAD2_2 = "tempora:quad2-2:3:v";
export const TEMPORA_QUAD2_3 = "tempora:quad2-3:3:v";
export const TEMPORA_QUAD2_4 = "tempora:quad2-4:3:v";
export const TEMPORA_QUAD2_5 = "tempora:quad2-5:3:v";
export const TEMPORA_QUAD2_6 = "tempora:quad2-6:3:v";
export const TEMPORA_QUAD3_0 = "tempora:quad3-0:1:v";
export const TEMPORA_QUAD3_1 = "tempora:quad3-1:3:v";
export const TEMPORA_QUAD3_2 = "tempora:quad3-2:3:v";
export const TEMPORA_QUAD3_3 = "tempora:quad3-3:3:v";
export const TEMPORA_QUAD3_4 = "tempora:quad3-4:3:v";
export const TEMPORA_QUAD3_5 = "tempora:quad3-5:3:v";
export const TEMPORA_QUAD3_6 = "tempora:quad3-6:3:v";
export const TEMPORA_QUAD4_0 = "tempora:quad4-0:1:v";
export const TEMPORA_QUAD4_1 = "tempora:quad4-1:3:v";
export const TEMPORA_QUAD4_2 = "tempora:quad4-2:3:v";
export const TEMPORA_QUAD4_3 = "tempora:quad4-3:3:v";
export const TEMPORA_QUAD4_4 = "tempora:quad4-4:3:v";
export const TEMPORA_QUAD4_5 = "tempora:quad4-5:3:v";
export const TEMPORA_QUAD4_6 = "tempora:quad4-6:3:v";
export const TEMPORA_QUAD5_0 = "tempora:quad5-0:1:v"; // 1st Passion Sunday
export const TEMPORA_QUAD5_1 = "tempora:quad5-1:3:v";
export const TEMPORA_QUAD5_2 = "tempora:quad5-2:3:v";
export const TEMPORA_QUAD5_3 = "tempora:quad5-3:3:v";
export const TEMPORA_QUAD5_4 = "tempora:quad5-4:3:v";
export const TEMPORA_QUAD5_5 = "tempora:quad5-5Feria:3:v";
export const TEMPORA_QUAD5_6 = "tempora:quad5-6:3:v";
export const TEMPORA_QUAD6_0 = "tempora:quad6-0:1:rv"; // 2nd Passion Sunday (Palm Sunday)
export const TEMPORA_QUAD6_1 = "tempora:quad6-1:1:v";
export const TEMPORA_QUAD6_2 = "tempora:quad6-2:1:v";
export const TEMPORA_QUAD6_3 = "tempora:quad6-3:1:v";
export const TEMPORA_QUAD6_4 = "tempora:quad6-4t:1:w"; // Maundy Thursday
export const TEMPORA_QUAD6_5 = "tempora:quad6-5:1:bv"; // Good Friday
export const TEMPORA_QUAD6_6 = "tempora:quad6-6:1:vw"; // Holy Saturday

export const TEMPORA_PASC0_0 = "tempora:pasc0-0:1:w"; // Resurrection Sunday
export const TEMPORA_PASC0_1 = "tempora:pasc0-1:1:w";
export const TEMPORA_PASC0_2 = "tempora:pasc0-2:1:w";
export const TEMPORA_PASC0_3 = "tempora:pasc0-3:1:w";
export const TEMPORA_PASC0_4 = "tempora:pasc0-4:1:w";
export const TEMPORA_PASC0_5 = "tempora:pasc0-5:1:w";
export const TEMPORA_PASC0_6 = "tempora:pasc0-6:1:w";
export const TEMPORA_PASC1_0 = "tempora:pasc1-0:1:w"; // Low Sunday
export const TEMPORA_PASC1_1 = "tempora:pasc1-1:4:w";
export const TEMPORA_PASC1_2 = "tempora:pasc1-2:4:w";
export const TEMPORA_PASC1_3 = "tempora:pasc1-3:4:w";
export const TEMPORA_PASC1_4 = "tempora:pasc1-4:4:w";
export const TEMPORA_PASC1_5 = "tempora:pasc1-5:4:w";
export const TEMPORA_PASC1_6 = "tempora:pasc1-6:4:w";
export const TEMPORA_PASC2_0 = "tempora:pasc2-0:2:w";
export const TEMPORA_PASC2_1 = "tempora:pasc2-1:4:w";
export const TEMPORA_PASC2_2 = "tempora:pasc2-2:4:w";
export const TEMPORA_PASC2_3 = "tempora:pasc2-3:2:w";
export const TEMPORA_PASC2_4 = "tempora:pasc2-4Feria:4:w";
export const TEMPORA_PASC2_5 = "tempora:pasc2-5Feria:4:w";
export const TEMPORA_PASC2_6 = "tempora:pasc2-6Feria:4:w";
export const TEMPORA_PASC3_0 = "tempora:pasc3-0:2:w";
export const TEMPORA_PASC3_1 = "tempora:pasc3-1Feria:4:w";
export const TEMPORA_PASC3_2 = "tempora:pasc3-2Feria:4:w";
export const TEMPORA_PASC3_3 = "tempora:pasc3-3Feria:4:w";
export const TEMPORA_PASC3_4 = "tempora:pasc3-4:4:w";
export const TEMPORA_PASC3_5 = "tempora:pasc3-5:4:w";
export const TEMPORA_PASC3_6 = "tempora:pasc3-6:4:w";
export const TEMPORA_PASC4_0 = "tempora:pasc4-0:2:w";
export const TEMPORA_PASC4_1 = "tempora:pasc4-1:4:w";
export const TEMPORA_PASC4_2 = "tempora:pasc4-2:4:w";
export const TEMPORA_PASC4_3 = "tempora:pasc4-3:4:w";
export const TEMPORA_PASC4_4 = "tempora:pasc4-4:4:w";
export const TEMPORA_PASC4_5 = "tempora:pasc4-5:4:w";
export const TEMPORA_PASC4_6 = "tempora:pasc4-6:4:w";
export const TEMPORA_PASC5_0 = "tempora:pasc5-0:2:w";
export const TEMPORA_PASC5_1 = "tempora:pasc5-1:4:v";
export const TEMPORA_PASC5_2 = "tempora:pasc5-2:4:w";
export const TEMPORA_PASC5_3 = "tempora:pasc5-3:2:w"; // Vigil of Ascension

export const TEMPORA_PASC5_4 = "tempora:pasc5-4:1:w"; // Ascension
export const TEMPORA_PASC5_5 = "tempora:pasc5-5:4:w";
export const TEMPORA_PASC5_6 = "tempora:pasc5-6:4:w";
export const TEMPORA_PASC6_0 = "tempora:pasc6-0:2:w";
export const TEMPORA_PASC6_1 = "tempora:pasc6-1:4:w";
export const TEMPORA_PASC6_2 = "tempora:pasc6-2:4:w";
export const TEMPORA_PASC6_3 = "tempora:pasc6-3:4:w";
export const TEMPORA_PASC6_4 = "tempora:pasc6-4:4:w";
export const TEMPORA_PASC6_5 = "tempora:pasc6-5:4:w";
export const TEMPORA_PASC6_6 = "tempora:pasc6-6:1:r"; // Vigil of Pentecost

export const TEMPORA_PASC7_0 = "tempora:pasc7-0:1:r"; // Pentecost
export const TEMPORA_PASC7_1 = "tempora:pasc7-1:1:r"; // Whit Monday
export const TEMPORA_PASC7_2 = "tempora:pasc7-2:1:r";
export const TEMPORA_PASC7_3 = "tempora:pasc7-3:1:r"; // Ember Wednesday in Octave of Pentecost
export const TEMPORA_PASC7_4 = "tempora:pasc7-4:1:r";
export const TEMPORA_PASC7_5 = "tempora:pasc7-5:1:r"; // Ember Friday in Octave of Pentecost
export const TEMPORA_PASC7_6 = "tempora:pasc7-6:1:r"; // Ember Saturday in Octave of Pentecost
export const TEMPORA_PENT01_0A = "tempora:Pent01-0a:2:g"; // 1st Sunday after Pentecost
export const TEMPORA_PENT01_0 = "tempora:Pent01-0:1:w"; // Trinity Sunday
export const TEMPORA_PENT01_1 = "tempora:Pent01-1:4:g";
export const TEMPORA_PENT01_2 = "tempora:Pent01-2:4:g";
export const TEMPORA_PENT01_3 = "tempora:Pent01-3:4:g";
export const TEMPORA_PENT01_4 = "tempora:Pent01-4:1:w"; // Corpus Christi
export const TEMPORA_PENT01_5 = "tempora:Pent01-5:4:g";
export const TEMPORA_PENT01_6 = "tempora:Pent01-6:4:g";
export const TEMPORA_PENT02_0 = "tempora:Pent02-0:2:g"; // Sunday in 2nd week after Pentecost
export const TEMPORA_PENT02_1 = "tempora:Pent02-1:4:g"; // Monday in 2nd week after Pentecost
export const TEMPORA_PENT02_2 = "tempora:Pent02-2:4:g"; // Tuesday in 2nd week after Pentecost
export const TEMPORA_PENT02_3 = "tempora:Pent02-3:4:g"; // Wednesday in 2nd week after Pentecost
export const TEMPORA_PENT02_4 = "tempora:Pent02-4:4:g"; // Thursday in 2nd week after Pentecost
export const TEMPORA_PENT02_5 = "tempora:Pent02-5:1:w"; // Feast of the Sacred Heart
export const TEMPORA_PENT02_6 = "tempora:Pent02-6Feria:4:g"; // Saturday in 2nd week after Pentecost
export const TEMPORA_PENT03_0 = "tempora:Pent03-0:2:g"; // Sunday in 3rd week after Pentecost
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

export const TEMPORA_ADV1_0 = "tempora:adv1-0:1:v"; // Sunday in 1st week of Advent
export const TEMPORA_ADV1_1 = "tempora:adv1-1:3:v"; // Monday in 1st week of Advent
export const TEMPORA_ADV1_2 = "tempora:adv1-2:3:v"; // Tuesday in 1st week of Advent
export const TEMPORA_ADV1_3 = "tempora:adv1-3:3:v"; // Wednesday in 1st week of Advent
export const TEMPORA_ADV1_4 = "tempora:adv1-4:3:v"; // Thursday in 1st week of Advent
export const TEMPORA_ADV1_5 = "tempora:adv1-5:3:v"; // Friday in 1st week of Advent
export const TEMPORA_ADV1_6 = "tempora:adv1-6:3:v"; // Saturday in 1st week of Advent
export const TEMPORA_ADV2_0 = "tempora:adv2-0:1:v";
export const TEMPORA_ADV2_1 = "tempora:adv2-1:3:v";
export const TEMPORA_ADV2_2 = "tempora:adv2-2:3:v";
export const TEMPORA_ADV2_3 = "tempora:adv2-3:3:v";
export const TEMPORA_ADV2_4 = "tempora:adv2-4:3:v";
export const TEMPORA_ADV2_5 = "tempora:adv2-5:3:v";
export const TEMPORA_ADV2_6 = "tempora:adv2-6:3:v";
export const TEMPORA_ADV3_0 = "tempora:adv3-0:1:v";
export const TEMPORA_ADV3_1 = "tempora:adv3-1:3:v";
export const TEMPORA_ADV3_2 = "tempora:adv3-2:3:v";
export const TEMPORA_ADV3_3 = "tempora:adv3-3:2:v"; // Ember Wednesday in Advent
export const TEMPORA_ADV3_4 = "tempora:adv3-4:3:v";
export const TEMPORA_ADV3_5 = "tempora:adv3-5:2:v"; // Ember Friday in Advent
export const TEMPORA_ADV3_6 = "tempora:adv3-6:2:v"; // Ember Saturday in Advent
export const TEMPORA_ADV4_0 = "tempora:adv4-0:1:v";
export const TEMPORA_ADV4_1 = "tempora:adv4-1:3:v";
export const TEMPORA_ADV4_2 = "tempora:adv4-2:3:v";
export const TEMPORA_ADV4_3 = "tempora:adv4-3:3:v";
export const TEMPORA_ADV4_4 = "tempora:adv4-4:3:v";
export const TEMPORA_ADV4_5 = "tempora:adv4-5:3:v";
export const TEMPORA_NAT1_0 = "tempora:nat1-0:2:w"; // Sunday in the Octave of Nativity
export const TEMPORA_NAT1_1 = "tempora:nat1-1:2:w"; // Ordinary day in the Octave of Nativity
export const TEMPORA_NAT2_0 = "tempora:nat2-0:2:w"; // Feast of the Holy Name of Jesus

// SANCTI - days which have fixed date
export const SANCTI_10_DUr = "santos:10-DU:1:w"; // Feast of Christ the King; last Sunday of October
export const SANCTI_01_01 = "santos:01-01:1:w"; // Octave of the Nativity
export const SANCTI_01_06 = "santos:01-06:1:w"; // Epiphany
export const SANCTI_01_13 = "santos:01-13:2:w"; // Baptism of the Lord
export const SANCTI_01_14 = "santos:01-14:3:w";
export const SANCTI_01_15 = "santos:01-15:3:w";
export const SANCTI_01_16 = "santos:01-16:3:r";
export const SANCTI_01_17 = "santos:01-17:3:w";
export const SANCTI_01_18 = "santos:01-18:4:w";
export const SANCTI_01_19 = "santos:01-19:4:r";
export const SANCTI_01_20 = "santos:01-20:3:r";
export const SANCTI_01_21 = "santos:01-21:3:r";
export const SANCTI_01_22 = "santos:01-22:3:r";
export const SANCTI_01_23 = "santos:01-23:3:w";
export const SANCTI_01_24 = "santos:01-24:3:r";
export const SANCTI_01_25 = "santos:01-25:3:w";
export const SANCTI_01_26 = "santos:01-26:3:r";
export const SANCTI_01_27 = "santos:01-27:3:w";
export const SANCTI_01_28 = "santos:01-28:3:w";
export const SANCTI_01_29 = "santos:01-29:3:w";
export const SANCTI_01_30 = "santos:01-30:3:r";
export const SANCTI_01_31 = "santos:01-31:3:w";

export const SANCTI_02_01 = "santos:02-01:3:r";
export const SANCTI_02_02 = "santos:02-02:2:w"; // Feast of the Purification of the Blessed Virgin Mary
export const SANCTI_02_03 = "santos:02-03:4:r";
export const SANCTI_02_04 = "santos:02-04:3:w";
export const SANCTI_02_05 = "santos:02-05:3:r";
export const SANCTI_02_06 = "santos:02-06:3:w";
export const SANCTI_02_07 = "santos:02-07:3:w";
export const SANCTI_02_08 = "santos:02-08:3:w";
export const SANCTI_02_09 = "santos:02-09:3:w";
export const SANCTI_02_10 = "santos:02-10:3:w";
export const SANCTI_02_11 = "santos:02-11:3:w";
export const SANCTI_02_12 = "santos:02-12:3:w";
export const SANCTI_02_14 = "santos:02-14:4:r";
export const SANCTI_02_15 = "santos:02-15:4:r";
export const SANCTI_02_18 = "santos:02-18:4:r";
export const SANCTI_02_22 = "santos:02-22:2:w"; // Feast of the Chair of Saint Peter
export const SANCTI_02_23 = "santos:02-23:3:w";
export const SANCTI_02_24 = "santos:02-24:2:r"; // St. Matthias, Apostle
export const SANCTI_02_27 = "santos:02-27:3:w";

export const SANCTI_03_04 = "santos:03-04:3:w";
export const SANCTI_03_06 = "santos:03-06:3:r";
export const SANCTI_03_07 = "santos:03-07:3:w";
export const SANCTI_03_08 = "santos:03-08:3:w";
export const SANCTI_03_09 = "santos:03-09:3:w";
export const SANCTI_03_10 = "santos:03-10:3:r";
export const SANCTI_03_12 = "santos:03-12:3:w";
export const SANCTI_03_17 = "santos:03-17:3:w";
export const SANCTI_03_18 = "santos:03-18:3:w";
export const SANCTI_03_19 = "santos:03-19:1:w"; // Saint Joseph's Day
export const SANCTI_03_21 = "santos:03-21:3:w";
export const SANCTI_03_24 = "santos:03-24:3:w";
export const SANCTI_03_25 = "santos:03-25:1:w"; // Annunciation
export const SANCTI_03_27 = "santos:03-27:3:w";
export const SANCTI_03_28 = "santos:03-28:3:w";

export const SANCTI_04_02 = "santos:04-02:3:w";
export const SANCTI_04_04 = "santos:04-04:3:w";
export const SANCTI_04_05 = "santos:04-05:3:w";
export const SANCTI_04_11 = "santos:04-11:3:w";
export const SANCTI_04_13 = "santos:04-13:3:r";
export const SANCTI_04_14 = "santos:04-14:3:r";
export const SANCTI_04_17 = "santos:04-17:4:r";
export const SANCTI_04_21 = "santos:04-21:3:w";
export const SANCTI_04_22 = "santos:04-22:3:r";
export const SANCTI_04_23 = "santos:04-23:4:r";
export const SANCTI_04_24 = "santos:04-24:3:r";
export const SANCTI_04_25 = "santos:04-25:2:r"; // St. Mark, Evangelist
export const SANCTI_04_26 = "santos:04-26:3:r";
export const SANCTI_04_27 = "santos:04-27:3:w";
export const SANCTI_04_28 = "santos:04-28:3:w";
export const SANCTI_04_29 = "santos:04-29:3:r";
export const SANCTI_04_30 = "santos:04-30:3:w";

export const SANCTI_05_01 = "santos:05-01:2:r"; // SS. Philip and James, Apostles
export const SANCTI_05_02 = "santos:05-02:3:w";
export const SANCTI_05_03 = "santos:05-03:2:r";
export const SANCTI_05_04 = "santos:05-04:3:w";
export const SANCTI_05_05 = "santos:05-05:3:w";
export const SANCTI_05_06 = "santos:05-06:3:r";
export const SANCTI_05_07 = "santos:05-07:3:r";
export const SANCTI_05_08 = "santos:05-08:2:w";
export const SANCTI_05_09 = "santos:05-09:3:w";
export const SANCTI_05_10 = "santos:05-10:3:w";
export const SANCTI_05_12 = "santos:05-12:3:r";
export const SANCTI_05_13 = "santos:05-13:3:w";
export const SANCTI_05_14 = "santos:05-14:4:r";
export const SANCTI_05_15 = "santos:05-15:3:w";
export const SANCTI_05_16 = "santos:05-16:4:w";
export const SANCTI_05_17 = "santos:05-17:3:w";
export const SANCTI_05_18 = "santos:05-18:3:r";
export const SANCTI_05_19 = "santos:05-19:3:w";
export const SANCTI_05_20 = "santos:05-20:3:w";
export const SANCTI_05_25 = "santos:05-25:3:w";
export const SANCTI_05_26 = "santos:05-26:3:w";
export const SANCTI_05_27 = "santos:05-27:3:w";
export const SANCTI_05_28 = "santos:05-28:3:w";
export const SANCTI_05_29 = "santos:05-29:3:w";
export const SANCTI_05_30 = "santos:05-30:4:r";
export const SANCTI_05_31 = "santos:05-31:2:w"; // Mary the Queen

export const SANCTI_06_01 = "santos:06-01:3:w";
export const SANCTI_06_02 = "santos:06-02:4:r";
export const SANCTI_06_04 = "santos:06-04:3:w";
export const SANCTI_06_05 = "santos:06-05:3:r";
export const SANCTI_06_06 = "santos:06-06:3:w";
export const SANCTI_06_09 = "santos:06-09:4:r";
export const SANCTI_06_10 = "santos:06-10:3:w";
export const SANCTI_06_11 = "santos:06-11:3:r";
export const SANCTI_06_12 = "santos:06-12:3:r";
export const SANCTI_06_13 = "santos:06-13:3:w";
export const SANCTI_06_14 = "santos:06-14:3:w";
export const SANCTI_06_15 = "santos:06-15:3:w";
export const SANCTI_06_17 = "santos:06-17:3:w";
export const SANCTI_06_18 = "santos:06-18:3:r";
export const SANCTI_06_19 = "santos:06-19:3:r";
export const SANCTI_06_20 = "santos:06-20:4:r";
export const SANCTI_06_21 = "santos:06-21:3:w";
export const SANCTI_06_22 = "santos:06-22:3:w";
export const SANCTI_06_23 = "santos:06-23:3:v"; // Vigil of st. John Baptist
export const SANCTI_06_24 = "santos:06-24:1:w"; // St. John Baptist
export const SANCTI_06_25 = "santos:06-25:3:w";
export const SANCTI_06_26 = "santos:06-26:3:r";
export const SANCTI_06_28 = "santos:06-28:3:r"; // Irineu
export const SANCTI_06_29 = "santos:06-29:1:r"; // Ss. Peter and Paul
export const SANCTI_06_30 = "santos:06-30:3:r";

export const SANCTI_07_01 = "santos:07-01:1:r"; // Feast of the Most Precious Blood
export const SANCTI_07_02 = "santos:07-02:2:w"; // Feast of the Visitation of the Blessed Virgin Mary
export const SANCTI_07_03 = "santos:07-03:3:r";
export const SANCTI_07_05 = "santos:07-05:3:w";
export const SANCTI_07_07 = "santos:07-07:3:w";
export const SANCTI_07_08 = "santos:07-08:3:w";
export const SANCTI_07_10 = "santos:07-10:3:r";
export const SANCTI_07_11 = "santos:07-11:4:r";
export const SANCTI_07_12 = "santos:07-12:3:r";
export const SANCTI_07_14 = "santos:07-14:3:w";
export const SANCTI_07_15 = "santos:07-15:3:w";
export const SANCTI_07_16 = "santos:07-16:4:w";
export const SANCTI_07_17 = "santos:07-17:4:w";
export const SANCTI_07_18 = "santos:07-18:3:r";
export const SANCTI_07_19 = "santos:07-19:3:w";
export const SANCTI_07_20 = "santos:07-20:3:r";
export const SANCTI_07_21 = "santos:07-21:3:w";
export const SANCTI_07_22 = "santos:07-22:3:w";
export const SANCTI_07_23 = "santos:07-23:3:w";
export const SANCTI_07_24 = "santos:07-24:4:r";
export const SANCTI_07_25 = "santos:07-25:2:r"; // St. James, Apostle
export const SANCTI_07_26 = "santos:07-26:2:w"; // St. Anna, Mary's Mother
export const SANCTI_07_27 = "santos:07-27:4:r";
export const SANCTI_07_28 = "santos:07-28:3:r";
export const SANCTI_07_29 = "santos:07-29:3:r";
export const SANCTI_07_30 = "santos:07-30:4:r";
export const SANCTI_07_31 = "santos:07-31:3:w";

export const SANCTI_08_01 = "santos:08-01:4:r";
export const SANCTI_08_02 = "santos:08-02:3:r";
export const SANCTI_08_04 = "santos:08-04:3:w";
export const SANCTI_08_05 = "santos:08-05:3:w";
export const SANCTI_08_06 = "santos:08-06:2:r"; // Transfiguration
export const SANCTI_08_07 = "santos:08-07:3:r";
export const SANCTI_08_08 = "santos:08-08:3:r";
export const SANCTI_08_09 = "santos:08-09t:3:r"; // Vigil of st. Laurent
export const SANCTI_08_10 = "santos:08-10:2:r"; // St. Laurent
export const SANCTI_08_11 = "santos:08-11:4:r";
export const SANCTI_08_12 = "santos:08-12:3:w";
export const SANCTI_08_13 = "santos:08-13:4:r";
export const SANCTI_08_14 = "santos:08-14:2:w"; // Vigil of Assumption of Mary
export const SANCTI_08_15 = "santos:08-15:1:w"; // Assumption of Mary
export const SANCTI_08_16 = "santos:08-16:2:w"; // St. Joachim
export const SANCTI_08_17 = "santos:08-17:3:w";
export const SANCTI_08_18 = "santos:08-18:4:w";
export const SANCTI_08_19 = "santos:08-19:3:w";
export const SANCTI_08_20 = "santos:08-20:3:w";
export const SANCTI_08_21 = "santos:08-21:3:w";
export const SANCTI_08_22 = "santos:08-22:2:w"; // Immaculate Heart of Mary
export const SANCTI_08_23 = "santos:08-23:3:w";
export const SANCTI_08_24 = "santos:08-24:2:r"; // St. Bartholomew, Apostle
export const SANCTI_08_25 = "santos:08-25:3:w";
export const SANCTI_08_26 = "santos:08-26:4:r";
export const SANCTI_08_27 = "santos:08-27:3:w";
export const SANCTI_08_28 = "santos:08-28:3:r";
export const SANCTI_08_29 = "santos:08-29:3:r";
export const SANCTI_08_30 = "santos:08-30:3:r";
export const SANCTI_08_31 = "santos:08-31:3:w";

export const SANCTI_09_01 = "santos:09-01:4:w";
export const SANCTI_09_02 = "santos:09-02:3:w";
export const SANCTI_09_03 = "santos:09-03:3:w";
export const SANCTI_09_05 = "santos:09-05:3:w";
export const SANCTI_09_08 = "santos:09-08:2:w"; // Nativity of Mary
export const SANCTI_09_09 = "santos:09-09:4:r";
export const SANCTI_09_10 = "santos:09-10:3:w";
export const SANCTI_09_11 = "santos:09-11:4:r";
export const SANCTI_09_12 = "santos:09-12:3:w";
export const SANCTI_09_14 = "santos:09-14:2:r"; // Exaltation of the Cross
export const SANCTI_09_15 = "santos:09-15:2:w"; // The Seven Dolors of the Blessed Virgin Mary
export const SANCTI_09_16 = "santos:09-16:3:w";
export const SANCTI_09_17 = "santos:09-17:4:w";
export const SANCTI_09_18 = "santos:09-18:3:w";
export const SANCTI_09_19 = "santos:09-19:3:r";
export const SANCTI_09_20 = "santos:09-20:4:r";
export const SANCTI_09_21 = "santos:09-21:2:r"; // St. Matthew, Apostle and Evangelist
export const SANCTI_09_22 = "santos:09-22:3:w";
export const SANCTI_09_23 = "santos:09-23:3:r";
export const SANCTI_09_24 = "santos:09-24:4:w";
export const SANCTI_09_26 = "santos:09-26:4:r";
export const SANCTI_09_27 = "santos:09-27:3:r";
export const SANCTI_09_28 = "santos:09-28:3:r";
export const SANCTI_09_29 = "santos:09-29:1:w"; // St. Michael the Archangel
export const SANCTI_09_30 = "santos:09-30:3:w";

export const SANCTI_10_01 = "santos:10-01:4:w";
export const SANCTI_10_02 = "santos:10-02:3:w";
export const SANCTI_10_03 = "santos:10-03:3:w";
export const SANCTI_10_04 = "santos:10-04:3:w";
export const SANCTI_10_05 = "santos:10-05:4:r";
export const SANCTI_10_06 = "santos:10-06:3:w";
export const SANCTI_10_07 = "santos:10-07:2:w"; // Our Lady of the Rosary
export const SANCTI_10_08 = "santos:10-08:3:w";
export const SANCTI_10_09 = "santos:10-09:3:w";
export const SANCTI_10_10 = "santos:10-10:3:w";
export const SANCTI_10_11 = "santos:10-11:2:w"; // Maternity of the Blessed Virgin Mary
export const SANCTI_10_13 = "santos:10-13:3:w";
export const SANCTI_10_14 = "santos:10-14:3:r";
export const SANCTI_10_15 = "santos:10-15:3:w";
export const SANCTI_10_16 = "santos:10-16:3:w";
export const SANCTI_10_17 = "santos:10-17:3:w";
export const SANCTI_10_18 = "santos:10-18:2:r"; // St. Luke, Evangelist
export const SANCTI_10_19 = "santos:10-19:3:w";
export const SANCTI_10_20 = "santos:10-20:3:w";
export const SANCTI_10_21 = "santos:10-21:4:w";
export const SANCTI_10_23 = "santos:10-23:3:w";
export const SANCTI_10_24 = "santos:10-24:3:w";
export const SANCTI_10_25 = "santos:10-25:4:r";
export const SANCTI_10_28 = "santos:10-28:2:r"; // SS. Simon and Jude, Apostles

export const SANCTI_11_01 = "santos:11-01:1:w"; // All Saints
export const SANCTI_11_02_1 = "santos:11-02-1:1:b"; // All Souls' Day
export const SANCTI_11_02_2 = "santos:11-02-2:1:b";
export const SANCTI_11_02_3 = "santos:11-02-3:1:b";
export const SANCTI_11_04 = "santos:11-04:3:w";
export const SANCTI_11_08 = "santos:11-08:4:r";
export const SANCTI_11_09 = "santos:11-09:2:w"; // Dedication of the Lateran Basilica in Rome
export const SANCTI_11_10 = "santos:11-10:3:w";
export const SANCTI_11_11 = "santos:11-11:3:w";
export const SANCTI_11_12 = "santos:11-12:3:r";
export const SANCTI_11_13 = "santos:11-13:4:w";
export const SANCTI_11_14 = "santos:11-14:3:w";
export const SANCTI_11_15 = "santos:11-15:3:w";
export const SANCTI_11_16 = "santos:11-16:3:w";
export const SANCTI_11_17 = "santos:11-17:3:w";
export const SANCTI_11_18 = "santos:11-18:3:w";
export const SANCTI_11_19 = "santos:11-19:3:w";
export const SANCTI_11_20 = "santos:11-20:3:w";
export const SANCTI_11_21 = "santos:11-21:3:w";
export const SANCTI_11_22 = "santos:11-22:3:r";
export const SANCTI_11_23 = "santos:11-23:3:r";
export const SANCTI_11_24 = "santos:11-24:3:w";
export const SANCTI_11_25 = "santos:11-25:3:r";
export const SANCTI_11_26 = "santos:11-26:3:w";
export const SANCTI_11_29 = "santos:11-29:4:r";
export const SANCTI_11_30 = "santos:11-30:2:r"; // St. Andrew, Apostle

export const SANCTI_12_02 = "santos:12-02:3:r";
export const SANCTI_12_03 = "santos:12-03:3:w";
export const SANCTI_12_04 = "santos:12-04:3:w";
export const SANCTI_12_05 = "santos:12-05:4:w";
export const SANCTI_12_06 = "santos:12-06:3:w";
export const SANCTI_12_07 = "santos:12-07:3:w";
export const SANCTI_12_08 = "santos:12-08:1:w"; // Immaculate Conception of the Blessed Virgin Mary
export const SANCTI_12_10 = "santos:12-10:4:r";
export const SANCTI_12_11 = "santos:12-11:3:w";
export const SANCTI_12_13 = "santos:12-13:3:r";
export const SANCTI_12_16 = "santos:12-16:3:r";
export const SANCTI_12_21 = "santos:12-21:2:r"; // St. Thomas, Apostle
export const SANCTI_12_24 = "santos:12-24:1:v"; // Vigil of the Nativity of the Lord
export const SANCTI_12_25_1 = "santos:12-25-1:1:w"; // Nativity of the Lord
export const SANCTI_12_25_2 = "santos:12-25-2:1:w";
export const SANCTI_12_25_3 = "santos:12-25-3:1:w";
export const SANCTI_12_26 = "santos:12-26:2:r"; // St. Stephen, Protomartyr
export const SANCTI_12_27 = "santos:12-27:2:w"; // St. John, Apostle and Evangelist
export const SANCTI_12_28 = "santos:12-28:2:r"; // Holy Innocents
export const SANCTI_12_29 = "santos:12-29:4:r";
export const SANCTI_12_31 = "santos:12-31:4:w";

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
export const VOTIVE_PENT01_0 = "votivas:Pent01-0:0:w"; // Trinity
export const VOTIVE_PENT02_5 = "votivas:Pent02-5:0:w"; // Sacred Heart of Jesus
export const VOTIVE_08_22 = "votivas:08-22:0:w"; // Immaculate Heart of B. V. M.
export const VOTIVE_ANGELS = "votivas:Angels:0:w";
export const VOTIVE_JOSEPH = "votivas:Joseph:0:w";
export const VOTIVE_PETERPAUL = "votivas:PeterPaul:0:r";
export const VOTIVE_PETERPAULP = "votivas:PeterPaulP:0:r";
export const VOTIVE_APOSTLES = "votivas:Apostles:0:r";
export const VOTIVE_APOSTLESP = "votivas:ApostlesP:0:r";
export const VOTIVE_HOLYSPIRIT = "votivas:HolySpirit:0:r";
export const VOTIVE_HOLYSPIRIT2 = "votivas:HolySpirit2:0:r";
export const VOTIVE_BLESSEDSACRAMENT = "votivas:BlessedSacrament:0:w";
export const VOTIVE_JESUSETERNALPRIEST = "votivas:JesusEternalPriest:0:w";
export const VOTIVE_CROSS = "votivas:Cross:0:r";
export const VOTIVE_PASSION = "votivas:Passion:0:r";
export const VOTIVE_DEFUNCTORUM = "votivas:Defunctorum:0:b";
export const VOTIVE_MORTALITATIS = "votivas:TemporeMortalitatis:0:v";
export const VOTIVE_FIDEI_PROPAGATIONE = "votivas:FideiPropagatione:0:v";
export const VOTIVE_MATRIMONIUM = "votivas:Matrimonium:0:w";

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

export const OBSERVANCES_WITHOUT_OWN_PROPER: RegExp[] = [
  // Advent feria except Ember Days
  /^tempora:adv[124]-[1-6]/,
  /^tempora:adv[3]-[124]/,
];

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

export const TITLES: Record<string, string> = {
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
  [SANCTI_06_17]: "Beata Teresa, Princesa de Portugal, Viúva",
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
  [SANCTI_12_25_1]: "Missa da Noite de Natal de N. S. Jesus Cristo",
  [SANCTI_12_25_2]: "Missa da Aurora de Natal de N. S. Jesus Cristo",
  [SANCTI_12_25_3]: "Missa do Dia de Natal de N. S. Jesus Cristo",
  [SANCTI_12_26]: "S. Estêvão, Primeiro Mártir",
  [SANCTI_12_27]: "S. João, Apóstolo e Evangelista",
  [SANCTI_12_28]: "Santos Inocentes",
  [SANCTI_12_29]: "S. Tomás de Cantuária, Bispo e Mártir",
  [SANCTI_12_31]: "S. Silvestre",
  [VOTIVE_ANGELS]: "Anjos",
  [VOTIVE_JOSEPH]: "S. José",
  [VOTIVE_JESUSETERNALPRIEST]: "N. S. Jesus Cristo Sumo e Eterno Sacerdote",
  [VOTIVE_PENT01_0]: "Santíssima Trindade",
  [VOTIVE_PENT02_5]: "Santíssimo Coração de Jesus",
};
