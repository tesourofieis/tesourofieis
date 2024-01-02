class Section {
  id: string | null = null;
  label: string | null = null;
  body: string[] = [];

  constructor(
    id: string,
    body: string[] | null = null,
    label: string | null = null,
  ) {
    this.id = id;
    this.body = body || [];
    this.label = label || id;
  }

  getBody(): string[] {
    return this.body;
  }

  setLabel(label: string): void {
    this.label = label;
  }

  extendBody(bodyPart: string[]): void {
    this.body = [...this.body, ...bodyPart];
  }

  appendToBody(bodyPart: string): void {
    this.body.push(bodyPart);
  }

  toString(): string {
    const bodyShort = this.body.join(" ").substring(0, 32);
    return `${this.id} (${this.label}) ${bodyShort}`;
  }
}

class ParsedSource {
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

export { ParsedSource, Section };
