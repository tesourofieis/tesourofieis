import * as fs from "node:fs";
import * as path from "node:path";
import {
  DIVOFF_LANG_MAP,
  GRADUALE,
  GRADUALE_PASCHAL,
  LANGUAGE,
  LANGUAGE_LATIN,
  NORMAL_SECTIONS,
  OBSERVANCES_WITHOUT_OWN_PROPER,
  PATTERN_ALLELUIA,
  PREFATIO_COMMUNIS,
  PREFATIO_OMIT,
  REFERENCE_REGEX,
  SECTION_REGEX,
  SUB_SECTION_REGEX,
  TRACTUS,
  getTranslation,
} from "./constants.ts";
import { ParsedSource, Proper, ProperConfig, Section } from "./proper.ts";
import { match } from "./utils.ts";

class ProperParser {
  properId = "";
  lang: string = LANGUAGE;
  config: ProperConfig | null = null;
  translations: Record<string, ReturnType<typeof getTranslation>> = {};
  prefaces: Record<string, ParsedSource> = {};

  constructor(properId: string, config: ProperConfig | null = null) {
    this.properId = properId;
    this.config = config || new ProperConfig();
  }

  properExists(): boolean {
    return (
      !match(this.properId, OBSERVANCES_WITHOUT_OWN_PROPER) &&
      !!this.getFullPath(this.getPartialPath(), LANGUAGE)
    );
  }

  parse() {
    this.translations[LANGUAGE] = getTranslation(LANGUAGE);
    this.translations[LANGUAGE_LATIN] = getTranslation(LANGUAGE_LATIN);
    this.prefaces[LANGUAGE] = this.parseSource(
      "Ordo/Prefationes.txt",
      LANGUAGE,
    );
    this.prefaces[LANGUAGE_LATIN] = this.parseSource(
      "Ordo/Prefationes.txt",
      LANGUAGE_LATIN,
    );
    const partialPath = this.getPartialPath();
    try {
      const properVernacular = this.parseProperSource(partialPath, LANGUAGE);
      const properLatin = this.parseProperSource(partialPath, LANGUAGE_LATIN);
      return [properVernacular, properLatin];
    } catch (error) {
      if (error) {
        console.error(
          `Proper not found. ${error} partialPath => ${partialPath}`,
        );
      } else {
        throw error;
      }
    }
  }

  private parseProperSource(partialPath: string, lang: string) {
    const parsedSource = this.parseSource(partialPath, lang);

    const proper = new Proper(this.properId, parsedSource);

    // Reference in Rule section in 'vide' or 'ex' clause - load all sections
    // from the referenced file and get sections that are not explicitly defined in the current proper.
    const vide = proper.getRule("vide");
    if (vide) {
      let nestedPath: string | null = null;
      if (vide.includes("/")) {
        nestedPath = this.getFullPath(`${vide}.txt`, lang);
      } else {
        for (const subdir of ["Commune", "Tempora"]) {
          nestedPath = this.getFullPath(`${subdir}/${vide}.txt`, lang);
          if (nestedPath) {
            break;
          }
        }
      }
      if (!nestedPath) {
        console.error(`Proper from vide not found ${vide}.`);
      }
      proper.merge(this.parseSource(nestedPath, lang));
    }

    try {
      proper.title = this.translations[lang].TITLES[this.properId];
    } catch (error) {
      // Handling very rare case when proper's source exists but rank or color in the ID is invalid
      console.error(`Proper ${this.properId} not found`);
    }
    this.addPrefaces(proper, lang);
    this.filterSections(proper);
    this.amendSectionsContents(proper);
    this.translateSectionTitles(proper, lang);

    return proper;
  }

  private parseSource(
    partialPath: string,
    lang: string = LANGUAGE,
    lookupSection?: string,
  ) {
    let parsedSource = new ParsedSource();
    let sectionName: string | null = null;
    let subSectionName: string | null = null;
    let concatLine = false;
    const fullPath = this.getFullPath(partialPath, lang);

    const fileContent: string = fs.readFileSync(
      fullPath || partialPath,
      "utf8",
    );
    const lines = fileContent.split("\n");

    for (let itr = 0; itr < lines.length; itr++) {
      let ln: string = lines[itr].trim();

      if (!sectionName && ln === "") {
        // Skipping empty lines in the beginning of the file
        continue;
      }

      if (ln.trim() === "!") {
        // Skipping lines containing an exclamation mark only
        continue;
      }

      if (!sectionName && REFERENCE_REGEX.test(ln)) {
        // Reference outside any section as a first non-empty line - load all sections
        // from the referenced file and continue with the sections from the current one.
        const [, pathBit] = REFERENCE_REGEX.exec(ln) || [];
        const nestedPath: string =
          this.getFullPath(`${pathBit}.txt`, lang) || partialPath;
        if (!nestedPath) {
          console.error(`Proper \`${pathBit}.txt\` not found.`);
        }
        parsedSource.merge(this.parseSource(nestedPath, lang));
        continue;
      }

      ln = this.normalize(ln, lang);

      if (ln.search(SECTION_REGEX) !== -1) {
        sectionName = ln.replace(SECTION_REGEX, "$1");
        subSectionName = null;
      }

      if (!lookupSection || lookupSection === sectionName) {
        if (ln.match(SECTION_REGEX)) {
          parsedSource.setSection(sectionName, new Section(sectionName));
        } else if (ln.match(SUB_SECTION_REGEX)) {
          subSectionName = ln.replace(SUB_SECTION_REGEX, "$1");
          parsedSource.container[sectionName].addSubsection(
            new Section(subSectionName),
          );
        } else {
          if (REFERENCE_REGEX.test(ln)) {
            const [, pathBit, nestedSectionName] =
              REFERENCE_REGEX.exec(ln) || [];
            if (pathBit) {
              // Reference to an external file - parse it recursively
              const nestedPath: string =
                this.getFullPath(`${pathBit}.txt`, lang) || partialPath;
              if (!nestedPath) {
                console.error(`Proper \`${pathBit}.txt\` not found.`);
              }
              const nestedProper = this.parseSource(
                nestedPath,
                lang,
                nestedSectionName,
              );

              const nestedSection = nestedProper.getSection(nestedSectionName);
              if (nestedSection) {
                parsedSource
                  .getSection(sectionName)
                  .extendBody(nestedSection.body);
              } else {
                console.error(
                  `Section \`${nestedSectionName}\` referenced from \`${fullPath}\` is missing in \`${nestedPath}\``,
                );
              }
            } else {
              // Reference to another section in the current file
              const nestedSectionBody =
                parsedSource.getSection(nestedSectionName).body;
              parsedSource
                .getSection(sectionName)
                .extendBody(nestedSectionBody);
            }
          } else {
            // Finally, a regular line...
            // Line ending with `~` indicates that the next line should be treated as its continuation
            const appendLn = ln.replace(/~$/, " ");
            if (!parsedSource.getSection(sectionName)) {
              parsedSource.setSection(sectionName, new Section(sectionName));
            }
            if (concatLine) {
              parsedSource.getSection(sectionName).body[
                parsedSource.getSection(sectionName).body.length - 1
              ] += appendLn;
            } else {
              if (sectionName && subSectionName) {
                parsedSource
                  .getSubSection(sectionName, subSectionName)
                  .body.push(appendLn);
              } else {
                parsedSource.container[sectionName].body.push(appendLn);
              }
            }
            concatLine = ln.endsWith("~");
          }
        }
      }
    }

    parsedSource = this.stripNewLines(parsedSource);
    parsedSource = this.resolveConditionals(parsedSource);

    return parsedSource;
  }

  private normalize(ln: string, lang: string) {
    for (const { pattern, replacement } of this.translations[lang]
      .TRANSFORMATIONS) {
      ln = ln.replace(new RegExp(pattern, "g"), replacement);
    }

    return ln;
  }

  private stripNewLines(proper: ParsedSource) {
    for (const section of Object.values(proper)) {
      while (
        section.body?.length > 0 &&
        !section.body[section.body.length - 1]
      ) {
        section.body.pop();
      }
    }
    return proper;
  }

  private filterSections(proper: Proper) {
    function notVisible(sectionId: string): boolean {
      return !NORMAL_SECTIONS.includes(sectionId);
    }

    function getExcludedInterReadingsSections(
      config: ProperConfig,
      proper: ParsedSource,
    ): string[] {
      if (
        config.interReadingsSection === GRADUALE &&
        proper.getSection(GRADUALE)
      ) {
        return [GRADUALE_PASCHAL, TRACTUS];
      }
      if (config.interReadingsSection === GRADUALE_PASCHAL) {
        if (proper.getSection(GRADUALE_PASCHAL) !== null) {
          return [GRADUALE, TRACTUS];
        }
        return [TRACTUS];
      }
      if (config.interReadingsSection === TRACTUS) {
        if (proper.getSection(TRACTUS) !== null) {
          return [GRADUALE, GRADUALE_PASCHAL];
        }
        return [GRADUALE_PASCHAL];
      }
      return [];
    }

    const sectionsToRemove: Set<string> = new Set();

    for (const [id] of proper.items()) {
      if (notVisible(id)) {
        sectionsToRemove.add(id);
      }
    }

    const excludedSections = getExcludedInterReadingsSections(
      this.config,
      proper,
    );

    for (const sectionId of excludedSections) {
      sectionsToRemove.add(sectionId);
    }

    for (const sectionId of sectionsToRemove) {
      proper.popSection(sectionId);
    }

    return proper;
  }

  private amendSectionsContents(proper: Proper) {
    const gradual = proper.getSection(GRADUALE);

    if (this.config.stripAlleluia && !gradual) {
      const body = gradual.body;

      for (let i = 0; i < body.length; i++) {
        body[i] = body[i]?.replace(new RegExp(PATTERN_ALLELUIA, "g"), "");
      }
    }

    return proper;
  }

  private translateSectionTitles(proper: Proper, lang: string) {
    proper.commemorationsNamesTranslations =
      this.translations[lang].COMMEMORATIONS;

    return proper;
  }

  private addPrefaces(proper: Proper, lang: string): ParsedSource {
    const prefaceName = this.config.preface || proper.getRule("preface");

    if (
      prefaceName === PREFATIO_OMIT ||
      (!prefaceName && "Prefatio" in proper.keys())
    ) {
      return proper;
    }

    const prefaceItem =
      this.prefaces[lang].getSection(prefaceName) ||
      this.prefaces[lang].getSection(PREFATIO_COMMUNIS);

    if (prefaceItem) {
      proper.setSection("Prefatio", new Section("Prefatio", prefaceItem.body));
    }

    return proper;
  }

  private resolveConditionals(proper: ParsedSource) {
    for (const [sectionName, section] of proper.items()) {
      const newContent: string[] = [];
      let omit = false;

      for (const ln of section.body) {
        if (ln.includes("(sed rubrica 1960 dicuntur)")) {
          // Delete previous line; do not append the current one
          newContent.pop();
          continue;
        }

        if (
          ln.includes(
            "(rubrica 1570 aut rubrica 1910 aut rubrica divino afflatu dicitur)",
          )
        ) {
          // Skip the next line; do not append the current one
          continue;
        }

        if (
          ln.includes("(deinde dicuntur)") ||
          ln.includes("(sed communi Summorum Pontificum dicitur)")
        ) {
          // Stop skipping lines from now on
          omit = false;
          continue;
        }

        if (
          ln.includes("(sed rubrica 1955 aut rubrica 1960") &&
          ln.includes("versus omittuntur)")
        ) {
          // Stop skipping lines from now on
          omit = false;
          continue;
        }

        if (
          omit ||
          ln.includes("(dicitur)") ||
          ln.includes("(communi Summorum Pontificum loco huius versus dicitur)")
        ) {
          continue;
        }

        newContent.push(ln);
      }
      proper.getSection(sectionName).body = newContent;
    }

    return proper;
  }

  private getFullPath(partialPath: string, lang: string = LANGUAGE) {
    const fullPath = path.join(
      process.cwd(),
      "src/lib",
      `/resources/divinum-officium/web/www/missa/${DIVOFF_LANG_MAP[lang]}/${partialPath}`,
    );

    if (!fs.existsSync(fullPath)) {
      return;
    }

    return fullPath;
  }

  private getPartialPath() {
    try {
      const [flex, name] = this.properId.split(":");

      return `${flex.charAt(0).toUpperCase() + flex.slice(1)}/${name}.txt`;
    } catch (error) {
      console.error(
        "Proper ID should follow format `<flex>:<name>`, e.g. `tempora:Adv1-0`",
      );
    }
  }
}

export { ProperParser };
