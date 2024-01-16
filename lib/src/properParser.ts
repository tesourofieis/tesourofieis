import * as fs from "fs";
import {
  ASTERISK,
  DIVOFF_LANG_MAP,
  GRADUALE,
  GRADUALE_PASCHAL,
  LANGUAGE,
  LANGUAGE_LATIN,
  OBSERVANCES_WITHOUT_OWN_PROPER,
  PATTERN_ALLELUIA,
  PATTERN_COMMEMORATION,
  PREFATIO_COMMUNIS,
  PREFATIO_OMIT,
  REFERENCE_REGEX,
  SECTION_REGEX,
  TRACTUS,
  VISIBLE_SECTIONS,
  getTranslation,
} from "./constants.ts";
import { ProperConfig, Proper, Section, ParsedSource } from "./proper.ts";
import { match } from "./utils.ts";

class ProperParser {
  proper_id = "";
  lang: string = LANGUAGE;
  config: ProperConfig | null = null;
  translations: Record<string, ReturnType<typeof getTranslation>> = {};
  prefaces: Record<string, ParsedSource> = {};

  constructor(proper_id: string, config: ProperConfig | null = null) {
    this.proper_id = proper_id;
    this.config = config || new ProperConfig();
  }

  proper_exists(): boolean {
    console.debug(
      !match(this.proper_id, OBSERVANCES_WITHOUT_OWN_PROPER) &&
        !!this._get_full_path(this._get_partial_path(), LANGUAGE),
    );
    return (
      !match(this.proper_id, OBSERVANCES_WITHOUT_OWN_PROPER) &&
      !!this._get_full_path(this._get_partial_path(), LANGUAGE)
    );
  }

  parse() {
    this.translations[LANGUAGE] = getTranslation(LANGUAGE);
    this.translations[LANGUAGE_LATIN] = getTranslation(LANGUAGE_LATIN);
    this.prefaces[LANGUAGE] = this._parseSource(
      "Ordo/Prefationes.txt",
      LANGUAGE,
    );
    this.prefaces[LANGUAGE_LATIN] = this._parseSource(
      "Ordo/Prefationes.txt",
      LANGUAGE_LATIN,
    );
    const partial_path = this._get_partial_path();
    try {
      const proper_vernacular = this._parseProperSource(partial_path, LANGUAGE);
      const proper_latin = this._parseProperSource(
        partial_path,
        LANGUAGE_LATIN,
      );
      console.log([proper_vernacular, proper_latin]);
      return [proper_vernacular, proper_latin];
    } catch (error) {
      if (error) {
        console.error(
          `Proper not found. ${error} partialPath => ${partial_path}`,
        );
      } else {
        throw error;
      }
    }
  }

  private _parseProperSource(partialPath: string, lang: string) {
    const parsedSource = this._parseSource(partialPath, lang);

    const proper = new Proper(this.proper_id, parsedSource);
    console.log(proper);

    // Reference in Rule section in 'vide' or 'ex' clause - load all sections
    // from the referenced file and get sections that are not explicitly defined in the current proper.
    const vide = proper.getRule("vide");
    if (vide) {
      let nestedPath: string | null = null;
      if (vide.includes("/")) {
        nestedPath = this._get_full_path(`${vide}.txt`, lang);
      } else {
        for (const subdir of ["Commune", "Tempora"]) {
          nestedPath = this._get_full_path(`${subdir}/${vide}.txt`, lang);
          if (nestedPath) {
            break;
          }
        }
      }
      if (!nestedPath) {
        console.error(`Proper from vide not found ${vide}.`);
      }
      proper.merge(this._parseSource(nestedPath, lang));
    }

    // Moving data from "Comment" section up as direct properties of a Proper object
    const parsedComment = this._parseComment(proper.popSection("Comment"));
    try {
      proper.title = this.translations[lang].TITLES[this.proper_id];
    } catch (error) {
      // Handling very rare case when proper's source exists but rank or color in the ID is invalid
      console.error(`Proper ${this.proper_id} not found`);
    }
    proper.description = parsedComment.description;
    proper.additionalInfo = parsedComment.additionalInfo;
    proper.supplements =
      this.translations[lang].SUPPLEMENTS[this.proper_id] || [];
    this._addPrefaces(proper, lang);
    this._filterSections(proper);
    this._amendSectionsContents(proper);

    return proper;
  }

  private _parseSource(
    partialPath: string,
    lang: string = LANGUAGE,
    lookupSection?: string,
  ) {
    let parsedSource = new ParsedSource();
    let sectionName: string | null = null;
    let concatLine = false;
    const fullPath = this._get_full_path(partialPath, lang);
    // if (!fullPath) {
    //   console.error(`Proper not found. full_path => ${fullPath}`);
    // }
    // Assuming 'fs' module for file operations
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
          this._get_full_path(`${pathBit}.txt`, lang) || partialPath;
        if (!nestedPath) {
          console.error(`Proper \`${pathBit}.txt\` not found.`);
        }
        parsedSource.merge(this._parseSource(nestedPath, lang));
        continue;
      }

      ln = this._normalize(ln, lang);

      if (ln.search(SECTION_REGEX) !== -1) {
        sectionName = ln.replace(SECTION_REGEX, "$1");
      }

      if (!lookupSection || lookupSection === sectionName) {
        if (ln.match(SECTION_REGEX)) {
          parsedSource.setSection(sectionName, new Section(sectionName));
        } else {
          if (REFERENCE_REGEX.test(ln)) {
            const [, pathBit, nestedSectionName] =
              REFERENCE_REGEX.exec(ln) || [];
            if (pathBit) {
              // Reference to an external file - parse it recursively
              const nestedPath: string =
                this._get_full_path(`${pathBit}.txt`, lang) || partialPath;
              if (!nestedPath) {
                console.error(`Proper \`${pathBit}.txt\` not found.`);
              }
              const nestedProper = this._parseSource(
                nestedPath,
                lang,
                nestedSectionName,
              );

              const nestedSection = nestedProper.getSection(nestedSectionName);
              if (!nestedSection) {
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
              parsedSource.getSection(sectionName).body.push(appendLn);
            }
            concatLine = ln.endsWith("~");
          }
        }
      }
    }

    parsedSource = this._stripNewlines(parsedSource);
    parsedSource = this._resolveConditionals(parsedSource);

    return parsedSource;
  }

  private _parseComment(comment: Section | null) {
    const parsedComment: {
      title: string | null;
      description: string;
      rank: number | null;
      additionalInfo: string[];
    } = {
      title: null,
      description: "",
      rank: null,
      additionalInfo: [],
    };

    if (!comment) {
      return parsedComment;
    }

    for (const ln of comment.getBody()) {
      if (ln.startsWith("#")) {
        parsedComment.title = ln
          .trim()
          .substring(1)
          .replace(/[–—-]/g, "")
          .trim();
      } else if (ln.trim().startsWith("*") && ln.endsWith("*")) {
        const infoItem = ln.replace(/\*/g, "").trim();
        try {
          parsedComment.rank = parseInt(infoItem.split(" ")[0], 10);
        } catch (error) {
          if (PATTERN_COMMEMORATION.toLowerCase() === infoItem.toLowerCase()) {
            parsedComment.rank = 4;
          } else {
            parsedComment.additionalInfo.push(infoItem);
          }
        }
      } else {
        parsedComment.description += `${ln}\n`;
      }
    }

    return parsedComment;
  }

  private _normalize(ln: string, lang: string) {
    for (const { pattern, replacement } of this.translations[lang]
      .TRANSFORMATIONS) {
      ln = ln.replace(new RegExp(pattern, "g"), replacement);
    }

    return ln;
  }

  private _stripNewlines(proper: ParsedSource) {
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

  private _filterSections(proper: Proper) {
    const notVisible = (sectionId: string): boolean =>
      !(sectionId in VISIBLE_SECTIONS);

    const isExcluded = (properId: string, sectionId: string): boolean => {
      return new Set([properId, ASTERISK]).has(sectionId);
    };

    const getExcludedInterReadingsSections = (
      config: ProperConfig,
      proper: ParsedSource,
    ): string[] => {
      if (
        config.interReadingsSection === GRADUALE &&
        !proper.getSection(GRADUALE)
      ) {
        return [GRADUALE_PASCHAL, TRACTUS];
      }
      if (config.interReadingsSection === GRADUALE_PASCHAL) {
        if (!proper.getSection(GRADUALE_PASCHAL)) {
          return [GRADUALE, TRACTUS];
        }
        return [TRACTUS];
      }
      if (config.interReadingsSection === TRACTUS) {
        if (!proper.getSection(TRACTUS)) {
          return [GRADUALE, GRADUALE_PASCHAL];
        }
        return [GRADUALE_PASCHAL];
      }
      return [];
    };

    const sectionsToRemove: Set<string> = new Set();

    for (const sectionId of Object.keys(proper)) {
      if (notVisible(sectionId) || isExcluded(proper.id, sectionId)) {
        sectionsToRemove.add(sectionId);
      }
    }

    sectionsToRemove.add(
      // @ts-ignore
      ...getExcludedInterReadingsSections(this.config, proper),
    );

    for (const sectionId of sectionsToRemove) {
      proper.popSection(sectionId);
    }

    return proper;
  }

  private _amendSectionsContents(proper: ParsedSource) {
    const gradual = proper.getSection(GRADUALE);

    if (this.config.stripAlleluia && !gradual) {
      const body = gradual.body;

      for (let i = 0; i < body.length; i++) {
        body[i] = body[i].replace(new RegExp(PATTERN_ALLELUIA, "g"), "");
      }
    }

    return proper;
  }

  private _addPrefaces(proper: Proper, lang: string): ParsedSource {
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

  private _resolveConditionals(proper: ParsedSource) {
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
          // Start skipping lines from now on
          omit = true;
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

  _get_full_path(partial_path: string, lang: string = LANGUAGE) {
    // let currentDir = __dirname;
    // const full_path = path.join(
    //   currentDir,
    //   "../resources/divinum-officium-custom",
    //   "web",
    //   "www",
    //   "missa",
    //   DIVOFF_LANG_MAP[lang],
    //   partial_path,
    // );

    const full_path = `./lib/resources/divinum-officium-custom/web/www/missa/${DIVOFF_LANG_MAP[lang]}/${partial_path}`;
    if (!fs.existsSync(full_path)) {
      // const fallback_path = path.join(
      //   currentDir,
      //   "../resources/divinum-officium",
      //   "web",
      //   "www",
      //   "missa",
      //   DIVOFF_LANG_MAP[lang],
      //   partial_path,
      // );

      const fallback_path = `./lib/resources/divinum-officium/web/www/missa/${DIVOFF_LANG_MAP[lang]}/${partial_path}`;
      if (!fs.existsSync(fallback_path)) {
        return;
      }
      console.error(fallback_path);
      return fallback_path;
    }
    console.error(full_path);
    return full_path;
  }

  _get_partial_path() {
    try {
      const [flex, name] = this.proper_id.split(":");

      return `${flex.charAt(0).toUpperCase() + flex.slice(1)}/${name}.txt`;
    } catch (error) {
      console.error(
        "Proper ID should follow format `<flex>:<name>`, e.g. `tempora:Adv1-0`",
      );
    }
  }
}

export { ProperParser };
