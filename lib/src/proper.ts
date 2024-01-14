import {
  COMMEMORATED_ORATIO,
  COMMEMORATED_POSTCOMMUNIO,
  COMMEMORATED_SECRETA,
  COMMEMORATION,
  ORATIO,
  POSTCOMMUNIO,
  SECRETA,
  VISIBLE_SECTIONS,
} from "./constants.ts";

export class ProperConfig {
  preface: string | null = null;
  interReadingsSection?: string | null = null;
  stripAlleluia = false;

  constructor(
    preface: string | null = null,
    stripAlleluia = false,
    interReadingsSection: string | null = null,
  ) {
    // interReadingsSection == null - show all sections defined in the source
    if (interReadingsSection !== null) {
      const validSections = [null, "GRADUALE", "TRACTUS", "GRADUALE_PASCHAL"];
      if (!validSections.includes(interReadingsSection)) {
        console.error(`Invalid interReadingsSection: ${interReadingsSection}`);
      }
    }
    this.preface = preface;
    this.interReadingsSection = interReadingsSection;
    this.stripAlleluia = stripAlleluia;
  }
}

export class Section {
  id = "";
  body: string[] = [];

  constructor(id: string, body: string[] | null = null) {
    this.id = id;
    this.body = body || [];
  }

  getBody(): string[] {
    return this.body;
  }

  extendBody(bodyPart: string[]): void {
    this.body = [...this.body, ...bodyPart];
  }

  appendToBody(bodyPart: string): void {
    this.body.push(bodyPart);
  }

  serialize() {
    return {
      id: this.id,
      body: this.body,
    };
  }

  toString(): string {
    const bodyShort = this.body.join(" ").substring(0, 32);
    return `${this.id} ${bodyShort}`;
  }

  [Symbol.toStringTag] = "Section";
}

export class ParsedSource {
  _container: Record<string, Section> = {};

  constructor() {
    this._container = {};
  }

  getSection(sectionId: string): Section | null {
    return this._container[sectionId] || null;
  }

  setSection(sectionName: string, section: Section): void {
    this._container[sectionName] = section;
  }

  popSection(sectionId: string): Section | null {
    try {
      const body = this._container[sectionId];
      delete this._container[sectionId];
      return body;
    } catch (error) {
      return null;
    }
  }

  keys(): string[] {
    return Object.keys(this._container);
  }

  values(): Section[] {
    return Object.values(this._container);
  }

  items(): [string, Section][] {
    return Object.entries(this._container);
  }

  merge(proper: ParsedSource): void {
    for (const [k, v] of proper.items()) {
      if (!(k in this._container)) {
        this._container[k] = v;
      }
    }
  }
}

export class Proper extends ParsedSource {
  title: string | null = null;
  description: string | null = null;
  id: string;
  colors: string[];
  rank: number | null = null;
  additionalInfo: string[] = [];
  supplements: unknown[] = [];
  tags: string[] | null = [];
  commemorationsNamesTranslations: Record<string, null> = {
    COMMEMORATION: null,
    COMMEMORATED_ORATIO: null,
    COMMEMORATED_SECRETA: null,
    COMMEMORATED_POSTCOMMUNIO: null,
  };

  constructor(id: string, parsedSource: ParsedSource | null = null) {
    super();
    this.id = id;
    try {
      const [, , rank, color] = id.split(":");
      this.rank = parseInt(rank, 10);
      this.colors = color.split("");
    } catch (error) {
      throw new Error(`Proper ${id} not found`);
    }
    if (parsedSource !== null) {
      this._container = { ...parsedSource._container };
    }
  }

  serialize() {
    const list_ = this.values()
      .map((v) => v.serialize())
      .sort((a, b) => {
        const indexA = VISIBLE_SECTIONS.indexOf(a.id);
        const indexB = VISIBLE_SECTIONS.indexOf(b.id);
        return indexA - indexB;
      });

    return list_;
  }

  getRule(ruleName: string): string | null {
    const rules: Record<string, string | null> = {
      preface: null,
      vide: null,
    };

    const rulesSrc: string[] = [];
    for (const sectionName of ["Rank", "Rule"]) {
      const section = this.getSection(sectionName);
      if (section !== null) {
        for (const line of section.getBody()) {
          rulesSrc.push(...line.split(";").map((i) => i.trim()));
        }
      }
    }

    if (rulesSrc.length > 0) {
      const preface = rulesSrc
        .filter((i) => i.startsWith("Prefatio") && i.includes("="))
        .map((i) => i.split("=")[1]);
      if (preface.length > 0) {
        rules.preface = preface[preface.length - 1];
      }

      const vide = rulesSrc
        .filter((i) => i.startsWith("vide ") || i.startsWith("ex "))
        .map((i) => i.split(" ").slice(-1)[0].split(";")[0]);
      if (vide.length > 0) {
        rules.vide = vide[0];
      }
    }

    return rules[ruleName] ?? null;
  }

  addCommemorations(commemorations: Proper[]): void {
    for (const commemoration of commemorations) {
      if (commemoration) {
        this.description += `\n${this.commemorationsNamesTranslations[COMMEMORATION]} ${commemoration.title}.`;

        if (commemoration.description) {
          this.description += `\n\n${commemoration.description}`;
        }

        for (const [commemoratedSectionName, sourceSectionName] of [
          [COMMEMORATED_ORATIO, ORATIO],
          [COMMEMORATED_SECRETA, SECRETA],
          [COMMEMORATED_POSTCOMMUNIO, POSTCOMMUNIO],
        ]) {
          const commemoratedSection =
            commemoration.getSection(sourceSectionName);

          commemoratedSection.body.unshift(
            `* ${this.commemorationsNamesTranslations[COMMEMORATION]} ${commemoration.title} *`,
          );
          commemoratedSection.id = commemoratedSectionName;

          this.setSection(commemoratedSectionName, commemoratedSection);
        }
      }
    }
  }

  [Symbol.toStringTag] = "Proper";
}