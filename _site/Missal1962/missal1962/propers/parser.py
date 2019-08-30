import importlib
import logging
import os
import re

from exceptions import InvalidInput, ProperNotFound
from typing import Tuple, Union

from constants.common import (CUSTOM_DIVOFF_DIR, DIVOFF_DIR, LANGUAGE_LATIN, REFERENCE_REGEX, SECTION_REGEX,
                              EXCLUDE_SECTIONS_IDX, ASTERISK, PATTERN_COMMEMORATION, PREFATIO_COMMUNIS,
                              VISIBLE_SECTIONS, TRACTUS, GRADUALE, GRADUALE_PASCHAL, PATTERN_ALLELUIA)
from propers.models import Proper, Section, ProperConfig, ParsedSource

log = logging.getLogger(__name__)


class ProperParser:
    """
    ProperParser parses files from https://github.com/DivinumOfficium/divinum-officium in its proprietary format
    and represents them as a hierarchy of `propers.models.Proper` and `propers.model.Section` objects.
    """

    proper_id: str = None
    lang: str = None
    config: ProperConfig = None
    translations: dict = {}
    prefaces: dict = {}

    def __init__(self, proper_id: str, lang: str, config: ProperConfig = None):
        self.proper_id: str = proper_id
        self.lang = lang
        self.config = config or ProperConfig()

    def proper_exists(self) -> bool:
        return os.path.exists(self._get_full_path(self._get_partial_path(), self.lang))

    def parse(self) -> Tuple[Proper, Proper]:
        self.translations[self.lang] = importlib.import_module(f'constants.{self.lang}.translation')
        self.translations[LANGUAGE_LATIN] = importlib.import_module(f'constants.{LANGUAGE_LATIN}.translation')
        self.prefaces[self.lang] = self._parse_source('Ordo/Prefationes.txt', self.lang)
        self.prefaces[LANGUAGE_LATIN] = self._parse_source('Ordo/Prefationes.txt', lang=LANGUAGE_LATIN)
        partial_path = self._get_partial_path()
        try:
            proper_vernacular: Proper = self._parse_proper_source(partial_path, self.lang)
            proper_latin: Proper = self._parse_proper_source(partial_path, LANGUAGE_LATIN)
        except FileNotFoundError as e:
            raise ProperNotFound(f'Proper `{e.filename}` not found.')
        return proper_vernacular, proper_latin

    def _parse_proper_source(self, partial_path: str, lang, lookup_section=None) -> Proper:
        """
        Read the file and organize the content as a list of dictionaries
        where `[Section]` becomes an `id` key and each line below - an item of a `body` list.
        Resolve references like `@Sancti/02-02:Evangelium`.
        """

        parsed_source: ParsedSource = self._parse_source(partial_path, lang, lookup_section)
        proper = Proper(self.proper_id, parsed_source)

        # Reference in Rule section in 'vide' or 'ex' clause - load all sections
        # from the referenced file and get sections that are not explicitly defined in the current proper.
        vide = proper.get_rule('vide')
        if vide:
            nested_path = self._get_full_path(f'{vide}.txt', lang)
            proper.merge(self._parse_source(nested_path, lang=lang))

        # Moving data from "Comment" section up as direct properties of a Proper object
        parsed_comment: dict = self._parse_comment(proper.pop_section('Comment'))
        proper.title = parsed_comment['title']
        proper.description = parsed_comment['description']
        proper.additional_info = parsed_comment['additional_info']
        if not proper.rank:
            # rank should be inferred from provided `proper_id`, otherwise try to get it from the comment section
            proper.rank = parsed_comment['rank']

        proper = self._add_prefaces(proper, lang)
        proper = self._filter_sections(proper)
        proper = self._amend_sections_contents(proper)
        proper = self._translate_section_titles(proper, lang)

        return proper

    def _parse_source(self, partial_path: str, lang, lookup_section=None) -> ParsedSource:
        """
        Read the file and organize the content as a list of dictionaries
        where `[Section]` becomes an `id` key and each line below - an item of a `body` list.
        Resolve references like `@Sancti/02-02:Evangelium`.
        """
        parsed_source: ParsedSource = ParsedSource()
        section_name: str = None
        concat_line: bool = False
        full_path: str = self._get_full_path(partial_path, lang)
        with open(full_path) as fh:
            for itr, ln in enumerate(fh):
                ln = ln.strip()

                if section_name is None and ln == '':
                    # Skipping empty lines in the beginning of the file
                    continue

                if ln.strip() == '!':
                    # Skipping lines containing exclamation mark only
                    continue

                if section_name is None and REFERENCE_REGEX.match(ln):
                    # reference outside any section as a first non-empty line - load all sections
                    # from the referenced file and continue with the sections from the current one.
                    path_bit, _, _ = REFERENCE_REGEX.findall(ln)[0]
                    # Recursively read referenced file
                    nested_path: str = self._get_full_path(f'{path_bit}.txt', lang) if path_bit else partial_path
                    parsed_source.merge(self._parse_source(nested_path, lang=lang))
                    continue

                ln = self._normalize(ln, lang)

                if re.search(SECTION_REGEX, ln):
                    section_name: str = re.sub(SECTION_REGEX, '\\1', ln)

                if not lookup_section or lookup_section == section_name:
                    if re.match(SECTION_REGEX, ln):
                        parsed_source.set_section(section_name, Section(section_name))
                    else:
                        if REFERENCE_REGEX.match(ln):
                            path_bit, nested_section_name, substitution = REFERENCE_REGEX.findall(ln)[0]
                            if path_bit:
                                # Reference to external file - parse it recursively
                                nested_path: str = self._get_full_path(path_bit + '.txt', lang) \
                                    if path_bit else partial_path
                                nested_proper: Proper = self._parse_source(
                                    nested_path, lang=lang, lookup_section=nested_section_name)
                                nested_section = nested_proper.get_section(nested_section_name)
                                if nested_section is not None:
                                    parsed_source.get_section(section_name).extend_body(nested_section.body)
                                else:
                                    log.warning("Section `%s` referenced from `%s` is missing in `%s`",
                                                nested_section_name, full_path, nested_path)
                            else:
                                # Reference to the other section in current file
                                nested_section_body = parsed_source.get_section(nested_section_name).body
                                parsed_source.get_section(section_name).extend_body(nested_section_body)

                        else:
                            # Finally, a regular line...
                            # Line ending with `~` indicates that the next line should be treated as its continuation
                            appendln: str = ln.replace('~', ' ')
                            if section_name not in parsed_source.keys():
                                parsed_source.set_section(section_name, Section(section_name))
                            if concat_line:
                                parsed_source.get_section(section_name).body[-1] += appendln
                            else:
                                parsed_source.get_section(section_name).append_to_body(appendln)
                            concat_line = True if ln.endswith('~') else False

        parsed_source = self._strip_newlines(parsed_source)
        parsed_source = self._resolve_conditionals(parsed_source)
        return parsed_source

    @staticmethod
    def _parse_comment(comment: Union[None, Section]) -> dict:
        parsed_comment = {
            "title": None,
            "description": "",
            "rank": None,
            "additional_info": []
        }
        if comment is None:
            return parsed_comment
        for ln in comment.get_body():
            if ln.startswith('#'):
                parsed_comment['title'] = re.split("[–—-]", ln.strip("#"), 1)[-1].strip()
            elif ln.strip().startswith('*') and ln.endswith('*'):
                info_item = ln.replace('*', '')
                try:
                    parsed_comment['rank'] = int(info_item.split(' ')[0])
                except ValueError:
                    if PATTERN_COMMEMORATION in info_item.lower():
                        parsed_comment['rank'] = 4
                    else:
                        parsed_comment['additional_info'].append(info_item)
            else:
                parsed_comment['description'] += ln + '\n'
        return parsed_comment

    def _normalize(self, ln, lang):
        for r, s in self.translations[lang].transformations:
            ln = re.sub(r, s.get(lang, s.get(None)), ln)
        return ln

    @staticmethod
    def _strip_newlines(proper):
        for section in proper.values():
            while section.body and not section.body[-1]:
                section.body.pop(-1)
        return proper

    def _filter_sections(self, proper):

        def not_visible(section_id):
            return section_id not in VISIBLE_SECTIONS

        def is_excluded(proper_id, section_id):
            return bool({proper_id, ASTERISK}.intersection(EXCLUDE_SECTIONS_IDX.get(section_id, set())))

        def get_excluded_inter_readings_sections(config, proper):
            if config.inter_readings_section == GRADUALE and proper.get_section(GRADUALE) is not None:
                return [GRADUALE_PASCHAL, TRACTUS]
            elif config.inter_readings_section == GRADUALE_PASCHAL:
                if proper.get_section(GRADUALE_PASCHAL) is not None:
                    return [GRADUALE, TRACTUS]
                else:
                    return [TRACTUS]
            elif config.inter_readings_section == TRACTUS:
                if proper.get_section(TRACTUS) is not None:
                    return [GRADUALE, GRADUALE_PASCHAL]
                else:
                    return [GRADUALE_PASCHAL]
            return []

        sections_to_remove = set()
        for section_id in list(proper.keys()):
            if not_visible(section_id) or is_excluded(proper.id, section_id):
                sections_to_remove.add(section_id)
        sections_to_remove.update(get_excluded_inter_readings_sections(self.config, proper))

        for section_id in sections_to_remove:
            proper.pop_section(section_id)

        return proper

    def _amend_sections_contents(self, proper):
        gradual = proper.get_section(GRADUALE)
        if self.config.strip_alleluia is True and gradual is not None:
            body = gradual.body
            for i, line in enumerate(body):
                body[i] = re.sub(PATTERN_ALLELUIA, "", line)
        return proper

    def _translate_section_titles(self, proper, lang):
        sections_ids = proper.keys()
        section_labels = {}
        section_labels.update(self.translations[lang].section_labels)
        if 'GradualeL1' in sections_ids:
            section_labels.update(self.translations[lang].section_labels_multi)

        for section in proper.values():
            section.set_label(section_labels.get(section.id, section.id))
        return proper

    def _add_prefaces(self, proper, lang):
        preface_name = self.config.preface or proper.get_rule('preface') or None
        if preface_name is None and 'Prefatio' in proper.keys():
            return proper
        preface_item = self.prefaces[lang].get_section(preface_name)
        if preface_item is None:
            preface_item = self.prefaces[lang].get_section(PREFATIO_COMMUNIS)
        proper.set_section('Prefatio', Section('Prefatio', body=preface_item.body))
        return proper

    @staticmethod
    def _resolve_conditionals(proper):
        for section_name, section in proper.items():
            new_content = []
            omit = False
            iter_body = iter(section.body)
            for i, ln in enumerate(iter_body):
                if '(sed rubrica 1960 dicuntur)' in ln:
                    # delete previous line; do not append current one
                    del new_content[i - 1]
                    continue
                if '(rubrica 1570 aut rubrica 1910 aut rubrica divino afflatu dicitur)' in ln:
                    # skip next line; do not append current one
                    next(iter_body)
                    continue
                if '(deinde dicuntur)' in ln or '(sed communi Summorum Pontificum dicitur)' in ln:
                    # start skipping lines from now on
                    omit = True
                    continue
                if '(sed rubrica 1955 aut rubrica 1960 haec versus omittuntur)' in ln:
                    # stop skipping lines from now on
                    omit = False
                    continue
                if omit:
                    continue
                if '(dicitur)' in ln or '(communi Summorum Pontificum loco huius versus dicitur)' in ln:
                    continue
                new_content.append(ln)
            proper.get_section(section_name).body = new_content
        return proper

    @staticmethod
    def _get_full_path(partial_path, lang):
        full_path = os.path.join(CUSTOM_DIVOFF_DIR, 'web', 'www', 'missa', lang, partial_path)
        if not os.path.exists(full_path):
            full_path = os.path.join(DIVOFF_DIR, 'web', 'www', 'missa', lang, partial_path)
        return full_path

    def _get_partial_path(self):
        try:
            return f'{self.proper_id.split(":")[0].capitalize()}/{self.proper_id.split(":")[1]}.txt'
        except IndexError:
            raise InvalidInput("Proper ID should follow format `<flex>:<name>`, e.g. `tempora:Adv1-0`")